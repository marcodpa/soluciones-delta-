"use client";

import { useEffect, useRef } from "react";
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

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(headerRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }),
      });
      ScrollTrigger.create({
        trigger: contentRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(contentRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }),
      });
      ScrollTrigger.create({
        trigger: statsRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(statsRef.current?.children as unknown as Element[],
          { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 }),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
      style={{ background: "#0d0d0f" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 60% at 100% 40%, rgba(26,140,60,0.09) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 40% at 0% 80%, rgba(48,209,88,0.04) 0%, transparent 60%)" }} />
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

      <div className="site-container relative">

        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <div className="section-label mb-4" style={{ color: "#30d158" }}>Quiénes Somos</div>
          <h2 className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight text-white leading-tight max-w-2xl">
            Expertos en el{" "}
            <span style={{ background: "linear-gradient(135deg,#30d158 0%,#1a8c3c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              sector petrolero venezolano.
            </span>
          </h2>
        </div>

        {/* Main 2-col layout */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-14 items-center mb-16">

          {/* Left — text */}
          <div className="space-y-5">
            <p className="text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              <strong className="text-white">Soluciones Delta, C.A.</strong> es una empresa venezolana especializada en servicios técnicos para la industria petrolera, con sede en San Francisco, Estado Zulia.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Nuestra filosofía: llegar al campo con soluciones, no con excusas. Bombeo, vacuum, almacenamiento, manejo de residuos e inyección de vapor — un solo proveedor para toda la cadena.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/nosotros" className="btn-primary">
                Conocer más
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contacto"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold text-white"
                style={{ background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.14)" }}
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Right — photo collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden row-span-2" style={{ minHeight: 300 }}>
              <Image
                src="/vacuum/vacuum-truck-howo-pdvsa.jpg"
                alt="Vacuum truck en operación — Locación PDVSA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[11px] font-semibold text-white/80">Vacuum — Locación PDVSA</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 145 }}>
              <Image
                src="/frac-tanks/frac-tank-nuevo.png"
                alt="Frac Tank — Soluciones Delta"
                fill
                className="object-cover"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-2.5 left-3">
                <span className="text-[10px] font-semibold text-white/80">Frac Tank</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 145 }}>
              <Image
                src="/vapor/caldera-otsg-semirremolque.jpg"
                alt="Generador de Vapor OTSG"
                fill
                className="object-cover"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-2.5 left-3">
                <span className="text-[10px] font-semibold text-white/80">Generador de Vapor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="px-7 py-6 flex flex-col gap-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRight: i < highlights.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <div className="text-[26px] font-bold text-white leading-none tracking-tight">{h.stat}</div>
              <div className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>{h.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
