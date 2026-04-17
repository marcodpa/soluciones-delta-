"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    slug: "bombeo-de-crudo",
    tag: "Bombeo",
    title: "Bombeo de Transferencia",
    subtitle: "Carga y Descarga de Crudo Pesado",
    summary: "Bombas de desplazamiento positivo tipo tornillo y lóbulos para crudo pesado y extrapesado. Sin emulsificación, caudal constante, API 8°–22°.",
    highlights: ["API 8° – 22°", "Tornillo & Lóbulos", "24/7"],
    color: "#eef7f1",
    num: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M4 14h5M19 14h5" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 7l3.5 3.5M17.5 17.5l3.5 3.5M7 21l3.5-3.5M17.5 10.5l3.5-3.5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    slug: "trasegado-vacuum",
    tag: "Vacuum",
    title: "Trasegado con Vacuum",
    subtitle: "Alto Vacío Industrial",
    summary: "Unidad vacuum propia 160 Bbl (fab. 2026), acero A36 8 mm, compresor NVE Challenger 607. Borras, lodos, efluentes y espacios confinados.",
    highlights: ["160 Bbl", "NVE 607", "Fab. 2026"],
    color: "#eef4ff",
    num: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="10" width="22" height="12" rx="3" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M10 10V8a4 4 0 018 0v2" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 17h4M16 17h3" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    slug: "frac-tanks",
    tag: "Almacenamiento",
    title: "Frac Tanks",
    subtitle: "Tanques Portátiles 500 Bbl",
    summary: "4 configuraciones: V-Bottom, Flat Bottom, Insulated y Gas Tight. 500 barriles por unidad, alta movilidad, compatibles con vacuum.",
    highlights: ["500 Bbl", "4 configs", "V-Bottom"],
    color: "#fff8ee",
    num: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="8" width="24" height="13" rx="3" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M7 8V6h14v2" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="24" r="2.5" stroke="#1a8c3c" strokeWidth="1.5"/>
        <circle cx="19" cy="24" r="2.5" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M11.5 24h5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    slug: "manejo-de-desechos",
    tag: "Ambiental",
    title: "Manejo de Desechos",
    subtitle: "Residuos Industriales Petroleros",
    summary: "Lodos de perforación, aguas de producción, borras asfálticas y suelos contaminados. Decreto 2635 VE, manifiestos y certificados de disposición.",
    highlights: ["Decreto 2635", "Trazabilidad", "Certificado"],
    color: "#f3f8ee",
    num: "04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M4.5 10.5h19M4.5 17.5h19M14 3c-2.8 3.3-4.5 6.9-4.5 11s1.7 7.7 4.5 11M14 3c2.8 3.3 4.5 6.9 4.5 11s-1.7 7.7-4.5 11" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    slug: "alquiler-calderas-inyeccion-vapor",
    tag: "Vapor",
    title: "Inyección de Vapor",
    subtitle: "Calderas OTSG · Estimulación de Pozos",
    summary: "Calderas OTSG para Huff & Puff, Steam Flooding y SAGD. Calentamiento de tanques, sellos de bomba en carga de buques y pasivos ambientales.",
    highlights: ["Huff & Puff", "SAGD", "OTSG"],
    color: "#fef4ee",
    num: "05",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C10 4 7 7 7 11c0 2.8 1.3 5.2 3.3 6.7V20h7.4v-2.3c2-1.5 3.3-3.9 3.3-6.7 0-4-3-7-7-7z" stroke="#1a8c3c" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M11 20v3h6v-3" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 8v1.5M10.5 9.5l1 1M17.5 9.5l-1 1" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const listRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(headerRef.current?.children as unknown as Element[],
          { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }),
      });
      ScrollTrigger.create({
        trigger: listRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(listRef.current?.children as unknown as Element[],
          { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.08 }),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      aria-labelledby="servicios-heading"
      className="py-32 relative overflow-hidden"
      style={{ background: "#f2f2f4" }}
    >
      {/* top line */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(26,140,60,0.2),transparent)" }} />

      <div className="site-container">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="section-label mb-4">Nuestros Servicios</div>
            <h2
              id="servicios-heading"
              className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight leading-tight text-[#1d1d1f]"
            >
              Nuestros <span className="text-gradient">Servicios.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3 flex-shrink-0">
            <p className="text-[15px] text-[#6e6e73] max-w-xs leading-relaxed lg:text-right">
              Equipo propio, personal técnico especializado y operación 24/7 en el Estado Zulia.
            </p>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1a8c3c] transition-all duration-200 hover:gap-3"
            >
              Ver catálogo completo
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Service rows */}
        <div ref={listRef} className="space-y-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 px-6 py-5 rounded-2xl transition-all duration-300"
              style={{
                background: "#ffffff",
                border: "1.5px solid #e8e8ed",
                textDecoration: "none",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(26,140,60,0.35)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(26,140,60,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e8e8ed";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.04)";
              }}
            >
              {/* Number */}
              <span className="text-[12px] font-bold tracking-widest hidden sm:block flex-shrink-0 text-[#d0d0d8]" style={{ width: 28 }}>{s.num}</span>

              {/* Icon */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(26,140,60,0.06)", border: "1px solid rgba(26,140,60,0.12)" }}
              >
                {s.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <h3 className="text-[16px] font-bold text-[#1d1d1f] leading-snug">{s.title}</h3>
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: "rgba(26,140,60,0.08)", color: "#1a8c3c", border: "1px solid rgba(26,140,60,0.15)" }}
                  >
                    {s.tag}
                  </span>
                </div>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed line-clamp-1 sm:line-clamp-none">{s.summary}</p>
              </div>

              {/* Pills — desktop */}
              <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                {s.highlights.map(h => (
                  <span key={h} className="text-[11px] font-medium px-2.5 py-1 rounded-lg text-[#3a3a3c]" style={{ background: "#f0f0f2", border: "1px solid #e0e0e5" }}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full items-center justify-center hidden sm:flex transition-all duration-200"
                style={{ background: "rgba(26,140,60,0.07)", border: "1px solid rgba(26,140,60,0.15)" }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-200 hover:gap-4 text-[#1d1d1f] hover:text-[#1a8c3c]"
            style={{
              background: "#ffffff",
              border: "1.5px solid #e0e0e5",
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            }}
          >
            Ver todos los servicios
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
