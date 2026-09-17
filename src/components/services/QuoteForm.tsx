"use client";

import { useState } from "react";
import { CATALOG_SERVICES } from "@/lib/services-catalog";
import styles from "./services.module.css";

export default function QuoteForm() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const message = `Hola, Soluciones Delta. Quisiera solicitar una cotización.\nServicio: ${service}\nUbicación del proyecto: ${location.trim()}\nTeléfono de contacto: ${phone.trim()}`;

  return (
    <form action="https://wa.me/584246472446" method="get" target="_blank" rel="noopener noreferrer" className={styles.quoteForm}>
      <input type="hidden" name="text" value={message} />
      <label htmlFor="quote-service">Servicio</label>
      <select id="quote-service" required value={service} onChange={event => setService(event.target.value)}>
        <option value="" disabled>Seleccione un servicio</option>
        {CATALOG_SERVICES.map(item => <option key={item.slug} value={item.title}>{item.title}</option>)}
        <option value="Asesoría para definir el servicio">Necesito asesoría</option>
      </select>
      <label htmlFor="quote-location">Ubicación del proyecto</label>
      <input id="quote-location" autoComplete="address-level2" required maxLength={180} placeholder="Ej.: San Francisco, Zulia"
        value={location} onChange={event => setLocation(event.target.value)} pattern=".*\S.*" />
      <label htmlFor="quote-phone">Teléfono de contacto</label>
      <input id="quote-phone" type="tel" inputMode="tel" autoComplete="tel" required minLength={7} maxLength={30}
        pattern="\+?[0-9\s\(\)\-]{7,30}" title="Escriba su teléfono con código de área." placeholder="Ej.: +58 424 1234567"
        value={phone} onChange={event => setPhone(event.target.value)} />
      <button type="submit" className={styles.primary}>Solicitar cotización <span aria-hidden="true">↗</span></button>
      <p>Se abrirá WhatsApp para que revise y envíe su solicitud.</p>
    </form>
  );
}
