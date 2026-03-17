import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { siteConfig } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";
import { ArticleSchema } from "@/components/seo/article-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/insights/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.name],
      url: `${siteConfig.url}/insights/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function renderContent(content: string) {
  const paragraphs = content.trim().split("\n\n");
  return paragraphs.map((block, i) => {
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter(Boolean);
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-6">
          {items.map((item, j) => (
            <li key={j} className="text-gray-700">
              {item.replace(/^-\s*/, "")}
            </li>
          ))}
        </ul>
      );
    }
    if (block.match(/^\d+\.\s+/)) {
      const items = block.split("\n").filter(Boolean);
      return (
        <ol key={i} className="mt-4 list-decimal space-y-2 pl-6">
          {items.map((item, j) => (
            <li key={j} className="text-gray-700">
              {item.replace(/^\d+\.\s+\*\*/, "").replace(/\*\*:\s*/, ": ")}
            </li>
          ))}
        </ol>
      );
    }
    return (
      <p key={i} className="mt-4 text-gray-700">
        {block}
      </p>
    );
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: "Insights", href: "/insights" },
          { name: post.title, href: `/insights/${post.slug}` },
        ]}
      />
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <header className="mt-8">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              {post.category}
            </span>
            <h1 className="mt-2 font-display text-display-md font-semibold text-navy sm:text-display-lg">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <span>{post.author.name}</span>
              <span>•</span>
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="mt-12">{renderContent(post.content)}</div>
        </div>
      </article>
    </>
  );
}
