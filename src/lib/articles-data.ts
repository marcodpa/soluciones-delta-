// Artículos informativos: responden las búsquedas que ya muestran la web en Google
// ("camión vacuum para qué sirve", "frac tank 500 bbl", etc.) y enlazan al servicio.

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  cover: string;
  coverAlt: string;
  published: string; // ISO date
  readingMinutes: number;
  serviceSlug: string;
  serviceLabel: string;
  sections: ArticleSection[];
  faq: { q: string; a: string }[];
}

export const ARTICLES: Article[] = [
  {
    slug: "que-es-un-camion-vacuum-y-para-que-sirve",
    title: "¿Qué es un camión vacuum y para qué sirve en la industria petrolera?",
    seoTitle: "¿Qué es un camión vacuum y para qué sirve? Guía de la industria petrolera",
    description: "Qué es un camión vacuum, cómo funciona el sistema de vacío, qué fluidos succiona (lodos, borras, efluentes) y cuándo contratarlo en operaciones petroleras en Venezuela.",
    eyebrow: "Guía · Vacuum petrolero",
    lead: "Un camión vacuum (también llamado vacuum truck, camión de vacío o unidad de succión) es un vehículo equipado con un tanque hermético y un compresor que genera vacío para succionar fluidos que ninguna bomba convencional puede mover: borras, lodos, aguas con sólidos y crudo derramado.",
    cover: "/vacuum/vacuum-truck-howo-pdvsa.webp",
    coverAlt: "Camión vacuum de Soluciones Delta en operación en una locación petrolera",
    published: "2026-09-10",
    readingMinutes: 5,
    serviceSlug: "trasegado-vacuum",
    serviceLabel: "Ver el servicio de camión vacuum 160 Bbl",
    sections: [
      {
        heading: "Cómo funciona un camión vacuum",
        paragraphs: [
          "El corazón del equipo es el compresor de vacío. Al arrancar, extrae el aire del interior del tanque y crea una presión negativa; cuando se abre la válvula de succión, la presión atmosférica empuja el fluido por la manguera hacia el tanque. Por eso un vacuum puede \"jalar\" desde una fosa, un fondo de tanque o un espacio confinado sin que ninguna bomba toque el material.",
          "Nuestra unidad, por ejemplo, monta un compresor NVE Challenger 607 de 380 CFM que alcanza 29\" Hg de vacío, sobre un semirremolque de 160 barriles (25,440 litros) fabricado en 2026. El mismo compresor invierte el flujo para descargar por presión en el sitio de disposición.",
        ],
      },
      {
        heading: "Qué fluidos succiona un vacuum petrolero",
        paragraphs: ["Está diseñado para los materiales más difíciles de una operación de petróleo y gas:"],
        list: [
          "Borras asfálticas y fondos de tanques de almacenamiento de crudo",
          "Lodos de perforación y completación, base agua o base aceite",
          "Aguas de producción con alto contenido de sólidos y sedimentos",
          "Crudo pesado y extrapesado derramado o acumulado en fosas",
          "Efluentes industriales, aguas pluviales contaminadas y residuos de limpieza de tanques",
        ],
      },
      {
        heading: "Vacuum o bomba: cuál usar",
        paragraphs: [
          "Una bomba convencional empuja el fluido desde afuera (presión positiva) y necesita que el material fluya por sí solo hasta la succión. El vacuum trabaja al revés: jala desde adentro del tanque, así que funciona con materiales semisólidos, desde espacios cerrados y a distancia. Para crudo líquido en una fosa amplia conviene el bombeo de tornillo; para borras, lodos espesos o fondos de tanque, el vacuum.",
          "En muchas operaciones se combinan: el vacuum retira lodos y residuos mientras la bomba transfiere el crudo recuperado a frac tanks o cisternas.",
        ],
      },
      {
        heading: "Cuándo contratar un servicio de vacuum",
        paragraphs: ["Las situaciones más frecuentes en las que nuestros clientes en Zulia y el resto de Venezuela nos llaman:"],
        list: [
          "Limpieza de tanques de almacenamiento antes de una inspección o reparación",
          "Retiro de lodos y ripios en locaciones de perforación",
          "Saneamiento de fosas petrolizadas y áreas impactadas por derrames",
          "Manejo de aguas de producción y efluentes hacia pozos de inyección o plantas de tratamiento",
          "Apoyo a limpieza industrial con hydrojet, succionando el residuo generado",
        ],
      },
      {
        heading: "Seguridad y documentación",
        paragraphs: [
          "Un vacuum bien operado protege al personal porque nadie tiene contacto directo con el fluido. La unidad debe contar con sistema de aterramiento (obligatorio con fluidos volátiles o presencia de H2S), válvulas herméticas, manómetro de presión y vacío calibrado y acoples certificados. Cada operación debe cerrar con la descarga en un sitio autorizado y, cuando aplica, el manifiesto de residuos que exige el Decreto 2635.",
        ],
      },
    ],
    faq: [
      { q: "¿Cuánto tarda en llenarse un camión vacuum de 160 barriles?", a: "Con fluidos acuosos o lodos ligeros, entre 45 y 90 minutos. Con borras asfálticas o materiales muy viscosos puede tomar de 2 a 4 horas, según la distancia de succión." },
      { q: "¿Puede un vacuum trabajar con gases volátiles o H2S?", a: "Sí, siempre que cuente con aterramiento certificado, válvulas herméticas y personal con protección respiratoria. Nuestra unidad opera bajo esos protocolos." },
      { q: "¿Qué pasa con lo que succiona el camión?", a: "Depende del material: los fluidos reutilizables van a tanques de almacenamiento, las aguas de producción a pozos de inyección autorizados y los desechos peligrosos a instalaciones de disposición final certificadas, con manifiesto de residuos." },
    ],
  },
  {
    slug: "frac-tank-que-es-capacidad-y-cuando-alquilarlo",
    title: "Frac tank: qué es, qué capacidad tiene y cuándo conviene alquilarlo",
    seoTitle: "Frac tank: qué es, capacidad de 500 Bbl y cuándo alquilarlo",
    description: "Qué es un frac tank, cuánto almacena un tanque de 500 barriles, qué configuraciones existen (V-Bottom, Flat, Insulated, Gas Tight) y cuándo conviene alquilarlo en operaciones petroleras.",
    eyebrow: "Guía · Almacenamiento en campo",
    lead: "Un frac tank es un tanque de almacenamiento temporal montado sobre un chasis con ruedas, pensado para llegar a una locación, recibir fluidos durante una operación y retirarse cuando termina. Su nombre viene del fracturamiento hidráulico, pero hoy se usa en toda la cadena: crudo, agua, lodos, químicos y combustible.",
    cover: "/frac-tanks/bateria-frac-tanks.webp",
    coverAlt: "Batería de frac tanks de 500 barriles en una locación petrolera del Estado Zulia",
    published: "2026-09-10",
    readingMinutes: 5,
    serviceSlug: "frac-tanks",
    serviceLabel: "Ver alquiler de Frac Tanks 500 Bbl",
    sections: [
      {
        heading: "Cuánto almacena un frac tank de 500 barriles",
        paragraphs: [
          "El tamaño estándar en la industria es de 500 barriles, es decir, unos 79,500 litros por unidad. Un frac tank típico mide 14 metros de largo por 2.60 de ancho y 2.70 de alto, pesa unas 10 toneladas vacío y admite hasta 15 toneladas de carga. Se traslada con un lowboy o plataforma, apoyado en un solo eje y pin.",
          "Cuando la operación necesita más volumen, los tanques se interconectan en batería: diez unidades suman 5,000 barriles de almacenamiento sin obra civil.",
        ],
      },
      {
        heading: "Las cuatro configuraciones y para qué sirve cada una",
        paragraphs: ["No todos los frac tanks son iguales. La configuración correcta depende del fluido:"],
        list: [
          "V-Bottom: fondo en V que concentra los sólidos y permite vaciar el 100% con un vacuum. Es el indicado para crudo pesado con sedimentos.",
          "Flat Bottom: fondo plano, más económico, para fluidos limpios como agua de inyección para calderas.",
          "Insulated: paredes aisladas para mantener la temperatura de crudos que necesitan seguir fluidos.",
          "Gas Tight: hermético, para fluidos con vapores o gases que no deben liberarse.",
        ],
      },
      {
        heading: "Cuándo conviene alquilar en vez de instalar tanques fijos",
        paragraphs: ["El alquiler gana cuando el almacenamiento es temporal o el sitio cambia. Los casos más comunes:"],
        list: [
          "Flowback y agua de producción durante pruebas o estimulación de pozos",
          "Almacenamiento del crudo recuperado en el saneamiento de fosas y remediación de suelos",
          "Reserva de agua de lavado o fluidos de proceso durante paradas de planta",
          "Sustitución temporal mientras se limpia o repara un tanque fijo de refinería",
          "Reserva de combustible o químicos en locaciones remotas",
        ],
      },
      {
        heading: "Qué revisar antes de alquilar",
        paragraphs: [
          "Tres preguntas resuelven casi todo: qué fluido va a almacenar (define la configuración), cuánto volumen en el pico de la operación (define cuántos tanques) y cómo se va a vaciar al final (define si necesita V-Bottom y servicio de vacuum). Conviene verificar además las tomas disponibles —en nuestro caso 2 de 4\", una de 8\" y una de 12\" al frente, más drenaje trasero de 4\"— y que las válvulas mariposa estén certificadas.",
          "El alquiler suele combinarse con el bombeo de crudo para la carga y con el vacuum para la limpieza final del tanque, de modo que un solo proveedor cubra toda la operación.",
        ],
      },
    ],
    faq: [
      { q: "¿Cuántos barriles tiene un frac tank?", a: "El estándar es de 500 barriles (unos 79,500 litros). Con baterías interconectadas la capacidad escala de forma lineal." },
      { q: "¿Cómo se limpia un frac tank después de usarlo?", a: "Con una unidad vacuum que succiona los residuos del fondo; luego se inyecta agua a presión para arrastrar lo que queda y se vuelve a succionar. Toma entre 1 y 3 horas según las borras acumuladas." },
      { q: "¿Se puede almacenar agua para calderas en un frac tank?", a: "Sí, en configuración Flat Bottom, que evita la contaminación por partículas del fondo. El agua para generadores de vapor requiere alta pureza." },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(article => article.slug === slug);
}
