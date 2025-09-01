"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6).optional().or(z.literal("")),
  org: z.string().min(2),
  country: z.string().min(2),
  topic: z.string().min(2),
  message: z.string().min(10),
});
type FormData = z.infer<typeof schema>;

/* metadata must not be exported from client components; set in parent route if needed */

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("CONTACT_SUBMIT", data);
    setSubmitted(true);
  };

  return (
    <main className="py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Contact</h1>
        <p className="mt-3 text-[var(--mb-muted)]">We’ll get back to you within 2 business days.</p>

        {submitted ? (
          <div className="mt-8 rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6">
            <div className="text-lg">Thank you. We’ll be in touch shortly.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="text-sm">Name</label>
              <input className="mt-1 w-full rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-3" {...register("name")} aria-invalid={!!errors.name} />
              {errors.name && <p className="text-xs text-[var(--mb-danger)] mt-1">{errors.name.message as string}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-3" {...register("email")} aria-invalid={!!errors.email} />
              {errors.email && <p className="text-xs text-[var(--mb-danger)] mt-1">{errors.email.message as string}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm">Phone</label>
              <input className="mt-1 w-full rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-3" {...register("phone")} />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm">Organization</label>
              <input className="mt-1 w-full rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-3" {...register("org")} aria-invalid={!!errors.org} />
              {errors.org && <p className="text-xs text-[var(--mb-danger)] mt-1">{errors.org.message as string}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm">Country</label>
              <input className="mt-1 w-full rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-3" {...register("country")} aria-invalid={!!errors.country} />
              {errors.country && <p className="text-xs text-[var(--mb-danger)] mt-1">{errors.country.message as string}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm">Topic</label>
              <select className="mt-1 w-full rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-3" {...register("topic")} aria-invalid={!!errors.topic}>
                <option value="">Select</option>
                <option value="consulting">Consulting</option>
                <option value="event-ops">Event Operations</option>
                <option value="digital">Digital / Pass App</option>
                <option value="brand-media">Brand & Media</option>
              </select>
              {errors.topic && <p className="text-xs text-[var(--mb-danger)] mt-1">{errors.topic.message as string}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-3" {...register("message")} aria-invalid={!!errors.message} />
              {errors.message && <p className="text-xs text-[var(--mb-danger)] mt-1">{errors.message.message as string}</p>}
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-[var(--mb-muted)]">By submitting, you agree to our privacy notice.</p>
              <button disabled={isSubmitting} className="rounded-xl px-5 py-3 text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)]">{isSubmitting ? "Submitting..." : "Submit"}</button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}


