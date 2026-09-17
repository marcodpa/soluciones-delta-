"use client";

import { useLocale, useLocalizedTree } from "@/lib/i18n/client";
import { translateText } from "@/lib/i18n/translate";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronsLeftRight, Check, MapPin, Phone } from "lucide-react";
import type { ServiceData } from "@/lib/services-data";
import type { RelatedService } from "@/lib/related-services";
import { getServicePageContent, type ServiceHero } from "@/lib/service-page-content";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuoteForm from "./services/QuoteForm";
import styles from "./ServiceDetail.module.css";

const DescargarServicioPDF = dynamic(() => import("./ServicesCatalogoPDF").then(m => m.DescargarServicioPDF), { ssr: false });
const navigation = [
  { href: "#el-servicio", label: "El servicio" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#ficha-tecnica", label: "Ficha técnica" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
];

export default function ServicePageClient({ service, relatedServices }: { service: ServiceData; relatedServices: RelatedService[] }) {
  const localize = useLocalizedTree();
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const content = getServicePageContent(service.slug);
  const hero: ServiceHero = content?.hero ?? { kind: "single", src: "/vacuum-truck.webp" };
  const activeStep = content?.steps[stepIndex];

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const scope = gsap.context(() => {
        gsap.fromTo("[data-hero-entry]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease: "power2.out", clearProps: "transform,opacity" });
      }, heroRef);
      return () => scope.revert();
    });
    return () => media.revert();
  }, [service.slug]);

  return localize(<>
    <Navbar />
    <main id="main-content" className={styles.page}>
      <section ref={heroRef} className={styles.hero}>
        <div className={`site-container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Inicio</Link><span>/</span><Link href="/servicios">Servicios</Link></nav>
            <p className={styles.category} data-hero-entry>Servicios petroleros en Venezuela</p>
            <h1 data-hero-entry>{service.title}</h1>
            <p className={styles.promise} data-hero-entry>{content?.headline ?? service.subtitle}</p>
            <p className={styles.lead} data-hero-entry>{content?.stepsIntro ?? service.summary}</p>
            <div className={styles.heroActions} data-hero-entry>
              <a href="#contacto-servicio" className={styles.primary}>Solicitar cotización<ArrowRight size={18} aria-hidden="true" /></a>
              <a href="#ficha-tecnica" className={styles.textLink}>Ver ficha técnica<ChevronDown size={16} aria-hidden="true" /></a>
            </div>
            <p className={styles.location}><MapPin size={16} aria-hidden="true" />Desde Zulia, para toda Venezuela.</p>
          </div>
          <div className={styles.heroVisual} data-hero-entry>
            {hero.kind === "split" ? <BeforeAfter hero={hero} /> : <figure className={styles.heroPhoto}>
              <Image src={hero.src} alt={`${translateText(service.title, locale)} — Soluciones Delta C.A.`} fill priority sizes="(max-width: 760px) 100vw, 54vw" />
              <figcaption><span>Equipamiento y operación</span><strong>{service.tag}</strong></figcaption>
            </figure>}
          </div>
        </div>
      </section>

      <nav className={styles.sectionNav} aria-label="Contenido del servicio">
        <div className={`site-container ${styles.sectionNavInner}`}>
          <div>{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
          <a href="#contacto-servicio" className={styles.navQuote}>Cotizar<ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </nav>

      <section id="el-servicio" className={`${styles.section} ${styles.overview}`}>
        <div className={`site-container ${styles.overviewGrid}`}>
          <div>
            <p className={styles.sectionLabel}>El servicio</p>
            <h2>{content?.subtitle ?? service.subtitle}</h2>
            <p className={styles.overviewText}>{service.overview}</p>
            <Link href="/contacto" className={styles.textLink}>Consulte su operación con nuestro equipo<ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          {content && <aside className={styles.application}>
            <p>{content.closing.label}</p>
            <h3>{content.closing.heading}</h3>
            <p>{content.closing.text}</p>
            <div><MapPin size={18} aria-hidden="true" /><span>La movilización y el alcance se coordinan según las condiciones de su proyecto.</span></div>
          </aside>}
        </div>
      </section>

      {content && activeStep && <section id="proceso" className={`${styles.section} ${styles.process}`}>
        <div className="site-container">
          <div className={styles.sectionHeading}><h2>Así trabajamos en campo.</h2><p>Conozca las etapas y los equipos de esta operación.</p></div>
          <div className={styles.processBoard}>
            <div id="process-photo" role="tabpanel" aria-labelledby={`process-step-${stepIndex}`} tabIndex={0} className={styles.processPhoto}>
              <Image key={activeStep.src} src={activeStep.src} alt={activeStep.title} fill sizes="(max-width: 760px) 100vw, 52vw" />
              <span>{activeStep.title}</span>
            </div>
            <div className={styles.steps} role="tablist" aria-label="Etapas del servicio" aria-orientation="vertical">
              {content.steps.map((step, index) => <button key={step.title} id={`process-step-${index}`} type="button" role="tab" aria-selected={stepIndex === index} aria-controls="process-photo" tabIndex={stepIndex === index ? 0 : -1} className={`${styles.step} ${stepIndex === index ? styles.activeStep : ""}`} onClick={() => setStepIndex(index)} onKeyDown={event => {
                const keys = ["ArrowUp", "ArrowDown", "Home", "End"];
                if (!keys.includes(event.key)) return;
                event.preventDefault();
                const next = event.key === "Home" ? 0 : event.key === "End" ? content.steps.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + content.steps.length) % content.steps.length;
                setStepIndex(next);
                event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("[role='tab']")[next]?.focus();
              }}><span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span><span><strong>{step.title}</strong><span>{step.text}</span></span><ArrowUpRight size={19} aria-hidden="true" /></button>)}
            </div>
          </div>
        </div>
      </section>}

      <section id="ficha-tecnica" className={`${styles.section} ${styles.technical}`}>
        <div className={`site-container ${styles.technicalGrid}`}>
          <div className={styles.technicalCopy}>
            <p className={styles.sectionLabel}>Capacidad técnica</p>
            <h2>El equipo detrás del servicio.</h2>
            <p>Consulte las características y el alcance para planificar su operación.</p>
            <div className={styles.pdfDownload}><DescargarServicioPDF service={service} /></div>
            <ul className={styles.benefits}>{service.benefits.map(benefit => <li key={benefit.title}><Check size={18} aria-hidden="true" /><div><strong>{benefit.title}</strong><p>{benefit.desc}</p></div></li>)}</ul>
          </div>
          <div className={styles.specSheet}>
            <div className={styles.specHeader}><h3>Ficha técnica</h3><span>Soluciones Delta C.A.</span></div>
            <dl>{service.specs?.map(spec => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
            <p className={styles.specNote}>La disponibilidad del equipo y las condiciones del servicio se confirman al cotizar.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.scopeSection}`}>
        <div className={`site-container ${styles.detailsGrid}`}>
          <div><p className={styles.sectionLabel}>Planifique su operación</p><h2>Aplicaciones y alcance.</h2><p className={styles.secondary}>Información sobre el proceso, los fluidos, la seguridad y los recursos que acompañan este servicio.</p></div>
          <div className={styles.detailsList}>{service.sections.map((section, index) => <details key={section.heading} className={styles.detail} open={index === 0}>
            <summary>{section.heading}<ChevronDown size={19} aria-hidden="true" /></summary>
            <div className={styles.detailBody}><p>{section.body}</p>{section.list && <ul>{section.list.map(item => <li key={item}>{item}</li>)}</ul>}</div>
          </details>)}</div>
        </div>
      </section>

      <section id="preguntas" className={`${styles.section} ${styles.faqSection}`}>
        <div className={`site-container ${styles.detailsGrid}`}>
          <div><h2>Antes de comenzar.</h2><p className={styles.secondary}>Respuestas a las consultas más frecuentes sobre este servicio.</p><a href="#contacto-servicio" className={styles.textLink}>Consultar mi proyecto<ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className={styles.detailsList}>{service.faq.map(item => <details key={item.q} className={styles.detail}><summary>{item.q}<ChevronDown size={19} aria-hidden="true" /></summary><div className={styles.detailBody}><p>{item.a}</p></div></details>)}</div>
        </div>
      </section>

      {relatedServices.length > 0 && <section className={`${styles.section} ${styles.related}`} aria-labelledby="related-services-title">
        <div className="site-container">
          <div className={styles.sectionHeading}><h2 id="related-services-title">Complete su operación.</h2><Link href="/servicios" className={styles.textLink}>Todos los servicios<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
          <div className={styles.relatedGrid}>{relatedServices.map(related => {
            const relatedHero = getServicePageContent(related.slug)?.hero;
            const src = relatedHero?.kind === "split" ? relatedHero.despues : relatedHero?.src ?? "/vacuum-truck.webp";
            return <Link key={related.slug} href={`/servicios/${related.slug}`} className={styles.relatedCard}>
              <div className={styles.relatedPhoto}><Image src={src} alt={related.title} fill sizes="(max-width: 640px) 100vw, 33vw" /><ArrowUpRight size={20} aria-hidden="true" /></div>
              <div><h3>{related.title}</h3><p>{related.description}</p><span>Ver servicio</span></div>
            </Link>;
          })}</div>
        </div>
      </section>}

      <section id="contacto-servicio" className={`${styles.section} ${styles.quote}`}>
        <div className={`site-container ${styles.quoteGrid}`}>
          <div><p className={styles.sectionLabel}>Hablemos de su proyecto</p><h2>Su próxima operación empieza aquí.</h2><p>Indique dónde y cuándo necesita el servicio. Nuestro equipo le ayudará a definir los equipos y el alcance.</p><a href="https://wa.me/584246472446" className={styles.quotePhone}><Phone size={23} aria-hidden="true" />+58 424-6472446</a><span className={styles.quoteNote}>Atención desde San Francisco, Estado Zulia.</span></div>
          <div className={styles.quotePanel}><h3>Solicitar cotización</h3><QuoteForm key={service.slug} initialSlug={service.slug} /></div>
        </div>
      </section>
    </main>
    <Footer />
  </>);
}

function BeforeAfter({ hero }: { hero: Extract<ServiceHero, { kind: "split" }> }) {
  const locale = useLocale();
  const localize = useLocalizedTree();
  const [position, setPosition] = useState(50);
  return localize(<figure className={styles.comparison}>
    <Image src={hero.despues} alt="Fosa después de la recuperación de crudo" fill priority sizes="(max-width: 760px) 100vw, 54vw" />
    <div className={styles.beforeImage} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}><Image src={hero.antes} alt="Fosa antes de la recuperación de crudo" fill priority sizes="(max-width: 760px) 100vw, 54vw" /></div>
    <span className={styles.beforeLabel}>Antes</span><span className={styles.afterLabel}>Después</span>
    <div className={styles.compareDivider} style={{ left: `${position}%` }} aria-hidden="true"><ChevronsLeftRight size={24} /></div>
    <input type="range" min="0" max="100" value={position} onChange={event => setPosition(Number(event.target.value))} aria-label={locale === "en" ? "Compare before and after oil recovery" : "Comparar antes y después de la recuperación"} aria-valuetext={locale === "en" ? `${position}% before, ${100 - position}% after` : `${position}% antes, ${100 - position}% después`} />
    <figcaption>Deslice para comparar el resultado</figcaption>
  </figure>);
}
