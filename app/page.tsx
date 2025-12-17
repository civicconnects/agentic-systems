import React from 'react';
import { Bot, Workflow, Phone, Layers, Check, ArrowRight } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
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

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Core Systems</h2>
          <p className="text-slate-400">The infrastructure we build for your scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            title="AI Voice Agents" 
            icon={<Phone className="w-6 h-6 text-blue-400" />}
            desc="Outbound sales and inbound support agents that sound human. They handle objections, book appointments, and run 24/7."
            tags={["Vapi", "Sales Calls", "Customer Service"]}
          />
          <ServiceCard 
            title="N8N Workflows" 
            icon={<Workflow className="w-6 h-6 text-purple-400" />}
            desc="Complex serverless automation. We connect your CRM, Email, and internal tools to automate lead qualification and data entry."
            tags={["Process Automation", "CRM Sync", "Zapier Replacement"]}
          />
          <ServiceCard 
            title="Autonomous Departments" 
            icon={<Bot className="w-6 h-6 text-green-400" />}
            desc="Multi-agent systems powered by Microsoft Autogen. Create a 'Marketing Dept' of bots that plan and execute campaigns together."
            tags={["Multi-Agent Systems", "Strategic Planning"]}
          />
          <ServiceCard 
            title="Custom App Development" 
            icon={<Layers className="w-6 h-6 text-orange-400" />}
            desc="The infrastructure for your AI. We build high-speed Web & Mobile apps tailored for AI integration."
            tags={["Next.js", "React Native", "Cloud Architecture"]}
          />
        </div>
      </section>

      {/* NEW: Pricing / Plans Section */}
      <section className="py-20 px-6 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400">Choose the model that fits your growth stage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Starter Plan */}
            <PricingCard 
              name="Pilot"
              price="$2,500"
              period="one-time"
              desc="Perfect for a single automation workflow or MVP."
              features={[
                "1 Custom N8N Workflow",
                "CRM Integration",
                "Data Scraping Setup",
                "2 Weeks Support"
              ]}
            />

            {/* Growth Plan (Highlighted) */}
            <PricingCard 
              name="Growth Partner"
              price="$4,500"
              period="/ month"
              desc="We become your dedicated AI department."
              featured={true}
              features={[
                "Unlimited N8N Workflows",
                "2 AI Voice Agents (Vapi)",
                "Weekly Strategy Calls",
                "24/7 Server Monitoring",
                "Priority Support"
              ]}
            />

            {/* Enterprise Plan */}
            <PricingCard 
              name="Enterprise"
              price="Custom"
              period=""
              desc="Full-scale multi-agent systems and custom apps."
              features={[
                "Custom Mobile/Web App",
                "Autonomous Agent Swarms",
                "On-Premise Deployment",
                "SLA Guarantees",
                "Dedicated Engineer"
              ]}
            />

          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}

// Reusable Service Card
function ServiceCard({ title, icon, desc, tags }: { title: string, icon: any, desc: string, tags: string[] }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 hover:bg-slate-900 transition-all group">
      <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 mb-6">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

// Reusable Pricing Card
function PricingCard({ name, price, period, desc, features, featured = false }: any) {
  return (
    <div className={`relative p-8 rounded-2xl border flex flex-col ${featured ? 'bg-slate-900 border-blue-500 shadow-2xl shadow-blue-900/20' : 'bg-slate-950 border-slate-800'}`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          Most Popular
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-slate-400 text-sm mb-6">{desc}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-slate-500">{period}</span>
        </div>
      </div>

      <div className="flex-1 space-y-4 mb-8">
        {features.map((f: string, i: number) => (
          <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
            <Check className={`w-5 h-5 ${featured ? 'text-blue-500' : 'text-slate-600'}`} />
            {f}
          </div>
        ))}
      </div>

      <a 
        href="/contact" 
        className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${featured ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
      >
        Choose Plan
      </a>
    </div>
  )
}