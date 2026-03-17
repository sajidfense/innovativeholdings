"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: FileText,
    title: "Free Strategy Audit",
    description: "Complimentary strategy assessment for your company.",
    href: "/resources",
    cta: "Request Audit",
  },
  {
    icon: Download,
    title: "Growth Playbook",
    description: "Scaling from $5M to $50M—download the guide.",
    href: "/resources",
    cta: "Download",
  },
  {
    icon: Calendar,
    title: "30-Min Consultation",
    description: "Schedule a confidential advisory session.",
    href: "/contact#consultation",
    cta: "Book Now",
  },
];

export function ResourcesPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-display-md font-semibold text-navy sm:text-display-lg">
            Free Resources
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            High-value tools to accelerate your growth strategy.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {resources.map((resource, i) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-gray-200 bg-white p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-7 w-7 text-accent" aria-hidden />
                </div>
                <h3 className="mt-6 font-semibold text-navy">{resource.title}</h3>
                <p className="mt-2 text-gray-600">{resource.description}</p>
                <Button asChild className="mt-6" variant="secondary">
                  <Link href={resource.href}>{resource.cta}</Link>
                </Button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Button asChild>
            <Link href="/resources">View All Resources</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
