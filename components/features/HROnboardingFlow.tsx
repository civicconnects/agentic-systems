import React from 'react';
import { UserPlus, FileSearch, Clock, ShieldCheck, Rocket, ArrowRight, AlertTriangle, Zap, CheckCircle2, Users, Briefcase } from 'lucide-react';

const HROnboardingFlow = () => {
    return (
        <section className="py-20 bg-slate-50/50 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                        HR Department: From Paperwork to Performance.
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Eliminate manual follow-ups for IT, Badging, and Training.
                    </p>
                </div>

                {/* The Flow Container */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl">

                    {/* STEP 1: Manual Intake */}
                    <div className="flex flex-col items-center group">
                        <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-slate-400 transition-colors">
                            <Briefcase size={28} />
                        </div>
                        <span className="mt-3 text-sm font-bold text-slate-500 uppercase tracking-wider">Manual Intake</span>
                        <span className="text-[10px] text-slate-400 italic">Job Req & Background</span>
                    </div>

                    <ArrowRight className="hidden md:block text-slate-300 animate-pulse" />

                    {/* STEP 2: Coordination Chaos (The Friction Point) */}
                    <div className="flex flex-col items-center relative">
                        <div className="w-24 h-24 rounded-2xl bg-red-50 border-2 border-red-200 flex flex-col items-center justify-center text-red-600 shadow-inner relative">
                            <Users size={32} />
                            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1 animate-pulse">
                                <AlertTriangle size={10} /> DELAY
                            </div>
                        </div>
                        <div className="mt-3 text-center">
                            <span className="block text-sm font-black text-red-800 uppercase">Coordination Chaos</span>
                            <span className="text-[10px] text-red-500 font-bold">IT • Badges • Parking • Lunches</span>
                            <span className="block text-[10px] text-red-400 font-medium italic mt-1">Average 4-day lag per dept.</span>
                        </div>
                    </div>

                    <ArrowRight className="hidden md:block text-slate-300 animate-pulse" />

                    {/* STEP 3: THE SOVEREIGN ORCHESTRATOR */}
                    <div className="relative flex flex-col items-center group scale-110">
                        {/* Dopamine Glow Effect */}
                        <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />

                        <div className="relative w-28 h-28 rounded-3xl bg-orange-600 flex flex-col items-center justify-center text-white shadow-[0_10px_30px_rgba(234,88,12,0.4)] transform group-hover:-translate-y-2 transition-transform duration-300 border-2 border-orange-400">
                            <Zap size={44} className="mb-1" fill="white" />
                            <span className="text-[9px] font-black tracking-tighter uppercase">AGENTIC ORCHESTRATOR</span>
                        </div>
                        <div className="mt-4 text-center">
                            <span className="block text-md font-black text-slate-900">Sovereign Routing</span>
                            <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded-full font-bold">AUTO-PROVISION</span>
                            <span className="block text-[10px] text-slate-500 font-bold mt-1">85% overhead reduction</span>
                        </div>
                    </div>

                    <ArrowRight className="hidden md:block text-orange-500" />

                    {/* STEP 4: Ready to Perform (Dopamine Pop) */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-bounce">
                            <CheckCircle2 size={40} />
                        </div>
                        <div className="mt-3 text-center">
                            <span className="block text-sm font-black text-emerald-800 uppercase">Ready to Perform</span>
                            <span className="text-lg font-black text-slate-900 tracking-tighter">DAY 1</span>
                            <span className="block text-[10px] text-emerald-500 font-bold italic">Fully Integrated</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HROnboardingFlow;
