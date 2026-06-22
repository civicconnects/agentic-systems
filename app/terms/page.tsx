import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Terms of Service | AI Hub Agency",
  description: "Terms for AI Hub Agency website visitors and service inquiries.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-36">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-600">Last updated: June 22, 2026</p>
        <div className="mt-10 space-y-8 leading-7 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-950">Website Use</h2>
            <p className="mt-3">By using this website, you agree to use it for lawful business inquiries and not to submit patient information or protected health information through website forms.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">Service Information</h2>
            <p className="mt-3">AI Hub Agency provides cybersecurity visibility, monitoring, readiness support, Voice AI, website, and automation services. Website content is informational and does not create a service agreement by itself.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">No Legal or Compliance Guarantee</h2>
            <p className="mt-3">AI Hub Sentinel supports cybersecurity readiness and risk-management efforts. It does not provide legal advice and does not guarantee HIPAA compliance.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">Contact</h2>
            <p className="mt-3">Questions about these terms can be sent to info@ai-hub.agency.</p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
