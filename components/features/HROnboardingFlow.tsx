import React from 'react';
import { UserPlus, UserCheck, Cpu, Clock, AlertTriangle, FileSearch, Users } from 'lucide-react';

const HROnboardingFlow = () => {
    return (
        <div className="py-20 bg-slate-950 font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        HR Department: From Paperwork to Performance.
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Eliminate manual follow-ups for IT, Badging, and Training.
                    </p>
                </div>

                {/* LEGACY PATH - THE PAIN */}
                <div className="relative mb-8">
                    <div className="absolute -left-4 top-0 border-l-4 border-red-500 h-full pl-4 flex items-center">
                        <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-red-500 [writing-mode:vertical-lr] rotate-180">Legacy Process</span>
                    </div>

                    <div className="flex justify-between items-center px-10 bg-red-500/5 rounded-3xl py-10 border border-red-500/20">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-red-400 border border-red-500/50">
                                <UserPlus size={32} />
                            </div>
                            <span className="text-xs mt-3 font-black uppercase text-slate-300">New Hire</span>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-red-400 border border-red-500/30">
                                    <FileSearch size={24} />
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-red-400 border border-red-500/30">
                                    <Users size={24} />
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-red-400 border border-red-500/30 animate-pulse">
                                    <AlertTriangle size={24} />
                                </div>
                            </div>
                            <div className="text-center">
                                <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider">Manual Coordination</span>
                                <p className="text-xs text-slate-500 mt-1">IT • Badges • Parking • Training</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center ml-8">
                            <div className="text-red-500 font-black text-2xl uppercase tracking-tighter">21+ DAYS</div>
                            <span className="text-[10px] text-red-400">TO START</span>
                        </div>
                    </div>
                </div>

                {/* THE DIVIDER / MAGNITUDE GAP */}
                <div className="flex items-center justify-center my-10">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full absolute" />
                    <div className="relative bg-orange-600 px-6 py-2 rounded-full font-black text-sm shadow-[0_0_30px_rgba(255,87,34,0.6)] animate-bounce text-white">
                        SAVE 20 DAYS OF PRODUCTIVITY
                    </div>
                </div>

                {/* AGENTIC PATH - THE POWER */}
                <div className="relative group">
                    <div className="absolute -left-4 top-0 border-l-4 border-orange-500 h-full pl-4 flex items-center">
                        <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-orange-500 [writing-mode:vertical-lr] rotate-180">Agentic Factory</span>
                    </div>

                    <div className="flex justify-between items-center px-10 bg-orange-500/5 rounded-3xl py-10 border border-orange-500/20">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-orange-400 border border-orange-500/50">
                                <UserPlus size={32} />
                            </div>
                            <span className="text-xs mt-3 font-black uppercase text-slate-300">Application In</span>
                        </div>

                        <div className="flex-1 flex items-center justify-center px-10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-orange-500 blur-[40px] opacity-40 animate-pulse" />
                                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 flex flex-col items-center justify-center shadow-2xl border-4 border-white/20">
                                    <Cpu size={48} className="text-white" />
                                    <span className="text-[10px] font-black text-white mt-1 uppercase tracking-tighter">Sovereign AI</span>
                                </div>
                                {/* Emerging Beams */}
                                <div className="absolute -top-10 -right-10 text-[9px] bg-slate-800 border border-orange-500/50 p-2 rounded text-orange-300 font-mono">Auto-IT Setup</div>
                                <div className="absolute -bottom-10 -left-10 text-[9px] bg-slate-800 border border-orange-500/50 p-2 rounded text-orange-300 font-mono">Policy Training AI</div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                                <UserCheck size={32} />
                            </div>
                            <span className="text-xs mt-3 font-black uppercase text-orange-400 tracking-widest">Employee Ready</span>
                            <div className="mt-1 text-2xl font-black text-white">{'<'} 24 HOURS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HROnboardingFlow;
