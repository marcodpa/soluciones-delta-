"use client";

import { useState } from "react";
import { pdf, Document, Page, Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer";
import { SERVICES } from "@/lib/services-data";

// ── Styles ────────────────────────────────────────────────────────────────────
const GREEN       = "#1a8c3c";
const GREEN_LIGHT = "#30d158";
const DARK        = "#0d1f14";
const GRAY_TEXT   = "#6e6e73";
const LIGHT_BG    = "#f5f5f7";
const BORDER      = "#e5e5ea";
const WHITE       = "#ffffff";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    backgroundColor: WHITE,
    paddingBottom: 48,
  },

  // ── Cover ──
  cover: {
    height: "100%",
    backgroundColor: DARK,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 0,
  },
  coverTop: {
    padding: 52,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  coverLogo: {
    width: 120,
    height: 48,
    objectFit: "contain",
    marginBottom: 48,
  },
  coverEyebrow: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: GREEN_LIGHT,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    marginBottom: 18,
  },
  coverTitle: {
    fontSize: 40,
    fontFamily: "Helvetica-Bold",
    color: WHITE,
    lineHeight: 1.1,
    marginBottom: 16,
    maxWidth: 360,
  },
  coverTitleGreen: {
    color: GREEN_LIGHT,
  },
  coverSubtitle: {
    fontSize: 13,
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.6,
    maxWidth: 340,
    marginBottom: 36,
  },
  coverDivider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.08)",
    marginHorizontal: 52,
    marginBottom: 0,
  },
  coverBottom: {
    padding: "20px 52px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coverMeta: {
    fontSize: 8.5,
    color: "rgba(255,255,255,0.3)",
    letterSpacing: 0.5,
  },
  coverBadge: {
    backgroundColor: "rgba(26,140,60,0.25)",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    border: "1px solid rgba(48,209,88,0.3)",
  },
  coverBadgeText: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: GREEN_LIGHT,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  coverDotRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 10,
  },
  coverDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: GREEN_LIGHT,
  },
  coverDotGray: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.2)",
  },

  // ── Section header ──
  sectionHeader: {
    backgroundColor: DARK,
    paddingVertical: 24,
    paddingHorizontal: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionHeaderLogo: {
    width: 72,
    height: 28,
    objectFit: "contain",
  },
  sectionHeaderRight: {
    fontSize: 8,
    color: "rgba(255,255,255,0.3)",
    letterSpacing: 1,
  },

  // ── Service page ──
  serviceBody: {
    padding: "28px 44px",
  },
  serviceTag: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: GREEN,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  serviceNum: {
    fontSize: 9,
    color: GRAY_TEXT,
    letterSpacing: 1,
    marginBottom: 4,
  },
  serviceTitle: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: "#1d1d1f",
    lineHeight: 1.15,
    marginBottom: 4,
  },
  serviceSubtitle: {
    fontSize: 11,
    color: GREEN,
    fontFamily: "Helvetica-Bold",
    marginBottom: 10,
  },
  serviceSummary: {
    fontSize: 10.5,
    color: GRAY_TEXT,
    lineHeight: 1.65,
    marginBottom: 18,
    maxWidth: 460,
  },
  divider: {
    height: 1,
    backgroundColor: BORDER,
    marginBottom: 18,
  },
  twoCol: {
    flexDirection: "row",
    gap: 24,
  },
  colLeft: {
    flex: 1,
  },
  colRight: {
    flex: 1,
  },

  // Sections list
  sectionHeading: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1d1d1f",
    marginBottom: 6,
    marginTop: 12,
  },
  sectionBody: {
    fontSize: 9,
    color: GRAY_TEXT,
    lineHeight: 1.6,
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 3,
    alignItems: "flex-start",
  },
  bulletDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: GREEN,
    marginTop: 3.5,
    flexShrink: 0,
  },
  bulletText: {
    fontSize: 8.5,
    color: GRAY_TEXT,
    lineHeight: 1.55,
    flex: 1,
  },

  // Specs
  specsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 0,
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 4,
  },
  specCell: {
    width: "50%",
    padding: "8px 10px",
    backgroundColor: WHITE,
    borderBottom: `1px solid ${BORDER}`,
    borderRight: `1px solid ${BORDER}`,
  },
  specCellAlt: {
    backgroundColor: "#fafafa",
  },
  specLabel: {
    fontSize: 7.5,
    color: GRAY_TEXT,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  specValue: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: "#1d1d1f",
  },

  // Benefits
  benefitsLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: GRAY_TEXT,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 8,
    marginTop: 16,
  },
  benefitGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  benefitCard: {
    width: "47%",
    padding: "9px 10px",
    backgroundColor: LIGHT_BG,
    borderRadius: 6,
    border: `1px solid ${BORDER}`,
  },
  benefitTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1d1d1f",
    marginBottom: 3,
  },
  benefitDesc: {
    fontSize: 8,
    color: GRAY_TEXT,
    lineHeight: 1.55,
  },

  // FAQ
  faqItem: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottom: `1px solid ${BORDER}`,
  },
  faqQ: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1d1d1f",
    marginBottom: 3,
  },
  faqA: {
    fontSize: 8.5,
    color: GRAY_TEXT,
    lineHeight: 1.6,
  },

  // ── Contact / last page ──
  contactPage: {
    flex: 1,
    backgroundColor: DARK,
    padding: 52,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  contactEyebrow: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: GREEN_LIGHT,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    marginBottom: 18,
  },
  contactTitle: {
    fontSize: 30,
    fontFamily: "Helvetica-Bold",
    color: WHITE,
    lineHeight: 1.15,
    marginBottom: 14,
  },
  contactSubtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.5)",
    lineHeight: 1.6,
    marginBottom: 36,
    maxWidth: 320,
  },
  contactRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginBottom: 14,
  },
  contactIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "rgba(26,140,60,0.2)",
    border: "1px solid rgba(48,209,88,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contactLabel: {
    fontSize: 8,
    color: "rgba(255,255,255,0.3)",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: WHITE,
  },
  contactSub: {
    fontSize: 8.5,
    color: "rgba(255,255,255,0.4)",
  },
  contactDivider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.07)",
    marginVertical: 30,
  },
  contactRIF: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  contactRIFBadge: {
    backgroundColor: "rgba(26,140,60,0.15)",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 14,
    border: "1px solid rgba(48,209,88,0.2)",
  },
  contactRIFText: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: GREEN_LIGHT,
    letterSpacing: 1,
  },
  contactAddress: {
    fontSize: 9,
    color: "rgba(255,255,255,0.3)",
    lineHeight: 1.5,
  },

  // Page number footer
  pageFooter: {
    position: "absolute",
    bottom: 16,
    left: 44,
    right: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageFooterText: {
    fontSize: 7.5,
    color: GRAY_TEXT,
    letterSpacing: 0.5,
  },
  pageFooterGreen: {
    width: 24,
    height: 2,
    backgroundColor: GREEN,
    borderRadius: 1,
  },
});

// ── PDF Document ──────────────────────────────────────────────────────────────
function CatalogoPDF() {
  const logoUrl = `${window.location.origin}/logo.png`;

  return (
    <Document
      title="Catálogo de Servicios — Soluciones Delta, C.A."
      author="Soluciones Delta, C.A."
      subject="Servicios técnicos para la industria petrolera venezolana"
      keywords="bombeo, vacuum, frac tanks, inyección de vapor, manejo de desechos, Zulia"
    >
      {/* ── COVER ─────────────────────────────────────────── */}
      <Page size="A4" style={styles.page}>
        <View style={styles.cover}>
          <View style={styles.coverTop}>
            <Image src={logoUrl} style={styles.coverLogo} />
            <Text style={styles.coverEyebrow}>Catálogo de Servicios · 2026</Text>
            <Text style={styles.coverTitle}>
              {"Soluciones\ntécnicas para\nla industria\n"}
              <Text style={styles.coverTitleGreen}>petrolera.</Text>
            </Text>
            <Text style={styles.coverSubtitle}>
              Cinco servicios especializados para operaciones de petróleo y gas en Venezuela. Flota propia, personal certificado y operación continua 24/7.
            </Text>
            <View style={styles.coverDotRow}>
              <View style={styles.coverDot} />
              <View style={styles.coverDotGray} />
              <View style={styles.coverDotGray} />
              <View style={styles.coverDotGray} />
              <View style={styles.coverDotGray} />
            </View>
          </View>
          <View style={styles.coverDivider} />
          <View style={styles.coverBottom}>
            <Text style={styles.coverMeta}>Soluciones Delta, C.A. · RIF J-50735393-1 · San Francisco, Edo. Zulia</Text>
            <View style={styles.coverBadge}>
              <Text style={styles.coverBadgeText}>5 Servicios</Text>
            </View>
          </View>
        </View>
      </Page>

      {/* ── SERVICE PAGES ──────────────────────────────────── */}
      {SERVICES.map((s, idx) => (
        <Page key={s.slug} size="A4" style={styles.page}>
          {/* Header bar */}
          <View style={styles.sectionHeader}>
            <Image src={logoUrl} style={styles.sectionHeaderLogo} />
            <Text style={styles.sectionHeaderRight}>CATÁLOGO DE SERVICIOS · 2026</Text>
          </View>

          <View style={styles.serviceBody}>
            {/* Title block */}
            <Text style={styles.serviceNum}>0{idx + 1} / 05</Text>
            <Text style={styles.serviceTag}>{s.tag}</Text>
            <Text style={styles.serviceTitle}>{s.title}</Text>
            <Text style={styles.serviceSubtitle}>{s.subtitle}</Text>
            <Text style={styles.serviceSummary}>{s.summary}</Text>

            <View style={styles.divider} />

            <View style={styles.twoCol}>
              {/* Left col — sections */}
              <View style={styles.colLeft}>
                {s.sections.slice(0, 3).map((sec, i) => (
                  <View key={i}>
                    <Text style={styles.sectionHeading}>{sec.heading}</Text>
                    <Text style={styles.sectionBody}>{sec.body}</Text>
                    {sec.list && sec.list.slice(0, 5).map((item, j) => (
                      <View key={j} style={styles.bulletRow}>
                        <View style={styles.bulletDot} />
                        <Text style={styles.bulletText}>{item}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>

              {/* Right col — specs + benefits */}
              <View style={styles.colRight}>
                {s.specs && (
                  <>
                    <Text style={[styles.sectionHeading, { marginTop: 0 }]}>Especificaciones Técnicas</Text>
                    <View style={styles.specsGrid}>
                      {s.specs.slice(0, 8).map((sp, i) => (
                        <View key={i} style={[styles.specCell, i % 2 !== 0 ? styles.specCellAlt : {}]}>
                          <Text style={styles.specLabel}>{sp.label}</Text>
                          <Text style={styles.specValue}>{sp.value}</Text>
                        </View>
                      ))}
                    </View>
                  </>
                )}

                <Text style={styles.benefitsLabel}>Ventajas del Servicio</Text>
                <View style={styles.benefitGrid}>
                  {s.benefits.map((b, i) => (
                    <View key={i} style={styles.benefitCard}>
                      <Text style={styles.benefitTitle}>{b.title}</Text>
                      <Text style={styles.benefitDesc}>{b.desc}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            {/* FAQ — only first 2 */}
            {s.faq.length > 0 && (
              <>
                <Text style={[styles.benefitsLabel, { marginTop: 18 }]}>Preguntas Frecuentes</Text>
                {s.faq.slice(0, 2).map((item, i) => (
                  <View key={i} style={styles.faqItem}>
                    <Text style={styles.faqQ}>{item.q}</Text>
                    <Text style={styles.faqA}>{item.a}</Text>
                  </View>
                ))}
              </>
            )}
          </View>

          {/* Footer */}
          <View style={styles.pageFooter} fixed>
            <Text style={styles.pageFooterText}>Soluciones Delta, C.A. · solucionesdeltaca@gmail.com · 0424-6472446</Text>
            <View style={styles.pageFooterGreen} />
            <Text style={styles.pageFooterText}>Pág. {idx + 2}</Text>
          </View>
        </Page>
      ))}

      {/* ── CONTACT PAGE ───────────────────────────────────── */}
      <Page size="A4" style={styles.page}>
        <View style={styles.contactPage}>
          <Image src={logoUrl} style={[styles.coverLogo, { marginBottom: 36 }]} />
          <Text style={styles.contactEyebrow}>Contáctenos · Disponibles 24/7</Text>
          <Text style={styles.contactTitle}>{"¿Tiene una operación\nen campo?"}</Text>
          <Text style={styles.contactSubtitle}>
            Nuestro equipo técnico responde en menos de 2 horas hábiles. Para emergencias, operamos las 24 horas del día, los 7 días de la semana.
          </Text>

          <View style={styles.contactRow}>
            <View>
              <Text style={styles.contactLabel}>Teléfono / WhatsApp</Text>
              <Text style={styles.contactValue}>0424-6472446</Text>
              <Text style={styles.contactSub}>Emergencias: disponible 24/7</Text>
            </View>
          </View>
          <View style={styles.contactRow}>
            <View>
              <Text style={styles.contactLabel}>Correo Electrónico</Text>
              <Text style={styles.contactValue}>solucionesdeltaca@gmail.com</Text>
              <Text style={styles.contactSub}>Respuesta en menos de 2 horas hábiles</Text>
            </View>
          </View>
          <View style={styles.contactRow}>
            <View>
              <Text style={styles.contactLabel}>Ubicación</Text>
              <Text style={styles.contactValue}>San Francisco, Estado Zulia</Text>
              <Text style={styles.contactSub}>Calle 13 con Av 5, Local 26A-162, Of. 2, Sector Manzanillo</Text>
            </View>
          </View>

          <View style={styles.contactDivider} />

          <View style={styles.contactRIF}>
            <View style={styles.contactRIFBadge}>
              <Text style={styles.contactRIFText}>RIF J-50735393-1</Text>
            </View>
            <Text style={styles.contactAddress}>Soluciones Delta, C.A. · San Francisco, Edo. Zulia, Venezuela</Text>
          </View>
        </View>

        <View style={styles.pageFooter} fixed>
          <Text style={styles.pageFooterText}>Soluciones Delta, C.A. · solucionesdeltaca@gmail.com · 0424-6472446</Text>
          <View style={styles.pageFooterGreen} />
          <Text style={styles.pageFooterText}>Pág. {SERVICES.length + 2}</Text>
        </View>
      </Page>
    </Document>
  );
}

// ── Download button component ─────────────────────────────────────────────────
export default function DescargarCatalogoBtnn() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await pdf(<CatalogoPDF />).toBlob();
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement("a");
      a.href     = url;
      a.download = "Catalogo-Servicios-Soluciones-Delta.pdf";
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
      className="flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-200 disabled:opacity-60"
      style={{
        background: loading ? "rgba(26,140,60,0.15)" : "rgba(26,140,60,0.08)",
        border: "1.5px solid rgba(26,140,60,0.25)",
        color: "#1a8c3c",
      }}
      onMouseEnter={e => {
        if (!loading) {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.background = "rgba(26,140,60,0.14)";
          el.style.borderColor = "rgba(26,140,60,0.45)";
        }
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = loading ? "rgba(26,140,60,0.15)" : "rgba(26,140,60,0.08)";
        el.style.borderColor = "rgba(26,140,60,0.25)";
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
          Descargar catálogo PDF
        </>
      )}
    </button>
  );
}
