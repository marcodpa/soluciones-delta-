# DISEÑO DEL HOME — Soluciones Delta, C.A.

Documento de trabajo para cambios de diseño de la página de inicio (`/`).
Cada sección del home está listada en orden de aparición, con su archivo, lo que muestra
y su estilo actual. **Escribe lo que quieres cambiar en el bloque "🖊 Cambios que quiero"
de cada sección** y muéstramelo — yo aplico los cambios.

Paleta actual del sitio:

| Uso | Color |
|---|---|
| Verde principal (botones, acentos) | `#1a8c3c` |
| Verde claro (highlights, texto acento) | `#30d158` |
| Fondo oscuro (hero, servicios, footer) | `#080f09` / `#0d1f14` / `#111` |
| Fondo claro (secciones blancas) | `#ffffff` / `#f5f5f7` |
| Texto principal oscuro | `#1d1d1f` |
| Texto secundario | `#6e6e73` |

---

## 0. Navbar
**Archivo:** `src/components/Navbar.tsx`
**Muestra:** logo, enlaces (Inicio, Servicios, Nosotros, Contacto), WhatsApp y botón verde "Solicitar Servicio". Fija arriba, fondo oscuro translúcido con blur.

🖊 **Cambios que quiero:**
-

---

## 1. Hero (portada)
**Archivo:** `src/components/HeroSection.tsx`
**Muestra:** animación de scroll con secuencia de imágenes del camión (`public/frames/`), titulares grandes ("Servicios petroleros.", "160 barriles. Acero A36…"), texto con la lista de servicios, botones "Conocer Servicios" / "Contáctenos" y barra de cifras (160 Bbl, 500 Bbl, 24/7).
**Estilo actual:** fondo negro/verde oscuro, tipografía blanca gigante, indicador "SCROLL".

🖊 **Cambios que quiero:**
-

---

## 2. Quiénes Somos
**Archivo:** `src/components/AboutSection.tsx`
**Muestra:** eyebrow "QUIÉNES SOMOS", titular "Expertos en el sector petrolero venezolano", dos párrafos de presentación, botones "Conocer más" / "Contacto", collage de 3 fotos (vacuum, frac tank, generador de vapor) y cifras (100 % cumplimiento, 1.500 Bbl/día, 24/7).
**Estilo actual:** sección clara sobre fondo blanco, fotos con esquinas redondeadas.

🖊 **Cambios que quiero:**
-

---

## 3. Nuestros Servicios
**Archivo:** `src/components/ServicesSection.tsx`
**Muestra:** lista de las 6 líneas de servicio (01–06) con ícono, tag y tagline, sobre foto de campo a la derecha; CTA "Ver catálogo completo de servicios".
**Estilo actual:** fondo verde muy oscuro `#080f09`, filas con separador fino, acentos verde `#30d158`.

🖊 **Cambios que quiero:**
-

---

## 4. Fortalezas (Por qué elegirnos)
**Archivo:** `src/components/FortalezasSection.tsx`
**Muestra:** tarjetas con las fortalezas de la empresa (equipos propios, cumplimiento, servicio integral —bombeo, vacuum, frac tanks, vapor, hydrojet, desechos—, personal certificado…).

🖊 **Cambios que quiero:**
-

---

## 5. Cifras de Confianza
**Archivo:** `src/components/HomeTrustSection.tsx`
**Muestra:** contadores animados: 6+ servicios especializados, 500 Bbl frac tanks, etc.

🖊 **Cambios que quiero:**
-

---

## 6. CTA Final
**Archivo:** `src/components/HomeCtaSection.tsx`
**Muestra:** llamado final a cotizar / contactar antes del footer.

🖊 **Cambios que quiero:**
-

---

## 7. Footer
**Archivo:** `src/components/Footer.tsx`
**Muestra:** logo, descripción breve, contacto (email y WhatsApp), navegación y lista de los 6 servicios con enlace.
**Estilo actual:** fondo `#111`, texto gris, hover verde.

🖊 **Cambios que quiero:**
-

---

### Notas generales (colores, tipografía, animaciones que apliquen a todo el sitio)

🖊 **Cambios que quiero:**
-
