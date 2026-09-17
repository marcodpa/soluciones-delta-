"use client";

import { useState } from "react";
import styles from "./services.module.css";

export default function CatalogDownload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function download() {
    setLoading(true);
    setError(false);
    try {
      const { downloadServicesCatalog } = await import("@/components/ServicesCatalogoPDF");
      await downloadServicesCatalog();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.download}>
      <button type="button" onClick={download} disabled={loading} className={styles.textLink}>
        {loading ? "Preparando catálogo…" : "Descargar catálogo"}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4" /></svg>
      </button>
      {error && <p role="alert">No se pudo descargar. Intente de nuevo o solicítelo por WhatsApp.</p>}
    </div>
  );
}
