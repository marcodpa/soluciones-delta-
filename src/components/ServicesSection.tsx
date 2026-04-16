"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    slug: "bombeo-de-crudo",
    tag: "Bombeo de Crudo",
    title: "Bombeo de Transferencia",
    subtitle: "Carga y Descarga de Crudo Pesado",
    summary:
      "Utilizamos bombas de desplazamiento positivo tipo tornillo y lóbulos para mover crudo pesado y extrapesado desde Frac Tanks hacia camiones cisterna y escuadras, sin emulsificación y con caudal constante.",
    highlights: ["Crudo API 8° – 22°", "Bombas tornillo y lóbulos", "Operación 24/7"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="5" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M3 13h5M18 13h5" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6.5 6.5l3.5 3.5M16 16l3.5 3.5M6.5 19.5l3.5-3.5M16 10l3.5-3.5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    slug: "trasegado-vacuum",
    tag: "Vacuum",
    title: "Trasegado con Vacuum",
    subtitle: "Unidades de Alto Vacío Industrial",
    summary:
      "Servicio completo de succión y transporte con unidad vacuum propia de 160 Bbl (fabricación 2026). Limpieza de tanques, extracción de borras asfálticas, lodos de perforación y efluentes industriales.",
    highlights: ["160 Bbl · A36 8mm", "Compresor NVE 607", "Fabricación 2026"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="9" width="20" height="11" rx="3" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M9 9V7a4 4 0 018 0v2" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 15h3M13 15h3" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
  {
    slug: "frac-tanks",
    tag: "Almacenamiento",
    title: "Frac Tanks",
    subtitle: "Tanques Portátiles 500 Barriles",
    summary:
      "Suministro de Frac Tanks en 4 configuraciones: V-Bottom para sedimentos, Flat Bottom para fluidos limpios, Insulated para operaciones con vapor, y Gas Tight para fluidos con H2S o gases volátiles.",
    highlights: ["500 Bbl por unidad", "4 configuraciones", "Movilización rápida"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="7" width="22" height="12" rx="3" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M6 7V5h14v2" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="8" cy="22" r="2.5" stroke="#1a8c3c" strokeWidth="1.5"/>
        <circle cx="18" cy="22" r="2.5" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M10.5 22h5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    slug: "manejo-de-desechos",
    tag: "Gestión Ambiental",
    title: "Manejo de Desechos",
    subtitle: "Residuos Industriales Petroleros",
    summary:
      "Gestión integral de residuos: lodos de perforación, aguas de producción, borras asfálticas y suelos contaminados. Cumplimiento del Decreto 2635 venezolano con manifiestos y certificados de disposición final.",
    highlights: ["Decreto 2635 VE", "Trazabilidad total", "Disposición certificada"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3C7.48 3 3 7.48 3 13s4.48 10 10 10 10-4.48 10-10S18.52 3 13 3z" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M4.2 9.8h17.6M4.2 16.2h17.6M13 3c-2.5 3-4 6.3-4 10s1.5 7 4 10M13 3c2.5 3 4 6.3 4 10s-1.5 7-4 10" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(headerRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }),
      });
      ScrollTrigger.create({
        trigger: cardsRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(cardsRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 }),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} aria-labelledby="servicios-heading" className="py-32 relative overflow-hidden" style={{ background: "#eef0f2" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(26,140,60,0.25), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="section-label mb-4">Nuestros Servicios</div>
          <h2 id="servicios-heading" className="text-[clamp(32px,4.5vw,56px)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-5">
            Soluciones técnicas para cada{" "}
            <span className="text-gradient">desafío operacional</span>
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-relaxed">
            Seleccione un servicio para ver la información técnica completa, especificaciones y preguntas frecuentes.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-4 md:gap-5">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="glass-card rounded-2xl group flex flex-col"
              style={{ textDecoration: "none" }}
            >
              {/* ── MOBILE layout — compact card with summary ── */}
              <div className="flex md:hidden flex-col px-5 py-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="feature-icon flex-shrink-0" style={{ width: 40, height: 40, borderRadius: 11 }}>
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-[#1a8c3c] font-semibold tracking-widest uppercase mb-0.5">{service.tag}</p>
                    <h3 className="text-[15px] font-bold text-[#1d1d1f] leading-tight">{service.title}</h3>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(26,140,60,0.08)", border: "1px solid rgba(26,140,60,0.15)" }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p className="text-[12px] text-[#6e6e73] leading-relaxed line-clamp-2">{service.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.highlights.map((h) => (
                    <span key={h} className="text-[11px] font-medium px-2 py-0.5 rounded-md text-[#3a3a3c]" style={{ background: "#f0f0f2", border: "1px solid #e0e0e5" }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── DESKTOP layout — full card ── */}
              <div className="hidden md:flex flex-col p-7 flex-1">
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="feature-icon">{service.icon}</div>
                  <span
                    className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full flex-shrink-0"
                    style={{ background: "rgba(26,140,60,0.08)", color: "#1a8c3c", border: "1px solid rgba(26,140,60,0.15)" }}
                  >
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#1d1d1f] mb-1">{service.title}</h3>
                <p className="text-[13px] text-[#1a8c3c] font-semibold mb-3">{service.subtitle}</p>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed flex-1">{service.summary}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {service.highlights.map((h) => (
                    <span key={h} className="text-[12px] font-medium px-2.5 py-1 rounded-lg text-[#3a3a3c]" style={{ background: "#f0f0f2", border: "1px solid #e0e0e5" }}>
                      {h}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-5 text-[#1a8c3c] text-[13px] font-semibold group-hover:gap-3 transition-all duration-200">
                  <span>Ver servicio completo</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
