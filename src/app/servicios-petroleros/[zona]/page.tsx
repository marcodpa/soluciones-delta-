import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ZONAS, getZonaBySlug } from "@/lib/zonas-data";
import { SERVICES } from "@/lib/services-data";
import { pageMetadata, SITE_URL, BUSINESS_NAME } from "@/lib/seo";

type Props = { params: Promise<{ zona: string }> };

export function generateStaticParams() {
  return ZONAS.map(zona => ({ zona: zona.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { zona: slug } = await params;
  const zona = getZonaBySlug(slug);
  if (!zona) notFound();
  return pageMetadata(zona.seoTitle, zona.description, `/servicios-petroleros/${slug}`);
}

const CHECK = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-1" aria-hidden="true">
    <circle cx="9" cy="9" r="8" stroke="rgba(26,140,60,0.35)" />
    <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#167b34" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function ZonaPage({ params }: Props) {
  const { zona: slug } = await params;
  const zona = getZonaBySlug(slug);
  if (!zona) notFound();
  const path = `/servicios-petroleros/${zona.slug}`;
  const url = `${SITE_URL}${path}`;
  const otras = ZONAS.filter(z => z.slug !== zona.slug);

  const zonaLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service", "@id": `${url}#service`,
        name: zona.seoTitle, description: zona.description, url,
        serviceType: "Servicios petroleros",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": zona.areaType, name: zona.nombre, containedInPlace: { "@type": "Country", name: "Venezuela" } },
        hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: `Servicios petroleros en ${zona.nombre}`,
          itemListElement: SERVICES.map(s => ({ "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/servicios/${s.slug}#service` } })),
        },
      },
      {
        "@type": "FAQPage", "@id": `${url}#faq`,
        mainEntity: zona.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
      },
    ],
  };

  return (
    <>
      <JsonLd breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Servicios", path: "/servicios" }, { name: zona.seoTitle, path }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(zonaLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <header className="relative overflow-hidden bg-black flex flex-col justify-end" style={{ minHeight: "clamp(520px, 70vh, 720px)" }}>
          <Image src={zona.hero} alt={zona.heroAlt} fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,12,7,0.85) 0%, rgba(5,12,7,0.45) 45%, rgba(5,12,7,0.88) 100%)" }} />
          <div className="site-container relative pt-40 pb-12 lg:pb-16">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px] mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              <Link href="/" className="hover:text-[#30d158] transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/servicios" className="hover:text-[#30d158] transition-colors">Servicios</Link>
              <span>/</span>
              <span className="text-white/80">{zona.nombre}</span>
            </nav>
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#30d158]">{zona.eyebrow}</span>
            <h1 className="text-[clamp(32px,4.6vw,56px)] font-bold tracking-tight leading-[1.08] text-white mt-3 max-w-4xl" style={{ textWrap: "balance" }}>{zona.h1}</h1>
            <p className="text-[17px] lg:text-[19px] leading-[1.65] mt-6 max-w-3xl" style={{ color: "rgba(255,255,255,0.78)" }}>{zona.lead}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contacto" className="btn-primary">Solicitar cotización</Link>
              <a href="https://wa.me/584246472446" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-colors" style={{ border: "1.5px solid rgba(255,255,255,0.35)" }}>WhatsApp 24/7</a>
            </div>
          </div>
        </header>

        {/* ── COBERTURA + TEXTO ── */}
        <section className="py-16 lg:py-24">
          <div className="site-container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-start">
            <div className="flex flex-col gap-12">
              {zona.sections.map((section, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <h2 className="text-[clamp(22px,2.6vw,32px)] font-bold tracking-tight text-[#1d1d1f]" style={{ textWrap: "balance" }}>{section.heading}</h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-[17px] text-[#3a3a3c] leading-[1.75]">{p}</p>
                  ))}
                  {section.list && (
                    <ul className="flex flex-col gap-2.5 mt-1">
                      {section.list.map((item, k) => (
                        <li key={k} className="flex items-start gap-3 text-[16px] text-[#3a3a3c] leading-relaxed">{CHECK}<span>{item}</span></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <aside className="rounded-3xl p-8 lg:p-9 lg:sticky lg:top-28" style={{ background: "#f5f5f7", border: "1px solid #e5e5ea" }}>
              <span className="section-label">Cobertura</span>
              <h2 className="text-[22px] font-bold tracking-tight text-[#1d1d1f] mt-2">Dónde atendemos en {zona.nombre}</h2>
              <ul className="flex flex-col gap-3 mt-5">
                {zona.cobertura.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-[#3a3a3c] leading-relaxed">{CHECK}<span>{item}</span></li>
                ))}
              </ul>
              <p className="text-[13px] text-[#6e6e73] mt-6">Sede: Calle 13 con Av. 5, sector Manzanillo, San Francisco, Zulia. Operación 24 horas, 7 días.</p>
            </aside>
          </div>
        </section>

        {/* ── SERVICIOS ── */}
        <section className="py-16 lg:py-20" style={{ background: "#0d1f14" }}>
          <div className="site-container">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#30d158]">Lo que hacemos</span>
            <h2 className="text-[clamp(26px,3.2vw,40px)] font-bold tracking-tight text-white mt-3" style={{ textWrap: "balance" }}>Nuestros servicios petroleros en {zona.nombre}</h2>
            <div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Link key={s.slug} href={`/servicios/${s.slug}`} className="group flex flex-col gap-3 rounded-2xl p-6 transition-colors" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="text-[11px] font-bold tracking-widest text-[#30d158]">{String(i + 1).padStart(2, "0")} · {s.tag}</span>
                  <span className="text-[19px] font-bold text-white leading-tight group-hover:text-[#30d158] transition-colors">{s.title}</span>
                  <span className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>{s.subtitle}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 lg:py-24">
          <div className="site-container max-w-4xl">
            <h2 className="text-[clamp(22px,2.6vw,32px)] font-bold tracking-tight text-[#1d1d1f]">Preguntas frecuentes sobre nuestros servicios en {zona.nombre}</h2>
            <div className="flex flex-col gap-3 mt-8">
              {zona.faq.map((item, i) => (
                <details key={i} className="group rounded-2xl overflow-hidden bg-white" style={{ border: "1.5px solid #e5e5ea" }}>
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                    <span className="text-[15px] font-semibold text-[#1d1d1f] pr-4">{item.q}</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true"><path d="M4 7l5 5 5-5" stroke="#167b34" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </summary>
                  <div className="px-6 pb-6 -mt-1"><p className="text-[14.5px] text-[#6e6e73] leading-relaxed">{item.a}</p></div>
                </details>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-[#6e6e73]">
              <span className="font-semibold text-[#1d1d1f]">También atendemos:</span>
              {otras.map(z => (
                <Link key={z.slug} href={`/servicios-petroleros/${z.slug}`} className="text-[#167b34] underline underline-offset-4 hover:text-[#22a84a]">{z.nombre}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pb-20 lg:pb-28">
          <div className="site-container">
            <div className="rounded-3xl p-8 lg:p-12 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #167b34 0%, #0f5a26 100%)" }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(255,255,255,0.14) 0%, transparent 60%)" }} />
              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h2 className="text-[clamp(24px,3vw,36px)] font-bold tracking-tight text-white leading-tight" style={{ textWrap: "balance" }}>¿Necesita un servicio petrolero en {zona.nombre}?</h2>
                  <p className="text-[16px] mt-3 max-w-2xl" style={{ color: "rgba(255,255,255,0.85)" }}>Cuéntenos el trabajo, la ubicación y las fechas. {BUSINESS_NAME} responde con disponibilidad y propuesta en el día.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contacto" className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#167b34] hover:bg-[#f2f2f2] transition-colors">Solicitar cotización</Link>
                  <a href="tel:+584246472446" className="inline-flex items-center rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-colors" style={{ border: "1.5px solid rgba(255,255,255,0.45)" }}>+58 424-6472446</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
