"use client";

import { useLocalizedTree } from "@/lib/i18n/client";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES, type Article } from "@/lib/articles-data";
import styles from "./ArticleHighlights.module.css";

function ArticleMeta({ article }: { article: Article }) {
  const localize = useLocalizedTree();
  return localize(<div className={styles.meta}><span>{article.eyebrow.replace("Guía · ", "")}</span><span>{article.readingMinutes} min de lectura</span></div>);
}

export default function ArticleHighlights() {
  const localize = useLocalizedTree();
  const [featured, ...rest] = ARTICLES;
  if (!featured) return null;

  return localize((
    <div className={styles.layout}>
      <article className={styles.featured} data-article-motion="card">
        <Link href={`/articulos/${featured.slug}`} className={styles.featuredLink}>
          <div className={styles.featuredPhoto}>
            <Image src={featured.cover} alt={featured.coverAlt} fill sizes="(max-width: 760px) 100vw, 54vw" className={styles.image} />
            <span className={styles.photoLabel}>Guía de equipos</span>
          </div>
          <div className={styles.featuredCopy}>
            <ArticleMeta article={featured} />
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
            <span className={styles.readLink}>Leer la guía <span aria-hidden="true">↗</span></span>
          </div>
        </Link>
      </article>
      <div className={styles.readingList}>
        {rest.slice(0, 3).map(article => (
          <article key={article.slug} className={styles.story} data-article-motion="card">
            <Link href={`/articulos/${article.slug}`} className={styles.storyLink}>
              <div className={styles.storyCopy}>
                <ArticleMeta article={article} />
                <h3>{article.title}</h3>
                <span className={styles.readLink}>Leer artículo <span aria-hidden="true">↗</span></span>
              </div>
              <div className={styles.storyPhoto}><Image src={article.cover} alt={article.coverAlt} fill sizes="(max-width: 480px) 84px, (max-width: 760px) 140px, 13vw" className={styles.image} /></div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  ));
}
