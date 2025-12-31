import React from 'react';
import { PhoneIncoming, UserX, Search, Bot, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

const CallCenterFlow = () => {
    return (
        <section className="py-20 bg-white font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                        Automation across your enterprise.
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Eliminate friction points. Turn 2-week delays into sub-minute resolutions.
                    </p>
                </div>

                {/* The Flow Container */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm">

                    {/* STEP 1: Inbound */}
                    <div className="flex flex-col items-center group">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-slate-400 transition-colors">
                            <PhoneIncoming size={28} />
                        </div>
                        <span className="mt-3 text-sm font-bold text-slate-500 uppercase tracking-wider">Call Inbound</span>
                    </div>

                    <ArrowRight className="hidden md:block text-slate-300" />

                    {/* STEP 2: The Friction Point (Human + Error) */}
                    <div className="flex flex-col items-center relative">
                        <div className="w-20 h-20 rounded-2xl bg-orange-50 border-2 border-orange-200 flex flex-col items-center justify-center text-orange-600 shadow-inner">
                            <UserX size={32} />
                            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1 animate-pulse">
                                <AlertCircle size={10} /> ERRORS
                            </div>
                        </div>
                        <div className="mt-3 text-center">
                            <span className="block text-sm font-black text-orange-800 uppercase">Manual Auth</span>
                            <span className="text-[10px] text-orange-400 font-medium italic">30% Transfer Rate</span>
                        </div>
                    </div>

                    <ArrowRight className="hidden md:block text-slate-300" />

                    {/* STEP 3: Triage */}
                    <div className="flex flex-col items-center opacity-40">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400">
                            <Search size={28} />
                        </div>
                        <span className="mt-3 text-sm font-bold text-slate-500 uppercase tracking-wider">Issue Triage</span>
                    </div>

                    {/* THE SOVEREIGN BRIDGE - Visual Break */}
                    <div className="flex items-center px-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-slate-200 to-orange-500 rounded-full hidden md:block" />
                    </div>

                    {/* STEP 4: THE HERO (Sovereign AI Factory) */}
                    <div className="relative flex flex-col items-center group scale-110">
                        {/* Dopamine Glow Effect */}
                        <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />

                        <div className="relative w-24 h-24 rounded-3xl bg-orange-600 flex flex-col items-center justify-center text-white shadow-[0_10px_30px_rgba(234,88,12,0.4)] transform group-hover:-translate-y-2 transition-transform duration-300 border-2 border-orange-400">
                            <Bot size={40} className="mb-1" />
                            <span className="text-[10px] font-black tracking-tighter uppercase">AI AGENT RPA</span>
                        </div>
                        <div className="mt-4 text-center">
                            <span className="block text-md font-black text-slate-900">Sovereign Routing</span>
                            <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded-full font-bold">INSTANT RESOLUTION</span>
                        </div>
                    </div>

                    <ArrowRight className="hidden md:block text-orange-500" />

                    {/* STEP 5: Final Reward */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border-2 border-emerald-200">
                            <CheckCircle2 size={40} />
                        </div>
                        <div className="mt-3 text-center">
                            <span className="block text-sm font-black text-emerald-800 uppercase">Call Resolved</span>
                            <span className="text-lg font-black text-slate-900 tracking-tighter">{'<'} 60 SECONDS</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CallCenterFlow;
