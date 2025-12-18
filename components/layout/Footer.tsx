"use client"; // Needs client for localStorage

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Settings, Key, Save } from 'lucide-react';

const Footer = () => {
  const [showConfig, setShowConfig] = useState(false);
  const [apiKey, setApiKey] = useState('');

  // Load Key on Mount
  useEffect(() => {
    const stored = localStorage.getItem('openai_key');
    if (stored) setApiKey(stored);
  }, []);

  const saveKey = () => {
    localStorage.setItem('openai_key', apiKey);
    setShowConfig(false);
    alert("System Intelligence Online. API Key Saved.");
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400">
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
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links - Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="hover:text-blue-400 transition-colors">AI Voice Agents</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">N8N Workflows</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Autonomous Departments</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Custom App Dev</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-500"/> 918-409-2361</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-blue-500"/> hello@ai-hub.agency</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-blue-500"/> Dallas, Texas</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex justify-between items-center text-xs relative">
          <p>&copy; {new Date().getFullYear()} Agentic Systems.</p>
          
          <div className="flex gap-4 items-center">
            <button 
              onClick={() => setShowConfig(!showConfig)}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Settings className="w-3 h-3" /> Config
            </button>
            <a href="#" className="hover:text-white"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
          </div>

          {/* ENGINE ROOM MODAL */}
          {showConfig && (
            <div className="absolute bottom-12 right-0 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-2xl w-80 animate-in slide-in-from-bottom-2 z-50">
              <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                <Key className="w-4 h-4 text-blue-500" /> Neural Engine Config
              </h5>
              <p className="text-[10px] text-slate-500 mb-3">
                Enter your OpenAI API Key to enable live intelligence. 
                Stored locally in your browser.
              </p>
              <input 
                type="password" 
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..." 
                className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white text-xs mb-3 focus:border-blue-500 outline-none"
              />
              <button 
                onClick={saveKey}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded text-xs font-bold flex items-center justify-center gap-2"
              >
                <Save className="w-3 h-3" /> Save Key
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;