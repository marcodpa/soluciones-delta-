import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services-data";
import { ARTICLES } from "@/lib/articles-data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until editorial dates are available; builds are not content updates.
  return ["/", "/servicios", "/nosotros", "/contacto", "/articulos", ...SERVICES.map(service => `/servicios/${service.slug}`), ...ARTICLES.map(article => `/articulos/${article.slug}`)]
    .map(path => ({ url: new URL(path, SITE_URL).href }));
}
