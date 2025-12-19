"use client";

import React, { useState } from 'react';
import { Bot, Shield, Users, PenTool, BarChart, MessageSquare, Mic, Check, ArrowRight, Sparkles, Zap, Brain, Globe, Layers, AlertTriangle, Cpu } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ChatModal from '@/components/features/ChatModal'; 

export default function Home() {
  const [activeAgent, setActiveAgent] = useState<any>(null);

  const agents = [
    { 
        id: 1, 
        name: "The Sentinel", 
        role: "Senior HR Director", 
        icon: <Shield className="w-6 h-6 text-white" />, 
        pain: "Compliance risks.", 
        roi: "70% less admin.", 
        desc: "Handles onboarding & policy Q&A.", 
        color: "bg-emerald-600", 
        systemInstruction: "You are the Senior HR Director. You are professional, compliant, and empathetic. Your goal is to solve employee conflicts and explain benefits.",
        firstMessage: "Hello. I am The Sentinel, your HR Director. How can I assist with policy, benefits, or onboarding today?"
    },
    { 
        id: 2, 
        name: "The Architect", 
        role: "Senior Content Editor", 
        icon: <PenTool className="w-6 h-6 text-white" />, 
        pain: "Slow content.", 
        roi: "10x output.", 
        desc: "Researches & writes content on brand.", 
        color: "bg-orange-600",
        systemInstruction: "You are a Senior Editor. You care about tone, SEO, and brand voice. You hate passive voice.",
        firstMessage: "Greetings. I am The Architect. Give me a topic, and I will craft a viral blog post or tweet thread in seconds."
    },
    { 
        id: 3, 
        name: "The Closer", 
        role: "VP of Sales", 
        icon: <BarChart className="w-6 h-6 text-white" />, 
        pain: "Leads dying.", 
        roi: "2x conversion.", 
        desc: "Qualifies & books meetings 24/7.", 
        color: "bg-blue-600",
        systemInstruction: "You are the VP of Sales. You are high-energy, persuasive, and always looking to qualify leads or close deals.",
        firstMessage: "Hey there! I'm The Closer. Let's not waste time—are you looking to double your pipeline this quarter, or triple it?" 
    },
    { 
        id: 4, 
        name: "Voice Ops", 
        role: "Logistics Dispatcher", 
        icon: <Mic className="w-6 h-6 text-white" />, 
        pain: "Manual dialing.", 
        roi: "10k calls/day.", 
        desc: "Hyper-realistic voice outreach.", 
        color: "bg-purple-600",
        mode: "voice", // VOICE MODE ENABLED
        systemInstruction: "You are a Logistics Dispatcher. You are calm, rapid-fire, and precise.",
        firstMessage: "Voice Ops connected. Lines are open. What is your routing status?"
    },
    { 
        id: 5, 
        name: "Front Desk", 
        role: "Senior Receptionist", 
        icon: <MessageSquare className="w-6 h-6 text-white" />, 
        pain: "Missed calls.", 
        roi: "100% capture.", 
        desc: "Routes calls & answers FAQs.", 
        color: "bg-pink-600",
        mode: "voice", // VOICE MODE ENABLED
        systemInstruction: "You are the Senior Receptionist. You are warm, welcoming, and helpful. Keep answers short and spoken.",
        firstMessage: "Good morning! Welcome to AI Hub. I'm the Front Desk agent. Who are you looking to connect with today?"
    },
    { 
        id: 6, 
        name: "The Analyst", 
        role: "Senior Ops Manager", 
        icon: <Users className="w-6 h-6 text-white" />, 
        pain: "Data silos.", 
        roi: "Instant clarity.", 
        desc: "Predicts bottlenecks in workflows.", 
        color: "bg-cyan-600",
        systemInstruction: "You are a Senior Ops Manager. You are data-driven, concise, and focused on efficiency/KPIs.",
        firstMessage: "Operations online. I am The Analyst. Upload your dataset or ask me about workflow optimization. I'm ready."
    }
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
          <a href="/factory" className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Deploy Agents
          </a>
          <a href="/portfolio" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
            See Proof
          </a>
        </div>
      </section>

{/* --- THE EVOLUTION OF WORK SECTION --- */}
<section className="py-24 px-6 bg-slate-950 border-y border-slate-900">
  <div className="max-w-7xl mx-auto">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left: The Problem (Dumb Automation) */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-slate-800 blur-2xl opacity-20 rounded-3xl"></div>
        <div className="relative bg-slate-900 border border-slate-800 p-10 rounded-3xl opacity-70 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <h3 className="text-xl font-bold text-slate-300 uppercase tracking-widest">The Old Way</h3>
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Why "Dumb Automation" is Holding You Back</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            For the last decade, businesses relied on brittle scripts and RPA. These bots follow strict "If-This-Then-That" rules. 
          </p>
          <p className="text-slate-400 leading-relaxed">
            If a spreadsheet column moves one inch, <span className="text-red-400 font-semibold">the bot crashes.</span> It doesn't think; it just obeys. It requires constant human babysitting.
          </p>
        </div>
      </div>

      {/* Right: The Solution (Agentic AI) */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-600 blur-[100px] opacity-20"></div>
        <div className="relative bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-500/30 p-10 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest">The New Way</h3>
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Agentic Intelligence</h2>
          <p className="text-blue-100/80 leading-relaxed mb-6">
            Enter the era of Agentic Systems. Unlike dumb scripts, an AI Agent has <span className="text-white font-bold">Cognition</span>. It understands intent, not just keywords.
          </p>
          <p className="text-blue-100/80 leading-relaxed">
            If a process breaks, it troubleshoots. If a client is angry, it adjusts its tone. We build digital employees that drive the car, not just tools that sit in the trunk.
          </p>
          
          <div className="mt-8 flex gap-4">
             <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs font-mono text-blue-300">
                Cognition: ACTIVE
             </div>
             <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs font-mono text-blue-300">
                Learning: ON
             </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Educational Narrative */}
      <section className="py-24 px-6 bg-slate-900/30 border-y border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center relative">
          
          <div className="w-full md:w-1/2 space-y-10 relative z-10">
             <div>
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-sm mb-4">
                    <Zap className="w-4 h-4" /> The Competitive Edge
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Smart vs. Dumb <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Automation</span>
                </h2>
             </div>
             
             <div className="space-y-8 text-lg text-slate-400 leading-relaxed">
               <div className="flex gap-4">
                 <div className="bg-red-500/10 p-3 rounded-xl h-fit"><AlertTriangle className="w-6 h-6 text-red-400" /></div>
                 <div>
                    <strong className="text-white block mb-2 text-xl">The Old Way is crumbling.</strong> 
                    Traditional automation (RPA) is brittle. It follows rigid rules and breaks the moment anything changes. It requires constant human oversight.
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="bg-blue-500/10 p-3 rounded-xl h-fit"><Brain className="w-6 h-6 text-blue-400" /></div>
                 <div>
                    <strong className="text-white block mb-2 text-xl">Agentic Systems are antifragile.</strong> 
                    They possess "Contextual Awareness." They understand intent, reason through problems, and create their own plans. If one path is blocked, they find another.
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="bg-green-500/10 p-3 rounded-xl h-fit"><BarChart className="w-6 h-6 text-green-400" /></div>
                 <div>
                    <strong className="text-white block mb-2 text-xl">The ROI is immediate.</strong> 
                    Businesses incorporating AI Departments see a <span className="text-white font-bold">40% reduction in overhead</span> in 90 days.
                 </div>
               </div>
             </div>
          </div>

          {/* Abstract Visual */}
          <div className="w-full md:w-1/2 relative h-[600px] flex items-center justify-center">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
             <div className="relative w-full h-full max-w-md max-h-md border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm bg-slate-900/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <Cpu className="w-64 h-64 text-blue-500/50 animate-spin-slow [animation-duration:20s]" />
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
            <a href="/ai-services" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-bold text-sm">
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
                <button className="w-full mt-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 group-hover:border-blue-500/50">
                    {agent.mode === 'voice' ? <Mic className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
                    {agent.name} Demo
                </button>
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