"""Validate rendered SEO metadata and crawl routes without browser dependencies.
Usage: python scripts/seo-audit.py http://localhost:3100
"""
import concurrent.futures
import json
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin

ORIGIN = 'https://soluciones-delta.com'
PATHS = ['/', '/servicios', '/nosotros', '/contacto',
         '/servicios/bombeo-de-crudo', '/servicios/trasegado-vacuum',
         '/servicios/frac-tanks', '/servicios/manejo-de-desechos',
         '/servicios/alquiler-calderas-inyeccion-vapor', '/servicios/limpieza-industrial-hidrojet']
BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3100').rstrip('/')

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ''
        self.in_title = False
        self.canonicals = []
        self.meta = {}
        self.h1 = 0
        self.h1_text = ''
        self.in_h1 = False
        self.links = set()
        self.json_text = None
        self.structured = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'title': self.in_title = True
        if tag == 'h1':
            self.h1 += 1
            self.in_h1 = True
        if tag == 'a' and a.get('href', '').startswith('/'):
            self.links.add(a['href'].split('#')[0].split('?')[0])
        if tag == 'link' and a.get('rel') == 'canonical': self.canonicals.append(a.get('href'))
        if tag == 'meta': self.meta[a.get('name', a.get('property'))] = a.get('content', '')
        if tag == 'script' and a.get('type') == 'application/ld+json': self.json_text = ''

    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.in_h1: self.h1_text += data
        if self.json_text is not None: self.json_text += data

    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'h1': self.in_h1 = False
        if tag == 'script' and self.json_text is not None:
            self.structured.append(json.loads(self.json_text))
            self.json_text = None

def fetch(path):
    request = urllib.request.Request(BASE + path, headers={'User-Agent': 'Delta-SEO-Audit/1.0'})
    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            return response.status, response.read().decode('utf-8'), dict(response.headers)
    except urllib.error.HTTPError as error:
        return error.code, '', dict(error.headers)

def audit(path):
    status, html, headers = fetch(path)
    page = Page()
    page.feed(html)
    expected = urljoin(ORIGIN, path)
    nodes = [node for block in page.structured for node in block.get('@graph', [block])]
    issues = []
    def check(ok, issue):
        if not ok: issues.append(issue)
    check(status == 200, f'HTTP {status}')
    check(page.h1 == 1, f'{page.h1} H1 headings')
    check([url.rstrip("/") for url in page.canonicals] == [expected.rstrip("/")], 'Incorrect or duplicate canonical')
    check(page.title.count('Soluciones Delta') == 1, 'Missing or duplicated title brand')
    check(bool(page.meta.get('description')), 'Missing description')
    check('noindex' not in page.meta.get('robots', '').lower(), 'Page is noindex')
    check('noindex' not in headers.get('X-Robots-Tag', '').lower(), 'HTTP noindex')
    check(page.meta.get('og:url', '').rstrip('/') == expected.rstrip('/'), 'Incorrect Open Graph URL')
    check(page.meta.get('og:title') == page.title, 'Open Graph title mismatch')
    check(page.meta.get('twitter:title') == page.title, 'Twitter title mismatch')
    check(bool(page.meta.get('og:image')) and bool(page.meta.get('twitter:image')), 'Missing sharing image')
    check('google-site-verification-placeholder' not in html, 'Placeholder verification')
    check(any(node.get('@type') == 'LocalBusiness' for node in nodes), 'Missing business data')
    check(not any(node.get('@type') == 'FAQPage' for node in nodes), 'Unexpected FAQ markup')
    organization = next((node for node in nodes if node.get('@type') == 'LocalBusiness'), {})
    check(len(organization.get('hasOfferCatalog', {}).get('itemListElement', [])) == 6, 'Incomplete service catalog')
    if path != '/':
        breadcrumb = next((node for node in nodes if node.get('@type') == 'BreadcrumbList'), {})
        crumbs = breadcrumb.get('itemListElement', [])
        check(bool(crumbs) and crumbs[-1].get('item') == expected, 'Incorrect breadcrumbs')
    if path.startswith('/servicios/'):
        check(any(node.get('@type') == 'Service' and node.get('url') == expected for node in nodes), 'Missing service data')
        check(len([link for link in page.links if link.startswith('/servicios/') and link != path]) >= 3, 'Insufficient crawlable links to complementary services')
    check(not (page.links - set(PATHS) - {''}), f'Unexpected internal routes: {page.links - set(PATHS) - {""}}')
    if path == '/':
        check('visibility:visible' in html and 'Respaldo técnico desde nuestra sede en Zulia.' in html, 'Hero text unavailable in initial HTML')
        check('fixed inset-0 z-[200]' not in html, 'Blocking hero loader')
    return {'path': path, 'status': status, 'title': page.title, 'h1': page.h1_text, 'internal_links': sorted(page.links), 'canonical': page.canonicals,
            'description': page.meta.get('description'), 'og_image': page.meta.get('og:image'),
            'twitter_image': page.meta.get('twitter:image'), 'issues': issues}

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(audit, PATHS))
failures = [f'{row["path"]}: {issue}' for row in results for issue in row['issues']]
if len({row['title'] for row in results}) != len(results):
    failures.append('Duplicate page titles')
status, sitemap, _ = fetch('/sitemap.xml')
urls = [element.text for element in ET.fromstring(sitemap).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
if status != 200 or set(urls) != {urljoin(ORIGIN, path) for path in PATHS} or len(urls) != 10:
    failures.append('Incorrect sitemap URLs')
status, robots, _ = fetch('/robots.txt')
if status != 200 or 'Disallow: /_next/' in robots or f'Sitemap: {ORIGIN}/sitemap.xml' not in robots:
    failures.append('Incorrect robots.txt')
for image in {row[key] for row in results for key in ['og_image', 'twitter_image'] if row[key]}:
    if not image.startswith(ORIGIN):
        failures.append(f'Unexpected image origin: {image}')
        continue
    path = image[len(ORIGIN):]
    with urllib.request.urlopen(BASE + path, timeout=60) as response:
        if response.status != 200 or not response.headers.get('Content-Type', '').startswith('image/'):
            failures.append(f'Invalid sharing image: {path}')
status, _, _ = fetch('/servicios/servicio-inexistente-seo-audit')
if status != 404: failures.append(f'Unknown service returned {status} instead of 404')
Path('output/seo').mkdir(parents=True, exist_ok=True)
Path('output/seo/despues.json').write_text(json.dumps({'pages': results, 'failures': failures}, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps({'pages_checked': len(results), 'sitemap_urls': len(urls), 'failures': failures}, ensure_ascii=False, indent=2))
sys.exit(1 if failures else 0)
