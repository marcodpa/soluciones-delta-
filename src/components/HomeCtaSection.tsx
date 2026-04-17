"use client";

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
    <section ref={sectionRef} className="py-8 pb-24 relative overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="site-container">
        <div
          className="rounded-3xl px-10 py-16 md:py-20 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d1f14 0%, #102918 50%, #0a1a10 100%)",
          }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(26,140,60,0.25) 0%, transparent 70%)" }} />
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(48,209,88,0.3), transparent)" }} />

          <div className="relative">
            <div className="cta-animate flex items-center justify-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#30d158]">Disponibles ahora</span>
            </div>

            <h2 className="cta-animate text-[clamp(32px,5vw,64px)] font-bold text-white tracking-tight leading-[1.06] mb-6">
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

            <p className="cta-animate text-[17px] text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
              Nuestro equipo técnico responde en menos de 2 horas hábiles. Para emergencias, operamos las 24 horas del día, los 7 días de la semana.
            </p>

            <div className="cta-animate flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contacto" className="btn-primary !bg-[#1a8c3c] hover:!bg-[#176b30]">
                Solicitar cotización
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="tel:04246472446"
                className="flex items-center gap-3 px-7 py-3.5 rounded-full text-[15px] font-semibold text-white transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.18)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 2h2.5l1 3-1.5 1a7.5 7.5 0 003.5 3.5L10 8l3 1v2.5A1.5 1.5 0 0111.5 13C5.1 13 2 9 2 3.5A1.5 1.5 0 013 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
                0424-6472446
              </a>
            </div>

            {/* Trust strip */}
            <div className="cta-animate flex flex-wrap items-center justify-center gap-6 mt-12 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                "RIF J-50735393-1",
                "San Francisco, Edo. Zulia",
                "Operación 24/7",
                "Flota propia 2026",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px] text-white/35 font-medium">
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
