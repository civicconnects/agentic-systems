"use client";

import React, { useState } from 'react';
import { Bot, Workflow, Phone, Layers, Check, MessageSquare, Mic, PenTool, BarChart, Shield, Users, ArrowRight } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ChatModal from '@/components/features/ChatModal'; 

export default function Home() {
  const [activeAgent, setActiveAgent] = useState<any>(null);

  // V2.0 AGENT DATA (PASTOR FRAMEWORK)
  const agents = [
    {
      id: 1,
      name: "The Sentinel",
      role: "AI HR Director",
      icon: <Shield className="w-6 h-6 text-white" />,
      pain: "HR teams drowning in policy questions.",
      roi: "Reduces admin load by 70%.",
      desc: "An always-on guardian that handles onboarding, conflict logging, and benefits Q&A instantly. Secure and compliant.",
      color: "bg-emerald-600",
      greeting: "I am The Sentinel. I am ready to process new employee onboarding or answer policy questions securely."
    },
    {
      id: 2,
      name: "The Architect",
      role: "Editor-in-Chief",
      icon: <PenTool className="w-6 h-6 text-white" />,
      pain: "Inconsistent brand voice & slow output.",
      roi: "10x content without hiring writers.",
      desc: "A creative engine that researches, writes, and repurposes content across all channels in your unique voice.",
      color: "bg-orange-600",
      greeting: "Hello. I have analyzed your brand guidelines. What topic shall we turn into a viral article today?"
    },
    {
      id: 3,
      name: "Sales VP",
      role: "Lead Closer",
      icon: <BarChart className="w-6 h-6 text-white" />,
      pain: "Leads dying in the funnel.",
      roi: "Doubles conversion rates 24/7.",
      desc: "Engages inbound traffic instantly, qualifies them using your playbook, and books meetings directly to CRM.",
      color: "bg-blue-600",
      greeting: "I see you're looking to scale. Let's cut to the chase—what is your revenue goal for Q4?"
    },
    {
      id: 4,
      name: "Voice Ops",
      role: "Outbound Caller",
      icon: <Mic className="w-6 h-6 text-white" />,
      pain: "Manual dialing burns out humans.",
      roi: "10,000 calls/day capacity.",
      desc: "Hyper-realistic voice agent for appointment confirmations, cold outreach, and reactivation campaigns.",
      color: "bg-purple-600",
      greeting: "Hi, this is Alex from Agentic Systems. I'm calling to confirm our meeting for Tuesday."
    },
    {
      id: 5,
      name: "Front Desk",
      role: "Receptionist",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      pain: "Missed calls = Lost revenue.",
      roi: "Zero hold times. 100% capture.",
      desc: "Routes calls, answers FAQs, and schedules appointments without a coffee break.",
      color: "bg-pink-600",
      greeting: "Thanks for calling Agentic Systems. How can I direct your call today?"
    },
    {
      id: 6,
      name: "The Analyst",
      role: "Operations Manager",
      icon: <Users className="w-6 h-6 text-white" />,
      pain: "Data silos hiding insights.",
      roi: "Instant strategic clarity.",
      desc: "Connects to your N8N workflows to monitor health, predict bottlenecks, and optimize resource allocation.",
      color: "bg-cyan-600",
      greeting: "System health is 98%. I have detected a potential bottleneck in your lead flow. Shall I optimize it?"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      
      <Navbar />

      {/* Hero Section V2 - Glassmorphism */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Agentic Systems V2.0
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8">
          Build Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient">
            Digital Workforce
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Stop hiring for tasks. Hire for outcomes. <br/>
          We deploy autonomous AI departments that work 24/7.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <button className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Deploy Your Agents
          </button>
          <a href="/factory" className="group flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
            Enter AI Factory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* NEW: The 6-Agent Bento Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">The Ecosystem</h2>
              <p className="text-slate-400 max-w-xl text-lg">Select an agent to initialize a live neural simulation.</p>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-sm font-mono text-blue-400">SYS_STATUS: ONLINE</div>
              <div className="text-xs text-slate-500">LATENCY: 12ms</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            {agents.map((agent, index) => (
              <div 
                key={agent.id} 
                className={`group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-[1.02] cursor-pointer overflow-hidden
                  ${index === 0 || index === 3 ? 'md:col-span-2' : ''} 
                `}
              >
                {/* Hover Glow */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 ${agent.color} opacity-0 group-hover:opacity-20 blur-[80px] transition-opacity duration-500 rounded-full`}></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`${agent.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg`}>
                      {agent.icon}
                    </div>
                    <div className="bg-white/5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 border border-white/5">
                      V2.4.1
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{agent.name}</h3>
                    <p className="text-blue-400 font-bold text-sm tracking-wide uppercase mb-4">{agent.role}</p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex gap-2 text-sm text-slate-400">
                        <span className="text-red-400 font-semibold">PROBLEM:</span> {agent.pain}
                      </div>
                      <div className="flex gap-2 text-sm text-slate-400">
                        <span className="text-green-400 font-semibold">ROI:</span> {agent.roi}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setActiveAgent(agent)}
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 group-hover:border-blue-500/50"
                  >
                    <MessageSquare className="w-4 h-4" /> Initialize Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Darker V2) */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-white/5">
         <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Core Infrastructure</h2>
          <p className="text-slate-400">The invisible systems powering the agents above.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            title="Voice Neural Engine" 
            icon={<Phone className="w-6 h-6 text-blue-400" />}
            desc="Outbound sales and inbound support agents that sound human."
            tags={["Vapi", "Sales Calls", "Customer Service"]}
          />
          <ServiceCard 
            title="N8N Orchestration" 
            icon={<Workflow className="w-6 h-6 text-purple-400" />}
            desc="Complex serverless automation connecting your CRM and Email."
            tags={["Process Automation", "CRM Sync", "Zapier Replacement"]}
          />
          <ServiceCard 
            title="Autogen Swarms" 
            icon={<Bot className="w-6 h-6 text-green-400" />}
            desc="Multi-agent systems powered by Microsoft Autogen."
            tags={["Multi-Agent Systems", "Strategic Planning"]}
          />
          <ServiceCard 
            title="Full-Stack Apps" 
            icon={<Layers className="w-6 h-6 text-orange-400" />}
            desc="The infrastructure for your AI. High-speed Web & Mobile apps."
            tags={["Next.js", "React Native", "Cloud Architecture"]}
          />
        </div>
      </section>

      {/* Pricing V2 (Glass Cards) */}
      <section className="py-24 px-6 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>
            <p className="text-slate-400">Invest in outcomes, not hours.</p>
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

      {/* Chat Modal Logic */}
      {activeAgent && (
        <ChatModal agent={activeAgent} onClose={() => setActiveAgent(null)} />
      )}

    </main>
  );
}

// Sub-components V2
function ServiceCard({ title, icon, desc, tags }: any) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
      <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 mb-6">{desc}</p>
      <div className="flex flex-wrap gap-2">{tags.map((t:any, i:any) => <span key={i} className="text-xs font-medium px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/10">{t}</span>)}</div>
    </div>
  )
}

function PricingCard({ name, price, period, desc, features, featured = false }: any) {
  return (
    <div className={`relative p-8 rounded-3xl border flex flex-col ${featured ? 'bg-white/5 border-blue-500/50 shadow-2xl shadow-blue-900/20' : 'bg-transparent border-white/10'}`}>
      {featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Best Value</div>}
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
      <a href="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${featured ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40' : 'bg-white/5 hover:bg-white/10 text-white'}`}>Choose Plan</a>
    </div>
  )
}