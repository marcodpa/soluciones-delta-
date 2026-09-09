import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services-data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until editorial dates are available; builds are not content updates.
  return ["/", "/servicios", "/nosotros", "/contacto", ...SERVICES.map(service => `/servicios/${service.slug}`)]
    .map(path => ({ url: new URL(path, SITE_URL).href }));
}
