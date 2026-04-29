"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DescargarCatalogoBtnn = dynamic(
  () => import("@/components/ServicesCatalogoPDF"),
  { ssr: false }
);

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    slug: "bombeo-de-crudo",
    tag: "Bombeo de Crudo",
    num: "01",
    title: "Bombeo de Crudo",
    subtitle: "Extracción y Transferencia · Crudo Pesado",
    summary:
      "Bomba de tornillo operada por unidad hidráulica a 15,000 PSI. Sin emulsificación, plato desnatador incorporado, 1,500 Bbl/día de capacidad.",
    highlights: ["1,500 Bbl / día", "Presión 15,000 PSI", "Sin emulsificación", "24/7"],
    img: "/bombeo/equipo-principal.png",
    color: "#eef7f1",
  },
  {
    slug: "trasegado-vacuum",
    tag: "Vacuum Industrial",
    num: "02",
    title: "Transporte de Fluidos",
    subtitle: "Vacuum 160 Bbl · Fabricación 2026",
    summary:
      "Succión y transporte de fluidos de alta densidad con unidad propia de 160 Bbl. Acero A36 · compresor NVE Challenger 607 · motor Isuzu 4BD1.",
    highlights: ["160 Bbl · A36 8mm", "NVE Challenger 607", "Espacios confinados", "Fabricación 2026"],
    img: "/vacuum/vacuum-semirremolque.jpg",
    color: "#eef4ff",
  },
  {
    slug: "frac-tanks",
    tag: "Almacenamiento",
    num: "03",
    title: "Frac Tanks 500 Bbl",
    subtitle: "Tanques Portátiles · 4 Configuraciones",
    summary:
      "Tanques de 500 Bbl en 4 configuraciones: V-Bottom, Flat Bottom, Insulated y Gas Tight. Alta movilidad, batería hasta 20 unidades.",
    highlights: ["500 Bbl / unidad", "V-Bottom · Flat · Insulated · Gas Tight", "Movilización con lowboy", "Batería hasta 20 tanques"],
    img: "/frac-tanks/frac-tank-nuevo.png",
    color: "#fff8ee",
  },
  {
    slug: "manejo-de-desechos",
    tag: "Gestión Ambiental",
    num: "04",
    title: "Manejo de Desechos",
    subtitle: "Residuos Industriales · Decreto 2635",
    summary:
      "Gestión integral: lodos de perforación, aguas de producción, borras asfálticas y suelos contaminados. Manifiesto y certificado de disposición en cada operación.",
    highlights: ["Decreto 2635 VE", "Lodos WBM & OBM", "Borras asfálticas", "Certificado disposición"],
    img: "/vacuum/vacuum-truck-howo-pdvsa.jpg",
    color: "#f3f8ee",
  },
  {
    slug: "alquiler-calderas-inyeccion-vapor",
    tag: "Inyección de Vapor",
    num: "05",
    title: "Alquiler de Calderas",
    subtitle: "OTSG · Estimulación Térmica de Pozos",
    summary:
      "Generadores OTSG para Huff & Puff, Steam Flooding y SAGD. 100% automatizados. Alta capacidad para recuperación de crudo en fosas y pozos petroleros.",
    highlights: ["Huff & Puff · Steam Flooding · SAGD", "100% automatizado", "Pasivos ambientales", "Estado Zulia"],
    img: "/vapor/caldera-otsg-semirremolque.jpg",
    color: "#fef4ee",
  },
];

export default function ServiciosClient() {
  const heroRef  = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children as unknown as Element[],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.2 }
      );
      ScrollTrigger.create({
        trigger: cardsRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(
          cardsRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.09 }
        ),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO (dark) ── */}
        <section
          className="pt-36 pb-0 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0d1f14 0%, #111113 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 50% at 0% 60%, rgba(26,140,60,0.18) 0%, transparent 65%)" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 35% 35% at 100% 20%, rgba(48,209,88,0.07) 0%, transparent 60%)" }} />

          <div className="site-container relative">
            <div ref={heroRef}>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-white/40 mb-10">
                <Link href="/" className="hover:text-[#30d158] transition-colors">Inicio</Link>
                <span>/</span>
                <span className="text-white/70 font-medium">Servicios</span>
              </nav>

              <div className="grid lg:grid-cols-2 gap-14 items-end pb-20">
                {/* Left */}
                <div>
                  <div className="inline-flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#30d158]">Catálogo de Servicios</span>
                  </div>
                  <h1 className="text-[clamp(36px,5vw,66px)] font-bold tracking-tight leading-[1.05] text-white mb-6">
                    Todo lo que su<br />
                    <span style={{ background: "linear-gradient(135deg,#30d158 0%,#1a8c3c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      operación necesita.
                    </span>
                  </h1>
                  <p className="text-[17px] leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Cinco líneas de servicio especializadas para la industria petrolera venezolana, respaldadas por equipamiento propio y operación continua 24/7.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contacto" className="btn-primary">
                      Solicitar cotización
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                    <a
                      href="tel:04246472446"
                      className="flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold text-white"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.14)" }}
                    >
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path d="M3 2h2.5l1 3-1.5 1a7.5 7.5 0 003.5 3.5L10 8l3 1v2.5A1.5 1.5 0 0111.5 13C5.1 13 2 9 2 3.5A1.5 1.5 0 013 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                      </svg>
                      0424-6472446
                    </a>
                    <DescargarCatalogoBtnn />
                  </div>
                </div>

                {/* Right — photo strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative rounded-2xl overflow-hidden col-span-2 row-span-2" style={{ minHeight: 280 }}>
                    <Image
                      src="/vapor/campo-pozos.jpg"
                      alt="Locación de pozos — Estado Zulia"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 66vw, 33vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white" style={{ background: "rgba(26,140,60,0.8)", backdropFilter: "blur(8px)" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Edo. Zulia
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 135 }}>
                    <Image
                      src="/vacuum/vacuum-semirremolque.jpg"
                      alt="Vacuum 160 Bbl"
                      fill
                      className="object-cover"
                      sizes="15vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-2.5 left-3"><span className="text-[10px] font-semibold text-white/80">Vacuum 160 Bbl</span></div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 135 }}>
                    <Image
                      src="/frac-tanks/bateria-frac-tanks.jpg"
                      alt="Frac Tanks en locación"
                      fill
                      className="object-cover"
                      sizes="15vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-2.5 left-3"><span className="text-[10px] font-semibold text-white/80">Frac Tanks 500 Bbl</span></div>
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                {[
                  { v: "5", l: "Servicios especializados" },
                  { v: "160 Bbl", l: "Capacidad vacuum" },
                  { v: "500 Bbl", l: "Frac Tanks" },
                  { v: "24/7", l: "Operación continua" },
                ].map((s, i) => (
                  <div key={i} className="px-6 py-5" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                    <div className="text-[24px] font-bold text-white leading-none tracking-tight">{s.v}</div>
                    <div className="text-[11px] font-medium mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID (light) ── */}
        <section className="py-20" style={{ background: "#ffffff" }}>
          <div className="site-container">
            <div ref={cardsRef} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((s) => (
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
                  {/* Photo header */}
                  <div className="relative overflow-hidden" style={{ height: 180 }}>
                    <Image
                      src={s.img}
                      alt={`${s.title} — Soluciones Delta`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    {/* Number badge */}
                    <div className="absolute top-3 right-3 text-[11px] font-bold text-white/60 tracking-widest">{s.num}</div>
                    {/* Tag */}
                    <div className="absolute bottom-3 left-3">
                      <span
                        className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full text-white"
                        style={{ background: "rgba(26,140,60,0.8)", backdropFilter: "blur(8px)" }}
                      >
                        {s.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-6 pt-5 pb-6 flex flex-col flex-1">
                    <h2 className="text-[18px] font-bold text-[#1d1d1f] leading-snug mb-1">{s.title}</h2>
                    <p className="text-[12px] font-semibold mb-3" style={{ color: "#1a8c3c" }}>{s.subtitle}</p>
                    <p className="text-[13px] text-[#6e6e73] leading-relaxed mb-4 flex-1">{s.summary}</p>

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
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #f0f0f0" }}>
                      <span className="text-[13px] font-semibold text-[#1a8c3c]">Ver servicio completo</span>
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
                className="group flex flex-col items-center justify-center rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
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
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 110%, rgba(48,209,88,0.18) 0%, transparent 65%)" }} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto" style={{ background: "rgba(48,209,88,0.1)", border: "1px solid rgba(48,209,88,0.2)" }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M5 4h4.5l2 5.5-2.5 2a12 12 0 006.5 6.5l2-2.5 5.5 2V22a2 2 0 01-2 2C9 24 3 17 3 8a3 3 0 012-4z" stroke="#30d158" strokeWidth="1.8" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: "#30d158" }}>Contacto Directo</div>
                  <h3 className="text-[19px] font-bold text-white mb-3 leading-snug">¿Necesita un servicio personalizado?</h3>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Contáctenos y diseñamos una solución a la medida de su operación.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold group-hover:gap-3 transition-all duration-200" style={{ color: "#30d158" }}>
                    Solicitar cotización
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA STRIP ── */}
        <section className="py-16" style={{ background: "#f5f5f7", borderTop: "1px solid #ebebef" }}>
          <div className="site-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-[clamp(20px,3vw,30px)] font-bold text-[#1d1d1f] mb-2">
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
