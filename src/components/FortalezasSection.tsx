"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fortalezas = [
  {
    num: "01",
    title: "Flota Propia 2026",
    body: "Unidades vacuum fabricadas en 2026 con acero A36 de 8 mm. El equipo que llega es el nuestro, con mantenimiento al día y certificaciones vigentes.",
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
    body: "Contratos ejecutados al 100% de cumplimiento. Capacidad de recuperación demostrada de 1,500 Bbl/día.",
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
      style={{ background: "#111113" }}
    >
      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }} />

      {/* Soft green glow top-left */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 45% at 0% 50%, rgba(26,140,60,0.1) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 35% at 100% 80%, rgba(48,209,88,0.06) 0%, transparent 60%)" }} />

      <div className="site-container relative">

        {/* ── HEADER ── */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="section-label mb-4">Por qué elegirnos</div>
            <h2 className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight leading-tight text-white">
              Nuestras <span className="text-gradient">Fortalezas.</span>
            </h2>
          </div>
          <p className="text-[15px] text-white/40 max-w-sm leading-relaxed lg:text-right flex-shrink-0">
            No somos intermediarios. Flota propia, personal propio y amplia trayectoria operando en el sector petrolero venezolano.
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
  return (
    <div
      className="group relative flex flex-col gap-5 p-6 rounded-2xl transition-all duration-300 cursor-default"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = `${f.accent}0d`;
        el.style.borderColor = `${f.accent}30`;
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = "rgba(255,255,255,0.04)";
        el.style.borderColor = "rgba(255,255,255,0.07)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* top row: icon + stat */}
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ color: f.accent, background: `${f.accent}15`, border: `1px solid ${f.accent}25` }}>
          {f.icon}
        </div>
        <div className="text-right">
          <div className="text-[20px] font-bold leading-none tracking-tight" style={{ color: f.accent }}>
            {f.stat}
          </div>
          <div className="text-[9px] mt-0.5 font-medium tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
            {f.statLabel}
          </div>
        </div>
      </div>

      {/* text */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[15px] font-bold text-white leading-snug">{f.title}</h3>
        <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{f.body}</p>
      </div>

      {/* bottom accent line on hover */}
      <div className="absolute bottom-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${f.accent}80, transparent)` }} />
    </div>
  );
}
