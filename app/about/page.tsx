"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
    Cpu,
    Network,
    Shield,
    Bot,
    Zap,
    Layers,
    Users,
    Briefcase,
    Home,
    CheckCircle,
    ArrowRight,
    Database,
    Code
} from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-950 text-slate-200 font-sans">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
                        <Bot className="w-3 h-3" /> Digital Labor Revolution
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8">
                        ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">AI HUB AGENCY</span>
                    </h1>
                    <p className="text-2xl text-slate-300 max-w-3xl mx-auto font-light">
                        The Future Isn’t Hiring. <span className="font-bold text-white">It’s Installing.</span>
                    </p>
                </div>
            </section>

            {/* --- BRAND STORY --- */}
            <section className="py-24 px-6 bg-slate-900 border-y border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                            <Bot className="w-8 h-8 text-blue-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white tracking-wide">THE BRAND STORY</h2>
                    </div>

                    <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                        <p>
                            We are <strong className="text-white">AI Hub Agency</strong>, an automation foundry built for the next era of commerce. As the world transitions from the screen-based past to an automated future defined by seamless integration, the traditional labor model is shifting.
                        </p>
                        <p className="text-xl font-medium text-white border-l-4 border-blue-500 pl-6 py-2 my-8 bg-slate-950/50 rounded-r-lg">
                            We do not merely sell software licenses; <span className="text-blue-400">we lease digital labor.</span>
                        </p>
                        <p>
                            Our mission is precise: to equip forward-thinking businesses and individuals with the architecture needed to bridge the gap between human creativity and machine efficiency. We are the "AI Factory" that powers your transition into the new economy.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- BUSINESS MODEL --- */}
            <section className="py-24 px-6 relative overflow-hidden">
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-start">

                        {/* Left Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                                    <Layers className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-wide">THE BUSINESS MODEL</h2>
                            </div>
                            <h3 className="text-2xl text-white font-semibold mb-6">Transparent Pricing. Infinite Leverage.</h3>
                            <p className="text-slate-400 mb-8 text-lg">
                                Complexity is our burden, not yours. We operate on a streamlined <strong className="text-white">"Setup + Lease"</strong> model designed for maximum ROI and minimal friction.
                            </p>

                            <div className="py-6 px-8 bg-emerald-900/10 border border-emerald-500/20 rounded-2xl mb-8">
                                <p className="text-emerald-300 font-bold text-xl text-center">"You pay for results, not hours."</p>
                            </div>
                        </div>

                        {/* Right Cards */}
                        <div className="flex-1 grid gap-6 w-full">
                            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-all group">
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 group-hover:border-emerald-500/50 transition-colors">
                                        <Code className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">1. The Build (Calibration)</h4>
                                        <p className="text-slate-400">A one-time architectural fee. We don't deploy generic templates; we tailor the intelligence to your specific workflow, voice, and operational constraints.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-all group">
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 group-hover:border-emerald-500/50 transition-colors">
                                        <Zap className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">2. The Rental (Lease)</h4>
                                        <p className="text-slate-400">A flat monthly fee to keep your digital workforce operational. Your agents run 24/7. They require no benefits, take no sick days, and leave no gaps in coverage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- TECH STACK --- */}
            <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 mb-6">
                            <Cpu className="w-8 h-8 text-purple-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white tracking-wide mb-4">THE TECH STACK</h2>
                        <h3 className="text-2xl text-slate-300">Orchestrated Intelligence</h3>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>

                        <p className="text-slate-300 text-lg leading-relaxed text-center mb-10">
                            We are platform-agnostic but performance-obsessed. We reject the "wrapper" approach of simply repackaging ChatGPT. Instead, we utilize <strong className="text-white">Hybrid Orchestration</strong>.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800 mb-4 group-hover:border-purple-500/50 transition-colors">
                                    <div className="text-2xl font-black text-slate-600 group-hover:text-white transition-colors">Py</div>
                                </div>
                                <h4 className="text-white font-bold mb-2">Python Logic</h4>
                                <p className="text-sm text-slate-500">Complex computational logic</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800 mb-4 group-hover:border-purple-500/50 transition-colors">
                                    <Network className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-white font-bold mb-2">n8n Workflows</h4>
                                <p className="text-sm text-slate-500">Enterprise automation</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800 mb-4 group-hover:border-purple-500/50 transition-colors">
                                    <Cpu className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-white font-bold mb-2">Specialized LLMs</h4>
                                <p className="text-sm text-slate-500">Cognitive decision making</p>
                            </div>
                        </div>

                        <div className="mt-10 pt-10 border-t border-slate-900 text-center">
                            <p className="text-slate-400 italic">
                                Our autonomous systems do not live in a vacuum; they connect directly to your CRM, your VoIP lines, and even your Smart Home infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- THE CATALOG --- */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                            <Database className="w-8 h-8 text-blue-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white tracking-wide">THE CATALOG</h2>
                        <span className="text-slate-500 text-lg font-medium ml-auto hidden md:block">Our Core Offerings</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Offer 1 */}
                        <div className="group bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                            <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">01. Flagship</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Rent-an-Agent</h3>
                            <p className="text-blue-200 font-medium text-sm mb-6">The smartest hire you’ll never meet.</p>

                            <p className="text-slate-400 text-sm mb-8">
                                Designed for agile entrepreneurs and small businesses, this service allows you to deploy specialized digital workers for a fraction of the cost.
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-blue-500" /> 24/7 Receptionist
                                </li>
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-blue-500" /> The Lead Scraper
                                </li>
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-blue-500" /> The Content Writer
                                </li>
                            </ul>

                            <a href="/rent-an-agent" className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                                View Agents <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Offer 2 */}
                        <div className="group bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                            <div className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-4">02. Business Growth</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Departmental Autos</h3>
                            <p className="text-emerald-200 font-medium text-sm mb-6">Scale revenue, not headcount.</p>

                            <p className="text-slate-400 text-sm mb-8">
                                For mature operations, we move beyond tasks to automate entire functional pillars of your organization using multi-agent swarms.
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-emerald-500" /> The AI Call Center
                                </li>
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-emerald-500" /> The HR Shield
                                </li>
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-emerald-500" /> The Sales Force
                                </li>
                            </ul>

                            <a href="/factory" className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                                Start Building <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Offer 3 */}
                        <div className="group bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-purple-500/50 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                            <div className="text-purple-500 text-xs font-bold uppercase tracking-widest mb-4">03. The HomeOS</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Private Intelligence</h3>
                            <p className="text-purple-200 font-medium text-sm mb-6">Your private digital butler.</p>

                            <p className="text-slate-400 text-sm mb-8">
                                A bespoke service for VIPs. We build privacy-first systems designed to manage the logistics of high-performance living, A.T.L.A.S. style.
                            </p>

                            <div className="mb-6 p-4 bg-purple-900/10 rounded-xl border border-purple-500/20">
                                <p className="text-xs font-bold text-center text-purple-300 italic mb-2">"Let A.T.L.A.S. carry the weight of your world."</p>
                                <ul className="space-y-1 text-xs text-slate-400">
                                    <li><strong className="text-purple-400">A</strong>utomated <strong className="text-purple-400">T</strong>echnology (Hardware)</li>
                                    <li><strong className="text-purple-400">L</strong>ogistics (Movement)</li>
                                    <li><strong className="text-purple-400">A</strong>dministration (Business)</li>
                                    <li><strong className="text-purple-400">S</strong>ystem</li>
                                </ul>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-purple-500" /> Security & Logistics
                                </li>
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-purple-500" /> Data Sovereignty
                                </li>
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-purple-500" /> Home Integration
                                </li>
                            </ul>

                            <a href="/contact" className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                                Request Access <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
