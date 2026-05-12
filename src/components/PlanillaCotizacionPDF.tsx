"use client";

import { useState } from "react";
import { pdf, Document, Page, Text, View, StyleSheet, Image as PDFImage } from "@react-pdf/renderer";

async function toDataURL(url: string): Promise<string> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = await res.arrayBuffer();
  const bytes = new Uint8Array(buf);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  const base64 = btoa(binary);
  const ext = url.split(".").pop()?.toLowerCase();
  const mime = ext === "png" ? "image/png" : "image/jpeg";
  return `data:${mime};base64,${base64}`;
}

const GREEN       = "#1a8c3c";
const GREEN_LIGHT = "#30d158";
const DARK        = "#0d1f14";
const WHITE       = "#ffffff";

const S = StyleSheet.create({
  page: { fontFamily: "Helvetica", backgroundColor: WHITE, paddingBottom: 80 },

  header: {
    backgroundColor: DARK,
    paddingVertical: 20,
    paddingHorizontal: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLogo:  { width: 96, height: 32, objectFit: "contain" },
  headerRight: { alignItems: "flex-end" },
  headerTitle: { fontSize: 9, fontFamily: "Helvetica-Bold", color: WHITE, letterSpacing: 1.8, textTransform: "uppercase" },
  headerSub:   { fontSize: 7, color: "rgba(255,255,255,0.38)", marginTop: 3, letterSpacing: 0.5 },
  greenBar:    { height: 3, backgroundColor: GREEN },

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
  footerLeft:  { fontSize: 7, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 },
  footerRight: { alignItems: "flex-end" },
  footerRIF:   { fontSize: 8, fontFamily: "Helvetica-Bold", color: GREEN_LIGHT, letterSpacing: 0.8 },
  footerAddr:  { fontSize: 6.5, color: "rgba(255,255,255,0.28)", marginTop: 2 },
});

function PlanillaPDF({ logoData }: { logoData: string }) {
  return (
    <Document title="Planilla — Soluciones Delta, C.A." author="Soluciones Delta, C.A.">
      <Page size="A4" style={S.page}>

        <View style={S.header}>
          <PDFImage src={logoData} style={S.headerLogo} />
          <View style={S.headerRight}>
            <Text style={S.headerTitle}>Soluciones Delta, C.A.</Text>
            <Text style={S.headerSub}>solucionesdeltaca@gmail.com · +58 424-6472446</Text>
          </View>
        </View>
        <View style={S.greenBar} />

        {/* Blank body */}
        <View style={{ flex: 1 }} />

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
      const logoData = await toDataURL(`${origin}/logo.png`);
      const blob   = await pdf(<PlanillaPDF logoData={logoData} />).toBlob();
      const url    = URL.createObjectURL(blob);
      const a      = document.createElement("a");
      a.href       = url;
      a.download   = "Planilla-Soluciones-Delta.pdf";
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
