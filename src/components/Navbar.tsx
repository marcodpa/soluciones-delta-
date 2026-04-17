"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Servicios", href: "/servicios"  },
  { label: "Nosotros",  href: "/nosotros"   },
  { label: "Contacto",  href: "/contacto"   },
];

export default function Navbar() {
  const navRef      = useRef<HTMLElement>(null);
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (isHome) {
      gsap.set(navRef.current, { opacity: 0, y: -20 });
      gsap.to(navRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.6 });
    } else {
      gsap.set(navRef.current, { opacity: 1, y: 0 });
    }

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-xl border-b border-black/[0.06] shadow-sm"
        }`}
      >
        <div className="site-container">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Soluciones Delta C.A."
                width={130}
                height={52}
                className="h-11 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.replace("/#", "/")));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-all duration-200 ${
                      isTransparent
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : active
                        ? "text-[#1a8c3c] bg-[rgba(26,140,60,0.08)]"
                        : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:04246472446"
                className={`flex items-center gap-2 text-[13px] font-semibold transition-colors ${
                  isTransparent ? "text-white/70 hover:text-white" : "text-[#6e6e73] hover:text-[#1d1d1f]"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 2h2.5l1 3-1.5 1a7 7 0 003 3l1-1.5 3 1V11a1.5 1.5 0 01-1.5 1.5C5.5 12.5 1.5 8.5 1.5 3.5A1.5 1.5 0 013 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
                0424-6472446
              </a>
              <Link
                href="/contacto"
                className="btn-primary !py-2.5 !px-5 !text-[13px]"
              >
                Solicitar Servicio
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px] bg-[#1d1d1f]" : isTransparent ? "bg-white" : "bg-[#1d1d1f]"}`} />
              <div className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""} ${isTransparent && !mobileOpen ? "bg-white" : "bg-[#1d1d1f]"}`} />
              <div className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px] bg-[#1d1d1f]" : isTransparent ? "bg-white" : "bg-[#1d1d1f]"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden bg-white ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "80px" }}
      >
        <div className="flex flex-col px-8 pt-8 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[20px] font-semibold text-[#1d1d1f] hover:text-[#1a8c3c] transition-colors py-3 border-b border-[#f0f0f0]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-8 justify-center"
          >
            Solicitar Servicio
          </Link>
          <a
            href="tel:04246472446"
            className="mt-4 text-center text-[15px] font-medium text-[#6e6e73]"
          >
            0424-6472446
          </a>
        </div>
      </div>
    </>
  );
}
