// Contenido visual de la página interior de cada servicio (estructura B):
// hero con foto, "cómo trabajamos" en 3 pasos, cifras y cierre.
// El texto largo (overview, faq) sigue viniendo de services-data.ts.

export type ServiceHero =
  | { kind: "single"; src: string }
  | { kind: "split"; antes: string; despues: string };

export interface ServicePageContent {
  eyebrow: string;
  headline: string;
  hero: ServiceHero;
  subtitle: string;
  stepsIntro: string;
  steps: { src: string; title: string; text: string }[];
  stats: { value: string; label: string; highlight?: boolean }[];
  closing: { src: string; label: string; heading: string; text: string };
}

export const SERVICE_PAGE_CONTENT: Record<string, ServicePageContent> = {
  "bombeo-de-crudo": {
    eyebrow: "Bombeo de crudo · Extracción y transferencia",
    headline: "Crudo pesado en movimiento, sin emulsionarlo.",
    hero: { kind: "single", src: "/bombeo/equipo-principal.webp" },
    subtitle: "Bomba de tornillo, motor separado",
    stepsIntro: "Unidad de potencia hidráulica a 15,000 PSI y plato desnatador para fosas de difícil acceso.",
    steps: [
      { src: "/bombeo/bomba-en-fosa.webp", title: "Succionamos desde la fosa", text: "Plato acerado desnatador que capta la natilla con mínima agua." },
      { src: "/bombeo/bomba-hidraulica-roja.webp", title: "Bombeamos sin cortar el crudo", text: "La bomba de tornillo preserva las propiedades del fluido." },
      { src: "/bombeo/motor-hidraulico.webp", title: "Transferimos a tanque", text: "Descarga por manguera de 6\" a frac tanks o cisternas." },
    ],
    stats: [
      { value: "1,500", label: "Barriles / día", highlight: true },
      { value: "15,000", label: "PSI hidráulicos" },
      { value: "6\"", label: "Manguera de descarga" },
      { value: "24/7", label: "Operación" },
    ],
    closing: { src: "/bombeo/equipo-principal.webp", label: "Qué movemos", heading: "De natilla a crudo extrapesado", text: "Aguas de producción, crudos de cualquier viscosidad, transferencia entre frac tanks y cisternas, y mezcla con diluyente." },
  },
  "trasegado-vacuum": {
    eyebrow: "Transporte de fluidos · Vacuum 160 Bbl",
    headline: "Succión donde ninguna bomba llega.",
    hero: { kind: "single", src: "/vacuum/vacuum-truck-howo-pdvsa.webp" },
    subtitle: "Unidad propia, fabricación 2026",
    stepsIntro: "Semirremolque de 160 barriles con compresor NVE Challenger 607 y motor Isuzu 4BD1.",
    steps: [
      { src: "/vacuum/vacuum-semirremolque.webp", title: "Posicionamos la unidad", text: "Aterramiento certificado y acoples de 4\" en la locación." },
      { src: "/vacuum/nve-607-challenger.webp", title: "Creamos vacío", text: "Compresor NVE de 380 CFM y 29\" Hg de vacío máximo." },
      { src: "/vacuum/vacuum-truck-howo-pdvsa.webp", title: "Transportamos y descargamos", text: "Al sitio de tratamiento, con manifiesto de residuos si aplica." },
    ],
    stats: [
      { value: "160", label: "Barriles", highlight: true },
      { value: "380", label: "CFM de flujo libre" },
      { value: "29\"", label: "Hg de vacío" },
      { value: "2026", label: "Fabricación" },
    ],
    closing: { src: "/vacuum/vacuum-semirremolque.webp", label: "Qué succionamos", heading: "Borras, lodos y efluentes", text: "Fondos de tanque, lodos de perforación, aguas de producción con sólidos y crudo derramado, desde espacios confinados." },
  },
  "frac-tanks": {
    eyebrow: "Almacenamiento · Frac Tanks 500 Bbl",
    headline: "500 barriles listos donde los necesite.",
    hero: { kind: "single", src: "/frac-tanks/frac-tank-nuevo.webp" },
    subtitle: "Cuatro configuraciones, un solo eje",
    stepsIntro: "V-Bottom, Flat, Insulated y Gas Tight. Movilización con lowboy y baterías de hasta 20 tanques.",
    steps: [
      { src: "/frac-tanks/frac-tank-nuevo.webp", title: "Elegimos la configuración", text: "Según el fluido: crudo con sedimentos, agua de inyección o químicos." },
      { src: "/frac-tanks/bateria-frac-tanks.webp", title: "Instalamos en locación", text: "Tomas de 4\", 8\" y 12\" con válvulas mariposa certificadas." },
      { src: "/frac-tanks/bateria-frac-tanks-2.webp", title: "Interconectamos en batería", text: "Capacidad que escala: 10 tanques son 5,000 barriles." },
    ],
    stats: [
      { value: "500", label: "Barriles / unidad", highlight: true },
      { value: "4", label: "Configuraciones" },
      { value: "20", label: "Tanques en batería" },
      { value: "14 m", label: "De largo" },
    ],
    closing: { src: "/frac-tanks/bateria-frac-tanks.webp", label: "Dónde aplica", heading: "Campo, remediación y paradas de planta", text: "Flowback, agua de producción, limpieza de tanques de refinería, reserva de combustible y control de efluentes." },
  },
  "manejo-de-desechos": {
    eyebrow: "Gestión ambiental · Decreto 2635",
    headline: "Cada residuo con su manifiesto y su certificado.",
    hero: { kind: "single", src: "/desechos/retroexcavadora-fosa.webp" },
    subtitle: "De la caracterización a la disposición final",
    stepsIntro: "Lodos, aguas de producción, suelos contaminados y borras asfálticas, con trazabilidad completa.",
    steps: [
      { src: "/desechos/retroexcavadora-fosa.webp", title: "Caracterizamos y clasificamos", text: "Tipo, volumen y peligrosidad según el Decreto 2635." },
      { src: "/vacuum/vacuum-truck-howo-pdvsa.webp", title: "Recolectamos y transportamos", text: "Unidades herméticas con manifiesto de residuos." },
      { src: "/desechos/cargador-fosa.webp", title: "Entregamos y certificamos", text: "Instalación autorizada por el MPPEA y certificado al cliente." },
    ],
    stats: [
      { value: "2635", label: "Decreto venezolano", highlight: true },
      { value: "4", label: "Tipos de residuo" },
      { value: "100%", label: "Trazabilidad" },
      { value: "24/7", label: "Operación" },
    ],
    closing: { src: "/desechos/cargador-fosa.webp", label: "Qué manejamos", heading: "Lodos, aguas, suelos y borras", text: "Base agua y base aceite, aguas de formación, ripios de perforación y borras asfálticas de fondo de tanque." },
  },
  "alquiler-calderas-inyeccion-vapor": {
    eyebrow: "Alquiler de calderas · Inyección de vapor a pozos y patio de tanques",
    headline: "Vapor donde su operación lo necesita: pozos, tanques y patio de tanques.",
    hero: { kind: "single", src: "/vapor/caldera-otsg-semirremolque.webp" },
    subtitle: "Generadores OTSG 100% automatizados",
    stepsIntro: "Calentamiento de tanques de almacenamiento, patios de tanques y sellos de bomba en carga de buques.",
    steps: [
      { src: "/vapor/generador-vapor-otsg.webp", title: "Tratamos el agua", text: "Suavización y desgasificación para proteger el generador." },
      { src: "/vapor/caldera-otsg-semirremolque.webp", title: "Generamos e inyectamos", text: "Vapor por serpentines o lanzas, con control automático de presión y temperatura." },
      { src: "/vapor/campo-pozos.webp", title: "Mantenemos la temperatura", text: "El crudo pesado fluye durante toda la transferencia o el despacho." },
    ],
    stats: [
      { value: "100%", label: "Automatizado", highlight: true },
      { value: "OTSG", label: "Generador de vapor" },
      { value: "24/7", label: "Operación" },
      { value: "Zulia", label: "Campos ejecutados" },
    ],
    closing: { src: "/vapor/generador-vapor-otsg.webp", label: "Dónde aplica", heading: "Tanques, patios, muelles y pozos", text: "Calentamiento de tanques y líneas de patio, sellos de bombas de carga, y estimulación de pozos cuando el proyecto lo requiere." },
  },
  "limpieza-industrial-hidrojet": {
    eyebrow: "Limpieza industrial · Hydrojet 20.000 y 40.000 PSI",
    headline: "Agua que corta metal. Sin chispas, sin abrasivos.",
    hero: { kind: "single", src: "/hidrojet/unidad-hidrojet-campo.png" },
    subtitle: "Trabajo en frío para áreas clasificadas",
    stepsIntro: "Intercambiadores, destape de líneas, preparación de superficies y espacios confinados.",
    steps: [
      { src: "/hidrojet/unidad-hidrojet-equipo.png", title: "Elegimos la unidad", text: "PARTEK 20.000 PSI para caudal; UHP 40.000 PSI para poder de corte." },
      { src: "/hidrojet/unidad-hidrojet-campo.png", title: "Limpiamos con agua pura", text: "Boquillas rotativas de zafiro y crawlers que evitan la exposición del operador." },
      { src: "/vacuum/vacuum-truck-howo-pdvsa.webp", title: "Recogemos los residuos", text: "Unidad vacuum de 160 Bbl en sincronía, cumpliendo RACDA." },
    ],
    stats: [
      { value: "40.000", label: "PSI de presión máxima", highlight: true },
      { value: "250", label: "HP motor John Deere" },
      { value: "0", label: "Chispas · trabajo en frío" },
      { value: "HSE", label: "Cuadrilla certificada" },
    ],
    closing: { src: "/hidrojet/unidad-hidrojet-equipo.png", label: "Dónde aplica", heading: "Refinerías, plantas y locaciones activas", text: "Haces de tubos, calderas, tuberías con coque y asfaltenos, decapado de pintura y óxido, y fondos de tanque." },
  },
  "recuperacion-de-crudo-en-fosas": {
    eyebrow: "Recuperación térmica · Fosas, canales y tanques",
    headline: "La misma fosa. Antes y después.",
    hero: { kind: "split", antes: "/fosas/fosa-2-antes.jpg", despues: "/fosas/fosa-2-despues.jpg" },
    subtitle: "Tres pasos, una sola cuadrilla",
    stepsIntro: "Del crudo solidificado al barril recuperado, con equipos propios y documentación para el MPPEA.",
    steps: [
      { src: "/vapor/caldera-otsg-semirremolque.webp", title: "Inyectamos vapor", text: "Generador OTSG y lanzas directas en la masa de crudo." },
      { src: "/fosas/fosa-1-antes.jpg", title: "Extraemos el crudo", text: "Bomba de tornillo y vacuum de 160 Bbl hacia frac tanks." },
      { src: "/fosas/fosa-1-despues.jpg", title: "Entregamos saneado", text: "Balance de barriles y reportes para el expediente ambiental." },
    ],
    stats: [
      { value: "1,500", label: "Barriles / día", highlight: true },
      { value: "4", label: "Equipos propios" },
      { value: "24/7", label: "Operación" },
      { value: "MPPEA", label: "Documentación incluida" },
    ],
    closing: { src: "/fosas/fosa-2-despues.jpg", label: "Dónde aplica", heading: "Fosas, canales y fondos de tanque", text: "Cualquier acumulación de crudo solidificado o lodo petrolizado, incluidos pasivos ambientales heredados." },
  },
};

export function getServicePageContent(slug: string): ServicePageContent | undefined {
  return SERVICE_PAGE_CONTENT[slug];
}
