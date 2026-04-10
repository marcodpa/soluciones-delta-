"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceOptions = [
  "Bombeo de Transferencia (Carga/Descarga)",
  "Trasegado con Vacuum",
  "Suministro de Frac Tanks",
  "Manejo de Desechos Industriales",
  "Otro / Consulta General",
];

const inputStyle = {
  background: "#f5f5f7",
  border: "1px solid rgba(0,0,0,0.1)",
  color: "#1d1d1f",
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(headerRef.current?.children as unknown as Element[],
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }),
      });
      ScrollTrigger.create({
        trigger: formRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(formRef.current,
          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }),
      });
      ScrollTrigger.create({
        trigger: infoRef.current, start: "top 90%", once: true,
        onEnter: () => gsap.fromTo(infoRef.current?.children as unknown as Element[],
          { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 }),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Solicitud de Servicio: ${form.service || "Consulta"}`);
    const body = encodeURIComponent(`Nombre: ${form.name}\nEmpresa: ${form.company}\nTeléfono: ${form.phone}\nEmail: ${form.email}\nServicio: ${form.service}\n\nMensaje:\n${form.message}`);
    window.location.href = `mailto:solucionesdeltaca@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(26,140,60,0.5)";
    e.target.style.boxShadow = "0 0 0 3px rgba(26,140,60,0.07)";
    e.target.style.background = "#ffffff";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(0,0,0,0.1)";
    e.target.style.boxShadow = "none";
    e.target.style.background = "#f5f5f7";
  };

  return (
    <section id="contacto" ref={sectionRef} className="py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 50%, transparent 100%)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(26,140,60,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-20">
          <div className="section-label mb-4">Contacto</div>
          <h2 className="text-[clamp(32px,4.5vw,58px)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-4">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-relaxed">
            Cuéntenos sobre su operación. Nuestro equipo técnico está disponible para
            diseñar la solución más eficiente para su necesidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div ref={formRef} className="lg:col-span-3">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name", label: "Nombre Completo", placeholder: "Juan Pérez", type: "text", required: true },
                    { key: "company", label: "Empresa", placeholder: "Nombre de la empresa", type: "text", required: false },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-[12px] text-[#6e6e73] mb-2 tracking-wide uppercase font-medium">{f.label}</label>
                      <input
                        type={f.type}
                        required={f.required}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200"
                        style={inputStyle}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "phone", label: "Teléfono", placeholder: "04XX-XXXXXXX", type: "tel" },
                    { key: "email", label: "Correo Electrónico", placeholder: "correo@empresa.com", type: "email" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-[12px] text-[#6e6e73] mb-2 tracking-wide uppercase font-medium">{f.label}</label>
                      <input
                        type={f.type}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200"
                        style={inputStyle}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[12px] text-[#6e6e73] mb-2 tracking-wide uppercase font-medium">Servicio Requerido</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200 appearance-none cursor-pointer"
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  >
                    <option value="">Seleccionar servicio...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] text-[#6e6e73] mb-2 tracking-wide uppercase font-medium">Descripción de la Operación</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describa brevemente la ubicación, tipo de fluido, volumen aproximado y cualquier detalle relevante..."
                    className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-all duration-200 resize-none"
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4 text-[15px]">
                  Enviar Solicitud
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 9h14M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            ) : (
              <div className="glass-card rounded-2xl p-12 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(26,140,60,0.1)", border: "1px solid rgba(26,140,60,0.25)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l6 6L22 8" stroke="#1a8c3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">¡Solicitud enviada!</h3>
                <p className="text-[15px] text-[#6e6e73]">
                  Su cliente de correo debería haberse abierto. Si no, contáctenos directamente al{" "}
                  <a href="tel:04246472446" className="text-[#1a8c3c] hover:underline font-medium">0424-6472446</a>.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary mt-6 text-sm">
                  Enviar otra consulta
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-4">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 4h14v14H4V4z" stroke="#1a8c3c" strokeWidth="1.5"/>
                    <path d="M4 7l7 5 7-5" stroke="#1a8c3c" strokeWidth="1.5"/>
                  </svg>
                ),
                title: "Email",
                value: "solucionesdeltaca@gmail.com",
                href: "mailto:solucionesdeltaca@gmail.com",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5 3h4l2 5-2.5 1.5a10 10 0 005 5L15 12l5 2v4a2 2 0 01-2 2C8.4 20 2 13.6 2 5a2 2 0 012-2z" stroke="#1a8c3c" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Teléfono / WhatsApp",
                value: "0424-6472446",
                href: "tel:04246472446",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="9" r="3" stroke="#1a8c3c" strokeWidth="1.5"/>
                    <path d="M11 2C7.134 2 4 5.134 4 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.866-3.134-7-7-7z" stroke="#1a8c3c" strokeWidth="1.5"/>
                  </svg>
                ),
                title: "Ubicación",
                value: "Calle 13 con Av 5, Local 26A-162 Ofic. 2, Sector Manzanillo, San Francisco, Edo. Zulia",
                href: "#",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 block group"
                style={{ textDecoration: "none" }}
              >
                <div className="feature-icon flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-[12px] text-[#6e6e73] mb-1">{item.title}</div>
                  <div className="text-[14px] text-[#1d1d1f] font-medium group-hover:text-[#1a8c3c] transition-colors">{item.value}</div>
                </div>
              </a>
            ))}

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#1a8c3c] animate-pulse" />
                <span className="text-[#1d1d1f] font-semibold text-[15px]">Disponibilidad</span>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Lunes — Viernes", hours: "7:00 AM – 6:00 PM" },
                  { day: "Sábados", hours: "8:00 AM – 2:00 PM" },
                  { day: "Emergencias", hours: "24/7", highlight: true },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between text-[14px]">
                    <span className="text-[#6e6e73]">{row.day}</span>
                    <span className={row.highlight ? "text-[#1a8c3c] font-semibold" : "text-[#1d1d1f] font-medium"}>{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
