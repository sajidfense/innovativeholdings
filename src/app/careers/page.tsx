import { Metadata } from "next";
import { CareersContent } from "@/components/pages/careers-content";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Innovative Holdings. We're expanding our team of consulting analysts, strategy associates, and partner-track professionals. Explore culture, open roles, and how to apply.",
  keywords: [
    "consulting careers",
    "strategy analyst jobs",
    "business consulting jobs",
    "consulting firm careers",
  ],
  alternates: {
    canonical: `${siteConfig.url}/careers`,
  },
  openGraph: {
    title: "Careers at Innovative Holdings",
    description:
      "Join our team of consulting analysts, strategy associates, and partner-track professionals. Culture, open roles, and application.",
    url: `${siteConfig.url}/careers`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Innovative Holdings",
    description:
      "Join our growing consulting team. Explore analyst, associate, and partner-track opportunities.",
  },
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Careers", href: "/careers" }]} />
      <CareersContent />
    </>
  );
}
