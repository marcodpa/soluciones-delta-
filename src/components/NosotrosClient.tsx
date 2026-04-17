"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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
    body: "Soluciones Delta, C.A. nace en San Francisco, Estado Zulia, con el objetivo de ofrecer servicios técnicos especializados a la industria petrolera venezolana, comenzando con bombeo de transferencia y trasegado con vacuum.",
  },
  {
    year: "Crecimiento",
    title: "Expansión de la flota y los servicios",
    body: "Incorporamos Frac Tanks de 500 Bbl en 4 configuraciones y ampliamos nuestra capacidad de manejo de desechos industriales bajo el Decreto 2635, atendiendo operaciones en locaciones remotas del Estado Zulia.",
  },
  {
    year: "2026",
    title: "Nueva generación de equipos",
    body: "Incorporamos unidades vacuum semirremolque de última generación, fabricadas en 2026 con acero A36 de 8 mm, compresor NVE Challenger 607 y motor Isuzu 4BD1. Equipamiento 100% propio y certificado.",
  },
  {
    year: "Hoy",
    title: "5 servicios, una sola empresa",
    body: "Ofrecemos 5 líneas de servicio especializadas — bombeo, vacuum, Frac Tanks, manejo de desechos e inyección de vapor — cubriendo toda la cadena operativa de manejo de fluidos en el sector petrolero.",
  },
];

export default function NosotrosClient() {
  const heroRef   = useRef<HTMLDivElement>(null);
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
          className="pt-36 pb-24 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #eef7f1 0%, #ffffff 60%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(26,140,60,0.06) 0%, transparent 70%)" }} />
          <div className="site-container">
            <div ref={heroRef}>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-[#6e6e73] mb-10">
                <Link href="/" className="hover:text-[#1a8c3c] transition-colors">Inicio</Link>
                <span>/</span>
                <span className="text-[#1d1d1f] font-medium">Nosotros</span>
              </nav>
              <div className="section-label mb-5">Quiénes Somos</div>
              <h1 className="text-[clamp(40px,5.5vw,72px)] font-bold tracking-tight leading-[1.05] text-[#1d1d1f] mb-6 max-w-3xl">
                Una empresa construida sobre la confianza del campo.
              </h1>
              <p className="text-[18px] text-[#6e6e73] leading-relaxed max-w-2xl mb-10">
                Soluciones Delta, C.A. es una empresa venezolana especializada en servicios técnicos para la industria petrolera. Nacimos en Zulia, operamos en Zulia y conocemos cada condición que el campo puede presentar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contacto" className="btn-primary">
                  Trabajar con nosotros
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/#servicios" className="btn-secondary">Ver servicios</Link>
              </div>
            </div>
          </div>
        </section>

        <div ref={sectionRef} className="site-container py-20 space-y-24">

          {/* ── ABOUT TEXT + DATA ── */}
          <div className="animate-in grid lg:grid-cols-2 gap-14 items-start">
            <div className="space-y-6">
              <h2 className="text-[clamp(26px,3.5vw,40px)] font-bold text-[#1d1d1f] leading-tight">
                Más de una década al servicio del sector petrolero venezolano
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

          {/* ── TIMELINE ── */}
          <div className="animate-in">
            <div className="section-label mb-10">Historia y Evolución</div>
            <div className="relative">
              {/* vertical line desktop */}
              <div className="hidden lg:block absolute left-[120px] top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, #e5e5ea 10%, #e5e5ea 90%, transparent)" }} />
              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={i} className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                    <div className="lg:w-[120px] flex-shrink-0 flex lg:flex-col lg:items-end items-center gap-3">
                      <div className="hidden lg:block w-3 h-3 rounded-full border-2 border-[#1a8c3c] bg-white relative z-10 -mr-[7px]" />
                      <span className="text-[13px] font-bold text-[#1a8c3c] tracking-wide uppercase">{item.year}</span>
                    </div>
                    <div className="flex-1 pb-4">
                      <h3 className="text-[18px] font-bold text-[#1d1d1f] mb-3">{item.title}</h3>
                      <p className="text-[15px] text-[#6e6e73] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── VALUES ── */}
          <div className="animate-in">
            <div className="section-label mb-10">Nuestros Valores</div>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl flex gap-5"
                  style={{ background: "#f9f9fb", border: "1.5px solid #ebebef" }}
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
          </div>

          {/* ── CTA ── */}
          <div
            className="animate-in rounded-3xl px-10 py-14 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0d1f14 0%, #0a1a10 100%)" }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(26,140,60,0.2) 0%, transparent 70%)" }} />
            <div className="relative">
              <h2 className="text-[clamp(26px,4vw,44px)] font-bold text-white mb-4">
                ¿Tiene un proyecto en mente?
              </h2>
              <p className="text-[16px] text-white/55 max-w-lg mx-auto mb-8 leading-relaxed">
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
                  0424-6472446
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
