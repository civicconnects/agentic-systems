import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, FileText, ShieldAlert } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "HIPAA Cyber Risk Pre-Assessment | AI Hub Sentinel",
  description: "Request a healthcare cybersecurity pre-assessment guided by HHS Security Risk Assessment concepts for dental offices and medical practices.",
};

const covers = [
  "Connected systems and devices that support patient operations",
  "Common risk areas such as patching, access, documentation, and alert visibility",
  "Current IT-provider coverage and monitoring gaps",
  "Priority readiness questions inspired by HHS SRA concepts",
];

const receives = [
  "Plain-English risk summary",
  "Priority recommendations",
  "Executive summary for practice leadership",
  "Next-step options for Sentinel monitoring and support",
];

export default function PreAssessmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "HIPAA Cyber Risk Pre-Assessment",
    provider: {
      "@type": "ProfessionalService",
      name: "AI Hub Agency",
      url: "https://www.ai-hub.agency",
    },
    serviceType: "Cybersecurity risk pre-assessment for healthcare practices",
    areaServed: "United States",
    audience: "Dental offices, medical clinics, and healthcare practices",
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <section className="bg-[#082033] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-300">HIPAA Cyber Risk Pre-Assessment</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Find Out Where Your Practice May Be Exposed</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            Start with a guided conversation about cybersecurity visibility, device risks, HIPAA Security Rule readiness priorities, and practical next steps.
          </p>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-teal-300 px-6 py-3 font-bold text-slate-950 hover:bg-teal-200 focus:outline-none focus:ring-4 focus:ring-teal-200/60">
            Request Your HIPAA Cyber Risk Pre-Assessment <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <article className="rounded-md border border-slate-200 bg-slate-50 p-6">
            <ClipboardCheck className="h-9 w-9 text-teal-700" />
            <h2 className="mt-5 text-2xl font-bold">What It Covers</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {covers.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="rounded-md border border-slate-200 bg-slate-50 p-6">
            <FileText className="h-9 w-9 text-teal-700" />
            <h2 className="mt-5 text-2xl font-bold">What You Receive</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {receives.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="rounded-md border border-slate-200 bg-slate-50 p-6">
            <ShieldAlert className="h-9 w-9 text-teal-700" />
            <h2 className="mt-5 text-2xl font-bold">What It Is Not</h2>
            <p className="mt-5 leading-7 text-slate-700">
              It is not a legal opinion, full HIPAA compliance audit, penetration test, or guarantee of compliance. It is a practical starting point for risk visibility and prioritization.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-5xl">HHS SRA-Guided Discussion Points</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Systems and devices", "Potential threats and vulnerabilities", "Current safeguards", "Priority corrective actions"].map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-white p-5 font-semibold">{item}</div>
            ))}
          </div>
          <p className="mt-8 rounded-md border border-slate-200 bg-white p-5 font-semibold text-slate-700">
            AI Hub Sentinel supports cybersecurity readiness and risk-management efforts. It does not provide legal advice and does not guarantee HIPAA compliance.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to Start?</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">Use the healthcare contact form to request a pre-assessment. Please do not include patient information or protected health information.</p>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
            Open Booking Form <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
