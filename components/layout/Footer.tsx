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
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/ai-services" className="hover:text-blue-400 transition-colors">AI Services</a></li>
              <li><a href="/portfolio" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links - Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/ai-services" className="hover:text-blue-400 transition-colors">AI Voice Agents</a></li>
              <li><a href="/ai-services" className="hover:text-blue-400 transition-colors">N8N Workflows</a></li>
              <li><a href="/ai-services" className="hover:text-blue-400 transition-colors">Autonomous Departments</a></li>
              <li><a href="/ai-services" className="hover:text-blue-400 transition-colors">Custom App Dev</a></li>
            </ul>
          </div>

          {/* Contact & CONFIG */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-500"/> 918-409-2361</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-blue-500"/> hello@ai-hub.agency</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-blue-500"/> Dallas, Texas</li>
              
              {/* MOVED CONFIG BUTTON HERE FOR VISIBILITY */}
              <li className="pt-4 mt-4 border-t border-slate-800">
                <button 
                  onClick={() => setShowConfig(!showConfig)}
                  className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-400 transition-colors"
                >
                  <Settings className="w-3 h-3" /> Configure Neural Engine
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Agentic Systems.</p>
          <div className="flex gap-4">
            <Linkedin className="w-4 h-4 hover:text-white cursor-pointer" />
            <Twitter className="w-4 h-4 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* ENGINE ROOM MODAL (Floating Center) */}
        {showConfig && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">
            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-2xl w-96 animate-in zoom-in-95">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-white font-bold flex items-center gap-2">
                  <Key className="w-5 h-5 text-blue-500" /> Neural Engine API
                </h5>
                <button onClick={() => setShowConfig(false)} className="text-slate-500 hover:text-white"><Settings className="w-4 h-4"/></button>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Paste your **Gemini 1.5 Flash** or **OpenAI** API Key here. 
                This key is stored locally in your browser and is never sent to our servers.
              </p>
              <input 
                type="password" 
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Paste API Key here..." 
                className="w-full bg-black border border-slate-700 rounded-lg px-4 py-3 text-white text-sm mb-4 focus:border-blue-500 outline-none font-mono"
              />
              <button 
                onClick={saveKey}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" /> Activate Intelligence
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;