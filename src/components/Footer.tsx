"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden" style={{ background: "#1d1d1f" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 30% at 50% 0%, rgba(26,140,60,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
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
            <p className="text-[14px] text-[#6e6e73] leading-relaxed max-w-sm">
              Especialistas en servicios técnicos para la industria petrolera venezolana.
              Operamos en el Zulia y regiones adyacentes con equipamiento propio de última generación.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="mailto:solucionesdeltaca@gmail.com" className="text-[13px] text-[#30d158] hover:underline">
                solucionesdeltaca@gmail.com
              </a>
              <span className="text-[#3a3a3c]">·</span>
              <a href="tel:04246472446" className="text-[13px] text-[#6e6e73] hover:text-white transition-colors">
                0424-6472446
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-white font-semibold text-[13px] mb-4">Navegación</div>
            <ul className="space-y-3">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Equipos", href: "#equipos" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[14px] text-[#6e6e73] hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-white font-semibold text-[13px] mb-4">Servicios</div>
            <ul className="space-y-3">
              {["Bombeo de Crudo", "Trasegado Vacuum", "Frac Tanks 500 Bbl", "Manejo de Desechos", "Limpieza de Tanques"].map((s) => (
                <li key={s} className="text-[14px] text-[#6e6e73]">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="text-[13px] text-[#3a3a3c]">
            © {year} Soluciones Delta, C.A. — RIF J-50735393-1
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
            <span className="text-[13px] text-[#6e6e73]">San Francisco, Estado Zulia — Venezuela</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
