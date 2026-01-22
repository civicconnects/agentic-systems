"use client";

import React from 'react';
import { Home, Factory, ArrowRight, Bot, Cpu } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function FactoryGatewayPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 flex flex-col">
      <Navbar />

      <section className="flex-1 flex flex-col justify-center items-center px-6 pt-32 pb-20 relative overflow-hidden">

        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Cpu className="w-3 h-3" />
            <span>Select Architecture</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Choose Your <span className="text-blue-500">Intelligence.</span>
          </h1>
          <p className="text-xl text-slate-400">
            We build sovereign AI systems for homes and enterprises. <br className="hidden md:block" />
            Select your deployment environment below.
          </p>
        </div>

        {/* THE SPLIT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full relative z-10">

          {/* OPTION 1: RESIDENTIAL */}
          <Link href="/factory/residential" className="group relative bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-10 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20 block text-left">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-800 group-hover:border-blue-500 mb-8 transition-colors">
              <Home className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Residential AI</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              For individuals and smart homes. Build a personal A.T.L.A.S. that manages your family schedule, home automation, and personal data privately.
            </p>
            <div className="flex items-center text-blue-400 font-bold group-hover:gap-2 transition-all">
              Enter Residential Zone <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </Link>

          {/* OPTION 2: COMMERCIAL */}
          <Link href="/factory/commercial" className="group relative bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-10 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-900/20 block text-left">
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-800 group-hover:border-indigo-500 mb-8 transition-colors">
              <Factory className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Commercial AI</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              For businesses and enterprises. Deploy autonomous departments, secure internal models, and 24/7 digital workforces on private infrastructure.
            </p>
            <div className="flex items-center text-indigo-400 font-bold group-hover:gap-2 transition-all">
              Enter Commercial Zone <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </Link>

        </div>

      </section>

      <Footer />
    </main>
  );
}