import React from 'react';
import { Bot, Shield, Cpu, ArrowRight, UploadCloud, Play, Settings } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Factory() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Existing Hero... (Keep your existing hero code here) */}
      <div className="relative isolate pt-14 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Sovereign AI. <br/> Your Infrastructure.</h1>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">Stop renting. Start owning your intelligence.</p>
        {/* ... email capture form ... */}
      </div>

      {/* NEW: HOW IT WORKS SECTION */}
      <section className="py-20 px-6 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How The Factory Works</h2>
            <p className="text-slate-400">Deploy a private agent in 3 steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step 
              num="01" 
              icon={<Settings className="w-8 h-8 text-blue-400" />} 
              title="Blueprint" 
              desc="Define the job role. Is it Support? Legal? HR? We configure the guardrails and personality." 
            />
            <Step 
              num="02" 
              icon={<UploadCloud className="w-8 h-8 text-purple-400" />} 
              title="Train" 
              desc="Upload your raw data (PDFs, SQL, CSVs). The agent indexes your knowledge base securely." 
            />
            <Step 
              num="03" 
              icon={<Play className="w-8 h-8 text-green-400" />} 
              title="Deploy" 
              desc="Launch the agent. It lives on your private URL or integrates into Slack/Teams." 
            />
          </div>
        </div>
      </section>

      {/* EXAMPLES SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Factory Output Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="text-xs font-bold text-blue-500 uppercase mb-2">Small Business</div>
            <h3 className="text-xl font-bold mb-4">The Pizza Shop Order Taker</h3>
            <p className="text-slate-400">An agent connected to Twilio that answers phones, takes orders, and inputs them directly into the POS system.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="text-xs font-bold text-purple-500 uppercase mb-2">Enterprise</div>
            <h3 className="text-xl font-bold mb-4">The Internal Knowledge Base</h3>
            <p className="text-slate-400">An agent trained on 10,000 internal confluence pages. Employees ask "How do I file expenses?" and get an instant answer.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Step({ num, icon, title, desc }: any) {
  return (
    <div className="relative p-8 bg-slate-950 border border-slate-800 rounded-2xl">
      <div className="absolute -top-4 -left-4 text-6xl font-black text-slate-800/50">{num}</div>
      <div className="relative z-10">
        <div className="mb-6 bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center">{icon}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}