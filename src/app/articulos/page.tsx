import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ARTICLES } from "@/lib/articles-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Artículos sobre servicios petroleros: vacuum, frac tanks y más",
  "Guías prácticas de Soluciones Delta sobre camiones vacuum, frac tanks, recuperación de crudo y limpieza industrial para operaciones petroleras en Venezuela.",
  "/articulos"
);

export default function ArticulosPage() {
  return (
    <>
      <JsonLd breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Artículos", path: "/articulos" }]} />
      <Navbar />
      <main>
        <section className="pt-36 pb-12" style={{ background: "linear-gradient(180deg, #eef1f0 0%, #ffffff 100%)" }}>
          <div className="site-container">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-[#6e6e73] mb-6">
              <Link href="/" className="hover:text-[#1a8c3c] transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-[#1d1d1f] font-medium">Artículos</span>
            </nav>
            <span className="section-label">Guías y artículos</span>
            <h1 className="text-[clamp(32px,4.4vw,56px)] font-bold tracking-tight leading-[1.08] text-[#1d1d1f] mt-3 max-w-3xl" style={{ textWrap: "balance" }}>
              Lo que conviene saber antes de contratar un servicio petrolero
            </h1>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed mt-5 max-w-2xl">
              Respuestas claras, escritas por el equipo técnico de Soluciones Delta, a las preguntas que recibimos
              en campo: cómo funciona un camión vacuum, cuánto almacena un frac tank, cuándo alquilar y cuándo no.
            </p>
          </div>
        </section>

        <section className="py-14 pb-24">
          <div className="site-container grid md:grid-cols-2 gap-8">
            {ARTICLES.map(article => (
              <Link key={article.slug} href={`/articulos/${article.slug}`} className="group flex flex-col rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-1" style={{ border: "1.5px solid #e5e5ea", background: "#ffffff" }}>
                <div className="relative" style={{ aspectRatio: "16 / 9" }}>
                  <Image src={article.cover} alt={article.coverAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="flex flex-col gap-3 p-7">
                  <span className="section-label">{article.eyebrow}</span>
                  <h2 className="text-[22px] font-bold text-[#1d1d1f] leading-snug group-hover:text-[#1a8c3c] transition-colors">{article.title}</h2>
                  <p className="text-[15px] text-[#6e6e73] leading-relaxed">{article.description}</p>
                  <span className="text-[13px] font-semibold text-[#1a8c3c] mt-2">Leer artículo · {article.readingMinutes} min →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
