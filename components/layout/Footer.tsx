import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-6 py-14 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold text-white">AI Hub Agency</h2>
          <p className="mt-4 max-w-sm leading-7">
            Cybersecurity visibility, managed monitoring, and practical HIPAA Security Rule readiness support for medical and dental practices.
          </p>
          <p className="mt-5 rounded-md border border-teal-300/20 bg-white/5 p-4 text-sm leading-6">
            Do not submit patient information or protected health information through website forms.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Sentinel</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link className="hover:text-teal-300" href="/ai-hub-sentinel">AI Hub Sentinel</Link></li>
            <li><Link className="hover:text-teal-300" href="/request-pre-assessment">HIPAA Cyber Risk Pre-Assessment</Link></li>
            <li><Link className="hover:text-teal-300" href="/resources">Healthcare Resources</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link className="hover:text-teal-300" href="/ai-receptionist">AI Receptionist</Link></li>
            <li><Link className="hover:text-teal-300" href="/website-and-automation-builds">Website and Automation Builds</Link></li>
            <li><Link className="hover:text-teal-300" href="/who-we-help">Who We Help</Link></li>
            <li><Link className="hover:text-teal-300" href="/about">About</Link></li>
            <li><Link className="hover:text-teal-300" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3"><Phone className="h-5 w-5 text-teal-300" /> 918-409-2361</li>
            <li className="flex gap-3"><Mail className="h-5 w-5 text-teal-300" /> info@ai-hub.agency</li>
            <li className="flex gap-3"><MapPin className="h-5 w-5 text-teal-300" /> Dallas, Texas</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm md:flex-row">
        <p>&copy; 2026 AI Hub Agency. All rights reserved.</p>
        <div className="flex gap-5">
          <Link className="hover:text-teal-300" href="/privacy">Privacy Policy</Link>
          <Link className="hover:text-teal-300" href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
