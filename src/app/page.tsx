"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EquipmentSection from "@/components/EquipmentSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Noise overlay for depth */}
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <EquipmentSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
