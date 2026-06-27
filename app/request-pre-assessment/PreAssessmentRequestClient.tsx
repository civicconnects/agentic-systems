"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Phone, Send, ShieldCheck } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const trustItems = [
  "Built for healthcare practices",
  "No patient information required",
  "Clear findings and next steps",
  "Managed support available",
];

const assessmentAreas = [
  ["Potential HIPAA-related security gaps", "Understand areas that may need closer review before they create a larger patient-data or operations issue."],
  ["Common practice risks", "Review exposure involving office devices, staff access, email, backups, and patient-data handling."],
  ["Priority next steps", "Get clearer guidance on the issues that may deserve attention first and practical actions to consider."],
];

const audiences = [
  "Independent dental offices",
  "Multi-location dental groups",
  "Orthodontic and oral surgery practices",
  "Chiropractic clinics",
  "Private medical practices",
  "Small healthcare offices handling patient information",
];

const faqs = [
  ["Is this a HIPAA certification?", "No. This is a risk-visibility and pre-assessment service designed to help identify potential gaps and priorities. It is not a legal opinion, certification, or guarantee of HIPAA compliance."],
  ["Do I need to provide patient information?", "No. Do not submit patient information, protected health information, medical records, or sensitive patient details through this form."],
  ["Is there a cost for the pre-assessment?", "The initial HIPAA compliance and cyber-risk pre-assessment is offered at no cost for qualified practices."],
  ["What happens after I submit the form?", "An AI Hub Sentinel team member reviews the request and contacts the practice to discuss the next step after delivery is accepted by the approved lead destination."],
];

export default function PreAssessmentRequestClient() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const payload = Object.fromEntries(new FormData(form).entries());
    const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
    for (const field of utmFields) payload[field] = searchParams.get(field) || "";
    payload.landing_page = window.location.href;
    payload.submitted_at = new Date().toISOString();

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/preassessment-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Lead delivery was not accepted.");

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "sentinel_preassessment_submit" });
      sessionStorage.setItem("sentinelPreAssessmentSubmitted", "true");
      window.location.assign("/thank-you-pre-assessment");
    } catch (error) {
      console.error(error);
      setStatus("We could not send your request right now. Please call AI Hub Sentinel directly at 918-409-2361.");
      setIsSubmitting(false);
    }
  }

  function trackPhone(location: string) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "sentinel_phone_click", location });
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="bg-[#082033] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="font-semibold uppercase tracking-[0.08em] text-teal-300">For medical and dental practices</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Find Cyber and HIPAA Security Gaps Before They Become a Practice Disruption</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
              Request a no-cost HIPAA compliance and cyber-risk pre-assessment for your medical or dental practice. Get a clearer view of potential security gaps, patient-data risks, and the priority areas that may need attention.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#request-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal-300 px-6 py-3 font-bold text-slate-950 hover:bg-teal-200 focus:outline-none focus:ring-4 focus:ring-teal-200/60">
                Request Your No-Cost Pre-Assessment <ArrowRight className="h-5 w-5" />
              </a>
              <a href="tel:+19184092361" onClick={() => trackPhone("hero")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30">
                <Phone className="h-5 w-5" /> Call 918-409-2361
              </a>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold text-blue-50">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-300" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <section id="request-form" className="rounded-md border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl">
            <h2 className="text-2xl font-bold">Request Your No-Cost HIPAA and Cyber-Risk Pre-Assessment</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">Tell us a little about your practice. We will review your request and contact you to discuss the next step.</p>
            <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm font-semibold text-amber-950">Do not submit patient information, protected health information, medical records, passwords, or sensitive patient data.</p>

            <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
              <label className="hidden" aria-hidden="true">
                Company website
                <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" name="first_name" autoComplete="given-name" required />
                <Field label="Last name" name="last_name" autoComplete="family-name" required />
              </div>
              <Field label="Practice name" name="practice_name" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Work email" name="work_email" type="email" autoComplete="email" required />
                <Field label="Phone number" name="phone" type="tel" autoComplete="tel" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Select label="Practice type" name="practice_type" options={["Dental Practice", "Orthodontic Practice", "Oral Surgery Practice", "Pediatric Dental Practice", "Chiropractic Practice", "Private Medical Practice", "Multi-Location Healthcare Group", "Other Healthcare Practice"]} required />
                <Select label="Number of locations" name="locations" options={["1", "2-3", "4-9", "10+"]} required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="City" name="city" autoComplete="address-level2" required />
                <Field label="State" name="state" autoComplete="address-level1" maxLength={2} placeholder="TX" required />
              </div>
              <Select label="Best time to call" name="best_time" options={["Morning", "Midday", "Afternoon", "Any time during business hours"]} required />
              <Select label="What concerns you most right now?" name="concern" options={["HIPAA security risk", "Ransomware or cyberattack concern", "Patient-data protection", "Staff email or phishing risk", "Device and system visibility", "Backups and recovery", "Not sure, need guidance"]} />
              <label className="flex gap-3 text-sm font-semibold text-slate-700">
                <input name="no_phi_consent" value="yes" type="checkbox" required className="mt-1 h-4 w-4 shrink-0" />
                <span>I understand that I should not submit patient information, protected health information, medical records, passwords, or other sensitive patient data through this form.</span>
              </label>
              <button disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-60">
                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                Request My No-Cost Pre-Assessment
              </button>
              <div role="status" aria-live="polite" className="min-h-6 text-sm font-semibold text-red-700">{status}</div>
              <p className="text-xs leading-5 text-slate-600">By submitting, you agree to be contacted by AI Hub Sentinel about your request.</p>
            </form>
          </section>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.08em] text-teal-700">Risk visibility</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-5xl">What the Pre-Assessment Helps Identify</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {assessmentAreas.map(([title, copy], index) => (
              <article key={title} className="rounded-md border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-100 font-bold text-blue-800">{index + 1}</div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.08em] text-teal-700">Why practices request it</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Know What Needs Attention Before a Small Gap Becomes a Bigger Problem</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">Most healthcare practices are focused on patients, scheduling, billing, and daily operations. Security gaps can stay hidden until an email account is compromised, a device goes down, a backup fails, or patient information is put at risk.</p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-6">
            <ShieldCheck className="h-10 w-10 text-teal-700" />
            <h3 className="mt-5 text-2xl font-bold">Built for busy practices</h3>
            <ul className="mt-5 space-y-3 font-semibold text-slate-700">
              {["Clear, non-technical explanations", "Prioritized findings and practical next steps", "Human review and guidance", "Support for approved remediation when appropriate"].map((item) => (
                <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-teal-700" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.08em] text-teal-700">Who this is for</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-5xl">Designed for Healthcare Offices Handling Patient Information</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => <div key={audience} className="rounded-md border border-slate-200 bg-slate-50 p-5 font-semibold">{audience}</div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0b2a3f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-5xl">Clear Answers Before You Request a Pre-Assessment</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <article key={question} className="rounded-md border border-white/15 bg-white/10 p-6">
                <h3 className="text-xl font-bold">{question}</h3>
                <p className="mt-3 leading-7 text-blue-50">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text", required, autoComplete, maxLength, placeholder }: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string; maxLength?: number; placeholder?: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-800">
      {label}
      <input name={name} type={type} required={required} autoComplete={autoComplete} maxLength={maxLength} placeholder={placeholder} className="min-h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:outline-none focus:ring-4 focus:ring-teal-200" />
    </label>
  );
}

function Select({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-800">
      {label}
      <select name={name} required={required} className="min-h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:outline-none focus:ring-4 focus:ring-teal-200">
        <option value="">Select one</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
