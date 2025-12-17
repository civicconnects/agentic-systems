"use client"; // REQUIRED for the interactive chat

import React, { useState } from 'react';
import { Bot, Workflow, Phone, Layers, Check, MessageSquare, Mic, PenTool, BarChart } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
// Make sure this file exists from the previous step!
import ChatModal from '@/components/features/ChatModal'; 

export default function Home() {
  const [activeAgent, setActiveAgent] = useState<any>(null);

  const agents = [
    {
      id: 1,
      name: "Receptionist",
      role: "Front Desk AI",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      desc: "Answers FAQs, routes calls, and captures lead info 24/7.",
      color: "bg-blue-600",
      greeting: "Hello! Thank you for contacting Agentic Systems. How can I direct your call today?"
    },
    {
      id: 2,
      name: "Sales Bot",
      role: "Lead Qualifier",
      icon: <BarChart className="w-6 h-6 text-white" />,
      desc: "Qualifies inbound leads and books appointments directly to CRM.",
      color: "bg-green-600",
      greeting: "Hi there! I see you're interested in growing your business. What is your current monthly revenue?"
    },
    {
      id: 3,
      name: "Voice Agent",
      role: "Outbound Caller",
      icon: <Mic className="w-6 h-6 text-white" />,
      desc: "Makes outbound calls for appointment reminders and surveys.",
      color: "bg-purple-600",
      greeting: "Hi, this is Alex from Agentic Systems. I'm calling to confirm our meeting for Tuesday."
    },
    {
      id: 'custom', // This ID triggers the special upload flow
      name: "Custom Assistant",
      role: "Train on Your Data",
      icon: <Bot className="w-6 h-6 text-white" />,
      desc: "Upload your own PDF or FAQ to train a custom agent instantly.",
      color: "bg-indigo-600 border-indigo-400 shadow-[0_0_30px_rgba(79,70,229,0.2)]", // Special styling
      greeting: "I am ready to learn. Please upload your document."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800 text-blue-400 text-xs font-semibold uppercase tracking-wide mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-Gen Automation Agency
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Replace Busy Work with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Intelligent Agents
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          We build autonomous AI departments using N8N, Autogen, and Voice AI. 
          Scale your business operations without increasing headcount.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-slate-950 px-8 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
            Deploy Your Agents
          </button>
          <a href="/portfolio" className="border border-slate-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
            View Case Studies
          </a>
        </div>
      </section>

      {/* NEW: Interactive Agent Grid */}
      <section className="py-20 px-6 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Your Digital Workforce</h2>
            <p className="text-slate-400">Click an agent below to test their capabilities in real-time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:shadow-xl group relative overflow-hidden">
                {/* FIX: Added backticks for template literals */}
                <div className={`absolute top-0 left-0 w-full h-1 ${agent.color}`}></div>
                
                {/* FIX: Added backticks here too */}
                <div className={`${agent.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {agent.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">{agent.role}</p>
                <p className="text-sm text-slate-400 mb-6 min-h-[60px]">{agent.desc}</p>
                
                <button 
                  onClick={() => setActiveAgent(agent)}
                  className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Chat Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto w-full">
         <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Core Infrastructure</h2>
          <p className="text-slate-400">The systems powering the agents above.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            title="AI Voice Agents" 
            icon={<Phone className="w-6 h-6 text-blue-400" />}
            desc="Outbound sales and inbound support agents that sound human."
            tags={["Vapi", "Sales Calls", "Customer Service"]}
          />
          <ServiceCard 
            title="N8N Workflows" 
            icon={<Workflow className="w-6 h-6 text-purple-400" />}
            desc="Complex serverless automation connecting your CRM and Email."
            tags={["Process Automation", "CRM Sync", "Zapier Replacement"]}
          />
          <ServiceCard 
            title="Autonomous Departments" 
            icon={<Bot className="w-6 h-6 text-green-400" />}
            desc="Multi-agent systems powered by Microsoft Autogen."
            tags={["Multi-Agent Systems", "Strategic Planning"]}
          />
          <ServiceCard 
            title="Custom App Development" 
            icon={<Layers className="w-6 h-6 text-orange-400" />}
            desc="The infrastructure for your AI. High-speed Web & Mobile apps."
            tags={["Next.js", "React Native", "Cloud Architecture"]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-slate-900/30 border-y border-slate-800">
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

      {/* Chat Modal Logic */}
      {activeAgent && (
        <ChatModal agent={activeAgent} onClose={() => setActiveAgent(null)} />
      )}

    </main>
  );
}

// Sub-components
function ServiceCard({ title, icon, desc, tags }: any) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 hover:bg-slate-900 transition-all group">
      <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 mb-6">{desc}</p>
      <div className="flex flex-wrap gap-2">{tags.map((t:any, i:any) => <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">{t}</span>)}</div>
    </div>
  )
}

function PricingCard({ name, price, period, desc, features, featured = false }: any) {
  return (
    // FIX: Added backticks for template literals
    <div className={`relative p-8 rounded-2xl border flex flex-col ${featured ? 'bg-slate-900 border-blue-500 shadow-2xl shadow-blue-900/20' : 'bg-slate-950 border-slate-800'}`}>
      {featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-slate-400 text-sm mb-6">{desc}</p>
        <div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-white">{price}</span><span className="text-slate-500">{period}</span></div>
      </div>
      <div className="flex-1 space-y-4 mb-8">
        {features.map((f:any, i:any) => (
            // FIX: Added backticks for template literals
            <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                <Check className={`w-5 h-5 ${featured ? 'text-blue-500' : 'text-slate-600'}`} />
                {f}
            </div>
        ))}
      </div>
      {/* FIX: Added backticks for template literals */}
      <a href="/contact" className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${featured ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>Choose Plan</a>
    </div>
  )
}