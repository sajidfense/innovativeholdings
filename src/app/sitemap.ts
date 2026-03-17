import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { blogPosts } from "@/lib/blog-posts";
import { seoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    "",
    "/services",
    "/case-studies",
    "/industries",
    "/insights",
    "/resources",
    "/about",
    "/careers",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const insightPages = blogPosts.map((post) => ({
    url: `${base}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const seoConsultingPages = seoPages.map((page) => ({
    url: `${base}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...insightPages, ...seoConsultingPages];
}
