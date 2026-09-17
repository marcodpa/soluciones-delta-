import SiteLayout, { metadata as baseMetadata, viewport as baseViewport } from "@/components/SiteLayout";
import { HOME_DESCRIPTION } from "@/lib/seo";
import { translateText } from "@/lib/i18n/translate";
export const viewport = baseViewport;
export const metadata = { ...baseMetadata, title: { default: "Oilfield services in Venezuela | Soluciones Delta", template: "%s | Soluciones Delta C.A." }, description: translateText(HOME_DESCRIPTION, "en"), category: "Industrial oilfield services", openGraph: { ...baseMetadata.openGraph, title: "Oilfield services in Venezuela | Soluciones Delta", description: translateText(HOME_DESCRIPTION, "en"), locale: "en_US" } };
export default function EnglishLayout({children}: {children: React.ReactNode}) { return <SiteLayout locale="en">{children}</SiteLayout>; }
