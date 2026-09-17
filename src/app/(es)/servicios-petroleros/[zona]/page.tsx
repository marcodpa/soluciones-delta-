import AreaPage from "@/components/AreaPage";
import { ZONAS, getZonaBySlug } from "@/lib/zonas-data";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
type Props = { params: Promise<{ zona: string }> };
export function generateStaticParams() { return ZONAS.map(z => ({ zona: z.slug })); }
export async function generateMetadata({ params }: Props) { const { zona: slug } = await params; const zona = getZonaBySlug(slug); if (!zona) notFound(); return pageMetadata(zona.seoTitle, zona.description, "/servicios-petroleros/"+slug); }
export default function Page({ params }: Props) { return <AreaPage params={params} />; }
