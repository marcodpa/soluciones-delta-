import { localizeTree, type Locale } from "@/lib/i18n/translate";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock3 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import { ARTICLES } from "@/lib/articles-data";
import styles from "./Editorial.module.css";

export default function ArticleIndex({ locale = "es" }: { locale?: Locale }) {
  const featured = ARTICLES[0];
  return localizeTree(<>
    <JsonLd locale={locale} breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Artículos", path: "/articulos" }]} />
    <Navbar />
    <main id="main-content" className={styles.page}>
      <header className={styles.hero}>
        <div className={`site-container ${styles.heroGrid}`}>
          <div>
            <nav aria-label="Ruta de navegación" className={styles.breadcrumbs}><Link href="/">Inicio</Link><span>/</span><span aria-current="page">Artículos</span></nav>
            <span className={styles.eyebrow}>Guías y artículos</span>
            <h1>Conocimiento para su operación.</h1>
            <p>Lo que conviene saber antes de contratar un servicio petrolero: equipos, procesos y criterios para tomar una mejor decisión en campo.</p>
            <div className={styles.heroMeta}><span><Clock3 size={15} aria-hidden="true" /> Lecturas prácticas</span><span>Por el equipo de Soluciones Delta</span></div>
          </div>
          <div className={styles.heroPhoto}><Image src="/servicios-campo.webp" alt="Equipos de Soluciones Delta en una operación de campo" fill priority sizes="(max-width:760px) 100vw, 45vw" /></div>
        </div>
      </header>
      <section className={styles.section} aria-labelledby="featured-article">
        <div className="site-container">
          <div className={styles.sectionHeading}><h2 id="featured-article">Para empezar.</h2><p>Una guía para entender el equipo y su aplicación.</p></div>
          <Link href={`/articulos/${featured.slug}`} className={styles.feature}>
            <div className={styles.featurePhoto}><Image src={featured.cover} alt={featured.coverAlt} fill sizes="(max-width:760px) 100vw, 55vw" /></div>
            <div className={styles.featureCopy}><span className={styles.eyebrow}>{featured.eyebrow}</span><h2>{featured.title}</h2><p>{featured.description}</p><span className={styles.textLink}>Leer guía <ArrowUpRight size={19} aria-hidden="true" /></span></div>
          </Link>
        </div>
      </section>
      <section className={`${styles.section} ${styles.library}`} aria-labelledby="all-articles">
        <div className="site-container">
          <div className={styles.sectionHeading}><h2 id="all-articles">Explore nuestras guías.</h2><p>Información útil para cada etapa de su proyecto.</p></div>
          <div className={styles.cards}>{ARTICLES.slice(1).map(article => <Link key={article.slug} href={`/articulos/${article.slug}`} className={styles.card}>
            <div className={styles.cardPhoto}><Image src={article.cover} alt={article.coverAlt} fill sizes="(max-width:760px) 100vw, (max-width:1000px) 50vw, 33vw" /></div>
            <div className={styles.cardCopy}><div className={styles.cardMeta}><span>{article.eyebrow}</span><span>{article.readingMinutes} min de lectura</span></div><h3>{article.title}</h3><p>{article.description}</p><span className={styles.textLink}>Leer artículo <ArrowUpRight size={18} aria-hidden="true" /></span></div>
          </Link>)}</div>
        </div>
      </section>
      <section className={styles.serviceCta}><div className="site-container"><div><span className={styles.eyebrow}>De la información a la operación</span><h2>Encuentre el servicio que necesita.</h2><p>Conozca nuestros equipos y capacidades para su proyecto.</p></div><Link href="/servicios" className="btn-primary">Explorar servicios <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>
    </main><Footer />
  </>, locale);
}
