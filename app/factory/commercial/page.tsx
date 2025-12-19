// src/app/factory/commercial/page.tsx
"use client";

import React from 'react';
import { Shield, Users, Calendar, TrendingUp, Check, X, ArrowRight, Lock, Cpu, Factory } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function CommercialFactoryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Blueprint Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Factory className="w-3 h-3" />
            <span>Commercial Intelligence Architecture</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
            Stop Renting Intelligence. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Start Manufacturing It.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Build your own Autonomous AI Hub—In-House, On-Prem, or Private Cloud. <br/>
            <span className="text-white font-semibold">100% Owned. 100% Private.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              Start Your Factory Blueprint
            </button>
            <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-medium transition-all flex items-center gap-2">
              Read the Whitepaper <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-500 font-mono">SECURE • AIR-GAPPED CAPABLE • YOUR INFRASTRUCTURE</p>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Your Factory Output: Unlimited Capacity</h2>
            <p className="text-slate-400">Your AI Factory doesn't produce widgets. It produces scalable, intelligent labor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CapabilityCard 
              icon={<Cpu className="w-8 h-8 text-blue-400" />}
              title="Custom Agents"
              desc="Task-specific bots trained on your exact SOPs. They don't just know how to do the job; they know how YOU do the job."
            />
            <CapabilityCard 
              icon={<Users className="w-8 h-8 text-purple-400" />}
              title="Full Digital Teams"
              desc="A complete Marketing Dept where the Writer talks to SEO and Graphics agents automatically to produce finished campaigns."
            />
            <CapabilityCard 
              icon={<Calendar className="w-8 h-8 text-green-400" />}
              title="Executive Assistants"
              desc="A 'Chief of Staff' that has deep access to your calendar and email but never leaks a single byte of data to Big Tech."
            />
            <CapabilityCard 
              icon={<TrendingUp className="w-8 h-8 text-orange-400" />}
              title="Autonomous Sales"
              desc="24/7 SDRs that nurture leads, handle objections, book calls, and update your CRM without ever sleeping."
            />
          </div>
        </div>
      </section>

      {/* 3. PRIVACY CORE */}
      <section className="py-24 px-6 bg-blue-950/20 border-y border-blue-900/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mx-auto w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <Lock className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Data is Your IP. <br/>Don't Train Your Competitors.</h2>
          <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
            When you use public models (like standard ChatGPT), you are essentially renting intelligence from a landlord who reads your mail.
            <br/><br/>
            <span className="text-white font-bold">The AI Factory builds 'Sovereign Models.'</span>
            <br/>
            These are sandboxed, isolated environments. Your trade secrets, financial data, and customer lists stay strictly within your digital walls.
          </p>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">The Honest Assessment</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-6 px-4 text-slate-500 font-medium uppercase tracking-wider text-sm">Feature</th>
                  <th className="py-6 px-4 text-slate-400 font-bold text-lg w-1/3">Public AI (The &quot;Easy&quot; Way)</th>
                  <th className="py-6 px-4 text-blue-400 font-bold text-lg bg-blue-950/30 w-1/3 border-t-2 border-blue-500">The AI Factory (Your Way)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <ComparisonRow 
                  feature="Privacy & IP" 
                  bad="Low Risks. Data may train public models."
                  good="Absolute Security. Air-gapped or Private Cloud."
                />
                <ComparisonRow 
                  feature="Knowledge Base" 
                  bad="Generic. Knows the internet, not you."
                  good="Specialized. Trained on your history."
                />
                <ComparisonRow 
                  feature="Control" 
                  bad="None. Model changes anytime."
                  good="Total Sovereignty. You own the weights."
                />
                <ComparisonRow 
                  feature="Cost Structure" 
                  bad="OpEx (Rent). Forever subscription."
                  good="CapEx (Asset). One-time investment."
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">The Industrial Revolution of Intelligence is Here.</h2>
        <p className="text-xl text-slate-400 mb-10">Will you be a tenant or an owner?</p>
        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-blue-600/20 hover:scale-105">
          Schedule a Factory Tour
        </button>
      </section>

      <Footer />
    </main>
  );
}

// Sub-components
function CapabilityCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
      <div className="mb-6 bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ComparisonRow({ feature, bad, good }: { feature: string, bad: string, good: string }) {
  return (
    <tr className="hover:bg-slate-900/30 transition-colors">
      <td className="py-6 px-4 text-slate-300 font-medium">{feature}</td>
      <td className="py-6 px-4 text-slate-500 flex items-start gap-2">
        <X className="w-5 h-5 text-red-900/50 shrink-0 mt-0.5" />
        {bad}
      </td>
      <td className="py-6 px-4 text-white bg-blue-950/10 flex items-start gap-2 font-medium">
        <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        {good}
      </td>
    </tr>
  );
}