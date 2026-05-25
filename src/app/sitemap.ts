import type { MetadataRoute } from "next";

const BASE_URL = "https://solucionesdeltaca.com";

const SERVICE_SLUGS = [
  "bombeo-de-crudo",
  "trasegado-vacuum",
  "frac-tanks",
  "manejo-de-desechos",
  "alquiler-calderas-inyeccion-vapor",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                      lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/servicios`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/nosotros`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contacto`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.95,
  }));

  return [...staticPages, ...servicePages];
}
