"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type CTABlockProps = {
  title: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTABlock({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTABlockProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-24 rounded-2xl bg-gradient-to-br from-navy to-navy-light px-8 py-16 sm:px-12 sm:py-20"
    >
      <div className="text-center">
        <h2 className="font-display text-display-md font-semibold text-white sm:text-display-lg">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="xl"
            className="bg-accent hover:bg-accent-hover text-white"
          >
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          {secondaryHref && secondaryLabel && (
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </motion.section>
  );
}
