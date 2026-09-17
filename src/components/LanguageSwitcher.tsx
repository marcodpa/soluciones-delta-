"use client";
import { usePathname } from "next/navigation";
import { localePath } from "@/lib/i18n/translate";
import { useLocale } from "@/lib/i18n/client";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  function preserveLocation(event: React.MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = `${event.currentTarget.pathname}${window.location.search}${window.location.hash}`;
  }
  return <div className={styles.switcher} role="group" aria-label={locale === "en" ? "Language" : "Idioma"} translate="no">
    <a href={localePath(pathname, "es")} hrefLang="es" lang="es" aria-label="Español" aria-current={locale === "es" ? "true" : undefined} onClick={preserveLocation}>ES</a>
    <span aria-hidden="true" />
    <a href={localePath(pathname, "en")} hrefLang="en" lang="en" aria-label="English" aria-current={locale === "en" ? "true" : undefined} onClick={preserveLocation}>EN</a>
  </div>;
}
