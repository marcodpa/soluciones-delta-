"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h20M14 4v20" stroke="#30d158" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="5" stroke="#30d158" strokeWidth="2"/>
        <path d="M4 14C4 8.477 8.477 4 14 4" stroke="#30d158" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3"/>
      </svg>
    ),
    title: "Bombeo de Transferencia",
    subtitle: "Carga y Descarga de Crudo",
    description:
      "Utilizamos bombas de desplazamiento positivo de tipo tornillo y lóbulos para el traslado eficiente de crudo pesado y extrapesado desde Frac Tanks hacia camiones cisterna y escuadras.",
    features: [
      "Bombas de tornillo y lóbulos",
      "Apta para crudo pesado/extrapesado",
      "Carga y descarga de Frac Tanks",
      "Operación continua 24/7",
    ],
    accent: "#30d158",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="10" width="20" height="12" rx="3" stroke="#30d158" strokeWidth="2"/>
        <path d="M4 14h20" stroke="#30d158" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5"/>
        <path d="M10 10V8a4 4 0 018 0v2" stroke="#30d158" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="16" r="2" fill="#30d158" opacity="0.7"/>
      </svg>
    ),
    title: "Trasegado con Vacuum",
    subtitle: "Unidades de Alto Vacío",
    description:
      "Servicio especializado de succión y transporte de fluidos de perforación, limpieza de tanques de almacenamiento, manejo de efluentes industriales y extracción de borras asfálticas con unidades de high vacuum.",
    features: [
      "Succión de fluidos de perforación",
      "Limpieza de tanques de almacenamiento",
      "High Vacuum Units certificadas",
      "Crudo pesado y extrapesado",
    ],
    accent: "#30d158",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="9" width="22" height="12" rx="3" stroke="#30d158" strokeWidth="2"/>
        <path d="M7 9V7h14v2" stroke="#30d158" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 9v12M20 9v12" stroke="#30d158" strokeWidth="1" opacity="0.4"/>
        <circle cx="11" cy="24" r="2.5" stroke="#30d158" strokeWidth="1.5"/>
        <circle cx="17" cy="24" r="2.5" stroke="#30d158" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Frac Tanks",
    subtitle: "Almacenamiento Especializado",
    description:
      "Suministro y operación de tanques de almacenamiento de 500 barriles en distintas configuraciones para adaptarse a las necesidades específicas de cada operación en campo.",
    features: [
      "V-Bottom para crudos con sedimentos",
      "Flat Bottom para fluidos limpios",
      "Aislados térmicamente (insulated)",
      "Gas Tight / Vapor Tight para H2S",
    ],
    accent: "#30d158",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l8 14H6L14 4z" stroke="#30d158" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 11v4M14 17v1" stroke="#30d158" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="24" r="1" fill="#30d158"/>
      </svg>
    ),
    title: "Manejo de Desechos",
    subtitle: "Gestión Ambiental Industrial",
    description:
      "Gestión integral y ambientalmente responsable de residuos generados en operaciones petroleras: lodos de perforación, aguas industriales, suelos contaminados y borras asfálticas.",
    features: [
      "Lodos y fluidos de perforación",
      "Aguas de producción salinas",
      "Suelos contaminados / ripios",
      "Borras asfálticas de Frac Tanks",
    ],
    accent: "#30d158",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children as unknown as Element[], {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.from(cards as unknown as Element[], {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(48,209,88,0.3) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="section-label mb-4">Nuestros Servicios</div>
          <h2 className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight text-white leading-tight mb-6">
            Soluciones técnicas para cada{" "}
            <span className="text-gradient">desafío operacional</span>
          </h2>
          <p className="text-[17px] text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            Desde la extracción hasta la disposición final, ofrecemos el servicio completo
            que la industria petrolera demanda con los más altos estándares de seguridad y eficiencia.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group cursor-default"
            >
              {/* Icon */}
              <div className="feature-icon mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <div className="section-label mb-2 opacity-70">{service.subtitle}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-[15px] text-[#86868b] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-[14px] text-[#aeaeb2]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <circle cx="7" cy="7" r="6" stroke="rgba(48,209,88,0.4)" strokeWidth="1"/>
                      <path d="M4.5 7l1.8 1.8L9.5 5.5" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Bottom border accent on hover */}
              <div
                className="mt-8 h-0.5 rounded-full transition-all duration-500 group-hover:opacity-100 opacity-0"
                style={{ background: "linear-gradient(90deg, #30d158, transparent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
