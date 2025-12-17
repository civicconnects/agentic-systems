import React from 'react';
import { Bot, Workflow, Phone, Layers, MapPin, PhoneCall, ArrowRight, Cpu } from 'lucide-react';
// Now we import the shared footer (The Right Way)
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      
      {/* Navbar / Contact Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter text-white">
            AGENTIC <span className="text-blue-500">SYSTEMS</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Dallas, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-blue-500" />
              <span>918-409-2361</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full font-medium transition-colors">
              Book Strategy Call
            </button>
          </div>
        </div>
      </header>

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
          {/* Updated link to use your new Portfolio page */}
          <a href="/portfolio" className="border border-slate-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
            View Case Studies
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
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

      {/* Shared Footer Component */}
      <Footer />

    </main>
  );
}

// Reusable Component for Cards
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