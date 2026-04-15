"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Equipos",   href: "#equipos"   },
  { label: "Nosotros",  href: "#nosotros"  },
  { label: "Contacto",  href: "#contacto"  },
];

export default function Navbar() {
  const navRef    = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Start invisible — HeroSection intro plays first, then navbar fades in
    gsap.set(navRef.current, { opacity: 0, y: -20 });
    gsap.to(navRef.current,  { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.6 });

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
          scrolled ? "bg-white border-b border-black/8 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo — white when over hero, dark when scrolled */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
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
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-[15px] font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-[#6e6e73] hover:text-[#1d1d1f]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>


            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px] bg-[#1d1d1f]" : scrolled ? "bg-[#1d1d1f]" : "bg-white"}`} />
              <div className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${mobileOpen ? "opacity-0 bg-[#1d1d1f]" : scrolled ? "bg-[#1d1d1f]" : "bg-white"}`} />
              <div className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px] bg-[#1d1d1f]" : scrolled ? "bg-[#1d1d1f]" : "bg-white"}`} />
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
