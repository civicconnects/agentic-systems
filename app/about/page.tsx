import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "About AI Hub Agency | Healthcare Cybersecurity Readiness",
  description: "AI Hub Agency helps healthcare practices improve cybersecurity visibility, HIPAA Security Rule readiness, voice workflows, and practice automation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="bg-[#082033] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-300">About AI Hub Agency</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Practical Security Visibility and Automation Support for Healthcare Practices</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            AI Hub Agency builds AI Hub Sentinel, Voice AI, websites, and operational workflows for medical and dental practices that need clear next steps without unnecessary technical noise.
          </p>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ShieldCheck className="h-14 w-14 text-teal-700" />
          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              The agency focuses on practice-level problems: cybersecurity visibility, device monitoring, readiness documentation, missed calls, intake workflows, and patient-facing digital systems.
            </p>
            <p>
              Our work is designed to help doctors, dentists, administrators, and office managers understand what needs attention and what can be improved next.
            </p>
            <p className="rounded-md border border-slate-200 bg-slate-50 p-5 font-semibold">
              AI Hub Sentinel supports cybersecurity readiness and risk-management efforts. It does not provide legal advice and does not guarantee HIPAA compliance.
            </p>
            <Link href="/request-pre-assessment" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
              Book a HIPAA Cyber Risk Pre-Assessment <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
