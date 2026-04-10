"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const vizRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orb1Ref.current, { y: -40, x: 20, duration: 8, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(orb2Ref.current, { y: 30, x: -30, duration: 10, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 2 });

      const tl = gsap.timeline({ delay: 0.5 });
      tl.fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .fromTo(headingRef.current?.children as unknown as Element[], { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out", stagger: 0.15 }, "-=0.3")
        .fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.5")
        .fromTo(buttonsRef.current?.children as unknown as Element[], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12 }, "-=0.4")
        .fromTo(statsRef.current?.children as unknown as Element[], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1 }, "-=0.3")
        .fromTo(vizRef.current, { opacity: 0, scale: 0.9, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=1.2");

      gsap.to(vizRef.current, {
        y: -80, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1.5 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Soluciones Delta C.A. — Servicios industriales para el sector petrolero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
      style={{ background: "linear-gradient(160deg, #ffffff 0%, #f0f9f3 50%, #ffffff 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={orb1Ref}
          className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,140,60,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
        <div
          ref={orb2Ref}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(48,209,88,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div ref={labelRef} className="inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#1a8c3c] animate-pulse" />
              <span className="section-label">Sector Petrolero · Zulia, Venezuela</span>
            </div>

            <h1 ref={headingRef} className="text-[clamp(40px,5.5vw,72px)] font-bold leading-[1.05] tracking-tight mb-6 overflow-hidden">
              <span className="block text-[#1d1d1f]">Soluciones</span>
              <span className="block text-gradient">Industriales</span>
              <span className="block text-[#1d1d1f]">de Alta Precisión</span>
            </h1>

            <p ref={subRef} className="text-[17px] text-[#6e6e73] leading-relaxed mb-10 max-w-lg">
              Especialistas en bombeo de crudo, trasegado con vacuum, manejo de
              Frac Tanks y gestión de desechos industriales para la industria
              petrolera venezolana.
            </p>

            <div ref={buttonsRef} className="flex flex-wrap items-center gap-4">
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
                className="btn-secondary"
              >
                Contáctenos
              </a>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex gap-10 mt-14 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              {[
                { value: "160", unit: "Bbl", label: "Capacidad Vacuum" },
                { value: "500", unit: "Bbl", label: "Frac Tanks" },
                { value: "24/7", unit: "", label: "Operación Continua" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-end gap-1">
                    <span className="stat-number">{stat.value}</span>
                    {stat.unit && <span className="text-[#1a8c3c] font-semibold text-lg mb-2">{stat.unit}</span>}
                  </div>
                  <div className="text-[13px] text-[#6e6e73] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div ref={vizRef} className="hidden lg:block">
            <PipelineViz />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-0.5 h-12 bg-gradient-to-b from-transparent via-[#1a8c3c] to-transparent animate-pulse" />
        <span className="text-[11px] text-[#6e6e73] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}

function PipelineViz() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Glow behind truck */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 55% 70%, rgba(26,140,60,0.10) 0%, transparent 70%)" }}
      />

      {/* Card */}
      <div
        className="relative rounded-3xl overflow-hidden p-6 pb-4"
        style={{ background: "#ffffff", border: "1.5px solid #e5e5ea", boxShadow: "0 24px 80px rgba(0,0,0,0.10)" }}
      >
        {/* Label top */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1a8c3c] animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#1a8c3c]">Unidad Vacuum — 2026</span>
          </div>
          <span className="text-[11px] text-[#aeaeb2] font-medium">160 Bbl · A36 8mm</span>
        </div>

        {/* Truck illustration SVG — profile view matching the Mack + semitrailer */}
        <svg
          viewBox="0 0 520 220"
          className="w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Camión vacuum Soluciones Delta C.A."
          role="img"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0f9f3"/>
              <stop offset="100%" stopColor="#ffffff"/>
            </linearGradient>
            <linearGradient id="truckBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0f0f0"/>
              <stop offset="100%" stopColor="#d8d8d8"/>
            </linearGradient>
            <linearGradient id="tankGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8e8e8"/>
              <stop offset="40%" stopColor="#f5f5f5"/>
              <stop offset="100%" stopColor="#c8c8c8"/>
            </linearGradient>
            <linearGradient id="tankShine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.7)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
            </linearGradient>
            <linearGradient id="cabinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ececec"/>
              <stop offset="100%" stopColor="#c0c0c0"/>
            </linearGradient>
            <radialGradient id="wheelGrad" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#555"/>
              <stop offset="100%" stopColor="#222"/>
            </radialGradient>
            <clipPath id="tankClipNew">
              <ellipse cx="330" cy="118" rx="155" ry="52"/>
            </clipPath>
          </defs>

          {/* Ground / shadow */}
          <ellipse cx="260" cy="204" rx="230" ry="10" fill="rgba(0,0,0,0.06)"/>
          <line x1="10" y1="198" x2="510" y2="198" stroke="#e5e5ea" strokeWidth="1.5"/>

          {/* ── SEMITRAILER TANK ── */}
          {/* Main cylinder body */}
          <ellipse cx="330" cy="118" rx="155" ry="52" fill="url(#tankGrad)" stroke="#bdbdbd" strokeWidth="1.5"/>
          {/* Shine strip */}
          <ellipse cx="330" cy="96" rx="140" ry="18" fill="url(#tankShine)" opacity="0.8"/>
          {/* Tank ribs */}
          {[210, 250, 290, 330, 370, 410, 450].map((x) => (
            <line key={x} x1={x} y1="70" x2={x} y2="166" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5"/>
          ))}
          {/* Front end cap */}
          <ellipse cx="175" cy="118" rx="18" ry="52" fill="#d0d0d0" stroke="#b0b0b0" strokeWidth="1.5"/>
          {/* Rear end cap */}
          <ellipse cx="485" cy="118" rx="18" ry="52" fill="#d0d0d0" stroke="#b0b0b0" strokeWidth="1.5"/>
          {/* Fluid level inside */}
          <ellipse cx="330" cy="148" rx="145" ry="22" fill="rgba(26,140,60,0.18)" clipPath="url(#tankClipNew)"/>
          {/* Wave animation */}
          <path d="M185 148 Q240 140 295 148 Q350 156 405 148 Q440 143 480 148" stroke="rgba(26,140,60,0.45)" strokeWidth="1.5" fill="none" clipPath="url(#tankClipNew)">
            <animateTransform attributeName="transform" type="translate" from="-50 0" to="0 0" dur="2.5s" repeatCount="indefinite"/>
          </path>
          {/* Outlet pipe at rear */}
          <rect x="488" y="130" width="18" height="8" rx="2" fill="#b0b0b0" stroke="#909090" strokeWidth="1"/>
          <rect x="500" y="126" width="6" height="16" rx="2" fill="#999" stroke="#888" strokeWidth="1"/>
          {/* Top hatch */}
          <ellipse cx="310" cy="67" rx="22" ry="7" fill="#d8d8d8" stroke="#bbb" strokeWidth="1.5"/>
          <rect x="304" y="57" width="12" height="10" rx="2" fill="#ccc" stroke="#aaa" strokeWidth="1"/>
          {/* Top vent pipe (suction arm) */}
          <rect x="340" y="40" width="8" height="30" rx="3" fill="#c0c0c0" stroke="#aaa" strokeWidth="1"/>
          <path d="M344 40 Q344 28 358 24" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <circle cx="360" cy="22" r="5" fill="#bbb" stroke="#999" strokeWidth="1.5"/>
          {/* Compressor unit on top rear */}
          <rect x="420" y="58" width="45" height="28" rx="4" fill="#c8c8c8" stroke="#aaa" strokeWidth="1.5"/>
          <rect x="425" y="62" width="35" height="20" rx="3" fill="#d5d5d5" stroke="#bbb" strokeWidth="1"/>
          <circle cx="447" cy="72" r="7" fill="#b0b0b0" stroke="#999" strokeWidth="1.5"/>
          <circle cx="447" cy="72" r="3" fill="#888"/>
          {/* Safety railing on top */}
          <path d="M185 66 L485 66" stroke="#bbb" strokeWidth="1.5" strokeDasharray="8 4"/>
          {/* Frame / chassis under tank */}
          <rect x="175" y="166" width="310" height="10" rx="2" fill="#b0b0b0" stroke="#999" strokeWidth="1"/>
          {/* Trailer legs */}
          <rect x="210" y="176" width="8" height="20" rx="2" fill="#aaa"/>
          <rect x="206" y="194" width="16" height="4" rx="1" fill="#999"/>
          <rect x="240" y="176" width="8" height="20" rx="2" fill="#aaa"/>
          <rect x="236" y="194" width="16" height="4" rx="1" fill="#999"/>
          {/* Trailer wheels — rear axle group */}
          {[380, 410, 440, 470].map((x) => (
            <g key={x}>
              <circle cx={x} cy="192" r="14" fill="url(#wheelGrad)" stroke="#111" strokeWidth="1.5"/>
              <circle cx={x} cy="192" r="8" fill="none" stroke="#555" strokeWidth="1"/>
              <circle cx={x} cy="192" r="3" fill="#666"/>
              {[0,60,120,180,240,300].map((a) => (
                <line key={a}
                  x1={x} y1="192"
                  x2={x + 7*Math.cos(a*Math.PI/180)}
                  y2={192 + 7*Math.sin(a*Math.PI/180)}
                  stroke="#444" strokeWidth="1"
                />
              ))}
            </g>
          ))}

          {/* ── MACK TRUCK CABIN ── */}
          {/* Main cabin body */}
          <path d="M60 90 L60 175 L175 175 L175 80 L130 62 L95 58 L72 68 Z" fill="url(#cabinGrad)" stroke="#aaa" strokeWidth="1.5"/>
          {/* Hood */}
          <path d="M60 90 L60 130 L30 130 L30 105 L45 88 Z" fill="#ddd" stroke="#bbb" strokeWidth="1.5"/>
          <path d="M30 105 L15 105 L15 125 L30 130" fill="#ccc" stroke="#aaa" strokeWidth="1"/>
          {/* Front grill */}
          <rect x="14" y="106" width="14" height="18" rx="1" fill="#333"/>
          {[109,113,117,121].map((y) => (
            <line key={y} x1="14" y1={y} x2="28" y2={y} stroke="#555" strokeWidth="0.8"/>
          ))}
          {/* Headlight */}
          <rect x="15" y="128" width="12" height="7" rx="2" fill="#ffe066" stroke="#ccc" strokeWidth="1"/>
          <rect x="17" y="129" width="8" height="5" rx="1" fill="#fff3a0" opacity="0.8"/>
          {/* Cabin windshield */}
          <path d="M96 60 L130 64 L172 82 L172 110 L96 110 Z" fill="rgba(180,220,255,0.55)" stroke="#aaa" strokeWidth="1.2"/>
          {/* Windshield wipers */}
          <path d="M105 108 Q130 100 160 108" stroke="#999" strokeWidth="1.2" fill="none"/>
          {/* Side door */}
          <rect x="62" y="95" width="32" height="72" rx="3" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
          {/* Door handle */}
          <rect x="88" y="133" width="4" height="8" rx="1" fill="#aaa"/>
          {/* Side mirror */}
          <rect x="56" y="85" width="10" height="7" rx="2" fill="#ccc" stroke="#bbb" strokeWidth="1"/>
          <line x1="61" y1="85" x2="61" y2="75" stroke="#bbb" strokeWidth="1.5"/>
          {/* Cabin steps */}
          <rect x="60" y="158" width="20" height="5" rx="1" fill="#bbb"/>
          <rect x="60" y="165" width="20" height="5" rx="1" fill="#bbb"/>
          {/* Fuel tank */}
          <rect x="62" y="138" width="15" height="35" rx="3" fill="#c8c8c8" stroke="#aaa" strokeWidth="1"/>
          {/* Exhaust stack */}
          <rect x="140" y="38" width="7" height="26" rx="2" fill="#bbb" stroke="#999" strokeWidth="1"/>
          <ellipse cx="143" cy="37" rx="5" ry="3" fill="#aaa"/>
          {/* Smoke puff animation */}
          <circle cx="143" cy="30" r="4" fill="rgba(150,150,150,0.3)">
            <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="30;22;30" dur="2s" repeatCount="indefinite"/>
          </circle>
          {/* Fifth wheel / coupling */}
          <rect x="155" y="170" width="25" height="6" rx="2" fill="#aaa"/>
          <ellipse cx="167" cy="170" rx="10" ry="4" fill="#bbb" stroke="#999" strokeWidth="1"/>
          {/* Truck drive wheels — dual rear */}
          {[105, 135].map((x) => (
            <g key={x}>
              <circle cx={x} cy="192" r="15" fill="url(#wheelGrad)" stroke="#111" strokeWidth="1.5"/>
              <circle cx={x} cy="192" r="9" fill="none" stroke="#555" strokeWidth="1"/>
              <circle cx={x} cy="192" r="3.5" fill="#666"/>
              {[0,60,120,180,240,300].map((a) => (
                <line key={a}
                  x1={x} y1="192"
                  x2={x + 8*Math.cos(a*Math.PI/180)}
                  y2={192 + 8*Math.sin(a*Math.PI/180)}
                  stroke="#444" strokeWidth="1"
                />
              ))}
            </g>
          ))}
          {/* Front wheel */}
          <circle cx="38" cy="192" r="13" fill="url(#wheelGrad)" stroke="#111" strokeWidth="1.5"/>
          <circle cx="38" cy="192" r="7" fill="none" stroke="#555" strokeWidth="1"/>
          <circle cx="38" cy="192" r="3" fill="#666"/>
          {[0,60,120,180,240,300].map((a) => (
            <line key={a}
              x1="38" y1="192"
              x2={38 + 6*Math.cos(a*Math.PI/180)}
              y2={192 + 6*Math.sin(a*Math.PI/180)}
              stroke="#444" strokeWidth="1"
            />
          ))}
          {/* Connecting hose / pipe from cabin to tank */}
          <path d="M175 118 Q192 118 193 118" stroke="#999" strokeWidth="3" strokeLinecap="round"/>

          {/* Label on tank */}
          <rect x="258" y="108" width="148" height="22" rx="4" fill="rgba(26,140,60,0.08)" stroke="rgba(26,140,60,0.2)" strokeWidth="1"/>
          <text x="332" y="122" textAnchor="middle" fill="#1a8c3c" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="700" letterSpacing="1">SOLUCIONES DELTA C.A.</text>

          {/* Flowing particles in suction pipe */}
          <circle cx="360" cy="22" r="2.5" fill="#1a8c3c" opacity="0">
            <animate attributeName="opacity" values="0;0.8;0" dur="1.8s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="22;50;80" dur="1.8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="360" cy="22" r="2" fill="#1a8c3c" opacity="0">
            <animate attributeName="opacity" values="0;0.6;0" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="22;50;80" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
          </circle>
        </svg>

        {/* Spec badges */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            { k: "Capacidad", v: "160 Bbl" },
            { k: "Acero", v: "A36 · 8mm" },
            { k: "Motor", v: "Isuzu 4BD1" },
            { k: "Compresor", v: "NVE 607" },
          ].map((s) => (
            <div key={s.k} className="text-center py-2 px-1 rounded-xl" style={{ background: "rgba(26,140,60,0.05)", border: "1px solid rgba(26,140,60,0.1)" }}>
              <div className="text-[9px] text-[#6e6e73] leading-tight">{s.k}</div>
              <div className="text-[10px] font-bold text-[#1a8c3c] mt-0.5">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
