import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ARTICLES, getArticleBySlug } from "@/lib/articles-data";
import { getServiceBySlug } from "@/lib/services-data";
import { pageMetadata, SITE_URL, BUSINESS_NAME } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return pageMetadata(article.seoTitle, article.description, `/articulos/${slug}`);
}

export default async function ArticuloPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const service = getServiceBySlug(article.serviceSlug);
  const url = `${SITE_URL}/articulos/${article.slug}`;
  const fecha = new Date(`${article.published}T12:00:00`).toLocaleDateString("es-VE", { day: "numeric", month: "long", year: "numeric" });

  const articleLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", "@id": `${url}#article`, headline: article.title, description: article.description,
        image: `${SITE_URL}${article.cover}`, datePublished: article.published, dateModified: article.published,
        inLanguage: "es-VE", mainEntityOfPage: url,
        author: { "@type": "Organization", name: BUSINESS_NAME, url: SITE_URL },
        publisher: { "@type": "Organization", name: BUSINESS_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
      },
      {
        "@type": "FAQPage", "@id": `${url}#faq`,
        mainEntity: article.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
      },
    ],
  };

  return (
    <>
      <JsonLd breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Artículos", path: "/articulos" }, { name: article.title, path: `/articulos/${article.slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main>
        <article>
          <header className="pt-36 pb-10" style={{ background: "linear-gradient(180deg, #eef1f0 0%, #ffffff 100%)" }}>
            <div className="site-container max-w-4xl">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px] text-[#6e6e73] mb-6">
                <Link href="/" className="hover:text-[#1a8c3c] transition-colors">Inicio</Link>
                <span>/</span>
                <Link href="/articulos" className="hover:text-[#1a8c3c] transition-colors">Artículos</Link>
              </nav>
              <span className="section-label">{article.eyebrow}</span>
              <h1 className="text-[clamp(30px,4vw,50px)] font-bold tracking-tight leading-[1.1] text-[#1d1d1f] mt-3" style={{ textWrap: "balance" }}>{article.title}</h1>
              <p className="text-[13px] text-[#6e6e73] mt-4">
                Publicado el <time dateTime={article.published}>{fecha}</time> · {article.readingMinutes} min de lectura · Equipo técnico de Soluciones Delta
              </p>
              <p className="text-[19px] text-[#3a3a3c] leading-[1.65] mt-6">{article.lead}</p>
            </div>
          </header>

          <div className="site-container max-w-4xl">
            <figure className="relative rounded-3xl overflow-hidden my-4" style={{ aspectRatio: "16 / 9" }}>
              <Image src={article.cover} alt={article.coverAlt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 900px" />
            </figure>

            <div className="flex flex-col gap-12 py-12">
              {article.sections.map((section, i) => (
                <section key={i} className="flex flex-col gap-4">
                  <h2 className="text-[clamp(22px,2.6vw,30px)] font-bold tracking-tight text-[#1d1d1f]" style={{ textWrap: "balance" }}>{section.heading}</h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-[17px] text-[#3a3a3c] leading-[1.75]">{p}</p>
                  ))}
                  {section.list && (
                    <ul className="flex flex-col gap-2.5 mt-1">
                      {section.list.map((item, k) => (
                        <li key={k} className="flex items-start gap-3 text-[16px] text-[#3a3a3c] leading-relaxed">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-1"><circle cx="9" cy="9" r="8" stroke="rgba(26,140,60,0.35)"/><path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#1a8c3c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="flex flex-col gap-4">
                <h2 className="text-[clamp(22px,2.6vw,30px)] font-bold tracking-tight text-[#1d1d1f]">Preguntas frecuentes</h2>
                <div className="flex flex-col gap-3">
                  {article.faq.map((item, i) => (
                    <details key={i} className="group rounded-2xl overflow-hidden bg-white" style={{ border: "1.5px solid #e5e5ea" }}>
                      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                        <span className="text-[15px] font-semibold text-[#1d1d1f] pr-4">{item.q}</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180"><path d="M4 7l5 5 5-5" stroke="#1a8c3c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </summary>
                      <div className="px-6 pb-6 -mt-1"><p className="text-[14.5px] text-[#6e6e73] leading-relaxed">{item.a}</p></div>
                    </details>
                  ))}
                </div>
              </section>

              {service && (
                <aside className="rounded-3xl p-8 lg:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f14 0%, #0a1a10 100%)" }}>
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 110%, rgba(26,140,60,0.25) 0%, transparent 65%)" }} />
                  <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#30d158]">Servicio relacionado</span>
                      <p className="text-[clamp(20px,2.4vw,28px)] font-bold text-white leading-tight">{service.title}</p>
                      <p className="text-[15px]" style={{ color: "rgba(255,255,255,0.6)" }}>{service.subtitle}</p>
                    </div>
                    <Link href={`/servicios/${service.slug}`} className="btn-primary whitespace-nowrap">{article.serviceLabel}</Link>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
