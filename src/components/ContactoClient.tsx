"use client";

import { useLocalizedTree } from "@/lib/i18n/client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, Phone, Mail, MapPin, Clock3, Building2, MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LocationDialog from "./LocationDialog";
import ContactRequestForm from "./ContactRequestForm";
import EmailLink from "./EmailLink";
import styles from "./CompanyPages.module.css";

const DescargarPlanillaBtn = dynamic(() => import("./PlanillaCotizacionPDF"), { ssr: false });
const channels = [
  { icon: Phone, title: "WhatsApp", value: "+58 424-6472446", href: "https://wa.me/584246472446", description: "Atención directa y emergencias 24/7." },
  { icon: Mail, title: "Correo electrónico", value: "delta@soluciones-delta.com", href: "mailto:delta@soluciones-delta.com", description: "Cuéntenos los detalles de su proyecto." },
  { icon: MapPin, title: "Sede operativa", value: "San Francisco, Estado Zulia", href: "", description: "Nuestra base de operaciones en Venezuela." },
];
const schedule = [
  { day: "Lunes — Viernes", hours: "7:00 AM – 6:00 PM" },
  { day: "Sábados", hours: "8:00 AM – 2:00 PM" },
  { day: "Domingos / Feriados", hours: "Solo emergencias" },
  { day: "Emergencias", hours: "24 / 7" },
];

export default function ContactoClient() {
  const localize = useLocalizedTree();
  return localize(<>
    <Navbar />
    <main id="main-content" className={styles.page}>
      <section className={styles.contactHero}>
        <div className={`site-container ${styles.contactGrid}`}>
          <div className={styles.contactIntro}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Inicio</Link><span aria-hidden="true">/</span><span>Contacto</span></nav>
            <h1>Hablemos de su operación.</h1>
            <p>Contáctenos directamente por WhatsApp o envíenos su solicitud. Nuestro equipo técnico le ayudará a definir el servicio que necesita.</p>
            <a href="https://wa.me/584246472446" className={styles.whatsapp}><MessageCircle size={25} aria-hidden="true" />+58 424-6472446<ArrowRight size={18} aria-hidden="true" /></a>
            <small>Atención directa. Emergencias 24/7.</small>
          </div>
          <figure className={styles.contactPhoto}>
            <Image src="/vacuum/vacuum-truck-howo-pdvsa.webp" alt="Unidad vacuum de Soluciones Delta en operación en el Estado Zulia" fill priority sizes="(max-width: 700px) 100vw, 50vw" />
            <figcaption>Equipos propios para su operación.</figcaption>
          </figure>
          <div className={styles.formPanel} id="propuesta">
            <h2>Envíenos su solicitud</h2><p>Cotizaciones, licitaciones o propuestas de proveedores. Elija si la envía por correo o por WhatsApp.</p>
            <ContactRequestForm />
          </div>
        </div>
      </section>
      <section className={styles.channels}>
        <div className="site-container"><div className={styles.channelsHeading}><h2>Nuestros canales de contacto</h2><p>Estamos a su disposición para atender sus consultas y requerimientos.</p></div><div className={styles.channelGrid}>{channels.map(({ icon: Icon, title, value, href, description }) => title === "Sede operativa" ? <LocationDialog key={title}><button type="button" className={`${styles.channel} ${styles.channelButton}`}><Icon aria-hidden="true" /><div><h3>{title}</h3><strong>{value}</strong><p>{description}</p></div></button></LocationDialog> : href.startsWith("mailto:") ? <EmailLink key={title} className={styles.channel}><Icon aria-hidden="true" /><div><h3>{title}</h3><strong>{value}</strong><p>{description}</p></div></EmailLink> : <a key={title} href={href} className={styles.channel}><Icon aria-hidden="true" /><div><h3>{title}</h3><strong>{value}</strong><p>{description}</p></div></a>)}</div></div>
      </section>
      <section className={styles.visit}>
        <div className={`site-container ${styles.visitGrid}`}>
          <div><h2><Building2 size={25} aria-hidden="true" />Nuestra sede</h2><address>Calle 13 con Av. 5, Local 26A-162, Oficina 2.<br />Sector Manzanillo, San Francisco, Estado Zulia, Venezuela.</address><p>Soluciones Delta, C.A. · RIF J-50735393-1</p><div className={styles.visitExtras}><LocationDialog><button type="button" className={`${styles.textLink} ${styles.visitMapButton}`}>Ver ubicación <ArrowRight size={17} aria-hidden="true" /></button></LocationDialog><DescargarPlanillaBtn /></div></div>
          <div><h2><Clock3 size={25} aria-hidden="true" />Horario de atención</h2><dl>{schedule.map(row => <div key={row.day}><dt>{row.day}</dt><dd>{row.hours}</dd></div>)}</dl></div>
        </div>
      </section>
    </main>
    <Footer />
  </>);
}
