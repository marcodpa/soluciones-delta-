"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 100;
const frameUrl = (i: number) =>
  `/frames/frame_${String(i).padStart(4, "0")}.jpg`;

export default function HeroSection() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const panel1Ref   = useRef<HTMLDivElement>(null);
  const panel2Ref   = useRef<HTMLDivElement>(null);
  const panel3Ref   = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const dot1Ref     = useRef<HTMLDivElement>(null);
  const dot2Ref     = useRef<HTMLDivElement>(null);
  const dot3Ref     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loaded = 0;
    let currentFrame = 0;

    // ── Resize canvas to fill viewport ─────────────────────────────
    const resizeCanvas = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      if (images[currentFrame]?.complete) drawFrame(currentFrame);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ── Draw a single frame (cover fit) ────────────────────────────
    const drawFrame = (index: number) => {
      const img = images[index];
      if (!img?.complete) return;
      const cw = canvas.width, ch = canvas.height;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const w = iw * scale, h = ih * scale;
      const x = (cw - w) / 2, y = (ch - h) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, w, h);
    };

    // ── Preload all frames ──────────────────────────────────────────
    const frameObj = { frame: 0 };

    const onAllLoaded = () => {
      initGSAP();
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameUrl(i);
      img.onload = () => {
        loaded++;
        if (i === 0) {
          // Frame 0 loaded — show immediately with intro animation
          drawFrame(0);
          gsap.to(overlayRef.current,  { opacity: 1, duration: 0.8, ease: "power2.out" });
          gsap.fromTo(panel1Ref.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.2 }
          );
          gsap.fromTo(statsRef.current,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.45 }
          );
        }
        if (loaded === FRAME_COUNT) onAllLoaded();
      };
      images[i] = img;
    }

    // ── GSAP setup (runs after ALL images loaded) ──────────────────
    const initGSAP = () => {
      // panels 2 & 3 stay hidden until scroll
      gsap.set(panel2Ref.current, { opacity: 0, y: 60 });
      gsap.set(panel3Ref.current, { opacity: 0, y: 60 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // ── Frame scrub ─────────────────────────────────────────────
      tl.to(frameObj, {
        frame: FRAME_COUNT - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
        onUpdate() {
          const f = Math.round(frameObj.frame);
          if (f !== currentFrame) {
            currentFrame = f;
            drawFrame(f);
          }
        },
      }, 0);

      // ── Panel 1 exits (already visible from intro animation) ────
      tl.to(panel1Ref.current, { opacity: 0, y: -55, duration: 0.09 }, 0.32);

      // ── Panel 2 enters then exits ───────────────────────────────
      tl.to(panel2Ref.current, { opacity: 1, y: 0, duration: 0.10 }, 0.40);
      tl.to(panel2Ref.current, { opacity: 0, y: -55, duration: 0.09 }, 0.65);

      // ── Panel 3 stays ───────────────────────────────────────────
      tl.to(panel3Ref.current, { opacity: 1, y: 0, duration: 0.11 }, 0.73);

      // ── Dots ────────────────────────────────────────────────────
      tl.to(dot1Ref.current, { width: 6, background: "rgba(255,255,255,0.28)", duration: 0.08 }, 0.32);
      tl.to(dot2Ref.current, { width: 22, background: "#30d158",               duration: 0.08 }, 0.32);
      tl.to(dot2Ref.current, { width: 6, background: "rgba(255,255,255,0.28)", duration: 0.08 }, 0.65);
      tl.to(dot3Ref.current, { width: 22, background: "#30d158",               duration: 0.08 }, 0.65);
    };

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "380vh" }}>
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: "100vh" }}>

        {/* ── CANVAS — image sequence ── */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: "block" }}
        />

        {/* Gradient overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.48) 55%, rgba(0,0,0,0.18) 100%)",
          }}
        />
        {/* Bottom vignette */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 46%)" }}
        />

        {/* ── PANELS ── */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">

          <div ref={panel1Ref} className="absolute max-w-2xl">
            <Eyebrow>Sector Petrolero · Zulia, Venezuela</Eyebrow>
            <h1 className="text-[clamp(40px,6.5vw,86px)] font-bold leading-[1.03] tracking-tight text-white mb-6">
              Potencia<br /><GreenText>industrial</GreenText><br />en cada operación.
            </h1>
            <p className="text-[17px] text-white/70 max-w-lg leading-relaxed">
              Trasegado con vacuum, bombeo de crudo, almacenamiento y gestión de desechos para la industria petrolera venezolana.
            </p>
          </div>

          <div ref={panel2Ref} className="absolute max-w-2xl">
            <Eyebrow>Unidad Vacuum — Fabricación 2026</Eyebrow>
            <h2 className="text-[clamp(36px,5.5vw,76px)] font-bold leading-[1.05] tracking-tight text-white mb-6">
              160 barriles.<br /><GreenText>Acero A36.</GreenText><br />Compresor NVE 607.
            </h2>
            <p className="text-[17px] text-white/70 max-w-lg leading-relaxed">
              Semirremolque vacuum de última generación con motor Isuzu 4BD1. Operación continua 24/7 en campo.
            </p>
          </div>

          <div ref={panel3Ref} className="absolute max-w-2xl">
            <Eyebrow>Soluciones Delta, C.A. — RIF J-50735393-1</Eyebrow>
            <h2 className="text-[clamp(34px,5vw,70px)] font-bold leading-[1.05] tracking-tight text-white mb-8">
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
