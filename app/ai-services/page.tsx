import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Video, Users, ArrowRight, CheckCircle, Zap } from 'lucide-react';

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
        
        {/* Category 1 */}
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

        {/* Category 2 */}
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

        {/* Category 3 */}
        <ServiceCategory 
          title="Department Builders"
          icon={<Users className="w-8 h-8 text-green-400" />}
          desc="Full-stack teams for complex operations."
          roles={[
            { title: "Compliance Team", detail: "Monitors all internal comms for policy violations.", saved: "Full Headcount" },
            { title: "Marketing Swarm", detail: "5 agents working in unison to plan and execute campaigns.", saved: "3 Headcounts" }
          ]}
        />

      </div>
      <Footer />
    </main>
  );
}

function ServiceCategory({ title, icon, desc, roles }: any) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-blue-500/20 transition-all">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">{icon}</div>
        <div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <p className="text-slate-400 mt-1">{desc}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((r: any, i: number) => (
          <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:bg-slate-900 transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">{r.title}</h3>
              <CheckCircle className="w-4 h-4 text-slate-600 group-hover:text-blue-500" />
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed h-12">{r.detail}</p>
            <div className="flex items-center gap-2 text-green-400 text-xs font-mono font-bold uppercase border-t border-slate-800 pt-4">
              <ArrowRight className="w-3 h-3" /> Saves {r.saved}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}