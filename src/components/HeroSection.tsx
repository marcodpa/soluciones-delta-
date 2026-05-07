"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 45;
const frameUrl = (i: number) => `/frames/frame_${String(i).padStart(4, "0")}.webp`;

export default function HeroSection() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const sceneRef    = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const panel1Ref   = useRef<HTMLDivElement>(null);
  const panel2Ref   = useRef<HTMLDivElement>(null);
  const panel3Ref   = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const dot1Ref     = useRef<HTMLDivElement>(null);
  const dot2Ref     = useRef<HTMLDivElement>(null);
  const dot3Ref     = useRef<HTMLDivElement>(null);
  const loaderRef   = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const pctRef      = useRef<HTMLSpanElement>(null);

  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;

    // Pre-decoded ImageBitmaps — draw instantly, no JPEG decode on scroll
    const bitmaps: ImageBitmap[] = new Array(FRAME_COUNT);
    let decoded      = 0;
    let currentFrame = 0;

    // ── Resize canvas ──────────────────────────────────────────────
    const resizeCanvas = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      if (bitmaps[currentFrame]) drawFrame(currentFrame);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ── Draw (GPU-ready bitmaps = zero JPEG decode cost) ──────────
    const drawFrame = (index: number) => {
      const bmp = bitmaps[Math.max(0, Math.min(index, FRAME_COUNT - 1))];
      if (!bmp) return;
      const cw = canvas.width, ch = canvas.height;
      const scale = Math.max(cw / bmp.width, ch / bmp.height);
      const w = bmp.width * scale, h = bmp.height * scale;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(bmp, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    // ── Intro ──────────────────────────────────────────────────────
    const playIntro = () => {
      // Scene starts invisible so loader→hero transition has no raw-image flash
      gsap.set(sceneRef.current,   { scale: 1.18, opacity: 0, transformOrigin: "center center" });
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(panel1Ref.current,  { opacity: 0, y: 70 });
      gsap.set(statsRef.current,   { opacity: 0, y: 32 });

      gsap.timeline()
        // Overlay and scene fade in simultaneously — image always behind overlay
        .to(sceneRef.current,   { opacity: 1, scale: 1, duration: 2.2, ease: "power2.inOut" }, 0)
        .to(overlayRef.current, { opacity: 1, duration: 1.0, ease: "power2.out" }, 0.05)
        .to(panel1Ref.current,  { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" }, 1.3)
        .to(statsRef.current,   { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 1.6);
    };

    // ── Scroll animation ───────────────────────────────────────────
    const frameObj = { frame: 0 };

    const initScrollAnim = () => {
      gsap.set(panel2Ref.current, { opacity: 0, y: 60 });
      gsap.set(panel3Ref.current, { opacity: 0, y: 60 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.4,
        },
      });

      tl.to(frameObj, {
        frame: FRAME_COUNT - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
        onUpdate() {
          const f = Math.round(frameObj.frame);
          if (f !== currentFrame) { currentFrame = f; drawFrame(f); }
        },
      }, 0);

      tl.to(sceneRef.current,    { scale: 1.05, ease: "none", duration: 1 }, 0);
      tl.to(panel1Ref.current,   { opacity: 0, y: -55, duration: 0.09 }, 0.30);
      tl.to(panel2Ref.current,   { opacity: 1, y: 0,   duration: 0.10 }, 0.38);
      tl.to(panel2Ref.current,   { opacity: 0, y: -55, duration: 0.09 }, 0.63);
      tl.to(panel3Ref.current,   { opacity: 1, y: 0,   duration: 0.11 }, 0.71);

      tl.to(dot1Ref.current, { width: 6,  background: "rgba(255,255,255,0.28)", duration: 0.08 }, 0.30);
      tl.to(dot2Ref.current, { width: 22, background: "#30d158",               duration: 0.08 }, 0.30);
      tl.to(dot2Ref.current, { width: 6,  background: "rgba(255,255,255,0.28)", duration: 0.08 }, 0.63);
      tl.to(dot3Ref.current, { width: 22, background: "#30d158",               duration: 0.08 }, 0.63);
    };

    // ── Load + decode all frames ───────────────────────────────────
    let introStarted   = false;
    let scrollInited   = false;
    const READY_THRESH = 0.50; // start scroll anim at 50% loaded

    const checkMilestones = () => {
      const pct = decoded / FRAME_COUNT;

      // Update loader bar
      const p = Math.round(pct * 100);
      if (progressRef.current) progressRef.current.style.width  = `${p}%`;
      if (pctRef.current)      pctRef.current.textContent        = `${p}%`;

      // Frame 0 ready → hide loader + play intro immediately
      if (!introStarted && bitmaps[0]) {
        introStarted = true;
        drawFrame(0);
        gsap.to(loaderRef.current, {
          opacity: 0, duration: 0.5, ease: "power2.out",
          onComplete: () => setLoaderVisible(false),
        });
        playIntro();
      }

      // 35% loaded → enable scroll animation
      if (!scrollInited && pct >= READY_THRESH) {
        scrollInited = true;
        initScrollAnim();
      }
    };

    const loadFrame = (i: number) =>
      fetch(frameUrl(i))
        .then((r) => r.blob())
        .then((blob) => createImageBitmap(blob))
        .then((bmp) => { bitmaps[i] = bmp; decoded++; checkMilestones(); })
        .catch(() => { decoded++; checkMilestones(); });

    const loadFrames = async () => {
      // 1. Frame 0 first — show hero image ASAP
      await loadFrame(0);

      // 2. Rest in sequential order — browser HTTP/2 multiplexes 6–8 at a time
      //    Sequential order means frames near the top of the scroll are ready first
      const rest = Array.from({ length: FRAME_COUNT - 1 }, (_, i) => i + 1);
      await Promise.all(rest.map(loadFrame));

      if (!scrollInited) { scrollInited = true; initScrollAnim(); }
    };

    loadFrames();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf([
        sceneRef.current, overlayRef.current, statsRef.current,
        panel1Ref.current, panel2Ref.current, panel3Ref.current,
        dot1Ref.current, dot2Ref.current, dot3Ref.current,
      ]);
      // Reset all panels to hidden so the next mount starts clean
      if (panel1Ref.current) gsap.set(panel1Ref.current, { opacity: 0, y: 70 });
      if (panel2Ref.current) gsap.set(panel2Ref.current, { opacity: 0, y: 60 });
      if (panel3Ref.current) gsap.set(panel3Ref.current, { opacity: 0, y: 60 });
      if (sceneRef.current)  gsap.set(sceneRef.current,  { opacity: 0, scale: 1.18 });
      if (overlayRef.current) gsap.set(overlayRef.current, { opacity: 0 });
      if (statsRef.current)  gsap.set(statsRef.current,  { opacity: 0, y: 32 });
      bitmaps.forEach((b) => b?.close());
    };
  }, []);

  return (
    <>
      {/* ── LOADER ── */}
      {loaderVisible && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "#0a0a0a" }}
        >
          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/logo.png"
              alt="Soluciones Delta C.A."
              width={140}
              height={56}
              className="h-14 w-auto object-contain brightness-0 invert opacity-90"
              priority
            />
          </div>

          {/* Progress bar */}
          <div className="w-56 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.10)" }}>
            <div
              ref={progressRef}
              className="h-full rounded-full transition-all duration-150"
              style={{ width: "0%", background: "linear-gradient(90deg, #1a8c3c, #30d158)" }}
            />
          </div>

          {/* Percentage */}
          <span
            ref={pctRef}
            className="mt-3 text-[12px] font-medium tracking-widest"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            0%
          </span>

          {/* Tagline */}
          <p className="mt-8 text-[11px] tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.20)" }}>
            Sector Petrolero · Zulia, Venezuela
          </p>
        </div>
      )}

      {/* ── HERO ── */}
      <div ref={wrapperRef} style={{ height: "380vh" }}>
        <div className="sticky top-0 w-full overflow-hidden" style={{ height: "100vh" }}>

          {/* Static LCP image — real <img> so Google measures it instantly */}
          <img
            src="/frames/frame_0000.webp"
            alt="Servicios industriales para la industria petrolera venezolana"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />

          {/* Scene (scaled for zoom effect) */}
          <div
            ref={sceneRef}
            className="absolute inset-0"
            style={{ transformOrigin: "center center", willChange: "transform", opacity: 0, zIndex: 1 }}
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              style={{ display: "block" }}
            />
          </div>

          {/* Gradient overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0,
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.15) 100%)",
            }}
          />
          {/* Bottom vignette */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 50%)" }}
          />

          {/* ── TEXT PANELS ── */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">

            <div ref={panel1Ref} className="absolute max-w-2xl" style={{ opacity: 0 }}>
              <Eyebrow>Sector Petrolero · Zulia, Venezuela</Eyebrow>
              <h1 className="text-[clamp(42px,6.5vw,88px)] font-bold leading-[1.03] tracking-tight text-white mb-6">
                Servicios<br />petroleros.
              </h1>
              <p className="text-[18px] text-white/70 max-w-lg leading-relaxed">
                Bombeo de crudo, trasegado con vacuum, Frac Tanks 500 Bbl e inyección de vapor para la industria petrolera venezolana.
              </p>
            </div>

            <div ref={panel2Ref} className="absolute max-w-2xl" style={{ opacity: 0 }}>
              <Eyebrow>Unidad Vacuum — Fabricación 2026</Eyebrow>
              <h2 className="text-[clamp(38px,5.5vw,78px)] font-bold leading-[1.04] tracking-tight text-white mb-6">
                160 barriles.<br /><GreenText>Acero A36.</GreenText><br />Compresor NVE 607.
              </h2>
              <p className="text-[18px] text-white/70 max-w-lg leading-relaxed">
                Semirremolque vacuum de última generación con motor Isuzu 4BD1. Operación continua 24/7 en campo.
              </p>
            </div>

            <div ref={panel3Ref} className="absolute max-w-2xl" style={{ opacity: 0 }}>
              <Eyebrow>Soluciones Delta, C.A. — RIF J-50735393-1</Eyebrow>
              <h2 className="text-[clamp(36px,5vw,72px)] font-bold leading-[1.04] tracking-tight text-white mb-8">
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
          <div ref={statsRef} className="absolute bottom-12 left-0 right-0 px-8 md:px-16 lg:px-24" style={{ opacity: 0 }}>
            <div
              className="flex items-end gap-10 md:gap-16 pb-6 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              {[
                { value: "160", unit: "Bbl", label: "Capacidad Vacuum" },
                { value: "500", unit: "Bbl", label: "Frac Tanks" },
                { value: "24/7", unit: "",    label: "Operación Continua" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex items-end gap-1">
                    <span className="text-[clamp(34px,4.5vw,58px)] font-bold text-white leading-none tracking-tight">{s.value}</span>
                    {s.unit && <span className="text-[#30d158] font-semibold text-xl mb-1">{s.unit}</span>}
                  </div>
                  <div className="text-[12px] text-white/45 mt-1.5 font-medium tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
              <div className="ml-auto hidden md:flex flex-col items-center gap-2 opacity-45 mb-1">
                <div className="w-0.5 h-10 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
                <span className="text-[10px] text-white tracking-widest uppercase">Scroll</span>
              </div>
            </div>
          </div>

          {/* ── DOTS ── */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            <div ref={dot1Ref} style={{ width: 22, height: 6, borderRadius: 9999, background: "#30d158" }} />
            <div ref={dot2Ref} style={{ width:  6, height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.28)" }} />
            <div ref={dot3Ref} style={{ width:  6, height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.28)" }} />
          </div>

        </div>
      </div>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
      <span className="text-[12px] font-semibold tracking-[0.20em] uppercase text-[#30d158]">{children}</span>
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
