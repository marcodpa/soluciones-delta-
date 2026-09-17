"use client";

import { useLocale, useLocalizedTree } from "@/lib/i18n/client";
import { translateText } from "@/lib/i18n/translate";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CATALOG_SERVICES, type ServiceCategory } from "@/lib/services-catalog";
import CatalogDownload from "./CatalogDownload";
import styles from "./services.module.css";

const filters: { value: ServiceCategory; label: string }[] = [
  { value: "extraction", label: "Extraer y recuperar" },
  { value: "transport", label: "Transportar y almacenar" },
  { value: "industrial", label: "Limpiar y gestionar" },
];

export default function ServicesCatalog() {
  const localize = useLocalizedTree();
  const locale = useLocale();
  const [category, setCategory] = useState<ServiceCategory>("all");

  useEffect(() => {
    const readFilter = () => {
      const value = new URLSearchParams(window.location.search).get("categoria");
      setCategory(filters.some(filter => filter.value === value) ? value as ServiceCategory : "all");
    };
    readFilter();
    window.addEventListener("popstate", readFilter);
    return () => window.removeEventListener("popstate", readFilter);
  }, []);

  function chooseCategory(value: ServiceCategory) {
    setCategory(value);
    const url = new URL(window.location.href);
    if (value === "all") url.searchParams.delete("categoria");
    else url.searchParams.set("categoria", value);
    window.history.replaceState(null, "", url);
  }

  const count = CATALOG_SERVICES.filter(service => category === "all" || service.category === category).length;
  const showFeatured = category === "all" || category === "transport";
  const showDetails = category !== "transport";

  return localize((
    <section id="catalogo" className={styles.catalog} aria-labelledby="catalog-title">
      <div className={styles.filters} role="group" aria-label="Filtrar servicios según su necesidad">
        {filters.map(filter => (
          <button key={filter.value} type="button" aria-pressed={category === filter.value}
            aria-controls="services-results" onClick={() => chooseCategory(filter.value)}>
            {filter.label}
          </button>
        ))}
      </div>
      <div className={styles.filterStatus}>
        <p role="status" aria-live="polite">{category === "all" ? "Explore nuestros 7 servicios" : locale === "en" ? `${count} services · ${translateText(filters.find(filter => filter.value === category)?.label ?? "", locale)}` : `${count} servicios para ${filters.find(filter => filter.value === category)?.label.toLowerCase()}`}</p>
        <button type="button" aria-pressed={category === "all"} onClick={() => chooseCategory("all")} aria-controls="services-results">Ver todos</button>
      </div>
      <div className={styles.catalogHeading}>
        <h2 id="catalog-title">Elija según su necesidad.</h2>
        <CatalogDownload />
      </div>
      <div id="services-results" className={`${styles.catalogGrid} ${category !== "all" ? styles.filteredGrid : ""}`}>
        <div className={styles.featuredList} hidden={!showFeatured}>
          {CATALOG_SERVICES.filter(service => service.featured).map(service => (
            <article key={service.slug} className={styles.featured}>
              <Link href={`/servicios/${service.slug}`} className={styles.featuredImage} aria-label={locale === "en" ? `Explore ${translateText(service.title, locale)}` : `Conocer ${service.title}`}>
                <Image src={service.img} alt={locale === "en" ? `${translateText(service.title, locale)}: equipment owned by Soluciones Delta` : `${service.title}: equipo propio de Soluciones Delta`} fill
                  sizes="(max-width: 760px) 100vw, 46vw" className={styles.equipmentPhoto} />
              </Link>
              <h3><Link href={`/servicios/${service.slug}`}>{service.title}</Link></h3>
              <p>{service.description}</p>
              <Link href={`/servicios/${service.slug}`} className={styles.textLink}>Ver servicio <span aria-hidden="true">↗</span><span className="sr-only"> de {service.title}</span></Link>
            </article>
          ))}
        </div>
        <div className={styles.detailList} hidden={!showDetails}>
          {CATALOG_SERVICES.filter(service => !service.featured).map((service, index) => (
            <details key={service.slug} className={styles.serviceDetail} open={index === 0 ? true : undefined}
              hidden={category !== "all" && service.category !== category}>
              <summary>
                <span className={styles.detailImage}>
                  <Image src={service.img} alt="" fill sizes="(max-width: 480px) 72px, 120px" />
                </span>
                <span className={styles.detailCopy}>
                  <h3>{service.title}</h3>
                  <span>{service.description}</span>
                </span>
                <span className={styles.toggleIcon} aria-hidden="true" />
              </summary>
              <div className={styles.detailBody}>
                <p>{service.summary}</p>
                <Link href={`/servicios/${service.slug}`} className={styles.textLink}>Ver servicio completo <span aria-hidden="true">↗</span><span className="sr-only"> de {service.title}</span></Link>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  ));
}
