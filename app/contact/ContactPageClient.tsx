"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Mail, Phone, Send } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const mainConcerns = [
  "Ransomware",
  "HIPAA readiness",
  "Patient data protection",
  "Unpatched computers or devices",
  "Lack of visibility into security risks",
  "Missed alerts",
  "Need a security pre-assessment",
  "Not sure where to start",
];

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setIsSuccess(true);
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="bg-[#082033] px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-300">Contact AI Hub Agency</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Request a HIPAA Cyber Risk Pre-Assessment</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            Share practice-level information so we can follow up about cybersecurity visibility, Sentinel monitoring, or healthcare workflow support.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <div className="mb-6 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm font-semibold text-amber-950">
              Do not submit patient information or protected health information through this form.
            </div>

            {isSuccess ? (
              <div className="rounded-md border border-teal-200 bg-teal-50 p-8 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-teal-700" />
                <h2 className="mt-4 text-2xl font-bold">Request captured for preview review.</h2>
                <p className="mt-3 text-slate-700">This preview form is ready for Founder review. Production submission wiring should be approved before launch.</p>
                <button type="button" onClick={() => setIsSuccess(false)} className="mt-6 rounded-md bg-blue-900 px-5 py-3 font-bold text-white focus:outline-none focus:ring-4 focus:ring-blue-200">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid min-w-0 gap-5 rounded-md border border-slate-200 bg-slate-50 p-6">
                <div className="grid min-w-0 gap-5 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Practice Name" name="practiceName" required />
                  <Field label="Role" name="role" required />
                  <Field label="Practice Type" name="practiceType" required />
                  <Field label="Number of Locations" name="locations" type="number" min="1" required />
                  <Field label="Approximate Number of Devices or Workstations" name="devices" type="number" min="1" required />
                  <Field label="Current IT Provider" name="itProvider" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Preferred Contact Time" name="preferredContactTime" />
                </div>

                <label className="grid gap-2 font-semibold text-slate-800">
                  Main Concern
                  <select name="mainConcern" required className="min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-teal-200">
                    <option value="">Select a concern</option>
                    {mainConcerns.map((concern) => <option key={concern}>{concern}</option>)}
                  </select>
                </label>

                <label className="grid gap-2 font-semibold text-slate-800">
                  Message
                  <textarea name="message" rows={5} className="w-full min-w-0 rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-teal-200" placeholder="Describe your practice-level concern. Do not include patient information or PHI." />
                </label>

                <button disabled={isSubmitting} className="inline-flex min-h-12 w-full min-w-0 flex-wrap items-center justify-center gap-2 rounded-md bg-blue-900 px-6 py-3 text-center font-bold leading-6 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-60">
                  {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                  Request Your HIPAA Cyber Risk Pre-Assessment
                </button>
              </form>
            )}
          </div>

          <aside className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Prefer to Reach Out Directly?</h2>
            <div className="mt-6 space-y-5 text-slate-700">
              <p className="flex gap-3"><Phone className="h-5 w-5 text-teal-700" /> 918-409-2361</p>
              <p className="flex gap-3"><Mail className="h-5 w-5 text-teal-700" /> info@ai-hub.agency</p>
            </div>
            <p className="mt-6 rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-700">
              The first conversation focuses on practice-level security visibility, readiness priorities, and whether Sentinel is a fit.
            </p>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text", required = false, min }: { label: string; name: string; type?: string; required?: boolean; min?: string }) {
  return (
    <label className="grid gap-2 font-semibold text-slate-800">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        className="min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-teal-200"
      />
    </label>
  );
}
