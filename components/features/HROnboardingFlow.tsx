import React from 'react';
import { UserPlus, Cpu, UserCheck, FileText, MailWarning, Clock, ShieldAlert, ArrowRight } from 'lucide-react';

const HROnboardingFlow = () => {
    return (
        <div className="max-w-6xl mx-auto p-12 bg-white rounded-[3rem] border border-slate-100 shadow-2xl font-sans overflow-hidden">

            {/* HEADER SECTION */}
            <div className="text-center mb-20">
                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                    HR Department: <span className="text-orange-600">The Onboarding Conveyor</span>
                </h2>
                <p className="text-slate-500 font-medium">Watch the magnitude of difference between manual friction and agentic velocity.</p>
            </div>

            {/* 1. MANUAL "BROKEN" FLOW */}
            <div className="mb-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 mb-6">
                    <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Manual Legacy Process</span>
                    <span className="text-red-500 text-xs font-bold animate-pulse">● Fragmented & Slow</span>
                </div>

                <div className="flex justify-between items-start relative px-4">
                    {/* Jagged Connectors */}
                    <div className="absolute top-8 left-0 w-full h-[2px] bg-dashed border-t-2 border-dashed border-slate-300 -z-10" />

                    {[
                        { icon: <FileText />, label: "Manual Review", delay: "+3 Days" },
                        { icon: <MailWarning />, label: "Email Chains", delay: "+5 Days" },
                        { icon: <Clock />, label: "BG Check Lag", delay: "+7 Days" },
                        { icon: <ShieldAlert />, label: "IT Queue", delay: "+4 Days" }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center bg-white px-4">
                            <div className="w-16 h-16 rounded-xl border-2 border-slate-200 flex items-center justify-center text-slate-400">
                                {step.icon}
                            </div>
                            <span className="mt-3 text-[11px] font-bold text-slate-500 uppercase">{step.label}</span>
                            <span className="text-red-400 text-[10px] font-mono font-bold mt-1">{step.delay}</span>
                        </div>
                    ))}

                    <div className="flex flex-col items-center">
                        <div className="text-3xl font-black text-slate-300 italic">~21 DAYS</div>
                    </div>
                </div>
            </div>

            {/* 2. THE CONVEYOR BELT (AGENTIC FLOW) */}
            <div className="relative pt-10 pb-16 px-10 bg-slate-50 rounded-[2.5rem] border border-orange-100 shadow-inner group">

                <div className="flex items-center gap-2 mb-10">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Sovereign AI Factory</span>
                    <span className="text-orange-600 text-xs font-bold animate-bounce">● High Velocity</span>
                </div>

                {/* THE CONVEYOR TRACK ANIMATION */}
                <div className="absolute bottom-20 left-10 right-10 h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="conveyor-move h-full w-[200%] bg-[length:40px_100%] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent opacity-50"
                        style={{ backgroundImage: 'linear-gradient(90deg, transparent 25%, #ea580c 50%, transparent 75%)', backgroundSize: '80px 100%' }} />
                </div>

                <div className="flex justify-between items-center relative z-10">

                    {/* START: Input */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-orange-100 flex items-center justify-center text-orange-600">
                            <UserPlus size={36} />
                        </div>
                        <span className="mt-4 text-xs font-black text-slate-800 uppercase tracking-tighter">Candidate Applied</span>
                    </div>

                    <ArrowRight className="text-orange-300 animate-pulse" />

                    {/* THE ENGINE: AI Agent RPA */}
                    <div className="relative group">
                        {/* Pulsing Aura */}
                        <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse" />

                        <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-orange-500 to-orange-800 flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white transform group-hover:scale-110 transition-transform duration-500">
                            <Cpu size={50} className="animate-spin-slow" />
                            <span className="mt-2 text-[10px] font-black tracking-widest uppercase">Orchestrator</span>

                            {/* Spinning Mini-Tasks Labels */}
                            <div className="absolute -top-6 bg-slate-900 text-[8px] px-2 py-1 rounded text-orange-300 font-mono border border-orange-500">Auto-Contract</div>
                            <div className="absolute -bottom-6 bg-slate-900 text-[8px] px-2 py-1 rounded text-orange-300 font-mono border border-orange-500">IT Provisioning</div>
                        </div>
                    </div>

                    <ArrowRight className="text-orange-300 animate-pulse" />

                    {/* END: Result */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(234,88,12,0.5)] border-4 border-orange-200">
                            <UserCheck size={44} />
                        </div>
                        <div className="mt-4 text-center">
                            <span className="block text-[10px] font-black text-orange-600 uppercase">Magnitude</span>
                            <span className="text-2xl font-black text-slate-900 tracking-tighter">READY IN 24H</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* CSS FOR CONVEYOR MOTION */}
            <style>{`
        @keyframes conveyor {
          0% { background-position: 0 0; }
          100% { background-position: 160px 0; }
        }
        .conveyor-move {
          animation: conveyor 2s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default HROnboardingFlow;
