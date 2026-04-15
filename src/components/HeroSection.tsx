"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panel1Ref  = useRef<HTMLDivElement>(null);
  const panel2Ref  = useRef<HTMLDivElement>(null);
  const panel3Ref  = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const dot1Ref    = useRef<HTMLDivElement>(null);
  const dot2Ref    = useRef<HTMLDivElement>(null);
  const dot3Ref    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Initial hidden state ──────────────────────────────────────
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(panel1Ref.current,  { opacity: 0, y: 60 });
      gsap.set(panel2Ref.current,  { opacity: 0, y: 60 });
      gsap.set(panel3Ref.current,  { opacity: 0, y: 60 });
      gsap.set(statsRef.current,   { opacity: 0, y: 30 });

      // ── Timeline driven by scroll ─────────────────────────────────
      // trigger = wrapper (350vh tall)
      // CSS sticky keeps the visual pinned — GSAP only drives text
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // 0.00 – 0.08  overlay + panel 1 enter
      tl.to(overlayRef.current, { opacity: 1, duration: 0.08 }, 0)
        .to(panel1Ref.current,  { opacity: 1, y: 0, duration: 0.12 }, 0.03)
        .to(statsRef.current,   { opacity: 1, y: 0, duration: 0.12 }, 0.06)

      // 0.30 – 0.40  panel 1 exits up
        .to(panel1Ref.current, { opacity: 0, y: -60, duration: 0.10 }, 0.30)

      // 0.38 – 0.50  panel 2 enters
        .to(panel2Ref.current, { opacity: 1, y: 0,   duration: 0.12 }, 0.38)

      // 0.62 – 0.72  panel 2 exits up
        .to(panel2Ref.current, { opacity: 0, y: -60, duration: 0.10 }, 0.62)

      // 0.70 – 0.85  panel 3 enters
        .to(panel3Ref.current, { opacity: 1, y: 0,   duration: 0.14 }, 0.70)

      // dots sync
        .to(dot1Ref.current, { width: 6,  background: "rgba(255,255,255,0.28)", duration: 0.10 }, 0.30)
        .to(dot2Ref.current, { width: 22, background: "#30d158",                duration: 0.10 }, 0.30)
        .to(dot2Ref.current, { width: 6,  background: "rgba(255,255,255,0.28)", duration: 0.10 }, 0.62)
        .to(dot3Ref.current, { width: 22, background: "#30d158",                duration: 0.10 }, 0.62);

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    /* Tall wrapper — 350 vh of scroll distance */
    <div ref={wrapperRef} style={{ height: "350vh" }}>

      {/* CSS sticky — fixed in viewport while wrapper scrolls */}
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: "100vh" }}>

        {/* VIDEO — autoplay loop, no scrubbing */}
        <video
          autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay (animated in with panel 1) */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.48) 55%, rgba(0,0,0,0.22) 100%)",
          }}
        />
        {/* Bottom vignette — always on */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 46%)" }}
        />

        {/* ── PANELS ── */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">

          {/* Panel 1 */}
          <div ref={panel1Ref} className="absolute max-w-2xl">
            <Eyebrow>Sector Petrolero · Zulia, Venezuela</Eyebrow>
            <h1 className="text-[clamp(38px,6vw,80px)] font-bold leading-[1.04] tracking-tight text-white mb-6">
              Potencia<br /><GreenText>industrial</GreenText><br />en cada operación.
            </h1>
            <p className="text-[17px] text-white/70 max-w-lg leading-relaxed">
              Trasegado con vacuum, bombeo de crudo, almacenamiento y gestión de desechos para la industria petrolera venezolana.
            </p>
          </div>

          {/* Panel 2 */}
          <div ref={panel2Ref} className="absolute max-w-2xl">
            <Eyebrow>Unidad Vacuum — Fabricación 2026</Eyebrow>
            <h2 className="text-[clamp(34px,5.5vw,72px)] font-bold leading-[1.06] tracking-tight text-white mb-6">
              160 barriles.<br /><GreenText>Acero A36.</GreenText><br />Compresor NVE 607.
            </h2>
            <p className="text-[17px] text-white/70 max-w-lg leading-relaxed">
              Semirremolque vacuum de última generación con motor Isuzu 4BD1. Operación continua 24/7 en campo.
            </p>
          </div>

          {/* Panel 3 — CTA */}
          <div ref={panel3Ref} className="absolute max-w-2xl">
            <Eyebrow>Soluciones Delta, C.A. — RIF J-50735393-1</Eyebrow>
            <h2 className="text-[clamp(34px,5vw,68px)] font-bold leading-[1.06] tracking-tight text-white mb-8">
              Soluciones técnicas<br /><GreenText>de alta precisión.</GreenText>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="#servicios"
                onClick={(e) => { e.preventDefault(); document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary"
              >
                Conocer Servicios
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "#ffffff",
                  fontWeight: 600,
                  borderRadius: "980px",
                  padding: "13px 32px",
                  fontSize: "15px",
                  border: "1.5px solid rgba(255,255,255,0.30)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                Contáctenos
              </a>
            </div>
          </div>

        </div>

        {/* ── STATS BAR ── */}
        <div ref={statsRef} className="absolute bottom-10 left-0 right-0 px-8 md:px-16 lg:px-24">
          <div className="flex items-end gap-10 md:gap-16">
            {[
              { value: "160", unit: "Bbl", label: "Capacidad Vacuum" },
              { value: "500", unit: "Bbl", label: "Frac Tanks" },
              { value: "24/7", unit: "",    label: "Operación Continua" },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex items-end gap-1">
                  <span className="text-[clamp(32px,4.5vw,56px)] font-bold text-white leading-none tracking-tight">
                    {s.value}
                  </span>
                  {s.unit && <span className="text-[#30d158] font-semibold text-lg mb-1">{s.unit}</span>}
                </div>
                <div className="text-[12px] text-white/50 mt-1 font-medium tracking-wide">{s.label}</div>
              </div>
            ))}
            <div className="ml-auto hidden md:flex flex-col items-center gap-2 opacity-40 mb-1">
              <div className="w-0.5 h-10 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
              <span className="text-[10px] text-white tracking-widest uppercase">Scroll</span>
            </div>
          </div>
        </div>

        {/* ── PROGRESS DOTS ── */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 items-center">
          <div ref={dot1Ref} style={{ width: 22, height: 6, borderRadius: 9999, background: "#30d158" }} />
          <div ref={dot2Ref} style={{ width:  6, height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.28)" }} />
          <div ref={dot3Ref} style={{ width:  6, height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.28)" }} />
        </div>

      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
      <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#30d158]">{children}</span>
    </div>
  );
}

function GreenText({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      background: "linear-gradient(135deg,#30d158 0%,#1a8c3c 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}>
      {children}
    </span>
  );
}
