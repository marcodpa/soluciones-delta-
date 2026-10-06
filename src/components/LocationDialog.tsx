"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, MapPin, X } from "lucide-react";
import type { ReactNode } from "react";
import { useLocalizedTree } from "@/lib/i18n/client";
import styles from "./LocationDialog.module.css";

const address = "Calle 13 con Av. 5, Local 26A-162, Oficina 2, Sector Manzanillo, San Francisco, Estado Zulia, Venezuela";
// The Google Maps listing for Soluciones Delta at the address above.
const mapsUrl = "https://www.google.com/maps?cid=5853854541609746147";
const embedUrl = `${mapsUrl}&output=embed`;

export default function LocationDialog({ children }: { children: ReactNode }) {
  const localize = useLocalizedTree();

  return localize(
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.dialog}>
          <div className={styles.header}>
            <div>
              <p className={styles.kicker}><MapPin size={15} aria-hidden="true" /> Sede operativa</p>
              <Dialog.Title className={styles.title}>San Francisco, Zulia</Dialog.Title>
              <Dialog.Description className={styles.description}>Consulte nuestra dirección y abra la ruta en Google Maps.</Dialog.Description>
            </div>
            <Dialog.Close className={styles.close} aria-label="Cerrar mapa"><X size={22} aria-hidden="true" /></Dialog.Close>
          </div>
          <div className={styles.mapFrame}>
            <iframe src={embedUrl} title="Mapa de la sede operativa de Soluciones Delta en San Francisco, Zulia" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div className={styles.footer}>
            <address>{address}</address>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>Abrir en Google Maps <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
