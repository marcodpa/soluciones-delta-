"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EquipmentSection from "@/components/EquipmentSection";
import HomeTrustSection from "@/components/HomeTrustSection";
import HomeCtaSection from "@/components/HomeCtaSection";
import Footer from "@/components/Footer";

export default function ClientPage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#1a8c3c] focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content" role="main">
        <HeroSection />
        <ServicesSection />
        <EquipmentSection />
        <HomeTrustSection />
        <HomeCtaSection />
      </main>

      <Footer />
    </>
  );
}
