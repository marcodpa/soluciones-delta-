"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const serviceOptions = [
  "Bombeo de Transferencia (Carga/Descarga de Crudo)",
  "Trasegado con Vacuum",
  "Suministro de Frac Tanks 500 Bbl",
  "Manejo de Desechos Industriales",
  "Alquiler de Calderas / Inyección de Vapor",
  "Otro / Consulta General",
];

const contactCards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 3h3.5l1.5 4.5-2 1.5a9 9 0 004.5 4.5L14 11l4.5 1.5V16a1.5 1.5 0 01-1.5 1.5C6.5 17.5 3.5 10 3.5 4.5A1.5 1.5 0 015 3z" stroke="#1a8c3c" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Teléfono / WhatsApp",
    value: "0424-6472446",
    href: "tel:04246472446",
    sub: "Emergencias: disponible 24/7",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M3 8l8 5 8-5" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Correo Electrónico",
    value: "solucionesdeltaca@gmail.com",
    href: "mailto:solucionesdeltaca@gmail.com",
    sub: "Respuesta en menos de 2 horas hábiles",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="9" r="3" stroke="#1a8c3c" strokeWidth="1.5"/>
        <path d="M11 2C7.134 2 4 5.134 4 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.866-3.134-7-7-7z" stroke="#1a8c3c" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Ubicación",
    value: "San Francisco, Estado Zulia",
    href: "https://maps.google.com/?q=San+Francisco+Zulia+Venezuela",
    sub: "Calle 13 con Av 5, Local 26A-162, Of. 2, Sector Manzanillo",
  },
];

const schedule = [
  { day: "Lunes — Viernes",  hours: "7:00 AM – 6:00 PM" },
  { day: "Sábados",          hours: "8:00 AM – 2:00 PM" },
  { day: "Domingos / Feriados", hours: "Solo emergencias" },
  { day: "Emergencias",      hours: "24 / 7", highlight: true },
];

const inputBase = "w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200";

export default function ContactoClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [inputStyles, setInputStyles] = useState<Record<string, React.CSSProperties>>({});

  const baseStyle: React.CSSProperties = { background: "#f5f5f7", border: "1.5px solid #e5e5ea", color: "#1d1d1f" };
  const focusedStyle: React.CSSProperties = { background: "#fff", border: "1.5px solid rgba(26,140,60,0.5)", boxShadow: "0 0 0 3px rgba(26,140,60,0.08)", color: "#1d1d1f" };

  const getStyle = (key: string) => inputStyles[key] ?? baseStyle;
  const onFocus = (key: string) => setInputStyles(s => ({ ...s, [key]: focusedStyle }));
  const onBlur  = (key: string) => setInputStyles(s => ({ ...s, [key]: baseStyle }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children as unknown as Element[],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.3 }
      );
      ScrollTrigger.create({
        trigger: formRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(formRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }),
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Solicitud de Servicio: ${form.service || "Consulta"}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmpresa: ${form.company}\nTeléfono: ${form.phone}\nEmail: ${form.email}\nServicio: ${form.service}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:solucionesdeltaca@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section
          className="pt-36 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #f0f4ff 0%, #ffffff 60%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(26,140,60,0.05) 0%, transparent 70%)" }} />
          <div className="site-container">
            <div ref={heroRef}>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-[#6e6e73] mb-10">
                <Link href="/" className="hover:text-[#1a8c3c] transition-colors">Inicio</Link>
                <span>/</span>
                <span className="text-[#1d1d1f] font-medium">Contacto</span>
              </nav>
              <div className="section-label mb-5">Contacto</div>
              <h1 className="text-[clamp(40px,5.5vw,72px)] font-bold tracking-tight leading-[1.05] text-[#1d1d1f] mb-5 max-w-3xl">
                Hablemos de su<br />
                <span className="text-gradient">próxima operación.</span>
              </h1>
              <p className="text-[18px] text-[#6e6e73] leading-relaxed max-w-xl">
                Cuéntenos su necesidad y nuestro equipo técnico le responderá con una solución concreta en menos de 2 horas hábiles.
              </p>
            </div>
          </div>
        </section>

        {/* ── CONTENT ── */}
        <div ref={formRef} className="site-container py-16">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── FORM ── */}
            <div className="lg:col-span-3">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] text-[#6e6e73] mb-2 tracking-widest uppercase font-semibold">Nombre Completo *</label>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Juan Pérez"
                        className={inputBase}
                        style={getStyle("name")}
                        onFocus={() => onFocus("name")}
                        onBlur={() => onBlur("name")}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#6e6e73] mb-2 tracking-widest uppercase font-semibold">Empresa</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        placeholder="Nombre de la empresa"
                        className={inputBase}
                        style={getStyle("company")}
                        onFocus={() => onFocus("company")}
                        onBlur={() => onBlur("company")}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] text-[#6e6e73] mb-2 tracking-widest uppercase font-semibold">Teléfono</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="04XX-XXXXXXX"
                        className={inputBase}
                        style={getStyle("phone")}
                        onFocus={() => onFocus("phone")}
                        onBlur={() => onBlur("phone")}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#6e6e73] mb-2 tracking-widest uppercase font-semibold">Correo Electrónico</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="correo@empresa.com"
                        className={inputBase}
                        style={getStyle("email")}
                        onFocus={() => onFocus("email")}
                        onBlur={() => onBlur("email")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#6e6e73] mb-2 tracking-widest uppercase font-semibold">Servicio Requerido *</label>
                    <div className="relative">
                      <select
                        required
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className={`${inputBase} appearance-none cursor-pointer pr-10`}
                        style={getStyle("service")}
                        onFocus={() => onFocus("service")}
                        onBlur={() => onBlur("service")}
                      >
                        <option value="">Seleccionar servicio...</option>
                        {serviceOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="#6e6e73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#6e6e73] mb-2 tracking-widest uppercase font-semibold">Descripción de la Operación</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Describa brevemente la ubicación, tipo de fluido, volumen aproximado y cualquier detalle relevante que nos ayude a preparar una cotización precisa..."
                      className={`${inputBase} resize-none`}
                      style={getStyle("message")}
                      onFocus={() => onFocus("message")}
                      onBlur={() => onBlur("message")}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-4 text-[15px]">
                    Enviar Solicitud
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2.5 9h13M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <p className="text-[12px] text-[#6e6e73] text-center mt-2">
                    Al enviar, se abrirá su cliente de correo con los datos prellenados.
                  </p>
                </form>
              ) : (
                <div
                  className="rounded-2xl p-14 text-center"
                  style={{ background: "#f9f9fb", border: "1.5px solid #ebebef" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(26,140,60,0.1)", border: "1px solid rgba(26,140,60,0.25)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M6 14l6 6L22 8" stroke="#1a8c3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">¡Solicitud enviada!</h3>
                  <p className="text-[15px] text-[#6e6e73] mb-6">
                    Su cliente de correo debería haberse abierto. Si no, llámenos directamente.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a href="tel:04246472446" className="btn-primary">
                      Llamar ahora
                    </a>
                    <button onClick={() => setSubmitted(false)} className="btn-secondary">
                      Nueva solicitud
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ── SIDEBAR INFO ── */}
            <div className="lg:col-span-2 space-y-4">
              {contactCards.map((card, i) => (
                <a
                  key={i}
                  href={card.href}
                  className="flex items-start gap-4 p-5 rounded-2xl group transition-all duration-200"
                  style={{
                    background: "#f9f9fb",
                    border: "1.5px solid #ebebef",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(26,140,60,0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ebebef";
                    (e.currentTarget as HTMLAnchorElement).style.background = "#f9f9fb";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(26,140,60,0.08)", border: "1px solid rgba(26,140,60,0.15)" }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-[#6e6e73] mb-1 font-semibold tracking-widest uppercase">{card.label}</div>
                    <div className="text-[14px] font-bold text-[#1d1d1f] group-hover:text-[#1a8c3c] transition-colors mb-1">{card.value}</div>
                    <div className="text-[12px] text-[#6e6e73]">{card.sub}</div>
                  </div>
                </a>
              ))}

              {/* Schedule */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "#f9f9fb", border: "1.5px solid #ebebef" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-[#1a8c3c] animate-pulse" />
                  <span className="text-[13px] font-bold text-[#1d1d1f]">Horario de atención</span>
                </div>
                <div className="space-y-3">
                  {schedule.map((row, i) => (
                    <div key={i} className="flex justify-between items-center text-[13px]" style={{ borderBottom: i < schedule.length - 1 ? "1px solid #f0f0f0" : "none", paddingBottom: i < schedule.length - 1 ? "10px" : "0" }}>
                      <span className="text-[#6e6e73]">{row.day}</span>
                      <span className={row.highlight ? "text-[#1a8c3c] font-bold" : "text-[#1d1d1f] font-semibold"}>{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIF badge */}
              <div
                className="p-5 rounded-2xl flex items-center gap-4"
                style={{ background: "rgba(26,140,60,0.04)", border: "1.5px solid rgba(26,140,60,0.15)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(26,140,60,0.1)" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L3 5v4c0 4.2 3 8.1 7 9 4-0.9 7-4.8 7-9V5L10 2z" stroke="#1a8c3c" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M7 10l2 2 4-4" stroke="#1a8c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[12px] text-[#6e6e73] mb-0.5">Empresa registrada</div>
                  <div className="text-[14px] font-bold text-[#1d1d1f]">RIF J-50735393-1</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
