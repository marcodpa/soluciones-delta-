"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Check, Copy, FileText, Mail, MailOpen, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useLocalizedTree } from "@/lib/i18n/client";
import { DELTA_EMAIL, gmailUrl, isTouchDevice, mailtoUrl } from "@/lib/email";
import styles from "./EmailLink.module.css";

// Email link that works on any device: phones open their mail app, computers get a choice.
export default function EmailLink({ className, children }: { className?: string; children: ReactNode }) {
  const localize = useLocalizedTree();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const click = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isTouchDevice()) return;
    event.preventDefault();
    setCopied(false);
    setOpen(true);
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(DELTA_EMAIL); setCopied(true); } catch { setCopied(false); }
  };

  return localize(
    <>
      <a href={mailtoUrl()} className={className} onClick={click}>{children}</a>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={styles.dialog}>
            <div className={styles.header}>
              <div>
                <p className={styles.kicker}><Mail size={15} aria-hidden="true" /> Correo de Soluciones Delta</p>
                <Dialog.Title className={styles.title}>{DELTA_EMAIL}</Dialog.Title>
                <Dialog.Description className={styles.description}>Elija cómo quiere escribirnos.</Dialog.Description>
              </div>
              <Dialog.Close className={styles.close} aria-label="Cerrar"><X size={22} aria-hidden="true" /></Dialog.Close>
            </div>
            <div className={styles.options}>
              <a href={gmailUrl()} target="_blank" rel="noopener noreferrer" className={`${styles.option} ${styles.main}`} onClick={() => setOpen(false)}>
                <Mail size={22} aria-hidden="true" /><span><strong>Escribir por Gmail</strong><small>Se abre Gmail con nuestro correo ya puesto.</small></span>
              </a>
              <a href="/contacto#propuesta" className={styles.option} onClick={() => setOpen(false)}>
                <FileText size={22} aria-hidden="true" /><span><strong>Usar el formulario de la web</strong><small>Llega directo a nuestro correo, con archivos adjuntos.</small></span>
              </a>
              <a href={mailtoUrl()} className={styles.option} onClick={() => setOpen(false)}>
                <MailOpen size={22} aria-hidden="true" /><span><strong>Otra aplicación de correo</strong><small>Outlook, Correo de Windows u otra.</small></span>
              </a>
              <button type="button" className={styles.option} onClick={copy}>
                {copied ? <Check size={22} aria-hidden="true" /> : <Copy size={22} aria-hidden="true" />}
                <span><strong>{copied ? "¡Correo copiado!" : "Copiar el correo"}</strong><small>Para pegarlo donde usted prefiera.</small></span>
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
