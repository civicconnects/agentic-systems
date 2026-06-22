import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarClock, ClipboardList, Globe2, Workflow } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Healthcare Website and Automation Builds | AI Hub Agency",
  description: "Medical and dental website redesigns, intake workflow improvements, appointment request systems, follow-up automation, and secure operational tooling.",
};

export default function WebsiteAutomationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website and Automation Builds",
    provider: {
      "@type": "ProfessionalService",
      name: "AI Hub Agency",
      url: "https://www.ai-hub.agency",
    },
    serviceType: "Healthcare website and practice automation builds",
    areaServed: "United States",
    audience: "Medical and dental practices",
  };

  const services = [
    ["Medical and dental website redesigns", "Patient-facing pages that explain services clearly and support trust.", Globe2],
    ["Online intake workflow improvements", "Cleaner request and intake flows without asking for unnecessary sensitive details.", ClipboardList],
    ["Appointment request systems", "Practical routing for scheduling requests and staff follow-up.", CalendarClock],
    ["Internal workflow automation", "Secure operational tools for repetitive practice administration.", Workflow],
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <section className="bg-[#082033] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-300">Website and Automation Builds</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Better Digital Workflows for Healthcare Practices</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            AI Hub Agency builds patient-facing websites, intake workflows, scheduling automation, follow-up systems, and secure operational tooling for practice teams.
          </p>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, copy, Icon]) => (
            <article key={title as string} className="rounded-md border border-slate-200 bg-slate-50 p-6">
              <Icon className="h-8 w-8 text-teal-700" />
              <h2 className="mt-5 text-xl font-bold">{title as string}</h2>
              <p className="mt-3 leading-7 text-slate-700">{copy as string}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
            Explore Practice Automation Services <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
