import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ClipboardList, FileText, MonitorCheck, ShieldCheck } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "AI Hub Sentinel | Healthcare Cybersecurity Monitoring",
  description: "Ongoing device health monitoring, suspicious activity review, reporting, escalation, and HIPAA Security Rule readiness support for healthcare practices.",
};

const monitorItems = [
  "Workstations and laptops used by staff",
  "Servers and practice network assets",
  "Connected systems that support scheduling, imaging, billing, and records",
  "Device health, patching, access, and alert patterns",
];

const faqs = [
  ["Does Sentinel guarantee HIPAA compliance?", "No. Sentinel supports cybersecurity readiness and risk-management efforts. It does not provide legal advice and does not guarantee HIPAA compliance."],
  ["Does Sentinel replace our IT provider?", "No. Sentinel is designed to give practice leadership clearer security visibility and can coordinate with an existing IT provider when appropriate."],
  ["Can you review suspicious alerts?", "Yes. Sentinel can help organize notable security events for human review and escalation based on the service tier."],
  ["Do we need internal cybersecurity staff?", "No. Sentinel is intended for healthcare organizations that need practical visibility without building an internal cybersecurity team."],
];

export default function SentinelPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Hub Sentinel",
    provider: {
      "@type": "ProfessionalService",
      name: "AI Hub Agency",
      url: "https://www.ai-hub.agency",
    },
    serviceType: "Healthcare cybersecurity monitoring and HIPAA Security Rule readiness support",
    areaServed: "United States",
    audience: "Medical and dental practices",
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <section className="bg-[#082033] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-300">AI Hub Sentinel</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Managed Cybersecurity Monitoring and Readiness Support for Healthcare Practices</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            Sentinel helps medical and dental practices monitor device health, review suspicious activity, understand priority security gaps, and organize HIPAA Security Rule readiness work in plain English.
          </p>
          <Link href="/hipaa-cyber-risk-pre-assessment" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-teal-300 px-6 py-3 font-bold text-slate-950 hover:bg-teal-200 focus:outline-none focus:ring-4 focus:ring-teal-200/60">
            Book a Risk Pre-Assessment <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">What Sentinel Monitors</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">The goal is practical visibility into the technology that keeps the practice day moving.</p>
          </div>
          <div className="grid gap-4">
            {monitorItems.map((item) => (
              <div key={item} className="flex gap-4 rounded-md border border-slate-200 bg-slate-50 p-5">
                <MonitorCheck className="h-6 w-6 shrink-0 text-teal-700" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-5xl">Human Review, Reporting, and Escalation</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Review", "Suspicious activity and device-health findings are organized for human review, not treated as automated compliance answers.", AlertTriangle],
              ["Report", "Monthly summaries explain priority findings, operational impact, and recommended next actions for leadership.", FileText],
              ["Escalate", "Notable findings can be escalated so practice leaders and IT partners know what needs attention.", ShieldCheck],
            ].map(([title, copy, Icon]) => (
              <article key={title as string} className="rounded-md border border-slate-200 bg-white p-6">
                <Icon className="h-8 w-8 text-blue-800" />
                <h3 className="mt-5 text-2xl font-bold">{title as string}</h3>
                <p className="mt-3 leading-7 text-slate-700">{copy as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <ClipboardList className="h-10 w-10 text-teal-700" />
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">HIPAA Readiness Support</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>Sentinel uses HHS Security Risk Assessment framework concepts to help practices discuss systems, safeguards, risk areas, and corrective action priorities.</p>
            <p className="rounded-md border border-slate-200 bg-slate-50 p-5 font-semibold">AI Hub Sentinel supports cybersecurity readiness and risk-management efforts. It does not provide legal advice and does not guarantee HIPAA compliance.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#0b2a3f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-5xl">Frequently Asked Questions</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <article key={question} className="rounded-md border border-white/15 bg-white/10 p-6">
                <h3 className="text-xl font-bold">{question}</h3>
                <p className="mt-3 leading-7 text-blue-50">{answer}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-teal-300 px-6 py-3 font-bold text-slate-950 hover:bg-teal-200 focus:outline-none focus:ring-4 focus:ring-teal-200/60">
            Talk With AI Hub Agency <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
