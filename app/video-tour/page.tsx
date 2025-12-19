"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Play, ArrowRight, FileText, ChevronDown, ChevronUp, MonitorPlay } from 'lucide-react';

export default function VideoTourPage() {
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-slate-200 font-sans selection:bg-purple-500/30">
      <Navbar />

      {/* 1. CINEMATIC HERO */}
      <section className="pt-32 pb-12 px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
          <MonitorPlay className="w-3 h-3" />
          <span>Platform Walkthrough</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
          See the AI Factory in Action
        </h1>

        {/* 2. VIDEO CONTAINER */}
        <div className="w-full max-w-5xl aspect-video bg-slate-900 rounded-2xl shadow-2xl shadow-purple-900/20 border border-slate-800 relative overflow-hidden group cursor-pointer mb-12">
          {/* Placeholder Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/50 group-hover:bg-slate-950/40 transition-all">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-current ml-1" />
            </div>
            <p className="text-white font-bold mt-4 tracking-wide uppercase text-sm">Watch Demo (2 Min)</p>
          </div>
          {/* In a real app, <iframe src="..."> goes here */}
        </div>

        {/* 3. NAVIGATION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 mb-20">
          <Link href="/factory" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
            Build Your Agent Now <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/user-guide" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-medium transition-all flex items-center gap-2">
            <FileText className="w-5 h-5" /> Read the Guide
          </Link>
        </div>

        {/* 4. TRANSCRIPT ACCORDION */}
        <div className="w-full max-w-3xl mx-auto border-t border-slate-800 pt-10">
          <button 
            onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
            className="flex items-center justify-between w-full text-left text-slate-400 hover:text-white transition-colors py-4"
          >
            <span className="font-bold text-lg">Video Transcript</span>
            {isTranscriptOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {isTranscriptOpen && (
            <div className="bg-slate-900/50 rounded-xl p-8 mt-4 space-y-6 text-slate-300 leading-relaxed border border-slate-800 animate-in slide-in-from-top-2 duration-200">
              <div>
                <strong className="text-purple-400 block text-xs uppercase tracking-widest mb-1">[0:00-0:15] Intro</strong>
                <p>Welcome to AI Hub. You aren't just looking at a website; you are looking at your new workforce. Let's tour the facility.</p>
              </div>
              <div>
                <strong className="text-purple-400 block text-xs uppercase tracking-widest mb-1">[0:15-0:45] The Specialists</strong>
                <p>On the home page, you'll meet our specialists. These aren't chatbots; they are job roles. Watch as I ask the HR Agent about compliance...</p>
              </div>
              <div>
                <strong className="text-purple-400 block text-xs uppercase tracking-widest mb-1">[0:45-1:30] The AI Factory</strong>
                <p>Here is where the magic happens. The AI Factory. I upload a simple PDF price list... click Initialize... and boom. I just built a Sales Expert trained on <em>my</em> prices in 30 seconds.</p>
              </div>
              <div>
                <strong className="text-purple-400 block text-xs uppercase tracking-widest mb-1">[1:30-2:00] The Voice Ops</strong>
                <p>Need hands-free help? Our Voice Ops run on the edge. Just speak, and they execute.</p>
              </div>
              <div>
                <strong className="text-purple-400 block text-xs uppercase tracking-widest mb-1">[2:00] Outro</strong>
                <p>The future isn't coming; it's here. Build your first agent today.</p>
              </div>
            </div>
          )}
        </div>

      </section>

      <Footer />
    </main>
  );
}