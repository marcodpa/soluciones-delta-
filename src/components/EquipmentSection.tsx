"use client";

import { useEffect, useRef } from "react";
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

export default function EquipmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children as unknown as Element[], {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: leftRef.current, start: "top 80%" },
      });
      gsap.from(rightRef.current?.children as unknown as Element[], {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: rightRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="equipos" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(48,209,88,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <div className="section-label mb-4">Ficha Técnica</div>
          <h2 className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight text-white leading-tight max-w-3xl">
            Equipamiento de última{" "}
            <span className="text-gradient">generación</span>
          </h2>
          <p className="text-[17px] text-[#86868b] mt-4 max-w-2xl leading-relaxed">
            Nuestra flota cuenta con unidades fabricadas en 2026 con los más altos
            estándares de seguridad industrial, certificadas y listas para operar en condiciones
            extremas del sector petrolero.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — spec table */}
          <div ref={leftRef} className="glass-card rounded-2xl overflow-hidden">
            {/* Header */}
            <div
              className="p-6 border-b"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: "rgba(48,209,88,0.06)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="feature-icon w-10 h-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="6" width="16" height="8" rx="2" stroke="#30d158" strokeWidth="1.5"/>
                    <path d="M2 9h16" stroke="#30d158" strokeWidth="1" opacity="0.5"/>
                    <circle cx="6" cy="16" r="2" stroke="#30d158" strokeWidth="1.5"/>
                    <circle cx="14" cy="16" r="2" stroke="#30d158" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Semirremolque Tipo Vacuum</div>
                  <div className="text-[12px] text-[#86868b]">Fabricado 2026 · RIF J-50735393-1</div>
                </div>
              </div>
            </div>

            {/* Specs grid */}
            <div className="divide-y" style={{ divideColor: "rgba(255,255,255,0.05)" }}>
              {specs.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-3.5 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-[13px] text-[#86868b]">{s.label}</span>
                  <span className="text-[14px] font-medium text-white">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — systems */}
          <div ref={rightRef} className="space-y-5">
            {systems.map((sys, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-5 rounded-full bg-[#30d158]" />
                  <h4 className="text-white font-semibold text-[15px]">{sys.title}</h4>
                </div>
                <ul className="space-y-2">
                  {sys.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-[14px] text-[#86868b]">
                      <span className="w-1 h-1 rounded-full bg-[#30d158] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Certificate badge */}
            <div
              className="rounded-2xl p-5 flex items-center gap-4"
              style={{
                background: "rgba(48,209,88,0.07)",
                border: "1px solid rgba(48,209,88,0.2)",
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(48,209,88,0.15)" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2l1.9 5.9H18l-4.9 3.6 1.9 5.9L10 14l-5 3.4 1.9-5.9L2 8h6.1L10 2z" stroke="#30d158" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(48,209,88,0.2)"/>
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-semibold text-white">Válvulas Calibradas y Certificadas</div>
                <div className="text-[12px] text-[#86868b] mt-0.5">
                  Todas las válvulas de seguridad cuentan con certificación vigente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
