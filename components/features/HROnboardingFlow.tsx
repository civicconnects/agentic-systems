import React from 'react';
import { UserPlus, Cpu, User, FileText, Mail, Clock, Shield, Zap } from 'lucide-react';

const HROnboardingFlow = () => {
    return (
        <section className="py-20 bg-slate-950 font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                {/* HEADER SECTION */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        The Onboarding Magnitude
                    </h2>
                    <p className="text-slate-400 font-medium text-lg">Comparing Friction vs. Agentic Velocity</p>
                </div>

                {/* MANUAL PATH - THE FRICTION */}
                <div className="mb-12 relative">
                    <div className="absolute -left-8 top-0 h-full flex items-center">
                        <span className="text-red-500 font-black text-sm uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
                            Manual Legacy
                        </span>
                    </div>

                    <div className="relative bg-slate-800/50 rounded-[2.5rem] border-2 border-slate-700 p-10">
                        <div className="flex justify-between items-center relative">

                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-0 right-0 h-[2px] border-t-2 border-dashed border-slate-600 -translate-y-1/2 -z-10" />

                            {[
                                { icon: <FileText size={32} />, label: "Resume Pile", day: "Day 1" },
                                { icon: <Mail size={32} />, label: "Email Chasing", day: "Day 5" },
                                { icon: <Clock size={32} />, label: "BG Check Lag", day: "Day 12" },
                                { icon: <Clock size={32} />, label: "BG Check Lag", day: "Day 12" },
                                { icon: <Shield size={32} />, label: "IT Provisioning", day: "Day 38" }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center bg-slate-800/50 px-4 relative z-10">
                                    <div className="w-20 h-20 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center text-slate-400">
                                        {step.icon}
                                    </div>
                                    <span className="mt-3 text-xs font-bold text-slate-300 uppercase text-center">{step.label}</span>
                                    <span className="text-orange-400 text-xs font-bold mt-1">{step.day}</span>
                                </div>
                            ))}

                            <div className="flex flex-col items-center ml-6">
                                <div className="text-3xl font-black text-orange-500">21+</div>
                                <div className="text-3xl font-black text-orange-500">21 DAYS</div>
                                <span className="text-xs text-orange-400 uppercase mt-1">TO START</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="flex items-center justify-center my-12 relative">
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                    <div className="relative bg-orange-600 px-8 py-3 rounded-full font-black text-sm text-white shadow-[0_0_30px_rgba(234,88,12,0.6)] animate-bounce">
                        SAVE 20 DAYS OF PRODUCTIVITY
                    </div>
                </div>

                {/* AGENTIC PATH - THE POWER */}
                <div className="relative">
                    <div className="absolute -left-8 top-0 h-full flex items-center">
                        <span className="text-orange-500 font-black text-sm uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
                            Agentic Factory
                        </span>
                    </div>

                    <div className="relative bg-orange-950/30 rounded-[2.5rem] border-2 border-orange-800/50 p-10">

                        {/* Animated Conveyor Belt Border */}
                        <div className="absolute bottom-12 left-10 right-10 h-1 bg-orange-900/30 rounded-full overflow-hidden">
                            <div className="absolute inset-0 border-t-2 border-dashed border-orange-500/40" />
                            <div className="conveyor-dots h-full w-[200%]"
                                style={{
                                    backgroundImage: 'radial-gradient(circle, #ea580c 2px, transparent 2px)',
                                    backgroundSize: '40px 40px'
                                }} />
                        </div>

                        <div className="flex justify-between items-center relative z-10">

                            {/* START */}
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-2xl bg-slate-800 border-2 border-orange-600/50 flex items-center justify-center text-orange-400">
                                    <div className="text-center">
                                        <div className="text-2xl font-black">32</div>
                                    </div>
                                </div>
                                <span className="mt-3 text-xs font-bold text-slate-300 uppercase">Application In</span>
                            </div>

                            {/* SOVEREIGN AI ENGINE */}
                            <div className="relative flex-1 flex justify-center">
                                <div className="relative">
                                    {/* Pulsing Glow */}
                                    <div className="absolute inset-0 bg-orange-500 blur-[60px] opacity-30 animate-pulse" />

                                    {/* Main AI Circle */}
                                    <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 border-4 border-orange-300/30 flex flex-col items-center justify-center shadow-2xl">
                                        <Cpu size={56} className="text-white mb-2 animate-spin-slow" />
                                        <span className="text-xs font-black text-white uppercase tracking-wider">Sovereign AI</span>
                                    </div>

                                    {/* Callout Labels */}
                                    <div className="absolute -top-8 -right-12 bg-orange-900/80 border border-orange-600 px-3 py-1.5 rounded-lg text-xs text-orange-200 font-mono whitespace-nowrap">
                                        Auto-IT Setup
                                    </div>
                                    <div className="absolute -bottom-8 -left-12 bg-orange-900/80 border border-orange-600 px-3 py-1.5 rounded-lg text-xs text-orange-200 font-mono whitespace-nowrap">
                                        Policy Training AI
                                    </div>
                                    <div className="absolute top-1/2 -right-20 bg-orange-900/80 border border-orange-600 px-3 py-1.5 rounded-lg text-xs text-orange-200 font-mono whitespace-nowrap -translate-y-1/2">
                                        lo 24 HO-33
                                    </div>
                                </div>
                            </div>

                            {/* END RESULT */}
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full bg-orange-600 border-4 border-orange-400/30 flex items-center justify-center text-white shadow-[0_0_30px_rgba(234,88,12,0.5)]">
                                    <User size={48} />
                                </div>
                                <span className="mt-3 text-xs font-bold text-orange-400 uppercase">Employee Ready</span>
                                <div className="text-2xl font-black text-white mt-1">{'<'} 24 HOURS</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* CSS ANIMATIONS */}
            <style>{`
        @keyframes conveyor-dots {
          0% { background-position: 0 0; }
          100% { background-position: 80px 0; }
        }
        .conveyor-dots {
          animation: conveyor-dots 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </section>
    );
};

export default HROnboardingFlow;
