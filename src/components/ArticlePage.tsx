import { localizeTree, translateText, localePath, type Locale } from "@/lib/i18n/translate";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, ChevronDown, Clock3, BookOpen } from "lucide-react";
import styles from "./Editorial.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ARTICLES, getArticleBySlug } from "@/lib/articles-data";
import { getServiceBySlug } from "@/lib/services-data";
import { pageMetadata, SITE_URL, BUSINESS_NAME } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }>; locale?: Locale };

export default async function ArticuloPage({ params, locale = "es" }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const related = ARTICLES.filter(item => item.slug !== article.slug).slice(0, 3);
  const service = getServiceBySlug(article.serviceSlug);
  const url = `${SITE_URL}${localePath(`/articulos/${article.slug}`, locale)}`;
  const fecha = new Date(`${article.published}T12:00:00`).toLocaleDateString(locale === "en" ? "en-US" : "es-VE", { day: "numeric", month: "long", year: "numeric" });

  const articleLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", "@id": `${url}#article`, headline: translateText(article.title, locale), description: translateText(article.description, locale),
        image: `${SITE_URL}${article.cover}`, datePublished: article.published, dateModified: article.published,
        inLanguage: locale === "en" ? "en" : "es-VE", mainEntityOfPage: url,
        author: { "@type": "Organization", name: BUSINESS_NAME, url: SITE_URL },
        publisher: { "@type": "Organization", name: BUSINESS_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
      },
      {
        "@type": "FAQPage", "@id": `${url}#faq`,
        mainEntity: article.faq.map(item => ({ "@type": "Question", name: translateText(item.q, locale), acceptedAnswer: { "@type": "Answer", text: translateText(item.a, locale) } })),
      },
    ],
  };


  return localizeTree(<>
    <JsonLd locale={locale} breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Artículos", path: "/articulos" }, { name: article.title, path: `/articulos/${article.slug}` }]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd).replace(/</g, "\\u003c") }} />
    <Navbar />
    <main id="main-content" className={styles.page}>
      <article>
        <header className={styles.hero}>
          <div className={`site-container ${styles.heroGrid}`}>
            <div>
              <nav aria-label="Ruta de navegación" className={styles.breadcrumbs}><Link href="/">Inicio</Link><span>/</span><Link href="/articulos">Artículos</Link></nav>
              <span className={styles.eyebrow}>{article.eyebrow}</span>
              <h1>{article.title}</h1>
              <div className={styles.heroMeta}><span><Clock3 size={15} aria-hidden="true" /> {article.readingMinutes} min de lectura</span><time dateTime={article.published}>{fecha}</time><span>Equipo técnico de Soluciones Delta</span></div>
            </div>
            <figure className={styles.heroPhoto}><Image src={article.cover} alt={article.coverAlt} fill priority sizes="(max-width:760px) 100vw, 45vw" /></figure>
          </div>
        </header>
        <div className={`site-container ${styles.readingLayout}`}>
          <aside className={styles.readingSidebar}>
            <nav className={styles.toc} aria-label="Índice del artículo"><span className={styles.eyebrow}>En esta guía</span><ol>{article.sections.map((section,i) => <li key={section.heading}><a href={`#seccion-${i+1}`}>{section.heading}</a></li>)}<li><a href="#preguntas">Preguntas frecuentes</a></li></ol></nav>
            <div className={styles.sidebarHelp}><BookOpen size={24} color="#167b34" aria-hidden="true" /><p>¿Quiere llevarlo a su operación?</p><Link href="/contacto" className={styles.textLink}>Hablemos <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
          </aside>
          <div className={styles.readingBody}>
            <p className={styles.lead}>{article.lead}</p>
            {article.sections.map((section,i) => <section key={section.heading} id={`seccion-${i+1}`} className={styles.bodySection}>
              <h2>{section.heading}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}
              {section.list && <ul>{section.list.map(item => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul>}
            </section>)}
            <section className={styles.faq} id="preguntas"><h2>Preguntas frecuentes</h2>{article.faq.map(item => <details key={item.q}><summary>{item.q}<ChevronDown size={18} aria-hidden="true" /></summary><p>{item.a}</p></details>)}</section>
          </div>
        </div>
        {service && <aside className={styles.serviceCta}><div className="site-container"><div><span className={styles.eyebrow}>Servicio relacionado</span><h2>{service.title}</h2><p>{service.subtitle}</p></div><Link href={`/servicios/${service.slug}`} className="btn-primary">{article.serviceLabel}<ArrowUpRight size={18} aria-hidden="true" /></Link></div></aside>}
      </article>
      <section className={`${styles.section} ${styles.library}`} aria-labelledby="related-articles"><div className="site-container"><div className={styles.sectionHeading}><h2 id="related-articles">Siga explorando.</h2><Link href="/articulos" className={styles.textLink}>Todas las guías <ArrowUpRight size={17} aria-hidden="true" /></Link></div><div className={styles.cards}>{related.map(item => <Link key={item.slug} href={`/articulos/${item.slug}`} className={styles.card}><div className={styles.cardPhoto}><Image src={item.cover} alt={item.coverAlt} fill sizes="(max-width:760px) 100vw, 33vw" /></div><div className={styles.cardCopy}><div className={styles.cardMeta}>{item.eyebrow}</div><h3>{item.title}</h3><span className={styles.textLink}>Leer artículo <ArrowUpRight size={17} aria-hidden="true" /></span></div></Link>)}</div></div></section>
    </main><Footer />
  </>,locale);
}
