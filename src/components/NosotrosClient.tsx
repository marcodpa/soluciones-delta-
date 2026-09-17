"use client";

import { useLocalizedTree } from "@/lib/i18n/client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, ClipboardCheck, HardHat, Truck, ShieldCheck, Target, Eye, Plus, Settings, Workflow } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { companyData, timeline } from "@/lib/company-data";
import styles from "./CompanyPages.module.css";

const capabilities = [
  { icon: Truck, title: "Flota propia", body: "Unidades vacuum, frac tanks y equipos preparados para las exigencias del campo." },
  { icon: HardHat, title: "Servicio técnico", body: "Personal experimentado y comprometido con una ejecución segura y documentada." },
  { icon: Settings, title: "Soluciones a medida", body: "Bombeo, transporte, almacenamiento, vapor y limpieza que se complementan en su operación." },
];
const steps = [
  { icon: ClipboardCheck, title: "Preparación", body: "Revisamos el alcance, los equipos y las condiciones de seguridad de cada servicio." },
  { icon: Workflow, title: "Operación", body: "Coordinamos el trabajo en campo con personal técnico y equipos propios." },
  { icon: ShieldCheck, title: "Seguimiento", body: "Documentamos la ejecución y acompañamos el cierre de cada operación." },
];
const principles = [
  { icon: Target, title: "Misión", body: "Prestar un servicio de calidad para satisfacer los requerimientos de nuestros clientes a través de servicios técnicos especializados para la industria petrolera, con personal competente y comprometido, promoviendo la conciencia ecológica y la mejora continua." },
  { icon: Eye, title: "Visión", body: "Proyectarnos como empresa líder en el sector petrolero venezolano, de desarrollo exitoso mediante la cultura de excelencia corporativa, siendo referente nacional por nuestra alta capacidad operacional y excelente calidad de servicio." },
  { icon: ShieldCheck, title: "Política de calidad", body: "Ofrecemos servicios de excelente calidad fundamentados en la mejora continua del sistema de gestión, el cumplimiento de requisitos legales y reglamentarios, y mecanismos de seguridad y salud en todas nuestras operaciones." },
];

export default function NosotrosClient() {
  const localize = useLocalizedTree();
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(heroRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: .65, ease: "power2.out", delay: .1 });
    });
    return () => media.revert();
  }, []);

  return localize(<>
    <Navbar />
    <main id="main-content" className={styles.page}>
      <section className={styles.hero}>
        <Image src="/vacuum/vacuum-truck-howo-pdvsa.webp" alt="Camión vacuum de Soluciones Delta en una locación petrolera del Zulia" fill priority sizes="100vw" className={styles.heroPhoto} />
        <div ref={heroRef} className={`site-container ${styles.heroContent}`}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Inicio</Link><span aria-hidden="true">/</span><span>Nosotros</span></nav>
          <div className={styles.eyebrow}>Soluciones Delta, C.A.</div>
          <h1>La confianza se gana en cada operación.</h1>
          <p>Servicios petroleros en Venezuela. Flota propia y conocimiento técnico desde el Estado Zulia.</p>
          <a href="#nuestra-empresa" className={styles.textLink}>Conozca nuestra empresa <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </section>
      <section id="nuestra-empresa" className={styles.intro} style={{ scrollMarginTop: 96 }}>
        <div className={`site-container ${styles.introGrid}`}>
          <div><h2>Del Zulia al trabajo en campo.</h2><p>Somos una empresa venezolana de servicios petroleros con base en San Francisco, Estado Zulia. Acompañamos a operadoras, contratistas y plantas industriales con equipos propios y personal técnico para el manejo de crudo, fluidos y servicios industriales.</p></div>
          <div className={styles.introAside}><span aria-hidden="true" />Conocemos el campo.<br />Nos comprometemos con su operación.</div>
        </div>
      </section>
      <section className={styles.capacity}>
        <div className={styles.capacityPhoto}><Image src="/frac-tanks/bateria-frac-tanks.webp" alt="Batería de frac tanks de Soluciones Delta en campo" fill sizes="(max-width: 700px) 100vw, 52vw" /></div>
        <div className={styles.capacityCopy}>
          <h2 className={styles.sectionTitle}>Equipos que respaldan nuestra palabra.</h2>
          {capabilities.map(({ icon: Icon, title, body }) => <div key={title} className={styles.capability}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{body}</p></div></div>)}
          <Link href="/servicios" className={styles.textLink} style={{ marginTop: 28 }}>Explore nuestros servicios <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
      <section className={styles.work}>
        <div className="site-container">
          <div className={styles.workHeader}><h2 className={styles.sectionTitle}>Nuestra forma de trabajar</h2><p>Disciplina, seguridad y compromiso en cada etapa.</p></div>
          <ol className={styles.steps}>{steps.map(({ icon: Icon, title, body }) => <li key={title} className={styles.step}><span className={styles.stepIcon}><Icon size={27} aria-hidden="true" /></span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
          <div className={styles.philosophy}>{principles.map(({ icon: Icon, title, body }) => <article key={title}><h3><Icon size={25} aria-hidden="true" />{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>
      <section className={styles.detailsSection} aria-label="Información de la empresa">
        <div className={`site-container ${styles.detailsGrid}`}>
          <div>
            <details className={styles.details}><summary>Nuestra trayectoria <Plus size={20} aria-hidden="true" /></summary><div className={styles.detailsBody}>{timeline.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></details>
            <details className={styles.details}><summary>Seguridad y responsabilidad <Plus size={20} aria-hidden="true" /></summary><div className={styles.detailsBody}>
              <article><h3>Seguridad ante todo</h3><p>Cada operación se ejecuta bajo protocolos HSE rigurosos. ART previo, EPP completo, sistema de aterramiento y kit antiderrame certificado en cada movilización.</p></article>
              <article><h3>Responsabilidad ambiental</h3><p>Cumplimos el Decreto 2635 venezolano y las normas COVENIN aplicables. Emitimos manifiestos y certificados de disposición final en cada operación que lo requiera.</p></article>
              <article><h3>Tecnología propia</h3><p>Nuestra flota incluye unidades vacuum fabricadas en 2026, con mantenimiento al día y disponibilidad bajo nuestra gestión.</p></article>
              <article><h3>Disponibilidad operativa</h3><p>Operamos 24 horas al día, 7 días a la semana. La movilización se coordina según la ubicación y las condiciones del proyecto.</p></article>
            </div></details>
          </div>
          <details className={styles.details}><summary>Ficha de la empresa <Plus size={20} aria-hidden="true" /></summary><dl className={`${styles.detailsBody} ${styles.companyData}`}>{companyData.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></details>
        </div>
      </section>
    </main>
    <Footer />
  </>);
}
