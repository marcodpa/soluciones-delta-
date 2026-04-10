"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Equipos", href: "#equipos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.from(linksRef.current?.children as unknown as Element[], {
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.5,
      });
      gsap.from(ctaRef.current, {
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, navRef);

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-blur" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div ref={logoRef} className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="relative w-9 h-9">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <polygon points="20,2 38,34 2,34" fill="none" stroke="#30d158" strokeWidth="2.5" strokeLinejoin="round"/>
                  <polygon points="20,10 32,30 8,30" fill="rgba(48,209,88,0.15)" stroke="none"/>
                  <line x1="20" y1="10" x2="20" y2="30" stroke="#30d158" strokeWidth="1.5" opacity="0.6"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight tracking-tight">Soluciones Delta</div>
                <div className="text-[10px] text-[#86868b] tracking-widest uppercase">C.A.</div>
              </div>
            </div>

            {/* Desktop links */}
            <div ref={linksRef} className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-[15px] text-[#86868b] hover:text-white transition-colors duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <a
              ref={ctaRef}
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollTo("#contacto"); }}
              className="hidden lg:flex btn-primary text-sm py-2.5 px-6"
            >
              Solicitar Servicio
            </a>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 nav-blur transition-all duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "80px" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-2xl font-semibold text-white hover:text-[#30d158] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); scrollTo("#contacto"); }}
            className="btn-primary mt-4"
          >
            Solicitar Servicio
          </a>
        </div>
      </div>
    </>
  );
}
