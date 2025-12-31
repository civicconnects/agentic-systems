import React from 'react';
import { UserPlus, FileSearch, Clock, ShieldCheck, Rocket, ArrowRight, AlertTriangle, Zap } from 'lucide-react';

const HROnboardingFlow = () => {
    return (
        <section className="py-16 bg-slate-50/50 font-sans">
            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                <h3 className="text-2xl font-bold text-slate-800">HR & Talent Operations</h3>
                <p className="text-slate-500">From "Welcome Email" to "Day One Ready" in minutes, not weeks.</p>
            </div>

            <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center justify-between gap-6 p-10 bg-white rounded-[2.5rem] shadow-xl border border-slate-100">

                {/* STEP 1: Candidate Sign-off */}
                <div className="flex flex-col items-center w-40">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                        <UserPlus size={28} />
                    </div>
                    <div className="mt-3 text-center">
                        <span className="block text-xs font-black text-slate-400 uppercase tracking-widest">Stage 1</span>
                        <span className="text-sm font-bold text-slate-700">Offer Accepted</span>
                    </div>
                </div>

                <ArrowRight className="hidden md:block text-slate-200" />

                {/* STEP 2: The Manual Bottleneck (Real World Friction) */}
                <div className="flex flex-col items-center relative w-48 p-4 bg-red-50/30 rounded-2xl border-2 border-dashed border-red-200">
                    <div className="absolute -top-4 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                        FRICTION POINT
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-red-400 shadow-sm">
                        <FileSearch size={28} />
                    </div>
                    <div className="mt-3 text-center">
                        <span className="block text-sm font-black text-red-700 uppercase">Manual KYC/I-9</span>
                        <div className="flex flex-col gap-1 mt-1">
                            <span className="text-[10px] text-red-500 font-bold flex items-center justify-center gap-1">
                                <AlertTriangle size={10} /> Signature Follow-ups
                            </span>
                            <span className="text-[10px] text-red-500 font-bold flex items-center justify-center gap-1">
                                <Clock size={10} /> 3-5 Day Latency
                            </span>
                        </div>
                    </div>
                </div>

                <ArrowRight className="hidden md:block text-slate-200" />

                {/* STEP 3: THE SOVEREIGN ENGINE */}
                <div className="relative group w-56">
                    {/* Animated Glow for the Agent */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative flex flex-col items-center p-5 bg-white rounded-2xl border-2 border-orange-500 shadow-2xl transform transition duration-500 group-hover:scale-105">
                        <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg mb-3">
                            <Zap size={32} fill="white" />
                        </div>
                        <div className="text-center">
                            <span className="block text-[10px] font-black text-orange-600 uppercase tracking-tighter">Sovereign HR Agent</span>
                            <p className="text-xs font-bold text-slate-900 leading-tight mt-1">
                                Auto-Verification & IT Provisioning
                            </p>
                        </div>
                    </div>
                </div>

                <ArrowRight className="hidden md:block text-orange-500" />

                {/* STEP 4: Success State */}
                <div className="flex flex-col items-center w-40">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                        <Rocket size={28} />
                    </div>
                    <div className="mt-3 text-center">
                        <span className="block text-xs font-black text-emerald-600 uppercase tracking-widest">Final State</span>
                        <span className="text-sm font-black text-slate-900 tracking-tight">Day One Ready</span>
                        <span className="block text-[10px] text-emerald-500 font-bold italic">Zero-Manual Input</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HROnboardingFlow;
