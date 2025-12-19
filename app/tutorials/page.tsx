"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { BookOpen, MonitorPlay, ArrowRight, GraduationCap } from 'lucide-react';

export default function TutorialsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />

      <section className="pt-40 pb-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          <GraduationCap className="w-3 h-3" />
          <span>Knowledge Base</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          AI Hub Learning Center
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Everything you need to master your new digital workforce. <br />
          Choose your learning style below.
        </p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: The Textbook */}
          <div className="bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-10 transition-all hover:-translate-y-1 group">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">User Guide & Documentation</h2>
            <p className="text-slate-400 mb-8 leading-relaxed h-20">
              Master the platform with our deep-dive written manual. Includes step-by-step setup instructions and prompt engineering tips.
            </p>
            <Link href="/user-guide" className="inline-flex items-center gap-2 text-white font-bold bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl transition-colors">
              Read Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: The Classroom */}
          <div className="bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 rounded-3xl p-10 transition-all hover:-translate-y-1 group">
            <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform">
              <MonitorPlay className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Video Walkthrough</h2>
            <p className="text-slate-400 mb-8 leading-relaxed h-20">
              Watch a visual tour of the agents in action. See exactly how to configure your factory and deploy voice ops in real-time.
            </p>
            <Link href="/video-tour" className="inline-flex items-center gap-2 text-white font-bold bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl transition-colors">
              Watch Video <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}