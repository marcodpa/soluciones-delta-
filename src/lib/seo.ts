import type { Metadata } from "next";

export const SITE_URL = "https://soluciones-delta.com";
export const BUSINESS_NAME = "Soluciones Delta, C.A.";
export const HOME_DESCRIPTION = "Servicios petroleros en Venezuela: bombeo de crudo, vacuum, Frac Tanks, desechos, vapor, hydrojet y recuperación de crudo en fosas. Sede en Zulia. Cotice hoy.";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, SITE_URL).href;
  const fullTitle = `${title} | Soluciones Delta`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", locale: "es_VE", siteName: BUSINESS_NAME,
      title: fullTitle, description, url,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: BUSINESS_NAME }],
    },
    twitter: {
      card: "summary_large_image", title: fullTitle, description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export const SERVICE_SEO: Record<string, { title: string; description: string }> = {
  "bombeo-de-crudo": {
    title: "Bombeo de crudo pesado en Zulia · 1,500 Bbl/día · Servicio 24/7",
    description: "Bombeo y desnatado de crudo pesado con bomba de tornillo hidráulica: 1,500 barriles/día, sin emulsificar. Operación 24/7 en Zulia y toda Venezuela. Cotice hoy con Soluciones Delta.",
  },
  "trasegado-vacuum": {
    title: "Camión Vacuum 160 Bbl en Zulia · Servicio 24/7 · Flota propia",
    description: "Servicio de camión vacuum de 160 barriles para lodos, borras, efluentes y limpieza de tanques. Unidad propia 2026, compresor NVE, operación 24/7 en Zulia y Venezuela. Cotice ahora.",
  },
  "frac-tanks": {
    title: "Alquiler de Frac Tanks 500 Bbl en Zulia · Disponibilidad inmediata",
    description: "Alquiler de frac tanks de 500 barriles en 4 configuraciones (V-Bottom, Flat, Insulated, Gas Tight). Baterías de hasta 20 tanques, movilización con lowboy en Zulia y Venezuela.",
  },
  "manejo-de-desechos": {
    title: "Manejo de desechos petroleros en Zulia · Decreto 2635 · Certificado",
    description: "Recolección, transporte y disposición final de lodos, borras, aguas y suelos contaminados bajo el Decreto 2635. Manifiesto y certificado en cada operación. Zulia y Venezuela.",
  },
  "alquiler-calderas-inyeccion-vapor": {
    title: "Alquiler de calderas e inyección de vapor a pozos y patio de tanques · Zulia",
    description: "Alquiler de calderas industriales y generadores OTSG 100% automatizados para inyección de vapor a pozos, tanques y patios de tanques. Operación 24/7 en Zulia y toda Venezuela.",
  },
  "recuperacion-de-crudo-en-fosas": {
    title: "Recuperación de crudo en fosas y tanques · 1,500 Bbl/día · Zulia",
    description: "Recuperación térmica de crudo solidificado y lodos petrolizados en fosas, canales y tanques en Venezuela. Inyección de calor, extracción y bombeo. Soluciones Delta, sede en Zulia.",
  },
  "limpieza-industrial-hidrojet": {
    title: "Limpieza industrial con hydrojet 40.000 PSI en Zulia · Sin chispas",
    description: "Hydroblasting de 20.000 y 40.000 PSI para intercambiadores, tuberías, tanques y superficies. Trabajo en frío, sin chispas ni abrasivos, cuadrilla HSE. Zulia y Venezuela, 24/7.",
  },
};
