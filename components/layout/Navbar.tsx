"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "AI Hub Sentinel", href: "/ai-hub-sentinel" },
  { name: "HIPAA Cyber Risk Pre-Assessment", href: "/hipaa-cyber-risk-pre-assessment" },
  { name: "AI Receptionist", href: "/ai-receptionist" },
  { name: "Website and Automation Builds", href: "/website-and-automation-builds" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white/90 backdrop-blur"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3" aria-label="Primary navigation">
        <Link href="/" className="flex min-h-12 items-center gap-3 rounded-md focus:outline-none focus:ring-4 focus:ring-teal-200">
          <Image src="/logo.png" alt="AI Hub Agency" width={170} height={80} className="h-14 w-auto object-contain" priority />
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md text-sm font-semibold transition hover:text-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-200 ${pathname === link.href ? "text-teal-700" : "text-slate-700"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/contact" className="rounded-md px-4 py-3 text-sm font-bold text-slate-800 hover:text-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-200">
            Contact
          </Link>
          <Link href="/hipaa-cyber-risk-pre-assessment" className="rounded-md bg-blue-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
            Book Pre-Assessment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-md border border-slate-200 text-slate-900 focus:outline-none focus:ring-4 focus:ring-teal-200 xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-6 py-4 shadow-lg xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-3 py-3 font-semibold focus:outline-none focus:ring-4 focus:ring-teal-200 ${pathname === link.href ? "bg-teal-50 text-teal-800" : "text-slate-800"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="rounded-md px-3 py-3 font-semibold text-slate-800 focus:outline-none focus:ring-4 focus:ring-teal-200">
              Contact
            </Link>
            <Link href="/hipaa-cyber-risk-pre-assessment" onClick={() => setIsOpen(false)} className="mt-2 rounded-md bg-blue-900 px-4 py-3 text-center font-bold text-white focus:outline-none focus:ring-4 focus:ring-blue-200">
              Book Pre-Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
