export default function JsonLd() {
  const BASE_URL = "https://solucionesdeltaca.com";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BASE_URL}/#organization`,
    name: "Soluciones Delta, C.A.",
    alternateName: "Soluciones Delta CA",
    description:
      "Empresa venezolana especializada en bombeo de transferencia de crudo pesado, trasegado con vacuum, suministro de Frac Tanks de 500 barriles y gestión integral de desechos industriales para la industria petrolera en el Estado Zulia, Venezuela.",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
      width: 300,
      height: 120,
    },
    image: `${BASE_URL}/og-image.png`,
    telephone: "+58-424-6472446",
    email: "solucionesdeltaca@gmail.com",
    taxID: "J-50735393-1",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 13 con Av 5, Local 26A-162, Oficina 2, Sector Manzanillo",
      addressLocality: "San Francisco",
      addressRegion: "Estado Zulia",
      addressCountry: "VE",
      postalCode: "4004",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.6544,
      longitude: -71.6469,
    },
    areaServed: [
      {
        "@type": "State",
        name: "Estado Zulia",
        containedInPlace: { "@type": "Country", name: "Venezuela" },
      },
      { "@type": "State", name: "Estado Mérida" },
      { "@type": "State", name: "Estado Barinas" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+58-424-6472446",
        contactType: "customer service",
        contactOption: "TollFree",
        availableLanguage: ["Spanish"],
        areaServed: "VE",
      },
      {
        "@type": "ContactPoint",
        email: "solucionesdeltaca@gmail.com",
        contactType: "sales",
        availableLanguage: ["Spanish"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Industriales Petroleros",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bombeo de Transferencia de Crudo",
            description:
              "Servicio de bombeo de carga y descarga de crudo pesado y extrapesado desde Frac Tanks hacia camiones cisterna, usando bombas de desplazamiento positivo tipo tornillo y lóbulos.",
            serviceType: "Bombeo de Crudo Pesado",
            provider: { "@id": `${BASE_URL}/#organization` },
            areaServed: "Venezuela",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transporte de Fluidos con Vacuum",
            description:
              "Servicio de succión, transporte y descarga de fluidos industriales con unidades vacuum propias de 160 barriles (fabricación 2026), compresor NVE Challenger 607 y motor Isuzu 4BD1. Incluye limpieza de tanques, extracción de borras asfálticas y manejo de lodos de perforación.",
            serviceType: "Vacuum Truck Services",
            provider: { "@id": `${BASE_URL}/#organization` },
            areaServed: "Venezuela",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Suministro de Frac Tanks",
            description:
              "Suministro de tanques portátiles Frac Tank de 500 barriles en configuraciones V-Bottom, Flat Bottom, Insulated y Gas Tight para almacenamiento de crudo, agua de inyección y fluidos industriales.",
            serviceType: "Almacenamiento Industrial",
            provider: { "@id": `${BASE_URL}/#organization` },
            areaServed: "Venezuela",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manejo de Desechos Industriales",
            description:
              "Gestión integral de residuos petroleros: lodos de perforación, aguas de producción, suelos contaminados, ripios y borras asfálticas. Cumplimiento con Decreto 2635 venezolano.",
            serviceType: "Gestión Ambiental Industrial",
            provider: { "@id": `${BASE_URL}/#organization` },
            areaServed: "Venezuela",
          },
        },
      ],
    },
    sameAs: [],
    keywords:
      "bombeo crudo pesado, vacuum truck Venezuela, frac tanks, manejo desechos industriales, trasegado vacuum Zulia",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: `${BASE_URL}/#servicios`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Equipos",
        item: `${BASE_URL}/#equipos`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Nosotros",
        item: `${BASE_URL}/#nosotros`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contacto",
        item: `${BASE_URL}/#contacto`,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué tipos de crudo pueden manejar en el bombeo de transferencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manejamos crudos pesados y extrapesados con API entre 8° y 22°, usando bombas de desplazamiento positivo tipo tornillo y lóbulos, diseñadas para fluidos de alta viscosidad sin emulsificación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la capacidad de la unidad vacuum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nuestra unidad vacuum tiene capacidad de 160 barriles (25,440 litros), fabricada en 2026 en acero A36 de 8mm, equipada con compresor NVE Challenger 607 y motor Isuzu 4BD1.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tipos de Frac Tanks ofrecen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ofrecemos 4 tipos: V-Bottom (para crudos con sedimentos), Flat Bottom (para fluidos limpios y agua de inyección), Insulated o aislados térmicamente (para operaciones con vapor), y Gas Tight o Vapor Tight (para fluidos con presencia de H2S o gases volátiles). Todos de 500 barriles de capacidad.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cumplen con la normativa ambiental venezolana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Todas nuestras operaciones de manejo de desechos cumplen con el Decreto 2635 de Clasificación y Manejo de Desechos peligrosos de Venezuela, generando manifiestos de residuos para trazabilidad completa desde el origen hasta la disposición final.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tienen servicio de emergencias fuera del horario laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Contamos con disponibilidad operativa 24/7 para emergencias en campo. Puede contactarnos al 0424-6472446 en cualquier momento.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
