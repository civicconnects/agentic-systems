import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Video, Users, ArrowRight, CheckCircle, Zap, HeartHandshake, PhoneCall, TrendingUp, Settings, Database, Upload, Rocket } from 'lucide-react';

export default function AIServices() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800 text-blue-400 text-xs font-semibold uppercase tracking-wide mb-6">
          <Zap className="w-3 h-3" /> Enterprise Solutions
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">AI Service Catalog</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          We don't sell generic "tools." We provision specific digital employees tailored to your operational needs.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
        
        {/* Category 1: Communication */}
        <ServiceCategory 
          title="Communication Managers"
          icon={<Mail className="w-8 h-8 text-blue-400" />}
          desc="Agents that handle high-volume inbound and outbound messaging."
          roles={[
            { title: "Inbox Zero Agent", detail: "Drafts replies, tags priority emails, archives spam.", saved: "15 hrs/week" },
            { title: "Slack Summarizer", detail: "Digests channel noise into daily executive briefs.", saved: "5 hrs/week" },
            { title: "Outreach Bot", detail: "Scrapes leads and sends personalized cold DMs.", saved: "20 hrs/week" }
          ]}
        />

        {/* Category 2: Content */}
        <ServiceCategory 
          title="Content Engines"
          icon={<Video className="w-8 h-8 text-purple-400" />}
          desc="Autonomous creators that maintain your brand presence."
          roles={[
            { title: "Blog Architect", detail: "Researches SEO keywords and writes 2,000-word articles.", saved: "10 hrs/post" },
            { title: "Social Scheduler", detail: "Repurposes long-form content into Tweets/LinkedIn posts.", saved: "8 hrs/week" },
            { title: "Script Generator", detail: "Turns blog posts into YouTube/TikTok scripts instantly.", saved: "4 hrs/video" }
          ]}
        />

        {/* Category 3: Department Builders (EXPANDED) */}
        <ServiceCategory 
          title="Department Builders"
          icon={<Users className="w-8 h-8 text-green-400" />}
          desc="Full-stack autonomous teams for complex operations."
          roles={[
            // Existing
            { title: "Compliance Team", detail: "Monitors all internal comms for policy violations.", saved: "Full Headcount" },
            { title: "Marketing Swarm", detail: "5 agents working in unison to plan and execute campaigns.", saved: "3 Headcounts" },
            // NEW High-Performance Agents
            { 
              title: "The Orchestrator", 
              detail: "Automates employee lifecycle: onboarding, policy Q&A, and conflict logging.", 
              saved: "60% HR Admin",
              icon: <Users className="w-4 h-4 text-emerald-400" />
            },
            { 
              title: "The Advocate", 
              detail: "Empathetic CS agent resolving 85% of tickets instantly 24/7.", 
              saved: "25% Retention Boost",
              icon: <HeartHandshake className="w-4 h-4 text-pink-400" />
            },
            { 
              title: "The Dispatcher", 
              detail: "Voice-integrated routing for thousands of simultaneous calls.", 
              saved: "10x Scale",
              icon: <PhoneCall className="w-4 h-4 text-cyan-400" />
            },
            { 
              title: "The Closer", 
              detail: "Rapid lead qualification and instant follow-up sequence.", 
              saved: "2x Conversion",
              icon: <TrendingUp className="w-4 h-4 text-orange-400" />
            }
          ]}
        />

      </div>

      {/* NEW: CUSTOMIZE AGENTS SECTION */}
      <section className="py-24 px-6 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest mb-6">
            <Settings className="w-3 h-3" /> The AI Forge
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Customize Agents</h2>
          <h3 className="text-xl text-slate-400 font-light mb-8">Build your own custom agents at your fingertips.</h3>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Can't find exactly what you need? Our AI Forge allows you to build a hyper-specific agent tailored to your unique internal data and proprietary workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left max-w-3xl mx-auto">
            <div className="bg-slate-950/50 border border-slate-800 p-6 rounded-xl flex flex-col items-center text-center hover:border-blue-500/30 transition-colors">
              <div className="bg-blue-900/20 p-3 rounded-lg mb-4 text-blue-400"><Upload className="w-6 h-6" /></div>
              <div className="font-bold text-white mb-2">1. Upload Data</div>
              <div className="text-sm text-slate-500">Train on your PDFs & CSVs.</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl flex flex-col items-center text-center hover:border-purple-500/30 transition-colors">
              <div className="bg-purple-900/20 p-3 rounded-lg mb-4 text-purple-400"><Database className="w-6 h-6" /></div>
              <div className="font-bold text-white mb-2">2. Define Role</div>
              <div className="text-sm text-slate-500">Set guardrails & tone.</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl flex flex-col items-center text-center hover:border-green-500/30 transition-colors">
              <div className="bg-green-900/20 p-3 rounded-lg mb-4 text-green-400"><Rocket className="w-6 h-6" /></div>
              <div className="font-bold text-white mb-2">3. Deploy</div>
              <div className="text-sm text-slate-500">Launch to Slack or Web.</div>
            </div>
          </div>

          <a 
            href="/factory" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-105"
          >
            Start Building Your Agent <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceCategory({ title, icon, desc, roles }: any) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-blue-500/20 transition-all backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">{icon}</div>
        <div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <p className="text-slate-400 mt-1">{desc}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((r: any, i: number) => (
          <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:bg-slate-900 transition-all group hover:-translate-y-1 duration-300">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                {r.icon && <span>{r.icon}</span>}
                {r.title}
              </h3>
              {!r.icon && <CheckCircle className="w-4 h-4 text-slate-600 group-hover:text-blue-500" />}
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed min-h-[48px]">{r.detail}</p>
            <div className="flex items-center gap-2 text-green-400 text-xs font-mono font-bold uppercase border-t border-slate-800 pt-4">
              <ArrowRight className="w-3 h-3" /> Results: {r.saved}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}