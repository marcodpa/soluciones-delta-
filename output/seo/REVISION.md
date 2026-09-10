# Revisión SEO — 9 de septiembre de 2026

Objetivo indicado por el usuario: captar solicitudes de toda Venezuela, conservando la sede real en San Francisco, Zulia.

## Cambios preparados (sin publicar)
- Metadatos propios para las 10 páginas: títulos sin marca duplicada, descripciones nacionales y canonical de cada página.
- Una sola fuente de sitemap y robots; eliminadas las copias estáticas duplicadas. No se bloquean recursos de Next.js.
- Datos estructurados coherentes con los datos visibles de la empresa; catálogo completo de seis servicios y rutas de navegación reales.
- Eliminado FAQPage de la portada, donde esas preguntas no estaban visibles, y propiedades no comprobadas (teléfono gratuito, coordenadas, año de fundación y código postal).
- Corregidas referencias a una imagen inexistente y un fallo en la generación de la imagen de vista previa existente.
- Portada y primer titular visibles antes de descargar la secuencia de animación. La animación mantiene la carga completa antes de activarse.
- Texto visible de cobertura nacional sujeto a disponibilidad y coordinación según cada proyecto.
- Corregido el error de tipos previo de ErrorReporter para poder comprobar TypeScript.

## Validación
- Compilación de producción completada.
- TypeScript y revisión de código de archivos modificados: sin errores.
- scripts/seo-audit.py: 10 páginas y 10 URLs del sitemap, sin fallos; comprueba títulos, canonical, H1, robots, JSON-LD, imágenes y 404.
- Evidencia inicial: antes.json. Resultado local: despues.json.
- No se han publicado estos cambios ni modificado Search Console o Google Maps.

## Pendiente antes de continuar
El usuario ya hizo trabajo SEO en otra cuenta de Google y quiere compartirlo. Solicitados:
1. Exportación Excel de Rendimiento de Search Console (últimos 3 meses; conservar pestañas de consultas, páginas, países y dispositivos).
2. Exportación de Indexación de páginas y, si existe, documentación de acciones SEO anteriores.
3. Enlace público de Google Maps y propiedad exacta de Search Console.

Analizar primero consultas y páginas con impresiones, clics, CTR y posición; comparar el trabajo previo antes de publicar o cambiar prioridades. No se dispone de datos privados de tráfico o posiciones ni se han medido Core Web Vitals de campo. No prometer posiciones ni mejoras de tráfico.

## Referencias
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://support.google.com/webmasters/answer/12919797?hl=es
