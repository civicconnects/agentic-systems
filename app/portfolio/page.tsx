import React from 'react';
import { ArrowRight, CheckCircle, BarChart3, Clock, DollarSign, PhoneCall, MapPin } from 'lucide-react';
import Footer from '@/components/layout/Footer';

export default function Portfolio() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white">
      
      {/* Navbar (Simplified for sub-pages) */}
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
            <a href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full font-medium transition-colors">
              Book Strategy Call
            </a>
          </div>
        </div>
      </header>

      {/* Header */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Proof of <span className="text-blue-500">Performance</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          We don't just write code; we print efficiency. Here are three recent deployments where our agents replaced manual labor.
        </p>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-24">
        
        {/* Project 1: Voice AI */}
        <CaseStudy 
          category="Voice AI • Dental Niche"
          title="The 'Always-On' Receptionist"
          description="A busy dental practice in Austin was missing 30% of calls. We deployed a Vapi Voice Agent that answers instantly, integrates with their calendar, and books cleanings."
          stats={[
            { icon: <PhoneCallIcon />, label: "Calls Handled", value: "1,200/mo" },
            { icon: <DollarSign />, label: "Revenue Saved", value: "$15k/mo" },
          ]}
          tags={["Vapi", "Python", "Twilio"]}
          color="blue"
        />

        {/* Project 2: N8N Automation */}
        <CaseStudy 
          category="Workflow Automation • Real Estate"
          title="Zero-Touch Lead Qualification"
          description="Real estate agents were wasting hours texting cold leads. We built an N8N workflow that scrapes Zillow, enriches data, and sends personalized SMS sequences automatically."
          stats={[
            { icon: <Clock />, label: "Hours Saved", value: "40 hrs/wk" },
            { icon: <CheckCircle />, label: "Conversion Rate", value: "+22%" },
          ]}
          tags={["N8N", "OpenAI", "HubSpot"]}
          color="purple"
        />

        {/* Project 3: Autonomous Agents */}
        <CaseStudy 
          category="Multi-Agent Systems • Content Marketing"
          title="The Autonomous Content Team"
          description="We replaced a 3-person content team with a swarm of Autogen agents. One agent researches, one writes, and one edits. They publish 5 SEO articles daily without human input."
          stats={[
            { icon: <BarChart3 />, label: "Output Increase", value: "500%" },
            { icon: <DollarSign />, label: "Cost Reduction", value: "90%" },
          ]}
          tags={["Autogen", "LangChain", "WordPress API"]}
          color="green"
        />

      </section>

      <Footer />
    </main>
  );
}

// Reusable Component
function CaseStudy({ category, title, description, stats, tags, color }: any) {
  const colorClasses: any = {
    blue: "border-blue-500/30 hover:border-blue-500",
    purple: "border-purple-500/30 hover:border-purple-500",
    green: "border-green-500/30 hover:border-green-500",
  };

  return (
    <div className={`bg-slate-900/40 border ${colorClasses[color]} border-slate-800 rounded-3xl p-8 md:p-12 transition-all duration-300 group`}>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Content */}
        <div className="flex-1">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{category}</div>
          <h2 className="text-3xl font-bold mb-6 group-hover:text-white transition-colors">{title}</h2>
          <p className="text-slate-400 leading-relaxed mb-8 text-lg">{description}</p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {tags.map((t: string) => (
              <span key={t} className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs border border-slate-700">
                {t}
              </span>
            ))}
          </div>

          <button className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all">
            See Architecture <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="w-full lg:w-1/3 grid grid-cols-1 gap-4">
          {stats.map((stat: any, i: number) => (
            <div key={i} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 bg-slate-900 rounded-lg text-slate-300">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper Icon for the stats
function PhoneCallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  )
}
// Final production build check