import type { SEOPageConfig } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/constants";

export function ServiceSchema({ page }: { page: SEOPageConfig }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
