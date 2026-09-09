export interface ServiceData {
  slug: string;
  tag: string;
  title: string;
  heading?: string;
  subtitle: string;
  summary: string;
  heroColor: string;
  icon: string; // SVG path string
  overview: string;
  sections: {
    heading: string;
    body: string;
    list?: string[];
  }[];
  specs?: { label: string; value: string }[];
  benefits: { title: string; desc: string; icon: string }[];
  faq: { q: string; a: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "bombeo-de-crudo",
    tag: "Bombeo de Crudo",
    title: "Bombeo de Crudo",
    subtitle: "Extracción y Transferencia de Crudo Pesado",
    summary:
      "Servicio desnatador y de transferencia de crudo con bomba hidráulica tipo tornillo de 1,500 Bbl/día. Unidad de potencia a 15,000 PSI, succión por plato acerado desnatador y descarga por manguera de 6\". Motor y bomba separados para óptima ubicación en campo.",
    heroColor: "#eef7f1",
    icon: "M7 14h14M14 4v20",
    overview:
      "Nuestro servicio desnatador y de transferencia de crudo utiliza una bomba tipo tornillo operada por unidad de potencia hidráulica a 15,000 PSI. El diseño con motor y bomba separados permite una mejor ubicación en campo, adaptándose a fosas de crudo de difícil acceso. La succión se realiza mediante un plato acerado acondicionado especialmente para recolección de crudo (natilla), con descarga a través de manguera de 6 pulgadas hacia tanques de almacenamiento.",
    sections: [
      {
        heading: "¿Cómo funciona el sistema?",
        body: "El sistema está compuesto por un motor hidráulico acoplado a una bomba de tornillo. El motor hidráulico impulsa mediante aceite a presión variable desde 0 psi hasta 10,000 psi, conectado por mangueras hidráulicas que hacen girar el tornillo de la bomba para succionar fluidos.",
        list: [
          "Motor hidráulico con presión variable: 0 a 10,000 PSI",
          "Bomba de tornillo acoplada al motor hidráulico",
          "Conexión por mangueras hidráulicas de entrada y salida",
          "Plato recolector de crudo liviano (natilla) incorporado",
          "Generador eléctrico de 400 KVA de soporte",
          "Capacidad: 1,500 Bbl por 24 horas según requerimiento del proceso",
        ],
      },
      {
        heading: "Extracción de crudo de natilla en fosas",
        body: "El sistema está especialmente diseñado para la extracción eficiente de crudo liviano (natilla) acumulado en fosas de producción. El plato recolector incorporado permite captar el crudo con la mínima cantidad de otros líquidos, optimizando la eficiencia de separación o deshidratación posterior.",
        list: [
          "Succión directa desde la fosa de crudo",
          "Plato recolector que separa crudo liviano de otros líquidos",
          "Transferencia hacia tanque de crudo de 500 Bbl",
          "Minimiza la mezcla con agua u otros fluidos coexistentes",
          "Proceso de mayor eficacia para separación y deshidratación posterior",
        ],
      },
      {
        heading: "Diagrama operativo del sistema",
        body: "El flujo operativo del sistema sigue una secuencia clara desde la fosa hasta el destino final:",
        list: [
          "Fosa de crudo → Bomba de tornillo (succión)",
          "Mangueras hidráulicas In/Out ↔ Bomba/Motor hidráulico",
          "Salida de crudo → Tanque de crudo 500 Bbl",
          "Tráiler operacional / laboratorio de soporte en sitio",
          "Destino final: transporte o almacenamiento permanente",
        ],
      },
      {
        heading: "Aplicaciones adicionales en campo",
        body: "Además de la extracción de natilla, el sistema maneja una amplia gama de fluidos:",
        list: [
          "Fluidos livianos: aguas efluentes de producción",
          "Crudos de API pesado en cualquier rango de viscosidad",
          "Transferencia entre Frac Tanks y camiones cisterna",
          "Carga de escuadras de transporte de crudo pesado",
          "Recirculación y mezcla con diluyente o nafta",
          "Apoyo a operaciones de inyección de vapor",
        ],
      },
      {
        heading: "Seguridad y protocolo operativo",
        body: "Cada operación sigue un protocolo estricto de seguridad e higiene industrial:",
        list: [
          "1. Análisis de riesgo previo (ART) en sitio",
          "2. Instalación de sistema de aterramiento y EPP completo",
          "3. Conexión de mangueras hidráulicas certificadas",
          "4. Verificación de presión y estanqueidad del sistema",
          "5. Operación continua con supervisor técnico en sitio",
          "6. Medición de volúmenes transferidos y reporte",
          "7. Desconexión segura y limpieza del área",
        ],
      },
    ],
    specs: [
      { label: "Tipo de bomba", value: "Tornillo (Screw Pump)" },
      { label: "Motor", value: "Unidad de potencia hidráulica" },
      { label: "Presión hidráulica", value: "15,000 PSI" },
      { label: "Capacidad", value: "1,500 Bbl / día" },
      { label: "Descarga", value: "Manguera 6 pulgadas" },
      { label: "Succión", value: "Plato acerado desnatador" },
      { label: "Configuración", value: "Motor y bomba separados" },
      { label: "Disponibilidad", value: "24 horas / 7 días" },
    ],
    benefits: [
      {
        title: "1,500 Bbl / 24h",
        desc: "Capacidad de producción de hasta 1,500 barriles por día según el Stroker o requerimiento del proceso.",
        icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
      },
      {
        title: "Plato recolector de natilla",
        desc: "Sistema incorporado que captura crudo liviano con mínima contaminación, mejorando la eficiencia de separación posterior.",
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      },
      {
        title: "Presión variable 0–10,000 PSI",
        desc: "Control hidráulico preciso que adapta la potencia del sistema al tipo y viscosidad del crudo en cada operación.",
        icon: "M22 12h-4l-3 9L9 3l-3 9H2",
      },
      {
        title: "Sin emulsificación",
        desc: "La bomba de tornillo no corta ni mezcla el crudo, preservando sus propiedades físicas durante toda la transferencia.",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
      },
    ],
    faq: [
      {
        q: "¿Qué es el crudo de natilla y cómo lo extraen?",
        a: "La natilla es una capa de crudo liviano que flota sobre las aguas en fosas de producción. Nuestro sistema incorpora un plato recolector que succiona esta capa con la mínima cantidad de otros líquidos, transfiriéndola directamente al tanque de almacenamiento de 500 Bbl para su posterior procesamiento.",
      },
      {
        q: "¿Cuánto produce el sistema en una jornada?",
        a: "El sistema tiene una capacidad nominal de 1,500 barriles por 24 horas, ajustable mediante el Stroker según el requerimiento del proceso. Para volúmenes mayores, podemos operar múltiples unidades en paralelo.",
      },
      {
        q: "¿Pueden manejar tanto aguas efluentes como crudos pesados?",
        a: "Sí. La bomba de tornillo acoplada al motor hidráulico es versátil: maneja fluidos livianos como aguas efluentes y también crudos de API pesado de alta viscosidad. La presión hidráulica variable (0–10,000 PSI) permite adaptar la operación a cada tipo de fluido.",
      },
      {
        q: "¿Qué medidas de seguridad aplican?",
        a: "Seguimos todos los protocolos PDVSA-COVENIN vigentes: análisis de riesgo previo (ART), dotación completa de EPP, sistema de aterramiento, kit antiderrame y extintor certificado. El tráiler operacional/laboratorio en sitio garantiza supervisión técnica continua durante toda la operación.",
      },
    ],
  },

  {
    slug: "trasegado-vacuum",
    tag: "Vacuum",
    title: "Transporte de Fluidos",
    subtitle: "Servicio de Vacuum — 160 Barriles",
    summary:
      "Succión, transporte y descarga de fluidos industriales con unidades vacuum propias de 160 Bbl (fabricación 2026). Limpieza de tanques, extracción de borras y manejo de efluentes.",
    heroColor: "#eef4ff",
    icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8",
    overview:
      "El servicio de trasegado con vacuum es la solución definitiva para el manejo de fluidos de alta densidad y viscosidad que no pueden ser movilizados por medios convencionales. Contamos con una unidad vacuum propia de 160 barriles, fabricada en 2026 bajo los más estrictos estándares de la industria petrolera venezolana.",
    sections: [
      {
        heading: "¿Qué es el trasegado con vacuum?",
        body: "El trasegado por vacío consiste en crear una diferencia de presión que succiona el fluido hacia el interior del tanque de la unidad. A diferencia del bombeo por presión positiva, el vacuum trabaja desde adentro hacia afuera, permitiendo extraer fluidos desde espacios confinados, fosas, fondos de tanques y locaciones de difícil acceso.",
      },
      {
        heading: "Nuestra unidad vacuum — Ficha técnica",
        body: "Contamos con un semirremolque tipo vacuum de fabricación 2026, con las siguientes características técnicas:",
        list: [
          "Capacidad nominal: 160 barriles (25,440 litros)",
          "Material: Acero estructural A36, espesor 8 mm",
          "Diámetro exterior: 1.85 metros",
          "Longitud total: 11.60 metros",
          "Peso vacío: 6,000 kg",
          "Compresor: NVE Challenger 607",
          "Motor de compresor: Isuzu 4BD1",
          "Conexiones: Entrada y salida de 4 pulgadas",
          "Válvulas: Tipo mariposa, calibradas y certificadas",
          "Manómetro: Presión y vacío, calibrado",
          "Ejes: 2 ejes masa americana",
          "Sistema de aterramiento: Barra Coperweld calibre 1/0, 3 metros",
        ],
      },
      {
        heading: "Compresor NVE Challenger 607 PRO — Ficha técnica",
        body: "Nuestras unidades vacuum están equipadas con el compresor NVE Challenger 607 PRO Heavy-Duty, fabricado en USA y reconocido como el estándar de la industria para operaciones de vacuum en el sector petrolero:",
        list: [
          "Flujo libre de aire: 380 CFM",
          "Vacío máximo: 29\" Hg (full vacuum)",
          "Presión máxima: 30 PSI",
          "RPM de operación nominal: 1,250 RPM",
          "HP requeridos en vacío: 25 HP / a 20 PSI: 28 HP",
          "Porting: 3 pulgadas",
          "Carcasa de hierro dúctil con garantía de por vida contra fracturas",
          "Sistema de gestión de aceite bi-rotacional con 4 puertos (exclusivo NVE): ajustable 5–24 oz/hora",
          "Válvula integrada de cambio vacío/presión",
          "Filtro final de acero inoxidable accesible y limpiable",
          "Termómetro de monitoreo de temperatura de escape",
          "Opciones de accionamiento: caja de engranajes, correa, hidráulico y directo",
          "Garantía de 2 años contra defecto de fabricación · Diseñado y fabricado en USA",
        ],
      },
      {
        heading: "¿Para qué fluidos está diseñado?",
        body: "La unidad vacuum está especialmente diseñada para fluidos industriales de alta complejidad:",
        list: [
          "Borras asfálticas: residuo semisólido de fondo de tanques y tuberías",
          "Lodos de perforación y completación (base agua y base aceite)",
          "Aguas de producción con alto contenido de sólidos y sedimentos",
          "Crudo pesado y extrapesado derramado o en fosas",
          "Fluidos con sólidos en suspensión (cutting, arena de formación)",
          "Efluentes industriales con metales pesados o salinidad elevada",
          "Residuos de limpieza de tanques de almacenamiento",
          "Aguas pluviales contaminadas en locaciones petroleras",
        ],
      },
      {
        heading: "Términos de búsqueda del servicio",
        body: "En la industria, este servicio se conoce también como:",
        list: [
          "Vacuum truck services for oil & gas",
          "Succión y transporte de fluidos de perforación",
          "Limpieza de tanques de almacenamiento de crudo",
          "High Vacuum Units (HVU) para sector petrolero",
          "Manejo de efluentes industriales y desechos peligrosos",
          "Extracción de lodos con camión cisterna vacuum",
          "Trasegado de crudo pesado y extrapesado",
        ],
      },
      {
        heading: "Proceso operativo",
        body: "Nuestra operación vacuum sigue un procedimiento controlado y documentado:",
        list: [
          "1. Inspección del sitio y análisis de tipo de fluido a succionar",
          "2. Posicionamiento estratégico de la unidad vacuum",
          "3. Instalación del sistema de aterramiento (obligatorio para fluidos volátiles)",
          "4. Conexión de mangueras de succión con acoples certificados 4\"",
          "5. Arranque del compresor NVE y creación de vacío en el tanque",
          "6. Succión controlada con monitoreo de nivel y presión",
          "7. Transporte al sitio de disposición o tratamiento",
          "8. Descarga y limpieza del equipo",
          "9. Emisión de manifiesto de residuos si aplica",
        ],
      },
    ],
    specs: [
      { label: "Capacidad tanque", value: "160 Bbl (25,440 L)" },
      { label: "Material", value: "Acero A36 · 8 mm" },
      { label: "Compresor", value: "NVE Challenger 607 PRO" },
      { label: "Flujo libre de aire", value: "380 CFM" },
      { label: "Vacío máximo", value: "29\" Hg" },
      { label: "Presión máxima", value: "30 PSI" },
      { label: "RPM operación", value: "1,250 RPM" },
      { label: "HP requeridos", value: "25 HP (vacío) / 28 HP (20 PSI)" },
      { label: "Porting", value: "3 pulgadas" },
      { label: "Motor compresor", value: "Isuzu 4BD1" },
      { label: "Dimensiones tanque", value: "11.60 m × Ø 1.85 m" },
      { label: "Fabricación", value: "2026" },
    ],
    benefits: [
      {
        title: "Equipo propio 2026",
        desc: "Unidad fabricada en 2026 con tecnología actualizada, mantenimiento al día y certificaciones vigentes.",
        icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806",
      },
      {
        title: "Acceso a espacios confinados",
        desc: "La tecnología de vacío permite succionar fluidos desde fosas, fonds de tanques y áreas de difícil acceso mecánico.",
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      },
      {
        title: "Sin contacto directo",
        desc: "El operador no tiene contacto con el fluido, reduciendo riesgos de exposición a sustancias peligrosas o tóxicas.",
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      },
      {
        title: "Trazabilidad completa",
        desc: "Emitimos manifiestos de residuos y reportes volumétricos para cada operación, garantizando cumplimiento normativo.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      },
    ],
    faq: [
      {
        q: "¿Qué diferencia hay entre el vacuum y el bombeo convencional?",
        a: "El bombeo convencional empuja el fluido desde afuera (presión positiva), mientras que el vacuum lo jala desde adentro (presión negativa/vacío). El vacuum es superior para extraer fluidos desde espacios cerrados, fondos de tanques, fosas y materiales semisólidos que no pueden fluir por sí solos.",
      },
      {
        q: "¿Pueden manejar fluidos con gases volátiles o H2S?",
        a: "Sí. La unidad cuenta con sistema de aterramiento certificado (barra Coperweld calibre 1/0) y válvulas herméticas para el manejo seguro de fluidos con presencia de H2S o gases volátiles. El personal opera con equipos de protección respiratoria certificados.",
      },
      {
        q: "¿Cuánto tarda en llenarse el tanque vacuum?",
        a: "El tiempo de llenado depende de la viscosidad del fluido y la distancia de succión. Para fluidos acuosos o lodos ligeros, un llenado completo de 160 Bbl toma aproximadamente 45-90 minutos. Para borras asfálticas o materiales muy viscosos, puede tomar 2-4 horas.",
      },
      {
        q: "¿Dónde llevan el material succionado?",
        a: "El destino depende del tipo de material: fluidos reutilizables se llevan a tanques de almacenamiento, aguas de producción a pozos de inyección autorizados, y desechos peligrosos a empresas de disposición final certificadas. Emitimos manifiestos de residuos para trazabilidad.",
      },
    ],
  },

  {
    slug: "frac-tanks",
    tag: "Almacenamiento",
    title: "Frac Tanks",
    subtitle: "Tanques Portátiles de 500 Barriles",
    summary:
      "Semirremolque tipo Frac Tank de 500 barriles. 14 m de largo, peso 10,000 kg, capacidad de carga 15,000 kg. Tomas de 4\", 8\" y 12\" con válvulas mariposa, boca de visita con escalera interna y traslado en un solo eje.",
    heroColor: "#fff8ee",
    icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
    overview:
      "Los Frac Tanks son tanques de almacenamiento temporal portátiles, montados sobre ruedas, diseñados para operaciones de campo en la industria de petróleo y gas. A continuación mencionamos los principales tipos de servicios que ofrecemos con estos equipos.",
    sections: [
      {
        heading: "1. Gestión de Fluidos en Campo (Oil & Gas)",
        body: "Nuestros Frac Tanks cubren todas las necesidades de almacenamiento temporal en operaciones petroleras activas:",
        list: [
          "Almacenamiento de agua dulce: suministro de agua para operaciones de fracturación hidráulica (fracking)",
          "Almacenamiento de Flowback: retención de fluidos que retornan del pozo después de una estimulación",
          "Gestión de Produced Water: almacenamiento temporal de agua de producción antes de su tratamiento o reinyección",
          "Pruebas de pozos: medición y separación de fluidos durante las fases de completación",
        ],
      },
      {
        heading: "2. Servicios de Saneamiento y Remediación Ambiental",
        body: "Debido a su diseño robusto, son ideales para proyectos de limpieza y remediación ambiental:",
        list: [
          "Limpieza de tanques de refinería: funcionan como almacenamiento temporal mientras se limpian tanques fijos de gran tamaño",
          "Tratamiento de suelos contaminados: recolección de lodos y líquidos extraídos durante procesos de remediación",
          "Sistemas de decantación: fondo en 'V' para que los sólidos se asienten y separar el agua limpia por la parte superior",
        ],
      },
      {
        heading: "3. Almacenamiento de Productos Químicos y Combustibles",
        body: "Con recubrimientos internos especiales (epóxicos), se pueden usar para almacenamiento especializado:",
        list: [
          "Reserva de químicos: almacenamiento de ácidos, bases o aditivos industriales",
          "Combustible de respaldo: almacenamiento temporal de diésel para generadores en sitios remotos",
        ],
      },
      {
        heading: "4. Apoyo en Plantas Industriales y Manufactureras",
        body: "Fuera del sector petrolero, los servicios incluyen soporte a operaciones industriales:",
        list: [
          "Mantenimiento preventivo (Turnarounds): almacenamiento de agua de lavado o fluidos de proceso durante paradas de planta",
          "Control de efluentes: gestión de aguas residuales industriales en caso de fallas en plantas de tratamiento",
          "Protección contra incendios: reserva temporal de agua para sistemas de emergencia durante reparaciones de red",
        ],
      },
    ],
    specs: [
      { label: "Tipo", value: "Semirremolque Frac Tank" },
      { label: "Capacidad", value: "500 barriles" },
      { label: "Largo × Ancho × Alto", value: "14 m × 2.60 m × 2.70 m" },
      { label: "Peso vacío", value: "10,000 kg" },
      { label: "Carga máx.", value: "15,000 kg" },
      { label: "Tomas frontal", value: "2 × 4\" + 1 × 12\" + 1 × 8\"" },
      { label: "Toma trasera", value: "1 × 4\" (drenaje)" },
      { label: "Válvulas", value: "Tipo Mariposa en todas las tomas" },
      { label: "Traslado", value: "Un solo eje y pin" },
      { label: "Acceso superior", value: "Boca de visita + escalera interna" },
    ],
    benefits: [
      {
        title: "4 configuraciones",
        desc: "V-Bottom, Flat, Insulated y Gas Tight para cubrir cada tipo de fluido y condición operativa sin compromisos.",
        icon: "M4 6h16M4 10h16M4 14h16M4 18h16",
      },
      {
        title: "Alta movilidad",
        desc: "Montados sobre ruedas propias para fácil reubicación con lowboy o plataforma entre locaciones.",
        icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z",
      },
      {
        title: "Vaciado total",
        desc: "Los V-Bottom permiten el vaciado del 100% del volumen con nuestra unidad vacuum, eliminando residuos.",
        icon: "M19 14l-7 7m0 0l-7-7m7 7V3",
      },
      {
        title: "Batería múltiple",
        desc: "Se pueden interconectar varios tanques para conformar baterías de almacenamiento de mayor capacidad.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
      },
    ],
    faq: [
      {
        q: "¿Qué diferencia hay entre V-Bottom y Flat Bottom?",
        a: "El V-Bottom tiene fondo inclinado en V, lo que concentra los sólidos y permite vaciado completo. El Flat Bottom tiene fondo plano, es más económico y se usa para fluidos limpios. Para crudo pesado con sedimentos, siempre recomendamos V-Bottom.",
      },
      {
        q: "¿Cómo se limpian los Frac Tanks?",
        a: "La limpieza se realiza con nuestra unidad vacuum: succiona todos los residuos del fondo, luego se inyecta agua a presión para arrastre y se succiona nuevamente. El proceso toma entre 1 y 3 horas dependiendo de la cantidad de borras acumuladas.",
      },
      {
        q: "¿Pueden almacenar agua para inyección de vapor?",
        a: "Sí. Para agua suavizada o desmineralizada usamos Flat Bottom, que evita contaminación por partículas del fondo. El agua para calderas requiere alta pureza, y la configuración Flat Bottom es la más adecuada.",
      },
      {
        q: "¿Cuántos tanques pueden instalarse juntos?",
        a: "No hay límite técnico. Hemos instalado baterías de hasta 20 tanques interconectados. La capacidad combinada escala linealmente: 10 tanques = 5,000 Bbl de almacenamiento total. El diseño de la batería depende del espacio disponible en locación.",
      },
    ],
  },

  {
    slug: "manejo-de-desechos",
    tag: "Gestión Ambiental",
    title: "Manejo de Desechos",
    subtitle: "Gestión Integral de Residuos Industriales",
    summary:
      "Recolección, transporte y disposición responsable de todos los residuos generados en operaciones petroleras: lodos, aguas de producción, suelos contaminados y borras asfálticas.",
    heroColor: "#f3f8ee",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    overview:
      "La gestión responsable de residuos industriales es tanto una obligación legal como un compromiso ético con el ambiente y las comunidades donde operamos. Ofrecemos el servicio completo de recolección, transporte y coordinación de disposición final para todos los tipos de desechos generados en operaciones petroleras.",
    sections: [
      {
        heading: "Marco legal venezolano",
        body: "Operamos bajo el cumplimiento estricto del Decreto 2635 de la República Bolivariana de Venezuela (Clasificación y Manejo de Desechos o Materiales Peligrosos), la Ley Orgánica del Ambiente y las normas COVENIN aplicables. Toda operación genera documentación de trazabilidad completa.",
      },
      {
        heading: "Tipo 1: Lodos de Perforación y Completación",
        body: "Los lodos de perforación son los residuos más comunes en intervenciones de pozos. Contienen una mezcla compleja de aditivos químicos (bentonita, barita, polímeros), agua de formación y sólidos de la roca perforada.",
        list: [
          "Lodos base agua (WBM): más fáciles de manejar, menor impacto ambiental",
          "Lodos base aceite (OBM): requieren manejo especial por contenido de hidrocarburos",
          "Lodos base sintética (SBM): manejo similar al OBM",
          "Ripios de perforación: sólidos contaminados con hidrocarburos",
          "Proceso: succión con vacuum → transporte → tratamiento térmico o biológico",
        ],
      },
      {
        heading: "Tipo 2: Aguas de Producción e Industriales",
        body: "Las aguas de producción son el subproducto más voluminoso de la extracción petrolera. Son altamente salinas, pueden contener metales pesados, hidrocarburos disueltos y compuestos radioactivos naturales (NORM).",
        list: [
          "Agua de formación: alta salinidad (10,000 – 300,000 ppm TDS)",
          "Condensados de vapor: mezcla de agua suavizada y agua de formación",
          "Drenajes industriales: derrames menores, aguas de lavado de equipos",
          "Proceso recomendado: reinyección en pozos autorizados o tratamiento fisicoquímico",
          "Documentación: análisis fisicoquímico, manifiesto de transporte, certificado de disposición",
        ],
      },
      {
        heading: "Tipo 3: Suelos Contaminados y Ripios",
        body: "Los derrames accidentales de crudo, combustible o químicos generan suelos contaminados que requieren remediación. También se generan ripios (rock cuttings) durante la perforación, contaminados con fluidos de perforación.",
        list: [
          "Suelos con crudo: saturación por derrames en wellheads, ductos o tanques",
          "Suelos con productos químicos: ácidos, biocidas, surfactantes",
          "Ripios de perforación: contaminados con OBM o WBM",
          "Técnicas de remediación: landfarming, biopila, tratamiento ex-situ",
          "Normativa aplicable: COVENIN 3386:2003 para remediación de suelos",
        ],
      },
      {
        heading: "Tipo 4: Borras Asfálticas",
        body: "Las borras asfálticas son el residuo más difícil de manejar en operaciones de crudo pesado. Se acumulan en el fondo de los Frac Tanks, tuberías, separadores y equipos de proceso, formando una capa sólida o semisólida de difícil extracción.",
        list: [
          "Composición: asfaltenos + parafinas + sedimentos + agua emulsionada",
          "Localización habitual: fondo de Frac Tanks, bridas de tuberías, separadores",
          "Método de extracción: calentamiento para fluidización + vacuum truck",
          "Disposición final: co-procesamiento en cementeras o incineración industrial",
          "Volúmenes típicos: 5 a 50 Bbl por tanque de 500 Bbl, según el tiempo de almacenamiento",
        ],
      },
      {
        heading: "Proceso de gestión integral",
        body: "Nuestro servicio cubre la cadena completa de manejo de residuos:",
        list: [
          "1. Caracterización del residuo en campo (tipo, volumen, peligrosidad)",
          "2. Clasificación según Decreto 2635 (peligroso, no peligroso, especial)",
          "3. Recolección con unidad vacuum o equipo apropiado",
          "4. Embalaje y etiquetado según normativa de transporte",
          "5. Transporte en unidad hermética con manifiesto de residuos",
          "6. Entrega a instalación de disposición final autorizada por el MPPEA",
          "7. Emisión de certificado de disposición al cliente",
        ],
      },
    ],
    specs: [
      { label: "Marco legal", value: "Decreto 2635 VE" },
      { label: "Residuos peligrosos", value: "Clasificación A y B" },
      { label: "Transporte", value: "Unidades herméticas" },
      { label: "Documentación", value: "Manifiesto + Certificado" },
      { label: "Lodos base agua", value: "✓ Incluido" },
      { label: "Lodos base aceite", value: "✓ Incluido" },
      { label: "Borras asfálticas", value: "✓ Incluido" },
      { label: "Suelos contaminados", value: "✓ Incluido" },
    ],
    benefits: [
      {
        title: "Cumplimiento legal",
        desc: "Operamos bajo el Decreto 2635 venezolano, evitando sanciones ambientales y garantizando la legalidad de sus operaciones.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Trazabilidad total",
        desc: "Cada residuo tiene su manifiesto de transporte y certificado de disposición final, con registro completo desde el origen.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      },
      {
        title: "Servicio completo",
        desc: "Desde la recolección hasta la disposición final, un solo proveedor para toda la cadena de manejo de residuos.",
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      },
      {
        title: "Responsabilidad ambiental",
        desc: "Minimizamos el impacto ambiental de cada operación con técnicas certificadas de manejo y disposición responsable.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
      },
    ],
    faq: [
      {
        q: "¿Qué es el Decreto 2635 y por qué es importante?",
        a: "El Decreto 2635 es la norma venezolana que clasifica y regula el manejo de desechos peligrosos. Incumplirlo puede resultar en multas, cierre de operaciones o responsabilidad penal. Nuestro servicio garantiza que todos los residuos se manejen conforme a esta normativa.",
      },
      {
        q: "¿Pueden manejar residuos con H2S?",
        a: "Sí. El personal opera con equipos de detección de H2S (monitores 4-gas), respiradores de air-purifying con cartuchos para ácido sulfhídrico, y todos los procedimientos siguen las normas PDVSA para espacios confinados y fluidos tóxicos.",
      },
      {
        q: "¿Emiten certificados de disposición final?",
        a: "Sí. Cada operación de manejo de desechos peligrosos genera un manifiesto de residuos (origen, transporte, destino) y un certificado de disposición final emitido por la instalación receptora autorizada. Estos documentos son entregados al cliente para sus registros.",
      },
      {
        q: "¿Qué pasa con las borras asfálticas que están muy sólidas?",
        a: "Para borras muy solidificadas, aplicamos un proceso de pre-calentamiento con vapor o agua caliente para fluidizar el material antes de la succión. Esto aumenta la eficiencia de la extracción al más del 95% del volumen total.",
      },
    ],
  },

  {
    slug: "alquiler-calderas-inyeccion-vapor",
    tag: "Inyección de Vapor",
    title: "Inyección de Vapor para Tanques",
    heading: "Inyección de vapor para tanques y patio de tanques en Venezuela",
    subtitle: "Generadores OTSG para calentamiento de tanques y patio de tanques",
    summary:
      "Generación e inyección de vapor para el calentamiento de tanques de almacenamiento y patios de tanques, con generadores OTSG 100% automatizados. Reducimos la viscosidad del crudo almacenado para facilitar su bombeo, transferencia y despacho. Coordinamos equipo, operación y movilización desde nuestra sede en Zulia.",
    heroColor: "#fef4ee",
    icon: "M12 2a10 10 0 100 20A10 10 0 0012 2z",
    overview:
      "Soluciones Delta ofrece generación e inyección de vapor con equipos OTSG para tanques y patios de tanques de la industria petrolera. El servicio se configura según la instalación: calentamiento de tanques de almacenamiento, serpentines y líneas de patio, sellos de bombas de carga, e inyección en pozos cuando el proyecto lo requiere. Antes de seleccionar el generador se revisan los requerimientos de producción de vapor, temperatura, presión y condiciones de la locación.",
    sections: [
      {
        heading: "Alcance de la generación e inyección de vapor",
        body: "La propuesta reúne los recursos necesarios para el trabajo previsto. El alcance se acuerda con el cliente antes de movilizar el equipo:",
        list: [
          "Selección del generador según las necesidades del pozo, fosa o instalación",
          "Definición del tratamiento y suministro de agua de alimentación",
          "Coordinación del personal de operación y mantenimiento",
          "Planificación de turnos, duración y logística de movilización",
          "Integración con bombeo, vacuum o almacenamiento cuando el proyecto lo requiere",
        ],
      },
      {
        heading: "Aplicaciones del servicio",
        body: "Evaluamos la aplicación del servicio en las siguientes operaciones, según las condiciones técnicas de cada proyecto:",
        list: [
          "Calentamiento de tanques de almacenamiento y patio de tanques para reducir la viscosidad del crudo",
          "Calentamiento de sellos de bomba y líneas de descarga en operaciones de carga de buques",
          "Inyección de vapor en pozos petroleros para estimulación y recuperación de crudo pesado",
          "Estimulación Huff & Puff (Inyección Cíclica Alterna de Vapor)",
          "Inyección Continua de Vapor (Steam Flooding)",
          "SAGD – Drenaje por Gravedad Asistido con Vapor",
          "Recuperación térmica de crudo en fosas y canales (ver servicio dedicado)",
        ],
      },
      {
        heading: "Calentamiento de tanques y patio de tanques",
        body: "El crudo pesado y extrapesado almacenado pierde fluidez con el tiempo, dificultando el bombeo, la transferencia y el despacho. La inyección de vapor devuelve al producto una viscosidad manejable de forma controlada y documentada:",
        list: [
          "Calentamiento de crudo pesado y extrapesado en tanques de almacenamiento",
          "Mantenimiento de temperatura en patios de tanques, serpentines y líneas de proceso",
          "Reducción de viscosidad para bombeo, transferencia entre tanques y carga de cisternas",
          "Prevención de solidificación y formación de borras en el fondo del tanque",
          "Calentamiento de sellos mecánicos de bombas de carga en muelles y terminales",
          "Monitoreo de temperatura, presión y consumo de vapor durante toda la operación",
        ],
      },
      {
        heading: "Generadores de vapor de alta capacidad",
        body: "Contamos con generadores de vapor de alta capacidad tanto en producción, temperatura y presión, seleccionados según el tipo de trabajo:",
        list: [
          "100% de automatización en el proceso de producción de vapor",
          "Personal altamente capacitado para operación continua",
          "Personal de mantenimiento especializado en campo",
          "Alta capacidad adaptable a los requerimientos de cada pozo o fosa",
          "Mayor seguridad operativa para el personal en campo",
          "Disponibilidad de equipos portátiles para locaciones remotas",
        ],
      },
      {
        heading: "Tratamiento de agua para el generador de vapor",
        body: "El agua de alimentación es el factor más crítico para la vida útil y eficiencia del generador de vapor. Incluimos tratamiento completo:",
        list: [
          "Suavización por intercambio iónico: eliminación de calcio y magnesio",
          "Desmineralización: reducción de sólidos disueltos totales (TDS)",
          "Desgasificación: eliminación de oxígeno disuelto y CO₂",
          "Dosificación de inhibidores de incrustación y corrosión",
          "Análisis periódico de calidad del agua en campo",
        ],
      },
    ],
    specs: [
      { label: "Tipo de equipo", value: "Generador de vapor OTSG" },
      { label: "Automatización", value: "100% automatizado" },
      { label: "Capacidad demostrada", value: "1,500 Bbl/día" },
      { label: "Modalidades", value: "Huff&Puff · Flooding · SAGD" },
      { label: "Aplicaciones", value: "Tanques · Patio · Pozos · Buques" },
      { label: "Campos ejecutados", value: "Estado Zulia" },
      { label: "Tratamiento agua", value: "Suavización + Desgasif." },
      { label: "Disponibilidad", value: "24 horas / 7 días" },
    ],
    benefits: [
      {
        title: "Trayectoria Comprobada",
        desc: "Contratos ejecutados al 100% de cumplimiento con capacidades de recuperación de hasta 1,500 Bbl/día demostrados.",
        icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806",
      },
      {
        title: "100% Automatizado",
        desc: "Procesos de producción de vapor totalmente automatizados para mayor seguridad, confiabilidad y operación continua sin interrupciones.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
      },
      {
        title: "Crudo listo para despacho",
        desc: "Calentamiento controlado de tanques y patio de tanques que devuelve al crudo pesado la fluidez necesaria para bombearlo, transferirlo y despacharlo sin interrupciones.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064",
      },
      {
        title: "Operación continua 24/7",
        desc: "Personal técnico especializado para operación y mantenimiento ininterrumpido en campo, en locaciones remotas del Estado Zulia y adyacentes.",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      },
    ],
    faq: [
      {
        q: "¿Cómo cotizar la inyección de vapor o el alquiler de una caldera?",
        a: "Indique dónde se realizará el trabajo, si se trata de un pozo, fosa o tanque, la aplicación prevista y la duración estimada. Si dispone de requerimientos de caudal de vapor, presión y temperatura, compártalos junto con la disponibilidad de agua y combustible. Con esos datos podemos revisar el equipo y el alcance de la propuesta.",
      },
      {
        q: "¿Atienden solicitudes de inyección de vapor fuera de Zulia?",
        a: "Sí, recibimos solicitudes de proyectos en Venezuela desde nuestra sede en San Francisco, Zulia. La atención en cada locación depende de la evaluación técnica, los accesos, la disponibilidad del generador y la logística de traslado; estos puntos se confirman en la cotización.",
      },
      {
        q: "¿En qué campos petroleros han trabajado?",
        a: "Hemos ejecutado contratos en diversos campos del Estado Zulia, logrando en todos los casos ejecución del 100% con capacidades de recuperación de hasta 1,500 barriles diarios.",
      },
      {
        q: "¿Cómo se calienta un tanque de crudo con vapor?",
        a: "El vapor generado por la unidad OTSG se inyecta a través de los serpentines del tanque o mediante lanzas de inyección directa, según la instalación. El calor transferido reduce la viscosidad del crudo pesado almacenado hasta hacerlo bombeable, y se mantiene la temperatura objetivo durante el tiempo que dure la transferencia o el despacho. Todo el proceso se monitorea con registros de temperatura, presión y consumo de vapor.",
      },
      {
        q: "¿Qué significa que sus equipos son 100% automatizados?",
        a: "Nuestros generadores de vapor disponen de sistemas de control automático para la producción de vapor: regulación de presión, temperatura, caudal de agua y combustión. Esto garantiza mayor seguridad para el personal, mayor confiabilidad del equipo, y una calidad de vapor consistente durante toda la operación.",
      },
      {
        q: "¿Ofrecen el servicio de calentamiento de sellos para carga de buques?",
        a: "Sí. Movilizamos unidades de generación de vapor al muelle o terminal para mantener la temperatura de los sellos mecánicos de las bombas de carga y las líneas de descarga, previniendo solidificaciones del crudo extrapesado durante toda la operación de carga del buque.",
      },
      {
        q: "¿Qué incluye el servicio además del generador de vapor?",
        a: "El servicio incluye: equipo generador de vapor, tratamiento de agua de alimentación (suavización y desgasificación), personal técnico operador, personal de mantenimiento, y toda la documentación operativa. Si el trabajo es la recuperación de crudo solidificado en fosas o canales, lo atendemos con nuestro servicio dedicado de recuperación térmica.",
      },
    ],
  },
  {
    slug: "limpieza-industrial-hidrojet",
    tag: "Hydrojet UHP",
    title: "Limpieza Industrial con Hidrojet",
    heading: "Limpieza industrial con hidrojet en Venezuela",
    subtitle: "Agua a Ultra Alta Presión — 20.000 y 40.000 PSI",
    summary:
      "Servicio de limpieza con hidrojet (hydrojet) de 20.000 y 40.000 PSI para tuberías, intercambiadores, tanques y superficies industriales. Atención a proyectos en Venezuela, con selección del equipo y coordinación operativa desde Zulia.",
    heroColor: "#eef5f8",
    icon: "M12 2v8M8 6l4 4 4-4M5 14h14M7 18h10",
    overview:
      "La limpieza industrial con hidrojet utiliza agua a presión para remover depósitos y preparar superficies. En Soluciones Delta evaluamos el material del equipo, el tipo de incrustación y los accesos para definir la unidad y los accesorios de trabajo. El servicio puede integrarse con la recolección de fluidos mediante vacuum y el manejo de los residuos generados, según el alcance contratado.",
    sections: [
      {
        heading: "Limpieza de tuberías, tanques e intercambiadores",
        body: "El trabajo se organiza alrededor del equipo que necesita recuperar su condición de servicio. Estas son las aplicaciones que revisamos con el cliente:",
        list: [
          "Tuberías de proceso: limpieza interna y remoción de depósitos, según diámetro y acceso",
          "Intercambiadores de calor: limpieza del haz de tubos durante mantenimiento",
          "Tanques: remoción de depósitos y coordinación de la recolección de fluidos",
          "Superficies industriales: preparación y retiro de recubrimientos según el material",
        ],
      },
      {
        heading: "Alcance integral del servicio",
        body: "Cubrimos toda la gama de aplicaciones de limpieza con agua a ultra alta presión en instalaciones petroleras e industriales:",
        list: [
          "Mantenimiento de intercambiadores: limpieza profunda del haz de tubos, condensadores y calderas para restaurar la eficiencia térmica de las plantas",
          "Destape de líneas y flujo: remoción absoluta de coque, asfaltenos, polímeros, resinas y sedimentos endurecidos en tuberías de proceso",
          "Preparación de superficies (trabajo en frío): remoción de pintura, óxido y escoria metálica mediante corte con agua, sin generar chispas — el estándar exigido en refinerías y locaciones de perforación activa",
          "Limpieza de espacios confinados: remoción de lodos de fondo en tanques de almacenamiento de crudo",
          "Sinergia operativa: trabajo en conjunto con nuestras unidades vacuum de 160 barriles para la succión inmediata de residuos y el cumplimiento de las normativas RACDA",
        ],
      },
      {
        heading: "Unidad UHP 40.000 PSI — Ficha técnica",
        body: "Equipo industrial de grado crítico diseñado para hidrodemolición de concreto, remoción de revestimientos epóxicos pesados y decapado sin abrasivos (blasteo puro):",
        list: [
          "Motor diésel John Deere 6068H: 6 cilindros en línea, turboalimentado y post-enfriado, 6.8 L",
          "Potencia nominal: ~250 HP a 2.200 RPM con inyección electrónica de alta presión (HPCR)",
          "Bomba Triplex Plunger para Ultra Alta Presión (UHP)",
          "Presión máxima de trabajo: 40.000 PSI (2.800 bar)",
          "Caudal promedio: 3.0 a 6.0 GPM (11.4 a 22.7 LPM)",
          "Transmisión: embrague de servicio pesado Twin Disc SP211HP5, acoplamiento SAE 5",
          "Cabezal (fluid end) macizo mecanizado en aleaciones especiales de acero inoxidable o titanio",
          "Seguridad: válvula de disco de ruptura y válvula bypass reguladora neumática",
          "Chasis tipo skid reforzado de acero al carbono sobre vigas en H",
        ],
      },
      {
        heading: "Unidad HP PARTEK 20.000 PSI — Ficha técnica",
        body: "Equipo de alta presión enfocado en el lavado industrial, remoción de óxido severo y limpieza interna de intercambiadores de calor y tuberías mediante alto volumen de agua combinado con fuerza de impacto:",
        list: [
          "Motor diésel John Deere 4039D: 4 cilindros en línea, aspiración natural, 3.9 L",
          "Potencia nominal: ~70 HP a 2.150 RPM con inyección mecánica directa",
          "Bomba PARTEK de alta presión",
          "Presión máxima de trabajo: 20.000 PSI (1.400 bar)",
          "Caudal promedio: 10.0 a 13.0 GPM (38 a 50 LPM)",
          "Cabezal de acero inoxidable de grado aeronáutico con émbolos cerámicos enfriados por agua",
          "Seguridad: válvula de alivio mecánica graduable y apagado automático por baja presión de aceite",
          "Chasis tipo skid con tanque de combustible integrado para alta autonomía de trabajo",
        ],
      },
      {
        heading: "Accesorios y tecnología de trabajo",
        body: "El kit de trabajo de 20.000 y 40.000 PSI incluye componentes certificados para operación segura y eficiente:",
        list: [
          "Mangueras termoplásticas multicapa (4–6 capas de acero espiralado) para 40.000 PSI de operación y hasta 60.000 PSI de ruptura",
          "Conexiones tipo autoclave cono y rosca (Cone & Thread) de acero inoxidable de alta seguridad",
          "Guayas de seguridad (whipchecks) que evitan el chicoteo de mangueras ante falla de un acople",
          "Pistola de descarga neumática (dump gun): al soltar el gatillo el agua se desvía a cero presión",
          "Válvula de pie (foot control) para limpieza interna de tuberías con manos libres",
          "Boquillas rotativas auto-giratorias con insertos de zafiro o diamante industrial",
          "Boquillas auto-propulsadas (self-propelled) para limpieza interior de tuberías",
          "Posicionadores mecánicos y crawlers que evitan la exposición directa del operador",
          "Sistema de filtración crítico de doble etapa: 10 micras + 5 micras en la alimentación de la bomba",
        ],
      },
      {
        heading: "Cuadrilla operativa y liderazgo en campo",
        body: "Cada operación cuenta con una estructura de mando definida y personal certificado:",
        list: [
          "Líder de cuadrilla (Supervisor HSE): evalúa riesgos, tramita permisos de trabajo, demarca la zona de exclusión y coordina la logística con la unidad vacuum",
          "Operadores certificados: técnicos entrenados en biocinemática para soportar el retroceso de la lanza",
          "Técnico especialista de equipos: calibra válvulas de alivio, purga líneas y garantiza la operatividad continua de las bombas por turno",
          "EPP blindado obligatorio: traje completo UHP de Kevlar/Dyneema (UHMWPE) certificado contra impacto directo del chorro",
          "Botas con protección metatarsal de acero o titanio y guantes blindados",
          "Casco con careta de impacto total contra partículas proyectadas a gran velocidad",
        ],
      },
      {
        heading: "Protocolo operativo de seguridad",
        body: "A 40.000 PSI un chorro de agua corta metal — cada trabajo sigue un procedimiento estricto y documentado:",
        list: [
          "1. Análisis de riesgo en el trabajo (ART) y permisos en sitio",
          "2. Demarcación de la zona de exclusión y señalización",
          "3. Verificación de mangueras, whipchecks y discos de ruptura",
          "4. Prueba de presión progresiva del sistema antes de operar",
          "5. Operación con supervisor HSE permanente en locación",
          "6. Succión inmediata de residuos con unidad vacuum de 160 Bbl",
          "7. Desconexión segura, despresurización y cierre del permiso de trabajo",
        ],
      },
    ],
    specs: [
      { label: "Presión máx. UHP", value: "40.000 PSI (2.800 bar)" },
      { label: "Presión máx. HP", value: "20.000 PSI (1.400 bar)" },
      { label: "Caudal UHP", value: "3.0 – 6.0 GPM" },
      { label: "Caudal HP", value: "10.0 – 13.0 GPM" },
      { label: "Motor UHP", value: "John Deere 6068H · 250 HP" },
      { label: "Motor HP", value: "John Deere 4039D · 70 HP" },
      { label: "Bomba UHP", value: "Triplex Plunger" },
      { label: "Manguera UHP", value: "60.000 PSI ruptura" },
      { label: "Boquillas", value: "Zafiro / diamante industrial" },
      { label: "Filtración", value: "Doble: 10 + 5 micras" },
      { label: "Montaje", value: "Skid remolcable" },
      { label: "Disponibilidad", value: "24 horas / 7 días" },
    ],
    benefits: [
      {
        title: "Trabajo en frío, sin chispas",
        desc: "El corte con agua no genera chispas ni calor: es el estándar exigido para refinerías, áreas clasificadas y locaciones de perforación activa.",
        icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
      },
      {
        title: "40.000 PSI sostenidos",
        desc: "Unidades de bombeo UHP accionadas por motores diésel de trabajo pesado, capaces de sostener la presión máxima sin caídas durante toda la jornada.",
        icon: "M22 12h-4l-3 9L9 3l-3 9H2",
      },
      {
        title: "Sin abrasivos ni químicos",
        desc: "La limpieza con agua pura no daña el sustrato metálico ni genera residuos abrasivos secundarios, reduciendo el impacto ambiental de cada operación.",
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      },
      {
        title: "Cuadrilla certificada HSE",
        desc: "Supervisor HSE, operadores entrenados en biocinemática y técnico especialista de equipos en cada locación, con EPP blindado certificado UHP.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
      },
    ],
    faq: [
      {
        q: "¿Qué información necesitan para cotizar una limpieza con hidrojet?",
        a: "Comparta la ubicación, el equipo o superficie a limpiar, sus dimensiones, el material y el tipo de depósito. Incluya fotografías si dispone de ellas, las fechas de trabajo, las condiciones de acceso y la disponibilidad de agua. Indique también si necesita recolección con vacuum y manejo de los residuos.",
      },
      {
        q: "¿El servicio de hidrojet está disponible fuera de Zulia?",
        a: "Atendemos solicitudes para instalaciones petroleras e industriales en Venezuela. Nuestro equipo revisa la ubicación, el alcance y la disponibilidad de las unidades antes de confirmar la movilización desde Zulia y las condiciones de la cotización.",
      },
      {
        q: "¿Cuándo se usa la unidad de 20.000 PSI y cuándo la de 40.000 PSI?",
        a: "La unidad PARTEK de 20.000 PSI trabaja con mayor caudal (10–13 GPM) y es ideal para lavado industrial, remoción de óxido severo y limpieza interna de intercambiadores y tuberías, donde el volumen de agua y la fuerza de impacto hacen el trabajo. La unidad UHP de 40.000 PSI concentra la energía en menor caudal (3–6 GPM) para hidrodemolición de concreto, remoción de revestimientos epóxicos pesados y decapado sin abrasivos donde se requiere poder de corte puro.",
      },
      {
        q: "¿Por qué el hydroblasting es más seguro que el sandblasting en refinerías?",
        a: "Porque es un trabajo en frío: el corte con agua no genera chispas ni fuentes de ignición, lo que permite operar en áreas clasificadas con presencia de hidrocarburos. Además no produce nubes de polvo de sílice ni residuos abrasivos contaminados, y no desgasta el metal base del equipo limpiado.",
      },
      {
        q: "¿Qué medidas de seguridad protegen al personal?",
        a: "El operador viste traje completo de protección UHP en fibras de Kevlar/Dyneema certificado contra impacto directo del chorro, botas con protección metatarsal de acero o titanio, casco con careta de impacto total y guantes blindados. El sistema usa pistolas de descarga neumática que llevan el agua a cero presión al soltar el gatillo, guayas anti-látigo en cada acople y discos de ruptura calibrados. Un supervisor HSE lidera cada operación con permisos de trabajo y zona de exclusión demarcada.",
      },
      {
        q: "¿Qué pasa con los residuos que genera la limpieza?",
        a: "Trabajamos en sincronía con nuestras unidades vacuum de 160 barriles para la succión inmediata de los lodos, aguas y residuos generados durante el lavado, garantizando áreas de trabajo limpias y el cumplimiento de las normativas RACDA. Si el residuo es peligroso, se gestiona con nuestro servicio de manejo de desechos bajo el Decreto 2635.",
      },
      {
        q: "¿Pueden limpiar tuberías internamente sin desarmarlas?",
        a: "Sí. Usamos boquillas auto-propulsadas con chorros traseros en ángulo que empujan la manguera flexible hacia adentro del tubo, y mangueras multicapa calibradas según el diámetro de la tubería y el tipo de incrustación. Para el haz de tubos de intercambiadores usamos lanzas rígidas y posicionadores semi-automatizados que evitan la exposición del operador.",
      },
    ],
  },
  {
    slug: "recuperacion-de-crudo-en-fosas",
    tag: "Recuperación Térmica",
    title: "Recuperación de Crudo en Fosas",
    heading: "Recuperación de crudo en fosas, canales y tanques en Venezuela",
    subtitle: "Recuperación térmica en fosas, canales y tanques",
    summary:
      "Recuperación térmica de crudos solidificados y lodos petrolizados en fosas a cielo abierto, canales y tanques. Mediante la inyección controlada de calor reducimos la viscosidad del material hasta hacerlo bombeable, lo extraemos y lo reincorporamos a la cadena productiva.",
    heroColor: "#fdf3ee",
    icon: "M4 6h16M6 6v10a6 6 0 0012 0V6M9 3v2M15 3v2",
    overview:
      "Nuestro servicio de recuperación térmica consiste en la transferencia controlada de calor a crudos solidificados y lodos petrolizados ubicados en tanques o fosas a cielo abierto. Mediante la inyección de energía térmica, logramos reducir drásticamente la viscosidad del material, transformándolo en un fluido manejable. Esto permite su eficiente extracción, bombeo y reincorporación a la cadena productiva, garantizando la recuperación de hidrocarburos de alto valor.",
    sections: [
      {
        heading: "¿En qué consiste la recuperación térmica?",
        body: "El crudo que ha permanecido años en una fosa, canal o fondo de tanque se solidifica y forma emulsiones con agua y sedimentos que no pueden movilizarse por medios convencionales. La energía térmica revierte ese estado:",
        list: [
          "Transferencia controlada de calor mediante inyección de vapor directa en la masa de crudo",
          "Reducción drástica de la viscosidad: el material solidificado pasa a fluido manejable",
          "Separación de emulsiones crudo-agua-arena por efecto del calor",
          "Extracción del crudo fluidizado con bombas de desplazamiento positivo o unidad vacuum",
          "Reincorporación del hidrocarburo recuperado a la cadena productiva",
          "Capacidad de recuperación demostrada: 1,500 Bbl/día",
        ],
      },
      {
        heading: "Dónde aplicamos el servicio",
        body: "La recuperación térmica se adapta a cualquier acumulación de crudo solidificado o lodo petrolizado:",
        list: [
          "Fosas petrolizadas a cielo abierto heredadas de operaciones anteriores (pasivos ambientales)",
          "Canales, drenajes y cunetas con acumulación de crudo y lodos",
          "Tanques de almacenamiento con fondos solidificados y borras asfálticas",
          "Patios de tanques, separadores y equipos de proceso con crudo estancado",
          "Áreas impactadas por derrames de crudo pesado y extrapesado",
        ],
      },
      {
        heading: "Proceso operativo",
        body: "Cada recuperación sigue un procedimiento controlado y documentado, desde la evaluación inicial hasta la entrega del crudo recuperado:",
        list: [
          "1. Caracterización de la fosa o tanque: volumen, viscosidad, contenido de agua y sedimentos",
          "2. Instalación del generador de vapor y del sistema de lanzas de inyección",
          "3. Inyección térmica progresiva con monitoreo de temperatura y fluidez del material",
          "4. Extracción del crudo fluidizado con bomba de tornillo o unidad vacuum de 160 Bbl",
          "5. Almacenamiento temporal en frac tanks de 500 Bbl y separación de agua libre",
          "6. Medición de volúmenes recuperados y reporte al cliente",
          "7. Remediación progresiva hasta el saneamiento total del área",
        ],
      },
      {
        heading: "Equipos que integramos en la operación",
        body: "La recuperación de crudo en fosas combina varias de nuestras líneas de servicio en una sola operación coordinada:",
        list: [
          "Generador de vapor OTSG 100% automatizado como fuente de energía térmica",
          "Lanzas perforadas de inyección de vapor para fosas y fondos de tanque",
          "Bomba hidráulica de tornillo con plato desnatador para extracción de crudo (natilla)",
          "Unidad vacuum de 160 Bbl para succión de lodos y fluidos de alta viscosidad",
          "Frac tanks de 500 Bbl para almacenamiento y decantación del crudo recuperado",
          "Generador eléctrico de soporte y tráiler operacional en sitio",
        ],
      },
      {
        heading: "Beneficio ambiental y documentación",
        body: "Recuperar el crudo de una fosa no solo devuelve producto de alto valor: elimina un pasivo ambiental. Documentamos todo el proceso:",
        list: [
          "Registro de volúmenes recuperados y balance de masa antes y después",
          "Reportes para expedientes ambientales ante el MPPEA",
          "Manejo de los residuos no recuperables bajo el Decreto 2635",
          "Certificados de disposición final de lodos y sedimentos",
          "Saneamiento progresivo y verificable de la fosa, canal o tanque",
        ],
      },
    ],
    specs: [
      { label: "Método", value: "Transferencia controlada de calor" },
      { label: "Fuente térmica", value: "Vapor OTSG 100% automatizado" },
      { label: "Capacidad demostrada", value: "1,500 Bbl/día" },
      { label: "Aplicación", value: "Fosas · Canales · Tanques" },
      { label: "Extracción", value: "Bomba de tornillo · Vacuum 160 Bbl" },
      { label: "Almacenamiento", value: "Frac Tanks 500 Bbl" },
      { label: "Documentación", value: "Expedientes MPPEA · Decreto 2635" },
      { label: "Disponibilidad", value: "24 horas / 7 días" },
    ],
    benefits: [
      {
        title: "Hidrocarburo recuperado",
        desc: "Crudo que estaba perdido en fosas y tanques vuelve a la cadena productiva como producto de alto valor.",
        icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
      },
      {
        title: "1,500 Bbl / día",
        desc: "Capacidad de recuperación demostrada en contratos ejecutados al 100% de cumplimiento en el Estado Zulia.",
        icon: "M22 12h-4l-3 9L9 3l-3 9H2",
      },
      {
        title: "Pasivo ambiental resuelto",
        desc: "La fosa o el tanque quedan saneados de forma progresiva y verificable, con reportes para expedientes ambientales.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064",
      },
      {
        title: "Operación integrada",
        desc: "Vapor, bombeo, vacuum y almacenamiento de un solo proveedor: una sola cuadrilla y un solo responsable en campo.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
      },
    ],
    faq: [
      {
        q: "¿Qué tipo de material pueden recuperar?",
        a: "Crudos pesados y extrapesados solidificados, natilla, lodos petrolizados, borras asfálticas y emulsiones crudo-agua-arena acumuladas en fosas a cielo abierto, canales, drenajes y fondos de tanques. Cuanto mayor es la viscosidad del material, mayor es la ventaja de la recuperación térmica frente a la extracción mecánica.",
      },
      {
        q: "¿Cuánto crudo se puede recuperar por día?",
        a: "Nuestra capacidad demostrada es de 1,500 barriles por día, alcanzada en contratos ejecutados en campos del Estado Zulia. El rendimiento real depende del volumen, la viscosidad y el contenido de agua y sedimentos de la fosa, que evaluamos en la caracterización inicial.",
      },
      {
        q: "¿Qué pasa con el agua y los sedimentos que quedan?",
        a: "El agua libre se separa en los frac tanks por decantación y se dispone en pozos de inyección autorizados o plantas de tratamiento. Los lodos y sedimentos no recuperables se manejan con nuestro servicio de manejo de desechos bajo el Decreto 2635, con manifiesto y certificado de disposición final.",
      },
      {
        q: "¿El servicio incluye la documentación ambiental?",
        a: "Sí. Entregamos el registro de volúmenes recuperados, el balance antes y después de la intervención y los reportes necesarios para los expedientes ante el MPPEA, de modo que el cliente pueda demostrar el saneamiento del pasivo ambiental.",
      },
      {
        q: "¿En qué se diferencia de la inyección de vapor para tanques?",
        a: "La inyección de vapor para tanques mantiene fluido el crudo almacenado en operación normal para facilitar su bombeo y despacho. La recuperación térmica en fosas ataca crudo que ya está solidificado o perdido en pasivos ambientales, e incluye la extracción, el almacenamiento, la separación y la documentación del hidrocarburo recuperado.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
