import type { Metadata } from "next";
import { translateText, localePath, type Locale } from "./i18n/translate";

export const SITE_URL = "https://soluciones-delta.com";
export const BUSINESS_NAME = "Soluciones Delta, C.A.";
export const HOME_DESCRIPTION = "Servicios petroleros en Venezuela: bombeo de crudo, vacuum, Frac Tanks, desechos, vapor, hydrojet, efluentes y automatización. Sede en Zulia.";

export function pageMetadata(title: string, description: string, path: string, locale: Locale = "es"): Metadata {
  title = translateText(title, locale);
  description = translateText(description, locale);
  const url = new URL(localePath(path, locale), SITE_URL).href;
  const fullTitle = `${title} | Soluciones Delta`;
  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url, languages: { es: new URL(path, SITE_URL).href, en: new URL(localePath(path, "en"), SITE_URL).href, "x-default": new URL(path, SITE_URL).href } },
    openGraph: {
      type: "website", locale: locale === "en" ? "en_US" : "es_VE", siteName: BUSINESS_NAME,
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
    title: "Bombeo de crudo pesado en Zulia 24/7",
    description: "Bombeo y desnatado de crudo pesado con bomba de tornillo hidráulica: 1,500 barriles/día, sin emulsificar. Operación 24/7 en Zulia y toda Venezuela.",
  },
  "trasegado-vacuum": {
    title: "Camión vacuum petrolero: alquiler 24/7",
    description: "Alquiler de camión vacuum de 160 barriles en Zulia: succión de lodos, borras y efluentes y limpieza de tanques. Salida el mismo día, 24/7. Cotice ya.",
  },
  "frac-tanks": {
    title: "Frac tank 500 Bbl: alquiler en Zulia",
    description: "Frac tanks de 500 barriles en alquiler: V-Bottom, Flat, Insulated y Gas Tight. Baterías de hasta 20 tanques y entrega rápida en Zulia y Venezuela.",
  },
  "manejo-de-desechos": {
    title: "Desechos petroleros en Zulia · Decreto 2635",
    description: "Recolección, transporte y disposición final de lodos, borras, aguas y suelos contaminados bajo el Decreto 2635. Manifiesto y certificado en cada operación.",
  },
  "alquiler-calderas-inyeccion-vapor": {
    title: "Alquiler de calderas y vapor en Zulia",
    description: "Alquiler de calderas y generadores OTSG automatizados para inyección de vapor a pozos, tanques y patios de tanques. Operación 24/7 en Zulia y Venezuela.",
  },
  "tratamiento-de-efluentes": {
    title: "Tratamiento de efluentes y aguas oleosas",
    description: "Tratamiento de aguas de producción y efluentes con hidrocarburos disueltos y emulsionados: biodegradación orgánica y plantas modulares en Zulia y Venezuela.",
  },
  "automatizacion-y-control": {
    title: "Automatización y telemetría de pozos",
    description: "Automatización petrolera en Zulia: telemetría de pozos y estaciones, programación de PLC y RTU, SCADA Wonderware, variadores BCP e instrumentación.",
  },
  "recuperacion-de-crudo-en-fosas": {
    title: "Recuperación de crudo en fosas · Zulia",
    description: "Recuperación térmica de crudo solidificado y lodos petrolizados en fosas, canales y tanques. Inyección de calor, extracción y bombeo. Sede en Zulia.",
  },
  "limpieza-industrial-hidrojet": {
    title: "Limpieza hydrojet 40.000 PSI en Zulia",
    description: "Hydroblasting de 20.000 y 40.000 PSI para intercambiadores, tuberías, tanques y superficies. Sin chispas ni abrasivos, cuadrilla HSE. Zulia y Venezuela, 24/7.",
  },
};
