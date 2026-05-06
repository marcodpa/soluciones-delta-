"use client";

import { useState } from "react";
import { pdf, Document, Page, Text, View, StyleSheet, Image as PDFImage } from "@react-pdf/renderer";

const GREEN       = "#1a8c3c";
const GREEN_LIGHT = "#30d158";
const DARK        = "#0d1f14";
const GRAY        = "#6e6e73";
const BORDER      = "#d1d1d6";
const WHITE       = "#ffffff";
const NEAR_BLACK  = "#1d1d1f";

const S = StyleSheet.create({
  page: { fontFamily: "Helvetica", backgroundColor: WHITE, paddingBottom: 80 },

  // ── Header ──────────────────────────────────────────────────────────────────
  header: {
    backgroundColor: DARK,
    paddingVertical: 20,
    paddingHorizontal: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLogo:   { width: 96, height: 32, objectFit: "contain" },
  headerRight:  { alignItems: "flex-end" },
  headerTitle:  { fontSize: 9, fontFamily: "Helvetica-Bold", color: WHITE, letterSpacing: 1.8, textTransform: "uppercase" },
  headerSub:    { fontSize: 7, color: "rgba(255,255,255,0.38)", marginTop: 3, letterSpacing: 0.5 },
  greenBar:     { height: 3, backgroundColor: GREEN },

  // ── Body ─────────────────────────────────────────────────────────────────────
  body:         { paddingHorizontal: 48, paddingTop: 28 },

  // ── Doc title ────────────────────────────────────────────────────────────────
  docTitle:     { fontSize: 22, fontFamily: "Helvetica-Bold", color: NEAR_BLACK, marginBottom: 4 },
  docMeta:      { fontSize: 8.5, color: GRAY, marginBottom: 20 },
  divider:      { height: 1, backgroundColor: BORDER, marginBottom: 20 },

  // ── Field ────────────────────────────────────────────────────────────────────
  fieldLabel:   { fontSize: 7, fontFamily: "Helvetica-Bold", color: GRAY, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 5 },
  fieldLine:    { borderBottom: `1.2px solid ${BORDER}`, paddingBottom: 10, marginBottom: 14 },

  // ── Two col ──────────────────────────────────────────────────────────────────
  row:          { flexDirection: "row", gap: 20 },
  col:          { flex: 1 },

  // ── Section heading ──────────────────────────────────────────────────────────
  sectionHead:  {
    fontSize: 7.5, fontFamily: "Helvetica-Bold", color: GREEN,
    textTransform: "uppercase", letterSpacing: 1.5,
    marginTop: 8, marginBottom: 12,
    paddingBottom: 5, borderBottom: `1.5px solid rgba(26,140,60,0.25)`,
  },

  // ── Table ────────────────────────────────────────────────────────────────────
  tableHead:    { flexDirection: "row", backgroundColor: DARK, paddingVertical: 7, paddingHorizontal: 8, borderRadius: 3, marginBottom: 0 },
  tableHCell:   { fontSize: 7, fontFamily: "Helvetica-Bold", color: WHITE, letterSpacing: 0.8, textTransform: "uppercase" },
  tableRow:     { flexDirection: "row", paddingVertical: 12, paddingHorizontal: 8, borderBottom: `1px solid ${BORDER}` },
  tableRowAlt:  { backgroundColor: "#fafafa" },
  tableCell:    { fontSize: 9, color: "transparent" }, // empty rows

  // ── Total box ────────────────────────────────────────────────────────────────
  totalsWrap:   { marginTop: 10, border: `1px solid ${BORDER}`, borderRadius: 5, overflow: "hidden" },
  totalRow:     { flexDirection: "row", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 14, borderBottom: `1px solid ${BORDER}` },
  totalLabel:   { fontSize: 8.5, color: GRAY },
  totalLine:    { width: 80, borderBottom: `1px solid ${BORDER}`, marginTop: 4 },
  totalFinalRow:{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 11, paddingHorizontal: 14, backgroundColor: DARK },
  totalFinalLbl:{ fontSize: 9, fontFamily: "Helvetica-Bold", color: WHITE },
  totalFinalLine:{ width: 90, borderBottom: `1.5px solid ${GREEN_LIGHT}`, marginTop: 5 },

  // ── Notes ────────────────────────────────────────────────────────────────────
  notesBox:     { border: `1px solid ${BORDER}`, borderRadius: 4, minHeight: 60, marginTop: 4 },

  // ── Signatures ───────────────────────────────────────────────────────────────
  signRow:      { flexDirection: "row", gap: 18, marginTop: 24 },
  signBlock:    { flex: 1, borderTop: `1.2px solid ${NEAR_BLACK}`, paddingTop: 6 },
  signLabel:    { fontSize: 7, color: GRAY, textTransform: "uppercase", letterSpacing: 1 },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    position: "absolute", bottom: 0, left: 0, right: 0,
    borderTop: `3px solid ${GREEN}`,
    backgroundColor: DARK,
    paddingVertical: 13,
    paddingHorizontal: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLeft:   { fontSize: 7, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 },
  footerRight:  { alignItems: "flex-end" },
  footerRIF:    { fontSize: 8, fontFamily: "Helvetica-Bold", color: GREEN_LIGHT, letterSpacing: 0.8 },
  footerAddr:   { fontSize: 6.5, color: "rgba(255,255,255,0.28)", marginTop: 2 },
});

const emptyRows = ["", "", "", "", ""];

function PlanillaPDF({ origin }: { origin: string }) {
  const logoUrl = `${origin}/logo.png`;

  return (
    <Document title="Planilla de Cotización — Soluciones Delta, C.A." author="Soluciones Delta, C.A.">
      <Page size="A4" style={S.page}>

        {/* ── HEADER ── */}
        <View style={S.header}>
          <PDFImage src={logoUrl} style={S.headerLogo} />
          <View style={S.headerRight}>
            <Text style={S.headerTitle}>Planilla de Cotización</Text>
            <Text style={S.headerSub}>solucionesdeltaca@gmail.com · +58 424-6472446</Text>
          </View>
        </View>
        <View style={S.greenBar} />

        <View style={S.body}>

          {/* ── DOC TITLE ── */}
          <Text style={S.docTitle}>Solicitud de Cotización</Text>
          <Text style={S.docMeta}>
            Complete este formulario y envíelo a solucionesdeltaca@gmail.com · WhatsApp +58 424-6472446
          </Text>
          <View style={S.divider} />

          {/* ── DATOS DEL SOLICITANTE ── */}
          <Text style={S.sectionHead}>Datos del Solicitante</Text>
          <View style={S.row}>
            <View style={S.col}>
              <Text style={S.fieldLabel}>Nombre Completo</Text>
              <View style={S.fieldLine} />
              <Text style={S.fieldLabel}>Empresa / Organización</Text>
              <View style={S.fieldLine} />
              <Text style={S.fieldLabel}>RIF / Cédula</Text>
              <View style={S.fieldLine} />
            </View>
            <View style={S.col}>
              <Text style={S.fieldLabel}>Teléfono / WhatsApp</Text>
              <View style={S.fieldLine} />
              <Text style={S.fieldLabel}>Correo Electrónico</Text>
              <View style={S.fieldLine} />
              <Text style={S.fieldLabel}>Fecha de Solicitud</Text>
              <View style={S.fieldLine} />
            </View>
          </View>

          {/* ── DETALLES DE LA OPERACIÓN ── */}
          <Text style={S.sectionHead}>Detalles de la Operación</Text>
          <View style={S.row}>
            <View style={S.col}>
              <Text style={S.fieldLabel}>Ubicación / Campo Petrolero</Text>
              <View style={S.fieldLine} />
              <Text style={S.fieldLabel}>Estado / Municipio</Text>
              <View style={S.fieldLine} />
            </View>
            <View style={S.col}>
              <Text style={S.fieldLabel}>Fecha Requerida de Inicio</Text>
              <View style={S.fieldLine} />
              <Text style={S.fieldLabel}>Duración Estimada</Text>
              <View style={S.fieldLine} />
            </View>
          </View>

          {/* ── SERVICIOS ── */}
          <Text style={S.sectionHead}>Servicios Requeridos</Text>
          <View style={S.tableHead}>
            <Text style={[S.tableHCell, { flex: 4 }]}>Descripción del Servicio</Text>
            <Text style={[S.tableHCell, { flex: 1, textAlign: "center" }]}>Unidad</Text>
            <Text style={[S.tableHCell, { flex: 1, textAlign: "center" }]}>Cantidad</Text>
            <Text style={[S.tableHCell, { flex: 1.5, textAlign: "right" }]}>Precio Unit. (USD)</Text>
            <Text style={[S.tableHCell, { flex: 1.5, textAlign: "right" }]}>Total (USD)</Text>
          </View>
          {emptyRows.map((_, i) => (
            <View key={i} style={[S.tableRow, i % 2 !== 0 ? S.tableRowAlt : {}]}>
              <Text style={[S.tableCell, { flex: 4 }]}> </Text>
              <Text style={[S.tableCell, { flex: 1 }]}> </Text>
              <Text style={[S.tableCell, { flex: 1 }]}> </Text>
              <Text style={[S.tableCell, { flex: 1.5 }]}> </Text>
              <Text style={[S.tableCell, { flex: 1.5 }]}> </Text>
            </View>
          ))}

          {/* ── TOTALS ── */}
          <View style={S.totalsWrap}>
            <View style={S.totalRow}>
              <Text style={S.totalLabel}>Subtotal</Text>
              <View style={S.totalLine} />
            </View>
            <View style={S.totalRow}>
              <Text style={S.totalLabel}>IVA (16%)</Text>
              <View style={S.totalLine} />
            </View>
            <View style={S.totalFinalRow}>
              <Text style={S.totalFinalLbl}>TOTAL A PAGAR</Text>
              <View style={S.totalFinalLine} />
            </View>
          </View>

          {/* ── OBSERVACIONES ── */}
          <Text style={[S.sectionHead, { marginTop: 16 }]}>Observaciones / Condiciones Especiales</Text>
          <View style={S.notesBox} />

          {/* ── FIRMAS ── */}
          <View style={S.signRow}>
            <View style={S.signBlock}><Text style={S.signLabel}>Firma del Solicitante</Text></View>
            <View style={S.signBlock}><Text style={S.signLabel}>Nombre y Cédula</Text></View>
            <View style={S.signBlock}><Text style={S.signLabel}>Fecha</Text></View>
          </View>

        </View>

        {/* ── FOOTER ── */}
        <View style={S.footer} fixed>
          <Text style={S.footerLeft}>{"Soluciones Delta, C.A.\nsolucionesdeltaca@gmail.com · +58 424-6472446 · 24/7"}</Text>
          <View style={S.footerRight}>
            <Text style={S.footerRIF}>RIF J-50735393-1</Text>
            <Text style={S.footerAddr}>Calle 13 con Av 5, Local 26A-162, Of. 2, Sector Manzanillo · San Francisco, Edo. Zulia</Text>
          </View>
        </View>

      </Page>
    </Document>
  );
}

export default function DescargarPlanillaBtn() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const origin = window.location.origin;
      const blob   = await pdf(<PlanillaPDF origin={origin} />).toBlob();
      const url    = URL.createObjectURL(blob);
      const a      = document.createElement("a");
      a.href       = url;
      a.download   = "Planilla-Cotizacion-Soluciones-Delta.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-[13px] font-medium transition-all duration-200 disabled:opacity-60"
      style={{
        background: "rgba(26,140,60,0.04)",
        border: "1.5px dashed rgba(26,140,60,0.25)",
        color: "#6e6e73",
      }}
      onMouseEnter={e => {
        if (!loading) {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(26,140,60,0.08)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(26,140,60,0.4)";
          (e.currentTarget as HTMLButtonElement).style.color = "#1a8c3c";
        }
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(26,140,60,0.04)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(26,140,60,0.25)";
        (e.currentTarget as HTMLButtonElement).style.color = "#6e6e73";
      }}
    >
      {loading ? (
        <>
          <svg className="animate-spin flex-shrink-0" width="15" height="15" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="28" strokeDashoffset="10" strokeLinecap="round"/>
          </svg>
          <span>Generando planilla...</span>
        </>
      ) : (
        <>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
            <path d="M3 4h6.5L12 6.5V13H3V4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            <path d="M9 4v3h3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            <path d="M5 9h4M5 11h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <div className="text-left">
            <div style={{ color: "inherit", fontWeight: 600 }}>Planilla de cotización</div>
            <div className="text-[11px]" style={{ color: "rgba(110,110,115,0.7)" }}>Descargar formulario PDF</div>
          </div>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="ml-auto flex-shrink-0">
            <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </>
      )}
    </button>
  );
}
