import { notFound, redirect } from "next/navigation";
import ClientPage from "@/components/ClientPage";
import NosotrosClient from "@/components/NosotrosClient";
import ContactoClient from "@/components/ContactoClient";
import ServiciosClient from "@/components/ServiciosClient";
import ArticleIndex from "@/components/ArticleIndex";
import ArticlePage from "@/components/ArticlePage";
import ServicePage from "@/components/ServicePage";
import AreaPage from "@/components/AreaPage";
import JsonLd from "@/components/JsonLd";
import { ARTICLES } from "@/lib/articles-data";
import { SERVICES } from "@/lib/services-data";
import { ZONAS } from "@/lib/zonas-data";
import { HOME_DESCRIPTION, SERVICE_SEO, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ path?: string[] }> };
export function generateStaticParams() {
  return [[], ["servicios"], ["nosotros"], ["contacto"], ["articulos"], ...SERVICES.map(s => ["servicios", s.slug]), ...ARTICLES.map(a => ["articulos", a.slug]), ...ZONAS.map(z => ["servicios-petroleros", z.slug])].map(path => ({ path }));
}

function pageInfo(parts: string[]) {
  const path = `/${parts.join("/")}`;
  if (!parts.length) return { title: "Servicios petroleros en Venezuela", description: HOME_DESCRIPTION, path };
  if (parts.length === 1) {
    const pages: Record<string, [string, string]> = {
      servicios: ["Oilfield services in Venezuela and Zulia", "Oil pumping, vacuum trucks, frac tanks, steam injection, waste management and hydrojet cleaning. Our own equipment and technical support from Zulia."],
      nosotros: ["Oilfield services company in Zulia", "Meet Soluciones Delta, an oilfield services company based in San Francisco, Zulia, with its own equipment, technical personnel and operations across Venezuela."],
      contacto: ["Contact and quotes", "Request a quote for oilfield services in Venezuela. Contact Soluciones Delta by WhatsApp, phone or email. Based in San Francisco, Zulia."],
      articulos: ["Oilfield service guides", "Practical guides to vacuum trucks, frac tanks, oil recovery, steam injection and industrial cleaning in Venezuela."],
    };
    const item = pages[parts[0]];
    return item ? { title: item[0], description: item[1], path } : null;
  }
  if (parts.length !== 2) return null;
  if (parts[0] === "servicios") { const s = SERVICES.find(s => s.slug === parts[1]); return s ? { title: SERVICE_SEO[s.slug]?.title ?? s.title, description: SERVICE_SEO[s.slug]?.description ?? s.summary, path } : null; }
  if (parts[0] === "articulos") { const a = ARTICLES.find(a => a.slug === parts[1]); return a ? { title: a.seoTitle, description: a.description, path } : null; }
  if (parts[0] === "servicios-petroleros") { const z = ZONAS.find(z => z.slug === parts[1]); return z ? { title: z.seoTitle, description: z.description, path } : null; }
  return null;
}
export async function generateMetadata({ params }: Props) { const info = pageInfo((await params).path ?? []); if (!info) notFound(); return pageMetadata(info.title, info.description, info.path, "en"); }
export default async function EnglishPage({ params }: Props) {
  const parts = (await params).path ?? [];
  if (parts.length === 1 && parts[0] === "servicios-petroleros") redirect("/en/servicios");
  if (!pageInfo(parts)) notFound();
  if (!parts.length) return <><JsonLd locale="en" /><ClientPage /></>;
  if (parts.length === 1) {
    if (parts[0] === "articulos") return <ArticleIndex locale="en" />;
    const content = parts[0] === "nosotros" ? <NosotrosClient /> : parts[0] === "contacto" ? <ContactoClient /> : <ServiciosClient />;
    return <><JsonLd locale="en" breadcrumbs={[{ name: "Inicio", path: "/" }, { name: parts[0] === "nosotros" ? "Nosotros" : parts[0] === "contacto" ? "Contacto" : "Servicios", path: `/${parts[0]}` }]} />{content}</>;
  }
  if (parts[0] === "articulos") return ArticlePage({ params: Promise.resolve({ slug: parts[1] }), locale: "en" });
  if (parts[0] === "servicios") return ServicePage({ params: Promise.resolve({ slug: parts[1] }), locale: "en" });
  return AreaPage({ params: Promise.resolve({ zona: parts[1] }), locale: "en" });
}
