import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MessageCircle, PhoneCall, Route } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "AI Receptionist for Healthcare Practices | AI Hub Agency",
  description: "Voice AI receptionist support for missed calls, appointment requests, routing, callback capture, and healthcare practice workflows.",
};

export default function AIReceptionistPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Receptionist / Voice AI",
    provider: {
      "@type": "ProfessionalService",
      name: "AI Hub Agency",
      url: "https://www.ai-hub.agency",
    },
    serviceType: "Voice AI receptionist support for healthcare practices",
    areaServed: "United States",
    audience: "Medical and dental practices",
  };

  const cards = [
    ["Missed patient calls", "Capture call intent when the front desk is busy.", PhoneCall],
    ["Appointment requests", "Collect basic request details for staff follow-up.", Clock],
    ["After-hours handling", "Give callers a clear path when the practice is closed.", MessageCircle],
    ["Routing and callbacks", "Route common requests and capture callback needs.", Route],
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <section className="bg-[#082033] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-300">AI Receptionist / Voice AI</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Reduce Missed-Call Problems Without Overloading the Front Desk</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            Voice AI can help healthcare practices answer common calls, route patients, capture appointment requests, and support follow-up workflows.
          </p>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {cards.map(([title, copy, Icon]) => (
            <article key={title as string} className="rounded-md border border-slate-200 bg-slate-50 p-6">
              <Icon className="h-8 w-8 text-teal-700" />
              <h2 className="mt-5 text-xl font-bold">{title as string}</h2>
              <p className="mt-3 leading-7 text-slate-700">{copy as string}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-md border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold">Important Use Boundary</h2>
          <p className="mt-3 leading-7 text-slate-700">
            AI Receptionist workflows are not positioned for medical advice, diagnoses, emergencies, or collection of protected health information unless the underlying system, agreements, and approved workflow allow that use.
          </p>
          <Link href="/contact" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
            Discuss Voice AI Fit <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
