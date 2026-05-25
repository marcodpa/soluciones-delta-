import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES } from "@/lib/services-data";
import ServicePageClient from "@/components/ServicePageClient";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solucionesdeltaca.com";

// SEO-optimised titles & descriptions per service
const SEO_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  "bombeo-de-crudo": {
    title: "Bombeo de Crudo Pesado en Maracaibo y Zulia | Soluciones Delta",
    description:
      "Servicio de bombeo y extracción de crudo pesado con bomba hidráulica de tornillo, 1.500 Bbl/día. Motor y bomba separados para fosas de difícil acceso en el Estado Zulia. Operación 24/7.",
    keywords: [
      "bombeo de crudo pesado Zulia", "extracción crudo fosa Venezuela",
      "bomba hidráulica tornillo petróleo", "servicio bombeo crudo Maracaibo",
      "transferencia crudo 1500 bbl", "natilla crudo pesado",
    ],
  },
  "trasegado-vacuum": {
    title: "Camión Vacuum en Zulia — Transporte de Fluidos | Soluciones Delta",
    description:
      "Servicio de camión vacuum 160 Bbl para transporte de lodos, borras, efluentes y limpieza de espacios confinados. Flota propia disponible 24/7 en el Estado Zulia y costa oriental.",
    keywords: [
      "camión vacuum Zulia", "vacuum truck Maracaibo", "transporte lodos petroleros Venezuela",
      "achique vacuum 160 bbl", "limpieza espacios confinados petróleo",
      "vacuum truck PDVSA Zulia", "trasegado fluidos industriales",
    ],
  },
  "frac-tanks": {
    title: "Alquiler de Frac Tanks 500 Bbl en Zulia | Soluciones Delta",
    description:
      "Alquiler de Frac Tanks 500 Bbl V-Bottom, Flat, Insulated y Gas Tight en el Estado Zulia. Alta movilidad y disponibilidad inmediata para operaciones petroleras y almacenamiento temporal de fluidos.",
    keywords: [
      "alquiler frac tanks Zulia", "frac tanks 500 bbl Venezuela",
      "tanques almacenamiento temporal crudo", "frac tank v-bottom Maracaibo",
      "alquiler tanques petroleros Zulia", "frac tank gas tight Venezuela",
    ],
  },
  "manejo-de-desechos": {
    title: "Manejo de Desechos Industriales Petroleros Zulia | Soluciones Delta",
    description:
      "Gestión integral de desechos industriales y peligrosos bajo el Decreto 2635 en el Estado Zulia. Trazabilidad completa, certificados de disposición final y personal certificado.",
    keywords: [
      "manejo desechos industriales Zulia", "disposición desechos peligrosos Venezuela",
      "Decreto 2635 Venezuela", "gestión ambiental petrolera Zulia",
      "residuos sólidos petroleros Maracaibo", "limpieza fosas contaminadas Venezuela",
    ],
  },
  "alquiler-calderas-inyeccion-vapor": {
    title: "Alquiler de Calderas e Inyección de Vapor en Maracaibo | Soluciones Delta",
    description:
      "Alquiler de generadores de vapor OTSG para inyección de vapor (Huff & Puff, SAGD, Steam Flooding) en el Estado Zulia. Alta presión, operación continua 24/7 para recuperación mejorada de petróleo.",
    keywords: [
      "alquiler calderas industriales Maracaibo", "inyección vapor crudo pesado Zulia",
      "generador vapor OTSG Venezuela", "huff and puff Venezuela",
      "steam flooding Zulia", "recuperación mejorada petróleo Venezuela",
      "alquiler caldera inyección vapor Zulia",
    ],
  },
};

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

  const seo = SEO_META[slug];
  const title       = seo?.title       ?? `${service.title} en Zulia | Soluciones Delta C.A.`;
  const description = seo?.description ?? service.summary;
  const keywords    = seo?.keywords    ?? [];
  const pageUrl     = `${BASE_URL}/servicios/${slug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      locale: "es_VE",
      url: pageUrl,
      siteName: "Soluciones Delta, C.A.",
      title,
      description,
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${service.title} — Soluciones Delta C.A.`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
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

  const seo = SEO_META[slug];
  const pageUrl = `${BASE_URL}/servicios/${slug}`;

  // JSON-LD structured data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": seo?.title ?? service.title,
    "description": seo?.description ?? service.summary,
    "url": pageUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Soluciones Delta, C.A.",
      "telephone": "+58-424-6472446",
      "email": "solucionesdeltaca@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle 13 con Av 5, Local 26A-162, Of. 2, Sector Manzanillo",
        "addressLocality": "San Francisco",
        "addressRegion": "Estado Zulia",
        "addressCountry": "VE",
      },
      "areaServed": "Estado Zulia, Venezuela",
      "openingHours": "Mo-Su 00:00-24:00",
    },
    "serviceType": service.tag,
    "areaServed": {
      "@type": "State",
      "name": "Estado Zulia",
      "containedInPlace": { "@type": "Country", "name": "Venezuela" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageClient service={service} />
    </>
  );
}
