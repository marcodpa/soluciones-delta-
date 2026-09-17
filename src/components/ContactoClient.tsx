"use client";

import { useLocale, useLocalizedTree } from "@/lib/i18n/client";
import { translateText } from "@/lib/i18n/translate";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, Phone, Mail, MapPin, Clock3, Building2, MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./CompanyPages.module.css";

const DescargarPlanillaBtn = dynamic(() => import("./PlanillaCotizacionPDF"), { ssr: false });
const services = ["Bombeo de Crudo (Extracción / Transferencia)", "Transporte de Fluidos con Vacuum (160 Bbl)", "Suministro de Frac Tanks 500 Bbl", "Manejo de Desechos Industriales", "Inyección de Vapor para Tanques / Patio de Tanques", "Limpieza Industrial Hydrojet (20.000 / 40.000 PSI)", "Recuperación de Crudo en Fosas, Canales o Tanques", "Otro / Consulta General"];
const channels = [
  { icon: Phone, title: "WhatsApp", value: "+58 424-6472446", href: "https://wa.me/584246472446", description: "Atención directa y emergencias 24/7." },
  { icon: Mail, title: "Correo electrónico", value: "delta@soluciones-delta.com", href: "mailto:delta@soluciones-delta.com", description: "Cuéntenos los detalles de su proyecto." },
  { icon: MapPin, title: "Sede operativa", value: "San Francisco, Estado Zulia", href: "https://maps.google.com/?q=San+Francisco+Zulia+Venezuela", description: "Nuestra base de operaciones en Venezuela." },
];
const schedule = [
  { day: "Lunes — Viernes", hours: "7:00 AM – 6:00 PM" },
  { day: "Sábados", hours: "8:00 AM – 2:00 PM" },
  { day: "Domingos / Feriados", hours: "Solo emergencias" },
  { day: "Emergencias", hours: "24 / 7" },
];

export default function ContactoClient() {
  const localize = useLocalizedTree();
  const locale = useLocale();
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", location: "", message: "" });
  const message = locale === "en"
    ? `Hello, Soluciones Delta. I would like to request a quote.\nName: ${form.name.trim()}\nCompany: ${form.company.trim()}\nPhone: ${form.phone.trim()}\nEmail: ${form.email.trim()}\nService: ${translateText(form.service, locale)}\nLocation: ${form.location.trim()}\n\nOperation details:\n${form.message.trim()}`
    : `Hola, Soluciones Delta. Quisiera solicitar una cotización.\nNombre: ${form.name.trim()}\nEmpresa: ${form.company.trim()}\nTeléfono: ${form.phone.trim()}\nCorreo: ${form.email.trim()}\nServicio: ${form.service}\nUbicación: ${form.location.trim()}\n\nDescripción de la operación:\n${form.message.trim()}`;
  const update = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm(current => ({ ...current, [key]: event.target.value }));
  return localize(<>
    <Navbar />
    <main id="main-content" className={styles.page}>
      <section className={styles.contactHero}>
        <div className={`site-container ${styles.contactGrid}`}>
          <div className={styles.contactIntro}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Inicio</Link><span aria-hidden="true">/</span><span>Contacto</span></nav>
            <h1>Hablemos de su operación.</h1>
            <p>Contáctenos directamente por WhatsApp o prepare su solicitud. Nuestro equipo técnico le ayudará a definir el servicio que necesita.</p>
            <a href="https://wa.me/584246472446" className={styles.whatsapp}><MessageCircle size={25} aria-hidden="true" />+58 424-6472446<ArrowRight size={18} aria-hidden="true" /></a>
            <small>Atención directa. Emergencias 24/7.</small>
          </div>
          <figure className={styles.contactPhoto}>
            <Image src="/vacuum/vacuum-truck-howo-pdvsa.webp" alt="Unidad vacuum de Soluciones Delta en operación en el Estado Zulia" fill priority sizes="(max-width: 700px) 100vw, 50vw" />
            <figcaption>Equipos propios para su operación.</figcaption>
          </figure>
          <div className={styles.formPanel}>
            <h2>Prepare su solicitud</h2><p>Cuéntenos qué necesita y dónde se realizará el trabajo.</p>
            <form className={styles.form} action="https://wa.me/584246472446" method="get" target="_blank" rel="noopener noreferrer">
              <input type="hidden" name="text" value={message} />
              <div className={styles.field}><label htmlFor="contact-name">Nombre completo *</label><input id="contact-name" autoComplete="name" value={form.name} onChange={update("name")} placeholder="Su nombre" required pattern=".*\S.*" maxLength={120} /></div>
              <div className={styles.field}><label htmlFor="contact-company">Empresa</label><input id="contact-company" autoComplete="organization" value={form.company} onChange={update("company")} placeholder="Nombre de su empresa" maxLength={160} /></div>
              <div className={styles.field}><label htmlFor="contact-phone">Teléfono *</label><input id="contact-phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} placeholder="+58 424 1234567" required minLength={7} maxLength={30} pattern="\+?[0-9\s\(\)\-]{7,30}" title="Escriba su teléfono con código de área." /></div>
              <div className={styles.field}><label htmlFor="contact-email">Correo electrónico</label><input id="contact-email" type="email" autoComplete="email" value={form.email} onChange={update("email")} placeholder="correo@empresa.com" maxLength={180} /></div>
              <div className={`${styles.field} ${styles.full}`}><label htmlFor="contact-service">Servicio de interés *</label><select id="contact-service" value={form.service} onChange={update("service")} required><option value="" disabled>Seleccione un servicio</option>{services.map(service => <option key={service} value={service}>{service}</option>)}</select></div>
              <div className={`${styles.field} ${styles.full}`}><label htmlFor="contact-location">Ubicación del proyecto *</label><input id="contact-location" autoComplete="address-level2" value={form.location} onChange={update("location")} placeholder="Ciudad, campo o locación" required pattern=".*\S.*" maxLength={180} /></div>
              <div className={`${styles.field} ${styles.full}`}><label htmlFor="contact-message">Descripción de la operación</label><textarea id="contact-message" value={form.message} onChange={update("message")} placeholder="Tipo de trabajo, volumen aproximado y detalles de su operación…" rows={3} maxLength={1800} /></div>
              <button type="submit" className={`${styles.submit} ${styles.full}`}>Preparar solicitud <ArrowRight size={18} aria-hidden="true" /></button>
            </form>
            <div className={styles.formHelp}><MessageCircle size={19} aria-hidden="true" /><p>Revise y envíe su solicitud por WhatsApp. Los campos con * son obligatorios.</p></div>
          </div>
        </div>
      </section>
      <section className={styles.channels}>
        <div className="site-container"><div className={styles.channelsHeading}><h2>Nuestros canales de contacto</h2><p>Estamos a su disposición para atender sus consultas y requerimientos.</p></div><div className={styles.channelGrid}>{channels.map(({ icon: Icon, title, value, href, description }) => <a key={title} href={href} className={styles.channel}><Icon aria-hidden="true" /><div><h3>{title}</h3><strong>{value}</strong><p>{description}</p></div></a>)}</div></div>
      </section>
      <section className={styles.visit}>
        <div className={`site-container ${styles.visitGrid}`}>
          <div><h2><Building2 size={25} aria-hidden="true" />Nuestra sede</h2><address>Calle 13 con Av. 5, Local 26A-162, Oficina 2.<br />Sector Manzanillo, San Francisco, Estado Zulia, Venezuela.</address><p>Soluciones Delta, C.A. · RIF J-50735393-1</p><div className={styles.visitExtras}><a href="https://maps.google.com/?q=San+Francisco+Zulia+Venezuela" className={styles.textLink}>Ver ubicación <ArrowRight size={17} aria-hidden="true" /></a><DescargarPlanillaBtn /></div></div>
          <div><h2><Clock3 size={25} aria-hidden="true" />Horario de atención</h2><dl>{schedule.map(row => <div key={row.day}><dt>{row.day}</dt><dd>{row.hours}</dd></div>)}</dl></div>
        </div>
      </section>
    </main>
    <Footer />
  </>);
}
