"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ServiceData } from "@/lib/services-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DescargarServicioPDF = dynamic(
  () => import("@/components/ServicesCatalogoPDF").then(m => m.DescargarServicioPDF),
  { ssr: false }
);

gsap.registerPlugin(ScrollTrigger);

const SERVICE_IMAGES: Record<string, string> = {
  "bombeo-de-crudo": "/bombeo/equipo-principal.png",
  "trasegado-vacuum": "/vacuum/vacuum-semirremolque.jpg",
  "frac-tanks": "/frac-tanks/frac-tank-nuevo.png",
  "manejo-de-desechos": "/vacuum-truck.jpg",
  "alquiler-calderas-inyeccion-vapor": "/vapor/caldera-otsg-semirremolque.jpg",
};

const SERVICE_GALLERY: Record<string, { src: string; caption: string }[]> = {
  "bombeo-de-crudo": [
    { src: "/bombeo/bomba-hidraulica-roja.jpg", caption: "Bomba Hidráulica — Motor y acople 6\"" },
  ],
  "trasegado-vacuum": [
    { src: "/vacuum/vacuum-truck-howo-pdvsa.jpg", caption: "Unidad Vacuum en operación — Locación PDVSA" },
    { src: "/vacuum/vacuum-semirremolque.jpg",    caption: "Semirremolque Vacuum 160 Bbl — Soluciones Delta" },
  ],
  "frac-tanks": [
    { src: "/frac-tanks/bateria-frac-tanks-2.jpg", caption: "Batería de Frac Tanks en locación — Estado Zulia" },
  ],
  "alquiler-calderas-inyeccion-vapor": [
    { src: "/vapor/generador-vapor-otsg.jpg",   caption: "Generador de Vapor OTSG — Campo Boscán" },
    { src: "/vapor/fosa-campo-boscan.jpg",       caption: "Extracción de crudo en fosa — Campo Boscán" },
    { src: "/vapor/fosa-pasivo-ambiental.jpg",   caption: "Fosa petrolizada — inicio de operación" },
    { src: "/vapor/fosa-extraccion.jpg",         caption: "Fosa — vista panorámica" },
    { src: "/vapor/campo-pozos.jpg",             caption: "Locación de pozos — Estado Zulia" },
  ],
};

export default function ServicePageClient({ service }: { service: ServiceData }) {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children as unknown as Element[],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.3 }
      );

      const sections = contentRef.current?.querySelectorAll(".animate-in");
      sections?.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }),
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* ── BACK BUTTON (mobile only) ── */}
        <div className="lg:hidden fixed top-20 left-4 z-40">
          <button
            onClick={() => window.history.length > 1 ? router.back() : router.push("/servicios")}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-[#1d1d1f] transition-all duration-200 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(12px)",
              border: "1.5px solid rgba(0,0,0,0.1)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver
          </button>
        </div>

        {/* ── HERO ── */}
        <section className="pt-28 pb-20 relative overflow-hidden min-h-[88vh] flex items-center">
          {/* Full-bleed background image */}
          <div className="absolute inset-0">
            <Image
              src={SERVICE_IMAGES[service.slug] || "/vacuum-truck.jpg"}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* heavy dark overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(3,9,5,0.97) 0%, rgba(5,14,8,0.95) 40%, rgba(5,14,8,0.78) 70%, rgba(5,14,8,0.60) 100%)" }} />
            {/* green radial glow */}
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 65% at 0% 55%, rgba(26,140,60,0.18) 0%, transparent 60%)" }} />
          </div>

          <div className="site-container relative z-10 w-full">
            <div ref={heroRef}>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-white/35 mb-10">
                <Link href="/" className="hover:text-[#30d158] transition-colors">Inicio</Link>
                <span>/</span>
                <Link href="/servicios" className="hover:text-[#30d158] transition-colors">Servicios</Link>
                <span>/</span>
                <span className="text-white/60 font-medium">{service.title}</span>
              </nav>

              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full" style={{ background: "rgba(26,140,60,0.18)", border: "1px solid rgba(48,209,88,0.25)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
                  <span className="text-[11px] font-bold text-[#30d158] tracking-widest uppercase">{service.tag}</span>
                </div>
                <h1 className="text-[clamp(38px,5.5vw,72px)] font-bold tracking-tight leading-[1.04] text-white mb-4">
                  {service.title}
                </h1>
                <p className="text-[19px] text-[#30d158] font-semibold mb-4">{service.subtitle}</p>
                <p className="text-[17px] text-white/50 leading-relaxed mb-10 max-w-xl">{service.summary}</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contacto-servicio" className="btn-primary">
                    Solicitar este servicio
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <DescargarServicioPDF service={service} />
                  <Link href="/servicios" className="btn-secondary-dark">
                    ← Todos los servicios
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 hidden lg:block">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-white"
                  style={{ background: "rgba(26,140,60,0.80)", backdropFilter: "blur(8px)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Soluciones Delta, C.A. — RIF J-50735393-1
                </div>
              </div>
            </div>
          </div>
        </section>

        <div ref={contentRef} className="site-container py-16 space-y-20">

          {/* ── OVERVIEW ── */}
          <div className="animate-in">
            <div className="max-w-3xl">
              <div className="section-label mb-3">Descripción General</div>
              <p className="text-[18px] text-[#3a3a3c] leading-relaxed">{service.overview}</p>
            </div>
          </div>

          {/* ── PHOTO GALLERY ── */}
          {SERVICE_GALLERY[service.slug] && (
            <div className="animate-in">
              <div className="section-label mb-6">Galería de Equipos y Operaciones</div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {SERVICE_GALLERY[service.slug].map((img, i) => (
                  <div
                    key={i}
                    className={`relative rounded-2xl overflow-hidden ${i === 0 ? "col-span-2 lg:col-span-1 row-span-2" : ""}`}
                    style={{ aspectRatio: i === 0 ? "4/3" : "4/3", minHeight: 180 }}
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[12px] font-semibold text-white">{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── CONTENT SECTIONS ── */}
          <div className="space-y-12">
            {service.sections.map((sec, i) => (
              <div key={i} className="animate-in grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
                      style={{ background: "#1a8c3c" }}
                    >
                      {i + 1}
                    </div>
                    <h2 className="text-[18px] font-bold text-[#1d1d1f] leading-tight">{sec.heading}</h2>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-4">{sec.body}</p>
                  {sec.list && (
                    <ul className="space-y-2.5">
                      {sec.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[14px] text-[#3a3a3c]">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                            <circle cx="8" cy="8" r="7" stroke="rgba(26,140,60,0.3)" strokeWidth="1"/>
                            <path d="M5 8l2 2 4-4" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── SPECS TABLE ── */}
          {service.specs && (
            <div className="animate-in">
              <div className="section-label mb-6">Especificaciones Técnicas</div>
              <div className="rounded-2xl overflow-hidden" style={{ border: "1.5px solid #e5e5ea", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {service.specs.map((sp, i) => (
                    <div
                      key={i}
                      className="p-5"
                      style={{
                        borderRight: (i + 1) % 4 !== 0 ? "1px solid #e5e5ea" : "none",
                        borderBottom: i < service.specs!.length - 4 ? "1px solid #e5e5ea" : "none",
                        background: i % 2 === 0 ? "#ffffff" : "#fafafa",
                      }}
                    >
                      <div className="text-[11px] text-[#6e6e73] mb-1 font-medium uppercase tracking-wide">{sp.label}</div>
                      <div className="text-[14px] font-bold text-[#1d1d1f]">{sp.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── BENEFITS ── */}
          <div className="animate-in">
            <div className="section-label mb-6">Ventajas del Servicio</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.benefits.map((b, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl glass-card"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(26,140,60,0.08)", border: "1px solid rgba(26,140,60,0.15)" }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d={b.icon} stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[15px] font-bold text-[#1d1d1f] mb-2">{b.title}</h3>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="animate-in">
            <div className="section-label mb-6">Preguntas Frecuentes</div>
            <div className="space-y-4 max-w-3xl">
              {service.faq.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            id="contacto-servicio"
            className="animate-in rounded-3xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(26,140,60,0.06) 0%, rgba(48,209,88,0.04) 100%)", border: "1.5px solid rgba(26,140,60,0.15)" }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1a8c3c] animate-pulse" />
              <span className="section-label">¿Listo para comenzar?</span>
            </div>
            <h2 className="text-[clamp(24px,3.5vw,40px)] font-bold text-[#1d1d1f] mb-4">
              Solicite una cotización para<br />
              <span className="text-gradient">{service.title}</span>
            </h2>
            <p className="text-[16px] text-[#6e6e73] mb-8 max-w-lg mx-auto">
              Nuestro equipo técnico responde en menos de 2 horas hábiles. Disponibles 24/7 para emergencias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:solucionesdeltaca@gmail.com" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 7l7 4 7-4" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Enviar solicitud por email
              </a>
              <a href="tel:04246472446" className="btn-secondary">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 2h3l1.5 4-2 1.5a10 10 0 004 4L12 9.5l4 1.5v3a2 2 0 01-2 2C6 16 2 10 2 4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                0424-6472446
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <details
      ref={detailsRef}
      className="group glass-card rounded-2xl overflow-hidden"
    >
      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none">
        <span className="text-[15px] font-semibold text-[#1d1d1f] pr-4">{q}</span>
        <div
          className="faq-icon w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors group-open:bg-[#1a8c3c]"
          style={{ background: "rgba(26,140,60,0.1)", border: "1px solid rgba(26,140,60,0.2)" }}
        >
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            className="transition-transform duration-300 group-open:rotate-45"
          >
            <path d="M7 2v10M2 7h10" strokeWidth="1.5" strokeLinecap="round" className="faq-path"/>
          </svg>
        </div>
      </summary>
      <div className="px-6 pb-6 -mt-1">
        <p className="text-[14px] text-[#6e6e73] leading-relaxed">{a}</p>
      </div>
    </details>
  );
}
