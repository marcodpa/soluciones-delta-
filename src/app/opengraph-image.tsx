import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Soluciones Delta C.A. — Servicios Industriales Petroleros · Zulia, Venezuela";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0d3320 0%, #1a5c35 40%, #0a2015 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: 0, right: 0,
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(48,209,88,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Triangle logo */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
          <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
            <polygon points="20,2 38,34 2,34" fill="none" stroke="#30d158" strokeWidth="2.5" strokeLinejoin="round"/>
            <polygon points="20,10 32,30 8,30" fill="rgba(48,209,88,0.2)"/>
          </svg>
          <div style={{ marginLeft: "16px" }}>
            <div style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px" }}>
              Soluciones Delta, C.A.
            </div>
            <div style={{ color: "#30d158", fontSize: "13px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginTop: "4px" }}>
              RIF J-50735393-1
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ color: "#ffffff", fontSize: "52px", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "24px", maxWidth: "700px" }}>
          Servicios Industriales para la Industria Petrolera
        </div>

        {/* Services pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          {["Bombeo de Crudo", "Vacuum 160 Bbl", "Frac Tanks 500 Bbl", "Manejo de Desechos"].map((s) => (
            <div
              key={s}
              style={{
                background: "rgba(48,209,88,0.15)",
                border: "1px solid rgba(48,209,88,0.4)",
                color: "#30d158",
                borderRadius: "999px",
                padding: "8px 20px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px" }}>📍 San Francisco, Estado Zulia — Venezuela</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px" }}>📞 0424-6472446</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
