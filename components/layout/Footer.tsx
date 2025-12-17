import React from 'react';
import { MapPin, PhoneCall, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="font-bold text-xl tracking-tighter text-white mb-4">
            AGENTIC <span className="text-blue-500">SYSTEMS</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            We build autonomous AI departments that scale your business. 
            Replacing busy work with intelligent agents since 2025.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
              <MapPin className="w-4 h-4" /> Dallas, TX
            </li>
            <li className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> 918-409-2361
            </li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">
              <a href="mailto:hello@ai-hub.agency">hello@ai-hub.agency</a>
            </li>
          </ul>
        </div>

        {/* Legal / Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Agentic Systems. <br />All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}