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
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <div
        className="absolute inset-0 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle at center, rgba(26,140,60,0.15) 0%, transparent 70%)", animation: "pulse-glow 4s ease-in-out infinite" }}
      />

      <div
        className="absolute inset-8 rounded-3xl flex flex-col items-center justify-center p-6 overflow-hidden"
        style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
      >
        <div className="absolute inset-0 opacity-40" style={{ background: "linear-gradient(135deg, rgba(26,140,60,0.05) 0%, transparent 50%, rgba(48,209,88,0.03) 100%)" }} />

        {/* Vacuum tank SVG */}
        <svg viewBox="0 0 280 200" className="w-full max-w-xs relative z-10" fill="none">
          <rect x="20" y="60" width="200" height="90" rx="12" fill="rgba(26,140,60,0.05)" stroke="rgba(26,140,60,0.4)" strokeWidth="1.5"/>
          <ellipse cx="20" cy="105" rx="14" ry="45" fill="rgba(26,140,60,0.04)" stroke="rgba(26,140,60,0.3)" strokeWidth="1.5"/>
          <ellipse cx="220" cy="105" rx="14" ry="45" fill="rgba(26,140,60,0.04)" stroke="rgba(26,140,60,0.3)" strokeWidth="1.5"/>
          <clipPath id="tankClip">
            <rect x="20" y="60" width="200" height="90" rx="12"/>
          </clipPath>
          <rect x="20" y="115" width="200" height="35" fill="rgba(26,140,60,0.12)" clipPath="url(#tankClip)"/>
          <path d="M20 115 Q55 108 90 115 Q125 122 160 115 Q195 108 220 115" stroke="rgba(26,140,60,0.5)" strokeWidth="1.5" fill="none" clipPath="url(#tankClip)">
            <animateTransform attributeName="transform" type="translate" from="-60 0" to="0 0" dur="2s" repeatCount="indefinite"/>
          </path>
          <circle cx="70" cy="165" r="16" fill="#f5f5f7" stroke="rgba(26,140,60,0.4)" strokeWidth="1.5"/>
          <circle cx="70" cy="165" r="8" fill="none" stroke="rgba(26,140,60,0.5)" strokeWidth="1"/>
          <circle cx="170" cy="165" r="16" fill="#f5f5f7" stroke="rgba(26,140,60,0.4)" strokeWidth="1.5"/>
          <circle cx="170" cy="165" r="8" fill="none" stroke="rgba(26,140,60,0.5)" strokeWidth="1"/>
          <rect x="54" y="148" width="32" height="6" rx="2" fill="#e5e5ea" stroke="rgba(26,140,60,0.2)" strokeWidth="1"/>
          <rect x="154" y="148" width="32" height="6" rx="2" fill="#e5e5ea" stroke="rgba(26,140,60,0.2)" strokeWidth="1"/>
          <rect x="86" y="149" width="68" height="4" rx="2" fill="#ececec" stroke="rgba(26,140,60,0.15)" strokeWidth="1"/>
          <rect x="230" y="70" width="40" height="50" rx="6" fill="rgba(26,140,60,0.05)" stroke="rgba(26,140,60,0.3)" strokeWidth="1.5"/>
          <circle cx="250" cy="95" r="12" fill="none" stroke="rgba(26,140,60,0.4)" strokeWidth="1.5"/>
          <circle cx="250" cy="95" r="5" fill="rgba(26,140,60,0.2)"/>
          <path d="M20 95 L0 95 L0 70 L-10 70" stroke="rgba(26,140,60,0.5)" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <circle cx="0" cy="95" r="5" fill="rgba(26,140,60,0.25)"/>
          <path d="M220 95 L250 95" stroke="rgba(26,140,60,0.5)" strokeWidth="3" strokeLinecap="round" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
          </path>
          <circle cx="110" cy="58" r="10" fill="#f5f5f7" stroke="rgba(26,140,60,0.35)" strokeWidth="1.5"/>
          <path d="M110 58 L115 53" stroke="rgba(26,140,60,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
          <ellipse cx="150" cy="60" rx="15" ry="6" fill="#f0f0f0" stroke="rgba(26,140,60,0.3)" strokeWidth="1.5"/>
          <text x="110" y="100" textAnchor="middle" fill="rgba(26,140,60,0.7)" fontSize="9" fontFamily="monospace" fontWeight="600">VACUUM 160 Bbl</text>
          <text x="110" y="112" textAnchor="middle" fill="rgba(0,0,0,0.3)" fontSize="7" fontFamily="monospace">NVE Challenger 607</text>
          <circle cx="0" cy="95" r="2" fill="#1a8c3c" opacity="0.8">
            <animate attributeName="cx" from="-20" to="220" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="0" cy="95" r="1.5" fill="#1a8c3c" opacity="0.5">
            <animate attributeName="cx" from="-20" to="220" dur="3s" begin="1s" repeatCount="indefinite"/>
          </circle>
        </svg>

        <div className="relative z-10 w-full mt-4 grid grid-cols-3 gap-2">
          {[
            { k: "Capacidad", v: "160 Bbl" },
            { k: "Acero", v: "A36 8mm" },
            { k: "Motor", v: "Isuzu 4BD1" },
          ].map((s) => (
            <div key={s.k} className="text-center p-2 rounded-xl" style={{ background: "rgba(26,140,60,0.05)", border: "1px solid rgba(26,140,60,0.1)" }}>
              <div className="text-[10px] text-[#6e6e73]">{s.k}</div>
              <div className="text-[11px] font-semibold text-[#1a8c3c]">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Orbiting dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#1a8c3c]"
          style={{
            top: `${50 + 48 * Math.sin((deg * Math.PI) / 180)}%`,
            left: `${50 + 48 * Math.cos((deg * Math.PI) / 180)}%`,
            opacity: 0.15 + (i % 3) * 0.12,
            boxShadow: "0 0 6px rgba(26,140,60,0.4)",
          }}
        />
      ))}
    </div>
  );
}
