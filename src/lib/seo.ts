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
    title: "Bombeo de crudo pesado en Venezuela",
    description: "Bombeo, extracción y transferencia de crudo pesado en Venezuela. Equipos hidráulicos para fosas y tanques. Soluciones Delta, con sede en Zulia.",
  },
  "trasegado-vacuum": {
    title: "Servicio de camión vacuum en Venezuela",
    description: "Camión vacuum de 160 barriles para succión, traslado y descarga de fluidos, lodos y borras en Venezuela. Consulte disponibilidad desde nuestra sede en Zulia.",
  },
  "frac-tanks": {
    title: "Alquiler de Frac Tanks en Venezuela",
    description: "Alquiler de Frac Tanks de 500 barriles para crudo, agua y fluidos industriales en Venezuela. Consulte configuraciones y movilización con Soluciones Delta.",
  },
  "manejo-de-desechos": {
    title: "Manejo de desechos petroleros en Venezuela",
    description: "Manejo de desechos industriales y petroleros en Venezuela: lodos, borras, aguas y suelos contaminados. Consulte el alcance de su operación con Soluciones Delta.",
  },
  "alquiler-calderas-inyeccion-vapor": {
    title: "Inyección de vapor para tanques y patio de tanques en Venezuela",
    description: "Inyección de vapor para calentamiento de tanques de almacenamiento y patios de tanques en Venezuela. Generadores OTSG 100% automatizados. Consulte alcance y movilización desde Zulia.",
  },
  "recuperacion-de-crudo-en-fosas": {
    title: "Recuperación de crudo en fosas, canales y tanques en Venezuela",
    description: "Recuperación térmica de crudo solidificado y lodos petrolizados en fosas, canales y tanques en Venezuela. Inyección de calor, extracción y bombeo. Soluciones Delta, sede en Zulia.",
  },
  "limpieza-industrial-hidrojet": {
    title: "Limpieza industrial con hidrojet en Venezuela",
    description: "Servicio de hidrojet industrial (hydrojet) de 20.000 y 40.000 PSI para tuberías, tanques e intercambiadores en Venezuela. Consulte su proyecto con Soluciones Delta.",
  },
};
