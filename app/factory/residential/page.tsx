"use client";

import React from 'react';
import { Home, Cpu, Shield, Zap, MessageSquare, Calendar, Brain } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ResidentialFactoryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      <Navbar />

      {/* 1. HERO SECTION (REBRANDED) */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden flex flex-col items-center text-center">

        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e91a_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e91a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
            <Home className="w-3 h-3" />
            <span>Residential Architecture</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Customized Home AI System
          </h1>

          {/* J.A.R.V.I.S. with Glow Effect */}
          <h2 className="text-5xl md:text-8xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] font-mono mb-8">
            A.T.L.A.S.
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed border-t border-slate-800 pt-8">
            <span className="text-cyan-400 font-bold">Automated Technology & Logistics Administration System.</span><br />
            Your smart, private digital assistant designed to manage daily life.
          </p>
        </div>
      </section>

      {/* 2. EDUCATIONAL CONTENT SECTION */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Glass Card Container */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">

            {/* Intro */}
            <div className="mb-12 border-l-4 border-cyan-500 pl-6">
              <p className="text-lg text-slate-300 italic leading-relaxed">
                "A personal A.T.L.A.S. (inspired by Iron Man’s AI assistant) is essentially designed to act as your smart, private digital assistant. Here’s what it means in practical terms:"
              </p>
            </div>

            {/* Section A: Definition */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
                <Brain className="w-6 h-6 text-cyan-400" />
                Definition
              </h3>
              <p className="text-slate-400 leading-relaxed">
                A personal A.T.L.A.S. is an AI tailored for individual or household use that integrates with your devices, smart home systems, and apps to manage daily life. Unlike generic bots, it knows the context of <em>your</em> home.
              </p>
            </div>

            {/* Section B: Capabilities */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                <Zap className="w-6 h-6 text-yellow-400" />
                Capabilities
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                  <strong className="text-white block mb-1">📅 Personal schedule management</strong>
                  <span className="text-slate-400 text-sm">Reminds you of events, appointments, and deadlines.</span>
                </li>
                <li className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                  <strong className="text-white block mb-1">🏠 Home automation control</strong>
                  <span className="text-slate-400 text-sm">Adjusts lights, climate, security, and appliances.</span>
                </li>
                <li className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                  <strong className="text-white block mb-1">📊 Information hub</strong>
                  <span className="text-slate-400 text-sm">Finds and summarizes news, weather, or answers questions.</span>
                </li>
                <li className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                  <strong className="text-white block mb-1">📧 Communication assistant</strong>
                  <span className="text-slate-400 text-sm">Sends/reads messages, manages calls, and helps with emails.</span>
                </li>
                <li className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors md:col-span-2">
                  <strong className="text-white block mb-1">🤖 Task automation</strong>
                  <span className="text-slate-400 text-sm">Can integrate with apps and devices to perform routines automatically.</span>
                </li>
              </ul>
            </div>

            {/* Section C: Key Features */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                <Shield className="w-6 h-6 text-green-400" />
                Key Features
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-green-500 rounded-full h-auto"></div>
                  <p className="text-slate-300"><strong className="text-white">Privacy First:</strong> Works locally or on private servers for data privacy.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 bg-green-500 rounded-full h-auto"></div>
                  <p className="text-slate-300"><strong className="text-white">Multi-Modal:</strong> Can be voice-activated or mobile/desktop controlled.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 bg-green-500 rounded-full h-auto"></div>
                  <p className="text-slate-300"><strong className="text-white">Adaptive:</strong> Learns preferences over time to give personalized suggestions.</p>
                </div>
              </div>
            </div>

            {/* Section D: Difference */}
            <div className="mb-12 bg-blue-900/10 p-6 rounded-2xl border border-blue-500/20">
              <h3 className="flex items-center gap-3 text-xl font-bold text-blue-300 mb-4">
                <Cpu className="w-5 h-5" />
                Difference from Commercial AI
              </h3>
              <p className="text-slate-300 mb-4">
                Residential/personal A.T.L.A.S. focuses on <span className="text-white font-semibold">you, your family, and your home</span>.
              </p>
              <p className="text-slate-300">
                It runs in a <span className="text-white font-semibold">privacy-first mode</span> — unlike shared or cloud-only business AI tools which often harvest data for training.
              </p>
            </div>

            {/* Closing CTA */}
            <div className="text-center pt-8 border-t border-slate-800">
              <p className="text-lg text-slate-300 mb-6">
                If you’d like, I can outline exactly what tech and software you’d need to start building your own personal A.T.L.A.S. at home.
              </p>
              <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-cyan-900/20 flex items-center gap-2 mx-auto">
                <MessageSquare className="w-5 h-5" />
                Start My Build
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}