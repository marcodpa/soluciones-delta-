import Link from "next/link";
import ArticleHighlights from "./ArticleHighlights";
import ArticlesMotion from "./ArticlesMotion";
import styles from "./HomeArticlesSection.module.css";

export default function HomeArticlesSection() {
  return (
    <section id="articulos" className={styles.section} aria-labelledby="home-articles-title">
      <div className={`site-container ${styles.container}`}>
        <ArticlesMotion>
        <header className={styles.header}>
          <span className={styles.rule} data-article-motion="rule" aria-hidden="true" />
          <div data-article-motion="header">
            <span className={styles.label}>Guías y artículos</span>
            <h2 id="home-articles-title">Conocimiento para<br /> su operación.</h2>
          </div>
          <div className={styles.intro} data-article-motion="header">
            <p>Conozca los equipos, procesos y criterios que le ayudan a elegir el servicio adecuado para su proyecto.</p>
            <Link href="/articulos">Explorar todas las guías <span aria-hidden="true">↗</span></Link>
          </div>
        </header>
        <ArticleHighlights />
        </ArticlesMotion>
      </div>
    </section>
  );
}
