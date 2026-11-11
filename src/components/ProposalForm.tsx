"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Mail, Paperclip, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/client";
import { translateText } from "@/lib/i18n/translate";
import styles from "./CompanyPages.module.css";

const MAX_FILES = 5;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
const ACCEPT = ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.webp,.txt,.csv";
const ACCEPT_RE = /\.(pdf|docx?|xlsx?|pptx?|jpe?g|png|webp|txt|csv)$/i;
const EMPTY = { name: "", company: "", email: "", phone: "", website: "", subject: "", message: "" };

const ERRORS: Record<string, string> = {
  email: "Revise su correo electrónico.",
  phone: "Revise su número de teléfono.",
  website: "Revise la dirección de su página web.",
  files_count: "Puede adjuntar hasta 5 archivos.",
  files_size: "Los archivos adjuntos no pueden superar 4 MB en total.",
  files_type: "Formato de archivo no permitido. Use PDF, Word, Excel, PowerPoint o imágenes.",
  default: "No pudimos enviar su propuesta. Escríbanos a delta@soluciones-delta.com o por WhatsApp.",
};

function formatSize(bytes: number) {
  return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function ProposalForm() {
  const locale = useLocale();
  const t = (text: string) => translateText(text, locale);
  const [form, setForm] = useState(EMPTY);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  const update = (key: keyof typeof EMPTY) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(current => ({ ...current, [key]: event.target.value }));

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const incoming = Array.from(list);
    const next = [...files, ...incoming.filter(f => !files.some(x => x.name === f.name && x.size === f.size))];
    if (incoming.some(f => !ACCEPT_RE.test(f.name))) setError(t(ERRORS.files_type));
    else if (next.length > MAX_FILES) setError(t(ERRORS.files_count));
    else if (next.reduce((s, f) => s + f.size, 0) > MAX_TOTAL_BYTES) setError(t(ERRORS.files_size));
    else { setError(""); setFiles(next); }
    if (inputRef.current) inputRef.current.value = "";
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setStatus("sending");
    const body = new FormData(event.currentTarget);
    body.delete("files");
    files.forEach(file => body.append("files", file));
    try {
      const response = await fetch("/api/propuesta", { method: "POST", body });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error || "default");
      setStatus("sent");
      setForm(EMPTY);
      setFiles([]);
    } catch (err) {
      setStatus("idle");
      setError(t(ERRORS[err instanceof Error ? err.message : ""] ?? ERRORS.default));
    }
  };

  return (
    <section className={styles.proposal} id="propuesta" aria-labelledby="proposal-title">
      <div className={`site-container ${styles.proposalGrid}`}>
        <div className={styles.proposalIntro}>
          <span className={styles.proposalEyebrow}><Mail size={16} aria-hidden="true" />{t("Correo de Soluciones Delta")}</span>
          <h2 id="proposal-title">{t("Envíenos su propuesta")}</h2>
          <p>{t("Para requerimientos formales, licitaciones, propuestas comerciales o proveedores. Adjunte sus documentos y su propuesta llegará directo al correo de Soluciones Delta.")}</p>
          <ul>
            <li>{t("Datos de contacto para responderle")}</li>
            <li>{t("Su página web, si la tiene")}</li>
            <li>{t("Hasta 5 archivos: PDF, Word, Excel o imágenes (4 MB en total)")}</li>
          </ul>
        </div>
        <div className={styles.proposalPanel}>
          {status === "sent" ? (
            <div className={styles.proposalSent} role="status">
              <CheckCircle2 size={44} aria-hidden="true" />
              <h3>{t("¡Propuesta enviada!")}</h3>
              <p>{t("La recibimos en nuestro correo. Le responderemos a la dirección que nos indicó.")}</p>
              <button type="button" className={styles.textLink} onClick={() => setStatus("idle")}>{t("Enviar otra propuesta")} <ArrowRight size={17} aria-hidden="true" /></button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={submit} noValidate={false}>
              <div className={styles.honeypot} aria-hidden="true"><label htmlFor="proposal-hp">Web</label><input id="proposal-hp" name="empresa_web" tabIndex={-1} autoComplete="off" /></div>
              <div className={styles.field}><label htmlFor="proposal-name">{t("Nombre completo *")}</label><input id="proposal-name" name="name" autoComplete="name" value={form.name} onChange={update("name")} placeholder={t("Su nombre")} required pattern=".*\S.*" maxLength={120} /></div>
              <div className={styles.field}><label htmlFor="proposal-company">{t("Empresa")}</label><input id="proposal-company" name="company" autoComplete="organization" value={form.company} onChange={update("company")} placeholder={t("Nombre de su empresa")} maxLength={160} /></div>
              <div className={styles.field}><label htmlFor="proposal-email">{t("Correo electrónico *")}</label><input id="proposal-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update("email")} placeholder="correo@empresa.com" required maxLength={180} /></div>
              <div className={styles.field}><label htmlFor="proposal-phone">{t("Teléfono *")}</label><input id="proposal-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} placeholder="+58 424 1234567" required minLength={7} maxLength={30} pattern="\+?[0-9\s\(\)\-]{7,30}" title={t("Escriba su teléfono con código de área.")} /></div>
              <div className={`${styles.field} ${styles.full}`}><label htmlFor="proposal-website">{t("Página web (opcional)")}</label><input id="proposal-website" name="website" type="text" inputMode="url" autoComplete="url" value={form.website} onChange={update("website")} placeholder="www.suempresa.com" maxLength={200} /></div>
              <div className={`${styles.field} ${styles.full}`}><label htmlFor="proposal-subject">{t("Asunto *")}</label><input id="proposal-subject" name="subject" value={form.subject} onChange={update("subject")} placeholder={t("Ej.: Propuesta de servicio, licitación, proveedor…")} required pattern=".*\S.*" maxLength={160} /></div>
              <div className={`${styles.field} ${styles.full}`}><label htmlFor="proposal-message">{t("Mensaje *")}</label><textarea id="proposal-message" name="message" value={form.message} onChange={update("message")} placeholder={t("Describa su propuesta o requerimiento…")} rows={5} required maxLength={5000} /></div>
              <div className={`${styles.field} ${styles.full}`}>
                <span className={styles.fileLabel}>{t("Archivos adjuntos (opcional)")}</span>
                <label
                  className={styles.fileDrop}
                  onDragOver={event => event.preventDefault()}
                  onDrop={event => { event.preventDefault(); addFiles(event.dataTransfer.files); }}
                >
                  <Paperclip size={20} aria-hidden="true" />
                  <span><strong>{t("Adjuntar archivos")}</strong> {t("o arrástrelos aquí")}</span>
                  <small>{t("PDF, Word, Excel, PowerPoint o imágenes · hasta 5 archivos, 4 MB en total")}</small>
                  <input ref={inputRef} type="file" name="files" multiple accept={ACCEPT} onChange={event => addFiles(event.target.files)} className={styles.fileInput} />
                </label>
                {files.length > 0 && (
                  <ul className={styles.fileList}>
                    {files.map(file => (
                      <li key={`${file.name}-${file.size}`}>
                        <FileText size={17} aria-hidden="true" /><span>{file.name}</span><small>{formatSize(file.size)}</small>
                        <button type="button" onClick={() => setFiles(current => current.filter(f => f !== file))} aria-label={`${t("Quitar")} ${file.name}`}><X size={16} aria-hidden="true" /></button>
                      </li>
                    ))}
                    <li className={styles.fileTotal}>{formatSize(totalSize)} / 4 MB</li>
                  </ul>
                )}
              </div>
              {error && <p className={`${styles.formError} ${styles.full}`} role="alert">{error}</p>}
              <button type="submit" className={`${styles.submit} ${styles.full}`} disabled={status === "sending"}>{status === "sending" ? t("Enviando…") : t("Enviar propuesta")} <ArrowRight size={18} aria-hidden="true" /></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
