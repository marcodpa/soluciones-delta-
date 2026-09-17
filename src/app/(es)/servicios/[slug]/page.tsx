import ServicePage from "@/components/ServicePage";
import { localizeTree, translateText, localePath, type Locale } from "@/lib/i18n/translate";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES } from "@/lib/services-data";
import { pageMetadata, SERVICE_SEO } from "@/lib/seo";
import { getRelatedServices } from "@/lib/related-services";
import JsonLd from "@/components/JsonLd";
import ServicePageClient from "@/components/ServicePageClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return SERVICES.map(service => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const seo = SERVICE_SEO[slug];
  return pageMetadata(seo?.title ?? service.title, seo?.description ?? service.summary, `/servicios/${slug}`);
}
export default function Page({ params }: Props) { return <ServicePage params={params} />; }
