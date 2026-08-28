import type { Metadata } from "next";
import ServiciosClient from "@/components/ServiciosClient";

export const metadata: Metadata = {
  title: "Servicios — Soluciones Delta, C.A.",
  description: "Catálogo completo de servicios técnicos: bombeo de crudo, trasegado vacuum, Frac Tanks 500 Bbl, manejo de desechos, inyección de vapor y limpieza industrial hydrojet. Industria petrolera, Estado Zulia. RIF J-50735393-1.",
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
