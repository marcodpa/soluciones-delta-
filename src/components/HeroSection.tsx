"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panel1Ref  = useRef<HTMLDivElement>(null);
  const panel2Ref  = useRef<HTMLDivElement>(null);
  const panel3Ref  = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const dot1Ref    = useRef<HTMLDivElement>(null);
  const dot2Ref    = useRef<HTMLDivElement>(null);
  const dot3Ref    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video   = videoRef.current;
    if (!wrapper || !video) return;

    // ── initial GSAP states ──────────────────────────────────────────
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set([panel1Ref.current, panel2Ref.current, panel3Ref.current], { opacity: 0, y: 56 });
    gsap.set(statsRef.current, { opacity: 0, y: 28 });

    let currentPanel = 0;   // track which panel is visible
    let rafId: number;
    let targetTime = 0;
    let lerpTime   = 0;

    // ── panel switcher ───────────────────────────────────────────────
    const dots = [dot1Ref, dot2Ref, dot3Ref];

    const showPanel = (n: number) => {
      if (n === currentPanel) return;
      const panels = [panel1Ref, panel2Ref, panel3Ref];

      // exit current
      if (currentPanel > 0) {
        gsap.to(panels[currentPanel - 1].current, {
          opacity: 0, y: -52, duration: 0.55, ease: "power2.in",
        });
      }
      // enter new
      gsap.fromTo(panels[n - 1].current,
        { opacity: 0, y: 56 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }
      );

      // activate dot
      dots.forEach((d, i) => {
        gsap.to(d.current, {
          width:      i + 1 === n ? 22 : 6,
          background: i + 1 === n ? "#30d158" : "rgba(255,255,255,0.28)",
          duration: 0.3,
        });
      });

      currentPanel = n;
    };

    // ── scroll handler ───────────────────────────────────────────────
    const onScroll = () => {
      const rect  = wrapper.getBoundingClientRect();
      const total = wrapper.offsetHeight - window.innerHeight;
      const p     = Math.min(1, Math.max(0, -rect.top / total));

      // video scrub target
      if (video.duration) targetTime = p * video.duration;

      // overlay fades in as soon as scroll starts
      gsap.to(overlayRef.current, { opacity: Math.min(1, p * 12), duration: 0.3, overwrite: true });

      // stats enter once
      if (p > 0.04 && currentPanel === 0) {
        gsap.to(statsRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
      }

      // panel transitions
      if      (p < 0.34) showPanel(1);
      else if (p < 0.67) showPanel(2);
      else               showPanel(3);
    };

    // ── rAF loop: smooth lerp on video.currentTime ───────────────────
    const tick = () => {
      lerpTime += (targetTime - lerpTime) * 0.10;   // 0.10 = smoothness
      if (video.readyState >= 2 && Math.abs(targetTime - lerpTime) > 0.001) {
        video.currentTime = lerpTime;
      }
      rafId = requestAnimationFrame(tick);
    };

    // ── init ─────────────────────────────────────────────────────────
    const start = () => {
      video.pause();                    // don't autoplay — scroll drives it
      video.currentTime = 0;
      window.addEventListener("scroll", onScroll, { passive: true });
      rafId = requestAnimationFrame(tick);
      onScroll();                        // run once to set initial state
    };

    if (video.readyState >= 1) {
      start();
    } else {
      video.addEventListener("loadedmetadata", start, { once: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    /* 350 vh wrapper = 2.5× viewport of scrollable distance */
    <div ref={wrapperRef} style={{ height: "350vh" }}>

      {/* CSS sticky — stays fixed while wrapper scrolls */}
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: "100vh" }}>

        {/* VIDEO — paused; driven by scroll */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "contents" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.46) 55%, rgba(0,0,0,0.18) 100%)",
          }}
        />
        {/* Bottom vignette */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 46%)" }}
        />

        {/* ── TEXT PANELS ── */}
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
                  background: "rgba(255,255,255,0.12)", color: "#ffffff", fontWeight: 600,
                  borderRadius: "980px", padding: "13px 32px", fontSize: "15px",
                  border: "1.5px solid rgba(255,255,255,0.30)",
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  textDecoration: "none", backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                Contáctenos
              </a>
            </div>
          </div>

        </div>

        {/* ── STATS ── */}
        <div ref={statsRef} className="absolute bottom-10 left-0 right-0 px-8 md:px-16 lg:px-24">
          <div className="flex items-end gap-10 md:gap-16">
            {[
              { value: "160", unit: "Bbl", label: "Capacidad Vacuum" },
              { value: "500", unit: "Bbl", label: "Frac Tanks" },
              { value: "24/7", unit: "",    label: "Operación Continua" },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex items-end gap-1">
                  <span className="text-[clamp(32px,4.5vw,56px)] font-bold text-white leading-none tracking-tight">{s.value}</span>
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

        {/* ── DOTS ── */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
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
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
    }}>
      {children}
    </span>
  );
}
