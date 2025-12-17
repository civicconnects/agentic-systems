"use client";

import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo (This is your Home Button) */}
          <a href="/" className="font-bold text-xl tracking-tighter text-white hover:opacity-80 transition-opacity">
            AGENTIC <span className="text-blue-500">SYSTEMS</span>
          </a>

          {/* DESKTOP MENU (Minimalist: No "Home" text) */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="/#services" className="hover:text-white transition-colors">Services</a>
            <a href="/portfolio" className="hover:text-white transition-colors">Case Studies</a>
            
            {/* Divider Line */}
            <div className="h-4 w-px bg-slate-800"></div>

            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-blue-500" />
              <span className="font-mono">918-409-2361</span>
            </div>
            
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full font-bold transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Book Strategy Call
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-2 border-t border-slate-800 mt-4 animate-in slide-in-from-top-2 fade-in duration-200">
            <a 
              href="/#services" 
              className="block text-slate-300 hover:text-white hover:bg-slate-900 px-4 py-3 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="/portfolio" 
              className="block text-slate-300 hover:text-white hover:bg-slate-900 px-4 py-3 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </a>
            <div className="flex items-center gap-3 px-4 py-3 text-slate-400 border-t border-slate-900 mt-2">
              <PhoneCall className="w-4 h-4 text-blue-500" />
              <span>918-409-2361</span>
            </div>
            <div className="px-4 pt-2">
              <a 
                href="/contact" 
                className="block text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-bold"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;