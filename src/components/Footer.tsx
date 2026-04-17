"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Bombeo de Crudo",         slug: "bombeo-de-crudo" },
  { label: "Trasegado Vacuum",        slug: "trasegado-vacuum" },
  { label: "Frac Tanks 500 Bbl",      slug: "frac-tanks" },
  { label: "Manejo de Desechos",      slug: "manejo-de-desechos" },
  { label: "Inyección de Vapor",      slug: "alquiler-calderas-inyeccion-vapor" },
];

const navLinks = [
  { label: "Inicio",    href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Equipos",   href: "/#equipos" },
  { label: "Nosotros",  href: "/nosotros" },
  { label: "Contacto",  href: "/contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden" style={{ background: "#111" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 30% at 50% 0%, rgba(26,140,60,0.07) 0%, transparent 60%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(48,209,88,0.2), transparent)" }} />

      <div className="site-container relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="Soluciones Delta C.A."
                width={150}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-[14px] text-[#6e6e73] leading-relaxed max-w-sm mb-6">
              Empresa venezolana especializada en servicios técnicos para la industria petrolera.
              Flota propia, operación continua 24/7. San Francisco, Estado Zulia.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:solucionesdeltaca@gmail.com" className="flex items-center gap-2 text-[13px] text-[#6e6e73] hover:text-[#30d158] transition-colors w-fit">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1 5l6 4 6-4" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                solucionesdeltaca@gmail.com
              </a>
              <a href="tel:04246472446" className="flex items-center gap-2 text-[13px] text-[#6e6e73] hover:text-white transition-colors w-fit">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 2h2l1 3-1.5 1a6 6 0 003.5 3.5L9 8l3 1v2a1 1 0 01-1 1C4.5 12 1.5 8 1.5 3.5A1.5 1.5 0 013 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                0424-6472446
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-white font-bold text-[12px] mb-5 tracking-widest uppercase">Navegación</div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#6e6e73] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-white font-bold text-[12px] mb-5 tracking-widest uppercase">Servicios</div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-[13px] text-[#6e6e73] hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="text-[12px] text-[#3a3a3c]">
            © {year} Soluciones Delta, C.A. — RIF J-50735393-1
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
            <span className="text-[12px] text-[#3a3a3c]">San Francisco, Estado Zulia · Venezuela</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
