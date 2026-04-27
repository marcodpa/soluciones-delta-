"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fortalezas = [
  {
    num: "01",
    title: "Flota Propia 2026",
    body: "Unidades vacuum fabricadas en 2026 con acero A36 de 8 mm. Sin subcontratos — el equipo que llega es el nuestro, con mantenimiento al día y certificaciones vigentes.",
    stat: "160 Bbl",
    statLabel: "Capacidad vacuum",
    accent: "#30d158",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="10" width="24" height="11" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 10V8a5 5 0 0114 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="8" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="20" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M10.5 24h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Operación 24/7",
    body: "Disponibles en todo momento para emergencias y operaciones continuas. Movilización en menos de 4 horas dentro del Estado Zulia.",
    stat: "24/7",
    statLabel: "Disponibilidad",
    accent: "#0a84ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 7v7l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 14h3M22 14h3M14 3v3M14 22v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Trayectoria Comprobada",
    body: "Contratos ejecutados al 100% con Chevron, Petroboscán y PDVSA desde 2012. Capacidad de recuperación demostrada de 1,500 Bbl/día en Campo Boscán.",
    stat: "100%",
    statLabel: "Cumplimiento",
    accent: "#ff9f0a",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L3 8v6c0 6.6 4.7 12.8 11 14.3C20.3 26.8 25 20.6 25 14V8L14 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 14l3.5 3.5L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Cumplimiento Normativo",
    body: "Operamos bajo Decreto 2635, normas PDVSA-COVENIN, API y ASME. Manifiestos, certificados y documentación completa en cada operación.",
    stat: "0.00",
    statLabel: "Frecuencia accidentes",
    accent: "#30d158",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 7h20M4 14h20M4 21h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="22" cy="21" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M20 21l1.5 1.5L24 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Solución Integral",
    body: "Bombeo, vacuum, Frac Tanks, inyección de vapor y gestión de desechos. Un solo proveedor para toda la cadena, desde la extracción hasta la disposición final.",
    stat: "5+",
    statLabel: "Servicios integrados",
    accent: "#bf5af2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M5 14H3M25 14h-2M14 5V3M14 25v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7.8 7.8L6.4 6.4M21.6 21.6l-1.4-1.4M20.2 7.8l1.4-1.4M6.4 21.6l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    num: "06",
    title: "Personal Técnico Especializado",
    body: "Equipo multidisciplinario con certificaciones vigentes en operación de vacuum, calderas y gestión ambiental. Formación continua y protocolos HSE estrictos.",
    stat: "HSE",
    statLabel: "Protocolo integrado",
    accent: "#ff375f",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M20 3l1.5 1.5L25 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function FortalezasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current, start: "top 88%", once: true,
        onEnter: () =>
          gsap.fromTo(
            headerRef.current?.children as unknown as Element[],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.1 }
          ),
      });
      ScrollTrigger.create({
        trigger: gridRef.current, start: "top 85%", once: true,
        onEnter: () =>
          gsap.fromTo(
            gridRef.current?.children as unknown as Element[],
            { opacity: 0, y: 44 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 }
          ),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="fortalezas"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
      style={{ background: "#f2f2f4" }}
    >
      {/* top/bottom subtle lines */}
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,rgba(0,0,0,0.07),transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,rgba(0,0,0,0.07),transparent)" }} />

      {/* subtle green glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(48,209,88,0.05) 0%, transparent 70%)" }} />

      <div className="site-container">

        {/* ── HEADER ── */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <div className="section-label mb-4">Por qué elegirnos</div>
            <h2 className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight leading-tight text-[#1d1d1f]">
              Nuestras <span className="text-gradient">Fortalezas.</span>
            </h2>
          </div>
          <p className="text-[15px] text-[#6e6e73] max-w-sm leading-relaxed lg:text-right flex-shrink-0">
            No somos intermediarios. Flota propia, personal propio y más de una década operando en el sector petrolero venezolano.
          </p>
        </div>

        {/* ── GRID ── */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {fortalezas.map((f) => (
            <Card key={f.num} f={f} />
          ))}
        </div>

      </div>
    </section>
  );
}

function Card({ f }: { f: typeof fortalezas[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col gap-5 p-7 rounded-3xl transition-all duration-300 cursor-default"
      style={{
        background: "#ffffff",
        border: "1.5px solid #e8e8ed",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = `${f.accent}44`;
        el.style.boxShadow = `0 12px 40px ${f.accent}18`;
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#e8e8ed";
        el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* top row: icon + number */}
      <div className="flex items-start justify-between">
        {/* icon bubble */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            color: f.accent,
            background: `${f.accent}12`,
            border: `1px solid ${f.accent}22`,
          }}
        >
          {f.icon}
        </div>

        {/* stat badge */}
        <div className="text-right">
          <div
            className="text-[22px] font-bold leading-none tracking-tight"
            style={{ color: f.accent }}
          >
            {f.stat}
          </div>
          <div className="text-[10px] text-[#aeaeb2] mt-0.5 font-medium tracking-wide uppercase">
            {f.statLabel}
          </div>
        </div>
      </div>

      {/* number label */}
      <div
        className="absolute top-7 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-widest"
        style={{ color: "#d8d8dc" }}
      >
        {f.num}
      </div>

      {/* text */}
      <div className="flex-1 flex flex-col gap-2 mt-1">
        <h3 className="text-[17px] font-bold text-[#1d1d1f] leading-snug">{f.title}</h3>
        <p className="text-[13.5px] text-[#6e6e73] leading-relaxed">{f.body}</p>
      </div>

      {/* bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${f.accent}, transparent)` }}
      />
    </div>
  );
}
