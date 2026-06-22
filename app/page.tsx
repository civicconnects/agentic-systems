import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HeartPulse,
  MonitorCheck,
  ServerCog,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const problems = [
  "Patient scheduling delays",
  "Billing interruptions",
  "Imaging or chart access issues",
  "Medical and dental record exposure",
  "Email and communication disruption",
  "Staff productivity loss",
  "Patient trust concerns",
  "Practice revenue impact",
];

const dependentSystems = [
  "Patient records",
  "Scheduling",
  "Billing",
  "Imaging",
  "Email",
  "Workstations and connected devices",
  "Ransomware risk",
  "HIPAA Security Rule readiness",
];

const sentinelCards = [
  {
    title: "Monitor Device Health",
    copy: "Know which computers, workstations, servers, and connected devices may need attention.",
    icon: MonitorCheck,
  },
  {
    title: "Review Suspicious Activity",
    copy: "Surface unusual security events so they can be reviewed by people who understand practice operations.",
    icon: Activity,
  },
  {
    title: "Identify Security Gaps",
    copy: "Find areas that may need stronger controls, documentation, patching, access management, or corrective action.",
    icon: AlertTriangle,
  },
  {
    title: "Support HIPAA Security Readiness",
    copy: "Use HHS SRA-guided discussions to organize risk findings, safeguards, and next steps.",
    icon: ClipboardCheck,
  },
  {
    title: "Translate Findings Into Plain English",
    copy: "Give doctors, office managers, and leadership a practical explanation of what matters.",
    icon: FileText,
  },
];

const audiences = [
  "Independent dental offices",
  "Multi-location dental groups",
  "Orthodontists",
  "Pediatric dentists",
  "Oral surgeons",
  "Medical clinics",
  "Specialty practices",
  "Healthcare organizations without internal cybersecurity staff",
];

const tiers = [
  {
    name: "Sentinel Foundation",
    features: [
      "Initial risk pre-assessment",
      "Device and environment visibility review",
      "Monthly security summary",
      "Priority findings",
      "Recommended next actions",
    ],
  },
  {
    name: "Sentinel Watch",
    features: [
      "Everything in Foundation",
      "Ongoing device monitoring",
      "Security alert review",
      "Device health reporting",
      "Escalation of notable findings",
      "Quarterly readiness review",
    ],
  },
  {
    name: "Sentinel HIPAA Readiness",
    features: [
      "Everything in Sentinel Watch",
      "HHS SRA-guided readiness workflow",
      "Risk documentation support",
      "Corrective action tracking",
      "Leadership reporting",
      "Security improvement roadmap",
    ],
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AI Hub Agency",
    url: "https://www.ai-hub.agency",
    telephone: "918-409-2361",
    email: "info@ai-hub.agency",
    areaServed: "United States",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    serviceType: [
      "Healthcare cybersecurity monitoring",
      "HIPAA Security Rule readiness support",
      "Healthcare Voice AI",
      "Healthcare website and automation builds",
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      <section className="relative overflow-hidden bg-[#082033] pt-32 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,32,51,0.96),rgba(8,32,51,0.84)),url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-teal-200/30 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100">
              AI Hub Sentinel | For Medical and Dental Practices
            </p>
            <p className="mb-4 text-lg font-bold text-teal-200">
              Cybersecurity Monitoring and HIPAA Security Readiness for Medical and Dental Practices
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              Cybersecurity Monitoring and HIPAA Security Readiness for Your Practice
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">
              AI Hub Sentinel helps doctors, dentists, and office managers identify cybersecurity risks, protect patient operations, and use an HHS SRA-guided process to organize HIPAA security priorities before a cyber incident disrupts the practice.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/hipaa-cyber-risk-pre-assessment" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-teal-200 focus:outline-none focus:ring-4 focus:ring-teal-200/60">
                Book a HIPAA Cyber Risk Pre-Assessment <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/ai-hub-sentinel" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30">
                See What Sentinel Monitors
              </Link>
            </div>
            <p className="mt-8 max-w-2xl text-sm font-medium text-blue-100">
              Start with a HIPAA Cyber Risk Pre-Assessment, then get plain-English findings and next steps.
            </p>
          </div>

          <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-md bg-white p-5 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-teal-700">Sentinel Readiness Snapshot</p>
                  <h2 className="text-2xl font-bold">Priority View</h2>
                </div>
                <ShieldCheck className="h-10 w-10 text-teal-700" />
              </div>
              <div className="mt-5 space-y-4">
                {["Know where your practice may be exposed", "Get clearer visibility into device risks", "Review suspicious activity", "Organize HIPAA security priorities"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-md bg-slate-50 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-800">{index + 1}</div>
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-semibold text-teal-700">AI Hub Sentinel</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">AI Hub Sentinel Is Built to Help Protect the Systems Your Practice Depends On</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Know where your practice may be exposed, protect patient operations, and get clearer visibility into device risks and suspicious activity before problems interrupt the day.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {dependentSystems.map((system) => (
              <div key={system} className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-4 font-semibold">
                <ServerCog className="h-5 w-5 shrink-0 text-teal-700" />
                {system}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-semibold text-teal-700">Practice Problems</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Cybersecurity Problems Do Not Wait Until Your Practice Is Ready</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Small healthcare teams depend on connected systems every day. AI Hub Sentinel helps leadership see where cybersecurity risk may be building before an issue creates avoidable disruption.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => (
              <div key={problem} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mb-4 h-6 w-6 text-teal-700" />
                <p className="font-semibold">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sentinel" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-semibold text-teal-700">What AI Hub Sentinel Does</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Get Plain-English Findings and Next Steps</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {sentinelCards.map(({ title, copy, icon: Icon }) => (
              <article key={title} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="h-8 w-8 text-blue-800" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b2a3f] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <HeartPulse className="h-10 w-10 text-teal-300" />
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">Start With a Clearer Picture of Your HIPAA Security Risks</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-blue-50">
            <p>
              Risk analysis is a foundational part of HIPAA Security Rule efforts. Sentinel helps practices identify systems, devices, common risk areas, safeguards, and action priorities.
            </p>
            <p>
              The workflow is guided by HHS Security Risk Assessment framework concepts so teams can discuss risk in a practical, organized way.
            </p>
            <p className="rounded-md border border-teal-200/30 bg-white/10 p-5 text-base font-semibold">
              AI Hub Sentinel supports cybersecurity readiness and risk-management efforts. It does not provide legal advice and does not guarantee HIPAA compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-700">Who We Help</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Built for Practice Teams Without Time for Security Confusion</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <div key={audience} className="rounded-md border border-slate-200 bg-slate-50 p-5 font-semibold">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-700">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">From Pre-Assessment to Practical Next Steps</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {[
              "Book a HIPAA Cyber Risk Pre-Assessment",
              "Complete a practice security intake",
              "Review priority cybersecurity and readiness areas",
              "Receive a plain-English risk summary and next-step recommendations",
              "Choose Sentinel monitoring and support that fits the practice",
            ].map((step, index) => (
              <div key={step} className="rounded-md border border-slate-200 bg-white p-5">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 font-bold text-white">{index + 1}</div>
                <p className="font-semibold leading-6">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-semibold text-teal-700">Sentinel Service Tiers</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Monitoring and Readiness Support Options</h2>
            </div>
            <p className="max-w-md text-slate-700">Pricing is provided after a practice-specific review so the scope reflects your environment.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article key={tier.name} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-blue-950">{tier.name}</h3>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#082033] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-300">More Ways AI Hub Helps Practices Operate Better</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-md border border-white/15 bg-white/10 p-6">
              <Stethoscope className="h-8 w-8 text-teal-300" />
              <h3 className="mt-5 text-2xl font-bold">AI Receptionist / Voice AI</h3>
              <p className="mt-3 leading-7 text-blue-50">Help answer calls, route patients, capture appointment requests, and reduce missed-call problems.</p>
            </article>
            <article className="rounded-md border border-white/15 bg-white/10 p-6">
              <ClipboardCheck className="h-8 w-8 text-teal-300" />
              <h3 className="mt-5 text-2xl font-bold">Website and Automation Builds</h3>
              <p className="mt-3 leading-7 text-blue-50">Build stronger patient-facing websites, intake workflows, scheduling automation, follow-up systems, and operational tools.</p>
            </article>
          </div>
          <Link href="/website-and-automation-builds" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-teal-200 focus:outline-none focus:ring-4 focus:ring-teal-200/60">
            Explore Practice Automation Services <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
