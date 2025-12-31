import React from 'react';
import { PhoneIncoming, Calendar, HelpCircle, Mail, Phone, ArrowRight, Bot, CheckCircle2, Split, Clock } from 'lucide-react';

const CallCenterFlow = () => {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
                        Total Voice Automation
                    </h2>
                    <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                        One AI Voice Agent. Five Intelligent Outcomes. Zero Human Latency.
                    </p>
                </div>

                {/* AUTOMATION TREE */}
                <div className="relative max-w-6xl mx-auto">

                    {/* STEP 1: INBOUND - THE TRIGGER */}
                    <div className="flex justify-center mb-16 relative z-10">
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full bg-slate-50 border-4 border-slate-100 flex items-center justify-center text-slate-400 shadow-lg animate-pulse">
                                <PhoneIncoming size={40} />
                            </div>
                            <span className="mt-4 text-sm font-black text-slate-500 uppercase tracking-widest">Inbound Call</span>
                        </div>
                    </div>

                    {/* CONNECTION LINE VERTICAL */}
                    <div className="absolute top-24 left-1/2 w-[2px] h-24 bg-gradient-to-b from-slate-200 to-blue-500 -translate-x-1/2 -z-10" />

                    {/* STEP 2: THE BRAIN (AI AGENT) */}
                    <div className="flex justify-center mb-20 relative z-10">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>
                            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white">
                                <Bot size={48} />
                                <span className="text-[10px] font-black uppercase mt-2 tracking-widest">AI Receptionist</span>
                            </div>

                            {/* Intent Graphic */}
                            <div className="absolute -right-24 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <div className="w-16 h-[2px] bg-blue-200" />
                                <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-2 py-1 rounded-full uppercase">Intent Detection</span>
                            </div>
                        </div>
                    </div>

                    {/* BRANCHING PATHS */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
                        {/* Horizontal Connector */}
                        <div className="absolute -top-10 left-[10%] right-[10%] h-[2px] bg-blue-100 border-t-2 border-dashed border-blue-300 rounded-full" />

                        {/* Vertical Connectors */}
                        {['10%', '30%', '50%', '70%', '90%'].map((pos, i) => (
                            <div key={i} className="absolute -top-10 h-10 w-[2px] bg-blue-300 border-l-2 border-dashed border-blue-300" style={{ left: pos }} />
                        ))}

                        {/* OUTCOME 1: ROUTING */}
                        <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-100 flex items-center justify-center text-blue-500 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                <Split size={28} />
                            </div>
                            <span className="mt-4 text-xs font-black text-slate-700 uppercase">Routing</span>
                            <span className="text-[10px] text-slate-400 text-center mt-1 px-2">Transfers to Sales or Support</span>
                        </div>

                        {/* OUTCOME 2: BOOKING */}
                        <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-100 flex items-center justify-center text-blue-500 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                <Calendar size={28} />
                            </div>
                            <span className="mt-4 text-xs font-black text-slate-700 uppercase">Scheduling</span>
                            <span className="text-[10px] text-slate-400 text-center mt-1 px-2">Books Appointment in Calendar</span>
                        </div>

                        {/* OUTCOME 3: FAQ (CENTER) */}
                        <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-100 flex items-center justify-center text-blue-500 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                <HelpCircle size={28} />
                            </div>
                            <span className="mt-4 text-xs font-black text-slate-700 uppercase">Q&A</span>
                            <span className="text-[10px] text-slate-400 text-center mt-1 px-2">Answers based on Knowledge Base</span>
                        </div>

                        {/* OUTCOME 4: EMAIL */}
                        <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-100 flex items-center justify-center text-blue-500 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                <Mail size={28} />
                            </div>
                            <span className="mt-4 text-xs font-black text-slate-700 uppercase">Fulfillment</span>
                            <span className="text-[10px] text-slate-400 text-center mt-1 px-2">Sends Email with Info/Quote</span>
                        </div>

                        {/* OUTCOME 5: CALLBACK */}
                        <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-100 flex items-center justify-center text-blue-500 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                <Clock size={28} />
                            </div>
                            <span className="mt-4 text-xs font-black text-slate-700 uppercase">Callback</span>
                            <span className="text-[10px] text-slate-400 text-center mt-1 px-2">Schedules Callback for Complex Issues</span>
                        </div>

                    </div>

                    {/* FINAL RESOLUTION BAR */}
                    <div className="mt-16 flex justify-center">
                        <div className="bg-green-500 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-[0_10px_30px_rgba(34,197,94,0.4)] animate-bounce">
                            <CheckCircle2 size={20} />
                            <span className="font-black text-sm uppercase tracking-widest">Call Successfully Resolved</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CallCenterFlow;
