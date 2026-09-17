import { localizeTree, translateText, localePath, type Locale } from "@/lib/i18n/translate";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES } from "@/lib/services-data";
import { pageMetadata, SERVICE_SEO } from "@/lib/seo";
import { getRelatedServices } from "@/lib/related-services";
import JsonLd from "@/components/JsonLd";
import ServicePageClient from "@/components/ServicePageClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }>; locale?: Locale };
export default async function ServicePage({ params, locale = "es" }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return localizeTree(<>
    <JsonLd locale={locale} service={service} breadcrumbs={[
      { name: "Inicio", path: "/" },
      { name: "Servicios", path: "/servicios" },
      { name: service.title, path: `/servicios/${slug}` },
    ]} />
    <ServicePageClient service={service} relatedServices={getRelatedServices(slug)} />
  </>, locale);
}
