import type { Metadata } from "next";
import ContactoClient from "@/components/ContactoClient";

export const metadata: Metadata = {
  title: "Contacto — Soluciones Delta, C.A.",
  description: "Contáctenos para solicitar cotización de nuestros servicios técnicos petroleros: bombeo de crudo, vacuum, Frac Tanks, manejo de desechos e inyección de vapor. Tel: +58 424-6472446. San Francisco, Zulia.",
};

export default function ContactoPage() {
  return <ContactoClient />;
}
