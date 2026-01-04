"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomAgentBuilder from '@/components/features/CustomAgentBuilder';
import { Check, Star, Zap, Phone, Database, Globe, ArrowRight, ShieldCheck, Cpu, BarChart3, Users, Play, AlertTriangle, Layers, Target, Headphones, PenTool } from 'lucide-react';

export default function RentAnAgent() {
    const [showBuilder, setShowBuilder] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState<{ name: string; role: string } | null>(null);

    const handleRent = (name: string, role: string) => {
        setSelectedAgent({ name, role });
        setShowBuilder(true);
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-sans">
            <Navbar />

            {/* 1. HERO: RENT AN AI AGENT TODAY (REVERTED TITLE) */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm font-bold uppercase tracking-wider mb-8 shadow-lg shadow-blue-900/10">
                        <Cpu className="w-4 h-4" /> Instant Digital Workforce
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                        Rent an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">AI Agent</span> Today
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        Stop hiring for tasks that software can do better. Deploy cloud-based AI agents for sales, support, and operations in minutes.
                        Full CRM integration, 24/7 availability, and infinite scalability.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => handleRent('General Assistant', 'You are a helpful AI assistant for general business tasks.')}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]"
                        >
                            Deploy Your First Agent <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. INSTANT DIGITAL WORKFORCE (NEW SECTION) */}
            <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Instant Digital Workforce</h2>
                    <h3 className="text-xl text-slate-300 font-bold mb-8">Rent AI Employees Built for Scale, Not Demos</h3>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
                        The modern workforce is no longer human-only. An <strong>Instant Digital Workforce</strong> replaces repetitive, operational, and revenue-driving tasks with <strong>production-grade AI agents</strong> that work continuously, integrate deeply, and scale without friction.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto mb-10">
                        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors group">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Target className="text-blue-500 w-5 h-5 group-hover:text-blue-400" /> Sales Execution</h4>
                            <p className="text-sm text-slate-400">Autonomous outreach and qualification.</p>
                        </div>
                        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors group">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Headphones className="text-blue-500 w-5 h-5 group-hover:text-blue-400" /> Customer Support</h4>
                            <p className="text-sm text-slate-400">24/7 resolution of level 1-2 tickets.</p>
                        </div>
                        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors group">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Layers className="text-blue-500 w-5 h-5 group-hover:text-blue-400" /> Workflow Orchestration</h4>
                            <p className="text-sm text-slate-400">Seamless handoffs between systems.</p>
                        </div>
                        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors group">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Database className="text-blue-500 w-5 h-5 group-hover:text-blue-400" /> CRM Decisions</h4>
                            <p className="text-sm text-slate-400">Real-time data integrity updates.</p>
                        </div>
                        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors group">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><BarChart3 className="text-blue-500 w-5 h-5 group-hover:text-blue-400" /> Market Intelligence</h4>
                            <p className="text-sm text-slate-400">Competitor tracking & trend analysis.</p>
                        </div>
                        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors group">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><PenTool className="text-blue-500 w-5 h-5 group-hover:text-blue-400" /> Content Engine</h4>
                            <p className="text-sm text-slate-400">SEO articles & social updates at scale.</p>
                        </div>
                    </div>

                    <p className="text-slate-400 italic mb-8">
                        Result: Faster execution, lower costs, and predictable output—without hiring.
                    </p>

                    <button
                        onClick={() => handleRent('General Assistant', 'Helpful AI Agent')}
                        className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-2"
                    >
                        Deploy Your First AI Agent <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>

            {/* 2. MARKET SHIFT WARNING */}
            <section className="py-24 px-6 bg-slate-900/50 relative border-t border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <div className="mb-6">
                                <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 drop-shadow-sm mb-4">
                                    Don't Let Your Business Get Left Behind.
                                </h2>
                            </div>

                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-bold mb-8">
                                <AlertTriangle className="w-4 h-4" /> Market Shift Warning
                            </div>
                            <h2 className="text-4xl font-bold mb-6 leading-tight">Automation Is No Longer <br />Optional Infrastructure</h2>
                            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                                <p>
                                    We are entering a permanent market shift. Businesses that rely on manual workflows, human-only teams, or legacy software stacks will be structurally outperformed by companies running AI-native operations.
                                </p>
                                <ul className="space-y-3 pl-4 border-l-2 border-red-500/30">
                                    <li>• Rising customer acquisition costs</li>
                                    <li>• Slower human execution cycles</li>
                                    <li>• Infinite digital labor supply</li>
                                    <li>• AI-native competitors with lower overhead</li>
                                </ul>
                                <p className="font-bold text-white">
                                    AI is no longer a “tool.” It is operational infrastructure.
                                </p>
                                <p>
                                    We don’t sell theory. We run our entire agency on autonomous AI agents. Our internal **Lead Generation Engine** is a live example of what happens when AI replaces entire layers of execution.
                                </p>
                            </div>
                        </div>
                        {/* Visual: Lead Gen Engine Example from previous design */}
                        <div className="flex-1 w-full bg-slate-950 border border-slate-800 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
                            {/* ANIMATED PIPELINE VISUALIZATION REUSED */}
                            <div className="absolute inset-0 bg-grid-slate-800/[0.2] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
                            <div className="relative z-10 w-full max-w-sm space-y-4">
                                <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg flex justify-between items-center">
                                    <span className="text-slate-400 font-mono text-sm">Input Sources</span>
                                    <span className="text-white font-bold">Web Scrapers</span>
                                </div>
                                <div className="h-8 w-0.5 bg-slate-700 mx-auto"></div>
                                <div className="p-6 bg-slate-900 border border-blue-500/50 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Cpu className="w-5 h-5" /></div>
                                        <div className="font-bold">Lead Generation Engine</div>
                                    </div>
                                    <div className="text-xs text-blue-300 font-mono">Status: Processing...</div>
                                </div>
                                <div className="h-8 w-0.5 bg-slate-700 mx-auto"></div>
                                <div className="p-4 bg-slate-900 border border-green-500/30 rounded-lg flex justify-between items-center">
                                    <span className="text-green-400 font-bold">Output</span>
                                    <span className="text-white font-mono text-sm">Qualified Candidates</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HOW THE AI ENGINE WORKS */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">How Our AI Engine Works</h2>
                        <h3 className="text-xl text-blue-400 font-bold uppercase tracking-wider mb-6">From Signal Detection to Revenue — Fully Automated</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Our system is not a single AI agent. It is a <strong>multi-agent orchestration engine</strong> designed for end-to-end execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors">
                            <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-400"><Globe className="w-7 h-7" /></div>
                            <h3 className="text-xl font-bold text-white mb-4">1. Automated Lead Intelligence</h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                AI continuously scans the web for intent signals across search behavior, content engagement, and company growth indicators.
                            </p>
                            <div className="text-sm text-blue-400 font-medium">Identifies high-intent prospects before competitors react.</div>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors">
                            <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-green-400"><Phone className="w-7 h-7" /></div>
                            <h3 className="text-xl font-bold text-white mb-4">2. Autonomous AI Outbound Calling</h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                Our voice agents operate with human-like latency, dynamic objection handling, and multi-call concurrency at scale.
                            </p>
                            <div className="text-sm text-green-400 font-medium">Bypasses gatekeepers & qualifies decision-makers.</div>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors">
                            <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-purple-400"><Database className="w-7 h-7" /></div>
                            <h3 className="text-xl font-bold text-white mb-4">3. CRM-Native Pipeline Injection</h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                Qualified prospects are automatically scored, routed, scheduled, and logged inside your CRM (HubSpot/Salesforce).
                            </p>
                            <div className="text-sm text-purple-400 font-medium">Sales speaks only to prospects ready to buy.</div>
                        </div>
                    </div>

                    {/* REAL SYSTEM OUTPUT VISUAL */}
                    <div className="bg-slate-900/50 border border-slate-700/50 rounded-3xl p-10 max-w-4xl mx-auto text-center relative overflow-hidden">
                        <h4 className="text-xl font-bold text-white mb-8 relative z-10">Real System Output</h4>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 relative z-10">
                            <div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider mb-1">Input</div>
                                <div className="text-3xl font-black text-white">5,000</div>
                                <div className="text-sm text-slate-400">Leads</div>
                            </div>
                            <div className="hidden md:block h-12 w-px bg-slate-700"></div>
                            <div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider mb-1">AI Agents</div>
                                <div className="text-3xl font-black text-green-400">50 calls</div>
                                <div className="text-sm text-slate-400">per minute</div>
                            </div>
                            <div className="hidden md:block h-12 w-px bg-slate-700"></div>
                            <div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider mb-1">Output</div>
                                <div className="text-3xl font-black text-purple-400">45 Booked</div>
                                <div className="text-sm text-slate-400">Qualified Meetings</div>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-800 text-slate-400 font-mono text-sm relative z-10">
                            No SDR teams. No burnout. No variability.
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. BACKED BY PROVEN FRAMEWORKS */}
            <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Backed by Proven Frameworks</h2>
                        <h3 className="text-xl text-red-400 font-bold mb-6">Why Most “80% AI Automated” Apps Fail</h3>
                        <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Many AI startups claim 70–80% automation—and still fail. Why? Because partial automation built on fragile apps does not scale. Edge cases explode. We solve this by designing <strong>frameworks</strong>, not features.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Framework 1 */}
                        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400"><Layers className="w-8 h-8" /></div>
                                <h3 className="text-2xl font-bold text-white">Business Promotion Framework</h3>
                            </div>
                            <p className="text-slate-400 mb-6">
                                A scalable AI system must include multi-channel orchestration, brand authority signals, automated nurture sequences, and feedback loops.
                            </p>
                            <p className="text-sm text-slate-500 italic">
                                Our frameworks are extracted from real operational systems, not slide decks. This is how AI reaches production-level reliability.
                            </p>
                        </div>

                        {/* Framework 2 - Combined RAG & Human-in-Loop */}
                        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-purple-500/30 transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400"><ShieldCheck className="w-8 h-8" /></div>
                                <h3 className="text-2xl font-bold text-white">RAG & Operations Architecture</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <Check className="w-5 h-5 text-purple-500 shrink-0" />
                                    <div>
                                        <strong className="text-white block">RAG Pipeline Architecture</strong>
                                        <span className="text-sm text-slate-400">Secure document retrieval & real-time data grounding.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Check className="w-5 h-5 text-purple-500 shrink-0" />
                                    <div>
                                        <strong className="text-white block">Human-in-the-Loop Safeguards</strong>
                                        <span className="text-sm text-slate-400">Escalation logic, override controls, and compliance QA.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING: ENTERPRISE-GRADE AI (UPDATED CARDS) */}
            <section className="py-24 px-6 border-t border-slate-800 relative bg-slate-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise-Grade AI — Rented Monthly</h2>
                        <h3 className="text-xl text-slate-400 mb-8 font-light">Built for Real Businesses, Not AI Experiments</h3>
                        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl max-w-3xl mx-auto inline-block text-left relative">
                            <p className="text-slate-400 leading-relaxed text-center">
                                Most "AI tools" fail in production because they weren't designed for high-volume execution.
                                We provide orchestrated AI systems: LLMs, RAG, and Workflow Automation combined. <br />
                                <strong>You rent the output, not the complexity.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* TIER 1: THE INTERN */}
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col hover:border-green-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none"></div>

                            {/* Visual Header - UPDATED FIT */}
                            <div className="mb-6 rounded-2xl overflow-hidden h-64 relative border border-slate-800/50">
                                <img src="/tier1-team.png" alt="The Intern Team" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-3 left-4 bg-slate-950/80 px-3 py-1 rounded-full text-white font-bold text-sm backdrop-blur-md border border-slate-800">The Intern Team</div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-black text-white">$49</span>
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

                            <a
                                href="https://calendly.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 text-center block bg-slate-950 text-white border border-slate-700 rounded-xl font-bold hover:bg-green-900/20 hover:border-green-500/50 transition-all text-sm"
                            >
                                Book a Discovery Call
                            </a>
                        </div>

                        {/* TIER 2: THE PROFESSIONAL */}
                        <div className="bg-slate-900 border-2 border-blue-600/50 p-6 rounded-3xl flex flex-col relative shadow-[0_0_50px_rgba(29,78,216,0.15)] transform md:-translate-y-4">
                            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider uppercase shadow-lg z-10">Most Popular</div>

                            {/* Visual Header - UPDATED FIT */}
                            <div className="mb-6 rounded-2xl overflow-hidden h-64 relative border border-slate-800/50">
                                <img src="/tier2-team.png" alt="The Professional Team" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-3 left-4 bg-slate-950/80 px-3 py-1 rounded-full text-white font-bold text-sm backdrop-blur-md border border-slate-800">The Pro Team</div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-black text-white">$299</span>
                                    <span className="text-slate-500 font-medium">/mo</span>
                                </div>
                                <p className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4">Your Execution & Front Desk</p>
                            </div>

                            <div className="space-y-6 mb-8 flex-1">
                                {/* Agent 1 */}
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <img src="/avatar-sarah.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Sarah" />
                                        <h4 className="text-white font-bold text-sm">SARAH — Receptionist (Voice)</h4>
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

                            <a
                                href="https://calendly.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 text-center block bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 text-sm"
                            >
                                Book a Discovery Call
                            </a>
                        </div>

                        {/* TIER 3: THE FACTORY */}
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col hover:border-purple-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none"></div>

                            {/* Visual Header - UPDATED FIT */}
                            <div className="mb-6 rounded-2xl overflow-hidden h-64 relative border border-slate-800/50">
                                <img src="/tier3-team.png" alt="The Factory Team" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-3 left-4 bg-slate-950/80 px-3 py-1 rounded-full text-white font-bold text-sm backdrop-blur-md border border-slate-800">The Factory Team</div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-black text-white">$1,500</span>
                                    <span className="text-2xl text-white font-bold">+</span>
                                    <span className="text-slate-500 font-medium ml-1">/mo</span>
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
                                {/* Agent 2 */}
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <img src="/avatar-victoria.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Victoria" />
                                        <h4 className="text-white font-bold text-sm">VICTORIA — Head of Talent</h4>
                                    </div>
                                    <ul className="text-xs text-slate-400 space-y-1 pl-14">
                                        <li>• Candidate sourcing & scoring</li>
                                        <li>• 10-min voice screening</li>
                                        <li>• Automated onboarding</li>
                                    </ul>
                                </div>
                                {/* Agent 3 */}
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <img src="/avatar-atlas.png" className="w-10 h-10 rounded-full border border-slate-700 object-cover shadow-sm bg-slate-800" alt="Atlas" />
                                        <h4 className="text-white font-bold text-sm">ATLAS — Ops Chief</h4>
                                    </div>
                                    <ul className="text-xs text-slate-400 space-y-1 pl-14">
                                        <li>• Connects payments/CRM/Fulfillment</li>
                                        <li>• Auto-contracts & invoices</li>
                                        <li>• Manages "Content Empire"</li>
                                    </ul>
                                </div>
                            </div>

                            <a
                                href="https://calendly.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 text-center block bg-slate-950 text-white border border-slate-700 rounded-xl font-bold hover:bg-purple-900/20 hover:border-purple-500/50 transition-all text-sm"
                            >
                                Book a Discovery Call
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="py-24 text-center bg-slate-900 border-t border-slate-800">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">Ready to Scale Without Hiring?</h2>
                    <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                        AI-native companies are already replacing traditional teams.
                        The only question is whether you adopt this infrastructure now—or compete against companies that already have.
                    </p>
                    <button
                        onClick={() => handleRent('Custom Implementation', 'I need a custom AI solution for scaling.')}
                        className="bg-white text-slate-950 px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-200 transition-colors shadow-2xl flex items-center gap-3 mx-auto"
                    >
                        Deploy Your AI Agent Today <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            <Footer />

            {/* BUILDER MODAL */}
            {showBuilder && (
                <CustomAgentBuilder
                    onClose={() => setShowBuilder(false)}
                    initialAgentName={selectedAgent?.name}
                    initialAgentRole={selectedAgent?.role}
                />
            )}
        </main>
    );
}
