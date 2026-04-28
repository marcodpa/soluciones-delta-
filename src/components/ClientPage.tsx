"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FortalezasSection from "@/components/FortalezasSection";
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
        <AboutSection />
        <ServicesSection />
        <FortalezasSection />
        <HomeTrustSection />
        <HomeCtaSection />
      </main>

      <Footer />
    </>
  );
}
