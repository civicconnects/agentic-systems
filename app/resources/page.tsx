import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Healthcare Cybersecurity Resources | AI Hub Sentinel",
  description: "Healthcare-focused resources about HIPAA Security Risk Analysis, dental ransomware risk, cyber pre-assessments, and device visibility.",
};

const resources = [
  "HIPAA Security Risk Analysis: What Dental Offices Need to Know",
  "Ransomware Risks That Can Disrupt a Dental Practice",
  "What Is a HIPAA Cyber Risk Pre-Assessment?",
  "Medical Office Cybersecurity Checklist",
  "How to Know Whether Your Practice Has Visibility Into Device Risks",
  "Questions to Ask Your IT Provider About Cybersecurity Monitoring",
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="bg-[#082033] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-300">Resources</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Plain-English Healthcare Cybersecurity Resources</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            Practical topics for medical and dental leaders who want better cybersecurity visibility and HIPAA Security Rule readiness conversations.
          </p>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource} className="rounded-md border border-slate-200 bg-slate-50 p-6">
              <FileText className="h-8 w-8 text-teal-700" />
              <h2 className="mt-5 text-xl font-bold">{resource}</h2>
              <p className="mt-3 leading-7 text-slate-700">Founder-review draft topic for the redesign preview. Final article content can be expanded after approval.</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
            Ask About a Resource Topic <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
