"use client";

import typography from "./HomeTypography.module.css";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(
          sectionRef.current?.querySelectorAll(".cta-animate") as unknown as Element[],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }
        ),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 pb-24 relative overflow-hidden" style={{ background: "#f5f5f7" }}>
      <div className="site-container">
        <div
          className="rounded-3xl px-10 py-20 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a1a10 0%, #0e2416 50%, #071410 100%)" }}
        >
          {/* Glow rings */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 55% 60% at 50% 110%, rgba(48,209,88,0.22) 0%, transparent 65%)" }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 30% 30% at 80% 20%, rgba(26,140,60,0.1) 0%, transparent 60%)" }} />

          {/* Top line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(48,209,88,0.4), transparent)" }} />

          {/* Dot grid overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }} />

          <div className="relative">
            <div className="cta-animate flex items-center justify-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
              <span className={`${typography.eyebrow} text-[#30d158]`}>Disponibles ahora · 24/7</span>
            </div>

            <h2 className={`${typography.sectionTitle} cta-animate text-white mb-5`}>
              ¿Tiene una operación{" "}
              <span style={{
                background: "linear-gradient(135deg,#30d158 0%,#1a8c3c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                en campo?
              </span>
            </h2>

            <p className="cta-animate text-[16px] max-w-lg mx-auto leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              Nuestro equipo técnico responde en menos de 2 horas hábiles. Para emergencias, operamos las 24 horas del día, los 7 días de la semana.
            </p>

            <div className="cta-animate flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contacto" className="btn-primary">
                Solicitar cotización
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="https://wa.me/584246472446"
                className="flex items-center gap-3 px-7 py-3.5 rounded-full text-[15px] font-semibold text-white transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.14)" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255,255,255,0.12)";
                  el.style.borderColor = "rgba(255,255,255,0.25)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255,255,255,0.07)";
                  el.style.borderColor = "rgba(255,255,255,0.14)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 2h2.5l1 3-1.5 1a7.5 7.5 0 003.5 3.5L10 8l3 1v2.5A1.5 1.5 0 0111.5 13C5.1 13 2 9 2 3.5A1.5 1.5 0 013 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
                +58 424-6472446
              </a>
            </div>

            {/* Trust strip */}
            <div className="cta-animate flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-14 pt-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {["RIF J-50735393-1", "San Francisco, Edo. Zulia", "Operación 24/7", "Flota propia 2026"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-medium"
                  style={{ color: "rgba(255,255,255,0.28)" }}>
                  <span className="w-1 h-1 rounded-full bg-[#30d158] opacity-60" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
