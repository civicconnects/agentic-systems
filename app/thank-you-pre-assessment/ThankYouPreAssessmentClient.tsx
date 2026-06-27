"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

type ThankYouPreAssessmentClientProps = {
  initialAllowed: boolean;
};

function subscribeToSubmissionFlag(onStoreChange: () => void) {
  queueMicrotask(onStoreChange);
  return () => {};
}

function getSubmissionFlag() {
  const cookie = typeof document.cookie === "string" ? document.cookie : "";
  let storageAllowed = false;
  try {
    storageAllowed =
      window.sessionStorage?.getItem("sentinelPreAssessmentSubmitted") === "true" ||
      window.localStorage?.getItem("sentinelPreAssessmentSubmitted") === "true";
  } catch {
    storageAllowed = false;
  }

  return storageAllowed || cookie.split("; ").includes("sentinelPreAssessmentSubmitted=true");
}

export default function ThankYouPreAssessmentClient({ initialAllowed }: ThankYouPreAssessmentClientProps) {
  const browserAllowed = useSyncExternalStore(subscribeToSubmissionFlag, getSubmissionFlag, () => false);
  const isAllowed = initialAllowed || browserAllowed;

  useEffect(() => {
    if (isAllowed) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "sentinel_thank_you_view" });
      try {
        window.sessionStorage?.removeItem("sentinelPreAssessmentSubmitted");
        window.localStorage?.removeItem("sentinelPreAssessmentSubmitted");
      } catch {
        // Storage can be unavailable in restricted browser contexts.
      }
      document.cookie = "sentinelPreAssessmentSubmitted=; Max-Age=0; Path=/thank-you-pre-assessment; SameSite=Lax";
      document.cookie = "sentinelPreAssessmentSubmitted=; Max-Age=0; Path=/; SameSite=Lax";
    }
  }, [isAllowed]);

  if (!isAllowed) {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <section className="px-6 pb-20 pt-36">
          <div className="mx-auto max-w-3xl rounded-md border border-slate-200 bg-slate-50 p-8 text-center">
            <h1 className="text-3xl font-bold">Pre-assessment submission required</h1>
            <p className="mt-4 leading-7 text-slate-700">This page is shown only after a valid pre-assessment form submission flow.</p>
            <Link href="/request-pre-assessment" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-blue-900 px-6 py-3 font-bold text-white focus:outline-none focus:ring-4 focus:ring-blue-200">
              Request a Pre-Assessment
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="bg-[#082033] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-teal-300" />
          <p className="mt-5 font-semibold uppercase tracking-[0.08em] text-teal-300">Request received</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Thank You. Your Pre-Assessment Request Has Been Received.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50">An AI Hub Sentinel team member will review your request and contact you shortly.</p>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-4">
            {["We review your practice details.", "A Sentinel team member contacts you.", "We discuss your practice needs and next step.", "You receive clear guidance on potential risk areas."].map((step, index) => (
              <div key={step} className="rounded-md border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-teal-700">Step {index + 1}</p>
                <p className="mt-3 font-semibold leading-6">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-md border border-amber-300 bg-amber-50 p-5 text-sm font-semibold leading-6 text-amber-950">
            Important privacy notice: Please do not send patient information, protected health information, passwords, medical records, or sensitive patient data by email or through web forms.
          </div>
          <div className="mt-10 text-center">
            <p className="font-bold">Need to speak with us now?</p>
            <a href="tel:+19184092361" className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-bold text-white focus:outline-none focus:ring-4 focus:ring-blue-200">
              <Phone className="h-5 w-5" /> Call 918-409-2361
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
