"use client";

import { useLocalizedTree } from "@/lib/i18n/client";
import Link from "next/link";
import styles from "./services.module.css";

const groups = [
  {
    icon: "pump",
    title: "Crudo y recuperación",
    description: "Crudo pesado, pozos, patios de tanques y canales. Capacidad de recuperación: 1.500 barriles por día.",
    links: [
      { label: "Bombeo y desnatado de crudo", slug: "bombeo-de-crudo" },
      { label: "Calderas e inyección de vapor", slug: "alquiler-calderas-inyeccion-vapor" },
      { label: "Recuperación de crudo en fosas", slug: "recuperacion-de-crudo-en-fosas" },
    ],
  },
  {
    icon: "truck",
    title: "Fluidos y almacenamiento",
    description: "Succión, transporte y almacenamiento de fluidos en campo.",
    links: [
      { label: "Camión vacuum de 160 barriles", slug: "trasegado-vacuum" },
      { label: "Frac tanks de 500 barriles", slug: "frac-tanks" },
    ],
  },
  {
    icon: "leaf",
    title: "Limpieza y residuos",
    description: "Limpieza industrial y gestión de residuos bajo el Decreto 2635.",
    links: [
      { label: "Hidrojet de 40.000 PSI", slug: "limpieza-industrial-hidrojet" },
      { label: "Manejo de desechos", slug: "manejo-de-desechos" },
    ],
  },
] as const;

function OverviewIcon({ name }: { name: "pump" | "truck" | "leaf" | "pin" | "document" }) {
  const localize = useLocalizedTree();
  return localize((
    <svg viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "pump" && <><path d="M7 44h45M19 43l7-28 9 28M22 31h10M11 26l32-15M12 26v15M16 25v16M43 10v33M40 3c7 3 10 10 8 16l-7-3-3-7Z" /><path d="m25 18 13-6" /></>}
      {name === "truck" && <><rect x="3" y="9" width="40" height="22" rx="10" /><path d="M3 36v-5h45V15h6l8 12v12h-5M47 39H29M17 39h-3M51 20v8h10M45 9v22" /><circle cx="10" cy="39" r="4" /><circle cx="24" cy="39" r="4" /><circle cx="52" cy="39" r="4" /></>}
      {name === "leaf" && <><path d="M18 37C5 15 29 7 46 3c0 23-5 38-24 36M14 44 38 13" /></>}
      {name === "pin" && <><path d="M32 45S16 29 16 19a16 16 0 0 1 32 0c0 10-16 26-16 26Z" /><circle cx="32" cy="19" r="5" /></>}
      {name === "document" && <><path d="M20 4h17l10 10v30H20ZM37 4v11h10M26 23h15M26 30h15M26 37h10" /></>}
    </svg>
  ));
}

export default function CompanyOverview() {
  const localize = useLocalizedTree();
  return localize((
    <section id="empresa" className={styles.company} aria-labelledby="services-company-title">
      <div className={styles.companyGrid}>
        <div>
          <span className={styles.companyLabel}>Servicios petroleros en Zulia</span>
          <h2 id="services-company-title">Empresa de servicios petroleros en Zulia y toda Venezuela</h2>
        </div>
        <div className={styles.companyIntro}>
          <p className={styles.companyLead}>Equipos propios y personal técnico certificado para operadoras, contratistas y plantas industriales.</p>
          <p>Operamos las 24 horas, los 7 días, con contratos ejecutados al 100% en campos del Estado Zulia.</p>
        </div>
      </div>
      <div className={styles.companyGroups}>
        {groups.map(group => (
          <div key={group.icon} className={styles.companyGroup}>
            <div className={styles.companyIcon}><OverviewIcon name={group.icon} /></div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className={styles.companyLinks}>
              {group.links.map(link => (
                <li key={link.slug}>
                  <Link href={`/servicios/${link.slug}`}>
                    <span>{link.label}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m6 3 5 5-5 5" /></svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.companyNotes}>
        <div className={styles.companyNote}>
          <OverviewIcon name="pin" />
          <div>
            <span className={styles.companyLabel}>Nuestra cobertura</span>
            <p>Sede en <Link href="/servicios-petroleros/san-francisco">San Francisco</Link>, <Link href="/servicios-petroleros/zulia">Zulia</Link>. Movilización a <Link href="/servicios-petroleros/maracaibo">Maracaibo</Link>, <Link href="/servicios-petroleros/costa-oriental-del-lago">Costa Oriental del Lago</Link> y coordinación de <Link href="/servicios-petroleros/venezuela">servicios petroleros en Venezuela</Link> según el proyecto.</p>
          </div>
        </div>
        <div className={styles.companyNote}>
          <OverviewIcon name="document" />
          <div>
            <span className={styles.companyLabel}>Antes de cotizar</span>
            <p>¿Quiere entender mejor cada servicio?<br />Lea nuestras <Link href="/articulos">guías sobre nuestros servicios.</Link></p>
          </div>
        </div>
      </div>
    </section>
  ));
}
