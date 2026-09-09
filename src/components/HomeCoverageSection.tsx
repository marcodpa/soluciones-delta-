import Link from "next/link";
import typography from "./HomeTypography.module.css";
import styles from "./HomeCoverageSection.module.css";

export default function HomeCoverageSection() {
  return (
    <section id="cobertura" aria-labelledby="coverage-title" className={styles.section}>
      <div className={`site-container ${styles.layout}`}>
        <div>
          <p className={`${typography.eyebrow} ${styles.label}`}>Atención a proyectos en Venezuela</p>
          <h2 id="coverage-title" className={`${typography.sectionTitle} ${styles.title}`}>
            Desde Zulia,<br />a su operación.
          </h2>
          <p className={styles.description}>
            Su proyecto empieza con una evaluación del trabajo en campo. Desde nuestra sede en
            San Francisco coordinamos solicitudes de servicios petroleros en Venezuela,
            confirmando disponibilidad, movilización y alcance antes de cotizar.
          </p>
          <Link href="/contacto" className={styles.contact}>Consultar mi proyecto <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.questions}>
          <details open>
            <summary>¿Cómo solicito un servicio fuera de Zulia?</summary>
            <p>
              Indique la ubicación de la instalación, el servicio requerido y las fechas previstas.
              Nuestro equipo revisará los accesos, la logística de traslado y la disponibilidad
              de equipos para definir una propuesta según las condiciones del proyecto.
            </p>
          </details>
          <details>
            <summary>¿Puedo combinar varios servicios en una operación?</summary>
            <p>
              Sí. Podemos coordinar servicios complementarios según el trabajo: por ejemplo,
              <Link href="/servicios/recuperacion-de-crudo-en-fosas"> recuperación de crudo en fosas</Link>,
              <Link href="/servicios/alquiler-calderas-inyeccion-vapor"> inyección de vapor</Link> y
              <Link href="/servicios/bombeo-de-crudo"> bombeo</Link> para el manejo de crudo, o
              <Link href="/servicios/limpieza-industrial-hidrojet"> limpieza industrial con hydrojet</Link> y
              <Link href="/servicios/trasegado-vacuum"> vacuum</Link> para la recolección de fluidos.
              Cada propuesta detalla los servicios incluidos.
            </p>
          </details>
          <details>
            <summary>¿Qué información necesitan para cotizar?</summary>
            <p>
              Comparta el tipo de fluido o residuo, el volumen estimado, el equipo o área a intervenir,
              la duración prevista y las condiciones de acceso. Las fotografías y fichas técnicas
              disponibles ayudan a precisar el alcance. Puede consultar primero nuestro
              <Link href="/servicios"> catálogo de servicios</Link>.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
