import { Metadata } from "next";
import { ResourcesContent } from "@/components/pages/resources-content";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free business strategy audit, growth playbook, and 30-minute advisory consultation from Innovative Holdings. Practical tools and frameworks to accelerate your growth.",
  keywords: [
    "free business strategy audit",
    "growth playbook download",
    "free consulting resources",
    "strategy audit tool",
    "business growth framework",
  ],
  alternates: {
    canonical: `${siteConfig.url}/resources`,
  },
  openGraph: {
    title: "Free Resources | Innovative Holdings",
    description:
      "Free strategy audit, The Growth Playbook download, and 30-minute advisory consultation. High-value tools to accelerate your company growth.",
    url: `${siteConfig.url}/resources`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Resources | Innovative Holdings",
    description:
      "Free strategy audit, growth playbook, and 30-minute advisory consultation.",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Resources", href: "/resources" }]} />
      <ResourcesContent />
    </>
  );
}
