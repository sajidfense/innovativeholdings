"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { submitLead, getUtmParams } from "@/lib/googleSheets";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  role: z.string().min(1, "Please select a role"),
  experience: z.string().optional(),
  message: z.string().min(10, "Please provide more detail"),
});

type FormData = z.infer<typeof schema>;

export function CareersForm() {
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
        formType: "careers",
        name: data.name,
        email: data.email,
        role: data.role,
        experience: data.experience,
        message: data.message,
        sourcePage: "/careers",
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
      <div className="mt-8 rounded-lg bg-green-50 p-6">
        <p className="font-medium text-green-800">
          Thank you for your application. We&apos;ll review your submission and
          be in touch if your experience matches our current needs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name *
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
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Role of Interest *
        </label>
        <Select
          id="role"
          className="mt-1"
          {...register("role")}
          aria-invalid={!!errors.role}
          aria-describedby={errors.role ? "role-error" : undefined}
        >
          <option value="">Select a role</option>
          <option value="analyst">Consulting Analyst</option>
          <option value="associate">Strategy Associate</option>
          <option value="partner">Partner Track</option>
        </Select>
        {errors.role && (
          <p id="role-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.role.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
          Years of Experience
        </label>
        <Input
          id="experience"
          className="mt-1"
          placeholder="e.g., 3 years"
          {...register("experience")}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Why Innovative Holdings? *
        </label>
        <Textarea
          id="message"
          className="mt-1 min-h-[120px]"
          placeholder="Tell us about your background and interest..."
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
      {status === "error" && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {errorMsg}
        </p>
      )}
      <Button type="submit" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
