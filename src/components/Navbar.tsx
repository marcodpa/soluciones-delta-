"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

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
      gsap.from(logoRef.current, { opacity: 0, x: -30, duration: 1, ease: "power3.out", delay: 0.3 });
      gsap.from(linksRef.current?.children as unknown as Element[], {
        opacity: 0, y: -20, duration: 0.7, ease: "power3.out", stagger: 0.08, delay: 0.5,
      });
      gsap.from(ctaRef.current, { opacity: 0, x: 30, duration: 1, ease: "power3.out", delay: 0.3 });
    }, navRef);

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { ctx.revert(); window.removeEventListener("scroll", handleScroll); };
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-blur" : "bg-white/80 backdrop-blur-md border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div ref={logoRef} className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Image
                src="/logo.png"
                alt="Soluciones Delta C.A."
                width={130}
                height={52}
                className="h-11 w-auto object-contain"
                priority
              />
            </div>

            {/* Desktop links */}
            <div ref={linksRef} className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-[15px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 font-medium"
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
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-[#1d1d1f] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <div className={`w-6 h-0.5 bg-[#1d1d1f] mt-1.5 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-[#1d1d1f] mt-1.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden bg-white/95 backdrop-blur-xl ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "80px" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-2xl font-semibold text-[#1d1d1f] hover:text-[#1a8c3c] transition-colors duration-200"
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
