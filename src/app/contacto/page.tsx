import ContactoClient from "@/components/ContactoClient";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contacto y cotizaciones de servicios petroleros", "Solicite cotización de servicios petroleros en Venezuela. Contacte a Soluciones Delta por WhatsApp, teléfono o correo. Sede en San Francisco, Zulia.", "/contacto");

export default function Page() {
  return <><JsonLd breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Contacto", path: "/contacto" }]} /><ContactoClient /></>;
}
