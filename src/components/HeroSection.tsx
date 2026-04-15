"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const stickyRef   = useRef<HTMLDivElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const panel1Ref   = useRef<HTMLDivElement>(null);
  const panel2Ref   = useRef<HTMLDivElement>(null);
  const panel3Ref   = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Preload metadata so duration is available
    video.load();

    const init = () => {
      const duration = video.duration || 1;

      // ── initial state ────────────────────────────────────────────
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set([panel1Ref.current, panel2Ref.current, panel3Ref.current, statsRef.current], {
        opacity: 0, y: 48,
      });

      const ctx = gsap.context(() => {
        // ── master timeline ─────────────────────────────────────────
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=300%",
            pin: stickyRef.current,
            pinSpacing: true,
            scrub: 1.2,
            anticipatePin: 1,
          },
        });

        // VIDEO SCRUB — progress maps 0→1 over full scroll distance
        const videoProxy = { t: 0 };
        tl.to(videoProxy, {
          t: 1,
          duration: 1,           // timeline units (not seconds)
          ease: "none",
          onUpdate() {
            if (video.readyState >= 1) {
              video.currentTime = videoProxy.t * duration;
            }
          },
        }, 0);

        // OVERLAY fades in early
        tl.to(overlayRef.current, { opacity: 1, duration: 0.10 }, 0.02);

        // PANEL 1 — enter at 0.04, exit at 0.34
        tl.to(panel1Ref.current, { opacity: 1, y: 0, duration: 0.12 }, 0.04);
        tl.to(panel1Ref.current, { opacity: 0, y: -40, duration: 0.10 }, 0.30);

        // PANEL 2 — enter at 0.38, exit at 0.64
        tl.to(panel2Ref.current, { opacity: 1, y: 0, duration: 0.12 }, 0.38);
        tl.to(panel2Ref.current, { opacity: 0, y: -40, duration: 0.10 }, 0.62);

        // PANEL 3 — enter at 0.68, stay
        tl.to(panel3Ref.current, { opacity: 1, y: 0, duration: 0.14 }, 0.68);

        // STATS — enter at 0.80
        tl.to(statsRef.current, { opacity: 1, y: 0, duration: 0.16 }, 0.80);

      }, wrapperRef);

      return () => ctx.revert();
    };

    // If duration already known, init now; otherwise wait
    if (video.readyState >= 1) {
      init();
    } else {
      video.addEventListener("loadedmetadata", init, { once: true });
    }
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "400vh" }}>

      {/* ── STICKY VIEWPORT ── */}
      <div ref={stickyRef} className="relative w-full overflow-hidden" style={{ height: "100vh" }}>

        {/* VIDEO — muted, no controls, no autoplay (scrubbed by scroll) */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "auto" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay (opacity animated in) */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.20) 100%)",
          }}
        />

        {/* Always-on bottom vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%)",
          }}
        />

        {/* ── TEXT PANELS ── */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">

          {/* Panel 1 */}
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
                background: "linear-gradient(135deg,#30d158 0%,#1a8c3c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>industrial</span><br />
              en cada operación.
            </h1>
            <p className="text-[17px] text-white/70 max-w-lg leading-relaxed">
              Trasegado con vacuum, bombeo de crudo, almacenamiento y gestión de desechos para la industria petrolera venezolana.
            </p>
          </div>

          {/* Panel 2 */}
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
                background: "linear-gradient(135deg,#30d158 0%,#1a8c3c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Acero A36.</span><br />
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
                background: "linear-gradient(135deg,#30d158 0%,#1a8c3c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>de alta precisión.</span>
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
              { value: "24/7", unit: "", label: "Operación Continua" },
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
            <div className="ml-auto hidden md:flex flex-col items-center gap-2 opacity-35 mb-1">
              <div className="w-0.5 h-10 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
              <span className="text-[10px] text-white tracking-widest uppercase">Scroll</span>
            </div>
          </div>
        </div>

        {/* ── PROGRESS DOTS ── */}
        <ProgressDots wrapperRef={wrapperRef} />

      </div>
    </div>
  );
}

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
        scrub: 0.4,
        onUpdate(self) {
          const p = self.progress;
          [[dot1, p < 0.36], [dot2, p >= 0.36 && p < 0.70], [dot3, p >= 0.70]].forEach(
            ([ref, active]) => {
              const el = (ref as React.RefObject<HTMLDivElement>).current;
              if (!el) return;
              gsap.to(el, {
                width: active ? 22 : 6,
                background: active ? "#30d158" : "rgba(255,255,255,0.28)",
                duration: 0.25,
                overwrite: true,
              });
            }
          );
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
