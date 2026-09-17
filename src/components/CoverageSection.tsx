"use client";

import { useLocalizedTree } from "@/lib/i18n/client";
import Image from "next/image";
import Link from "next/link";
import styles from "./CoverageSection.module.css";

const regions = [
  { name: "Zulia", slug: "zulia" },
  { name: "Maracaibo", slug: "maracaibo" },
  { name: "Costa Oriental del Lago", slug: "costa-oriental-del-lago" },
  { name: "San Francisco", slug: "san-francisco" },
];

export default function CoverageSection({ id = "cobertura", embedded = false, compactBottom = false, variant = "plain" }: { id?: string; embedded?: boolean; compactBottom?: boolean; variant?: "plain" | "delta" }) {
  const localize = useLocalizedTree();
  return localize((
    <section id={id} className={`${styles.section} ${embedded ? styles.embedded : ""} ${compactBottom ? styles.compactBottom : ""} ${variant === "delta" ? styles.delta : ""}`} aria-labelledby={`${id}-title`}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Cobertura nacional</p>
          <h2 id={`${id}-title`}>Desde Zulia,<br /> para toda Venezuela.</h2>
          <p>Base operativa en San Francisco. Atención a proyectos en todo el país.</p>
          <nav aria-label="Zonas de servicio" className={styles.regionLinks}>
            {regions.map(region => <Link key={region.slug} href={`/servicios-petroleros/${region.slug}`}>{region.name}</Link>)}
          </nav>
        </div>
        <figure className={styles.map}>
          <div className={styles.mapHeader}>
            <span>Venezuela</span>
            <span className={styles.north} aria-label="Norte"><svg width="16" height="22" viewBox="0 0 16 22" fill="none" aria-hidden="true"><path d="M8 1 14 18 8 14 2 18Z" stroke="currentColor" strokeWidth="1.2" /><path d="M8 1v13l-6 4Z" fill="currentColor" /></svg>N</span>
          </div>
          <div className={styles.mapCanvas}>
            <Image src="/maps/venezuela-zulia.svg" alt="Mapa de Venezuela con el estado Zulia destacado al noroeste, alrededor del lago de Maracaibo" width={540} height={470} />
            <span className={styles.mapLabel}>Estado Zulia</span>
          </div>
          <figcaption className={styles.mapCaption}>
            <div className={styles.base}>
              <span className={styles.baseIcon} aria-hidden="true"><svg width="22" height="26" viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 10c0 7-9 15-9 15S3 17 3 10a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg></span>
              <div><span className={styles.baseLabel}>Sede operativa</span><Link href="/servicios-petroleros/san-francisco" className={styles.baseLink}>San Francisco, Zulia <span aria-hidden="true">↗</span></Link></div>
            </div>
            <div className={styles.mapFootnote}><span>Atención a proyectos en todo el país.</span><a href="https://www.geoboundaries.org/api/current/gbOpen/VEN/ADM1/" target="_blank" rel="noopener noreferrer">Fuente cartográfica</a></div>
          </figcaption>
        </figure>
      </div>
    </section>
  ));
}
