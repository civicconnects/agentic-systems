import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Scale, Clock, DollarSign, CheckCircle, BarChart3, Phone, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white">
      
      {/* Shared Navbar */}
      <Navbar />

      {/* Header */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Proof of <span className="text-blue-500">Performance</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Data-driven results. We measure success in hours saved and revenue generated.
        </p>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-24">
        
        {/* NEW: Legal Case Study (With Chart) */}
        <CaseStudy 
          category="Legal Tech • Document Review"
          title="The AI Paralegal"
          description="A law firm was drowning in discovery. We deployed an isolated Legal Agent that digested 5,000 case files in minutes with zero hallucinations."
          stats={[
            { icon: <Clock className="w-5 h-5" />, label: "Discovery Time", value: "4 Hours" },
            { icon: <DollarSign className="w-5 h-5" />, label: "Cost Reduction", value: "92%" },
          ]}
          tags={["RAG Pipeline", "Vector DB", "Private LLM"]}
          color="blue"
          chartData={{ pre: 120, post: 4, label: "Hours Spent" }} 
        />

        {/* Existing: Voice AI */}
        <CaseStudy 
          category="Voice AI • Dental Niche"
          title="The 'Always-On' Receptionist"
          description="A busy dental practice in Austin was missing 30% of calls. We deployed a Vapi Voice Agent that answers instantly and books cleanings."
          stats={[
            { icon: <Phone className="w-5 h-5" />, label: "Calls Handled", value: "1,200/mo" },
            { icon: <DollarSign className="w-5 h-5" />, label: "Revenue Saved", value: "$15k/mo" },
          ]}
          tags={["Vapi", "Python", "Twilio"]}
          color="purple"
        />

        {/* Existing: N8N Automation */}
        <CaseStudy 
          category="Workflow Automation • Real Estate"
          title="Zero-Touch Lead Qualification"
          description="Real estate agents were wasting hours texting cold leads. We built an N8N workflow that scrapes Zillow and sends SMS sequences."
          stats={[
            { icon: <Clock className="w-5 h-5" />, label: "Hours Saved", value: "40 hrs/wk" },
            { icon: <CheckCircle className="w-5 h-5" />, label: "Conversion Rate", value: "+22%" },
          ]}
          tags={["N8N", "OpenAI", "HubSpot"]}
          color="blue"
        />

        {/* Existing: Content Marketing */}
        <CaseStudy 
          category="Multi-Agent Systems • Content Marketing"
          title="The Autonomous Content Team"
          description="We replaced a 3-person content team with a swarm of Autogen agents. One researches, one writes, and one edits."
          stats={[
            { icon: <BarChart3 className="w-5 h-5" />, label: "Output Increase", value: "500%" },
            { icon: <DollarSign className="w-5 h-5" />, label: "Cost Reduction", value: "90%" },
          ]}
          tags={["Autogen", "LangChain", "WordPress API"]}
          color="green"
        />

      </section>

      <Footer />
    </main>
  );
}

// Updated Case Study Component with VISUAL CHART Support
function CaseStudy({ category, title, description, stats, tags, color, chartData }: any) {
  const colorClasses: any = {
    blue: "border-blue-500/30 hover:border-blue-500",
    purple: "border-purple-500/30 hover:border-purple-500",
    green: "border-green-500/30 hover:border-green-500",
  };

  return (
    <div className={`bg-slate-900/40 border ${colorClasses[color] || 'border-slate-800'} rounded-3xl p-8 md:p-12 transition-all duration-300 group`}>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Column: Text Info */}
        <div className="flex-1">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{category}</div>
          <h2 className="text-3xl font-bold mb-6 group-hover:text-white transition-colors">{title}</h2>
          <p className="text-slate-400 leading-relaxed mb-8 text-lg">{description}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {tags.map((t: string) => (
              <span key={t} className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs border border-slate-700">{t}</span>
            ))}
          </div>
          
          <a href="/contact" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all">
            See Architecture <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Column: Visual Evidence */}
        <div className="w-full lg:w-1/3 space-y-6">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat: any, i: number) => (
              <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-slate-500 mb-2">{stat.icon}</div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* DYNAMIC CHART (Only shows if chartData is provided) */}
          {chartData && (
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="text-xs font-bold text-slate-500 uppercase mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Efficiency Visualized ({chartData.label})
              </div>
              <div className="space-y-4">
                {/* Human Bar */}
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Human (Old)</span><span>{chartData.pre}h</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-600 w-full"></div>
                  </div>
                </div>
                {/* AI Bar */}
                <div>
                  <div className="flex justify-between text-xs text-white mb-1">
                    <span>AI Agent (New)</span><span>{chartData.post}h</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    {/* Calculate width percentage dynamically */}
                    <div 
                      className="h-full bg-green-500" 
                      style={{ width: `${(chartData.post / chartData.pre) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}