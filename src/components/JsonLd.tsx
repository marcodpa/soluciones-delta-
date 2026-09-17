import { SERVICES, type ServiceData } from "@/lib/services-data";
import { BUSINESS_NAME, HOME_DESCRIPTION, SITE_URL } from "@/lib/seo";
import { translateText, localePath, type Locale } from "@/lib/i18n/translate";

type Crumb = { name: string; path: string };

export default function JsonLd({ service, breadcrumbs = [], locale = "es" }: { service?: ServiceData; breadcrumbs?: Crumb[]; locale?: Locale }) {
  const organization = {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    description: translateText(HOME_DESCRIPTION, locale),
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/vacuum-truck.webp`,
    telephone: "+58-424-6472446",
    email: "delta@soluciones-delta.com",
    taxID: "J-50735393-1",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 13 con Av 5, Local 26A-162, Oficina 2, Sector Manzanillo",
      addressLocality: "San Francisco", addressRegion: "Zulia", addressCountry: "VE",
    },
    areaServed: { "@type": "Country", name: "Venezuela" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    ],
    contactPoint: {
      "@type": "ContactPoint", telephone: "+58-424-6472446",
      contactType: "customer service", availableLanguage: "es",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog", name: locale === "en" ? "Oilfield and industrial services" : "Servicios petroleros e industriales",
      itemListElement: SERVICES.map(item => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", "@id": `${SITE_URL}/servicios/${item.slug}#service`,
          name: translateText(item.title, locale), url: `${SITE_URL}${localePath(`/servicios/${item.slug}`, locale)}`,
          provider: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    },
  };
  const graph: Record<string, unknown>[] = [organization, {
    "@type": "WebSite", "@id": `${SITE_URL}/#website`,
    name: BUSINESS_NAME, url: SITE_URL, inLanguage: locale === "en" ? "en" : "es-VE",
    publisher: { "@id": `${SITE_URL}/#organization` },
  }];
  if (breadcrumbs.length > 1) graph.push({
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem", position: index + 1, name: translateText(crumb.name, locale),
      item: new URL(localePath(crumb.path, locale), SITE_URL).href,
    })),
  });
  if (service) graph.push({
    "@type": "Service", "@id": `${SITE_URL}/servicios/${service.slug}#service`,
    name: translateText(service.title, locale), description: translateText(service.summary, locale),
    url: `${SITE_URL}${localePath(`/servicios/${service.slug}`, locale)}`, serviceType: translateText(service.tag, locale),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Venezuela" },
    hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
  });
  if (service && service.faq.length > 0) graph.push({
    "@type": "FAQPage", "@id": `${SITE_URL}/servicios/${service.slug}#faq`,
    mainEntity: service.faq.map(item => ({
      "@type": "Question", name: translateText(item.q, locale),
      acceptedAnswer: { "@type": "Answer", text: translateText(item.a, locale) },
    })),
  });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
  }} />;
}
