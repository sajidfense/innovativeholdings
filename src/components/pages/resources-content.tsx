"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Download, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { CTABlock } from "@/components/conversion/cta-block";
import { submitLead, getUtmParams } from "@/lib/googleSheets";

const auditSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(2, "Company is required"),
  revenue: z.string().min(1, "Select revenue range"),
  challenge: z.string().min(10, "Describe your challenge"),
});

const playbookSchema = z.object({
  email: z.string().email("Valid email required"),
});

type AuditFormData = z.infer<typeof auditSchema>;
type PlaybookFormData = z.infer<typeof playbookSchema>;

const revenueOptions = [
  { value: "", label: "Select revenue range" },
  { value: "under-5m", label: "Under $5M" },
  { value: "5m-25m", label: "$5M – $25M" },
  { value: "25m-50m", label: "$25M – $50M" },
  { value: "50m-plus", label: "$50M+" },
];

export function ResourcesContent() {
  const [auditStatus, setAuditStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [auditError, setAuditError] = useState("");
  const [playbookStatus, setPlaybookStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [playbookError, setPlaybookError] = useState("");

  const auditForm = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema),
  });

  const playbookForm = useForm<PlaybookFormData>({
    resolver: zodResolver(playbookSchema),
  });

  const onAuditSubmit = async (data: AuditFormData) => {
    setAuditStatus("loading");
    setAuditError("");
    try {
      await submitLead({
        formType: "strategy-audit",
        name: data.name,
        email: data.email,
        company: data.company,
        revenue: data.revenue,
        challenge: data.challenge,
        sourcePage: "/resources",
        ...getUtmParams(),
      });
      setAuditStatus("success");
    } catch (err) {
      setAuditError(err instanceof Error ? err.message : "Something went wrong.");
      setAuditStatus("error");
    }
  };

  const onPlaybookSubmit = async (data: PlaybookFormData) => {
    setPlaybookStatus("loading");
    setPlaybookError("");
    try {
      await submitLead({
        formType: "playbook-download",
        email: data.email,
        sourcePage: "/resources",
        ...getUtmParams(),
      });
      setPlaybookStatus("success");
    } catch (err) {
      setPlaybookError(err instanceof Error ? err.message : "Something went wrong.");
      setPlaybookStatus("error");
    }
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="font-display text-display-md font-semibold text-navy sm:text-display-lg">
            Resources
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            High-value tools and assessments to accelerate your growth.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-12 lg:grid-cols-3">
          {/* Lead Magnet 1: Strategy Audit */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <FileText className="h-7 w-7 text-accent" aria-hidden />
            </div>
            <h2 className="mt-6 font-display text-xl font-semibold text-navy">
              Free Business Strategy Audit
            </h2>
            <p className="mt-3 text-gray-600">
              Submit your company details and receive a complimentary strategy
              assessment within 3–5 business days.
            </p>
            {auditStatus === "success" ? (
              <p className="mt-6 text-accent font-medium">
                Thank you. We&apos;ll review your submission and send your
                strategy assessment within 3–5 business days.
              </p>
            ) : (
              <form
                onSubmit={auditForm.handleSubmit(onAuditSubmit)}
                className="mt-8 space-y-4"
              >
                <div>
                  <label htmlFor="audit-name" className="block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <Input
                    id="audit-name"
                    className="mt-1"
                    {...auditForm.register("name")}
                    aria-invalid={!!auditForm.formState.errors.name}
                  />
                  {auditForm.formState.errors.name && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {auditForm.formState.errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="audit-email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <Input
                    id="audit-email"
                    type="email"
                    className="mt-1"
                    {...auditForm.register("email")}
                    aria-invalid={!!auditForm.formState.errors.email}
                  />
                  {auditForm.formState.errors.email && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {auditForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="audit-company" className="block text-sm font-medium text-gray-700">
                    Company *
                  </label>
                  <Input
                    id="audit-company"
                    className="mt-1"
                    {...auditForm.register("company")}
                    aria-invalid={!!auditForm.formState.errors.company}
                  />
                  {auditForm.formState.errors.company && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {auditForm.formState.errors.company.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="audit-revenue" className="block text-sm font-medium text-gray-700">
                    Annual Revenue *
                  </label>
                  <Select
                    id="audit-revenue"
                    className="mt-1"
                    {...auditForm.register("revenue")}
                  >
                    {revenueOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </Select>
                  {auditForm.formState.errors.revenue && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {auditForm.formState.errors.revenue.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="audit-challenge" className="block text-sm font-medium text-gray-700">
                    Primary Challenge *
                  </label>
                  <Textarea
                    id="audit-challenge"
                    className="mt-1 min-h-[80px]"
                    {...auditForm.register("challenge")}
                    aria-invalid={!!auditForm.formState.errors.challenge}
                  />
                  {auditForm.formState.errors.challenge && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {auditForm.formState.errors.challenge.message}
                    </p>
                  )}
                </div>
                {auditStatus === "error" && (
                  <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                    {auditError}
                  </p>
                )}
                <Button type="submit" className="w-full" disabled={auditStatus === "loading"}>
                  {auditStatus === "loading" ? "Submitting..." : "Request Strategy Audit"}
                </Button>
              </form>
            )}
          </motion.section>

          {/* Lead Magnet 2: Growth Playbook */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Download className="h-7 w-7 text-accent" aria-hidden />
            </div>
            <h2 className="mt-6 font-display text-xl font-semibold text-navy">
              The Growth Playbook
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Scaling Companies from $5M to $50M
            </p>
            <p className="mt-3 text-gray-600">
              Enter your email to receive this comprehensive growth guide.
            </p>
            {playbookStatus === "success" ? (
              <p className="mt-6 text-accent font-medium">
                Check your email — the playbook is on its way.
              </p>
            ) : (
              <form
                onSubmit={playbookForm.handleSubmit(onPlaybookSubmit)}
                className="mt-8"
              >
                <div>
                  <label htmlFor="playbook-email" className="sr-only">
                    Email
                  </label>
                  <Input
                    id="playbook-email"
                    type="email"
                    placeholder="Enter your email"
                    className="mb-4"
                    {...playbookForm.register("email")}
                    aria-invalid={!!playbookForm.formState.errors.email}
                  />
                  {playbookForm.formState.errors.email && (
                    <p className="mb-4 text-sm text-red-600" role="alert">
                      {playbookForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
                {playbookStatus === "error" && (
                  <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                    {playbookError}
                  </p>
                )}
                <Button type="submit" className="w-full" disabled={playbookStatus === "loading"}>
                  {playbookStatus === "loading" ? "Processing..." : "Download Playbook"}
                </Button>
              </form>
            )}
          </motion.section>

          {/* Lead Magnet 3: 30 Min Consultation */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Calendar className="h-7 w-7 text-accent" aria-hidden />
            </div>
            <h2 className="mt-6 font-display text-xl font-semibold text-navy">
              30-Minute Advisory Consultation
            </h2>
            <p className="mt-3 text-gray-600">
              Schedule a confidential session to discuss your growth challenges
              with our senior advisors. No obligation.
            </p>
            <Button asChild size="lg" className="mt-8 w-full">
              <Link href="/contact#consultation">Book Consultation</Link>
            </Button>
          </motion.section>
        </div>

        <CTABlock
          title="Need a tailored solution?"
          description="Our advisors can help with strategy, operations, and growth."
          primaryHref="/contact#consultation"
          primaryLabel="Book a Consultation"
        />
      </div>
    </div>
  );
}
