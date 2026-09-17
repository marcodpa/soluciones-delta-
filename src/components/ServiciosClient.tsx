"use client";

import { useLocalizedTree } from "@/lib/i18n/client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoverageSection from "@/components/CoverageSection";
import ServicesCatalog from "./services/ServicesCatalog";
import CompanyOverview from "./services/CompanyOverview";
import QuoteForm from "./services/QuoteForm";
import CatalogDownload from "./services/CatalogDownload";
import styles from "./services/services.module.css";

export default function ServiciosClient() {
  const localize = useLocalizedTree();
  return localize((
    <>
      <Navbar />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="services-title">
          <div className={styles.heroCopy}>
            <nav aria-label="Ruta de navegación" className={styles.breadcrumb}><Link href="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Servicios</span></nav>
            <h1 id="services-title">Encuentre el servicio<br className={styles.desktopBreak} /> para su operación.<span>Servicios petroleros en Venezuela.</span></h1>
            <p>Equipamiento propio y capacidad técnica para acompañar su operación en campo.</p>
            <div className={styles.heroActions}>
              <a href="#cotizar" className={styles.primary}>Solicitar cotización <span aria-hidden="true">↗</span></a>
              <CatalogDownload />
            </div>
          </div>
          <div className={styles.heroPhoto}>
            <Image src="/servicios-campo.webp" alt="Equipos y personal de Soluciones Delta trabajando en un campo petrolero en Venezuela"
              fill priority sizes="(max-width: 760px) 100vw, 55vw" />
            <p>Soluciones en campo<br />para su operación.</p>
          </div>
        </section>

        <div className={styles.overviewBand}>
          <div className={`site-container ${styles.container}`}><CompanyOverview /></div>
        </div>
        <div className={styles.catalogBand}>
          <div className={`site-container ${styles.container}`}><ServicesCatalog /></div>
        </div>
        <CoverageSection variant="delta" />
        <div className={styles.quoteBand}>
          <div className={`site-container ${styles.container}`}>
          <section id="cotizar" className={styles.quote} aria-labelledby="quote-title">
            <div>
              <p className={styles.kicker}>Consulta directa</p>
              <h2 id="quote-title">Cuéntenos<br /> qué necesita.</h2>
              <p>Estamos para asesorarle y ofrecerle la solución adecuada para su operación.</p>
              <a className={styles.phone} href="tel:+584246472446">
                <span aria-hidden="true"><svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2C9 21 3 15 3 5a2 2 0 0 1 2-2Z" /></svg></span>
                +58 424-6472446
              </a>
              <a href="mailto:delta@soluciones-delta.com" className={styles.email}>delta@soluciones-delta.com</a>
            </div>
            <QuoteForm />
          </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  ));
}
