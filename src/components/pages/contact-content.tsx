"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { submitLead, getUtmParams } from "@/lib/googleSheets";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(2, "Company name is required"),
  revenue: z.string().min(1, "Please select revenue range"),
  challenge: z.string().min(1, "Please describe your primary challenge"),
  message: z.string().min(10, "Please provide more detail"),
});

type FormData = z.infer<typeof schema>;

const revenueOptions = [
  { value: "", label: "Select revenue range" },
  { value: "under-5m", label: "Under $5M" },
  { value: "5m-25m", label: "$5M – $25M" },
  { value: "25m-50m", label: "$25M – $50M" },
  { value: "50m-100m", label: "$50M – $100M" },
  { value: "100m-plus", label: "$100M+" },
];

export function ContactContent() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formIntent, setFormIntent] = useState<"consultation" | "proposal">("consultation");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitLead({
        formType: "contact",
        name: data.name,
        email: data.email,
        company: data.company,
        revenue: data.revenue,
        challenge: data.challenge,
        message: `[${formIntent === "consultation" ? "Consultation" : "Proposal"}] ${data.message}`,
        sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact",
        ...getUtmParams(),
      });
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16"
      >
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-display-md font-semibold text-navy">
            Thank You
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We&apos;ve received your message and will be in touch within 1–2
            business days. A member of our team will reach out to schedule your
            consultation or discuss your proposal request.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="font-display text-display-md font-semibold text-navy sm:text-display-lg">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Ready to discuss your growth challenges? Book a consultation or
            request a proposal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          id="consultation"
          className="mx-auto mt-16 max-w-2xl scroll-mt-24"
        >
          <div className="mb-8 flex gap-4">
            <Button
              type="button"
              variant={formIntent === "consultation" ? "default" : "outline"}
              className="flex-1"
              onClick={() => setFormIntent("consultation")}
            >
              Book Consultation
            </Button>
            <Button
              type="button"
              variant={formIntent === "proposal" ? "default" : "outline"}
              className="flex-1"
              onClick={() => setFormIntent("proposal")}
            >
              Request Proposal
            </Button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <Input
                  id="name"
                  className="mt-1"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  className="mt-1"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company *
                </label>
                <Input
                  id="company"
                  className="mt-1"
                  {...register("company")}
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
                {errors.company && (
                  <p id="company-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.company.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-gray-700">
                  Company Revenue *
                </label>
                <Select
                  id="revenue"
                  className="mt-1"
                  {...register("revenue")}
                  aria-invalid={!!errors.revenue}
                  aria-describedby={errors.revenue ? "revenue-error" : undefined}
                >
                  {revenueOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Select>
                {errors.revenue && (
                  <p id="revenue-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.revenue.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-gray-700">
                  Primary Challenge *
                </label>
                <Textarea
                  id="challenge"
                  className="mt-1 min-h-[100px]"
                  placeholder="What's the main challenge you're looking to address?"
                  {...register("challenge")}
                  aria-invalid={!!errors.challenge}
                  aria-describedby={errors.challenge ? "challenge-error" : undefined}
                />
                {errors.challenge && (
                  <p id="challenge-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.challenge.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <Textarea
                  id="message"
                  className="mt-1 min-h-[120px]"
                  placeholder="Tell us more about your situation and what you're hoping to achieve..."
                  {...register("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            {status === "error" && (
              <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                {errorMsg}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="mt-8 w-full"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Submitting..."
                : formIntent === "consultation"
                ? "Book Consultation"
                : "Request Proposal"}
            </Button>

            <p className="mt-4 text-center text-xs text-gray-400">
              Strictly confidential. Typical response within 1 business day.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
