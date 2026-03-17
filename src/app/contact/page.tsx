import { Metadata } from "next";
import { ContactContent } from "@/components/pages/contact-content";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a confidential consultation or request a proposal from Innovative Holdings. Our senior advisors are ready to discuss your growth strategy and business challenges.",
  keywords: [
    "contact business consulting firm",
    "book strategy consultation",
    "request consulting proposal",
    "advisory consultation",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Innovative Holdings | Book a Consultation",
    description:
      "Book a confidential consultation or request a proposal from Innovative Holdings. Senior advisors ready to address your growth strategy.",
    url: `${siteConfig.url}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Innovative Holdings | Book a Consultation",
    description:
      "Book a confidential consultation or request a proposal. Senior advisors ready to address your growth strategy.",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", href: "/contact" }]} />
      <ContactContent />
    </>
  );
}
