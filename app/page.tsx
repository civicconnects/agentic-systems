import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-bold text-xl tracking-tighter text-white mb-4">
              AGENTIC <span className="text-blue-500">SYSTEMS</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Replacing busy work with intelligent agents. We build the automation infrastructure that powers the next generation of business.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">AI Voice Agents</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">N8N Workflows</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Autonomous Departments</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Custom App Dev</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Dallas, Texas<br/>Serving Global Clients</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>918-409-2361</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>hello@ai-hub.agency</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Agentic Systems. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;