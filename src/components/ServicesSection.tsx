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
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
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
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
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
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
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
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
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
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
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
          gsap.fromTo(headerRef.current?.children as unknown as Element[],
            { opacity: 0, y: 36 },
            { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.1 }),
      });
      ScrollTrigger.create({
        trigger: listRef.current, start: "top 88%", once: true,
        onEnter: () =>
          gsap.fromTo(listRef.current?.children as unknown as Element[],
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.07 }),
      });
      ScrollTrigger.create({
        trigger: ctaRef.current, start: "top 92%", once: true,
        onEnter: () =>
          gsap.fromTo(ctaRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }),
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
      style={{ background: "#0d0d0f" }}
    >
      {/* Ambient green glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(26,140,60,0.12) 0%, transparent 65%)" }} />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

      <div className="site-container relative">

        {/* ── HEADER ── */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="section-label mb-4">Lo que hacemos</div>
            <h2 id="servicios-heading"
              className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight leading-tight text-white">
              Nuestros <span className="text-gradient">Servicios.</span>
            </h2>
          </div>
          <p className="text-[15px] text-white/40 max-w-xs leading-relaxed lg:text-right flex-shrink-0">
            Cinco áreas especializadas, un solo proveedor. Operación continua en el Estado Zulia.
          </p>
        </div>

        {/* ── SERVICE ROWS ── */}
        <div ref={listRef} className="flex flex-col gap-1 mb-10">
          {services.map((s) => (
            <ServiceRow key={s.slug} s={s} />
          ))}
        </div>

        {/* ── BIG CTA ── */}
        <div ref={ctaRef}>
          <Link
            href="/servicios"
            className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-6 rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.background = "rgba(26,140,60,0.1)";
              el.style.borderColor = "rgba(26,140,60,0.35)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(48,209,88,0.12)", border: "1px solid rgba(48,209,88,0.2)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 10h16M4 14h10" stroke="#30d158" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="19" cy="17" r="3.5" stroke="#30d158" strokeWidth="1.8"/>
                  <path d="M17.5 17l1 1 2-2" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-[15px]">Ver catálogo completo de servicios</div>
                <div className="text-white/35 text-[12px] mt-0.5">Fichas técnicas, especificaciones y casos de uso</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[13px] font-semibold text-[#30d158] group-hover:gap-3 transition-all duration-200 flex-shrink-0">
              Explorar
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

function ServiceRow({ s }: { s: typeof services[number] }) {
  return (
    <Link
      href={`/servicios/${s.slug}`}
      className="group flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200"
      style={{ textDecoration: "none" }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.background = "rgba(255,255,255,0.04)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.background = "transparent";
      }}
    >
      {/* Number */}
      <span className="text-[11px] font-bold tracking-widest flex-shrink-0 hidden sm:block w-6"
        style={{ color: "rgba(255,255,255,0.2)" }}>
        {s.num}
      </span>

      {/* Icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
        style={{ background: "rgba(26,140,60,0.1)", border: "1px solid rgba(26,140,60,0.2)", color: "#30d158" }}>
        {s.icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0 flex items-center gap-3">
        <h3 className="text-[14px] font-semibold text-white/80 group-hover:text-white transition-colors duration-200 leading-snug">
          {s.title}
        </h3>
        <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full flex-shrink-0 hidden sm:inline-block"
          style={{ background: "rgba(48,209,88,0.1)", color: "#30d158", border: "1px solid rgba(48,209,88,0.18)" }}>
          {s.tag}
        </span>
        <span className="text-[12px] text-white/30 hidden lg:block truncate">{s.tagline}</span>
      </div>

      {/* Arrow */}
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1 group-hover:translate-x-0">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="#30d158" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}
