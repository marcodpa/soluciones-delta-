"use client";

import { useState } from "react";
import { pdf, Document, Page, Text, View, StyleSheet, Image as PDFImage } from "@react-pdf/renderer";

// ── Colors ────────────────────────────────────────────────────────────────────
const GREEN       = "#1a8c3c";
const GREEN_LIGHT = "#30d158";
const DARK        = "#0d1f14";
const GRAY        = "#6e6e73";
const BORDER      = "#e5e5ea";
const WHITE       = "#ffffff";
const NEAR_BLACK  = "#1d1d1f";
const LIGHT_BG    = "#f5f5f7";

// ── Styles ────────────────────────────────────────────────────────────────────
const S = StyleSheet.create({
  page: { fontFamily: "Helvetica", backgroundColor: WHITE, paddingBottom: 70 },

  // Header
  header: {
    backgroundColor: DARK,
    paddingVertical: 18,
    paddingHorizontal: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLogo:    { width: 88, height: 30, objectFit: "contain" },
  headerRight:   { alignItems: "flex-end" },
  headerTitle:   { fontSize: 8, fontFamily: "Helvetica-Bold", color: WHITE, letterSpacing: 1.5, textTransform: "uppercase" },
  headerSub:     { fontSize: 7, color: "rgba(255,255,255,0.35)", marginTop: 2, letterSpacing: 0.5 },

  // Green accent bar
  accentBar: { height: 3, backgroundColor: GREEN },

  // Body
  body: { paddingHorizontal: 44, paddingTop: 22 },

  // Section label
  secLabel: {
    fontSize: 7.5, fontFamily: "Helvetica-Bold", color: GREEN,
    textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8,
  },

  // Title block
  docTitle:    { fontSize: 20, fontFamily: "Helvetica-Bold", color: NEAR_BLACK, marginBottom: 3 },
  docSubtitle: { fontSize: 9, color: GRAY, marginBottom: 16 },
  divider:     { height: 1, backgroundColor: BORDER, marginBottom: 14 },

  // Two columns
  twoCol: { flexDirection: "row", gap: 16, marginBottom: 14 },
  col:    { flex: 1 },

  // Field box
  fieldWrap:  { marginBottom: 10 },
  fieldLabel: { fontSize: 7, fontFamily: "Helvetica-Bold", color: GRAY, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 },
  fieldBox:   { border: `1px solid ${BORDER}`, borderRadius: 4, paddingHorizontal: 9, paddingVertical: 8, minHeight: 24 },
  fieldText:  { fontSize: 8.5, color: NEAR_BLACK },

  // Services table
  tableHeader: { flexDirection: "row", backgroundColor: DARK, borderRadius: 4, paddingVertical: 7, paddingHorizontal: 8, marginBottom: 2 },
  tableHCell:  { fontSize: 7, fontFamily: "Helvetica-Bold", color: WHITE, letterSpacing: 0.8, textTransform: "uppercase" },
  tableRow:    { flexDirection: "row", paddingVertical: 7, paddingHorizontal: 8, borderBottom: `1px solid ${BORDER}` },
  tableRowAlt: { backgroundColor: LIGHT_BG },
  tableCell:   { fontSize: 8.5, color: NEAR_BLACK },

  // Totals box
  totalsWrap: { marginTop: 10, border: `1px solid ${BORDER}`, borderRadius: 6, overflow: "hidden" },
  totalRow:   { flexDirection: "row", justifyContent: "space-between", paddingVertical: 7, paddingHorizontal: 12, borderBottom: `1px solid ${BORDER}` },
  totalLabel: { fontSize: 8.5, color: GRAY },
  totalValue: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: NEAR_BLACK },
  totalFinalRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, paddingHorizontal: 12, backgroundColor: DARK },
  totalFinalLabel: { fontSize: 9, fontFamily: "Helvetica-Bold", color: WHITE, letterSpacing: 0.5 },
  totalFinalValue: { fontSize: 11, fontFamily: "Helvetica-Bold", color: GREEN_LIGHT },

  // Notes box
  notesBox: { border: `1px solid ${BORDER}`, borderRadius: 4, padding: 10, minHeight: 56, marginTop: 4 },
  notesText: { fontSize: 8, color: "rgba(110,110,115,0.4)" },

  // Signature row
  signRow:  { flexDirection: "row", gap: 16, marginTop: 16 },
  signBox:  { flex: 1, borderTop: `1.5px solid ${NEAR_BLACK}`, paddingTop: 6 },
  signLabel:{ fontSize: 7.5, color: GRAY, textTransform: "uppercase", letterSpacing: 1 },

  // Validity badge
  validityWrap: {
    marginTop: 14, flexDirection: "row", alignItems: "center", gap: 8,
    backgroundColor: "rgba(26,140,60,0.06)", borderRadius: 6,
    border: `1px solid rgba(26,140,60,0.2)`, padding: "8px 12px",
  },
  validityDot:  { width: 6, height: 6, borderRadius: 3, backgroundColor: GREEN },
  validityText: { fontSize: 7.5, color: GREEN, fontFamily: "Helvetica-Bold", letterSpacing: 0.5 },

  // Footer
  footer: {
    position: "absolute", bottom: 0, left: 0, right: 0,
    borderTop: `3px solid ${GREEN}`,
    backgroundColor: DARK,
    paddingVertical: 12, paddingHorizontal: 44,
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
  },
  footerLeft:  { fontSize: 7, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 },
  footerRight: { alignItems: "flex-end" },
  footerRIF:   { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: GREEN_LIGHT, letterSpacing: 0.8 },
  footerAddr:  { fontSize: 6.5, color: "rgba(255,255,255,0.3)", marginTop: 1 },
});

// ── Service rows ──────────────────────────────────────────────────────────────
const serviceRows = [
  { desc: "Bombeo de Crudo — Extracción / Transferencia",    unit: "Día",    qty: "", price: "" },
  { desc: "Trasegado con Vacuum (Semirremolque 160 Bbl)",    unit: "Viaje",  qty: "", price: "" },
  { desc: "Suministro de Frac Tanks 500 Bbl",               unit: "Tanque", qty: "", price: "" },
  { desc: "Manejo de Desechos Industriales (Decreto 2635)",  unit: "M³",     qty: "", price: "" },
  { desc: "Generación e Inyección de Vapor (OTSG)",         unit: "Día",    qty: "", price: "" },
];

// ── PDF Document ──────────────────────────────────────────────────────────────
function PlanillaPDF({ origin }: { origin: string }) {
  const logoUrl = `${origin}/logo.png`;
  const today   = new Date().toLocaleDateString("es-VE", { year: "numeric", month: "long", day: "numeric" });

  return (
    <Document
      title="Planilla de Cotización — Soluciones Delta, C.A."
      author="Soluciones Delta, C.A."
    >
      <Page size="A4" style={S.page}>

        {/* ── HEADER ── */}
        <View style={S.header}>
          <PDFImage src={logoUrl} style={S.headerLogo} />
          <View style={S.headerRight}>
            <Text style={S.headerTitle}>Planilla de Cotización</Text>
            <Text style={S.headerSub}>solucionesdeltaca@gmail.com · +58 424-6472446</Text>
          </View>
        </View>
        <View style={S.accentBar} />

        <View style={S.body}>

          {/* ── TITLE ── */}
          <Text style={S.secLabel}>Documento Comercial</Text>
          <Text style={S.docTitle}>Solicitud de Cotización</Text>
          <Text style={S.docSubtitle}>Complete este formulario y envíelo a solucionesdeltaca@gmail.com o vía WhatsApp +58 424-6472446</Text>
          <View style={S.divider} />

          {/* ── CLIENT DATA ── */}
          <Text style={[S.secLabel, { marginBottom: 10 }]}>Datos del Solicitante</Text>
          <View style={S.twoCol}>
            <View style={S.col}>
              <View style={S.fieldWrap}>
                <Text style={S.fieldLabel}>Nombre Completo</Text>
                <View style={S.fieldBox}><Text style={S.fieldText}> </Text></View>
              </View>
              <View style={S.fieldWrap}>
                <Text style={S.fieldLabel}>Empresa / Organización</Text>
                <View style={S.fieldBox}><Text style={S.fieldText}> </Text></View>
              </View>
              <View style={S.fieldWrap}>
                <Text style={S.fieldLabel}>RIF / Cédula</Text>
                <View style={S.fieldBox}><Text style={S.fieldText}> </Text></View>
              </View>
            </View>
            <View style={S.col}>
              <View style={S.fieldWrap}>
                <Text style={S.fieldLabel}>Teléfono / WhatsApp</Text>
                <View style={S.fieldBox}><Text style={S.fieldText}> </Text></View>
              </View>
              <View style={S.fieldWrap}>
                <Text style={S.fieldLabel}>Correo Electrónico</Text>
                <View style={S.fieldBox}><Text style={S.fieldText}> </Text></View>
              </View>
              <View style={S.fieldWrap}>
                <Text style={S.fieldLabel}>Fecha de Solicitud</Text>
                <View style={S.fieldBox}><Text style={S.fieldText}>{today}</Text></View>
              </View>
            </View>
          </View>

          {/* ── OPERATION DATA ── */}
          <Text style={[S.secLabel, { marginTop: 4, marginBottom: 10 }]}>Detalles de la Operación</Text>
          <View style={S.twoCol}>
            <View style={S.col}>
              <View style={S.fieldWrap}>
                <Text style={S.fieldLabel}>Ubicación / Campo Petrolero</Text>
                <View style={S.fieldBox}><Text style={S.fieldText}> </Text></View>
              </View>
              <View style={S.fieldWrap}>
                <Text style={S.fieldLabel}>Estado / Municipio</Text>
                <View style={S.fieldBox}><Text style={S.fieldText}> </Text></View>
              </View>
            </View>
            <View style={S.col}>
              <View style={S.fieldWrap}>
                <Text style={S.fieldLabel}>Fecha Requerida de Inicio</Text>
                <View style={S.fieldBox}><Text style={S.fieldText}> </Text></View>
              </View>
              <View style={S.fieldWrap}>
                <Text style={S.fieldLabel}>Duración Estimada</Text>
                <View style={S.fieldBox}><Text style={S.fieldText}> </Text></View>
              </View>
            </View>
          </View>

          {/* ── SERVICES TABLE ── */}
          <Text style={[S.secLabel, { marginTop: 4, marginBottom: 8 }]}>Servicios Requeridos</Text>
          <View style={S.tableHeader}>
            <Text style={[S.tableHCell, { flex: 4 }]}>Descripción del Servicio</Text>
            <Text style={[S.tableHCell, { flex: 1, textAlign: "center" }]}>Unidad</Text>
            <Text style={[S.tableHCell, { flex: 1, textAlign: "center" }]}>Cantidad</Text>
            <Text style={[S.tableHCell, { flex: 1.5, textAlign: "right" }]}>Precio Unit. (USD)</Text>
            <Text style={[S.tableHCell, { flex: 1.5, textAlign: "right" }]}>Total (USD)</Text>
          </View>
          {serviceRows.map((row, i) => (
            <View key={i} style={[S.tableRow, i % 2 !== 0 ? S.tableRowAlt : {}]}>
              <Text style={[S.tableCell, { flex: 4 }]}>{row.desc}</Text>
              <Text style={[S.tableCell, { flex: 1, textAlign: "center", color: GRAY }]}>{row.unit}</Text>
              <Text style={[S.tableCell, { flex: 1, textAlign: "center" }]}> </Text>
              <Text style={[S.tableCell, { flex: 1.5, textAlign: "right" }]}> </Text>
              <Text style={[S.tableCell, { flex: 1.5, textAlign: "right" }]}> </Text>
            </View>
          ))}

          {/* ── TOTALS ── */}
          <View style={S.totalsWrap}>
            <View style={S.totalRow}>
              <Text style={S.totalLabel}>Subtotal</Text>
              <Text style={S.totalValue}>_____________ USD</Text>
            </View>
            <View style={S.totalRow}>
              <Text style={S.totalLabel}>IVA (16%)</Text>
              <Text style={S.totalValue}>_____________ USD</Text>
            </View>
            <View style={S.totalFinalRow}>
              <Text style={S.totalFinalLabel}>TOTAL A PAGAR</Text>
              <Text style={S.totalFinalValue}>_____________ USD</Text>
            </View>
          </View>

          {/* ── NOTES ── */}
          <Text style={[S.secLabel, { marginTop: 14, marginBottom: 6 }]}>Observaciones / Condiciones Especiales</Text>
          <View style={S.notesBox}>
            <Text style={S.notesText}>Escriba aquí cualquier requerimiento especial, condición de acceso, tipo de fluido, etc.</Text>
          </View>

          {/* ── VALIDITY ── */}
          <View style={S.validityWrap}>
            <View style={S.validityDot} />
            <Text style={S.validityText}>Cotización válida por 15 días hábiles a partir de la fecha de emisión · Precios en USD o su equivalente en Bs. al cambio BCV del día de pago</Text>
          </View>

          {/* ── SIGNATURES ── */}
          <View style={S.signRow}>
            <View style={S.signBox}>
              <Text style={S.signLabel}>Firma del Solicitante</Text>
            </View>
            <View style={S.signBox}>
              <Text style={S.signLabel}>Nombre y Cédula</Text>
            </View>
            <View style={S.signBox}>
              <Text style={S.signLabel}>Fecha</Text>
            </View>
          </View>

        </View>

        {/* ── FOOTER ── */}
        <View style={S.footer} fixed>
          <Text style={S.footerLeft}>
            {"Soluciones Delta, C.A.\nsolucionesdeltaca@gmail.com · +58 424-6472446 · 24/7"}
          </Text>
          <View style={S.footerRight}>
            <Text style={S.footerRIF}>RIF J-50735393-1</Text>
            <Text style={S.footerAddr}>Calle 13 con Av 5, Local 26A-162, Of. 2, Sector Manzanillo · San Francisco, Edo. Zulia</Text>
          </View>
        </View>

      </Page>
    </Document>
  );
}

// ── Download button ───────────────────────────────────────────────────────────
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
