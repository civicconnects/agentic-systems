import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Video, Users, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <section className="py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">AI Job Roles</h1>
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
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-slate-800 p-3 rounded-xl">{icon}</div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-slate-400">{desc}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((r: any, i: number) => (
          <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">{r.title}</h3>
            <p className="text-sm text-slate-400 mb-4 h-12">{r.detail}</p>
            <div className="flex items-center gap-2 text-green-400 text-xs font-mono font-bold uppercase border-t border-slate-800 pt-3">
              <ArrowRight className="w-3 h-3" /> Saves {r.saved}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}