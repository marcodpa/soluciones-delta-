"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  // image layers
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  // overlay
  const overlayRef = useRef<HTMLDivElement>(null);

  // text panels
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);

  // stats bar
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─── initial state ───────────────────────────────────────────
      gsap.set(img2Ref.current, { opacity: 0, scale: 1.08 });
      gsap.set(img1Ref.current, { scale: 1.12 });
      gsap.set([panel1Ref.current, panel2Ref.current, panel3Ref.current, statsRef.current], {
        opacity: 0,
        y: 50,
      });

      // ─── master timeline pinned to the wrapper ───────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=300%",        // 3× viewport height of scrolling
          pin: stickyRef.current,
          pinSpacing: true,
          scrub: 1.4,
          anticipatePin: 1,
        },
      });

      // 0 → 0.08  — fade in overlay + first panel
      tl.to(overlayRef.current, { opacity: 1, duration: 0.08 }, 0)
        .to(panel1Ref.current, { opacity: 1, y: 0, duration: 0.12 }, 0.02)

      // 0.05 → 0.28 — img1 slow Ken Burns zoom out
        .to(img1Ref.current, { scale: 1, duration: 0.3 }, 0.05)

      // 0.28 → 0.40 — panel 1 fades out upward
        .to(panel1Ref.current, { opacity: 0, y: -40, duration: 0.12 }, 0.28)

      // 0.36 → 0.52 — panel 2 enters
        .to(panel2Ref.current, { opacity: 1, y: 0, duration: 0.14 }, 0.36)

      // 0.44 → 0.66 — cross-fade img1 → img2 with zoom
        .to(img2Ref.current, { opacity: 1, scale: 1, duration: 0.22 }, 0.44)
        .to(img1Ref.current, { opacity: 0, duration: 0.18 }, 0.46)

      // 0.62 → 0.74 — panel 2 fades out
        .to(panel2Ref.current, { opacity: 0, y: -40, duration: 0.12 }, 0.62)

      // 0.70 → 0.86 — panel 3 enters (CTA)
        .to(panel3Ref.current, { opacity: 1, y: 0, duration: 0.14 }, 0.70)

      // 0.80 → 1.00 — stats bar enters
        .to(statsRef.current, { opacity: 1, y: 0, duration: 0.16 }, 0.80);

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    /* Wrapper sets total scroll height */
    <div ref={wrapperRef} style={{ height: "400vh" }}>

      {/* Sticky viewport — stays fixed while wrapper scrolls */}
      <div
        ref={stickyRef}
        className="relative w-full overflow-hidden"
        style={{ height: "100vh" }}
      >

        {/* ── BACKGROUND IMAGES ── */}
        {/* Image 1 — rear close-up (starts zoomed in, zooms out) */}
        <div
          ref={img1Ref}
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: "url('/truck-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            transformOrigin: "center center",
          }}
        />
        {/* Image 2 — wide shot (starts zoomed in, reveals on crossfade) */}
        <div
          ref={img2Ref}
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: "url('/truck-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 55%",
            transformOrigin: "center center",
          }}
        />

        {/* Gradient overlay — animates in with first panel */}
        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            opacity: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.18) 100%)",
          }}
        />

        {/* Always-on bottom gradient for stats legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.60) 0%, transparent 42%)",
          }}
        />

        {/* ── TEXT PANELS (all same position, stacked) ── */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-2xl">

            {/* Panel 1 — opening */}
            <div ref={panel1Ref} className="absolute max-w-2xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#30d158]">
                  Sector Petrolero · Zulia, Venezuela
                </span>
              </div>
              <h1 className="text-[clamp(38px,6vw,80px)] font-bold leading-[1.04] tracking-tight text-white mb-6">
                Potencia<br />
                <span style={{
                  background: "linear-gradient(135deg, #30d158 0%, #1a8c3c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  industrial
                </span><br />
                en cada operación.
              </h1>
              <p className="text-[17px] text-white/70 max-w-lg leading-relaxed">
                Trasegado con vacuum, bombeo de crudo, almacenamiento y gestión de desechos para la industria petrolera venezolana.
              </p>
            </div>

            {/* Panel 2 — equipment */}
            <div ref={panel2Ref} className="absolute max-w-2xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#30d158]">
                  Unidad Vacuum — Fabricación 2026
                </span>
              </div>
              <h2 className="text-[clamp(34px,5.5vw,72px)] font-bold leading-[1.06] tracking-tight text-white mb-6">
                160 barriles.<br />
                <span style={{
                  background: "linear-gradient(135deg, #30d158 0%, #1a8c3c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Acero A36.
                </span><br />
                Compresor NVE 607.
              </h2>
              <p className="text-[17px] text-white/70 max-w-lg leading-relaxed">
                Semirremolque vacuum de última generación con motor Isuzu 4BD1. Operación continua 24/7 en campo.
              </p>
            </div>

            {/* Panel 3 — CTA */}
            <div ref={panel3Ref} className="absolute max-w-2xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#30d158]">
                  Soluciones Delta, C.A. — RIF J-50735393-1
                </span>
              </div>
              <h2 className="text-[clamp(34px,5vw,68px)] font-bold leading-[1.06] tracking-tight text-white mb-6">
                Soluciones técnicas<br />
                <span style={{
                  background: "linear-gradient(135deg, #30d158 0%, #1a8c3c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  de alta precisión.
                </span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                >
                  Conocer Servicios
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontWeight: 600,
                    borderRadius: "980px",
                    padding: "13px 32px",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                    border: "1.5px solid rgba(255,255,255,0.3)",
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
        </div>

        {/* ── STATS BAR — pinned to bottom ── */}
        <div
          ref={statsRef}
          className="absolute bottom-10 left-0 right-0 px-8 md:px-16 lg:px-24"
        >
          <div className="flex items-end gap-10 md:gap-16">
            {[
              { value: "160", unit: "Bbl", label: "Capacidad Vacuum" },
              { value: "500", unit: "Bbl", label: "Frac Tanks" },
              { value: "24/7", unit: "", label: "Operación Continua" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-end gap-1">
                  <span className="text-[clamp(32px,4.5vw,56px)] font-bold text-white leading-none tracking-tight">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-[#30d158] font-semibold text-lg mb-1">{stat.unit}</span>
                  )}
                </div>
                <div className="text-[12px] text-white/50 mt-1 font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}

            {/* Scroll hint */}
            <div className="ml-auto hidden md:flex flex-col items-center gap-2 opacity-35 mb-1">
              <div className="w-0.5 h-10 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
              <span className="text-[10px] text-white tracking-widest uppercase">Scroll</span>
            </div>
          </div>
        </div>

        {/* ── PROGRESS DOTS — right edge ── */}
        <ProgressDots wrapperRef={wrapperRef} />
      </div>
    </div>
  );
}

/* ── Progress indicator ── */
function ProgressDots({ wrapperRef }: { wrapperRef: React.RefObject<HTMLDivElement | null> }) {
  const dot1 = useRef<HTMLDivElement>(null);
  const dot2 = useRef<HTMLDivElement>(null);
  const dot3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          const dots = [dot1.current, dot2.current, dot3.current];
          dots.forEach((d, i) => {
            if (!d) return;
            const active = i === 0 ? p < 0.35 : i === 1 ? p >= 0.35 && p < 0.70 : p >= 0.70;
            gsap.to(d, {
              width: active ? 22 : 6,
              background: active ? "#30d158" : "rgba(255,255,255,0.28)",
              duration: 0.25,
              overwrite: true,
            });
          });
        },
      });
    });
    return () => ctx.revert();
  }, [wrapperRef]);

  return (
    <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 items-center">
      {[dot1, dot2, dot3].map((ref, i) => (
        <div
          key={i}
          ref={ref}
          style={{
            width: i === 0 ? 22 : 6,
            height: 6,
            borderRadius: 9999,
            background: i === 0 ? "#30d158" : "rgba(255,255,255,0.28)",
          }}
        />
      ))}
    </div>
  );
}
