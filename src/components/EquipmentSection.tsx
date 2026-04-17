"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specs = [
  { label: "Tipo", value: "Semirremolque Vacuum" },
  { label: "Capacidad", value: "160 Barriles" },
  { label: "Fabricación", value: "2026" },
  { label: "Material", value: "Acero A36 — 8 mm" },
  { label: "Diámetro", value: "1.85 m" },
  { label: "Longitud", value: "11.60 m" },
  { label: "Peso", value: "6,000 kg" },
  { label: "Conexión", value: "Entrada/Salida 4\"" },
  { label: "Válvulas", value: "Tipo Mariposa" },
  { label: "Compresor", value: "NVE Challenger 607" },
  { label: "Motor", value: "Isuzu 4BD1" },
  { label: "Ejes", value: "2 Ejes Masa Americana" },
];

const systems = [
  {
    title: "Sistema de Medición de Nivel",
    items: ["Tipo flotador de precisión", "3 visores de nivel", "Colector de aceite integrado"],
  },
  {
    title: "Sistema de Frenos",
    items: ["Banda 4514", "Bombín 30 sencillo", "Válvula de freno Re6", "Ballestas Metalcar 7,500 kg"],
  },
  {
    title: "Sistema de Aterramiento",
    items: ["Barra Coperweld calibre 1/0", "Longitud: 3 metros", "Certificado para fluidos volátiles"],
  },
  {
    title: "Inspección y Acceso",
    items: ["Boca de visita trasera 24\"", "Acceso superior 20\"", "Válvulas de seguridad certificadas", "Manómetro presión/vacío"],
  },
];

const KEY_SPECS = ["Capacidad", "Compresor", "Motor", "Material"];

export default function EquipmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(headerRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }),
      });
      ScrollTrigger.create({
        trigger: leftRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(leftRef.current,
          { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }),
      });
      ScrollTrigger.create({
        trigger: rightRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(rightRef.current?.children as unknown as Element[],
          { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 }),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="equipos" ref={sectionRef} className="py-32 relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(26,140,60,0.04) 0%, transparent 70%)" }}
      />

      <div className="site-container">
        <div ref={headerRef} className="mb-20">
          <div className="section-label mb-4">Ficha Técnica</div>
          <h2 className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight text-[#1d1d1f] leading-tight max-w-3xl">
            Equipamiento de última{" "}
            <span className="text-gradient">generación</span>
          </h2>
          <p className="text-[17px] text-[#6e6e73] mt-4 max-w-2xl leading-relaxed">
            Nuestra flota cuenta con unidades fabricadas en 2026 con los más altos
            estándares de seguridad industrial, certificadas y listas para operar en condiciones
            extremas del sector petrolero.
          </p>
        </div>

        {/* ── MOBILE compact summary ── */}
        <div className="lg:hidden mb-8">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            {/* Header */}
            <div className="p-5" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(26,140,60,0.04)" }}>
              <div className="flex items-center gap-3">
                <div className="feature-icon w-10 h-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="6" width="16" height="8" rx="2" stroke="#1a8c3c" strokeWidth="1.5"/>
                    <path d="M2 9h16" stroke="#1a8c3c" strokeWidth="1" opacity="0.5"/>
                    <circle cx="6" cy="16" r="2" stroke="#1a8c3c" strokeWidth="1.5"/>
                    <circle cx="14" cy="16" r="2" stroke="#1a8c3c" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[#1d1d1f] font-semibold text-[14px]">Semirremolque Tipo Vacuum</div>
                  <div className="text-[12px] text-[#6e6e73]">Fabricado 2026 · RIF J-50735393-1</div>
                </div>
              </div>
            </div>

            {/* Key specs — always visible */}
            <div>
              {specs.filter(s => KEY_SPECS.includes(s.label)).map((s, i, arr) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-5 py-3.5"
                  style={{ borderBottom: i < arr.length - 1 || expanded ? "1px solid rgba(0,0,0,0.05)" : "none" }}
                >
                  <span className="text-[13px] text-[#6e6e73]">{s.label}</span>
                  <span className="text-[13px] font-semibold text-[#1d1d1f]">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Expandable full specs */}
            {expanded && (
              <div>
                {specs.filter(s => !KEY_SPECS.includes(s.label)).map((s, i, arr) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-5 py-3.5"
                    style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
                  >
                    <span className="text-[13px] text-[#6e6e73]">{s.label}</span>
                    <span className="text-[13px] font-semibold text-[#1d1d1f]">{s.value}</span>
                  </div>
                ))}
                {/* Systems */}
                <div className="px-5 pb-5 pt-4 space-y-4" style={{ borderTop: "1px solid rgba(0,0,0,0.05)", background: "rgba(0,0,0,0.01)" }}>
                  {systems.map((sys, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-4 rounded-full bg-[#1a8c3c]" />
                        <h4 className="text-[13px] font-semibold text-[#1d1d1f]">{sys.title}</h4>
                      </div>
                      <ul className="space-y-1.5 pl-3">
                        {sys.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-[12px] text-[#6e6e73]">
                            <span className="w-1 h-1 rounded-full bg-[#1a8c3c] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Toggle button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-[13px] font-semibold text-[#1a8c3c] transition-colors"
              style={{ borderTop: "1px solid rgba(0,0,0,0.06)", background: "rgba(26,140,60,0.03)" }}
            >
              {expanded ? "Ocultar especificaciones" : "Ver ficha técnica completa"}
              <svg
                width="14" height="14" viewBox="0 0 14 14" fill="none"
                className="transition-transform duration-300"
                style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <path d="M2 5l5 5 5-5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── DESKTOP full layout ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — spec table */}
          <div ref={leftRef} className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <div className="p-6" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(26,140,60,0.04)" }}>
              <div className="flex items-center gap-3">
                <div className="feature-icon w-10 h-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="6" width="16" height="8" rx="2" stroke="#1a8c3c" strokeWidth="1.5"/>
                    <path d="M2 9h16" stroke="#1a8c3c" strokeWidth="1" opacity="0.5"/>
                    <circle cx="6" cy="16" r="2" stroke="#1a8c3c" strokeWidth="1.5"/>
                    <circle cx="14" cy="16" r="2" stroke="#1a8c3c" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[#1d1d1f] font-semibold">Semirremolque Tipo Vacuum</div>
                  <div className="text-[12px] text-[#6e6e73]">Fabricado 2026 · RIF J-50735393-1</div>
                </div>
              </div>
            </div>
            <div>
              {specs.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-3.5 transition-colors"
                  style={{ borderBottom: i < specs.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(26,140,60,0.03)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <span className="text-[13px] text-[#6e6e73]">{s.label}</span>
                  <span className="text-[14px] font-semibold text-[#1d1d1f]">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — systems */}
          <div ref={rightRef} className="space-y-4">
            {systems.map((sys, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-5 rounded-full bg-[#1a8c3c]" />
                  <h4 className="text-[#1d1d1f] font-semibold text-[15px]">{sys.title}</h4>
                </div>
                <ul className="space-y-2">
                  {sys.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-[14px] text-[#6e6e73]">
                      <span className="w-1 h-1 rounded-full bg-[#1a8c3c] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Badge */}
            <div
              className="rounded-2xl p-5 flex items-center gap-4"
              style={{ background: "rgba(26,140,60,0.06)", border: "1px solid rgba(26,140,60,0.18)" }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(26,140,60,0.12)" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2l1.9 5.9H18l-4.9 3.6 1.9 5.9L10 14l-5 3.4 1.9-5.9L2 8h6.1L10 2z" stroke="#1a8c3c" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(26,140,60,0.15)"/>
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#1d1d1f]">Válvulas Calibradas y Certificadas</div>
                <div className="text-[12px] text-[#6e6e73] mt-0.5">Todas las válvulas de seguridad cuentan con certificación vigente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
