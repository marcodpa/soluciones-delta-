import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES } from "@/lib/services-data";
import ServicePageClient from "@/components/ServicePageClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Soluciones Delta C.A.`,
    description: service.summary,
    alternates: { canonical: `https://solucionesdeltaca.com/servicios/${slug}` },
    openGraph: {
      title: `${service.title} — Soluciones Delta C.A.`,
      description: service.summary,
      url: `https://solucionesdeltaca.com/servicios/${slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageClient service={service} />;
}
