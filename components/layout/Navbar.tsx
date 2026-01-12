"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Bot, ChevronRight, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  // Add a timeout ref to handle the delay
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'Rent an Agent', href: '/rent-an-agent' },
    { name: 'AI Factory', href: '/factory' },
  ];

  const contactDropdownLinks = [
    { name: 'Contact Us', href: '/contact', id: undefined },
    { name: 'About', href: '/about', id: undefined },
    { name: 'Tutorials', href: '/tutorials', id: 'tutorials-nav' }, // Kept ID for tour
  ];

  // Handler to open dropdown
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setContactDropdownOpen(true);
  };

  // Handler to close dropdown with delay
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setContactDropdownOpen(false);
    }, 150); // 150ms delay
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo - CSS Filters used to ensure visibility (White Mode) on Dark Navbar */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="AI Hub Agency"
            width={250}
            height={150}
            className="h-[100px] w-auto object-contain group-hover:scale-105 transition-transform"
            quality={100}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${pathname === link.href ? 'text-blue-400' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Contact Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-400 ${pathname.includes('/contact') || pathname.includes('/about') || pathname.includes('/tutorials') ? 'text-blue-400' : 'text-slate-300'}`}
            >
              Contact <ChevronDown className="w-4 h-4" />
            </button>

            {contactDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden py-2 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                {contactDropdownLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    id={link.id}
                    className={`px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors text-left ${pathname === link.href ? 'text-blue-400 bg-slate-800/50' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/factory"
            // 🎯 TARGET ID FOR TOUR STEP 3
            id="custom-builder-link"
            className="bg-white text-slate-950 px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            Deploy Agent
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 md:hidden flex flex-col p-6 space-y-4 shadow-2xl h-[calc(100vh-100px)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between text-lg font-medium text-slate-300 hover:text-white border-b border-slate-800 pb-2"
            >
              {link.name} <ChevronRight className="w-4 h-4" />
            </Link>
          ))}
          {/* Mobile Contact Dropdown Items (Flattened) */}
          <div className="pt-2 pb-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contact & Resources</p>
            {contactDropdownLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-lg font-medium text-slate-300 hover:text-white border-b border-slate-800 pb-2 mb-2"
              >
                {link.name} <ChevronRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;