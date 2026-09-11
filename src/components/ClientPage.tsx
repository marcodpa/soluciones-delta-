import typography from "./HomeTypography.module.css";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FortalezasSection from "@/components/FortalezasSection";
import HomeTrustSection from "@/components/HomeTrustSection";
import HomeCtaSection from "@/components/HomeCtaSection";
import HomeCoverageSection from "@/components/HomeCoverageSection";
import Footer from "@/components/Footer";

export default function ClientPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" role="main" className={typography.main}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FortalezasSection />
        <HomeTrustSection />
        <HomeCoverageSection />
        <HomeCtaSection />
      </main>

      <Footer />
    </>
  );
}
