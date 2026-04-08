import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, BarChart3, TrendingDown, Loader2 } from "lucide-react";
import type { ContactInfo } from "@/hooks/useAudit";

interface LandingPageProps {
  contact: ContactInfo;
  onUpdateContact: (info: Partial<ContactInfo>) => void;
  onStart: () => void;
}

export default function LandingPage({ contact, onUpdateContact, onStart }: LandingPageProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateAndStart = () => {
    const newErrors: Record<string, string> = {};
    if (!contact.name) newErrors.name = "Name is required";
    if (!contact.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(contact.email)) newErrors.email = "Invalid email";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onStart();
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-950">
      <main className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-10 lg:pt-16">
          
          {/* Left Column: Hero Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              New: 2026 Real Estate Conversion Benchmarks
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Stop Losing <span className="text-blue-500">Revenue</span> to Slow Follow-Up.
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              Most agents lose 40-60% of their leads due to "lead leakage." Our AI-powered audit identifies exactly where your revenue is escaping and gives you a custom roadmap to fix it.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 border border-slate-800">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Personalized Score</h3>
                  <p className="text-xs text-slate-400 mt-1">Get an instant 1-100 grade on your current lead systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 border border-slate-800">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Revenue Loss Map</h3>
                  <p className="text-xs text-slate-400 mt-1">Calculate exactly how many dollars are slipping through the cracks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:pl-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <div className="bg-slate-900 border border-slate-800 shadow-2xl rounded-3xl p-8 sm:p-10 relative overflow-hidden group">
              {/* Subtle gradient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-0 transition-opacity opacity-50 group-hover:opacity-100"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2 text-white">Get Your Audit Report</h2>
                <p className="text-slate-400 text-sm mb-8">Enter your details to start the 2-minute assessment.</p>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Full Name</label>
                    <input 
                      type="text"
                      placeholder="e.g. John Smith" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white"
                      value={contact.name}
                      onChange={(e) => {
                        onUpdateContact({ name: e.target.value });
                        if (errors.name) setErrors(prev => { const n = {...prev}; delete n.name; return n; });
                      }}
                    />
                    {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="john@brokerage.com" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white"
                      value={contact.email}
                      onChange={(e) => {
                        onUpdateContact({ email: e.target.value });
                        if (errors.email) setErrors(prev => { const n = {...prev}; delete n.email; return n; });
                      }}
                    />
                    {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Brokerage (Optional)</label>
                    <input 
                      type="text"
                      placeholder="e.g. Keller Williams" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white"
                      value={contact.brokerage}
                      onChange={(e) => onUpdateContact({ brokerage: e.target.value })}
                    />
                  </div>

                  <button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    onClick={validateAndStart}
                  >
                    Start My Free Audit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-center text-slate-500 px-4">
                    By starting the audit, you agree to receive your results via email. We never sell your data and you can opt-out at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof / Logos Section */}
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-slate-800 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-8">Used by top producing agents from</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale contrast-125">
            {['RE/MAX', 'COMPASS', 'eXp Realty', 'Keller Williams', 'Coldwell Banker'].map((brand) => (
              <span key={brand} className="text-xl font-bold tracking-tighter text-white">{brand}</span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
