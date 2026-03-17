"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail } from "lucide-react";
import { submitLead, getUtmParams } from "@/lib/googleSheets";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

export function NewsletterSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
        formType: "newsletter",
        email: data.email,
        sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
        ...getUtmParams(),
      });
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section ref={ref} className="relative bg-navy border-t border-white/6 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(37,99,235,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 bg-blue-400/50" />
            <span className="text-label-sm font-medium uppercase tracking-widest text-blue-400">
              Insights Newsletter
            </span>
            <div className="h-px w-8 bg-blue-400/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-sm font-semibold text-white sm:text-display-md mb-3"
          >
            Stay ahead with our insights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 mb-8"
          >
            Strategic frameworks, market analysis, and growth insights — delivered to senior leaders monthly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                  <CheckCircle className="h-7 w-7 text-blue-300" aria-hidden />
                </div>
                <p className="text-white font-medium">Thank you for subscribing.</p>
                <p className="text-sm text-slate-400">You&apos;ll receive our next monthly insights.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden />
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 bg-white/6 border-white/12 text-white placeholder:text-slate-500 focus:border-accent/50 focus:bg-white/8 h-12"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "newsletter-email-error" : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="newsletter-email-error" className="mt-1.5 text-sm text-red-400" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-1.5 text-sm text-red-400" role="alert">
                      {errorMsg}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-12 bg-accent hover:bg-accent-hover text-white transition-all duration-300 sm:w-auto"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            )}

            <p className="mt-4 text-xs text-slate-500">
              No spam. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
