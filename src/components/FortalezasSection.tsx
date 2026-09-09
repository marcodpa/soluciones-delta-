import Image from "next/image";
import { Truck, HardHat, ClipboardCheck, Network } from "lucide-react";
import styles from "./HomeStrengths.module.css";

const strengths = [
  {
    title: "Flota propia",
    body: "Unidades y equipos bajo nuestra gestión, con mantenimiento y preparación para el trabajo en campo.",
    icon: Truck,
  },
  {
    title: "Personal técnico",
    body: "Operadores especializados en bombeo, vacuum, vapor y limpieza industrial. Experiencia aplicada a cada servicio.",
    icon: HardHat,
  },
  {
    title: "Control documental",
    body: "Protocolos de seguridad, registros y documentación que acompañan la ejecución de cada operación.",
    icon: ClipboardCheck,
  },
  {
    title: "Servicios integrados",
    body: "Extracción, traslado, almacenamiento y manejo de fluidos. Capacidades que se complementan en campo.",
    icon: Network,
  },
];

export default function FortalezasSection() {
  return (
    <section id="fortalezas" aria-labelledby="fortalezas-title" className={styles.strengths}>
      <div className={styles.strengthsContainer}>
        <div className={styles.sectionTop}>
          <span className={styles.eyebrow}>SOLUCIONES DELTA / CAPACIDAD OPERATIVA</span>
          <span className={styles.location}>Zulia, Venezuela</span>
        </div>
        <div className={styles.strengthsLayout}>
          <figure className={styles.photo}>
            <Image
              src="/vacuum-truck.webp"
              alt="Camión vacuum y semirremolque para el manejo de fluidos en campo"
              fill
              sizes="(max-width: 760px) 100vw, 44vw"
              className={styles.photoImage}
            />
            <figcaption className={styles.photoCaption}>
              <span className={styles.photoLabel}>EQUIPAMIENTO Y OPERACIÓN</span>
              <p>La capacidad empieza<br />en el campo.</p>
              <span className={styles.captionRule} aria-hidden="true" />
            </figcaption>
          </figure>
          <div className={styles.capabilities}>
            <header className={styles.strengthsHeader}>
              <h2 id="fortalezas-title" className={styles.title}>Nuestras<br />fortalezas<span>.</span></h2>
              <p className={styles.intro}>Equipos, conocimiento y organización para responder a las exigencias de la industria petrolera.</p>
            </header>
            <div className={styles.capabilityGrid}>
              {strengths.map(({ title, body, icon: Icon }) => (
                <article className={styles.capability} key={title}>
                  <Icon size={27} strokeWidth={1.4} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
