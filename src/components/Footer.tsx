"use client";

import { useLocalizedTree } from "@/lib/i18n/client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import styles from "./Footer.module.css";
const services = [
  { label: "Bombeo de Crudo", slug: "bombeo-de-crudo" },
  { label: "Transporte de Fluidos", slug: "trasegado-vacuum" },
  { label: "Frac Tanks 500 Bbl", slug: "frac-tanks" },
  { label: "Manejo de Desechos", slug: "manejo-de-desechos" },
  { label: "Calderas e Inyección de Vapor", slug: "alquiler-calderas-inyeccion-vapor" },
  { label: "Limpieza Hydrojet UHP", slug: "limpieza-industrial-hidrojet" },
  { label: "Recuperación de Crudo en Fosas", slug: "recuperacion-de-crudo-en-fosas" },
];
const navigation = [{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: "Nosotros", href: "/nosotros" }, { label: "Artículos", href: "/articulos" }, { label: "Contacto", href: "/contacto" }];
const coverage = [{ label: "Servicios petroleros en Zulia", slug: "zulia" }, { label: "Maracaibo", slug: "maracaibo" }, { label: "Costa Oriental del Lago", slug: "costa-oriental-del-lago" }, { label: "San Francisco", slug: "san-francisco" }];
export default function Footer() {
  const localize = useLocalizedTree();
  return localize(<footer className={styles.footer}>
    <div className="site-container">
      <div className={styles.top}><div><h2>Hablemos de su próximo proyecto.</h2><p>Equipos propios y capacidad técnica para su operación.</p></div><Link href="/contacto" className={styles.cta}>Contactar al equipo <ArrowRight size={18} aria-hidden="true" /></Link></div>
      <div className={styles.grid}>
        <div className={styles.brand}><Link href="/" aria-label="Soluciones Delta, inicio" className={styles.brandLogo}><Image src="/logo-v2.png" alt="Soluciones Delta C.A." width={88} height={98} /></Link><p>Empresa venezolana especializada en servicios técnicos para la industria petrolera. Flota propia, operación continua 24/7. San Francisco, Estado Zulia.</p><div className={styles.direct}><a href="https://wa.me/584246472446"><Phone size={16} aria-hidden="true" />+58 424-6472446</a><a href="mailto:delta@soluciones-delta.com"><Mail size={16} aria-hidden="true" />delta@soluciones-delta.com</a></div></div>
        <nav className={styles.column} aria-label="Navegación del pie de página"><h3>La empresa</h3><ul>{navigation.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
        <nav className={styles.column} aria-label="Servicios del pie de página"><h3>Servicios</h3><ul>{services.map(item => <li key={item.slug}><Link href={`/servicios/${item.slug}`}>{item.label}</Link></li>)}</ul></nav>
        <div className={styles.column}><h3>Cobertura</h3><ul>{coverage.map(item => <li key={item.slug}><Link href={`/servicios-petroleros/${item.slug}`}>{item.label}</Link></li>)}</ul><address>Calle 13 con Av. 5, Local 26A-162, Oficina 2.<br />Sector Manzanillo, San Francisco, Estado Zulia, Venezuela.</address></div>
      </div>
      <div className={styles.bottom}><span>© {new Date().getFullYear()} Soluciones Delta, C.A. — RIF J-50735393-1</span><span><i aria-hidden="true" />San Francisco, Estado Zulia · Venezuela</span></div>
    </div>
  </footer>);
}
