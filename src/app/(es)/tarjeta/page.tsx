import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Download, Instagram, Leaf, Mail, MapPin, Menu, Phone, ShieldCheck, Users, UserRoundPlus } from "lucide-react";
import { OPERATIONS_BASE_MAPS_URL } from "@/lib/location";
import type { Metadata } from "next";
import styles from "./tarjeta.module.css";

export const metadata: Metadata = {
  title: "Contacto directo y tarjeta digital",
  description: "Contacte a Soluciones Delta: WhatsApp, teléfono, correo, Instagram y ubicación en San Francisco, Zulia. Servicios petroleros en Venezuela.",
  alternates: { canonical: "https://soluciones-delta.com/tarjeta" },
  openGraph: { title: "Soluciones Delta · Contacto directo", description: "Todos nuestros canales de contacto en un solo lugar.", url: "https://soluciones-delta.com/tarjeta", images: [{ url: "/tarjeta/caldera.webp", width: 1600, height: 900, alt: "Caldera industrial de vapor" }] },
};

const whatsapp = "https://wa.me/584246472446?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Soluciones%20Delta.";
const services = [
  { title: "Bombeo", slug: "bombeo-de-crudo", image: "/bombeo/equipo-principal.webp" },
  { title: "Vacuum", slug: "trasegado-vacuum", image: "/vacuum/vacuum-truck-howo-pdvsa.webp" },
  { title: "Frac tanks", slug: "frac-tanks", image: "/frac-tanks/bateria-frac-tanks.webp" },
  { title: "Hydrojet", slug: "limpieza-industrial-hidrojet", image: "/hidrojet/unidad-hidrojet-campo.png" },
];

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.6a8.6 8.6 0 0 1-12.7 7.6L3 20.5l1.3-4.7a8.6 8.6 0 1 1 16.2-4.2Z" stroke="currentColor" strokeWidth="1.7"/><path d="M8.2 7.6c-.6 0-1.2.9-1.2 1.7 0 2.7 4 6.6 6.8 6.6.9 0 2-.6 2.1-1.5l-2.6-1.4-.9 1c-1.4-.5-2.9-2-3.4-3.3l1-.9-1.1-2.2h-.7Z" fill="currentColor"/></svg>;
}

export default function DigitalCard() {
  return <main className={styles.page}>
    <a className={styles.skip} href="#contacto-directo">Ir a contacto</a>
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link href="/" aria-label="Soluciones Delta, ir al inicio"><Image src="/logo-v2.png" alt="Soluciones Delta C.A." width={96} height={108} priority className={styles.logo}/></Link>
        <p className={styles.motto}>Energía que mueve<br/>Venezuela<span/></p>
        <details className={styles.menu}><summary aria-label="Abrir menú"><Menu size={30}/></summary><nav aria-label="Navegación de la tarjeta"><Link href="/">Página principal</Link><Link href="/servicios">Todos los servicios</Link><Link href="/nosotros">Nosotros</Link><a href="#contacto-directo">Contacto directo</a></nav></details>
      </header>
      <section className={styles.hero} aria-labelledby="tarjeta-title">
        <div className={styles.intro}><h1 id="tarjeta-title">Soluciones Delta</h1><p>Servicios petroleros en Venezuela</p><div className={styles.values}><span><ShieldCheck/>Operación<br/>segura</span><span><Leaf/>Eficiencia<br/>en campo</span><span><Users/>Compromiso<br/>con Venezuela</span></div></div>
        <div className={styles.visual}><Image src="/tarjeta/caldera.webp" alt="Caldera industrial y generador de vapor OTSG sobre semirremolque" fill priority sizes="(max-width: 760px) 100vw, 1200px" className={styles.photo}/><div className={styles.photoCaption}><span><MapPin/>Zulia, Venezuela</span><Link href="/servicios/alquiler-calderas-inyeccion-vapor">Calderas e inyección de vapor <ArrowUpRight size={16}/></Link></div></div>
        <section id="contacto-directo" className={styles.contact} aria-label="Contacto directo">
          <div className={styles.phone}><span className={styles.phoneIcon}><WhatsAppIcon/></span><div><a href="tel:+584246472446">+58 424-6472446</a><p>Atención directa y personalizada</p></div></div>
          <a className={styles.whatsapp} href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/>Escribir por WhatsApp<ChevronRight size={22}/></a>
          <div className={styles.actions}>
            <a href="tel:+584246472446"><Phone/><span>Llamar</span></a>
            <a href="mailto:delta@soluciones-delta.com"><Mail/><span>Correo</span></a>
            <a href="https://www.instagram.com/soluciones_delta/" target="_blank" rel="noopener noreferrer"><Instagram/><span>Instagram</span></a>
            <a href={OPERATIONS_BASE_MAPS_URL} target="_blank" rel="noopener noreferrer"><MapPin/><span>Ubicación</span></a>
          </div>
          <a className={styles.email} href="mailto:delta@soluciones-delta.com">delta@soluciones-delta.com</a>
        </section>
      </section>
      <section className={styles.services} aria-labelledby="services-title"><div className={styles.servicesHeading}><h2 id="services-title">Nuestros servicios</h2><Link href="/servicios">Ver todos <ArrowUpRight size={16}/></Link></div><div className={styles.serviceGrid}>{services.map(service=><a className={styles.service} href={`/servicios/${service.slug}`} key={service.slug}><div><Image src={service.image} alt="" fill sizes="(max-width: 760px) 45vw, 260px"/></div><span>{service.title}<ArrowUpRight size={16}/></span></a>)}</div><a className={styles.save} href="/tarjeta/soluciones-delta.vcf" download><UserRoundPlus/>Guardar contacto<Download size={20}/></a></section>
      <footer className={styles.footer}><div><p>Trabajo en campo.<br/><strong>Resultados en el futuro.</strong></p><Link href="/">Visitar nuestra web <ArrowUpRight size={16}/></Link></div><div><a href={OPERATIONS_BASE_MAPS_URL} target="_blank" rel="noopener noreferrer"><MapPin size={18}/>San Francisco, Zulia</a><p>Sector Manzanillo · Venezuela</p><p>Soluciones Delta, C.A. · RIF J-50735393-1</p><a className={styles.qrDownload} href="/tarjeta/tarjeta-qr-delta.png" download>Descargar QR <Download size={14}/></a></div></footer>
    </div>
  </main>;
}
