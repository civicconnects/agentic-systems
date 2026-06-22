import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Hub Agency",
  description: "Privacy information for AI Hub Agency healthcare cybersecurity and practice automation inquiries.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-36">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-600">Last updated: June 22, 2026</p>
        <div className="mt-10 space-y-8 leading-7 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-950">Information We Collect</h2>
            <p className="mt-3">AI Hub Agency collects practice-level contact information you provide, such as name, practice name, role, practice type, number of locations, approximate device count, current IT provider, main concern, email, phone, preferred contact time, and message details.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">Do Not Submit PHI</h2>
            <p className="mt-3">Website forms are not intended for patient information or protected health information. Please do not submit patient names, record details, treatment information, appointment details tied to a patient, or other PHI through this website.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">How We Use Information</h2>
            <p className="mt-3">We use submitted information to respond to inquiries, evaluate fit for AI Hub Sentinel, discuss cybersecurity readiness, and improve practice-focused services.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">Security</h2>
            <p className="mt-3">We use reasonable administrative and technical safeguards for submitted business contact information. No website transmission or storage system can be guaranteed completely secure.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-950">Contact</h2>
            <p className="mt-3">Questions about this policy can be sent to info@ai-hub.agency.</p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
