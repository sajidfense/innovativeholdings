import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEOPageContent } from "@/components/pages/seo-page-content";
import { seoPages } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

const validSlugs = seoPages.map((p) => p.slug);

type Props = {
  params: Promise<{ "consulting-slug": string }>;
};

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ "consulting-slug": slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { "consulting-slug": slug } = await params;
  const page = seoPages.find((p) => p.slug === slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/${slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteConfig.url}/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function ConsultingPage({ params }: Props) {
  const { "consulting-slug": slug } = await params;
  const page = seoPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <BreadcrumbSchema items={[{ name: page.title, href: `/${slug}` }]} />
      <SEOPageContent page={page} />
    </>
  );
}
