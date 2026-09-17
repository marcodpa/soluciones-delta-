import JsonLd from "@/components/JsonLd";
import ClientPage from "@/components/ClientPage";
import { HOME_DESCRIPTION, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Servicios petroleros en Venezuela", HOME_DESCRIPTION, "/");

export default function Home() {
  return <><JsonLd /><ClientPage /></>;
}
