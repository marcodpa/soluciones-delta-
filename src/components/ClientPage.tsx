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
