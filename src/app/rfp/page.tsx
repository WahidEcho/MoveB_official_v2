"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  objective: z.string().min(5),
  scope: z.string().min(10),
  dates: z.string().min(2),
  locations: z.string().min(2),
  attendance: z.string().min(1),
  budget: z.string().min(1),
  stakeholders: z.string().min(2),
  timeline: z.string().min(2),
  constraints: z.string().min(2).optional().or(z.literal("")),
});
type FormData = z.infer<typeof schema>;

/* metadata must not be exported from client components; set in parent route if needed */

export default function RfpPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("RFP_SUBMIT", data);
    setSubmitted(true);
  };

  return (
    <main className="py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Request For Proposal</h1>
        <p className="mt-3 text-[var(--mb-muted)]">Tell us about your objectives, scope, and timelines.</p>
        {submitted ? (
          <div className="mt-8 rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6">
            <div className="text-lg">Thank you. Our team will review and respond.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4">
            {(
              [
                ["objective", "Objective"],
                ["scope", "Scope"],
                ["dates", "Dates"],
                ["locations", "Locations"],
                ["attendance", "Estimated Attendance"],
                ["budget", "Budget Band"],
                ["stakeholders", "Key Stakeholders"],
                ["timeline", "Decision Timeline"],
                ["constraints", "Procurement Constraints"],
              ] as const
            ).map(([key, label]) => (
              <div key={key}>
                <label className="text-sm">{label}</label>
                {key === "scope" || key === "objective" ? (
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-3" {...register(key)} />
                ) : (
                  <input className="mt-1 w-full rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-3" {...register(key)} />
                )}
                {errors[key as keyof typeof errors] && (
                  <p className="text-xs text-[var(--mb-danger)] mt-1">{
                    String(errors[key as keyof typeof errors]?.message || "")
                  }</p>
                )}
              </div>
            ))}
            <div className="flex items-center justify-between">
              <p className="text-xs text-[var(--mb-muted)]">Uploads coming soon. By submitting, you agree to our privacy notice.</p>
              <button disabled={isSubmitting} className="rounded-xl px-5 py-3 text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)]">{isSubmitting ? "Submitting..." : "Submit"}</button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}


