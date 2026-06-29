import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Headphones, MonitorCheck, ShieldCheck } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Who We Are | AI Hub",
  description:
    "AI Hub helps healthcare practices and service businesses reduce operational friction with managed monitoring, AI receptionist systems, websites, and automation builds.",
};

const services = [
  {
    title: "SentinelTech managed monitoring",
    description: "Monitoring, visibility, and remediation support for systems that healthcare teams rely on every day.",
    icon: ShieldCheck,
  },
  {
    title: "AI Receptionist and voice automation",
    description: "Voice and intake workflows that help reduce missed calls, front-desk disruption, and slow response times.",
    icon: Headphones,
  },
  {
    title: "Website and automation builds",
    description: "Business websites, intake flows, and operational automations built around the way the practice actually works.",
    icon: MonitorCheck,
  },
];

const howWeWork = [
  "Understand the business, risk points, and bottlenecks.",
  "Map the systems, workflows, and response gaps that need attention.",
  "Recommend plain-English next steps with practical priorities.",
  "Implement the right mix of monitoring, automation, voice, and web systems.",
  "Support the team with reporting, iteration, and human-guided follow-through.",
];

const whyAiHub = [
  "Practical implementation, not just software recommendations.",
  "Human-guided support plus AI-enabled systems.",
  "Clear next steps and plain-English reporting.",
  "Solutions built around the business, not a generic tool stack.",
  "One partner across monitoring, automation, voice, and websites.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="bg-[#082033] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold text-teal-300">Who We Are</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Practical AI, technology, and automation support for businesses that cannot afford friction.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
              AI Hub is an AI automation, managed technology, and digital systems company. We help businesses reduce operational friction, protect critical systems, improve response time, and modernize how work gets done.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/hipaa-cyber-risk-pre-assessment" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-teal-300 focus:outline-none focus:ring-4 focus:ring-teal-200">
                Book a HIPAA Cyber Risk Pre-Assessment <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-teal-200">
                Contact AI Hub
              </Link>
            </div>
          </div>

          <div className="rounded-md border border-white/15 bg-white/10 p-6 shadow-2xl">
            <Bot className="h-10 w-10 text-teal-300" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-bold">Built for real operating pressure</h2>
            <p className="mt-4 leading-7 text-blue-50">
              Our current primary focus is healthcare practices: dental offices, medical practices, and specialty clinics that need clearer visibility, stronger response workflows, and technology that supports the team instead of slowing it down.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-semibold text-teal-700">What We Do</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Monitoring, voice, websites, and workflow systems under one roof.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              We work across the systems that shape daily operations, from critical technology visibility to patient intake and lead response.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="h-9 w-9 text-teal-700" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="font-semibold text-teal-700">Healthcare First</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Focused on practices where downtime and response gaps matter.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Healthcare practices are our current primary focus because their operations depend on responsive front desks, reliable systems, and careful handling of patient-data risk.
            </p>
            <p>
              Dental offices, medical practices, and specialty clinics often face the same pressure points: downtime, limited security visibility, front-desk disruption, aging technology, missed calls, and disconnected tools.
            </p>
            <p className="rounded-md border border-slate-200 bg-white p-5 text-base font-semibold leading-7 text-slate-800">
              AI Hub supports readiness, visibility, and operational improvement. We do not provide legal advice or promise HIPAA compliance or other legal compliance outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-teal-700">How We Work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Clear steps before bigger systems.</h2>
            <ol className="mt-8 space-y-4">
              {howWeWork.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-900 text-sm font-bold text-white">{index + 1}</span>
                  <span className="leading-7 text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="font-semibold text-teal-700">Why AI Hub</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Support that turns recommendations into working systems.</h2>
            <div className="mt-8 space-y-4">
              {whyAiHub.map((item) => (
                <div key={item} className="flex gap-3 rounded-md bg-slate-50 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f2a3f] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-semibold text-teal-300">Why We Built AI Hub</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Modern tools should make work calmer, faster, and easier to trust.</h2>
          </div>
          <div className="space-y-5 leading-8 text-blue-50">
            <p>
              We built AI Hub because many businesses are told to buy more software when what they really need is a practical partner who can connect the right systems, explain the tradeoffs, and help the team use them well.
            </p>
            <p>
              Healthcare practices come first, but we also support service businesses that need better intake, faster lead response, automation, and operational systems that can grow with them.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-md border border-slate-200 bg-slate-50 p-8 md:flex-row md:items-center">
          <div>
            <p className="font-semibold text-teal-700">Ready for a clearer next step?</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Start with a HIPAA Cyber Risk Pre-Assessment.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/hipaa-cyber-risk-pre-assessment" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
              Book a HIPAA Cyber Risk Pre-Assessment <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-bold text-slate-900 transition hover:border-teal-700 hover:text-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-200">
              Contact AI Hub
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
