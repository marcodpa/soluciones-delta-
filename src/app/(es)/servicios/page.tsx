import ServiciosClient from "@/components/ServiciosClient";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { CATALOG_SERVICES } from "@/lib/services-catalog";

export const metadata = pageMetadata("Servicios petroleros en Venezuela y Zulia", "Bombeo y recuperación de crudo, vacuum, frac tanks, vapor, hidrojet y manejo de desechos. Equipos propios en Zulia para proyectos en Venezuela. Cotice.", "/servicios");

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/servicios#webpage`,
  url: `${SITE_URL}/servicios`,
  name: "Servicios petroleros en Venezuela y Zulia",
  inLanguage: "es-VE",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@type": "ItemList",
    name: "Servicios petroleros de Soluciones Delta",
    numberOfItems: CATALOG_SERVICES.length,
    itemListElement: CATALOG_SERVICES.map((service, index) => ({
      "@type": "ListItem", position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/servicios/${service.slug}#service`,
        name: service.title,
        description: service.description,
        url: `${SITE_URL}/servicios/${service.slug}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Venezuela" },
      },
    })),
  },
};

export default function Page() {
  return <>
    <JsonLd breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Servicios", path: "/servicios" }]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema).replace(/</g, "\\u003c") }} />
    <ServiciosClient />
  </>;
}
