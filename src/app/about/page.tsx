import { Metadata } from "next";
import { AboutContent } from "@/components/pages/about-content";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Innovative Holdings is a specialist advisory group providing strategic consulting and operational advisory to growth-stage companies. Learn about our mission, approach, and senior leadership team.",
  keywords: [
    "about Innovative Holdings",
    "consulting firm history",
    "strategy advisory team",
    "senior business consultants",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Innovative Holdings | Strategy & Growth Consulting",
    description:
      "Specialist advisory group providing strategic consulting and operational advisory to growth-stage companies. Our mission, approach, and leadership.",
    url: `${siteConfig.url}/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Innovative Holdings | Strategy & Growth Consulting",
    description:
      "Specialist advisory group for growth-stage companies. Learn about our mission, approach, and senior leadership.",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "About", href: "/about" }]} />
      <AboutContent />
    </>
  );
}
