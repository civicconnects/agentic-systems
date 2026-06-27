import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Stethoscope } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Who We Help | AI Hub Sentinel Healthcare Practices",
  description: "Cybersecurity visibility and practice automation support for dental offices, medical clinics, specialty practices, and healthcare teams without internal cybersecurity staff.",
};

const groups = [
  "Independent dental offices",
  "Multi-location dental groups",
  "Orthodontists",
  "Pediatric dentists",
  "Oral surgeons",
  "Medical clinics",
  "Specialty medical practices",
  "Healthcare organizations without internal cybersecurity staff",
];

export default function WhoWeHelpPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="bg-[#082033] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-300">Who We Help</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Security Visibility for the Practices Patients Depend On</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            AI Hub Sentinel is built for doctors, dentists, office managers, administrators, IT decision makers, compliance leads, and practice owners who need a clearer view of cybersecurity risk.
          </p>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <article key={group} className="rounded-md border border-slate-200 bg-slate-50 p-6">
              {group.includes("Medical") || group.includes("Specialty") ? <Stethoscope className="h-8 w-8 text-teal-700" /> : <Building2 className="h-8 w-8 text-teal-700" />}
              <h2 className="mt-5 text-xl font-bold">{group}</h2>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <Link href="/request-pre-assessment" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
            Book a HIPAA Cyber Risk Pre-Assessment <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
