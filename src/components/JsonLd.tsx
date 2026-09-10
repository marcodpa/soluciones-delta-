import { SERVICES, type ServiceData } from "@/lib/services-data";
import { BUSINESS_NAME, HOME_DESCRIPTION, SITE_URL } from "@/lib/seo";

type Crumb = { name: string; path: string };

export default function JsonLd({ service, breadcrumbs = [] }: { service?: ServiceData; breadcrumbs?: Crumb[] }) {
  const organization = {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    description: HOME_DESCRIPTION,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/vacuum-truck.webp`,
    telephone: "+58-424-6472446",
    email: "solucionesdeltaca@gmail.com",
    taxID: "J-50735393-1",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 13 con Av 5, Local 26A-162, Oficina 2, Sector Manzanillo",
      addressLocality: "San Francisco", addressRegion: "Zulia", addressCountry: "VE",
    },
    areaServed: { "@type": "Country", name: "Venezuela" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    ],
    contactPoint: {
      "@type": "ContactPoint", telephone: "+58-424-6472446",
      contactType: "customer service", availableLanguage: "es",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog", name: "Servicios petroleros e industriales",
      itemListElement: SERVICES.map(item => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", "@id": `${SITE_URL}/servicios/${item.slug}#service`,
          name: item.title, url: `${SITE_URL}/servicios/${item.slug}`,
          provider: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    },
  };
  const graph: Record<string, unknown>[] = [organization, {
    "@type": "WebSite", "@id": `${SITE_URL}/#website`,
    name: BUSINESS_NAME, url: SITE_URL, inLanguage: "es-VE",
    publisher: { "@id": `${SITE_URL}/#organization` },
  }];
  if (breadcrumbs.length > 1) graph.push({
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem", position: index + 1, name: crumb.name,
      item: new URL(crumb.path, SITE_URL).href,
    })),
  });
  if (service) graph.push({
    "@type": "Service", "@id": `${SITE_URL}/servicios/${service.slug}#service`,
    name: service.title, description: service.summary,
    url: `${SITE_URL}/servicios/${service.slug}`, serviceType: service.tag,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Venezuela" },
    hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
  });
  if (service && service.faq.length > 0) graph.push({
    "@type": "FAQPage", "@id": `${SITE_URL}/servicios/${service.slug}#faq`,
    mainEntity: service.faq.map(item => ({
      "@type": "Question", name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
  }} />;
}
