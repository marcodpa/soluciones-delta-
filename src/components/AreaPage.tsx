import { localizeTree, translateText, localePath, type Locale } from "@/lib/i18n/translate";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, MapPin, ChevronDown } from "lucide-react";
import { getServicePageContent } from "@/lib/service-page-content";
import styles from "./Editorial.module.css";
import area from "./AreaPages.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ZONAS, getZonaBySlug } from "@/lib/zonas-data";
import { SERVICES } from "@/lib/services-data";
import { pageMetadata, SITE_URL, BUSINESS_NAME } from "@/lib/seo";

type Props = { params: Promise<{ zona: string }>; locale?: Locale };

export default async function ZonaPage({ params, locale = "es" }: Props) {
  const { zona: slug } = await params;
  const zona = getZonaBySlug(slug);
  if (!zona) notFound();
  const path = `/servicios-petroleros/${zona.slug}`;
  const url = `${SITE_URL}${localePath(path, locale)}`;
  const otras = ZONAS.filter(z => z.slug !== zona.slug);

  const zonaLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service", "@id": `${url}#service`,
        name: translateText(zona.seoTitle, locale), description: translateText(zona.description, locale), url,
        serviceType: locale === "en" ? "Oilfield services" : "Servicios petroleros",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": zona.areaType, name: zona.nombre, containedInPlace: { "@type": "Country", name: "Venezuela" } },
        hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: (locale === "en" ? "Oilfield services in " : "Servicios petroleros en ") + zona.nombre,
          itemListElement: SERVICES.map(s => ({ "@type": "Offer", itemOffered: { "@id": `${SITE_URL}${localePath("/servicios/"+s.slug, locale)}#service` } })),
        },
      },
      {
        "@type": "FAQPage", "@id": `${url}#faq`,
        mainEntity: zona.faq.map(item => ({ "@type": "Question", name: translateText(item.q, locale), acceptedAnswer: { "@type": "Answer", text: translateText(item.a, locale) } })),
      },
    ],
  };

  return localizeTree(<>
    <JsonLd locale={locale} breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Servicios", path: "/servicios" }, { name: zona.seoTitle, path }]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(zonaLd).replace(/</g, "\\u003c") }} />
    <Navbar />
    <main id="main-content" className={styles.page}>
      <header className={styles.hero}><div className={["site-container",styles.heroGrid].join(" ")}>
        <div><nav aria-label="Ruta de navegación" className={styles.breadcrumbs}><Link href="/">Inicio</Link><span>/</span><Link href="/servicios">Servicios</Link><span>/</span><span aria-current="page">{zona.nombre}</span></nav><span className={styles.eyebrow}>{zona.eyebrow}</span><h1>{zona.h1}</h1><p>{zona.lead}</p><div className={area.heroActions}><Link href="/contacto" className="btn-primary">Solicitar cotización <ArrowUpRight size={17} aria-hidden="true" /></Link><a href="#servicios-zona" className={styles.textLink}>Explorar servicios</a></div></div>
        <figure className={styles.heroPhoto}><Image src={zona.hero} alt={zona.heroAlt} fill priority sizes="(max-width:760px) 100vw, 45vw" /></figure>
      </div></header>
      <section className={area.intro}><div className={["site-container",area.layout].join(" ")}>
        <div className={area.copy}>{zona.sections.map(section => <section key={section.heading} className={styles.bodySection}><h2>{section.heading}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}{section.list && <ul>{section.list.map(item => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul>}</section>)}</div>
        <aside className={area.coverage}><div className={area.map}><Image src="/maps/venezuela-zulia.svg" alt="Venezuela, con el estado Zulia destacado" fill sizes="350px" className="object-contain" /></div><span className={styles.eyebrow}>Cobertura operativa</span><h2>{zona.nombre}</h2><ul>{zona.cobertura.map(item => <li key={item}><MapPin size={16} aria-hidden="true" /><span>{item}</span></li>)}</ul><p>Sede: Calle 13 con Av. 5, sector Manzanillo, San Francisco, Zulia. Operación 24 horas, 7 días.</p><Link href="/contacto">Coordinar un servicio <ArrowUpRight size={17} aria-hidden="true" /></Link></aside>
      </div></section>
      <section id="servicios-zona" className={area.services}><div className="site-container"><div className={styles.sectionHeading}><div><span className={styles.eyebrow}>Lo que hacemos</span><h2>{locale === "en" ? "Oilfield services in " : "Servicios petroleros en "}{zona.nombre}</h2></div><Link href="/servicios" className={styles.textLink}>Todos los servicios <ArrowUpRight size={17} aria-hidden="true" /></Link></div><div className={area.serviceGrid}>{SERVICES.map(service => {
        const hero = getServicePageContent(service.slug)?.hero;
        const src = hero?.kind === "split" ? hero.despues : hero?.src ?? "/vacuum-truck.webp";
        return <Link key={service.slug} href={"/servicios/"+service.slug} className={area.service}><div className={area.servicePhoto}><Image src={src} alt={service.title} fill sizes="120px" /></div><div><h3>{service.title}</h3><p>{service.subtitle}</p></div><ArrowUpRight size={20} aria-hidden="true" /></Link>;
      })}</div></div></section>
      <section className={area.faq}><div className={["site-container",area.faqLayout].join(" ")}><div><span className={styles.eyebrow}>Antes de comenzar</span><h2>Preguntas frecuentes.</h2><p className="mb-5 text-sm text-[#52635b]">También atendemos:</p><nav className={area.locations} aria-label="Otras zonas de cobertura">{otras.map(z => <Link key={z.slug} href={"/servicios-petroleros/"+z.slug}>{z.nombre}</Link>)}</nav></div><div className={[styles.faq,area.faqDetails].join(" ")}>{zona.faq.map(item => <details key={item.q}><summary>{item.q}<ChevronDown size={18} aria-hidden="true" /></summary><p>{item.a}</p></details>)}</div></div></section>
      <section className={styles.serviceCta}><div className="site-container"><div><span className={styles.eyebrow}>Hablemos de su proyecto</span><h2>Su operación, nuestro compromiso.</h2><p>Cuéntenos el trabajo, la ubicación y las fechas para coordinar los equipos y el alcance del servicio.</p></div><Link href="/contacto" className="btn-primary">Solicitar cotización <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>
    </main><Footer />
  </>,locale);
}
