"use client";

import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-24 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-bold text-xl tracking-tighter text-white mb-4">
              AGENTIC <span className="text-blue-500">SYSTEMS</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Replacing busy work with intelligent agents. We build the automation infrastructure that powers the next generation of business.
            </p>
          </div>

          {/* Links - Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {/* Inside your Footer links... */}
              <li>
                <button
                  onClick={() => document.getElementById('tour-trigger')?.click()}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Start Interactive Tour
                </button>
              </li>
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/ai-services" className="hover:text-blue-400 transition-colors">AI Services</a></li>
              <li><a href="/portfolio" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Links - AI Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/ai-services" className="hover:text-blue-400 transition-colors">AI Voice Agents</a></li>
              <li><a href="/ai-services" className="hover:text-blue-400 transition-colors">N8N Workflows</a></li>
              <li><a href="/ai-services" className="hover:text-blue-400 transition-colors">Autonomous Departments</a></li>
              <li><a href="/ai-services" className="hover:text-blue-400 transition-colors">Custom App Dev</a></li>
            </ul>
          </div>

          {/* Contact - CLEANED UP (No Config Button) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-500" /> 918-409-2361</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-blue-500" /> hello@ai-hub.agency</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-blue-500" /> Dallas, Texas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex justify-between items-center text-xs">
          <p>&copy; 2025 Agentic Systems.</p>
          <div className="flex gap-4">
            <Linkedin className="w-4 h-4 hover:text-white cursor-pointer" />
            <Twitter className="w-4 h-4 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;