"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#1a8c3c" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Seguridad Primero",
    description: "Todas nuestras operaciones se realizan bajo estrictos protocolos de seguridad industrial, con equipos certificados y personal capacitado.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Respuesta Inmediata",
    description: "Disponibilidad operativa 24/7 para atender las demandas urgentes del sector petrolero con tiempos de movilización óptimos.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 3h5v5M21 3l-8 8" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Tecnología de Punta",
    description: "Equipos fabricados en 2026 con tecnología de última generación, diseñados para operaciones en condiciones extremas del sector petrolero venezolano.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Solución Integral",
    description: "Desde el bombeo de transferencia hasta la gestión final de desechos, cubrimos toda la cadena de manejo de fluidos en operaciones petroleras.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children as unknown as Element[], {
        opacity: 0, y: 40, duration: 0.9, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });
      gsap.from(contentRef.current?.children as unknown as Element[], {
        opacity: 0, y: 40, duration: 0.9, ease: "power3.out", stagger: 0.15,
        scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
      });
      gsap.from(valuesRef.current?.children as unknown as Element[], {
        opacity: 0, y: 50, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: valuesRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="nosotros" ref={sectionRef} className="py-32 relative overflow-hidden" style={{ background: "#f5f5f7" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 50%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.06) 50%, transparent 100%)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(26,140,60,0.03) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-20">
          <div className="section-label mb-4">Quiénes Somos</div>
          <h2 className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight text-[#1d1d1f] leading-tight">
            Comprometidos con la{" "}
            <span className="text-gradient">excelencia operacional</span>
          </h2>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <p className="text-[17px] text-[#3a3a3c] leading-relaxed">
              <strong className="text-[#1d1d1f]">Soluciones Delta, C.A.</strong> es una empresa venezolana
              especializada en servicios técnicos para la industria petrolera, ubicada en San Francisco,
              Estado Zulia — el corazón energético de Venezuela.
            </p>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed">
              Contamos con equipamiento propio de última generación, incluyendo unidades vacuum de
              fabricación 2026, diseñadas y construidas con acero A36 de alta resistencia para
              garantizar rendimiento óptimo en las condiciones más exigentes del campo petrolero.
            </p>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed">
              Nuestra filosofía se basa en brindar soluciones integrales que combinen seguridad,
              eficiencia y responsabilidad ambiental, acompañando a nuestros clientes desde el
              bombeo inicial hasta la disposición final de los residuos generados.
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
          <div className="glass-card rounded-2xl p-8 space-y-5">
            <div className="text-[#1d1d1f] font-semibold text-lg mb-6">Datos de la Empresa</div>
            {[
              { icon: "📍", label: "Dirección", value: "Calle 13 con Av 5, Local 26A-162, Ofic. 2, Sector Manzanillo, San Francisco, Zulia" },
              { icon: "📞", label: "Teléfono", value: "0424-6472446" },
              { icon: "📧", label: "Correo", value: "solucionesdeltaca@gmail.com" },
              { icon: "🏢", label: "RIF", value: "J-50735393-1" },
              { icon: "📅", label: "Flota", value: "Unidades Vacuum fabricación 2026" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-lg mt-0.5">{item.icon}</span>
                <div>
                  <div className="text-[12px] text-[#6e6e73] mb-0.5">{item.label}</div>
                  <div className="text-[14px] text-[#1d1d1f] font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 text-center group cursor-default">
              <div
                className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: "rgba(26,140,60,0.07)", border: "1px solid rgba(26,140,60,0.13)" }}
              >
                {v.icon}
              </div>
              <h4 className="text-[#1d1d1f] font-semibold mb-2 text-[15px]">{v.title}</h4>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
