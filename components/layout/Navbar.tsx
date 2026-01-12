"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Bot, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'Rent an Agent', href: '/rent-an-agent' },
    { name: 'AI Factory', href: '/factory' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Contact', href: '/contact' },
  ];

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
              // 🎯 TARGET ID FOR TOUR STEP 4
              id={link.name === 'Tutorials' ? 'tutorials-nav' : undefined}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${pathname === link.href ? 'text-blue-400' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
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
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 md:hidden flex flex-col p-6 space-y-4 shadow-2xl">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;