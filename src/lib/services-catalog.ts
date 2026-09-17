const entries = [
  {
    slug: "bombeo-de-crudo",
    tag: "Bombeo de Crudo",
    num: "01",
    title: "Bombeo de Crudo",
    subtitle: "Extracción y Transferencia · Crudo Pesado",
    summary:
      "Bomba de tornillo operada por unidad hidráulica a 15,000 PSI. Sin emulsificación, plato desnatador incorporado, 1,500 Bbl/día de capacidad.",
    highlights: ["1,500 Bbl / día", "Presión 15,000 PSI", "Sin emulsificación", "24/7"],
    img: "/bombeo/equipo-principal.webp",
    color: "#eef7f1",
  },
  {
    slug: "trasegado-vacuum",
    tag: "Vacuum Industrial",
    num: "02",
    title: "Transporte de Fluidos",
    subtitle: "Vacuum 160 Bbl · Fabricación 2026",
    summary:
      "Succión y transporte de fluidos de alta densidad con unidad propia de 160 Bbl. Acero A36 · compresor NVE Challenger 607 · motor Isuzu 4BD1.",
    highlights: ["160 Bbl · A36 8mm", "NVE Challenger 607", "Espacios confinados", "Fabricación 2026"],
    img: "/vacuum/vacuum-semirremolque.webp",
    color: "#eef4ff",
  },
  {
    slug: "frac-tanks",
    tag: "Almacenamiento",
    num: "03",
    title: "Frac Tanks 500 Bbl",
    subtitle: "Tanques Portátiles · 4 Configuraciones",
    summary:
      "Tanques de 500 Bbl en 4 configuraciones: V-Bottom, Flat Bottom, Insulated y Gas Tight. Alta movilidad, batería hasta 20 unidades.",
    highlights: ["500 Bbl / unidad", "V-Bottom · Flat · Insulated · Gas Tight", "Movilización con lowboy", "Batería hasta 20 tanques"],
    img: "/frac-tanks/frac-tank-nuevo.webp",
    color: "#fff8ee",
  },
  {
    slug: "manejo-de-desechos",
    tag: "Gestión Ambiental",
    num: "04",
    title: "Manejo de Desechos",
    subtitle: "Residuos Industriales · Decreto 2635",
    summary:
      "Gestión integral: lodos de perforación, aguas de producción, borras asfálticas y suelos contaminados. Manifiesto y certificado de disposición en cada operación.",
    highlights: ["Decreto 2635 VE", "Lodos WBM & OBM", "Borras asfálticas", "Certificado disposición"],
    img: "/vacuum/vacuum-truck-howo-pdvsa.webp",
    color: "#f3f8ee",
  },
  {
    slug: "alquiler-calderas-inyeccion-vapor",
    tag: "Inyección de Vapor",
    num: "05",
    title: "Calderas e Inyección de Vapor",
    subtitle: "Alquiler de calderas · Pozos y patio de tanques",
    summary:
      "Generadores OTSG 100% automatizados para calentar tanques de almacenamiento y patios de tanques: menor viscosidad, bombeo y despacho de crudo pesado sin interrupciones.",
    highlights: ["Tanques · Patio de tanques", "100% automatizado", "Sellos de bomba · Buques", "Estado Zulia"],
    img: "/vapor/caldera-otsg-semirremolque.webp",
    color: "#fef4ee",
  },
  {
    slug: "limpieza-industrial-hidrojet",
    tag: "Hydrojet UHP",
    num: "06",
    title: "Limpieza Industrial con Hidrojet",
    subtitle: "Agua a Ultra Alta Presión · 20.000 y 40.000 PSI",
    summary:
      "Hydroblasting con unidades de 20.000 y 40.000 PSI: intercambiadores, destape de líneas, preparación de superficies y espacios confinados. Trabajo en frío sin chispas ni abrasivos.",
    highlights: ["40.000 PSI (2.800 bar)", "Trabajo en frío · sin chispas", "Sin abrasivos", "Cuadrilla HSE"],
    img: "/hidrojet/unidad-hidrojet-campo.png",
    color: "#eef5f8",
  },
  {
    slug: "recuperacion-de-crudo-en-fosas",
    tag: "Recuperación Térmica",
    num: "07",
    title: "Recuperación de Crudo en Fosas",
    subtitle: "Fosas · Canales · Tanques",
    summary:
      "Transferencia controlada de calor a crudos solidificados y lodos petrolizados para reducir su viscosidad, extraerlos, bombearlos y reincorporarlos a la cadena productiva.",
    highlights: ["1,500 Bbl / día", "Fosas a cielo abierto", "Pasivos ambientales", "Expedientes MPPEA"],
    img: "/fosas/fosa-1-antes.jpg",
    color: "#fdf3ee",
  },
];

export type ServiceCategory = "all" | "extraction" | "transport" | "industrial";
const categories: Record<string, Exclude<ServiceCategory, "all">> = {
  "bombeo-de-crudo": "extraction",
  "trasegado-vacuum": "transport",
  "frac-tanks": "transport",
  "manejo-de-desechos": "industrial",
  "alquiler-calderas-inyeccion-vapor": "extraction",
  "limpieza-industrial-hidrojet": "industrial",
  "recuperacion-de-crudo-en-fosas": "extraction",
};
const descriptions: Record<string, string> = {
  "bombeo-de-crudo": "Extracción y transferencia de crudo pesado.",
  "trasegado-vacuum": "Succión y transporte de fluidos con unidades vacuum de 160 barriles.",
  "frac-tanks": "Almacenamiento portátil de fluidos para operaciones en campo.",
  "manejo-de-desechos": "Gestión de lodos, borras y residuos industriales.",
  "alquiler-calderas-inyeccion-vapor": "Soluciones térmicas para pozos y tanques.",
  "limpieza-industrial-hidrojet": "Limpieza de equipos, tuberías y superficies.",
  "recuperacion-de-crudo-en-fosas": "Recuperación térmica de crudos y lodos petrolizados.",
};
export const CATALOG_SERVICES = entries.map(service => ({
  ...service,
  category: categories[service.slug],
  description: descriptions[service.slug],
  featured: ["trasegado-vacuum", "frac-tanks"].includes(service.slug),
}));
