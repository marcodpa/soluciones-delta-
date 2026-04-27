"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#30d158" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Seguridad Primero",
    description: "Protocolos HSE certificados y ART en cada operación. EPP completo, aterramiento y kit antiderrame.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#30d158" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Respuesta Inmediata",
    description: "Disponibilidad operativa 24/7. Movilización en menos de 4 horas para emergencias en el Estado Zulia.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 3h5v5M21 3l-8 8" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Tecnología de Punta",
    description: "Equipos fabricados en 2026. Compresor NVE Challenger 607 PRO, acero A36 8 mm, automatización total.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Solución Integral",
    description: "Desde el bombeo de transferencia hasta la disposición final de residuos. Un solo proveedor.",
  },
];

const companyData = [
  { label: "Dirección", value: "Calle 13 con Av 5, Local 26A-162, Sector Manzanillo, San Francisco, Zulia" },
  { label: "Teléfono",  value: "0424-6472446" },
  { label: "Correo",    value: "solucionesdeltaca@gmail.com" },
  { label: "RIF",       value: "J-50735393-1" },
  { label: "Flota",     value: "Unidades Vacuum · fabricación 2026" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(headerRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }),
      });
      ScrollTrigger.create({
        trigger: contentRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(contentRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }),
      });
      ScrollTrigger.create({
        trigger: valuesRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(valuesRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 }),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
      style={{ background: "#0d0d0f" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 60% at 100% 40%, rgba(26,140,60,0.09) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 40% at 0% 80%, rgba(48,209,88,0.04) 0%, transparent 60%)" }} />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

      <div className="site-container relative">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="section-label mb-4">Quiénes Somos</div>
          <h2 className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight text-white leading-tight">
            Comprometidos con la{" "}
            <span className="text-gradient">excelencia operacional</span>
          </h2>
        </div>

        {/* Main content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-10 mb-20">

          {/* Text */}
          <div className="space-y-5">
            <p className="text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              <strong className="text-white">Soluciones Delta, C.A.</strong> es una empresa venezolana
              especializada en servicios técnicos para la industria petrolera, ubicada en San Francisco,
              Estado Zulia — el corazón energético de Venezuela.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Contamos con equipamiento propio de última generación, incluyendo unidades vacuum de
              fabricación 2026 con acero A36 de alta resistencia, garantizando rendimiento óptimo
              en las condiciones más exigentes del campo petrolero.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Nuestra filosofía: soluciones integrales que combinan seguridad, eficiencia y
              responsabilidad ambiental, desde el bombeo inicial hasta la disposición final.
            </p>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary inline-flex mt-2"
            >
              Solicitar Información
            </a>
          </div>

          {/* Company card */}
          <div className="rounded-2xl p-7 space-y-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
              <span className="text-white font-semibold text-[14px]">Datos de la Empresa</span>
            </div>
            {companyData.map((item, i) => (
              <div key={i} className="flex items-start gap-4 pb-4"
                style={{ borderBottom: i < companyData.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase mb-0.5"
                    style={{ color: "rgba(255,255,255,0.28)" }}>{item.label}</div>
                  <div className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div key={i}
              className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 cursor-default"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(48,209,88,0.06)";
                el.style.borderColor = "rgba(48,209,88,0.2)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
              }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(48,209,88,0.1)", border: "1px solid rgba(48,209,88,0.18)" }}>
                {v.icon}
              </div>
              <h4 className="text-white font-semibold text-[14px]">{v.title}</h4>
              <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{v.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
