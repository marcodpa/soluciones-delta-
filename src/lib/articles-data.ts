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
  {
    slug: "como-se-recupera-el-crudo-de-una-fosa-petrolizada",
    title: "Cómo se recupera el crudo de una fosa petrolizada",
    seoTitle: "Cómo se recupera el crudo de una fosa petrolizada: recuperación térmica paso a paso",
    description: "Qué es una fosa petrolizada, por qué el crudo se solidifica y cómo la recuperación térmica con vapor lo devuelve a producción: proceso, equipos, capacidad y documentación ambiental.",
    eyebrow: "Guía · Recuperación de crudo",
    lead: "Una fosa petrolizada es una laguna de crudo, agua y sedimentos que quedó de operaciones anteriores. Con los años el hidrocarburo se solidifica y deja de ser bombeable: es un pasivo ambiental y, al mismo tiempo, barriles de producto perdidos. La recuperación térmica resuelve las dos cosas.",
    cover: "/fosas/fosa-2-antes.jpg",
    coverAlt: "Fosa petrolizada a cielo abierto antes de la recuperación térmica en el Estado Zulia",
    published: "2026-09-10",
    readingMinutes: 6,
    serviceSlug: "recuperacion-de-crudo-en-fosas",
    serviceLabel: "Ver el servicio de recuperación de crudo en fosas",
    sections: [
      {
        heading: "Por qué el crudo de una fosa no se puede bombear",
        paragraphs: [
          "El crudo pesado y extrapesado pierde sus fracciones ligeras con el tiempo y la exposición al sol. Lo que queda es una masa viscosa de asfaltenos y parafinas mezclada con agua y arena que forma emulsiones estables. Una bomba convencional no logra moverla, y un vacuum apenas retira la capa más fluida. Hace falta cambiar el estado del material antes de extraerlo.",
        ],
      },
      {
        heading: "El principio: calor controlado",
        paragraphs: [
          "La recuperación térmica consiste en transferir calor de forma controlada a la masa de crudo. Se inyecta vapor mediante lanzas perforadas directamente en el material; al subir la temperatura, la viscosidad cae drásticamente, las emulsiones crudo-agua-arena se rompen y el hidrocarburo vuelve a fluir. A partir de ahí se comporta como un crudo pesado normal: se puede succionar, bombear y almacenar.",
          "La fuente térmica es un generador de vapor OTSG 100% automatizado, con tratamiento de agua de alimentación (suavización y desgasificación) para proteger el equipo durante operaciones continuas.",
        ],
      },
      {
        heading: "El proceso paso a paso",
        paragraphs: ["Cada recuperación sigue un procedimiento documentado desde la evaluación hasta la entrega del crudo:"],
        list: [
          "Caracterización de la fosa o tanque: volumen, viscosidad, contenido de agua y sedimentos",
          "Instalación del generador de vapor y del sistema de lanzas de inyección",
          "Inyección térmica progresiva con monitoreo de temperatura y fluidez del material",
          "Extracción del crudo fluidizado con bomba de tornillo o unidad vacuum de 160 barriles",
          "Almacenamiento temporal en frac tanks de 500 barriles y separación del agua libre por decantación",
          "Medición de volúmenes recuperados y reporte al cliente",
          "Remediación progresiva hasta el saneamiento total del área",
        ],
      },
      {
        heading: "Cuánto se recupera y a dónde va",
        paragraphs: [
          "En contratos ejecutados en campos del Estado Zulia la capacidad demostrada es de 1,500 barriles por día, aunque el rendimiento real depende del volumen, la viscosidad y el contenido de agua de cada fosa. El crudo recuperado se reincorpora a la cadena productiva; el agua libre va a pozos de inyección autorizados o plantas de tratamiento, y los lodos no recuperables se manejan bajo el Decreto 2635 con manifiesto y certificado de disposición final.",
        ],
      },
      {
        heading: "Documentación ambiental",
        paragraphs: [
          "Recuperar una fosa es también cerrar un expediente. El servicio incluye el balance de masa antes y después de la intervención y los reportes necesarios ante el MPPEA, de modo que el operador pueda demostrar el saneamiento del pasivo ambiental.",
        ],
      },
    ],
    faq: [
      { q: "¿Sirve también para canales y fondos de tanque?", a: "Sí. El mismo principio aplica a canales y drenajes con crudo acumulado, a fondos de tanque con borras solidificadas y a áreas impactadas por derrames de crudo pesado." },
      { q: "¿Cuánto crudo se puede recuperar por día?", a: "La capacidad demostrada es de 1,500 barriles diarios; la cifra final depende de las características de la fosa, que se evalúan en la caracterización inicial." },
      { q: "¿Qué diferencia hay con la inyección de vapor para tanques?", a: "La inyección de vapor para tanques mantiene fluido el crudo almacenado en operación normal. La recuperación térmica ataca crudo ya solidificado o perdido en pasivos ambientales, e incluye extracción, almacenamiento, separación y documentación." },
    ],
  },
  {
    slug: "hydroblasting-vs-sandblasting-limpieza-industrial",
    title: "Hydroblasting vs sandblasting: cuál usar en refinerías y plantas",
    seoTitle: "Hydroblasting vs sandblasting: limpieza industrial con agua a 40.000 PSI",
    description: "Diferencias entre la limpieza con agua a ultra alta presión (hydroblasting, 20.000 y 40.000 PSI) y el sandblasting: seguridad en áreas clasificadas, residuos, aplicaciones y cuándo conviene cada uno.",
    eyebrow: "Guía · Limpieza industrial",
    lead: "Las dos técnicas quitan óxido, pintura, coque y depósitos endurecidos. La diferencia está en el medio: el sandblasting proyecta abrasivo con aire comprimido; el hydroblasting usa solo agua a presiones de 20.000 y 40.000 PSI. En una refinería o una locación de perforación activa, esa diferencia decide cuál se puede usar.",
    cover: "/hidrojet/unidad-hidrojet-campo.png",
    coverAlt: "Unidad hydrojet de 40.000 PSI de Soluciones Delta en una locación de campo",
    published: "2026-09-10",
    readingMinutes: 5,
    serviceSlug: "limpieza-industrial-hidrojet",
    serviceLabel: "Ver el servicio de limpieza industrial con hydrojet",
    sections: [
      {
        heading: "La ventaja decisiva: trabajo en frío, sin chispas",
        paragraphs: [
          "El sandblasting genera calor por fricción, chispas y una nube de polvo abrasivo. En un área clasificada con presencia de hidrocarburos eso es una fuente de ignición y, además, polvo de sílice para el operador. El corte con agua no produce chispas ni calor: por eso es el estándar exigido en refinerías y locaciones de perforación activa para preparar superficies y destapar líneas sin detener la operación vecina.",
        ],
      },
      {
        heading: "Qué hace cada presión",
        paragraphs: ["No es lo mismo 20.000 que 40.000 PSI; cada unidad resuelve un tipo de trabajo:"],
        list: [
          "20.000 PSI (unidad PARTEK, 10–13 GPM): alto caudal para lavado industrial, remoción de óxido severo y limpieza interna de intercambiadores de calor y tuberías, donde el volumen de agua y la fuerza de impacto hacen el trabajo",
          "40.000 PSI (unidad UHP, 3–6 GPM): poder de corte concentrado para hidrodemolición de concreto, remoción de revestimientos epóxicos pesados y decapado sin abrasivos",
          "Boquillas rotativas con insertos de zafiro o diamante industrial y boquillas auto-propulsadas para limpiar tuberías por dentro sin desarmarlas",
        ],
      },
      {
        heading: "Residuos: la otra diferencia",
        paragraphs: [
          "El sandblasting deja toneladas de abrasivo contaminado con la pintura o el producto removido, que hay que recoger y disponer. El hydroblasting genera solo agua con el residuo desprendido, que se succiona de inmediato con una unidad vacuum de 160 barriles y se gestiona conforme a la normativa RACDA. Menos volumen, menos manipulación y un área de trabajo limpia al terminar.",
        ],
      },
      {
        heading: "Cuándo sigue conviniendo el sandblasting",
        paragraphs: [
          "En estructuras nuevas, fuera de áreas clasificadas y cuando se necesita un perfil de anclaje específico para pintura, el abrasivo sigue siendo válido y a veces más rápido. La regla práctica: si hay hidrocarburos cerca, equipos que no pueden dañarse o espacios confinados, el agua a ultra alta presión es la opción segura.",
        ],
      },
      {
        heading: "Seguridad del personal",
        paragraphs: [
          "A 40.000 PSI un chorro de agua corta metal, así que la cuadrilla opera con traje completo de Kevlar/Dyneema certificado, botas con protección metatarsal, careta de impacto total y guantes blindados. Las mangueras llevan guayas anti-látigo, las pistolas son de descarga neumática (al soltar el gatillo el agua va a cero presión) y un supervisor HSE demarca la zona de exclusión y gestiona los permisos de trabajo.",
        ],
      },
    ],
    faq: [
      { q: "¿El hydroblasting daña el metal base?", a: "No. El agua pura remueve el depósito o el recubrimiento sin desgastar el sustrato metálico, a diferencia del abrasivo, que sí lo erosiona." },
      { q: "¿Pueden limpiar un haz de tubos de intercambiador?", a: "Sí, con lanzas rígidas y posicionadores semiautomatizados que evitan la exposición directa del operador, usando la unidad de 20.000 PSI por su mayor caudal." },
      { q: "¿Qué pasa con el agua y el residuo que genera la limpieza?", a: "Se succionan de inmediato con una unidad vacuum de 160 barriles y, si el residuo es peligroso, se gestionan con el servicio de manejo de desechos bajo el Decreto 2635." },
    ],
  },
  {
    slug: "decreto-2635-manejo-de-desechos-petroleros",
    title: "Decreto 2635: qué exige para el manejo de desechos petroleros",
    seoTitle: "Decreto 2635 en Venezuela: manejo de desechos petroleros y peligrosos",
    description: "Qué regula el Decreto 2635 en Venezuela, cómo se clasifican los desechos petroleros (lodos, aguas de producción, suelos contaminados, borras) y qué documentación exige: manifiesto y certificado de disposición final.",
    eyebrow: "Guía · Gestión ambiental",
    lead: "El Decreto 2635 es la norma venezolana que clasifica y regula el manejo de desechos y materiales peligrosos. Para una operación petrolera no es un trámite: define qué residuos son peligrosos, cómo deben transportarse y qué papeles deben respaldar cada movimiento hasta la disposición final.",
    cover: "/desechos/retroexcavadora-fosa.webp",
    coverAlt: "Retroexcavadora en saneamiento de una fosa petrolera durante un manejo de desechos",
    published: "2026-09-10",
    readingMinutes: 5,
    serviceSlug: "manejo-de-desechos",
    serviceLabel: "Ver el servicio de manejo de desechos industriales",
    sections: [
      {
        heading: "Qué residuos genera una operación petrolera",
        paragraphs: ["Los cuatro grupos que más se manejan en campo, y cómo se tratan:"],
        list: [
          "Lodos de perforación y completación, base agua (WBM) o base aceite (OBM), con sus ripios: succión con vacuum, transporte y tratamiento térmico o biológico",
          "Aguas de producción y drenajes industriales: alta salinidad, hidrocarburos disueltos y a veces metales pesados; reinyección en pozos autorizados o tratamiento fisicoquímico",
          "Suelos contaminados por derrames de crudo, combustible o químicos: remediación por landfarming, biopila o tratamiento ex-situ (norma COVENIN 3386:2003)",
          "Borras asfálticas de fondos de frac tanks, tuberías y separadores: fluidización con calor, succión con vacuum y coprocesamiento o incineración industrial",
        ],
      },
      {
        heading: "Lo que exige la norma en cada paso",
        paragraphs: ["El Decreto 2635, junto con la Ley Orgánica del Ambiente y las normas COVENIN aplicables, obliga a documentar la cadena completa:"],
        list: [
          "Caracterización del residuo en campo: tipo, volumen y peligrosidad",
          "Clasificación como peligroso, no peligroso o especial",
          "Embalaje y etiquetado según la normativa de transporte",
          "Transporte en unidades herméticas con manifiesto de residuos (origen, transportista, destino)",
          "Entrega en una instalación de disposición final autorizada por el MPPEA",
          "Certificado de disposición final emitido por la instalación receptora y entregado al generador",
        ],
      },
      {
        heading: "Por qué importa cumplirlo",
        paragraphs: [
          "Incumplir el Decreto 2635 puede significar multas, cierre de operaciones y responsabilidad penal para el generador del residuo, no solo para quien lo transporta. El manifiesto y el certificado de disposición final son la prueba de que cada barril de lodo o borra terminó donde debía; conviene exigirlos al proveedor en cada operación y archivarlos.",
        ],
      },
      {
        heading: "Residuos con H2S y fluidos volátiles",
        paragraphs: [
          "Muchos desechos petroleros traen ácido sulfhídrico o gases volátiles. Su manejo exige monitores de 4 gases, respiradores con cartuchos específicos, unidades con aterramiento certificado y procedimientos de espacios confinados según las normas PDVSA. Es un punto que debe estar cubierto antes de que llegue el primer camión.",
        ],
      },
    ],
    faq: [
      { q: "¿Quién es responsable del residuo, el generador o el transportista?", a: "Ambos tienen obligaciones, pero la responsabilidad última sobre el destino del residuo recae en el generador. Por eso el manifiesto y el certificado de disposición final deben quedar en poder del cliente." },
      { q: "¿Las aguas de producción son desecho peligroso?", a: "Depende de su composición: por su salinidad, hidrocarburos disueltos y posibles metales pesados suelen requerir análisis fisicoquímico y disposición en pozos de inyección autorizados o plantas de tratamiento." },
      { q: "¿Qué se hace con las borras muy solidificadas?", a: "Se precalientan con vapor o agua caliente para fluidizarlas antes de succionarlas con vacuum, lo que permite retirar más del 95% del volumen." },
    ],
  },
  {
    slug: "desnatado-y-bombeo-de-crudo-pesado-como-funciona",
    title: "Desnatado y bombeo de crudo pesado: cómo funciona la bomba de tornillo",
    seoTitle: "Desnatado y bombeo de crudo pesado: bomba de tornillo hidráulica sin emulsificación",
    description: "Cómo funciona el desnatado de crudo (natilla) con plato recolector y bomba de tornillo hidráulica a 15,000 PSI, por qué no emulsiona el crudo y qué capacidad alcanza: hasta 1,500 barriles por día.",
    eyebrow: "Guía · Bombeo de crudo",
    lead: "Desnatar es retirar la capa de crudo liviano que flota sobre el agua en una fosa de producción, sin llevarse el agua con ella. Hacerlo bien depende de dos cosas: un plato recolector que capte solo la capa superior y una bomba que mueva el crudo sin cortarlo ni mezclarlo.",
    cover: "/bombeo/bomba-en-fosa.webp",
    coverAlt: "Bomba de tornillo hidráulica de Soluciones Delta operando en una fosa de crudo",
    published: "2026-09-10",
    readingMinutes: 5,
    serviceSlug: "bombeo-de-crudo",
    serviceLabel: "Ver el servicio de bombeo y desnatado de crudo",
    sections: [
      {
        heading: "Qué es la natilla y por qué se desnata",
        paragraphs: [
          "En las fosas de producción el crudo liviano se separa por densidad y forma una capa flotante conocida como natilla. Si se bombea desde el fondo, se arrastra agua y sedimento y el producto llega al tanque emulsionado, con un proceso de deshidratación posterior más largo y costoso. El desnatado capta esa capa superior con la mínima cantidad de otros líquidos.",
        ],
      },
      {
        heading: "El equipo: motor hidráulico y bomba de tornillo separados",
        paragraphs: ["El sistema se compone de una unidad de potencia hidráulica y una bomba de tornillo acoplada a un motor hidráulico:"],
        list: [
          "Unidad de potencia hidráulica a 15,000 PSI, con presión variable de 0 a 10,000 PSI en el motor según la viscosidad del crudo",
          "Bomba de tornillo (screw pump) que desplaza el fluido sin cortarlo, preservando sus propiedades físicas",
          "Motor y bomba separados, unidos por mangueras hidráulicas: la bomba se coloca donde está el crudo y el motor donde hay acceso",
          "Plato acerado desnatador que capta la natilla en superficie",
          "Descarga por manguera de 6 pulgadas a frac tanks de 500 barriles o cisternas",
          "Generador eléctrico de 400 KVA y tráiler operacional de soporte en sitio",
        ],
      },
      {
        heading: "Por qué importa no emulsionar",
        paragraphs: [
          "Una bomba centrífuga agita y mezcla el crudo con el agua, creando emulsiones que después hay que romper con calor o químicos. La bomba de tornillo empuja el fluido en un movimiento continuo y suave, así que el crudo llega al tanque como salió de la fosa. El resultado es un producto más fácil de separar, deshidratar y despachar.",
        ],
      },
      {
        heading: "Capacidad y otros usos",
        paragraphs: [
          "La capacidad nominal es de 1,500 barriles por 24 horas, ajustable según el requerimiento del proceso; para volúmenes mayores se operan varias unidades en paralelo. El mismo sistema sirve para transferir crudo entre frac tanks y cisternas, cargar escuadras de transporte, recircular con diluyente o nafta, manejar aguas efluentes y apoyar operaciones de inyección de vapor.",
        ],
      },
      {
        heading: "Seguridad en la operación",
        paragraphs: [
          "Cada trabajo empieza con un análisis de riesgo (ART), aterramiento del equipo, mangueras hidráulicas certificadas y verificación de presión y estanqueidad antes de arrancar. Un supervisor técnico permanece en sitio y se miden y reportan los volúmenes transferidos en cada jornada.",
        ],
      },
    ],
    faq: [
      { q: "¿Pueden manejar crudo extrapesado y aguas efluentes con el mismo equipo?", a: "Sí. La presión hidráulica variable de 0 a 10,000 PSI permite adaptar la bomba de tornillo desde fluidos livianos como aguas de producción hasta crudos de API pesado de alta viscosidad." },
      { q: "¿Cuánto produce el sistema en una jornada?", a: "Hasta 1,500 barriles por 24 horas, ajustable según el proceso. Para más volumen se operan varias unidades en paralelo." },
      { q: "¿Por qué el motor va separado de la bomba?", a: "Para poder colocar la bomba en fosas de difícil acceso y el motor donde haya espacio seguro, conectados por mangueras hidráulicas." },
    ],
  },
  {
    slug: "alquiler-de-calderas-e-inyeccion-de-vapor-para-tanques-y-pozos",
    title: "Alquiler de calderas e inyección de vapor: cuándo la necesita su tanque, patio o pozo",
    seoTitle: "Alquiler de calderas e inyección de vapor para tanques, patio de tanques y pozos",
    description: "Para qué sirve alquilar un generador de vapor OTSG en operaciones petroleras: calentamiento de tanques y patios de tanques, sellos de bomba en carga de buques, estimulación de pozos (Huff & Puff, SAGD) y tratamiento del agua de alimentación.",
    eyebrow: "Guía · Inyección de vapor",
    lead: "El crudo pesado se vuelve difícil de bombear cuando se enfría. Un generador de vapor en alquiler devuelve la fluidez donde hace falta: en un tanque de almacenamiento, en las líneas de un patio de tanques, en los sellos de una bomba de carga o dentro de un pozo.",
    cover: "/vapor/caldera-otsg-semirremolque.webp",
    coverAlt: "Generador de vapor OTSG sobre semirremolque de Soluciones Delta",
    published: "2026-09-10",
    readingMinutes: 5,
    serviceSlug: "alquiler-calderas-inyeccion-vapor",
    serviceLabel: "Ver alquiler de calderas e inyección de vapor",
    sections: [
      {
        heading: "Qué es un generador OTSG y por qué importa que sea automático",
        paragraphs: [
          "Un OTSG (generador de vapor de un solo paso) produce vapor de alta capacidad en presión y temperatura para operación continua en campo. Con el proceso 100% automatizado —regulación de presión, temperatura, caudal de agua y combustión— el vapor sale con calidad constante y el personal trabaja con más seguridad y menos intervención manual.",
        ],
      },
      {
        heading: "Aplicaciones en tanques y patio de tanques",
        paragraphs: ["Es el uso más frecuente en instalaciones de almacenamiento:"],
        list: [
          "Calentamiento de crudo pesado y extrapesado en tanques para reducir su viscosidad antes de bombear o despachar",
          "Mantenimiento de temperatura en patios de tanques, serpentines y líneas de proceso",
          "Prevención de solidificación y de formación de borras en el fondo del tanque",
          "Calentamiento de sellos mecánicos de bombas de carga y líneas de descarga en muelles y terminales durante la carga de buques",
        ],
      },
      {
        heading: "Aplicaciones en pozos",
        paragraphs: ["Cuando el proyecto lo requiere, el mismo generador sirve para estimulación térmica de yacimientos de crudo pesado:"],
        list: [
          "Huff & Puff (inyección cíclica alterna de vapor)",
          "Inyección continua de vapor (steam flooding)",
          "SAGD, drenaje por gravedad asistido con vapor",
        ],
      },
      {
        heading: "El agua es el factor crítico",
        paragraphs: [
          "El agua de alimentación decide la vida útil y la eficiencia del generador. Por eso el servicio incluye el tratamiento completo: suavización por intercambio iónico para eliminar calcio y magnesio, desmineralización para bajar los sólidos disueltos, desgasificación de oxígeno y CO₂, dosificación de inhibidores de incrustación y corrosión, y análisis periódico de calidad en campo. El agua se almacena en frac tanks de fondo plano para evitar contaminación por partículas.",
        ],
      },
      {
        heading: "Qué incluye el alquiler",
        paragraphs: [
          "Además del generador, el alcance cubre el tratamiento del agua, el personal técnico operador, el personal de mantenimiento en campo y toda la documentación operativa, con equipos portátiles para locaciones remotas y planificación de turnos y logística de movilización acordada antes de salir.",
        ],
      },
    ],
    faq: [
      { q: "¿Cómo se calienta un tanque de crudo con vapor?", a: "El vapor se inyecta por los serpentines del tanque o con lanzas de inyección directa, según la instalación, y se mantiene la temperatura objetivo mientras dura la transferencia o el despacho, con registro de temperatura, presión y consumo." },
      { q: "¿Qué datos necesitan para cotizar?", a: "Dónde se hará el trabajo (tanque, patio, muelle o pozo), la aplicación prevista, la duración estimada y, si se tienen, los requerimientos de caudal de vapor, presión y temperatura, además de la disponibilidad de agua y combustible." },
      { q: "¿Atienden fuera de Zulia?", a: "Sí, desde la sede en San Francisco, Zulia, se atienden proyectos en Venezuela; la movilización, los accesos y la disponibilidad del generador se confirman en la cotización." },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(article => article.slug === slug);
}
