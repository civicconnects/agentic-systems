import React from 'react';
import { Truck, MapPin, PhoneOff, AlertOctagon, Radio, CheckCircle2, ArrowRight, Zap, GripHorizontal } from 'lucide-react';

const OperationsFlow = () => {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
                        Operations: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">The Predictive Shift</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                        Stop putting out fires. Start preventing them. Move from reactive dispatch to predictive orchestration.
                    </p>
                </div>

                {/* COMPARISON GRID */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* LEFT: REACTIVE CHAOS */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-red-50 rounded-3xl transform rotate-1 transition-transform group-hover:rotate-2"></div>
                        <div className="relative bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-sm">
                            <div className="bg-red-100 text-red-700 font-black text-[10px] uppercase tracking-widest inline-block px-3 py-1 rounded-full mb-6">
                                Legacy: Reactive Mode
                            </div>

                            <div className="space-y-8">
                                {/* Friction Step 1 */}
                                <div className="flex gap-4 opacity-70">
                                    <div className="w-12 h-12 flex-shrink-0 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                                        <PhoneOff size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-700">Missed Alerts</h4>
                                        <p className="text-sm text-slate-500 mt-1">Equipment fails before anyone knows. Downtime begins.</p>
                                    </div>
                                </div>

                                {/* Friction Step 2 */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 flex-shrink-0 bg-red-50 rounded-xl flex items-center justify-center text-red-500 border border-red-100 animate-pulse">
                                        <AlertOctagon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-red-700">The "Fire Drill"</h4>
                                        <p className="text-sm text-slate-500 mt-1">Dispatcher scrambles. Calling techs. No parts in stock.</p>
                                        <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
                                            <GripHorizontal size={12} /> 4-Hour Response Delay
                                        </div>
                                    </div>
                                </div>

                                {/* Friction Step 3 */}
                                <div className="flex gap-4 opacity-70">
                                    <div className="w-12 h-12 flex-shrink-0 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-700">Inefficient Routing</h4>
                                        <p className="text-sm text-slate-500 mt-1">Tech drives criss-cross patterns. Fuel waste. OT costs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ARROW FOR MOBILE (Hidden on Desktop) */}
                    <div className="flex justify-center lg:hidden text-slate-300">
                        <ArrowRight size={32} className="rotate-90" />
                    </div>

                    {/* RIGHT: PREDICTIVE FLOW */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-600 rounded-3xl transform -rotate-1 transition-transform group-hover:-rotate-2 opacity-10"></div>
                        <div className="relative bg-slate-900 p-8 rounded-3xl shadow-2xl overflow-hidden border border-slate-800">

                            {/* Background Grid Animation */}
                            <div className="absolute inset-0 opacity-10"
                                style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                            <div className="bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest inline-block px-3 py-1 rounded-full mb-8 relative z-10">
                                Agentic: Predictive Ops
                            </div>

                            {/* The "Brain" Connection Visualization */}
                            <div className="relative z-10 mb-8">
                                <div className="flex justify-between items-center mb-6">
                                    {/* IoT Node */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                                            <Radio size={16} />
                                        </div>
                                        <span className="text-[10px] text-slate-400 mt-2 font-mono">IoT Sensor</span>
                                    </div>

                                    {/* Connection Line */}
                                    <div className="flex-1 h-[2px] bg-slate-800 mx-4 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-500 w-1/2 animate-[shimmer_2s_infinite]"></div>
                                    </div>

                                    {/* AI CORE */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-40 animate-pulse"></div>
                                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg relative z-10">
                                            <Zap size={28} />
                                        </div>
                                    </div>

                                    {/* Connection Line */}
                                    <div className="flex-1 h-[2px] bg-slate-800 mx-4 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-500 w-1/2 animate-[shimmer_2s_infinite] delay-75"></div>
                                    </div>

                                    {/* Dispatch Node */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                                            <Truck size={16} />
                                        </div>
                                        <span className="text-[10px] text-slate-400 mt-2 font-mono">Auto-Dispatch</span>
                                    </div>
                                </div>
                            </div>

                            {/* Success Metrics */}
                            <div className="space-y-4 relative z-10">
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mt-1">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold text-sm">Predictive Resolution</h5>
                                        <p className="text-slate-400 text-xs mt-1">AI detected vibration anomaly. Parts ordered & tech scheduled 48hrs before failure.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <div className="flex-1 bg-blue-600/10 p-3 rounded-lg border border-blue-500/20 text-center">
                                        <span className="block text-xl font-black text-white">Zero</span>
                                        <span className="text-[10px] text-blue-300 uppercase font-bold">Downtime</span>
                                    </div>
                                    <div className="flex-1 bg-indigo-600/10 p-3 rounded-lg border border-indigo-500/20 text-center">
                                        <span className="block text-xl font-black text-white">-30%</span>
                                        <span className="text-[10px] text-indigo-300 uppercase font-bold">OpEx Costs</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
        </section>
    );
};

export default OperationsFlow;
