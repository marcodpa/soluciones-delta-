"use client";

import typography from "./HomeTypography.module.css";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { stat: "100%", label: "Cumplimiento en todos los contratos" },
  { stat: "1,500", label: "Bbl/día de capacidad demostrada" },
  { stat: "24/7", label: "Operación continua" },
];

const slides = [
  {
    src: "/vacuum/vacuum-truck-howo-pdvsa.webp",
    caption: "Unidad Vacuum 160 Bbl en operación — Locación PDVSA",
  },
  {
    src: "/frac-tanks/bateria-frac-tanks.webp",
    caption: "Frac Tank — Almacenamiento de fluidos en campo para operaciones de fracturamiento hidráulico y manejo de residuos",
  },
  {
    src: "/vapor/caldera-otsg-semirremolque.webp",
    caption: "Servicio de inyección de vapor a pozos y patio de tanques",
  },
  {
    src: "/fosas/fosa-1-despues.jpg",
    caption: "Recuperación de crudo en fosas — Pasivo ambiental saneado con recuperación térmica",
  },
  {
    src: "/hidrojet/unidad-hidrojet-campo.png",
    caption: "Unidad Hydrojet 20.000 / 40.000 PSI — Limpieza industrial y preparación de superficies",
  },
  {
    src: "/bombeo/equipo-principal.webp",
    caption: "Servicio de desnatado y recuperación superficial de hidrocarburos",
  },
];

const GAP_PCT = 1; // margin at each side of a slide, in % of container width

export default function AboutSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headerRef   = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(1);
  const [containerW, setContainerW] = useState(0);
  const [slidePct, setSlidePct] = useState(58);

  const measure = useCallback(() => {
    const w = carouselRef.current?.offsetWidth ?? 0;
    setContainerW(w);
    setSlidePct(w > 0 && w < 768 ? 78 : 44);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (carouselRef.current) ro.observe(carouselRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [measure]);

  const prev = useCallback(() => setIndex(i => (i - 1 + slides.length) % slides.length), []);
  const next = useCallback(() => setIndex(i => (i + 1) % slides.length), []);

  // Auto-advance
  useEffect(() => {
    const t = setTimeout(next, 7000);
    return () => clearTimeout(t);
  }, [index, next]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(headerRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }),
      });
      ScrollTrigger.create({
        trigger: carouselRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(carouselRef.current,
          { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }),
      });
      ScrollTrigger.create({
        trigger: statsRef.current, start: "top 92%", once: true,
        onEnter: () => gsap.fromTo(statsRef.current?.children as unknown as Element[],
          { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 }),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const step = slidePct + GAP_PCT * 2;                       // outer width of one slide, % of container
  const offsetPx = containerW * ((100 - step) / 2 - index * step) / 100;

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="pt-28 pb-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #eef1f0 0%, #ffffff 42%)" }}
    >
      {/* Subtle top green line */}
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,rgba(26,140,60,0.15),transparent)" }} />

      {/* ── HEADER (centered) ── */}
      <div className="site-container relative">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14">
          <div className={`${typography.eyebrow} text-[#1a8c3c] mb-4`}>Quiénes Somos</div>
          <h2 className={`${typography.sectionTitle} text-[#1d1d1f] mb-6`}>
            Expertos en el{" "}
            <span style={{ background: "linear-gradient(135deg,#30d158 0%,#1a8c3c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              sector petrolero
            </span>{" "}
            venezolano.
          </h2>
          <p className="text-[16px] leading-relaxed mx-auto" style={{ color: "#6e6e73" }}>
            <strong className="text-[#1d1d1f]">Soluciones Delta, C.A.</strong> es una empresa venezolana especializada en
            servicios petroleros e industriales, con sede en San Francisco, Estado Zulia.
            Atendemos solicitudes de proyectos en Venezuela: bombeo de crudo, transporte con vacuum,
            almacenamiento en Frac Tanks, manejo de desechos, inyección de vapor y limpieza con hydrojet.
            Coordinamos los equipos y el personal según el alcance y la ubicación de cada operación.
          </p>
        </div>
      </div>

      {/* ── CAROUSEL (full-bleed) ── */}
      <div ref={carouselRef} className="relative w-full overflow-hidden mb-6">
        <div
          className="flex items-center"
          style={{
            transform: `translateX(${offsetPx}px)`,
            transition: "transform 650ms cubic-bezier(0.32, 0.72, 0.28, 1)",
          }}
        >
          {slides.map((s, i) => {
            const active = i === index;
            return (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-3xl overflow-hidden"
                style={{
                  width: `${slidePct}%`,
                  margin: `0 ${GAP_PCT}%`,
                  aspectRatio: "16 / 9",
                  transform: active ? "scale(1)" : "scale(0.92)",
                  opacity: active ? 1 : 0.55,
                  transition: "transform 650ms cubic-bezier(0.32,0.72,0.28,1), opacity 650ms ease",
                  boxShadow: active ? "0 24px 60px rgba(0,0,0,0.18)" : "0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src={s.src}
                  alt={s.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 86vw, 58vw"
                  priority={i === index}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p
                    className="text-[13px] sm:text-[16px] font-bold text-white leading-snug max-w-2xl"
                    style={{ opacity: active ? 1 : 0, transition: "opacity 400ms ease 250ms", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
                  >
                    {s.caption}
                  </p>
                </div>

                {/* Arrows — only on active slide */}
                {active && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Anterior"
                      className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
                      style={{ background: "#1a8c3c", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 3L5 8l5 5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      aria-label="Siguiente"
                      className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
                      style={{ background: "#1a8c3c", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3l5 5-5 5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? 22 : 8,
                height: 8,
                background: i === index ? "#1a8c3c" : "#d3d8d4",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── STATS + CTA ── */}
      <div className="site-container relative">
        <div
          ref={statsRef}
          className="grid grid-cols-3 rounded-2xl overflow-hidden mt-10"
          style={{ border: "1px solid #e5e5ea" }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="px-7 py-6 flex flex-col gap-1"
              style={{
                background: i % 2 === 0 ? "#ffffff" : "#fafafa",
                borderRight: i < highlights.length - 1 ? "1px solid #e5e5ea" : "none",
              }}
            >
              <div className="text-[26px] font-bold text-[#1d1d1f] leading-none tracking-tight">{h.stat}</div>
              <div className="text-[11px] font-medium text-[#6e6e73]">{h.label}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/nosotros" className="btn-primary">
            Conocer más sobre nosotros
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
