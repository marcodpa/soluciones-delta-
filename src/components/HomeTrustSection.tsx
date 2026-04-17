"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    number: "01",
    title: "Equipamiento propio",
    body: "Flota de unidades vacuum fabricadas en 2026 con acero A36. Sin subcontratos — el equipo que llega es el nuestro.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="7" width="18" height="9" rx="2" stroke="#1a8c3c" strokeWidth="1.5"/>
        <circle cx="6" cy="18" r="2" stroke="#1a8c3c" strokeWidth="1.5"/>
        <circle cx="16" cy="18" r="2" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M6 7V5h10v2" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Operación 24 / 7",
    body: "Disponibles en todo momento para emergencias y operaciones continuas. Movilización en menos de 4 horas en el Estado Zulia.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M11 6v5l3 3" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Cumplimiento normativo",
    body: "Operamos bajo el Decreto 2635, normas PDVSA-COVENIN y protocolos HSE vigentes. Documentación completa en cada servicio.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v4.5c0 4.9 3.4 9.5 8 10.5 4.6-1 8-5.6 8-10.5V6L11 2z" stroke="#1a8c3c" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Solución integral",
    body: "Desde la extracción del crudo hasta la disposición final de los residuos. Un solo proveedor para toda la cadena de operaciones.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4v5h.5M18 13v5h-.5M4.5 9A7.5 7.5 0 0112 4.5M17.5 13A7.5 7.5 0 0110 17.5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 9h3M18 13h-3" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "5+", label: "Servicios especializados" },
  { value: "160", suffix: "Bbl", label: "Capacidad vacuum" },
  { value: "500", suffix: "Bbl", label: "Frac Tanks disponibles" },
  { value: "24/7", label: "Operación continua" },
];

export default function HomeTrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(headerRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }),
      });
      ScrollTrigger.create({
        trigger: statsRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(statsRef.current?.children as unknown as Element[],
          { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 }),
      });
      ScrollTrigger.create({
        trigger: pillarsRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(pillarsRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 }),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-white">
      {/* top line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.07), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-20">
          <div className="section-label mb-4">Por qué elegirnos</div>
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-5">
            Empresa propia, equipos propios,{" "}
            <span className="text-gradient">resultados garantizados.</span>
          </h2>
          <p className="text-[17px] text-[#6e6e73] leading-relaxed">
            No somos intermediarios. Contamos con nuestra propia flota, nuestro propio personal técnico y más de una década de experiencia operando en el sector petrolero venezolano.
          </p>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden mb-20"
          style={{ border: "1.5px solid #e5e5ea", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-8 px-6 text-center"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid #e5e5ea" : "none",
                background: i % 2 === 0 ? "#ffffff" : "#fafafa",
              }}
            >
              <div className="flex items-end gap-1 mb-2">
                <span className="text-[clamp(32px,4vw,48px)] font-bold text-[#1d1d1f] leading-none">{s.value}</span>
                {s.suffix && <span className="text-[#1a8c3c] font-bold text-lg mb-1">{s.suffix}</span>}
              </div>
              <div className="text-[12px] text-[#6e6e73] font-medium tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pillars grid */}
        <div ref={pillarsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#f9f9fb",
                border: "1.5px solid #ebebef",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(26,140,60,0.35)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(26,140,60,0.10)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#ebebef";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
              }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(26,140,60,0.08)", border: "1px solid rgba(26,140,60,0.15)" }}
                >
                  {p.icon}
                </div>
                <span className="text-[12px] font-bold text-[#d0d0d8] tracking-widest">{p.number}</span>
              </div>
              <h3 className="text-[16px] font-bold text-[#1d1d1f] leading-snug">{p.title}</h3>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed flex-1">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA link */}
        <div className="text-center">
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1a8c3c] hover:gap-3 transition-all duration-200"
          >
            Conocer más sobre la empresa
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
