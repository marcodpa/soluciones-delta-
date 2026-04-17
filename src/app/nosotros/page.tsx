import type { Metadata } from "next";
import NosotrosClient from "@/components/NosotrosClient";

export const metadata: Metadata = {
  title: "Nosotros — Soluciones Delta, C.A.",
  description: "Empresa venezolana especializada en servicios técnicos para la industria petrolera. Conoce nuestra historia, valores, equipo y compromisos. RIF J-50735393-1. San Francisco, Estado Zulia.",
};

export default function NosotrosPage() {
  return <NosotrosClient />;
}
