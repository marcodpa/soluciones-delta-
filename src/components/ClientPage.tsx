import typography from "./HomeTypography.module.css";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CoverageSection from "@/components/CoverageSection";
import HomeTrustSection from "@/components/HomeTrustSection";
import HomeCtaSection from "@/components/HomeCtaSection";
import HomeCoverageSection from "@/components/HomeCoverageSection";
import HomeArticlesSection from "@/components/HomeArticlesSection";
import Footer from "@/components/Footer";

export default function ClientPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" role="main" className={typography.main}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CoverageSection id="fortalezas" compactBottom />
        <HomeArticlesSection />
        <HomeTrustSection />
        <HomeCoverageSection />
        <HomeCtaSection />
      </main>

      <Footer />
    </>
  );
}
