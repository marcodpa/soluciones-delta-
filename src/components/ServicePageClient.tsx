"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ServiceData } from "@/lib/services-data";
import type { RelatedService } from "@/lib/related-services";
import { getServicePageContent } from "@/lib/service-page-content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DescargarServicioPDF = dynamic(
  () => import("@/components/ServicesCatalogoPDF").then(m => m.DescargarServicioPDF),
  { ssr: false }
);

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_HERO = "/vacuum-truck.webp";

export default function ServicePageClient({ service, relatedServices }: { service: ServiceData; relatedServices: RelatedService[] }) {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const content = getServicePageContent(service.slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children as unknown as Element[],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.2 }
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

  const hero = content?.hero ?? { kind: "single" as const, src: FALLBACK_HERO };
  const eyebrow = content?.eyebrow ?? service.tag;
  const headline = content?.headline ?? service.heading ?? service.title;

  return (
    <>
      <Navbar />
      <main>
        {/* ── BACK BUTTON (mobile only) ── */}
        <div className="lg:hidden fixed top-20 left-4 z-40">
          <button
            onClick={() => window.history.length > 1 ? router.back() : router.push("/servicios")}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-[#1d1d1f] transition-all duration-200 active:scale-95"
            style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", border: "1.5px solid rgba(0,0,0,0.1)", boxShadow: "0 2px 12px rgba(0,0,0,0.10)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver
          </button>
        </div>

        {/* ── HERO: foto a pantalla completa (partida antes/después cuando hay evidencia) ── */}
        <section className="relative overflow-hidden bg-black flex flex-col justify-end" style={{ minHeight: "clamp(560px, 78vh, 800px)" }}>
          {hero.kind === "split" ? (
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="relative overflow-hidden">
                <Image src={hero.antes} alt={`${service.title} — antes`} fill priority className="object-cover" sizes="50vw" />
                <span className="absolute left-4 top-24 sm:left-8 sm:top-28 px-4 py-2 rounded-full text-[11px] sm:text-[12px] font-bold tracking-[0.18em] text-white" style={{ background: "rgba(0,0,0,0.6)" }}>ANTES</span>
              </div>
              <div className="relative overflow-hidden" style={{ borderLeft: "3px solid #30d158" }}>
                <Image src={hero.despues} alt={`${service.title} — después`} fill priority className="object-cover" sizes="50vw" />
                <span className="absolute right-4 top-24 sm:right-8 sm:top-28 px-4 py-2 rounded-full text-[11px] sm:text-[12px] font-bold tracking-[0.18em] text-white" style={{ background: "#1a8c3c" }}>DESPUÉS</span>
              </div>
            </div>
          ) : (
            <Image src={hero.src} alt={`${service.title} — Soluciones Delta C.A.`} fill priority className="object-cover" sizes="100vw" />
          )}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(2,8,4,0.45) 0%, rgba(2,8,4,0.08) 30%, rgba(2,8,4,0.55) 62%, rgba(2,8,4,0.95) 100%)" }} />

          <div className="site-container relative w-full">
            <div ref={heroRef} className="pt-40 pb-12 lg:pb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="flex flex-col gap-4 max-w-3xl">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-white/50">
                  <Link href="/" className="hover:text-[#30d158] transition-colors">Inicio</Link>
                  <span>/</span>
                  <Link href="/servicios" className="hover:text-[#30d158] transition-colors">Servicios</Link>
                </nav>
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#30d158]">{eyebrow}</span>
                <h1 className="text-[clamp(34px,4.6vw,60px)] font-bold tracking-tight leading-[1.04] text-white" style={{ textWrap: "balance" }}>
                  {headline}
                </h1>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="#contacto-servicio" className="btn-primary">
                  Solicitar este servicio
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <DescargarServicioPDF service={service} />
              </div>
            </div>
          </div>
        </section>

        <div ref={contentRef} className="site-container py-4">

          {/* ── DESCRIPCIÓN GENERAL ── */}
          <section className="animate-in grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-16 lg:py-20 border-b" style={{ borderColor: "#e5e5ea" }}>
            <div className="flex flex-col gap-3">
              <h2 className="section-label">Descripción General</h2>
              <p className="text-[clamp(24px,2.4vw,30px)] font-bold tracking-tight leading-[1.15] text-[#1d1d1f]" style={{ textWrap: "balance" }}>
                {content?.subtitle ?? service.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-5 max-w-3xl">
              <p className="text-[18px] text-[#3a3a3c] leading-[1.7]">{service.overview}</p>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed">
                Atendemos solicitudes para operaciones en Venezuela desde San Francisco, Estado Zulia.
                La movilización, disponibilidad y alcance del servicio se coordinan según la ubicación
                y las condiciones del proyecto. <Link href="/contacto" className="text-[#1a8c3c] underline underline-offset-4">Consulte su operación con nuestro equipo.</Link>
              </p>
            </div>
          </section>

          {/* ── CÓMO TRABAJAMOS: 3 pasos con foto ── */}
          {content && (
            <section className="animate-in py-16 lg:py-20 flex flex-col gap-9">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="text-[clamp(28px,3.2vw,38px)] font-bold tracking-tight leading-[1.1] text-[#1d1d1f] max-w-md" style={{ textWrap: "balance" }}>Cómo trabajamos</h2>
                <p className="text-[16px] text-[#6e6e73] leading-relaxed max-w-md">{content.stepsIntro}</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {content.steps.map((step, i) => (
                  <article key={i} className="flex flex-col gap-3.5">
                    <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                      <Image src={step.src} alt={step.title} fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-[10px] flex items-center justify-center text-[14px] font-extrabold text-white flex-shrink-0" style={{ background: "#1a8c3c" }}>{i + 1}</span>
                      <h3 className="text-[19px] font-bold text-[#1d1d1f] leading-tight">{step.title}</h3>
                    </div>
                    <p className="text-[15px] text-[#6e6e73] leading-relaxed">{step.text}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* ── CIFRAS ── */}
          {content && (
            <section className="animate-in rounded-3xl px-8 py-10 lg:px-16 lg:py-11 grid grid-cols-2 lg:grid-cols-4 gap-8" style={{ background: "#0d1f14" }}>
              {content.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-[clamp(30px,3.2vw,40px)] font-extrabold tracking-tight leading-none" style={{ color: stat.highlight ? "#30d158" : "#ffffff", fontVariantNumeric: "tabular-nums" }}>{stat.value}</span>
                  <span className="text-[12px] font-semibold tracking-[0.12em] uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>{stat.label}</span>
                </div>
              ))}
            </section>
          )}

          {/* ── CIERRE ── */}
          {content && (
            <section className="animate-in grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-24">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                <Image src={content.closing.src} alt={content.closing.heading} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="section-label">{content.closing.label}</h2>
                <p className="text-[clamp(28px,3vw,36px)] font-bold tracking-tight leading-[1.12] text-[#1d1d1f]" style={{ textWrap: "balance" }}>{content.closing.heading}</p>
                <p className="text-[17px] text-[#6e6e73] leading-relaxed max-w-lg">{content.closing.text}</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a href="#contacto-servicio" className="btn-primary">Solicitar cotización</a>
                  <a href="https://wa.me/584246472446" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold text-[#1d1d1f]" style={{ border: "1.5px solid #e5e5ea" }}>
                    +58 424-6472446
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* ── PREGUNTAS FRECUENTES (plegadas) ── */}
          <section className="animate-in py-4 pb-16 flex flex-col gap-5">
            <h2 className="section-label">Preguntas Frecuentes</h2>
            <div className="flex flex-col gap-3 max-w-3xl">
              {service.faq.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </section>

          {/* ── SERVICIOS COMPLEMENTARIOS ── */}
          {relatedServices.length > 0 && (
            <section id="servicios-complementarios" aria-labelledby="related-services-title" className="animate-in pb-16">
              <h2 id="related-services-title" className="section-label mb-5">Servicios que complementan esta operación</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedServices.map(related => (
                  <Link key={related.slug} href={`/servicios/${related.slug}`} className="block rounded-2xl p-6 transition-colors hover:border-[#1a8c3c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a8c3c]" style={{ border: "1.5px solid #e5e5ea" }}>
                    <h3 className="text-[17px] font-bold text-[#1d1d1f] mb-2">{related.title}</h3>
                    <p className="text-[14px] text-[#6e6e73] leading-relaxed">{related.description}</p>
                    <span className="inline-block text-[#1a8c3c] font-semibold text-[14px] mt-4" aria-hidden="true">Ver servicio →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── CTA ── */}
          <div
            id="contacto-servicio"
            className="animate-in rounded-3xl p-10 text-center relative overflow-hidden mb-16"
            style={{ background: "linear-gradient(135deg, #0d1f14 0%, #0a1a10 100%)" }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 110%, rgba(26,140,60,0.25) 0%, transparent 65%)" }} />
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(48,209,88,0.35), transparent)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#30d158]">¿Listo para comenzar?</span>
              </div>
              <h2 className="text-[clamp(24px,3.5vw,40px)] font-bold text-white mb-4">
                Solicite una cotización para<br />
                <span style={{ background: "linear-gradient(135deg,#30d158 0%,#1a8c3c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{service.title}</span>
              </h2>
              <p className="text-[16px] mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
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
                <a
                  href="https://wa.me/584246472446"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold text-white justify-center"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.18)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 2h3l1.5 4-2 1.5a10 10 0 004 4L12 9.5l4 1.5v3a2 2 0 01-2 2C6 16 2 10 2 4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  +58 424-6472446
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

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl overflow-hidden bg-white" style={{ border: "1.5px solid #e5e5ea" }}>
      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
        <span className="text-[15px] font-semibold text-[#1d1d1f] pr-4">{q}</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
          <path d="M4 7l5 5 5-5" stroke="#1a8c3c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </summary>
      <div className="px-6 pb-6 -mt-1">
        <p className="text-[14.5px] text-[#6e6e73] leading-relaxed">{a}</p>
      </div>
    </details>
  );
}
