"use client";

import { useState } from "react";
import {
  pdf, Document, Page, Text, View, StyleSheet, Image as PDFImage,
} from "@react-pdf/renderer";
import { SERVICES, type ServiceData } from "@/lib/services-data";

// ── Constants ─────────────────────────────────────────────────────────────────
const GREEN       = "#1a8c3c";
const GREEN_LIGHT = "#30d158";
const DARK        = "#0d1f14";
const GRAY        = "#6e6e73";
const LIGHT_BG    = "#f5f5f7";
const BORDER      = "#e5e5ea";
const WHITE       = "#ffffff";
const NEAR_BLACK  = "#1d1d1f";

// Per-service: main photo + gallery photos
const SERVICE_PHOTOS: Record<string, { main: string; gallery: { src: string; caption: string }[] }> = {
  "bombeo-de-crudo": {
    main: "/bombeo/equipo-principal.png",
    gallery: [
      { src: "/bombeo/bomba-hidraulica-roja.jpg", caption: "Bomba Hidráulica — Motor y acople 6\"" },
      { src: "/bombeo/bomba-en-fosa.jpg",         caption: "Bomba en operación de extracción" },
      { src: "/bombeo/motor-hidraulico.png",       caption: "Unidad de potencia hidráulica" },
    ],
  },
  "trasegado-vacuum": {
    main: "/vacuum/vacuum-semirremolque.jpg",
    gallery: [
      { src: "/vacuum/vacuum-truck-howo-pdvsa.jpg", caption: "Unidad Vacuum en operación — Locación PDVSA" },
      { src: "/vacuum/nve-607-challenger.jpg",       caption: "Compresor NVE Challenger 607 PRO" },
      { src: "/vacuum/nve-607-pump-stand.jpg",       caption: "NVE 607 — montaje en estación" },
    ],
  },
  "frac-tanks": {
    main: "/frac-tanks/frac-tank-nuevo.png",
    gallery: [
      { src: "/frac-tanks/bateria-frac-tanks-2.jpg", caption: "Batería de Frac Tanks en locación" },
      { src: "/frac-tanks/bateria-frac-tanks.jpg",   caption: "Frac Tanks — Estado Zulia" },
      { src: "/frac-tanks/frac-tank-ficha.jpg",      caption: "Ficha técnica del equipo" },
    ],
  },
  "manejo-de-desechos": {
    main: "/vacuum/vacuum-truck-howo-pdvsa.jpg",
    gallery: [
      { src: "/desechos/retroexcavadora-fosa.jpg", caption: "Retroexcavadora CAT en fosa petrolera" },
      { src: "/desechos/cargador-fosa.jpg",        caption: "Cargador frontal CAT — saneamiento de fosa" },
    ],
  },
  "alquiler-calderas-inyeccion-vapor": {
    main: "/vapor/caldera-otsg-semirremolque.jpg",
    gallery: [
      { src: "/vapor/fosa-campo-boscan.jpg",        caption: "Extracción de crudo en fosa" },
      { src: "/vapor/campo-pozos.jpg",              caption: "Locación de pozos — Estado Zulia" },
    ],
  },
};

// ── Styles ────────────────────────────────────────────────────────────────────
const S = StyleSheet.create({
  page:           { fontFamily: "Helvetica", backgroundColor: WHITE, paddingBottom: 40 },
  pageNoPad:      { fontFamily: "Helvetica", backgroundColor: WHITE },

  // Header bar (appears on every content page)
  headerBar:      { backgroundColor: DARK, paddingVertical: 16, paddingHorizontal: 40, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headerLogo:     { width: 72, height: 24, objectFit: "contain" },
  headerRight:    { fontSize: 7.5, color: "rgba(255,255,255,0.3)", letterSpacing: 1 },

  // Cover
  cover:          { flex: 1, backgroundColor: DARK, flexDirection: "column" },
  coverImageWrap: { height: 260, position: "relative" },
  coverImage:     { width: "100%", height: 260, objectFit: "cover" },
  coverOverlay:   { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.62)" },
  coverContent:   { flex: 1, padding: "40px 52px 0 52px" },
  coverLogo:      { width: 110, height: 44, objectFit: "contain", marginBottom: 32 },
  coverEyebrow:   { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: GREEN_LIGHT, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 14 },
  coverTitle:     { fontSize: 34, fontFamily: "Helvetica-Bold", color: WHITE, lineHeight: 1.12, marginBottom: 14 },
  coverGreen:     { color: GREEN_LIGHT },
  coverSub:       { fontSize: 11.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, maxWidth: 320, marginBottom: 28 },
  coverServices:  { flexDirection: "row", gap: 6, flexWrap: "wrap", marginBottom: 0 },
  coverSvcBadge:  { backgroundColor: "rgba(26,140,60,0.2)", borderRadius: 20, paddingVertical: 4, paddingHorizontal: 10, border: `1px solid rgba(48,209,88,0.25)` },
  coverSvcText:   { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: GREEN_LIGHT, letterSpacing: 1, textTransform: "uppercase" },
  coverBottom:    { paddingHorizontal: 52, paddingVertical: 18, borderTop: "1px solid rgba(255,255,255,0.08)", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  coverMeta:      { fontSize: 8, color: "rgba(255,255,255,0.28)", letterSpacing: 0.4 },
  coverYear:      { backgroundColor: "rgba(26,140,60,0.25)", borderRadius: 20, paddingVertical: 5, paddingHorizontal: 12, border: `1px solid rgba(48,209,88,0.3)` },
  coverYearText:  { fontSize: 8, fontFamily: "Helvetica-Bold", color: GREEN_LIGHT, letterSpacing: 1.5 },

  // Service cover (single PDF)
  svcCover:         { flex: 1, backgroundColor: DARK, position: "relative", marginBottom: 36 },
  svcCoverImg:      { width: "100%", height: "55%", objectFit: "cover" },
  svcCoverOverlay:  { position: "absolute", top: 0, left: 0, right: 0, height: "55%", backgroundColor: "rgba(0,0,0,0.45)" },
  svcCoverBody:     { flex: 1, padding: "32px 52px", flexDirection: "column", justifyContent: "flex-start" },
  svcCoverLogo:     { width: 90, height: 36, objectFit: "contain", marginBottom: 20 },
  svcCoverNum:      { fontSize: 9, color: GREEN_LIGHT, letterSpacing: 2, marginBottom: 6 },
  svcCoverTag:      { fontSize: 8, fontFamily: "Helvetica-Bold", color: GREEN_LIGHT, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 },
  svcCoverTitle:    { fontSize: 30, fontFamily: "Helvetica-Bold", color: WHITE, lineHeight: 1.12, marginBottom: 6 },
  svcCoverSubtitle: { fontSize: 12, color: GREEN_LIGHT, fontFamily: "Helvetica-Bold", marginBottom: 12 },
  svcCoverSummary:  { fontSize: 10.5, color: "rgba(255,255,255,0.58)", lineHeight: 1.65, maxWidth: 380 },
  svcCoverBottom:   { position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid rgba(255,255,255,0.08)", paddingHorizontal: 52, paddingVertical: 14, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  svcCoverRIF:      { fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: 0.4 },

  // Content body
  body:           { padding: "20px 40px" },

  // Section title
  secLabel:       { fontSize: 8, fontFamily: "Helvetica-Bold", color: GRAY, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 },
  svcTitle:       { fontSize: 22, fontFamily: "Helvetica-Bold", color: NEAR_BLACK, lineHeight: 1.15, marginBottom: 4 },
  svcSubtitle:    { fontSize: 10, color: GREEN, fontFamily: "Helvetica-Bold", marginBottom: 8 },
  svcSummary:     { fontSize: 9.5, color: GRAY, lineHeight: 1.65, marginBottom: 14, maxWidth: 430 },
  divider:        { height: 1, backgroundColor: BORDER, marginBottom: 14 },

  // Two columns
  twoCol:         { flexDirection: "row", gap: 20 },
  col:            { flex: 1 },

  // Section items
  secHeading:     { fontSize: 9, fontFamily: "Helvetica-Bold", color: NEAR_BLACK, marginBottom: 5, marginTop: 12 },
  secBody:        { fontSize: 8.5, color: GRAY, lineHeight: 1.62, marginBottom: 4 },
  bulletRow:      { flexDirection: "row", gap: 5, marginBottom: 2.5, alignItems: "flex-start" },
  bulletDot:      { width: 4, height: 4, borderRadius: 2, backgroundColor: GREEN, marginTop: 4, flexShrink: 0 },
  bulletText:     { fontSize: 8, color: GRAY, lineHeight: 1.55, flex: 1 },

  // Specs
  specsWrap:      { border: `1px solid ${BORDER}`, borderRadius: 6, overflow: "hidden", marginTop: 2 },
  specRow:        { flexDirection: "row", borderBottom: `1px solid ${BORDER}` },
  specCell:       { flex: 1, padding: "6px 8px", borderRight: `1px solid ${BORDER}` },
  specCellLast:   { flex: 1, padding: "6px 8px" },
  specCellAlt:    { backgroundColor: "#fafafa" },
  specLabel:      { fontSize: 7, color: GRAY, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 1.5 },
  specValue:      { fontSize: 9, fontFamily: "Helvetica-Bold", color: NEAR_BLACK },

  // Benefits
  benefitGrid:    { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  benefitCard:    { width: "47.5%", padding: "8px 9px", backgroundColor: LIGHT_BG, borderRadius: 5, border: `1px solid ${BORDER}` },
  benefitTitle:   { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: NEAR_BLACK, marginBottom: 2.5 },
  benefitDesc:    { fontSize: 7.5, color: GRAY, lineHeight: 1.55 },

  // FAQ
  faqWrap:        { marginTop: 4 },
  faqItem:        { marginBottom: 8, paddingBottom: 8, borderBottom: `1px solid ${BORDER}` },
  faqQ:           { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: NEAR_BLACK, marginBottom: 3 },
  faqA:           { fontSize: 8, color: GRAY, lineHeight: 1.6 },

  // Gallery
  galleryGrid:    { flexDirection: "row", gap: 8, marginTop: 4 },
  galleryImgWrap: { flex: 1, borderRadius: 6, overflow: "hidden", position: "relative" },
  galleryImg:     { width: "100%", height: 120, objectFit: "cover" },
  galleryCaption: { fontSize: 7.5, color: GRAY, marginTop: 4, textAlign: "center" },

  // Page footer
  footer:         { position: "absolute", bottom: 14, left: 40, right: 40, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  footerText:     { fontSize: 7, color: "#b0b0b5", letterSpacing: 0.4 },
  footerLine:     { width: 20, height: 1.5, backgroundColor: GREEN, borderRadius: 1 },

  // Contact page
  contactPage:    { flex: 1, backgroundColor: DARK, padding: "52px 52px" },
  contactLogo:    { width: 100, height: 40, objectFit: "contain", marginBottom: 32 },
  contactEyebrow: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: GREEN_LIGHT, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 16 },
  contactTitle:   { fontSize: 28, fontFamily: "Helvetica-Bold", color: WHITE, lineHeight: 1.15, marginBottom: 12 },
  contactSub:     { fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, maxWidth: 300, marginBottom: 30 },
  contactDivider: { height: 1, backgroundColor: "rgba(255,255,255,0.08)", marginVertical: 24 },
  contactItem:    { marginBottom: 16 },
  contactItemLabel:  { fontSize: 7.5, color: "rgba(255,255,255,0.3)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 },
  contactItemValue:  { fontSize: 12, fontFamily: "Helvetica-Bold", color: WHITE, marginBottom: 1 },
  contactItemSub:    { fontSize: 8.5, color: "rgba(255,255,255,0.4)" },
  contactRIFRow:  { flexDirection: "row", gap: 10, alignItems: "center" },
  contactRIFBadge: { backgroundColor: "rgba(26,140,60,0.2)", borderRadius: 20, paddingVertical: 5, paddingHorizontal: 14, border: `1px solid rgba(48,209,88,0.2)` },
  contactRIFText: { fontSize: 9, fontFamily: "Helvetica-Bold", color: GREEN_LIGHT, letterSpacing: 1 },
  contactAddr:    { fontSize: 8.5, color: "rgba(255,255,255,0.3)", lineHeight: 1.5 },
});

// ── Helper: specs in 2-col rows ───────────────────────────────────────────────
function SpecsTable({ specs }: { specs: { label: string; value: string }[] }) {
  const pairs: { label: string; value: string }[][] = [];
  for (let i = 0; i < specs.length; i += 2) pairs.push(specs.slice(i, i + 2));
  return (
    <View style={S.specsWrap}>
      {pairs.map((pair, i) => (
        <View key={i} style={[S.specRow, i === pairs.length - 1 ? { borderBottom: "none" } : {}]}>
          {pair.map((sp, j) => (
            <View key={j} style={[j === 0 ? S.specCell : S.specCellLast, i % 2 !== 0 ? S.specCellAlt : {}]}>
              <Text style={S.specLabel}>{sp.label}</Text>
              <Text style={S.specValue}>{sp.value}</Text>
            </View>
          ))}
          {pair.length === 1 && <View style={S.specCellLast} />}
        </View>
      ))}
    </View>
  );
}

// ── Contact page (shared) ─────────────────────────────────────────────────────
function ContactPage({ logoUrl, pageNum }: { logoUrl: string; pageNum: number }) {
  return (
    <Page size="A4" style={S.pageNoPad}>
      <View style={S.contactPage}>
        <PDFImage src={logoUrl} style={S.contactLogo} />
        <Text style={S.contactEyebrow}>Contáctenos · Disponibles 24/7</Text>
        <Text style={S.contactTitle}>{"¿Tiene una\noperación en campo?"}</Text>
        <Text style={S.contactSub}>
          Nuestro equipo técnico responde en menos de 2 horas hábiles. Para emergencias, operamos las 24 horas, los 7 días de la semana.
        </Text>
        <View style={S.contactItem}>
          <Text style={S.contactItemLabel}>Teléfono / WhatsApp</Text>
          <Text style={S.contactItemValue}>+58 424-6472446</Text>
          <Text style={S.contactItemSub}>Emergencias: disponible 24/7</Text>
        </View>
        <View style={S.contactItem}>
          <Text style={S.contactItemLabel}>Correo Electrónico</Text>
          <Text style={S.contactItemValue}>solucionesdeltaca@gmail.com</Text>
          <Text style={S.contactItemSub}>Respuesta en menos de 2 horas hábiles</Text>
        </View>
        <View style={S.contactItem}>
          <Text style={S.contactItemLabel}>Ubicación</Text>
          <Text style={S.contactItemValue}>San Francisco, Estado Zulia</Text>
          <Text style={S.contactItemSub}>Calle 13 con Av 5, Local 26A-162, Of. 2, Sector Manzanillo</Text>
        </View>
        <View style={S.contactDivider} />
        <View style={S.contactRIFRow}>
          <View style={S.contactRIFBadge}>
            <Text style={S.contactRIFText}>RIF J-50735393-1</Text>
          </View>
          <Text style={S.contactAddr}>Soluciones Delta, C.A. · San Francisco, Edo. Zulia, Venezuela</Text>
        </View>
      </View>
      <View style={S.footer} fixed>
        <Text style={S.footerText}>Soluciones Delta, C.A. · solucionesdeltaca@gmail.com · +58 424-6472446</Text>
        <View style={S.footerLine} />
        <Text style={S.footerText}>Pág. {pageNum}</Text>
      </View>
    </Page>
  );
}

// ── FULL CATALOG PDF ──────────────────────────────────────────────────────────
function CatalogoPDF({ origin }: { origin: string }) {
  const logoUrl = `${origin}/logo.png`;

  return (
    <Document
      title="Catálogo de Servicios — Soluciones Delta, C.A."
      author="Soluciones Delta, C.A."
    >
      {/* Cover */}
      <Page size="A4" style={S.pageNoPad}>
        <View style={S.cover}>
          <View style={S.coverImageWrap}>
            <PDFImage src={`${origin}/vapor/campo-pozos.jpg`} style={S.coverImage} />
            <View style={S.coverOverlay} />
          </View>
          <View style={S.coverContent}>
            <PDFImage src={logoUrl} style={S.coverLogo} />
            <Text style={S.coverEyebrow}>Catálogo de Servicios · 2026</Text>
            <Text style={S.coverTitle}>
              {"Soluciones técnicas\npara la industria\n"}
              <Text style={S.coverGreen}>petrolera.</Text>
            </Text>
            <Text style={S.coverSub}>
              Cinco servicios especializados para operaciones de petróleo y gas en Venezuela. Flota propia, personal certificado y operación continua 24/7.
            </Text>
            <View style={S.coverServices}>
              {SERVICES.map(s => (
                <View key={s.slug} style={S.coverSvcBadge}>
                  <Text style={S.coverSvcText}>{s.tag}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={S.coverBottom}>
            <Text style={S.coverMeta}>Soluciones Delta, C.A. · RIF J-50735393-1 · San Francisco, Edo. Zulia</Text>
            <View style={S.coverYear}><Text style={S.coverYearText}>2026</Text></View>
          </View>
        </View>
      </Page>

      {/* One page per service */}
      {SERVICES.map((s, idx) => {
        const photos = SERVICE_PHOTOS[s.slug];
        const mainImg = `${origin}${photos.main}`;
        const galleryImgs = photos.gallery.slice(0, 3).map(g => ({ ...g, src: `${origin}${g.src}` }));

        return (
          <Page key={s.slug} size="A4" style={S.page}>
            {/* Header */}
            <View style={S.headerBar}>
              <PDFImage src={logoUrl} style={S.headerLogo} />
              <Text style={S.headerRight}>CATÁLOGO DE SERVICIOS · 2026</Text>
            </View>

            {/* Hero image */}
            <PDFImage src={mainImg} style={{ width: "100%", height: 160, objectFit: "cover" }} />

            <View style={[S.body, { paddingTop: 8, paddingBottom: 44 }]} wrap={false}>
              {/* Title block */}
              <Text style={[S.secLabel, { color: GRAY, marginBottom: 2 }]}>0{idx + 1} / 05 · {s.tag}</Text>
              <Text style={[S.svcTitle, { fontSize: 17, marginBottom: 2 }]}>{s.title}</Text>
              <Text style={[S.svcSubtitle, { marginBottom: 3 }]}>{s.subtitle}</Text>
              <Text style={[S.svcSummary, { marginBottom: 6, fontSize: 8 }]}>{s.summary}</Text>
              <View style={[S.divider, { marginBottom: 6 }]} />

              <View style={S.twoCol}>
                {/* Left — first 2 sections + gallery */}
                <View style={S.col}>
                  <Text style={S.secLabel}>Descripción</Text>
                  {s.sections.slice(0, 2).map((sec, i) => (
                    <View key={i}>
                      <Text style={[S.secHeading, { marginTop: 4 }]}>{sec.heading}</Text>
                      <Text style={[S.secBody, { fontSize: 7 }]}>{sec.body}</Text>
                      {sec.list?.slice(0, 2).map((item, j) => (
                        <View key={j} style={S.bulletRow}>
                          <View style={S.bulletDot} />
                          <Text style={[S.bulletText, { fontSize: 7 }]}>{item}</Text>
                        </View>
                      ))}
                    </View>
                  ))}

                  {/* Gallery strip */}
                  <Text style={[S.secLabel, { marginTop: 6 }]}>Equipos y Operaciones</Text>
                  <View style={S.galleryGrid}>
                    {galleryImgs.slice(0, 2).map((g, i) => (
                      <View key={i} style={S.galleryImgWrap}>
                        <PDFImage src={g.src} style={[S.galleryImg, { height: 72 }]} />
                        <Text style={[S.galleryCaption, { fontSize: 6.5 }]}>{g.caption}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* Right — specs + benefits */}
                <View style={S.col}>
                  {s.specs && (
                    <>
                      <Text style={S.secLabel}>Especificaciones Técnicas</Text>
                      <SpecsTable specs={s.specs.slice(0, 6)} />
                    </>
                  )}
                  <Text style={[S.secLabel, { marginTop: 8 }]}>Ventajas del Servicio</Text>
                  <View style={S.benefitGrid}>
                    {s.benefits.slice(0, 4).map((b, i) => (
                      <View key={i} style={[S.benefitCard, { padding: "5px 6px" }]}>
                        <Text style={[S.benefitTitle, { fontSize: 7 }]}>{b.title}</Text>
                        <Text style={[S.benefitDesc, { fontSize: 6.5 }]}>{b.desc}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>

            <View style={S.footer} fixed>
              <Text style={S.footerText}>Soluciones Delta, C.A. · solucionesdeltaca@gmail.com · +58 424-6472446</Text>
              <View style={S.footerLine} />
              <Text style={S.footerText}>Pág. {idx + 2}</Text>
            </View>
          </Page>
        );
      })}

    </Document>
  );
}

// ── SINGLE SERVICE PDF ────────────────────────────────────────────────────────
function ServicioPDF({ service, origin }: { service: ServiceData; origin: string }) {
  const logoUrl = `${origin}/logo.png`;
  const photos  = SERVICE_PHOTOS[service.slug];
  const mainImg = `${origin}${photos.main}`;
  const gallery = photos.gallery.map(g => ({ ...g, src: `${origin}${g.src}` }));
  const idx     = SERVICES.findIndex(s => s.slug === service.slug);

  return (
    <Document
      title={`${service.title} — Soluciones Delta, C.A.`}
      author="Soluciones Delta, C.A."
    >
      {/* ── Pág. 1: Portada — imagen + título + breve descripción + footer ── */}
      <Page size="A4" style={[S.pageNoPad, { paddingBottom: 40 }]}>
        <View style={S.svcCover}>
          <PDFImage src={mainImg} style={S.svcCoverImg} />
          <View style={S.svcCoverOverlay} />
          <View style={S.svcCoverBody}>
            <PDFImage src={logoUrl} style={S.svcCoverLogo} />
            <Text style={S.svcCoverNum}>0{idx + 1} / 05</Text>
            <Text style={S.svcCoverTag}>{service.tag}</Text>
            <Text style={S.svcCoverTitle}>{service.title}</Text>
            <Text style={S.svcCoverSubtitle}>{service.subtitle}</Text>
            <Text style={S.svcCoverSummary}>{service.summary}</Text>
          </View>
          <View style={S.svcCoverBottom}>
            <Text style={S.svcCoverRIF}>Soluciones Delta, C.A. · RIF J-50735393-1 · San Francisco, Edo. Zulia</Text>
            <View style={S.coverYear}><Text style={S.coverYearText}>2026</Text></View>
          </View>
        </View>
        <View style={S.footer}>
          <Text style={S.footerText}>Soluciones Delta, C.A. · solucionesdeltaca@gmail.com · +58 424-6472446</Text>
          <View style={S.footerLine} />
          <Text style={S.footerText}>Pág. 1</Text>
        </View>
      </Page>

      {/* ── Pág. 2: Ficha técnica completa — header + contenido + imágenes + footer ── */}
      <Page size="A4" style={S.page}>
        <View style={S.headerBar}>
          <PDFImage src={logoUrl} style={S.headerLogo} />
          <Text style={S.headerRight}>{service.tag.toUpperCase()} · FICHA TÉCNICA</Text>
        </View>

        <View style={[S.body, { paddingTop: 14, paddingBottom: 50 }]}>
          {/* Overview */}
          <Text style={[S.secBody, { marginBottom: 10, fontSize: 9.5, lineHeight: 1.6 }]}>{service.overview || service.summary}</Text>
          <View style={S.divider} />

          <View style={S.twoCol}>
            {/* Left — sections + gallery */}
            <View style={S.col}>
              <Text style={S.secLabel}>Descripción</Text>
              {service.sections.slice(0, 2).map((sec, i) => (
                <View key={i}>
                  <Text style={S.secHeading}>{sec.heading}</Text>
                  <Text style={S.secBody}>{sec.body}</Text>
                  {sec.list?.slice(0, 4).map((item, j) => (
                    <View key={j} style={S.bulletRow}>
                      <View style={S.bulletDot} />
                      <Text style={S.bulletText}>{item}</Text>
                    </View>
                  ))}
                </View>
              ))}

              <Text style={[S.secLabel, { marginTop: 10 }]}>Equipos y Operaciones</Text>
              <View style={S.galleryGrid}>
                {gallery.slice(0, 2).map((g, i) => (
                  <View key={i} style={S.galleryImgWrap}>
                    <PDFImage src={g.src} style={[S.galleryImg, { height: 100 }]} />
                    <Text style={S.galleryCaption}>{g.caption}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Right — specs + benefits + contact */}
            <View style={S.col}>
              {service.specs && (
                <>
                  <Text style={S.secLabel}>Especificaciones Técnicas</Text>
                  <SpecsTable specs={service.specs.slice(0, 8)} />
                </>
              )}
              <Text style={[S.secLabel, { marginTop: 12 }]}>Ventajas del Servicio</Text>
              <View style={S.benefitGrid}>
                {service.benefits.slice(0, 4).map((b, i) => (
                  <View key={i} style={S.benefitCard}>
                    <Text style={S.benefitTitle}>{b.title}</Text>
                    <Text style={S.benefitDesc}>{b.desc}</Text>
                  </View>
                ))}
              </View>

              {/* Contact info inline */}
              <View style={{ marginTop: 12, padding: "8px 10px", backgroundColor: "#0d1f14", borderRadius: 5 }}>
                <Text style={[S.secLabel, { color: "#30d158", marginBottom: 6 }]}>Contacto</Text>
                <Text style={{ fontSize: 8.5, color: "#ffffff", fontFamily: "Helvetica-Bold", marginBottom: 2 }}>+58 424-6472446</Text>
                <Text style={{ fontSize: 7.5, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>solucionesdeltaca@gmail.com</Text>
                <Text style={{ fontSize: 7, color: "rgba(255,255,255,0.35)" }}>San Francisco, Estado Zulia · 24/7</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={S.footer} fixed>
          <Text style={S.footerText}>Soluciones Delta, C.A. · solucionesdeltaca@gmail.com · +58 424-6472446</Text>
          <View style={S.footerLine} />
          <Text style={S.footerText}>Pág. 2</Text>
        </View>
      </Page>
    </Document>
  );
}


// ── Download button: ALL services catalog ─────────────────────────────────────
export default function DescargarCatalogoBtnn() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const origin = window.location.origin;
      const blob   = await pdf(<CatalogoPDF origin={origin} />).toBlob();
      const url    = URL.createObjectURL(blob);
      const a      = document.createElement("a");
      a.href       = url;
      a.download   = "Catalogo-Servicios-Soluciones-Delta.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return <PDFBtn onClick={handleDownload} loading={loading} label="Descargar catálogo PDF" />;
}

// ── Download button: SINGLE service ──────────────────────────────────────────
export function DescargarServicioPDF({ service }: { service: ServiceData }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const origin = window.location.origin;
      const blob   = await pdf(<ServicioPDF service={service} origin={origin} />).toBlob();
      const url    = URL.createObjectURL(blob);
      const a      = document.createElement("a");
      a.href       = url;
      a.download   = `Ficha-${service.slug}-Soluciones-Delta.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return <PDFBtn onClick={handleDownload} loading={loading} label="Descargar ficha PDF" />;
}

// ── Shared button UI ──────────────────────────────────────────────────────────
function PDFBtn({ onClick, loading, label }: { onClick: () => void; loading: boolean; label: string }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-200 disabled:opacity-60"
      style={{
        background: "rgba(26,140,60,0.08)",
        border: "1.5px solid rgba(26,140,60,0.25)",
        color: "#1a8c3c",
      }}
      onMouseEnter={e => {
        if (!loading) {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(26,140,60,0.14)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(26,140,60,0.45)";
        }
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(26,140,60,0.08)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(26,140,60,0.25)";
      }}
    >
      {loading ? (
        <>
          <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="28" strokeDashoffset="10" strokeLinecap="round"/>
          </svg>
          Generando PDF...
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {label}
        </>
      )}
    </button>
  );
}
