"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Seguridad ante todo",
    body: "Cada operación se ejecuta bajo protocolos HSE rigurosos. ART previo, EPP completo, sistema de aterramiento y kit antiderrame certificado en cada movilización.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#1a8c3c" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Responsabilidad ambiental",
    body: "Cumplimos el Decreto 2635 venezolano y las normas COVENIN aplicables. Emitimos manifiestos y certificados de disposición final en cada operación que lo requiera.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Tecnología propia",
    body: "No alquilamos equipos de terceros. Nuestra flota — incluyendo las unidades vacuum fabricadas en 2026 — es nuestra, lo que garantiza mantenimiento al día y disponibilidad inmediata.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="10" rx="3" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M7 7V5h10v2" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 12h20" stroke="#1a8c3c" strokeWidth="1" opacity="0.4"/>
        <circle cx="8" cy="20" r="2" stroke="#1a8c3c" strokeWidth="1.5"/>
        <circle cx="16" cy="20" r="2" stroke="#1a8c3c" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Respuesta inmediata",
    body: "Operamos 24 horas al día, 7 días a la semana. Para emergencias en campo, garantizamos movilización en menos de 4 horas dentro del Estado Zulia.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const companyData = [
  { label: "Razón Social",  value: "Soluciones Delta, C.A." },
  { label: "RIF",           value: "J-50735393-1" },
  { label: "Sector",        value: "Servicios Técnicos Industriales — Petróleo y Gas" },
  { label: "Sede",          value: "Calle 13 con Av 5, Local 26A-162, Of. 2, Sector Manzanillo, San Francisco, Edo. Zulia" },
  { label: "Teléfono",      value: "0424-6472446" },
  { label: "Correo",        value: "solucionesdeltaca@gmail.com" },
  { label: "Flota",         value: "Unidades vacuum fabricación 2026, Frac Tanks 500 Bbl" },
  { label: "Operación",     value: "24 horas / 7 días — Zulia y regiones adyacentes" },
];

const timeline = [
  {
    year: "Fundación",
    title: "Nacimiento en el corazón petrolero",
    body: "Soluciones Delta, C.A. nace en San Francisco, Estado Zulia, con el objetivo de ofrecer servicios técnicos especializados a la industria petrolera venezolana, comenzando con bombeo de crudo y trasegado con vacuum.",
    img: "/bombeo/bomba-hidraulica-roja.jpg",
    imgAlt: "Bomba hidráulica roja — inicio de operaciones",
  },
  {
    year: "Crecimiento",
    title: "Expansión de la flota y los servicios",
    body: "Incorporamos Frac Tanks de 500 Bbl en 4 configuraciones y ampliamos nuestra capacidad de manejo de desechos industriales bajo el Decreto 2635, atendiendo operaciones en locaciones remotas del Estado Zulia.",
    img: "/frac-tanks/bateria-frac-tanks.jpg",
    imgAlt: "Batería de Frac Tanks en locación — Estado Zulia",
  },
  {
    year: "",
    title: "Contratos ejecutados al 100%",
    body: "Hemos ejecutado contratos de inyección de vapor en campos del occidente venezolano, logrando recuperación de 1,500 Bbl/día con ejecución del 100% en cada extensión.",
    img: "/vapor/campo-pozos.jpg",
    imgAlt: "Locación de pozos — Estado Zulia",
  },
  {
    year: "2026",
    title: "Nueva generación de equipos",
    body: "Incorporamos unidades vacuum semirremolque de última generación, fabricadas en 2026 con acero A36 de 8 mm, compresor NVE Challenger 607 y motor Isuzu 4BD1. Equipamiento 100% propio y certificado.",
    img: "/vacuum/vacuum-semirremolque.jpg",
    imgAlt: "Semirremolque Vacuum 160 Bbl — Soluciones Delta 2026",
  },
];

const stats = [
  { value: "1,500", unit: "Bbl/día", label: "Capacidad de recuperación demostrada" },
  { value: "100%", unit: "", label: "Cumplimiento en todos los contratos" },
  { value: "24/7", unit: "", label: "Disponibilidad operativa" },
  { value: "5+", unit: "", label: "Líneas de servicio especializadas" },
];

export default function NosotrosClient() {
  const heroRef    = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children as unknown as Element[],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.3 }
      );

      sectionRef.current?.querySelectorAll(".animate-in").forEach((el) => {
        ScrollTrigger.create({
          trigger: el, start: "top 88%", once: true,
          onEnter: () => gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }),
        });
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
          className="pt-36 pb-0 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0d1f14 0%, #111113 100%)" }}
        >
          {/* Glows */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 50% at 0% 60%, rgba(26,140,60,0.18) 0%, transparent 65%)" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 35% 35% at 100% 20%, rgba(48,209,88,0.07) 0%, transparent 60%)" }} />

          <div className="site-container relative">
            <div ref={heroRef}>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-white/40 mb-10">
                <Link href="/" className="hover:text-[#30d158] transition-colors">Inicio</Link>
                <span>/</span>
                <span className="text-white/70 font-medium">Nosotros</span>
              </nav>

              <div className="grid lg:grid-cols-2 gap-14 items-end pb-20">
                {/* Left text */}
                <div>
                  <div className="inline-flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#30d158]">Quiénes Somos</span>
                  </div>
                  <h1 className="text-[clamp(36px,5vw,66px)] font-bold tracking-tight leading-[1.05] text-white mb-6">
                    Construidos sobre la confianza<br />
                    <span style={{ background: "linear-gradient(135deg,#30d158 0%,#1a8c3c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      del campo.
                    </span>
                  </h1>
                  <p className="text-[17px] leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Empresa venezolana especializada en servicios técnicos para la industria petrolera. Nacimos en Zulia, operamos en Zulia y conocemos cada condición que el campo puede presentar.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contacto" className="btn-primary">
                      Trabajar con nosotros
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                    <Link href="/servicios"
                      className="flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold text-white transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.14)" }}
                    >
                      Ver servicios
                    </Link>
                  </div>
                </div>

                {/* Right — photo mosaic */}
                <div className="grid grid-cols-2 gap-3 pb-0">
                  <div className="relative rounded-2xl overflow-hidden row-span-2" style={{ minHeight: 320 }}>
                    <Image
                      src="/vacuum/vacuum-truck-howo-pdvsa.jpg"
                      alt="Unidad Vacuum en operación — Locación PDVSA"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[11px] font-semibold text-white/80">Vacuum — Locación PDVSA</span>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 155 }}>
                    <Image
                      src="/vapor/campo-pozos.jpg"
                      alt="Locación de pozos — Estado Zulia"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[11px] font-semibold text-white/80">Edo. Zulia</span>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 155 }}>
                    <Image
                      src="/vapor/caldera-otsg-semirremolque.jpg"
                      alt="Generador de Vapor OTSG"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[11px] font-semibold text-white/80">Caldera OTSG — vapor</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {stats.map((s, i) => (
                  <div key={i} className="px-7 py-6 flex flex-col gap-1" style={{ background: "rgba(0,0,0,0.25)" }}>
                    <div className="text-[28px] font-bold text-white leading-none tracking-tight">
                      {s.value}<span className="text-[#30d158] text-[18px]">{s.unit}</span>
                    </div>
                    <div className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT TEXT + COMPANY DATA (light) ── */}
        <section style={{ background: "#ffffff" }}>
          <div ref={sectionRef} className="site-container py-20 space-y-24">

            <div className="animate-in grid lg:grid-cols-2 gap-14 items-start">
              <div className="space-y-6">
                <h2 className="text-[clamp(26px,3.5vw,40px)] font-bold text-[#1d1d1f] leading-tight">
                  Al servicio del sector petrolero venezolano
                </h2>
                <p className="text-[17px] text-[#3a3a3c] leading-relaxed">
                  Desde nuestra sede en San Francisco, Estado Zulia, hemos acompañado a operadoras, contratistas y empresas del sector petrolero en sus operaciones más exigentes — desde el vaciado de un Frac Tank en locación remota hasta la remediación de pasivos ambientales con inyección de vapor.
                </p>
                <p className="text-[16px] text-[#6e6e73] leading-relaxed">
                  Lo que nos diferencia no es solo el equipamiento, sino la mentalidad: llegamos al campo con soluciones, no con excusas. Nuestro personal es técnico, experimentado y comprometido con cumplir cada operación de forma segura y documentada.
                </p>
                <p className="text-[16px] text-[#6e6e73] leading-relaxed">
                  Somos una empresa privada venezolana, con RIF J-50735393-1, flota propia y presencia activa en el Estado Zulia y regiones adyacentes.
                </p>
              </div>

              {/* Company card */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1.5px solid #e5e5ea", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              >
                <div className="px-6 py-4" style={{ background: "rgba(26,140,60,0.04)", borderBottom: "1px solid #e5e5ea" }}>
                  <div className="text-[13px] font-bold text-[#1a8c3c] tracking-widest uppercase">Ficha de la Empresa</div>
                </div>
                {companyData.map((item, i) => (
                  <div
                    key={i}
                    className="px-6 py-4 flex gap-4"
                    style={{ borderBottom: i < companyData.length - 1 ? "1px solid #f0f0f0" : "none", background: i % 2 === 0 ? "#fff" : "#fafafa" }}
                  >
                    <div className="text-[12px] text-[#6e6e73] font-medium min-w-[110px] pt-0.5 flex-shrink-0">{item.label}</div>
                    <div className="text-[13px] text-[#1d1d1f] font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── MISSION / VISION / QUALITY ── */}
            <div className="animate-in">
              <div className="section-label mb-10">Filosofía Gerencial</div>
              <div className="grid lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Misión",
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <circle cx="11" cy="11" r="9" stroke="#1a8c3c" strokeWidth="1.5"/>
                        <circle cx="11" cy="11" r="3" stroke="#1a8c3c" strokeWidth="1.5"/>
                        <path d="M11 2v2M11 18v2M2 11h2M18 11h2" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ),
                    body: "Prestar un servicio de calidad para satisfacer los requerimientos de nuestros clientes a través de servicios técnicos especializados para la industria petrolera, con personal competente y comprometido, promoviendo la conciencia ecológica y la mejora continua.",
                  },
                  {
                    title: "Visión",
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M1 11s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" stroke="#1a8c3c" strokeWidth="1.5" strokeLinejoin="round"/>
                        <circle cx="11" cy="11" r="3" stroke="#1a8c3c" strokeWidth="1.5"/>
                      </svg>
                    ),
                    body: "Proyectarnos como empresa líder en el sector petrolero venezolano, de desarrollo exitoso mediante la cultura de excelencia corporativa, siendo referente nacional por nuestra alta capacidad operacional y excelente calidad de servicio.",
                  },
                  {
                    title: "Política de Calidad",
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 2L3 6v5c0 4.5 3.3 8.7 8 9.9 4.7-1.2 8-5.4 8-9.9V6L11 2z" stroke="#1a8c3c" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M7.5 11l2.5 2.5L15 9" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    body: "Ofrecemos servicios de excelente calidad fundamentados en la mejora continua del sistema de gestión, el cumplimiento de requisitos legales y reglamentarios, y mecanismos de seguridad y salud en todas nuestras operaciones.",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-2xl" style={{ background: "#f9f9fb", border: "1.5px solid #ebebef" }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                      style={{ background: "rgba(26,140,60,0.08)", border: "1px solid rgba(26,140,60,0.15)" }}>
                      {item.icon}
                    </div>
                    <h3 className="text-[17px] font-bold text-[#1d1d1f] mb-3">{item.title}</h3>
                    <p className="text-[14px] text-[#6e6e73] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── TIMELINE (dark) ── */}
        <section style={{ background: "#111113" }} className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 0% 50%, rgba(26,140,60,0.09) 0%, transparent 65%)" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 35% 30% at 100% 80%, rgba(48,209,88,0.05) 0%, transparent 60%)" }} />
          <div className="site-container relative">
            <div className="section-label mb-3" style={{ color: "#30d158" }}>Historia y Evolución</div>
            <h2 className="text-[clamp(28px,4vw,50px)] font-bold tracking-tight leading-tight text-white mb-14">
              Una trayectoria construida<br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>operación a operación.</span>
            </h2>

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="group grid lg:grid-cols-[200px_1fr_280px] gap-6 lg:gap-10 items-center p-6 lg:p-8 rounded-2xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(26,140,60,0.06)";
                    el.style.borderColor = "rgba(26,140,60,0.2)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.03)";
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  {/* Year badge */}
                  <div className="flex items-center lg:justify-end">
                    <span
                      className="text-[12px] font-bold tracking-widest uppercase px-4 py-2 rounded-full"
                      style={{ background: "rgba(26,140,60,0.12)", color: "#30d158", border: "1px solid rgba(48,209,88,0.2)" }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[17px] font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.body}</p>
                  </div>

                  {/* Image */}
                  <div className="relative rounded-xl overflow-hidden hidden lg:block" style={{ height: 130 }}>
                    <Image
                      src={item.img}
                      alt={item.imgAlt}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      sizes="280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ background: "#f5f5f7" }} className="py-24">
          <div className="site-container">
            <div className="section-label mb-3">Nuestros Valores</div>
            <h2 className="text-[clamp(28px,4vw,46px)] font-bold text-[#1d1d1f] tracking-tight leading-tight mb-12">
              Los principios que guían<br />cada operación.
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl flex gap-5 bg-white"
                  style={{ border: "1.5px solid #ebebef", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(26,140,60,0.08)", border: "1px solid rgba(26,140,60,0.15)" }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#1d1d1f] mb-2">{v.title}</h3>
                    <p className="text-[14px] text-[#6e6e73] leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Full-width photo strip */}
            <div className="mt-12 grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
              <div className="relative col-span-2" style={{ height: 220 }}>
                <Image
                  src="/frac-tanks/bateria-frac-tanks.jpg"
                  alt="Batería de Frac Tanks en locación — Estado Zulia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[12px] font-semibold text-white/80">Frac Tanks — Estado Zulia</span>
                </div>
              </div>
              <div className="relative" style={{ height: 220 }}>
                <Image
                  src="/bombeo/bomba-hidraulica-roja.jpg"
                  alt="Bomba Hidráulica — Operación de campo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[12px] font-semibold text-white/80">Bomba hidráulica de tornillo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: "#f5f5f7" }} className="pb-20">
          <div className="site-container">
            <div
              className="rounded-3xl px-10 py-16 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0d1f14 0%, #0a1a10 100%)" }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 110%, rgba(26,140,60,0.25) 0%, transparent 65%)" }} />
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(48,209,88,0.35), transparent)" }} />
              <div className="relative">
                <div className="flex items-center justify-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#30d158]">Disponibles ahora · 24/7</span>
                </div>
                <h2 className="text-[clamp(26px,4vw,44px)] font-bold text-white mb-4 tracking-tight leading-tight">
                  ¿Tiene un proyecto en mente?
                </h2>
                <p className="text-[16px] max-w-lg mx-auto mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Hablemos de su operación. Nuestro equipo técnico está listo para diseñar la solución más eficiente para sus necesidades.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contacto" className="btn-primary">
                    Solicitar cotización
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <a href="tel:04246472446"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold text-white"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.18)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 2h2.5l1 3-1.5 1a7.5 7.5 0 003.5 3.5L10 8l3 1v2.5A1.5 1.5 0 0111.5 13C5.1 13 2 9 2 3.5A1.5 1.5 0 013 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                    </svg>
                    0424-6472446
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
