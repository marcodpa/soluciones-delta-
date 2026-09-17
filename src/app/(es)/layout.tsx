import SiteLayout, { metadata as siteMetadata, viewport as siteViewport } from "@/components/SiteLayout";
export const metadata = siteMetadata;
export const viewport = siteViewport;
export default function SpanishLayout({children}: {children: React.ReactNode}) { return <SiteLayout locale="es">{children}</SiteLayout>; }
