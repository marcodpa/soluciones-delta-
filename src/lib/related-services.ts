import { getServiceBySlug } from "./services-data";

export type RelatedService = { slug: string; title: string; description: string };

const CONNECTIONS: Record<string, { slug: string; description: string }[]> = {
  "bombeo-de-crudo": [
    { slug: "recuperacion-de-crudo-en-fosas", description: "Recuperación térmica del crudo solidificado antes de bombearlo." },
    { slug: "frac-tanks", description: "Almacenamiento temporal de los fluidos extraídos durante la operación." },
    { slug: "trasegado-vacuum", description: "Succión y traslado de fluidos entre las etapas del trabajo." },
  ],
  "trasegado-vacuum": [
    { slug: "limpieza-industrial-hidrojet", description: "Limpieza de equipos y superficies antes de recolectar los fluidos." },
    { slug: "manejo-de-desechos", description: "Coordinación del manejo y destino de los residuos recolectados." },
    { slug: "frac-tanks", description: "Almacenamiento temporal de agua y fluidos en la locación." },
  ],
  "frac-tanks": [
    { slug: "trasegado-vacuum", description: "Transferencia y recolección de fluidos durante el uso de los tanques." },
    { slug: "alquiler-calderas-inyeccion-vapor", description: "Generación de vapor para las operaciones que requieren calentamiento." },
    { slug: "limpieza-industrial-hidrojet", description: "Evaluación de la limpieza de depósitos y superficies del equipo." },
  ],
  "manejo-de-desechos": [
    { slug: "trasegado-vacuum", description: "Succión y transporte de lodos, borras y fluidos industriales." },
    { slug: "limpieza-industrial-hidrojet", description: "Limpieza industrial con coordinación de los residuos generados." },
    { slug: "recuperacion-de-crudo-en-fosas", description: "Recuperación térmica del crudo solidificado en fosas y canales." },
  ],
  "alquiler-calderas-inyeccion-vapor": [
    { slug: "recuperacion-de-crudo-en-fosas", description: "Recuperación térmica de crudo solidificado en fosas, canales y tanques." },
    { slug: "bombeo-de-crudo", description: "Extracción y transferencia del crudo como parte del trabajo en campo." },
    { slug: "frac-tanks", description: "Almacenamiento temporal de agua o fluidos según las necesidades del proyecto." },
  ],
  "recuperacion-de-crudo-en-fosas": [
    { slug: "alquiler-calderas-inyeccion-vapor", description: "Generación de vapor OTSG como fuente de energía térmica de la operación." },
    { slug: "bombeo-de-crudo", description: "Extracción del crudo fluidizado con bomba de tornillo y plato desnatador." },
    { slug: "manejo-de-desechos", description: "Manejo de los lodos y sedimentos no recuperables bajo el Decreto 2635." },
  ],
  "limpieza-industrial-hidrojet": [
    { slug: "trasegado-vacuum", description: "Recolección de aguas, lodos y fluidos generados durante la limpieza." },
    { slug: "manejo-de-desechos", description: "Coordinación del manejo de residuos desde la recolección hasta su destino." },
    { slug: "frac-tanks", description: "Almacenamiento temporal de fluidos durante el mantenimiento." },
  ],
};

export function getRelatedServices(slug: string): RelatedService[] {
  return (CONNECTIONS[slug] ?? []).map(connection => {
    const service = getServiceBySlug(connection.slug);
    if (!service) throw new Error(`Unknown related service: ${connection.slug}`);
    return { ...connection, title: service.title };
  });
}
