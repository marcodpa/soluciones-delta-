"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "bombeo",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M4 14h5M19 14h5" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7.5 7.5l3.5 3.5M17 17l3.5 3.5M7.5 20.5l3.5-3.5M17 11l3.5-3.5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    tag: "Bombeo de Crudo",
    title: "Bombeo de Transferencia",
    subtitle: "Carga y Descarga de Crudo Pesado",
    summary: "Movilización eficiente de crudo pesado y extrapesado entre Frac Tanks, camiones cisterna y escuadras mediante bombas de desplazamiento positivo.",
    body: [
      {
        heading: "¿Qué hacemos?",
        text: "Ejecutamos operaciones de bombeo de transferencia (carga y descarga) de crudo, utilizando bombas de desplazamiento positivo especialmente seleccionadas para manejar crudos pesados y extrapesados de alta viscosidad, comunes en la Faja Petrolífera del Orinoco y el Estado Zulia.",
      },
      {
        heading: "Tecnología utilizada",
        text: "Empleamos bombas tipo tornillo (screw pumps) y de lóbulos (lobe pumps), diseñadas para mover fluidos viscosos con mínima turbulencia y sin emulsificación del crudo. Estas bombas garantizan un flujo laminar y caudal constante, evitando daños al producto.",
      },
      {
        heading: "Aplicaciones",
        text: "Transferencia desde Frac Tanks hacia camiones cisterna y escuadras de transporte. Carga de vagones de oleoducto. Descarga de camiones hacia tanques de almacenamiento. Recirculación de crudo para mantenimiento de temperatura. Operaciones de mezcla y dilución en campo.",
      },
    ],
    features: [
      "Bombas de tornillo de alta eficiencia",
      "Bombas de lóbulos para alta viscosidad",
      "Manejo de crudo API 8° – 22°",
      "Caudal regulable según necesidad operativa",
      "Mangueras y acoples certificados 4\"",
      "Operación continua 24/7",
      "Personal técnico especializado",
      "Movilización rápida a campo",
    ],
  },
  {
    id: "vacuum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="9" width="20" height="13" rx="3" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M4 13h20" stroke="#1a8c3c" strokeWidth="1" strokeDasharray="3 2" opacity="0.4"/>
        <path d="M10 9V7a4 4 0 018 0v2" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 16h2M13 16h2M17 16h2" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    tag: "Vacuum",
    title: "Trasegado con Vacuum",
    subtitle: "Servicio de Alto Vacío Industrial",
    summary: "Succión y transporte de fluidos industriales, limpieza de tanques, extracción de borras y efluentes con unidades vacuum de 160 Bbl de fabricación 2026.",
    body: [
      {
        heading: "¿Qué hacemos?",
        text: "Ofrecemos el servicio completo de trasegado mediante unidades vacuum propias, capaces de succionar, transportar y descargar fluidos industriales de alta densidad y viscosidad. Nuestro equipo cuenta con un semirremolque vacuum de 160 barriles fabricado en 2026, equipado con compresor NVE Challenger 607 y motor Isuzu 4BD1.",
      },
      {
        heading: "Términos técnicos del servicio",
        text: "Succión y transporte de fluidos de perforación. Limpieza de tanques de almacenamiento de crudo. Operación con unidades de alto vacío (High Vacuum Units). Trasegado de crudo pesado y extrapesado. Manejo de efluentes industriales y desechos peligrosos. Vacuum truck services para el sector oil & gas.",
      },
      {
        heading: "¿Para qué tipo de fluidos?",
        text: "El servicio está diseñado para fluidos de alta viscosidad, borras asfálticas, lodos de perforación y completación, aguas de producción con alto contenido de sólidos, residuos semisólidos de fondo de tanque y cualquier efluente industrial de difícil manejo por métodos convencionales.",
      },
    ],
    features: [
      "Unidad vacuum propia 160 Bbl (2026)",
      "Compresor NVE Challenger 607",
      "Motor Isuzu 4BD1",
      "Acero A36 — espesor 8 mm",
      "Conexiones entrada/salida 4\"",
      "Válvulas tipo mariposa certificadas",
      "Manómetro presión/vacío calibrado",
      "2 ejes masa americana",
    ],
  },
  {
    id: "fractanks",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="8" width="24" height="13" rx="3" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M6 8V6h16v2" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 8v13M14 8v13M21 8v13" stroke="#1a8c3c" strokeWidth="1" opacity="0.3"/>
        <circle cx="9" cy="24" r="2.5" stroke="#1a8c3c" strokeWidth="1.5"/>
        <circle cx="19" cy="24" r="2.5" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M11.5 24h5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    tag: "Almacenamiento",
    title: "Frac Tanks",
    subtitle: "Tanques de 500 Barriles Especializados",
    summary: "Suministro de Frac Tanks de 500 barriles en múltiples configuraciones, seleccionados según el tipo de fluido, temperatura operativa y condiciones de campo.",
    body: [
      {
        heading: "¿Qué es un Frac Tank?",
        text: "Los Frac Tanks son tanques portátiles de almacenamiento temporal utilizados en operaciones de campo petrolero. Son la solución estándar para almacenar crudo producido, fluidos de inyección, agua suavizada y residuos generados durante las operaciones.",
      },
      {
        heading: "Tipos disponibles",
        text: "V-Bottom Frac Tank: Ideal para crudos con alto contenido de sedimentos o lodos, ya que el fondo en 'V' facilita el vaciado total y la limpieza con unidad vacuum. Flat Bottom Frac Tank: Estándar para agua suavizada, agua de inyección de vapor y fluidos relativamente limpios. Insulated Frac Tanks (Aislados): Críticos para operaciones con vapor. Mantienen la temperatura del crudo trasegado para evitar que se solidifique y facilitar el bombeo. Gas Tight / Vapor Tight: Para almacenamiento de crudo con presencia de gases volátiles o H2S, previniendo emisiones fugitivas.",
      },
      {
        heading: "Capacidad y configuración",
        text: "Todos nuestros Frac Tanks tienen capacidad nominal de 500 barriles (79,500 litros). Se instalan sobre sus propias ruedas, facilitando la movilización entre locaciones. El acceso de mantenimiento y limpieza se realiza a través de nuestra unidad vacuum, garantizando el vaciado total y la reutilización del tanque.",
      },
    ],
    features: [
      "Capacidad: 500 barriles por unidad",
      "V-Bottom para sedimentos y lodos",
      "Flat Bottom para fluidos limpios",
      "Insulated para operaciones con vapor",
      "Gas Tight para fluidos con H2S",
      "Fácil movilización con lowboy",
      "Compatible con unidad vacuum",
      "Configuración múltiple en batería",
    ],
  },
  {
    id: "desechos",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8.477 3 4 7.477 4 13s4.477 10 10 10 10-4.477 10-10S19.523 3 14 3z" stroke="#1a8c3c" strokeWidth="2"/>
        <path d="M14 7v6l4 2" stroke="#1a8c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21l-3 3M19 21l3 3" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    tag: "Gestión Ambiental",
    title: "Manejo de Desechos",
    subtitle: "Gestión Integral de Residuos Industriales",
    summary: "Recolección, transporte y disposición responsable de todos los residuos generados en operaciones petroleras, desde lodos hasta borras asfálticas y suelos contaminados.",
    body: [
      {
        heading: "Tipos de desechos que manejamos",
        text: "Lodos de perforación y completación: generados al intervenir el pozo, contienen aditivos químicos y sólidos de formación que requieren manejo especializado. Aguas de producción e industriales: condensados de vapor mezclados con agua de formación, altamente salinas o con metales pesados disueltos. Suelos contaminados y ripios: residuos sólidos producto de derrames accidentales o limpieza de fosas de perforación. Borras asfálticas: el residuo sólido o semisólido que se deposita en el fondo de los Frac Tanks y tuberías de producción.",
      },
      {
        heading: "Proceso de gestión",
        text: "Evaluación del tipo y volumen de residuo en campo. Recolección segura con unidades vacuum certificadas. Transporte en unidades herméticas según normativa. Entrega a empresa de disposición final autorizada o tratamiento in-situ según el caso. Generación de manifiestos de residuos para trazabilidad.",
      },
      {
        heading: "Cumplimiento normativo",
        text: "Todas nuestras operaciones de manejo de desechos se realizan cumpliendo con la normativa ambiental venezolana (Decreto 2635 de Clasificación y Manejo de Desechos), garantizando la trazabilidad desde el origen hasta la disposición final y minimizando el impacto ambiental de las operaciones.",
      },
    ],
    features: [
      "Lodos de perforación y completación",
      "Aguas de producción y condensados",
      "Borras asfálticas de fondo de tanque",
      "Suelos contaminados y ripios",
      "Transporte en unidades herméticas",
      "Manifiestos de residuos con trazabilidad",
      "Cumplimiento Decreto 2635",
      "Coordinación con disposición final autorizada",
    ],
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden group cursor-default">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="feature-icon">{service.icon}</div>
          <span
            className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: "rgba(26,140,60,0.08)", color: "#1a8c3c", border: "1px solid rgba(26,140,60,0.15)" }}
          >
            {service.tag}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#1d1d1f] mb-1">{service.title}</h3>
        <div className="text-[13px] text-[#1a8c3c] font-semibold mb-4">{service.subtitle}</div>
        <p className="text-[15px] text-[#6e6e73] leading-relaxed">{service.summary}</p>

        <div className="mt-6 grid grid-cols-2 gap-2">
          {service.features.map((f, j) => (
            <div key={j} className="flex items-start gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                <circle cx="7" cy="7" r="6" stroke="rgba(26,140,60,0.3)" strokeWidth="1"/>
                <path d="M4.5 7l1.8 1.8L9.5 5.5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[13px] text-[#6e6e73] leading-tight">{f}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="mt-7 flex items-center gap-2 text-[13px] font-semibold transition-colors duration-200"
          style={{ color: open ? "#1a8c3c" : "#aeaeb2" }}
        >
          <span>{open ? "Ver menos" : "Ver descripción completa"}</span>
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            className="transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "1000px" : "0px" }}
      >
        <div
          className="mx-8 mb-8 rounded-2xl p-6 space-y-5"
          style={{ background: "rgba(26,140,60,0.03)", border: "1px solid rgba(26,140,60,0.1)" }}
        >
          {service.body.map((block, k) => (
            <div key={k}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-4 rounded-full bg-[#1a8c3c]" />
                <h4 className="text-[14px] font-semibold text-[#1d1d1f]">{block.heading}</h4>
              </div>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed pl-3">{block.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="h-0.5 transition-all duration-500 group-hover:opacity-100 opacity-0"
        style={{ background: "linear-gradient(90deg, #1a8c3c, transparent)" }}
      />
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children as unknown as Element[], {
        opacity: 0, y: 50, duration: 0.9, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });
      gsap.from(cardsRef.current?.children as unknown as Element[], {
        opacity: 0, y: 60, duration: 0.8, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="py-32 relative overflow-hidden" style={{ background: "#f5f5f7" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(26,140,60,0.25) 50%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.06) 50%, transparent 100%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-20">
          <div className="section-label mb-4">Nuestros Servicios</div>
          <h2 className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-6">
            Soluciones técnicas para cada{" "}
            <span className="text-gradient">desafío operacional</span>
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
            Desde la extracción hasta la disposición final, ofrecemos la cadena completa de servicios
            que la industria petrolera demanda. Haga clic en cada servicio para ver la descripción completa.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div
          className="mt-16 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, rgba(26,140,60,0.07) 0%, rgba(48,209,88,0.04) 100%)", border: "1px solid rgba(26,140,60,0.15)" }}
        >
          <div>
            <div className="text-[#1d1d1f] font-semibold text-lg mb-1">¿Necesita un servicio a medida?</div>
            <div className="text-[15px] text-[#6e6e73]">Contacte a nuestro equipo técnico y diseñamos la solución específica para su operación.</div>
          </div>
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary whitespace-nowrap flex-shrink-0"
          >
            Solicitar Cotización
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
