import React from 'react';
import { Bot, Shield, Cpu, UploadCloud, Play, Settings, Database, ArrowRight, Lock, Network, GraduationCap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Factory() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />

      <div className="relative isolate pt-14 pb-12 px-6 text-center">
        {/* COMING SOON BANNER */}
        <div className="absolute top-0 w-full left-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 h-10 flex items-center justify-center text-xs font-bold tracking-widest uppercase border-b border-white/10">
          Coming Soon • Join the Waitlist for Early Access
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-12">Sovereign AI. <br/> Your Infrastructure.</h1>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">Stop renting. Start owning your intelligence.</p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <div className="relative w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Enter work email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              Request Early Access
            </button>
        </div>
      </div>

      {/* VISUAL FLOWCHART */}
      <section className="py-20 px-6 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-16">The Factory Pipeline</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 -z-10"></div>
            
            <FlowStep 
              icon={<UploadCloud className="w-8 h-8 text-blue-400" />}
              step="01" title="Ingest" desc="Upload Raw Data (PDF/CSV/Voice)"
            />
            <FlowStep 
              icon={<Database className="w-8 h-8 text-purple-400" />}
              step="02" title="Refine" desc="Data Cleaning & Vectorization"
            />
            <FlowStep 
              icon={<GraduationCap className="w-8 h-8 text-orange-400" />}
              step="03" title="Train" desc="Private Model Learning"
            />
             <FlowStep 
              icon={<Play className="w-8 h-8 text-green-400" />}
              step="04" title="Deploy" desc="Launch to Slack/Teams/Web"
            />
          </div>
        </div>
      </section>

      {/* DEEP CONTENT BLOCKS (The 4 Pillars) */}
      <section className="py-24 px-6 max-w-5xl mx-auto space-y-24">
        
        <InfoBlock 
          title="What is the AI Factory?"
          text="It is a no-code construction yard for intelligence. Unlike generic tools like ChatGPT, the Factory builds agents that live inside your infrastructure, strictly adhering to your rules and data. You aren't chatting with a generic bot; you are building a specific employee."
        />

        <InfoBlock 
          title="Privacy & Sovereignty"
          text="In the Factory, you are the owner. We use ephemeral processing containers. Once your agent is built, the training data is flushed. Your 'Secret Sauce' never trains a public model. We believe your data is your competitive advantage, not our product."
        />

        <InfoBlock 
          title="Why Use It?"
          text="Off-the-shelf AI hallucinates because it doesn't know you. Factory Agents are grounded in your reality—your price lists, your tone of voice, your legal constraints. They don't guess; they reference the source of truth you provide."
        />

        <InfoBlock 
          title="The Future: Swarm Intelligence"
          text="We are moving toward 'Swarm Intelligence.' Soon, you won't just build one agent; you will build a team of 10 that talk to each other to run entire projects while you sleep. The Architect agent writes the copy, the Legal agent reviews it, and the Social agent posts it."
        />

      </section>

      {/* EXAMPLES SECTION (Expanded) */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-10 text-center">Factory Output Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExampleCard 
            role="Small Business" 
            title="Pizza Shop Order Taker" 
            desc="Connects to Twilio. Answers phones, takes orders, and inputs them directly into POS." 
          />
          <ExampleCard 
            role="Enterprise" 
            title="Internal Knowledge Base" 
            desc="Trained on 10,000 confluence pages. Employees ask 'How do I file expenses?' and get instant answers." 
          />
          {/* NEW EXAMPLES */}
          <ExampleCard 
            role="Supply Chain" 
            title="Logistics Coordinator" 
            desc="Connects to inventory CSV. Predicts stock shortages and auto-drafts supplier emails." 
          />
          <ExampleCard 
            role="HR Tech" 
            title="Onboarding Specialist" 
            desc="Ingests 50-page Employee Handbook. Texts new hires daily with bite-sized training modules." 
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Sub-components
function FlowStep({ icon, step, title, desc }: any) {
  return (
    <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative">
      <div className="text-xs font-bold text-slate-500 mb-4 tracking-widest">STEP {step}</div>
      <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/10">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  )
}

function InfoBlock({ title, text }: any) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="md:w-1/3">
        <h3 className="text-2xl font-bold text-blue-200 border-l-4 border-blue-600 pl-4">{title}</h3>
      </div>
      <div className="md:w-2/3">
        <p className="text-lg text-slate-300 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function ExampleCard({ role, title, desc }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
      <div className="text-xs font-bold text-blue-500 uppercase mb-2">{role}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </div>
  )
}