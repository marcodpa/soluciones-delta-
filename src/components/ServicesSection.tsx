"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    slug: "bombeo-de-crudo",
    num: "01",
    tag: "Bombeo",
    title: "Bombeo de Transferencia",
    tagline: "Crudo pesado API 8°–22°, caudal constante, sin emulsificación.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 14h5M19 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 7l3.5 3.5M17.5 17.5l3.5 3.5M7 21l3.5-3.5M17.5 10.5l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.45"/>
      </svg>
    ),
  },
  {
    slug: "trasegado-vacuum",
    num: "02",
    tag: "Vacuum",
    title: "Trasegado con Vacuum",
    tagline: "160 Bbl. Borras, lodos, efluentes y espacios confinados.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="10" width="22" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M10 10V8a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 16.5h4M16 16.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    slug: "frac-tanks",
    num: "03",
    tag: "Almacenamiento",
    title: "Frac Tanks 500 Bbl",
    tagline: "V-Bottom, Flat, Insulated y Gas Tight. Alta movilidad.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="8" width="24" height="13" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 8V6h14v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="9" cy="24" r="2.2" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="19" cy="24" r="2.2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M11.2 24h5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    slug: "manejo-de-desechos",
    num: "04",
    tag: "Ambiental",
    title: "Manejo de Desechos",
    tagline: "Decreto 2635. Trazabilidad completa y certificados.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4.5 10.5h19M4.5 17.5h19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
        <path d="M14 4c-2.5 3-4 6.5-4 10s1.5 7 4 10M14 4c2.5 3 4 6.5 4 10s-1.5 7-4 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    slug: "alquiler-calderas-inyeccion-vapor",
    num: "05",
    tag: "Vapor",
    title: "Inyección de Vapor",
    tagline: "Calderas OTSG. Huff & Puff, SAGD, Steam Flooding.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C10 4 7 7 7 11c0 2.8 1.3 5.2 3.3 6.7V20h7.4v-2.3c2-1.5 3.3-3.9 3.3-6.7 0-4-3-7-7-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M11 20v3h6v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 8v1.5M10.5 9.5l1 1M17.5 9.5l-1 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.45"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const listRef    = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current, start: "top 88%", once: true,
        onEnter: () =>
          gsap.fromTo(
            headerRef.current?.children as unknown as Element[],
            { opacity: 0, y: 36 },
            { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.1 }
          ),
      });
      ScrollTrigger.create({
        trigger: listRef.current, start: "top 88%", once: true,
        onEnter: () =>
          gsap.fromTo(
            listRef.current?.children as unknown as Element[],
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.07 }
          ),
      });
      ScrollTrigger.create({
        trigger: ctaRef.current, start: "top 92%", once: true,
        onEnter: () =>
          gsap.fromTo(ctaRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
          ),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      aria-labelledby="servicios-heading"
      className="py-32 relative overflow-hidden bg-white"
    >
      {/* Ambient green glow top */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,rgba(26,140,60,0.18),transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(48,209,88,0.04) 0%, transparent 65%)" }}
      />

      <div className="site-container">

        {/* ── HEADER ── */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="section-label mb-4">Lo que hacemos</div>
            <h2
              id="servicios-heading"
              className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight leading-tight text-[#1d1d1f]"
            >
              Nuestros <span className="text-gradient">Servicios.</span>
            </h2>
          </div>
          <p className="text-[15px] text-[#6e6e73] max-w-xs leading-relaxed lg:text-right flex-shrink-0">
            Cinco áreas especializadas, un solo proveedor. Operación continua en el Estado Zulia.
          </p>
        </div>

        {/* ── SERVICE ROWS ── */}
        <div ref={listRef} className="divide-y" style={{ borderTop: "1px solid #ebebef", borderBottom: "1px solid #ebebef" }}>
          {services.map((s) => (
            <ServiceRow key={s.slug} s={s} />
          ))}
        </div>

        {/* ── BIG CTA ── */}
        <div ref={ctaRef} className="mt-12">
          <Link
            href="/servicios"
            className="group relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-7 rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #0f2d18 0%, #1a4d2a 60%, #1e6633 100%)",
              boxShadow: "0 8px 40px rgba(26,140,60,0.25)",
              textDecoration: "none",
            }}
          >
            {/* Shimmer overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(48,209,88,0.08) 0%, transparent 60%)" }}
            />

            {/* Grid pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)",
              }}
            />

            <div className="relative flex items-center gap-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(48,209,88,0.15)", border: "1px solid rgba(48,209,88,0.25)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 10h16M4 14h10" stroke="#30d158" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="19" cy="17" r="3.5" stroke="#30d158" strokeWidth="1.8"/>
                  <path d="M17.5 17l1 1 2-2" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-[18px] leading-snug">Ver catálogo completo de servicios</div>
                <div className="text-white/50 text-[13px] mt-0.5">Fichas técnicas, especificaciones y casos de uso detallados</div>
              </div>
            </div>

            <div
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold flex-shrink-0 transition-all duration-200 group-hover:gap-3"
              style={{ background: "#30d158", color: "#0a1f10" }}
            >
              Explorar servicios
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ── Individual row ── */
function ServiceRow({ s }: { s: typeof services[number] }) {
  return (
    <Link
      href={`/servicios/${s.slug}`}
      className="group flex items-center gap-5 py-5 transition-all duration-200"
      style={{ textDecoration: "none" }}
    >
      {/* Number */}
      <span
        className="text-[11px] font-bold tracking-widest flex-shrink-0 hidden sm:block transition-colors duration-200"
        style={{ color: "#d4d4d8", width: 24 }}
      >
        {s.num}
      </span>

      {/* Icon */}
      <div
        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
        style={{
          background: "rgba(26,140,60,0.06)",
          border: "1px solid rgba(26,140,60,0.12)",
          color: "#1a8c3c",
        }}
      >
        {s.icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2.5 mb-0.5">
          <h3 className="text-[15px] font-bold text-[#1d1d1f] group-hover:text-[#1a8c3c] transition-colors duration-200 leading-snug">
            {s.title}
          </h3>
          <span
            className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full flex-shrink-0"
            style={{ background: "rgba(26,140,60,0.07)", color: "#1a8c3c", border: "1px solid rgba(26,140,60,0.14)" }}
          >
            {s.tag}
          </span>
        </div>
        <p className="text-[13px] text-[#9a9aa0] leading-relaxed">{s.tagline}</p>
      </div>

      {/* Arrow */}
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center hidden sm:flex transition-all duration-200 opacity-0 group-hover:opacity-100"
        style={{ background: "rgba(26,140,60,0.09)", border: "1px solid rgba(26,140,60,0.18)" }}
      >
        <svg
          width="13" height="13" viewBox="0 0 16 16" fill="none"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path d="M3 8h10M9 4l4 4-4 4" stroke="#1a8c3c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  );
}
