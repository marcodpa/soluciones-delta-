import ServiciosClient from "@/components/ServiciosClient";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Servicios petroleros e industriales en Venezuela", "Bombeo de crudo, vacuum, Frac Tanks, desechos, vapor e hydrojet en Venezuela. Compare los servicios de Soluciones Delta y solicite una cotización.", "/servicios");

export default function Page() {
  return <><JsonLd breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Servicios", path: "/servicios" }]} /><ServiciosClient /></>;
}
