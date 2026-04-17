"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    slug: "bombeo-de-crudo",
    tag: "Bombeo de Crudo",
    num: "01",
    title: "Bombeo de Transferencia",
    subtitle: "Carga y Descarga de Crudo Pesado",
    summary:
      "Movilización de crudo pesado y extrapesado mediante bombas de desplazamiento positivo tipo tornillo y lóbulos. Sin emulsificación, caudal constante, compatibles con viscosidades de 500 a 50,000 cP.",
    highlights: ["Crudo API 8° – 22°", "Viscosidad 500–50,000 cP", "Bombas tornillo & lóbulos", "24/7"],
    color: "#eef7f1",
    accentColor: "#1a8c3c",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="6" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M4 16h6M22 16h6" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 8l4 4M20 20l4 4M8 24l4-4M20 12l4-4" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    slug: "trasegado-vacuum",
    tag: "Vacuum Industrial",
    num: "02",
    title: "Trasegado con Vacuum",
    subtitle: "Unidades de Alto Vacío · 160 Barriles",
    summary:
      "Succión, transporte y descarga de fluidos de alta densidad con unidad vacuum propia de 160 Bbl (fabricación 2026). Acero A36 de 8 mm, compresor NVE Challenger 607, motor Isuzu 4BD1.",
    highlights: ["160 Bbl · A36 8mm", "Compresor NVE 607", "Motor Isuzu 4BD1", "Fabricación 2026"],
    color: "#eef4ff",
    accentColor: "#3b82f6",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="12" width="26" height="13" rx="3" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M11 12V10a5 5 0 0110 0v2" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 20h5M18 20h5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    slug: "frac-tanks",
    tag: "Almacenamiento",
    num: "03",
    title: "Frac Tanks 500 Bbl",
    subtitle: "Tanques Portátiles · 4 Configuraciones",
    summary:
      "Tanques portátiles de 500 barriles en 4 configuraciones: V-Bottom (sedimentos), Flat Bottom (fluidos limpios), Insulated (alta temperatura) y Gas Tight (fluidos volátiles con H2S).",
    highlights: ["500 Bbl por unidad", "V-Bottom · Flat · Insulated · Gas Tight", "Movilización con lowboy", "Batería hasta 20 tanques"],
    color: "#fff8ee",
    accentColor: "#f59e0b",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="9" width="28" height="15" rx="3" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M8 9V7h16v2" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="27" r="3" stroke="#1a8c3c" strokeWidth="1.5"/>
        <circle cx="22" cy="27" r="3" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M13 27h6" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    slug: "manejo-de-desechos",
    tag: "Gestión Ambiental",
    num: "04",
    title: "Manejo de Desechos",
    subtitle: "Residuos Industriales · Decreto 2635",
    summary:
      "Gestión integral de residuos industriales petroleros: lodos de perforación, aguas de producción, borras asfálticas y suelos contaminados. Manifiesto de residuos y certificado de disposición final en cada operación.",
    highlights: ["Decreto 2635 VE", "Lodos WBM & OBM", "Borras asfálticas", "Certificado de disposición"],
    color: "#f3f8ee",
    accentColor: "#16a34a",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M5 11.5h22M5 20.5h22M16 4c-3.2 3.8-5 7.8-5 12s1.8 8.2 5 12M16 4c3.2 3.8 5 7.8 5 12s-1.8 8.2-5 12" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    slug: "alquiler-calderas-inyeccion-vapor",
    tag: "Inyección de Vapor",
    num: "05",
    title: "Alquiler de Calderas",
    subtitle: "OTSG · Estimulación Térmica de Pozos",
    summary:
      "Generación e inyección de vapor con calderas OTSG para estimulación de pozos (Huff & Puff, Steam Flooding, SAGD), calentamiento de patio de tanques, sellos de bomba en carga de buques y recuperación de crudo en fosas de pasivos ambientales.",
    highlights: ["Huff & Puff · Steam Flooding · SAGD", "Tratamiento de agua incluido", "Pasivos ambientales", "Carga de buques"],
    color: "#fef4ee",
    accentColor: "#ea580c",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C12 4 8 8 8 13c0 3.2 1.5 6 3.8 7.8V24h8.4v-3.2C22.5 19 24 16.2 24 13c0-5-4-9-8-9z" stroke="#1a8c3c" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 24v4h8v-4" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 9v2M11.5 10.5l1.5 1.5M20.5 10.5l-1.5 1.5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function ServiciosClient() {
  const heroRef    = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children as unknown as Element[],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.2 }
      );
      ScrollTrigger.create({
        trigger: cardsRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(cardsRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 }),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section
          className="pt-36 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #eef7f1 0%, #ffffff 60%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(26,140,60,0.06) 0%, transparent 70%)" }} />
          <div className="site-container">
            <div ref={heroRef}>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-[#6e6e73] mb-10">
                <Link href="/" className="hover:text-[#1a8c3c] transition-colors">Inicio</Link>
                <span>/</span>
                <span className="text-[#1d1d1f] font-medium">Servicios</span>
              </nav>

              <div className="grid lg:grid-cols-2 gap-12 items-end">
                <div>
                  <div className="section-label mb-5">Catálogo de Servicios</div>
                  <h1 className="text-[clamp(40px,5.5vw,72px)] font-bold tracking-tight leading-[1.05] text-[#1d1d1f] mb-5">
                    Todo lo que su operación{" "}
                    <span className="text-gradient">necesita.</span>
                  </h1>
                  <p className="text-[18px] text-[#6e6e73] leading-relaxed">
                    Cinco líneas de servicio especializadas para la industria petrolera venezolana, respaldadas por equipamiento propio y operación continua 24/7.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 lg:justify-end">
                  {[
                    { v: "5", l: "Servicios" },
                    { v: "160 Bbl", l: "Vacuum" },
                    { v: "500 Bbl", l: "Frac Tanks" },
                    { v: "24/7", l: "Operación" },
                  ].map((s, i) => (
                    <div key={i} className="text-center px-6 py-4 rounded-2xl" style={{ background: "#f5f5f7", border: "1.5px solid #e5e5ea" }}>
                      <div className="text-[22px] font-bold text-[#1d1d1f]">{s.v}</div>
                      <div className="text-[11px] text-[#6e6e73] font-medium tracking-wide uppercase mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="py-20" style={{ background: "#ffffff" }}>
          <div className="site-container">
            <div ref={cardsRef} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#fff",
                    border: "1.5px solid #ebebef",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(26,140,60,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(26,140,60,0.10)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ebebef";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* Color header band */}
                  <div className="px-6 pt-6 pb-5" style={{ background: `${s.color}` }}>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                      >
                        {s.icon}
                      </div>
                      <span className="text-[11px] font-bold text-[#6e6e73] tracking-widest">{s.num}</span>
                    </div>
                    <div className="text-[11px] font-bold tracking-widest uppercase mb-1.5" style={{ color: "#1a8c3c" }}>{s.tag}</div>
                    <h2 className="text-[20px] font-bold text-[#1d1d1f] leading-snug">{s.title}</h2>
                    <p className="text-[13px] font-semibold mt-1" style={{ color: "#1a8c3c" }}>{s.subtitle}</p>
                  </div>

                  {/* Body */}
                  <div className="px-6 py-5 flex flex-col flex-1">
                    <p className="text-[13px] text-[#6e6e73] leading-relaxed mb-5 flex-1">{s.summary}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {s.highlights.map(h => (
                        <span
                          key={h}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg"
                          style={{ background: "#f0f0f2", color: "#3a3a3c", border: "1px solid #e5e5ea" }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* CTA row */}
                    <div
                      className="flex items-center justify-between pt-4"
                      style={{ borderTop: "1px solid #f0f0f0" }}
                    >
                      <span className="text-[13px] font-semibold text-[#1a8c3c] group-hover:gap-3 transition-all duration-200">
                        Ver servicio completo
                      </span>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-[#1a8c3c]"
                        style={{ background: "rgba(26,140,60,0.1)", border: "1px solid rgba(26,140,60,0.2)" }}
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-colors duration-200 group-hover:[&_path]:stroke-white">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Contact card */}
              <Link
                href="/contacto"
                className="group flex flex-col items-center justify-center rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #0d1f14 0%, #0a1a10 100%)",
                  border: "1.5px solid rgba(48,209,88,0.15)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  textDecoration: "none",
                  minHeight: 280,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(48,209,88,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(26,140,60,0.15)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(48,209,88,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(48,209,88,0.1)", border: "1px solid rgba(48,209,88,0.2)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 4h4.5l2 5.5-2.5 2a12 12 0 006.5 6.5l2-2.5 5.5 2V22a2 2 0 01-2 2C9 24 3 17 3 8a3 3 0 012-4z" stroke="#30d158" strokeWidth="1.8" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: "#30d158" }}>Contacto Directo</div>
                <h3 className="text-[20px] font-bold text-white mb-3 leading-snug">¿Necesita un servicio personalizado?</h3>
                <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Contáctenos y diseñamos una solución a la medida de su operación.
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 group-hover:gap-3"
                  style={{ color: "#30d158" }}
                >
                  Solicitar cotización
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA STRIP ── */}
        <section className="py-16" style={{ background: "#f9f9fb", borderTop: "1px solid #ebebef" }}>
          <div className="site-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-[clamp(22px,3vw,32px)] font-bold text-[#1d1d1f] mb-2">
                  Operamos 24/7 en el Estado Zulia
                </h2>
                <p className="text-[15px] text-[#6e6e73]">
                  Movilización en menos de 4 horas para emergencias. RIF J-50735393-1.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <a href="tel:04246472446" className="btn-secondary flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 2h2.5l1 3-1.5 1A7.5 7.5 0 009.5 9.5L11 8l3 1v2.5A1.5 1.5 0 0112.5 13C6 13 2.5 9 2.5 3.5A1.5 1.5 0 013 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                  0424-6472446
                </a>
                <Link href="/contacto" className="btn-primary">
                  Solicitar cotización
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
