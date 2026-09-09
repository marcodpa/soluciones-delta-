import Link from "next/link";
import { ArrowUpRight, Workflow, ScanLine, FileCheck2 } from "lucide-react";
import styles from "./HomeStrengths.module.css";

const benefits = [
  {
    number: "01",
    title: "Menos coordinación.\nMás control.",
    body: "Centralice los servicios de campo con un solo proveedor. Una coordinación directa para organizar equipos, personal y etapas del trabajo.",
    detail: "UN SOLO INTERLOCUTOR",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Criterio técnico\nen cada decisión.",
    body: "El servicio se define según el fluido, el equipo y las condiciones del sitio. Una respuesta ajustada a lo que su operación necesita.",
    detail: "SOLUCIONES SEGÚN LA OPERACIÓN",
    icon: ScanLine,
  },
  {
    number: "03",
    title: "Visibilidad de\nprincipio a fin.",
    body: "Registros y documentación para dar seguimiento al servicio. Información que facilita la supervisión del trabajo y su cierre.",
    detail: "SEGUIMIENTO Y DOCUMENTACIÓN",
    icon: FileCheck2,
  },
];

export default function HomeTrustSection() {
  return (
    <section id="por-que-elegirnos" aria-labelledby="trust-title" className={styles.trust}>
      <div className="site-container">
        <header className={styles.trustHeader}>
          <div>
            <span className={styles.eyebrow}>EL VALOR PARA SU OPERACIÓN</span>
            <h2 id="trust-title" className={styles.title}>¿Por qué elegirnos<span>?</span></h2>
          </div>
          <p className={styles.intro}>Una relación de trabajo que conecta la capacidad técnica con las prioridades de su operación.</p>
        </header>
        <div className={styles.benefitGrid}>
          {benefits.map(({ number, title, body, detail, icon: Icon }) => (
            <article key={number} className={styles.benefit}>
              <div className={styles.benefitTop}>
                <span className={styles.number} aria-hidden="true">{number}</span>
                <Icon size={29} strokeWidth={1.35} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className={styles.detail}>{detail}</span>
            </article>
          ))}
        </div>
        <div className={styles.trustFooter}>
          <p>Soluciones Delta, C.A. <span>Respaldo técnico en campo.</span></p>
          <Link className={styles.aboutLink} href="/nosotros">
            Conozca cómo trabajamos <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
