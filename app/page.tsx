"use client";

import React, { useState } from 'react';
import { Bot, Shield, Users, PenTool, BarChart, MessageSquare, Mic, Check, ArrowRight, Sparkles, Zap, Brain, Globe, Layers, AlertTriangle } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ChatModal from '@/components/features/ChatModal'; 

export default function Home() {
  const [activeAgent, setActiveAgent] = useState<any>(null);

  const agents = [
    { id: 1, name: "The Sentinel", role: "AI HR Director", icon: <Shield className="w-6 h-6 text-white" />, pain: "Compliance risks.", roi: "70% less admin.", desc: "Handles onboarding & policy Q&A.", color: "bg-emerald-600", greeting: "I am The Sentinel. Ready for onboarding." },
    { id: 2, name: "The Architect", role: "Editor-in-Chief", icon: <PenTool className="w-6 h-6 text-white" />, pain: "Slow content.", roi: "10x output.", desc: "Researches & writes content on brand.", color: "bg-orange-600", greeting: "Ready to write. What is the topic?" },
    { id: 3, name: "Sales VP", role: "Lead Closer", icon: <BarChart className="w-6 h-6 text-white" />, pain: "Leads dying.", roi: "2x conversion.", desc: "Qualifies & books meetings 24/7.", color: "bg-blue-600", greeting: "Let's increase your revenue." },
    { id: 4, name: "Voice Ops", role: "Outbound Caller", icon: <Mic className="w-6 h-6 text-white" />, pain: "Manual dialing.", roi: "10k calls/day.", desc: "Hyper-realistic voice outreach.", color: "bg-purple-600", greeting: "Hi, this is Voice Ops." },
    { id: 5, name: "Front Desk", role: "Receptionist", icon: <MessageSquare className="w-6 h-6 text-white" />, pain: "Missed calls.", roi: "100% capture.", desc: "Routes calls & answers FAQs.", color: "bg-pink-600", greeting: "Thanks for calling." },
    { id: 6, name: "The Analyst", role: "Ops Manager", icon: <Users className="w-6 h-6 text-white" />, pain: "Data silos.", roi: "Instant clarity.", desc: "Predicts bottlenecks in workflows.", color: "bg-cyan-600", greeting: "Systems operational." }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-purple-400" /> The Era of the Agentic Enterprise
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8">
          Build Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
            Digital Workforce
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Don't just automate tasks. Deploy autonomous Departments. <br/>
          We architect AI that thinks, acts, and generates revenue.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a href="#ecosystem" className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Deploy Agents
          </a>
          <a href="/portfolio" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
            See Proof
          </a>
        </div>
      </section>

      {/* UPDATED: Educational Narrative (Fixed Layout & Expanded Content) */}
      <section className="py-24 px-6 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Column: The Content */}
          <div className="w-full md:w-1/2 space-y-8">
             <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-sm">
                <Zap className="w-4 h-4" /> The Competitive Edge
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Smart vs. Dumb <br/> <span className="text-blue-500">Automation</span>
             </h2>
             
             <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
               <p>
                 <strong>The Old Way is crumbling.</strong> Traditional automation (RPA) follows rigid, linear rules ("If X happens, do Y"). It is brittle. It breaks the moment a date format changes, an email subject line varies, or a customer asks a question in a new way. It requires constant maintenance, human oversight, and endless "bug fixing" hours.
               </p>
               <p>
                 <strong>Agentic Systems are antifragile.</strong> They behave like high-level employees. They possess "Contextual Awareness"—understanding the intent behind a request, not just the keywords. They can reason through multi-step problems, creating their own plans to achieve the goal you set. If one path is blocked, they find another.
               </p>
               <p>
                 <strong>The ROI is immediate.</strong> Businesses incorporating AI Departments today are seeing a <span className="text-white font-bold">40% reduction in operational overhead</span> within the first 90 days. This isn't just about speed; it's about decision-making at scale. While your competitors are manually routing tickets, your Agents are solving them.
               </p>
             </div>
             
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mt-8">
               <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                 <Globe className="w-5 h-5 text-purple-400" /> Client Interaction Model
               </h4>
               <p className="text-sm text-slate-400">
                 Our agents don't sleep. They don't forget. They handle your clients with white-glove service 24/7, escalating to humans only when high-level strategy is required.
               </p>
             </div>
          </div>

          {/* Right Column: The Visuals (Stacked perfectly) */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px]"></div>
             
             <div className="w-full max-w-sm space-y-6 relative z-10">
                {/* Old Way Card */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 opacity-60">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-slate-500 font-bold text-xs uppercase tracking-widest">The Old Way</div>
                    <Layers className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-800 rounded w-full"></div>
                    <div className="h-2 bg-slate-800 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-800 rounded w-1/2"></div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-red-400 text-xs font-mono bg-red-950/30 p-2 rounded border border-red-900/50">
                    <AlertTriangle className="w-3 h-3" /> ERROR: INPUT MISMATCH
                  </div>
                </div>

                {/* Agentic Way Card */}
                <div className="bg-slate-900 p-8 rounded-2xl border border-blue-500 shadow-2xl shadow-blue-900/20 transform md:scale-105 relative">
                  <div className="absolute -right-3 -top-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">NEW STANDARD</div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                      <Brain className="w-4 h-4"/> Agentic Way
                    </div>
                    <div className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-1 rounded">ACTIVE</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm">Analyzing intent...</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                      <span className="text-white text-sm">Formulating strategy...</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-white text-sm">Execution complete.</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* AGENT GRID */}
      <section id="ecosystem" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">The Ecosystem</h2>
              <p className="text-slate-400">Select an agent to initialize simulation.</p>
            </div>
            <a href="/solutions" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-bold text-sm">
              View Full Catalog <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div 
                key={agent.id} 
                onClick={() => setActiveAgent(agent)}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer hover:border-blue-500/50 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${agent.color}`}></div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`${agent.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {agent.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded">ONLINE</span>
                </div>
                <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                <p className="text-blue-400 text-xs font-bold uppercase mb-3">{agent.role}</p>
                <p className="text-sm text-slate-400 mb-4">{agent.desc}</p>
                <div className="flex gap-4 text-xs font-mono border-t border-white/5 pt-4">
                  <span className="text-red-400 flex items-center gap-1">Pain: {agent.pain}</span>
                  <span className="text-green-400 flex items-center gap-1">ROI: {agent.roi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 px-6 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>
            <p className="text-slate-400">Choose the model that fits your growth stage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              name="Pilot"
              price="$2,500"
              period="one-time"
              desc="Perfect for a single automation workflow or MVP."
              features={["1 Custom N8N Workflow", "CRM Integration", "Data Scraping Setup", "2 Weeks Support"]}
            />
            <PricingCard 
              name="Growth Partner"
              price="$4,500"
              period="/ month"
              desc="We become your dedicated AI department."
              featured={true}
              features={["Unlimited N8N Workflows", "2 AI Voice Agents (Vapi)", "Weekly Strategy Calls", "24/7 Server Monitoring", "Priority Support"]}
            />
            <PricingCard 
              name="Enterprise"
              price="Custom"
              period=""
              desc="Full-scale multi-agent systems and custom apps."
              features={["Custom Mobile/Web App", "Autonomous Agent Swarms", "On-Premise Deployment", "SLA Guarantees", "Dedicated Engineer"]}
            />
          </div>
        </div>
      </section>

      <Footer />
      {activeAgent && <ChatModal agent={activeAgent} onClose={() => setActiveAgent(null)} />}
    </main>
  );
}

function PricingCard({ name, price, period, desc, features, featured = false }: any) {
  return (
    <div className={`relative p-8 rounded-2xl border flex flex-col ${featured ? 'bg-slate-900 border-blue-500 shadow-2xl shadow-blue-900/20' : 'bg-slate-950 border-slate-800'}`}>
      {featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-slate-400 text-sm mb-6">{desc}</p>
        <div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-white">{price}</span><span className="text-slate-500">{period}</span></div>
      </div>
      <div className="flex-1 space-y-4 mb-8">
        {features.map((f:any, i:any) => (
            <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                <Check className={`w-5 h-5 ${featured ? 'text-blue-500' : 'text-slate-600'}`} />
                {f}
            </div>
        ))}
      </div>
      <a href="/contact" className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${featured ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>Choose Plan</a>
    </div>
  )
}