import NosotrosClient from "@/components/NosotrosClient";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Empresa de servicios petroleros en Venezuela", "Conozca a Soluciones Delta, empresa de servicios petroleros con sede en San Francisco, Zulia. Equipos, personal técnico y soluciones para operaciones en Venezuela.", "/nosotros");

export default function Page() {
  return <><JsonLd breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Nosotros", path: "/nosotros" }]} /><NosotrosClient /></>;
}
