import React, { useState } from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, Rocket, Building2 } from 'lucide-react';

const ConsultantPricing = () => {
    return (
        <section className="py-24 bg-slate-950/50 border-t border-slate-900 font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-20 relative z-10">
                    <div className="inline-block mb-4">
                        <span className="py-1 px-3 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-800">
                            Partnership Models
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Ready to Build Your <span className="text-blue-500">Agentic Future?</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                        We don't sell software licenses. We build sovereign AI asset classes for your balance sheet. Choose your engagement level.
                    </p>
                </div>

                {/* TIERS GRID */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">

                    {/* TIER 1: PILOT */}
                    <div className="bg-slate-900 rounded-[2rem] p-8 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col relative group">
                        <div className="mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 mb-6 group-hover:scale-110 transition-transform">
                                <Rocket size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Proof of Concept</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Perfect for validating a single automated workflow before scaling. See the ROI in your own environment.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {['1 Custom AI Agent Workflow', 'CRM / Database Integration', 'ROI Performance Report', '2-Week Delivery Sprint'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 rounded-xl bg-slate-800 text-white font-bold text-sm tracking-wide hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                            Book Discovery Call <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* TIER 2: GROWTH (POPULAR) */}
                    <div className="bg-blue-900/10 rounded-[2rem] p-8 border border-blue-500/30 relative flex flex-col group overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400" />

                        <div className="mb-6 relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:rotate-3 transition-transform">
                                    <ShieldCheck size={28} />
                                </div>
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wide">
                                    Most Popular
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Growth Partner</h3>
                            <p className="text-blue-200/70 text-sm leading-relaxed">
                                We act as your dedicated AI Department. Continuous build, optimization, and monitoring of your agentic workforce.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1 relative z-10">
                            {['Unlimited Workflow Builds', 'Multi-Agent Orchestration', '24/7 Server Monitoring', 'Weekly Strategy Sessions', 'Priority Slack Channel'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <ShieldCheck size={12} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-sm tracking-wide hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 relative z-10">
                            Schedule Strategy Session <Calendar size={16} />
                        </button>
                    </div>

                    {/* TIER 3: ENTERPRISE */}
                    <div className="bg-slate-900 rounded-[2rem] p-8 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col group">
                        <div className="mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 mb-6 group-hover:scale-110 transition-transform">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Enterprise Scale</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Full-scale digital transformation. Custom LLM training, on-premise deployment, and autonomous swarms.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {['Custom LLM Fine-Tuning', 'On-Premise / Private Cloud', 'SLA-Backed Performance', 'Dedicated Solutions Architect', 'Employee AI Training'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 rounded-xl bg-slate-800 text-white font-bold text-sm tracking-wide hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                            Contact Sales <Phone size={16} />
                        </button>
                    </div>

                </div>

                {/* NOT SURE? ACTION */}
                <div className="text-center">
                    <p className="text-slate-500 mb-4 text-sm font-medium">Not sure where to start?</p>
                    <button className="inline-flex items-center gap-2 text-white font-bold border-b border-blue-500 pb-0.5 hover:text-blue-400 transition-colors">
                        Take our 2-minute Automation Audit <ArrowRight size={16} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ConsultantPricing;
