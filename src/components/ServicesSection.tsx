"use client";

import typography from "./HomeTypography.module.css";

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
    title: "Bombeo de Crudo",
    tagline: "Crudo pesado API 8°–22°, caudal constante, sin emulsificación.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 14h5M19 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 7l3.5 3.5M17.5 17.5l3.5 3.5M7 21l3.5-3.5M17.5 10.5l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    slug: "trasegado-vacuum",
    num: "02",
    tag: "Vacuum",
    title: "Transporte de Fluidos con Vacuum",
    tagline: "160 Bbl. Borras, lodos, efluentes y espacios confinados.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="10" width="22" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M10 10V8a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 16.5h4M16 16.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
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
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
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
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4.5 10.5h19M4.5 17.5h19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
        <path d="M14 4c-2.5 3-4 6.5-4 10s1.5 7 4 10M14 4c2.5 3 4 6.5 4 10s-1.5 7-4 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    slug: "alquiler-calderas-inyeccion-vapor",
    num: "05",
    tag: "Vapor",
    title: "Calderas e Inyección de Vapor",
    tagline: "Alquiler de calderas OTSG. Pozos, tanques y patio de tanques.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C10 4 7 7 7 11c0 2.8 1.3 5.2 3.3 6.7V20h7.4v-2.3c2-1.5 3.3-3.9 3.3-6.7 0-4-3-7-7-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M11 20v3h6v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 8v1.5M10.5 9.5l1 1M17.5 9.5l-1 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    slug: "limpieza-industrial-hidrojet",
    num: "06",
    tag: "Hydrojet",
    title: "Limpieza Industrial con Hidrojet",
    tagline: "20.000 y 40.000 PSI. Trabajo en frío, sin chispas ni abrasivos.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M6 8h10a4 4 0 010 8H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 5v6M3 8h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M22 10l3 2-3 2M22 14l3 4M22 10l3-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    slug: "recuperacion-de-crudo-en-fosas",
    num: "07",
    tag: "Recuperación",
    title: "Recuperación de Crudo en Fosas",
    tagline: "Recuperación térmica en fosas, canales y tanques. 1,500 Bbl/día.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M4 11h20M6 11v7a8 8 0 0016 0v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 4c0 2-2 2-2 4M14 4c0 2-2 2-2 4M18 4c0 2-2 2-2 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
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
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.08 }),
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
      className="relative overflow-hidden"
      style={{ background: "#080f09" }}
    >
      {/* Background image — right half */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[52%] pointer-events-none">
        <img
          src="/servicios-campo.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay: fades photo into dark bg on the left */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(90deg, #080f09 0%, #080f09 18%, rgba(8,15,9,0.95) 42%, rgba(8,15,9,0.65) 65%, rgba(8,15,9,0.25) 100%)"
        }} />
        {/* Bottom fade */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(8,15,9,0.6) 0%, transparent 18%, transparent 72%, #080f09 100%)"
        }} />
      </div>

      {/* Top green accent line */}
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,rgba(26,140,60,0.4),transparent)" }} />

      <div className="site-container relative py-24 lg:py-32">

        {/* ── HEADER ── */}
        <div ref={headerRef} className="mb-14 max-w-lg">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-px" style={{ background: "#1a8c3c" }} />
            <span className={typography.eyebrow} style={{ color: "#30d158" }}>
              Lo que hacemos
            </span>
          </div>
          <h2
            id="servicios-heading"
            className={`${typography.sectionTitle} text-white`}
          >
            Nuestros<br />
            <span style={{ color: "#30d158" }}>Servicios.</span>
          </h2>
        </div>

        {/* ── SERVICE LIST ── */}
        <div ref={listRef} className="flex flex-col max-w-xl">
          {services.map((s) => (
            <ServiceRow key={s.slug} s={s} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} className="mt-10 max-w-xl">
          <Link
            href="/servicios"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full font-semibold text-[14px] transition-all duration-200"
            style={{
              background: "#1a8c3c",
              color: "#ffffff",
              textDecoration: "none",
              boxShadow: "0 0 32px rgba(26,140,60,0.35)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#157a34";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 40px rgba(26,140,60,0.5)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1a8c3c";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 32px rgba(26,140,60,0.35)";
            }}
          >
            Ver catálogo completo de servicios
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,rgba(26,140,60,0.25),transparent)" }} />
    </section>
  );
}

function ServiceRow({ s }: { s: typeof services[number] }) {
  return (
    <Link
      href={`/servicios/${s.slug}`}
      className="group flex items-start gap-5 py-5 transition-all duration-200"
      style={{
        textDecoration: "none",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(26,140,60,0.4)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.07)";
      }}
    >
      {/* Number */}
      <span className="text-[11px] font-bold tracking-widest flex-shrink-0 w-7 pt-0.5"
        style={{ color: "rgba(48,209,88,0.5)" }}>
        {s.num}
      </span>

      {/* Icon */}
      <div
        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-200"
        style={{
          background: "rgba(26,140,60,0.12)",
          border: "1px solid rgba(48,209,88,0.2)",
          color: "#30d158",
        }}
      >
        {s.icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-[18px] font-semibold text-white group-hover:text-[#30d158] transition-colors duration-200 leading-snug">
            {s.title}
          </h3>
          <span
            className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full flex-shrink-0 hidden sm:inline-block"
            style={{ background: "rgba(26,140,60,0.15)", color: "#30d158", border: "1px solid rgba(48,209,88,0.2)" }}
          >
            {s.tag}
          </span>
        </div>
        <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          {s.tagline}
        </p>
      </div>

      {/* Arrow */}
      <svg
        width="14" height="14" viewBox="0 0 16 16" fill="none"
        className="flex-shrink-0 mt-2 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
        style={{ color: "#30d158" }}
      >
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}
