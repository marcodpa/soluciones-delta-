export interface ServiceData {
  slug: string;
  tag: string;
  title: string;
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
      "Los Frac Tanks son la columna vertebral del almacenamiento temporal en operaciones petroleras de campo. Nuestra flota de tanques de 500 barriles está disponible en 4 configuraciones especializadas para adaptarse a cada tipo de fluido, temperatura de operación y requerimiento ambiental.",
    sections: [
      {
        heading: "¿Qué es un Frac Tank?",
        body: "Un Frac Tank (Fracturing Tank) es un tanque de almacenamiento temporal portátil, montado sobre ruedas, diseñado para operaciones de campo en la industria de petróleo y gas. Su nombre proviene de su uso original en operaciones de fracturamiento hidráulico, pero hoy se utilizan en prácticamente toda operación de campo que requiera almacenamiento temporal de grandes volúmenes de fluidos.",
      },
      {
        heading: "Tipo 1: V-Bottom Frac Tank",
        body: "El V-Bottom es nuestro tanque más solicitado para operaciones con crudo pesado. Su fondo en forma de 'V' tiene una inclinación de 45° hacia el centro, lo que permite que los sedimentos, borras y sólidos se concentren en el punto más bajo, facilitando su extracción total con la unidad vacuum.",
        list: [
          "Ideal para: crudo pesado con alto contenido de sedimentos o BSW",
          "Ventaja principal: vaciado total del 100% del volumen, sin residuos",
          "Compatible con: limpieza posterior con unidad vacuum",
          "Aplicación: almacenamiento de crudo producido en wellheads y baterías",
          "Temperatura: opera hasta 80°C sin modificaciones",
        ],
      },
      {
        heading: "Tipo 2: Flat Bottom Frac Tank",
        body: "El tanque de fondo plano es la configuración estándar para fluidos limpios o de baja densidad de sólidos. Es la opción más económica y la más común para almacenamiento de agua en operaciones de inyección de vapor.",
        list: [
          "Ideal para: agua suavizada, agua desmineralizada para calderas",
          "Ventaja: mayor volumen útil al nivel del suelo",
          "Aplicación: almacenamiento de agua de inyección de vapor",
          "Compatible con: cualquier fluido limpio sin sólidos en suspensión",
          "Mantenimiento: el más sencillo de limpiar y mantener",
        ],
      },
      {
        heading: "Tipo 3: Insulated Frac Tank (Aislado Térmico)",
        body: "Los tanques aislados son críticos para operaciones con crudo extra pesado, donde mantener la temperatura del fluido por encima del punto de fluidez es esencial para poder bombearlo. El aislamiento reduce drásticamente las pérdidas de calor durante el almacenamiento.",
        list: [
          "Ideal para: crudo extrapesado con alto punto de fluidez (>40°C)",
          "Aislamiento: espuma de poliuretano de alta densidad entre doble pared",
          "Temperatura: mantiene el fluido hasta 20°C por encima del ambiente",
          "Aplicación: almacenamiento de crudo caliente previo al bombeo",
          "Operación conjunta: ideal con generadores de vapor y calentadores de línea",
        ],
      },
      {
        heading: "Tipo 4: Gas Tight / Vapor Tight",
        body: "El tanque gas tight está diseñado para el almacenamiento de fluidos con presencia de gases volátiles, vapores de hidrocarburos o H2S. Su sellado hermético previene emisiones fugitivas y protege al personal operativo de exposición a gases tóxicos o explosivos.",
        list: [
          "Ideal para: crudo con alta presión de vapor (RVP elevado)",
          "Diseñado para: fluidos con presencia de H2S, LPG o gases asociados",
          "Normativa: cumple con NFPA 30 y EPA para tanques sellados",
          "Seguridad: válvulas de presión/vacío calibradas en ambas tapas",
          "Aplicación: almacenamiento de condensados y crudos volátiles",
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
    title: "Alquiler de Calderas",
    subtitle: "Generación e Inyección de Vapor para Pozos y Fosas",
    summary:
      "Servicio especializado de generación e inyección de vapor con generadores de alta capacidad para recuperación de crudo en fosas y pozos petroleros. 100% automatizados. Trayectoria comprobada en Campo Boscán (Chevron/Petroboscán) y Tía Juana (PDVSA).",
    heroColor: "#fef4ee",
    icon: "M12 2a10 10 0 100 20A10 10 0 0012 2z",
    overview:
      "Contamos con generadores de vapor de alta capacidad en producción, temperatura y presión, diseñados para operación continua en campo petrolero. Nuestros equipos disponen de un 100% de automatización en los procesos de producción de vapor, garantizando mayor seguridad, confiabilidad y un lugar de trabajo más seguro para el personal. Hemos ejecutado contratos de inyección de vapor en Campo Boscán con Chevron y Petroboscán, y en Estación Bolívar 54 con PDVSA GIV, logrando en todos los casos una ejecución del 100% con capacidades de recuperación de 1,500 barriles diarios.",
    sections: [
      {
        heading: "Aplicaciones del servicio",
        body: "Nuestros generadores de vapor cubren todas las necesidades de inyección en operaciones petroleras:",
        list: [
          "Inyección de vapor en pozos petroleros para estimulación y recuperación de crudo pesado",
          "Recuperación de crudo en fosas petrolizadas de pasivos ambientales",
          "Calentamiento de patio de tanques para reducir viscosidad del crudo almacenado",
          "Calentamiento de sellos de bomba en operaciones de carga de buques",
          "Estimulación Huff & Puff (Inyección Cíclica Alterna de Vapor)",
          "Inyección Continua de Vapor (Steam Flooding)",
          "SAGD – Drenaje por Gravedad Asistido con Vapor",
        ],
      },
      {
        heading: "Recuperación de crudo en fosas — Pasivos ambientales",
        body: "Las fosas petrolizadas heredadas de operaciones anteriores contienen crudo extrapesado solidificado que no puede movilizarse por métodos convencionales. La inyección de vapor resuelve este problema de forma efectiva y documentada:",
        list: [
          "Fluidización del crudo solidificado mediante reducción térmica de viscosidad",
          "Separación de emulsiones crudo-agua-arena por efecto del calor",
          "Extracción posterior con bombas de desplazamiento positivo o unidad vacuum",
          "Capacidad de recuperación demostrada: 1,500 Bbl/día en Campo Boscán",
          "Documentación completa del proceso para expedientes ambientales (MPPEA)",
          "Remediación progresiva hasta el saneamiento total de la fosa",
        ],
      },
      {
        heading: "Trayectoria y contratos ejecutados",
        body: "Nuestro servicio de inyección de vapor cuenta con una trayectoria comprobada en los principales campos petroleros del occidente venezolano:",
        list: [
          "Petroboscán (2017–2019): Campo Boscán, Contrato 3M-043-004-D-16-S-102 — 1,500 Bbl/día, ejecución 100% en 4 extensiones consecutivas",
          "Chevron (2016): Campo Boscán, Contrato CW1402520 — ejecución 100%",
          "Chevron (2015): Campo Boscán, Contrato CW1299675 — ejecución 100%",
          "PDVSA GIV (2012): Estación Bolívar 54, Contrato 4640002882 — suministro, operación y mantenimiento de generadores portátiles, ejecución 100%",
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
        heading: "Tratamiento de agua para calderas",
        body: "El agua de alimentación es el factor más crítico para la vida útil y eficiencia de las calderas. Incluimos tratamiento completo:",
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
      { label: "Aplicaciones", value: "Pozos · Fosas · Tanques · Buques" },
      { label: "Campos ejecutados", value: "Boscán · Tía Juana · Bolívar 54" },
      { label: "Tratamiento agua", value: "Suavización + Desgasif." },
      { label: "Disponibilidad", value: "24 horas / 7 días" },
    ],
    benefits: [
      {
        title: "Trayectoria en Campo Boscán",
        desc: "Contratos ejecutados al 100% con Chevron, Petroboscán y PDVSA desde 2012, con recuperación de 1,500 Bbl/día demostrados.",
        icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806",
      },
      {
        title: "100% Automatizado",
        desc: "Procesos de producción de vapor totalmente automatizados para mayor seguridad, confiabilidad y operación continua sin interrupciones.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
      },
      {
        title: "Recuperación de pasivos",
        desc: "Tecnología probada para fluidizar y extraer crudo solidificado de fosas petrolizadas históricas, con documentación ambiental completa.",
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
        q: "¿En qué campos petroleros han trabajado?",
        a: "Hemos ejecutado contratos en Campo Boscán (Chevron/Petroboscán, 2015–2019), Estación Bolívar 54 de Tía Juana (PDVSA GIV, 2012) y otros campos del Estado Zulia. En todos los casos logramos ejecución del 100% con capacidades de recuperación de hasta 1,500 barriles diarios.",
      },
      {
        q: "¿Cómo funciona la recuperación de crudo en fosas petrolizadas?",
        a: "Se inyecta vapor directamente en la masa de crudo solidificado mediante lanzas perforadas. El calor reduce la viscosidad, separa el crudo de sólidos y lo hace bombeable. El crudo fluidizado se extrae con bomba de desplazamiento positivo o vacuum. El proceso se documenta con mediciones antes/después para expedientes ambientales.",
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
        q: "¿Qué incluye el servicio además de la caldera?",
        a: "El servicio incluye: equipo generador de vapor, tratamiento de agua de alimentación (suavización y desgasificación), personal técnico operador, personal de mantenimiento, y toda la documentación operativa. Para fosas de pasivos ambientales, también incluimos los reportes para expedientes ante el MPPEA.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
