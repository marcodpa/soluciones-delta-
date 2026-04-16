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
    title: "Bombeo de Transferencia",
    subtitle: "Carga y Descarga de Crudo Pesado",
    summary:
      "Movilización eficiente de crudo pesado y extrapesado entre Frac Tanks, camiones cisterna y escuadras mediante bombas de desplazamiento positivo de alta eficiencia.",
    heroColor: "#eef7f1",
    icon: "M7 14h14M14 4v20",
    overview:
      "El bombeo de transferencia es la operación más crítica en el manejo de crudo pesado en campo. Utilizamos tecnología de desplazamiento positivo para garantizar un flujo continuo, controlado y sin emulsificación, preservando la calidad del crudo durante todo el proceso de carga y descarga.",
    sections: [
      {
        heading: "¿En qué consiste el servicio?",
        body: "Ejecutamos operaciones de carga (llenado) y descarga (vaciado) de crudo pesado y extrapesado desde y hacia Frac Tanks, camiones cisterna y escuadras de transporte. El servicio incluye la movilización del equipo al sitio, instalación de mangueras y acoples certificados, operación continua supervisada y retiro del equipo al finalizar.",
      },
      {
        heading: "Tecnología: Bombas de Desplazamiento Positivo",
        body: "A diferencia de las bombas centrífugas convencionales, las bombas de desplazamiento positivo mueven el fluido mediante una acción mecánica constante, generando un caudal proporcional a la velocidad del rotor y sin depender de la velocidad del flujo. Esto las hace ideales para crudos pesados de alta viscosidad.",
        list: [
          "Bombas tipo tornillo (screw pumps): máxima eficiencia para crudos extrapesados, bajo ruido y mínima turbulencia",
          "Bombas de lóbulos (lobe pumps): ideales para fluidos sensibles que no deben emulsificarse",
          "Caudal constante y ajustable según la operación",
          "Operación silenciosa y de bajo mantenimiento",
          "Compatibles con fluidos entre 500 y 50,000 cP de viscosidad",
        ],
      },
      {
        heading: "Aplicaciones en campo",
        body: "Nuestro servicio de bombeo cubre todas las etapas del manejo de crudo en locación:",
        list: [
          "Transferencia de crudo desde Frac Tanks hacia camiones cisterna",
          "Carga de escuadras de transporte de crudo pesado",
          "Descarga de camiones hacia tanques de almacenamiento o piscinas",
          "Recirculación para mantenimiento de temperatura del crudo",
          "Dilución y mezcla de crudo con diluyente o nafta",
          "Transferencia entre tanques en superficie (batería de producción)",
          "Apoyo a operaciones de inyección de vapor",
        ],
      },
      {
        heading: "Procedimiento operativo",
        body: "Cada operación sigue un protocolo estricto de seguridad e higiene industrial:",
        list: [
          "1. Inspección previa del sitio y evaluación de riesgos",
          "2. Instalación de sistema de aterramiento y equipos de seguridad",
          "3. Conexión de mangueras certificadas con acoples rápidos 4\"",
          "4. Verificación de presión y estanqueidad del sistema",
          "5. Operación continua con supervisor técnico en sitio",
          "6. Medición de volúmenes transferidos y emisión de reporte",
          "7. Desconexión segura y limpieza del área de trabajo",
        ],
      },
    ],
    specs: [
      { label: "Tipo de bomba", value: "Tornillo / Lóbulos" },
      { label: "Viscosidad manejada", value: "500 – 50,000 cP" },
      { label: "API crudo", value: "8° – 22°" },
      { label: "Diámetro conexión", value: "4 pulgadas" },
      { label: "Caudal nominal", value: "Ajustable en campo" },
      { label: "Presión de trabajo", value: "Hasta 150 PSI" },
      { label: "Acoples", value: "Tipo Storz certificados" },
      { label: "Disponibilidad", value: "24 horas / 7 días" },
    ],
    benefits: [
      {
        title: "Sin emulsificación",
        desc: "Las bombas de tornillo no cortan ni mezclan el crudo, preservando sus propiedades físicas durante la transferencia.",
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      },
      {
        title: "Flujo constante",
        desc: "Caudal estable sin pulsaciones, ideal para operaciones de medición precisa de volúmenes de crudo.",
        icon: "M22 12h-4l-3 9L9 3l-3 9H2",
      },
      {
        title: "Alta viscosidad",
        desc: "Capaz de manejar crudos con viscosidades de hasta 50,000 cP, incluyendo extrapesados de la Faja del Orinoco.",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
      },
      {
        title: "Movilización rápida",
        desc: "Equipo disponible para movilización en menos de 4 horas dentro del Estado Zulia para operaciones de emergencia.",
        icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
      },
    ],
    faq: [
      {
        q: "¿Qué tipo de crudo pueden manejar?",
        a: "Manejamos crudos pesados (API 15°–22°) y extrapesados (API 8°–15°), comunes en la Faja Petrolífera del Orinoco y los campos del Estado Zulia. También podemos manejar mezclas de crudo con diluyente o nafta.",
      },
      {
        q: "¿Cuánto tiempo toma una operación de carga/descarga?",
        a: "El tiempo depende del volumen y la viscosidad del crudo. En promedio, un Frac Tank de 500 barriles se carga o descarga en 2 a 4 horas con nuestro equipo estándar. Para operaciones mayores, utilizamos múltiples bombas en paralelo.",
      },
      {
        q: "¿Ofrecen servicio nocturno o en días feriados?",
        a: "Sí. Operamos 24 horas al día, 7 días a la semana, incluidos fines de semana y feriados nacionales. Para servicios nocturnos o de emergencia, contáctenos directamente al 0424-6472446.",
      },
      {
        q: "¿Qué medidas de seguridad aplican?",
        a: "Seguimos todos los protocolos PDVSA-COVENIN vigentes: análisis de riesgo previo (ART), dotación completa de EPP, sistema de aterramiento, kit antiderrame, y extintor certificado en cada operación.",
      },
    ],
  },

  {
    slug: "trasegado-vacuum",
    tag: "Vacuum",
    title: "Trasegado con Vacuum",
    subtitle: "Servicio de Alto Vacío Industrial",
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
      { label: "Capacidad", value: "160 Bbl (25,440 L)" },
      { label: "Material", value: "Acero A36 · 8 mm" },
      { label: "Diámetro", value: "1.85 m" },
      { label: "Longitud", value: "11.60 m" },
      { label: "Peso vacío", value: "6,000 kg" },
      { label: "Compresor", value: "NVE Challenger 607" },
      { label: "Motor", value: "Isuzu 4BD1" },
      { label: "Conexión", value: "Entrada/Salida 4\"" },
      { label: "Válvulas", value: "Tipo Mariposa" },
      { label: "Ejes", value: "2 Masa Americana" },
      { label: "Aterramiento", value: "Coperweld 1/0 · 3m" },
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
      "Suministro de Frac Tanks de 500 Bbl en 4 configuraciones especializadas: V-Bottom, Flat Bottom, Insulated y Gas Tight, según el tipo de fluido y las condiciones de cada operación.",
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
      { label: "Capacidad nominal", value: "500 barriles" },
      { label: "Capacidad litros", value: "79,500 litros" },
      { label: "Configuraciones", value: "V-Bottom · Flat · Insulated · Gas Tight" },
      { label: "Movilización", value: "Con lowboy o plataforma" },
      { label: "Compatibilidad", value: "Unidad Vacuum para limpieza" },
      { label: "Temperatura máx.", value: "Hasta 120°C (insulated)" },
      { label: "Conexiones", value: "Entradas/Salidas 4\" y 6\"" },
      { label: "Instalación", value: "Campo, batería, wellhead" },
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
    subtitle: "Inyección de Vapor Industrial y Petrolero",
    summary:
      "Servicio integral de generación e inyección de vapor para estimulación de pozos, calentamiento de sellos de bomba en carga de buques, patio de tanques y recuperación de crudo en fosas de pasivos ambientales.",
    heroColor: "#fef4ee",
    icon: "M12 2a10 10 0 100 20A10 10 0 0012 2z",
    overview:
      "La inyección de vapor es la tecnología más eficiente para la recuperación de crudo pesado y extrapesado. Ofrecemos el servicio completo de generación e inyección de vapor mediante calderas tipo OTSG (Once Through Steam Generators) con operación continua supervisada, tratamiento de agua y todas las modalidades de aplicación: estimulación de pozos, calentamiento de equipos en patios de tanques y carga de buques, y recuperación de crudo en fosas de pasivos ambientales.",
    sections: [
      {
        heading: "Aplicaciones del servicio",
        body: "Nuestra flota de calderas cubre todas las necesidades de vapor en operaciones petroleras y de superficie:",
        list: [
          "Recuperación de crudo en fosas petrolizadas de pasivos ambientales: inyección de vapor para fluidizar crudos solidificados o extrapesados atrapados en fosas históricas",
          "Patio de tanques: calentamiento externo de tanques de almacenamiento para reducir viscosidad y facilitar bombeo",
          "Calentamiento de sellos de bomba para carga de buques: vapor aplicado en sellos mecánicos y líneas de descarga para prevenir solidificación de crudo en operaciones de exportación",
          "Estimulación de pozos (Huff and Puff – Inyección Cíclica)",
          "Inyección Continua de Vapor (Steam Flooding) para empuje de crudo pesado",
          "SAGD – Drenaje por Gravedad Asistido con Vapor para crudos extrapesados",
        ],
      },
      {
        heading: "Recuperación de Crudo en Fosas de Pasivos Ambientales",
        body: "Las fosas petrolizadas heredadas de operaciones anteriores contienen crudo extrapesado y sólidos que no pueden movilizarse por métodos convencionales. La inyección de vapor en estas fosas permite:",
        list: [
          "Fluidización del crudo solidificado por reducción de viscosidad",
          "Separación de emulsiones crudo-agua-arena por efecto térmico",
          "Bombeo posterior con unidades de desplazamiento positivo o vacuum",
          "Remediación progresiva de la fosa hasta su saneamiento total",
          "Documentación del proceso para expedientes ambientales ante el MPPEA",
        ],
      },
      {
        heading: "Modalidades de Inyección de Vapor en Pozos",
        body: "Ofrecemos las tres técnicas estándar de la industria para estimulación térmica de pozos:",
        list: [
          "Inyección Alterna de Vapor (Huff and Puff): ciclos de inyección, remojo y producción para reducir la viscosidad del crudo en el entorno del pozo",
          "Inyección Continua de Vapor (Steam Flooding): vapor inyectado de manera continua en un pozo para desplazar crudo hacia pozos productores vecinos",
          "SAGD (Steam Assisted Gravity Drainage): dos pozos horizontales paralelos, vapor en el superior crea una cámara que drena crudo por gravedad hacia el pozo inferior",
        ],
      },
      {
        heading: "Equipos OTSG – Once Through Steam Generators",
        body: "Las calderas tipo OTSG son el estándar mundial para generación de vapor en campos petroleros. Sus ventajas sobre calderas convencionales son:",
        list: [
          "Arranque rápido: en operación plena en menos de 30 minutos",
          "Alta calidad de vapor: 80% de fracción de vapor (dryness) controlable",
          "Tolerancia a agua salina: diseñadas para trabajar con aguas de alta salinidad sin incrustaciones críticas",
          "Eficiencia térmica superior al 85%",
          "Operación continua con mínimo mantenimiento",
          "Presiones de operación: desde 600 hasta 2,500 PSI según el modelo",
        ],
      },
      {
        heading: "Tratamiento de Agua para Calderas Petroleras",
        body: "El agua de alimentación de las calderas es el factor más crítico para su vida útil y eficiencia. Incluimos en el servicio el tratamiento completo del agua:",
        list: [
          "Suavización por intercambio iónico: eliminación de calcio y magnesio (dureza)",
          "Desmineralización: eliminación de sólidos disueltos totales (TDS)",
          "Desgasificación: eliminación de oxígeno disuelto y CO₂ para evitar corrosión",
          "Dosificación de químicos inhibidores de incrustación y corrosión",
          "Análisis periódico de calidad del agua en campo",
          "Control de ciclos de concentración para purgas eficientes",
        ],
      },
      {
        heading: "Vapor para Patio de Tanques y Carga de Buques",
        body: "El vapor de baja y media presión es esencial para mantener la fluidez del crudo en superficie durante almacenamiento y exportación:",
        list: [
          "Serpentines de calefacción en tanques: vapor circulado por serpentines internos mantiene la temperatura del crudo por encima de su punto de fluidez",
          "Trazado de líneas: tuberías de vapor paralelas a las líneas de proceso para evitar solidificación en trayectos largos",
          "Calentamiento de sellos mecánicos de bomba: previene cristalización de parafinas en sellos durante paradas y arranques",
          "Purgas y purificación de líneas: inyección de vapor para limpiar obstrucciones de parafina o asfalto",
          "Apoyo a operaciones de carga de buques tanqueros con crudo extrapesado",
        ],
      },
    ],
    specs: [
      { label: "Tipo de caldera", value: "OTSG (Once Through SG)" },
      { label: "Fracción de vapor", value: "Hasta 80% dryness" },
      { label: "Eficiencia térmica", value: "> 85%" },
      { label: "Combustible", value: "Gas natural / Gasoil" },
      { label: "Tratamiento agua", value: "Suavización + Desgasif." },
      { label: "Modalidades", value: "Huff&Puff · Flooding · SAGD" },
      { label: "Aplicaciones", value: "Pozos · Tanques · Buques · Fosas" },
      { label: "Disponibilidad", value: "24 horas / 7 días" },
    ],
    benefits: [
      {
        title: "Recuperación de crudos extrapesados",
        desc: "El vapor reduce la viscosidad del crudo extrapesado hasta un 95%, permitiendo su flujo y bombeo en condiciones donde otros métodos fallan.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
      },
      {
        title: "Pasivos ambientales",
        desc: "Tecnología probada para la remediación de fosas petrolizadas históricas, con documentación para expedientes regulatorios.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064",
      },
      {
        title: "Operación continua 24/7",
        desc: "Las calderas OTSG permiten operación ininterrumpida con arranque en menos de 30 minutos y alta tolerancia a agua salina.",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      },
      {
        title: "Tratamiento de agua incluido",
        desc: "Incluimos el tratamiento completo del agua de alimentación: suavización, desgasificación y dosificación química para máxima vida útil.",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      },
    ],
    faq: [
      {
        q: "¿Qué es el Huff and Puff y cuándo se recomienda?",
        a: "El Huff and Puff (Inyección Alterna de Vapor) consiste en inyectar vapor al pozo durante varios días (huff), cerrar el pozo para que el calor se distribuya (soak) y luego producir el crudo fluidizado (puff). Se recomienda para pozos individuales con crudos pesados de viscosidad mayor a 1,000 cP y como técnica inicial antes de pasar a inyección continua.",
      },
      {
        q: "¿Cómo funciona la recuperación de crudo en fosas de pasivos ambientales?",
        a: "Se inyecta vapor directamente en la masa de crudo solidificado de la fosa mediante lanzas perforadas. El calor reduce la viscosidad del crudo, lo separa de los sólidos y lo hace bombeable. El crudo fluidizado se extrae con bomba de desplazamiento positivo o unidad vacuum. El proceso se documenta con mediciones antes/después para los expedientes ambientales.",
      },
      {
        q: "¿Por qué es importante el tratamiento del agua para las calderas?",
        a: "El agua sin tratar contiene calcio, magnesio y gases disueltos que forman incrustaciones (scaling) y corrosión en los tubos de la caldera, reduciendo la eficiencia y causando fallas prematuras. Una caldera con agua no tratada puede fallar en semanas. El tratamiento garantiza operación confiable y vida útil del equipo por varios años.",
      },
      {
        q: "¿Qué diferencia hay entre SAGD y Steam Flooding?",
        a: "En Steam Flooding, el vapor se inyecta en un pozo vertical para empujar el crudo horizontalmente hacia otros pozos. En SAGD, se perforan dos pozos horizontales paralelos a unos 5 metros de distancia: el superior inyecta vapor para crear una cámara caliente, y el crudo drena por gravedad hacia el pozo inferior que produce. SAGD es más eficiente para crudos extrapesados pero requiere mayor inversión de perforación.",
      },
      {
        q: "¿Ofrecen el servicio de calentamiento de sellos para carga de buques?",
        a: "Sí. Movilizamos unidades de generación de vapor al muelle o terminal marítimo para mantener la temperatura de los sellos mecánicos de las bombas de carga y las líneas de transferencia a lo largo de toda la operación de carga del buque, previniendo solidificaciones que puedan detener la operación.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
