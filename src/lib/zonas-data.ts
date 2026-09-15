export interface ZonaSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface ZonaData {
  slug: string;
  /** Nombre corto de la zona para títulos y migas. */
  nombre: string;
  /** Tipo de lugar para los datos estructurados (schema.org). */
  areaType: "State" | "City" | "AdministrativeArea";
  seoTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  hero: string;
  heroAlt: string;
  /** Localidades, campos o instalaciones cubiertas desde esta zona. */
  cobertura: string[];
  sections: ZonaSection[];
  faq: { q: string; a: string }[];
}

export const ZONAS: ZonaData[] = [
  {
    slug: "zulia",
    nombre: "Zulia",
    areaType: "State",
    seoTitle: "Servicios petroleros en Zulia",
    description: "Empresa de servicios petroleros en el estado Zulia: bombeo de crudo, camión vacuum, frac tanks, desechos, calderas, hydrojet y recuperación de fosas. Sede en San Francisco, 24/7.",
    eyebrow: "Servicios petroleros en Zulia",
    h1: "Servicios petroleros en el estado Zulia",
    lead: "Soluciones Delta, C.A. es una empresa de servicios petroleros con sede en San Francisco, Zulia. Atendemos operadoras, contratistas y plantas industriales en la Costa Oriental y Occidental del Lago de Maracaibo con equipos propios y personal técnico certificado, las 24 horas.",
    hero: "/vacuum/vacuum-truck-howo-pdvsa.webp",
    heroAlt: "Camión vacuum de Soluciones Delta en una locación petrolera del estado Zulia",
    cobertura: [
      "Costa Oriental del Lago: Cabimas, Tía Juana, Lagunillas, Bachaquero y Ciudad Ojeda",
      "Costa Occidental: Maracaibo, San Francisco, La Cañada de Urdaneta y Campo Boscán",
      "Sur del Lago y Mene Grande, con movilización coordinada",
      "Patios de tanques, estaciones de flujo, fosas y plantas industriales",
    ],
    sections: [
      {
        heading: "Una sola empresa para el crudo pesado y sus residuos",
        paragraphs: [
          "El Zulia concentra la mayor producción de crudo pesado del país, y con ella los problemas que ese crudo genera en campo: fosas petrolizadas, tanques con fondos solidificados, lodos y borras que hay que recolectar, transportar y disponer con su documentación ambiental. Soluciones Delta cubre esa cadena completa sin subcontratar equipos.",
          "Desde el bombeo y desnatado con bomba de tornillo hidráulica hasta la recuperación térmica de fosas con inyección de vapor, cada servicio se ejecuta con unidades propias: camión vacuum de 160 barriles, frac tanks de 500 barriles, generadores de vapor OTSG y unidades hydrojet de 20.000 y 40.000 PSI.",
        ],
      },
      {
        heading: "Por qué contratar una empresa con sede en Zulia",
        paragraphs: [
          "Estar en San Francisco, a minutos de Maracaibo y del Puente sobre el Lago, nos permite movilizar equipos a la Costa Oriental el mismo día y responder emergencias de madrugada o en fin de semana. No dependemos de flotas que vienen de otros estados.",
          "Trabajamos bajo los estándares HSE que exigen las operadoras del Zulia: personal con certificaciones vigentes, equipos de protección completos, permisos de trabajo y manifiestos de desechos conforme al Decreto 2635.",
        ],
        list: [
          "Equipos propios y personal técnico certificado",
          "Operación continua, 24 horas, 7 días",
          "Capacidad demostrada de 1,500 barriles por día en recuperación de crudo",
          "Contratos ejecutados al 100% en campos del estado Zulia",
        ],
      },
    ],
    faq: [
      { q: "¿Qué zonas del Zulia atienden?", a: "Toda la Costa Oriental del Lago (Cabimas, Tía Juana, Lagunillas, Bachaquero, Ciudad Ojeda), la Costa Occidental (Maracaibo, San Francisco, La Cañada, Campo Boscán) y el Sur del Lago. Para otros estados coordinamos la movilización según el proyecto." },
      { q: "¿Cuánto tardan en llegar a una locación en la Costa Oriental?", a: "Desde nuestra sede en San Francisco, una unidad vacuum o una cuadrilla puede estar en Cabimas o Lagunillas en pocas horas. Para emergencias operamos las 24 horas, todos los días." },
      { q: "¿Trabajan con operadoras y con contratistas?", a: "Sí. Atendemos operadoras, empresas mixtas, contratistas de servicios y plantas industriales. Cotizamos por operación o por contrato marco con disponibilidad garantizada." },
      { q: "¿Qué documentación entregan al terminar?", a: "Informe de la operación con volúmenes, fotos de antes y después, manifiestos de transporte y certificados de disposición final cuando aplica manejo de desechos." },
    ],
  },
  {
    slug: "maracaibo",
    nombre: "Maracaibo",
    areaType: "City",
    seoTitle: "Servicios petroleros en Maracaibo",
    description: "Servicios petroleros en Maracaibo y la Costa Occidental del Lago: camión vacuum, bombeo de crudo, frac tanks, desechos y limpieza industrial. Empresa con sede a minutos de la ciudad.",
    eyebrow: "Servicios petroleros en Maracaibo",
    h1: "Servicios petroleros en Maracaibo y la Costa Occidental del Lago",
    lead: "Nuestra sede está en San Francisco, en el área metropolitana de Maracaibo. Eso nos permite atender el mismo día a operadoras, plantas y contratistas de la ciudad, de la zona industrial y de los campos de la Costa Occidental como Boscán y Urdaneta.",
    hero: "/truck-1.webp",
    heroAlt: "Unidad de Soluciones Delta lista para movilizarse desde el área metropolitana de Maracaibo",
    cobertura: [
      "Maracaibo y su zona industrial",
      "San Francisco, Bajo Grande y el Puerto de Maracaibo",
      "Campo Boscán, Campo Urdaneta y La Concepción",
      "La Cañada de Urdaneta y municipio Mara",
    ],
    sections: [
      {
        heading: "Qué resolvemos en Maracaibo",
        paragraphs: [
          "En la Costa Occidental el trabajo se reparte entre campos de crudo pesado y extrapesado, patios de tanques y plantas industriales de la ciudad. Los servicios más solicitados son el camión vacuum para lodos y efluentes, el bombeo y desnatado de crudo en fosas, el alquiler de frac tanks para almacenamiento temporal y la limpieza con hydrojet de intercambiadores y tuberías.",
          "Para las fosas petrolizadas de la zona, como las que hemos recuperado en Campo Boscán, combinamos inyección de vapor, bombeo de tornillo y recolección de residuos con manifiesto, entregando el crudo recuperado y el sitio saneado.",
        ],
      },
      {
        heading: "Cerca de su operación, con respuesta el mismo día",
        paragraphs: [
          "Al estar en el área metropolitana, un traslado a cualquier punto de Maracaibo o a los campos de la Costa Occidental se resuelve en el día, sin costos de movilización de larga distancia. Para plantas industriales de la ciudad ofrecemos limpieza programada en paradas y atención de emergencias.",
        ],
        list: [
          "Camión vacuum de 160 barriles con compresor NVE",
          "Frac tanks de 500 barriles en cuatro configuraciones",
          "Hydrojet de 20.000 y 40.000 PSI sin chispas ni abrasivos",
          "Manejo de desechos con manifiesto y certificado de disposición",
        ],
      },
    ],
    faq: [
      { q: "¿Atienden plantas industriales dentro de Maracaibo, no solo campos petroleros?", a: "Sí. La limpieza industrial con hydrojet, el camión vacuum y el manejo de desechos se prestan también en plantas, refinerías y empresas de la zona industrial de Maracaibo y San Francisco." },
      { q: "¿Cobran movilización dentro del área metropolitana?", a: "Dentro de Maracaibo y San Francisco la movilización está incluida en la mayoría de los servicios. Para campos como Boscán o Urdaneta se cotiza según distancia y duración." },
      { q: "¿Pueden atender una emergencia de noche?", a: "Sí. Operamos las 24 horas. Para derrames, tanques rebosados o fosas que deben vaciarse de urgencia, contáctenos por WhatsApp y coordinamos la salida de la unidad." },
    ],
  },
  {
    slug: "costa-oriental-del-lago",
    nombre: "Costa Oriental del Lago",
    areaType: "AdministrativeArea",
    seoTitle: "Servicios petroleros en la Costa Oriental del Lago",
    description: "Servicios petroleros en Cabimas, Ciudad Ojeda, Lagunillas, Tía Juana y Bachaquero: vacuum, bombeo de crudo, calderas, frac tanks, desechos y recuperación de fosas. Operación 24/7.",
    eyebrow: "Servicios petroleros en la Costa Oriental",
    h1: "Servicios petroleros en la Costa Oriental del Lago",
    lead: "Cabimas, Tía Juana, Lagunillas, Bachaquero y Ciudad Ojeda concentran patios de tanques, estaciones de flujo y fosas que requieren atención constante. Soluciones Delta moviliza equipos propios a la Costa Oriental para bombeo, vacuum, inyección de vapor y manejo de desechos.",
    hero: "/vapor/campo-pozos.webp",
    heroAlt: "Campo de pozos petroleros en la Costa Oriental del Lago de Maracaibo",
    cobertura: [
      "Cabimas y Tía Juana",
      "Lagunillas y Ciudad Ojeda",
      "Bachaquero y Mene Grande",
      "Patios de tanques, estaciones de flujo y muelles de la costa",
    ],
    sections: [
      {
        heading: "Servicios para patios de tanques y estaciones de flujo",
        paragraphs: [
          "En la Costa Oriental el crudo pesado se acumula en fondos de tanques, canales y fosas. El alquiler de calderas con inyección de vapor permite fluidificarlo y bombearlo; el camión vacuum recoge lodos y borras; los frac tanks dan almacenamiento temporal durante limpiezas y paradas. Todo con una sola empresa y una sola coordinación.",
          "También atendemos la limpieza industrial de intercambiadores, tuberías y tanques con hydrojet de ultra alta presión, sin chispas, apta para áreas clasificadas.",
        ],
      },
      {
        heading: "Movilización coordinada desde San Francisco",
        paragraphs: [
          "Cruzando el Puente sobre el Lago, nuestras unidades llegan a Cabimas, Lagunillas o Bachaquero en pocas horas. Para trabajos de varios días instalamos frac tanks y generadores de vapor en sitio y mantenemos personal en campo hasta cerrar la operación con su informe.",
        ],
        list: [
          "Generadores de vapor OTSG automatizados sobre semirremolque",
          "Bombeo de crudo pesado de hasta 1,500 barriles por día",
          "Recuperación térmica de fosas, canales y tanques",
          "Recolección y disposición de desechos bajo el Decreto 2635",
        ],
      },
    ],
    faq: [
      { q: "¿Tienen base en la Costa Oriental?", a: "Nuestra sede está en San Francisco, en la Costa Occidental. Para contratos de varios días en la Costa Oriental dejamos equipos y personal en la locación, lo que evita traslados diarios." },
      { q: "¿Qué servicio conviene para un patio de tanques con fondos solidificados?", a: "Normalmente la combinación de inyección de vapor para fluidificar el crudo, bombeo de tornillo para extraerlo sin emulsionar y camión vacuum para los residuos. Evaluamos el tanque y proponemos el alcance." },
      { q: "¿Trabajan en Bachaquero y Mene Grande?", a: "Sí. Son parte de la cobertura de la Costa Oriental. Se cotiza la movilización según la duración del trabajo." },
    ],
  },
  {
    slug: "san-francisco",
    nombre: "San Francisco",
    areaType: "City",
    seoTitle: "Servicios petroleros en San Francisco, Zulia",
    description: "Sede de Soluciones Delta en San Francisco, Zulia: servicios petroleros e industriales para Bajo Grande, la zona industrial y el sur de Maracaibo. Vacuum, hydrojet, frac tanks y desechos.",
    eyebrow: "Servicios petroleros en San Francisco",
    h1: "Servicios petroleros en San Francisco, Zulia",
    lead: "San Francisco es nuestra casa. Desde la sede en el sector Manzanillo salen las unidades vacuum, las cuadrillas de hydrojet y los frac tanks que atienden la zona industrial, Bajo Grande y el sur del área metropolitana de Maracaibo.",
    hero: "/hidrojet/unidad-hidrojet-campo.png",
    heroAlt: "Unidad hydrojet de Soluciones Delta en campo, con base en San Francisco, Zulia",
    cobertura: [
      "Zona industrial de San Francisco y sector Manzanillo",
      "Bajo Grande y el Puerto de Maracaibo",
      "Sur de Maracaibo y La Cañada de Urdaneta",
      "Plantas, refinerías y empresas de servicios del municipio",
    ],
    sections: [
      {
        heading: "La ventaja de tener al proveedor en el mismo municipio",
        paragraphs: [
          "Para empresas de San Francisco y Bajo Grande, contratar a Soluciones Delta significa tener el equipo a minutos: sin costos de movilización, con inspección previa en sitio el mismo día y con capacidad de reaccionar en horas ante un derrame, un tanque lleno o una limpieza urgente antes de una parada.",
          "Nuestra oficina y patio de equipos están en la Calle 13 con Avenida 5, sector Manzanillo, donde puede visitarnos para revisar las unidades y las fichas técnicas antes de contratar.",
        ],
      },
      {
        heading: "Qué ofrecemos a la industria local",
        paragraphs: [
          "Limpieza industrial con hydrojet de 20.000 y 40.000 PSI para intercambiadores, tuberías y tanques; camión vacuum para lodos, efluentes y limpieza de fosas sépticas industriales; frac tanks para almacenamiento temporal; y manejo de desechos peligrosos con manifiesto y certificado de disposición final.",
        ],
        list: [
          "Inspección y cotización en sitio sin costo dentro del municipio",
          "Atención de emergencias las 24 horas",
          "Personal con certificaciones HSE vigentes",
          "Informe con fotos y documentación al cierre de cada trabajo",
        ],
      },
    ],
    faq: [
      { q: "¿Dónde queda la sede?", a: "En San Francisco, estado Zulia: Calle 13 con Avenida 5, Local 26A-162, Oficina 2, sector Manzanillo. Puede escribirnos por WhatsApp para coordinar una visita." },
      { q: "¿Hacen limpieza industrial en empresas que no son petroleras?", a: "Sí. El hydrojet, el vacuum y el manejo de desechos se prestan a plantas de alimentos, químicas, metalmecánicas y de servicios de la zona industrial." },
      { q: "¿Pueden cotizar el mismo día?", a: "Dentro del municipio San Francisco, sí. Visitamos el sitio, evaluamos el trabajo y enviamos la propuesta en el día." },
    ],
  },
];

export function getZonaBySlug(slug: string): ZonaData | undefined {
  return ZONAS.find(zona => zona.slug === slug);
}
