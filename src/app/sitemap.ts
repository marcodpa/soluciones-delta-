import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services-data";
import { ARTICLES } from "@/lib/articles-data";
import { ZONAS } from "@/lib/zonas-data";
import { SITE_URL } from "@/lib/seo";
import { localePath } from "@/lib/i18n/translate";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until editorial dates are available; builds are not content updates.
  return ["/", "/servicios", "/nosotros", "/contacto", "/articulos", ...SERVICES.map(service => `/servicios/${service.slug}`), ...ARTICLES.map(article => `/articulos/${article.slug}`), ...ZONAS.map(zona => `/servicios-petroleros/${zona.slug}`)]
    .flatMap(path => (["es", "en"] as const).map(locale => ({
      url: new URL(localePath(path, locale), SITE_URL).href,
      alternates: { languages: { es: new URL(path, SITE_URL).href, en: new URL(localePath(path, "en"), SITE_URL).href, "x-default": new URL(path, SITE_URL).href } },
    })));
}
