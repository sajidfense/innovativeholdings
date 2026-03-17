"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blog-posts";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { CTABlock } from "@/components/conversion/cta-block";

export function InsightsContent() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl"
        >
          <h1 className="font-display text-display-md font-semibold text-navy sm:text-display-lg">
            Insights
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Thought leadership and practical frameworks for growth-stage
            leaders.
          </p>
        </motion.div>

        {/* Featured article */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-16"
        >
          <Link
            href={`/insights/${featured.slug}`}
            className="group block rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all hover:border-accent/30 hover:shadow-lg md:p-12"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Featured • {featured.category}
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-navy group-hover:text-accent sm:text-3xl transition-colors">
              {featured.title}
            </h2>
            <p className="mt-4 text-gray-600">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <span>{featured.date}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>
          </Link>
        </motion.article>

        {/* Rest of articles */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {rest.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/insights/${post.slug}`} className="group block">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {post.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-navy group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <span className="mt-4 inline-block text-sm text-gray-500">
                  {post.readTime}
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <NewsletterSection />

        <CTABlock
          title="Ready to transform your strategy?"
          description="Speak with our advisors about your growth challenges."
          primaryHref="/contact#consultation"
          primaryLabel="Book a Consultation"
        />
      </div>
    </div>
  );
}
