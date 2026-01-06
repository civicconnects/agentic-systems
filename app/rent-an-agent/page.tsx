"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Bot,
  Check,
  ArrowRight,
  Phone,
  Database,
  Calendar,
  Cloud,
  Cpu,
  Zap,
  Globe,
  Shield,
  BarChart,
  Users,
  Layers
} from 'lucide-react';

export default function RentAnAgentPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-slate-200 font-sans">
      <Navbar />

      {/* --- SECTION 1: DEFINE THE OFFER (HERO & PRICING) --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8">
            <Cloud className="w-3 h-3" /> The Future of Work is Here
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
            Rent an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">AI Agent</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stop hiring for tasks that software can do better. Deploy a cloud-based AI workforce that qualifies leads, books appointments, and manages data 24/7.
          </p>
        </div>

        {/* Pricing / Tiers */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TIER 1: THE INTERN */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col hover:border-green-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none"></div>

            {/* Visual Header */}
            <div className="mb-6 rounded-2xl overflow-hidden h-64 relative border border-slate-800/50">
              <img src="/tier1-team.png" alt="The Intern Team" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-3 left-4 bg-slate-950/80 px-3 py-1 rounded-full text-white font-bold text-sm backdrop-blur-md border border-slate-800">The Intern Team</div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black text-white">$997</span>
                <span className="text-slate-500 font-medium">/mo</span>
              </div>
              <p className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4">Your Drafting & Admin Team</p>
            </div>

            <div className="space-y-6 mb-8 flex-1">
              {/* Agent 1 */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/avatar-alex.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Alex" />
                  <h4 className="text-white font-bold text-sm">ALEX — Content Drafter</h4>
                </div>
                <ul className="text-xs text-slate-400 space-y-1 pl-14">
                  <li>• Researches competitors & keywords</li>
                  <li>• Drafts 1,500-word SEO articles</li>
                  <li>• Writes viral scripts + prompts</li>
                </ul>
              </div>
              {/* Agent 2 */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/avatar-casey.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Casey" />
                  <h4 className="text-white font-bold text-sm">CASEY — Social Assistant</h4>
                </div>
                <ul className="text-xs text-slate-400 space-y-1 pl-14">
                  <li>• Writes engaging captions (LinkedIn/X)</li>
                  <li>• Generates hashtag clouds</li>
                  <li>• Sources stock/AI visuals</li>
                </ul>
              </div>
              {/* Agent 3 */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/avatar-jordan.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Jordan" />
                  <h4 className="text-white font-bold text-sm">JORDAN — Admin Aide</h4>
                </div>
                <ul className="text-xs text-slate-400 space-y-1 pl-14">
                  <li>• 6:00 AM Daily Briefing</li>
                  <li>• Polishes email drafts</li>
                  <li>• Formats meeting notes to SOPs</li>
                </ul>
              </div>
            </div>

            <a href="/contact" className="w-full py-4 text-center block bg-slate-950 text-white border border-slate-700 rounded-xl font-bold hover:bg-green-900/20 hover:border-green-500/50 transition-all text-sm">
              Book a Strategy Call
            </a>
          </div>

          {/* TIER 2: THE PROFESSIONAL (Growth) */}
          <div className="bg-slate-900 border-2 border-blue-600/50 p-6 rounded-3xl flex flex-col relative shadow-[0_0_50px_rgba(29,78,216,0.15)] transform md:-translate-y-4">
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider uppercase shadow-lg z-10">Most Popular</div>

            {/* Visual Header */}
            <div className="mb-6 rounded-2xl overflow-hidden h-64 relative border border-slate-800/50">
              <img src="/tier2-team.png" alt="The Professional Team" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-3 left-4 bg-slate-950/80 px-3 py-1 rounded-full text-white font-bold text-sm backdrop-blur-md border border-slate-800">The Growth Team</div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black text-white">$2,497</span>
                <span className="text-slate-500 font-medium">/mo</span>
              </div>
              <p className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4">Your Execution & Front Desk</p>
            </div>

            <div className="space-y-6 mb-8 flex-1">
              {/* Agent 1 - Concierge (Was Sarah, Changed Image to Victoria) */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/avatar-casey.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Sarah" />
                  <h4 className="text-white font-bold text-sm">SARAH — AI Concierge</h4>
                </div>
                <ul className="text-xs text-slate-300 space-y-1 pl-14">
                  <li>• Answers inbound calls 24/7</li>
                  <li>• Screens spam & answers FAQs</li>
                  <li>• Routes VIP calls to cell</li>
                </ul>
              </div>
              {/* Agent 2 */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/avatar-michael.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Michael" />
                  <h4 className="text-white font-bold text-sm">MICHAEL — Outreach Pro</h4>
                </div>
                <ul className="text-xs text-slate-300 space-y-1 pl-14">
                  <li>• Scrapes Goog/Apollo leads</li>
                  <li>• Personalized warm-up emails</li>
                  <li>• Stops on reply</li>
                </ul>
              </div>
              {/* Agent 3 */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/avatar-elena.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Elena" />
                  <h4 className="text-white font-bold text-sm">ELENA — The Gatekeeper</h4>
                </div>
                <ul className="text-xs text-slate-300 space-y-1 pl-14">
                  <li>• Negotiates meeting times</li>
                  <li>• Inbox management & labeling</li>
                  <li>• Competitor monitoring</li>
                </ul>
              </div>
            </div>

            <a href="/contact" className="w-full py-4 text-center block bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 text-sm">
              Book a Strategy Call
            </a>
          </div>

          {/* TIER 3: THE FACTORY (Enterprise) */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col hover:border-purple-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none"></div>

            {/* Visual Header */}
            <div className="mb-6 rounded-2xl overflow-hidden h-64 relative border border-slate-800/50">
              <img src="/tier3-team.png" alt="The Factory Team" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-3 left-4 bg-slate-950/80 px-3 py-1 rounded-full text-white font-bold text-sm backdrop-blur-md border border-slate-800">The Factory Team</div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black text-white">Custom</span>
              </div>
              <p className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4">Department Replacement</p>
            </div>

            <div className="space-y-6 mb-8 flex-1">
              {/* Agent 1 */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/avatar-marcus.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Marcus" />
                  <h4 className="text-white font-bold text-sm">MARCUS — "The Wolf"</h4>
                </div>
                <ul className="text-xs text-slate-400 space-y-1 pl-14">
                  <li>• High-fidelity outbound voice</li>
                  <li>• Navigates gatekeepers live</li>
                  <li>• Books directly to calendar</li>
                </ul>
              </div>
              {/* Agent 2 - Victoria (Changed image to Sarah since Victoria moved?) No, I can use Victoria image again or Sarah. Using Sarah image here. */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/avatar-sarah.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Victoria" />
                  <h4 className="text-white font-bold text-sm">VICTORIA — Head of Talent</h4>
                </div>
                <ul className="text-xs text-slate-400 space-y-1 pl-14">
                  <li>• Candidate sourcing & scoring</li>
                  <li>• 10-min voice screening</li>
                  <li>• Automated onboarding</li>
                </ul>
              </div>
              {/* Agent 3 - Architect (Atlas) - Changed to Guy (Michael Image reused) */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/avatar-marcus.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Atlas" />
                  <h4 className="text-white font-bold text-sm">ATLAS — Solutions Architect</h4>
                </div>
                <ul className="text-xs text-slate-400 space-y-1 pl-14">
                  <li>• Connects payments/CRM/Fulfillment</li>
                  <li>• Auto-contracts & invoices</li>
                  <li>• Manages "Content Empire"</li>
                </ul>
              </div>
            </div>

            <a href="/contact" className="w-full py-4 text-center block bg-slate-950 text-white border border-slate-700 rounded-xl font-bold hover:bg-purple-900/20 hover:border-purple-500/50 transition-all text-sm">
              Book a Strategy Call
            </a>
          </div>
        </div>

        {/* Capability Checklist */}
        <div className="max-w-5xl mx-auto mt-20 p-8 border border-slate-800 rounded-3xl bg-slate-900/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Operational Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CapabilityItem icon={<Phone className="text-blue-400" />} title="AI Phone Calling" />
            <CapabilityItem icon={<Check className="text-emerald-400" />} title="Lead Qualification" />
            <CapabilityItem icon={<Database className="text-purple-400" />} title="CRM Deep Integration" />
            <CapabilityItem icon={<Calendar className="text-orange-400" />} title="Appointment Setting" />
            <CapabilityItem icon={<Zap className="text-yellow-400" />} title="Instant Response (24/7)" />
            <CapabilityItem icon={<Cloud className="text-cyan-400" />} title="Cloud Deployment" />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: LEAD GENERATION ENGINE (PROOF OF USE) --- */}
      <section className="py-24 px-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Businesses That Don't Automate <br />
              <span className="text-red-400">Will Be Left Behind</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Speed is the new currency. Our AI Agents don't sleep, don't take breaks, and don't miss leads. Here is how our "Lead Gen Engine" works.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Diagram Visual */}
            <div className="relative bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Cpu className="w-32 h-32 text-blue-500" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Step 1 */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center border border-blue-500/30 group-hover:border-blue-500 transition-colors">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">1. Data Ingestion</h4>
                    <p className="text-sm text-slate-400">AI scrapes/ingests leads from ads or lists.</p>
                  </div>
                </div>
                {/* Connector */}
                <div className="h-8 border-l-2 border-slate-800 ml-6"></div>

                {/* Step 2 */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500 transition-colors">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">2. Intelligent Outreach</h4>
                    <p className="text-sm text-slate-400">Agent calls lead within 30 seconds.</p>
                  </div>
                </div>
                {/* Connector */}
                <div className="h-8 border-l-2 border-slate-800 ml-6"></div>

                {/* Step 3 */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900/30 flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500 transition-colors">
                    <Calendar className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">3. Conversion</h4>
                    <p className="text-sm text-slate-400">Qualified meeting booked directly to calendar.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation Text */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Automated Outbound & Inbound</h3>
                <p className="text-slate-400">
                  Whether chasing cold leads or handling inbound support, the agent adapts. It follows a "logical branch" to ensure every objection is handled professionally.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">CRM Synchronization</h3>
                <p className="text-slate-400">
                  No more manual data entry. The AI updates HubSpot, Salesforce, or HighLevel instantly after the call, tagging the lead with "Qualified", "Not Interested", or "Follow Up".
                </p>
              </div>
              <div className="pt-4">
                <a href="#book" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                  See the demo in action <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: AUTHORITY & CONTENT EXTRACTION --- */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">

            {/* Left: Text Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm">Proven Methodology</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-8">
                More Than Just Code. <br />
                <span className="text-slate-400">Built on Strategy.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We are not just developers; we are business strategists. Our agents are trained on proprietary frameworks extracted from years of high-ticket sales and operations consulting.
              </p>

              <div className="space-y-6">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-400" /> Business Promotion
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Our agents understand the psychology of the sale. They don't just read scripts; they build value, create urgency, and guide the prospect to a decision.
                  </p>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" /> Training & Enablement
                  </h4>
                  <p className="text-slate-400 text-sm">
                    We model your best employees. By analyzing your top performers, we clone their sales style and knowledge into an infinite fleet of digital workers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual/Stats */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative w-full border border-slate-700 bg-slate-900/80 p-8 rounded-3xl backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-4">Performance Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Cost Reduction</span>
                      <span className="text-emerald-400 font-bold">60%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[60%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Lead Response Speed</span>
                      <span className="text-blue-400 font-bold">Instant</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[98%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Scalability</span>
                      <span className="text-purple-400 font-bold">Infinite</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full w-[100%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to scale your workforce?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Deploy your first AI Agent today and watch your efficiency skyrocket.
          </p>
          <a href="/contact" className="inline-block bg-white text-slate-900 px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
            Book a Strategy Call
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Sub-components for cleaner code
function PricingCard({ name, price, period, desc, features, featured = false }: any) {
  return (
    <div className={`relative p-8 rounded-2xl border flex flex-col ${featured ? 'bg-slate-900 border-blue-500 shadow-2xl shadow-blue-900/20 transform md:-translate-y-4' : 'bg-slate-950 border-slate-800'}`}>
      {featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-slate-400 text-sm mb-6">{desc}</p>
        <div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-white">{price}</span><span className="text-slate-500">{period}</span></div>
      </div>
      <div className="flex-1 space-y-4 mb-8">
        {features.map((f: any, i: any) => (
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

function CapabilityItem({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
      <div className="p-2 bg-slate-900 rounded-lg">
        {icon}
      </div>
      <span className="font-semibold text-slate-200">{title}</span>
    </div>
  )
}
