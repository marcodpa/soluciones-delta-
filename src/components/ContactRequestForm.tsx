"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Mail, MessageCircle, Paperclip, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/client";
import { translateText } from "@/lib/i18n/translate";
import { DELTA_EMAIL } from "@/lib/email";
import styles from "./CompanyPages.module.css";

// Single contact form: by email it goes through FormSubmit (with attachments); by WhatsApp it opens the chat with the text ready.
const WHATSAPP = "https://wa.me/584246472446";
const MAX_FILES = 5;
const MAX_TOTAL_BYTES = 10 * 1024 * 1024;
const ACCEPT = ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.webp,.txt,.csv";
const ACCEPT_RE = /\.(pdf|docx?|xlsx?|pptx?|jpe?g|png|webp|txt|csv)$/i;
const QUOTE = "Cotización de un servicio";
const REASONS = [QUOTE, "Licitación", "Soy proveedor", "Otro"];
const SERVICES = ["Bombeo de Crudo (Extracción / Transferencia)", "Transporte de Fluidos con Vacuum (160 Bbl)", "Suministro de Frac Tanks 500 Bbl", "Manejo de Desechos Industriales", "Inyección de Vapor para Tanques / Patio de Tanques", "Limpieza Industrial Hydrojet (20.000 / 40.000 PSI)", "Recuperación de Crudo en Fosas, Canales o Tanques", "Tratamiento de Efluentes y Aguas con Hidrocarburos", "Automatización y Control (Telemetría, PLC, SCADA)", "Otro / Consulta General"];
const EMPTY = { name: "", company: "", email: "", phone: "", website: "", reason: QUOTE, service: "", location: "", message: "" };

const ERRORS = {
  files_count: "Puede adjuntar hasta 5 archivos.",
  files_size: "Los archivos adjuntos no pueden superar 10 MB en total.",
  files_type: "Formato de archivo no permitido. Use PDF, Word, Excel, PowerPoint o imágenes.",
};
const AUTORESPONSE = {
  es: "Gracias por escribir a Soluciones Delta, C.A. Recibimos su solicitud y le responderemos a la brevedad. Si es urgente, escríbanos por WhatsApp al +58 424-6472446.",
  en: "Thank you for contacting Soluciones Delta, C.A. We received your request and will reply shortly. If it is urgent, message us on WhatsApp at +58 424-6472446.",
};

function formatSize(bytes: number) {
  return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function ContactRequestForm() {
  const locale = useLocale();
  const t = (text: string) => translateText(text, locale);
  const [form, setForm] = useState(EMPTY);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  const isQuote = form.reason === QUOTE;

  const update = (key: keyof typeof EMPTY) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm(current => ({ ...current, [key]: event.target.value }));

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

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("enviado") === "1") setStatus("sent");
    const reset = () => setStatus(current => (current === "sending" ? "idle" : current));
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);

  // Subject Delta sees in its inbox, e.g. "Cotización: Frac Tank · Juan Pérez (Empresa X)".
  const topic = isQuote ? `Cotización${form.service ? `: ${form.service}` : ""}` : form.reason;
  const subject = `${topic} · ${form.name.trim() || "Sin nombre"}${form.company.trim() ? ` (${form.company.trim()})` : ""}`;

  // Each chosen file goes in its own named input so FormSubmit attaches all of them.
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    if (totalSize > MAX_TOTAL_BYTES) { event.preventDefault(); setError(t(ERRORS.files_size)); return; }
    const slots = event.currentTarget.querySelector<HTMLDivElement>("[data-file-slots]");
    if (slots) {
      slots.replaceChildren();
      files.forEach((file, index) => {
        const input = document.createElement("input");
        input.type = "file";
        input.name = `adjunto${index + 1}`;
        const transfer = new DataTransfer();
        transfer.items.add(file);
        input.files = transfer.files;
        slots.append(input);
      });
    }
    setError("");
    setStatus("sending");
  };

  // WhatsApp doesn't need the email address, so it is only checked when written.
  const sendByWhatsApp = (event: React.MouseEvent<HTMLButtonElement>) => {
    const formEl = event.currentTarget.form;
    if (!formEl) return;
    const email = emailRef.current;
    if (email) email.required = false;
    const valid = formEl.reportValidity();
    if (email) email.required = true;
    if (!valid) return;
    const lines = locale === "en"
      ? [`Hello, Soluciones Delta. ${isQuote ? "I would like to request a quote." : `Reason: ${t(form.reason)}.`}`, `Name: ${form.name.trim()}`, `Company: ${form.company.trim()}`, `Phone: ${form.phone.trim()}`, `Email: ${form.email.trim()}`, ...(isQuote ? [`Service: ${t(form.service)}`, `Location: ${form.location.trim()}`] : []), "", form.message.trim()]
      : [`Hola, Soluciones Delta. ${isQuote ? "Quisiera solicitar una cotización." : `Motivo: ${form.reason}.`}`, `Nombre: ${form.name.trim()}`, `Empresa: ${form.company.trim()}`, `Teléfono: ${form.phone.trim()}`, `Correo: ${form.email.trim()}`, ...(isQuote ? [`Servicio: ${form.service}`, `Ubicación: ${form.location.trim()}`] : []), "", form.message.trim()];
    const text = lines.filter((line, index) => index === 0 || line === "" || !/:\s*$/.test(line)).join("\n").trim();
    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const nextUrl = `https://soluciones-delta.com${locale === "en" ? "/en" : ""}/contacto?enviado=1#propuesta`;

  if (status === "sent") {
    return (
      <div className={styles.proposalSent} role="status">
        <CheckCircle2 size={44} aria-hidden="true" />
        <h3>{t("¡Solicitud enviada!")}</h3>
        <p>{t("La recibimos en nuestro correo. Le responderemos a la dirección que nos indicó.")}</p>
        <button type="button" className={styles.textLink} onClick={() => { setStatus("idle"); window.history.replaceState(null, "", window.location.pathname + "#propuesta"); }}>{t("Enviar otra solicitud")} <ArrowRight size={17} aria-hidden="true" /></button>
      </div>
    );
  }

  return (
    <form className={styles.form} action={`https://formsubmit.co/${DELTA_EMAIL}`} method="POST" encType="multipart/form-data" onSubmit={submit}>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_replyto" value={form.email} />
      <input type="hidden" name="_autoresponse" value={AUTORESPONSE[locale]} />
      <div className={styles.honeypot} aria-hidden="true"><input name="_honey" tabIndex={-1} autoComplete="off" /></div>
      <div className={styles.field}><label htmlFor="request-name">{t("Nombre completo *")}</label><input id="request-name" name="Nombre" autoComplete="name" value={form.name} onChange={update("name")} placeholder={t("Su nombre")} required pattern=".*\S.*" maxLength={120} /></div>
      <div className={styles.field}><label htmlFor="request-company">{t("Empresa")}</label><input id="request-company" name="Empresa" autoComplete="organization" value={form.company} onChange={update("company")} placeholder={t("Nombre de su empresa")} maxLength={160} /></div>
      <div className={styles.field}><label htmlFor="request-phone">{t("Teléfono *")}</label><input id="request-phone" name="Teléfono" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} placeholder="+58 424 1234567" required minLength={7} maxLength={30} pattern="\+?[0-9\s\(\)\-]{7,30}" title={t("Escriba su teléfono con código de área.")} /></div>
      <div className={styles.field}><label htmlFor="request-email">{t("Correo electrónico *")}</label><input ref={emailRef} id="request-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update("email")} placeholder="correo@empresa.com" required maxLength={180} /></div>
      <div className={`${styles.field} ${styles.full}`}><label htmlFor="request-website">{t("Página web (opcional)")}</label><input id="request-website" name="Página web" type="text" inputMode="url" autoComplete="url" value={form.website} onChange={update("website")} placeholder="www.suempresa.com" maxLength={200} /></div>
      <div className={`${styles.field} ${styles.full}`}><label htmlFor="request-reason">{t("Motivo *")}</label><select id="request-reason" name="Motivo" value={form.reason} onChange={update("reason")} required>{REASONS.map(reason => <option key={reason} value={reason}>{t(reason)}</option>)}</select></div>
      {isQuote && <>
        <div className={`${styles.field} ${styles.full}`}><label htmlFor="request-service">{t("Servicio de interés *")}</label><select id="request-service" name="Servicio" value={form.service} onChange={update("service")} required><option value="" disabled>{t("Seleccione un servicio")}</option>{SERVICES.map(service => <option key={service} value={service}>{t(service)}</option>)}</select></div>
        <div className={`${styles.field} ${styles.full}`}><label htmlFor="request-location">{t("Ubicación del proyecto *")}</label><input id="request-location" name="Ubicación" autoComplete="address-level2" value={form.location} onChange={update("location")} placeholder={t("Ciudad, campo o locación")} required pattern=".*\S.*" maxLength={180} /></div>
      </>}
      <div className={`${styles.field} ${styles.full}`}><label htmlFor="request-message">{isQuote ? t("Descripción de la operación") : t("Mensaje *")}</label><textarea id="request-message" name="Mensaje" value={form.message} onChange={update("message")} placeholder={isQuote ? t("Tipo de trabajo, volumen aproximado y detalles de su operación…") : t("Describa su propuesta o requerimiento…")} rows={4} required={!isQuote} maxLength={5000} /></div>
      <div className={`${styles.field} ${styles.full}`}>
        <span className={styles.fileLabel}>{t("Archivos adjuntos (opcional)")}</span>
        <label className={styles.fileDrop} onDragOver={event => event.preventDefault()} onDrop={event => { event.preventDefault(); addFiles(event.dataTransfer.files); }}>
          <Paperclip size={20} aria-hidden="true" />
          <span><strong>{t("Adjuntar archivos")}</strong> {t("o arrástrelos aquí")}</span>
          <small>{t("PDF, Word, Excel, PowerPoint o imágenes · hasta 5 archivos, 10 MB en total")}</small>
          <input ref={inputRef} type="file" multiple accept={ACCEPT} onChange={event => addFiles(event.target.files)} className={styles.fileInput} />
        </label>
        <div data-file-slots hidden />
        {files.length > 0 && (
          <ul className={styles.fileList}>
            {files.map(file => (
              <li key={`${file.name}-${file.size}`}>
                <FileText size={17} aria-hidden="true" /><span>{file.name}</span><small>{formatSize(file.size)}</small>
                <button type="button" onClick={() => setFiles(current => current.filter(f => f !== file))} aria-label={`${t("Quitar")} ${file.name}`}><X size={16} aria-hidden="true" /></button>
              </li>
            ))}
            <li className={styles.fileTotal}>{formatSize(totalSize)} / 10 MB</li>
          </ul>
        )}
      </div>
      {error && <p className={`${styles.formError} ${styles.full}`} role="alert">{error}</p>}
      <div className={`${styles.sendActions} ${styles.full}`}>
        <button type="submit" className={styles.submit} disabled={status === "sending"}><Mail size={19} aria-hidden="true" />{status === "sending" ? t("Enviando…") : t("Enviar por correo")}</button>
        <button type="button" className={`${styles.submit} ${styles.submitAlt}`} onClick={sendByWhatsApp}><MessageCircle size={19} aria-hidden="true" />{t("Enviar por WhatsApp")}</button>
      </div>
      <p className={`${styles.sendNote} ${styles.full}`}>{t("Por correo llega directo a Soluciones Delta, con sus archivos. Por WhatsApp se abre el chat con su solicitud escrita (los archivos se envían por correo).")}</p>
    </form>
  );
}
