import ArticlePage from "@/components/ArticlePage";
import { ARTICLES, getArticleBySlug } from "@/lib/articles-data";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return ARTICLES.map(a => ({ slug: a.slug })); }
export async function generateMetadata({ params }: Props) { const { slug } = await params; const article = getArticleBySlug(slug); if (!article) notFound(); return pageMetadata(article.seoTitle, article.description, `/articulos/${slug}`); }
export default function Page({ params }: Props) { return <ArticlePage params={params} />; }
