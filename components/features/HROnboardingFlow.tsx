import React, { useState } from 'react';
import { Search, MessageSquare, Users, Scale, Zap, BarChart3, ChevronRight } from 'lucide-react';

const HROnboardingFlow = () => {
    const [activeTab, setActiveTab] = useState(0);

    const strategies = [
        {
            title: "Automated Screening",
            icon: <Search />,
            desc: "Algorithms screen resumes & social profiles to find talent instantly.",
            stat: "95% Accuracy",
            detail: "Reduces manual screening time by up to 75%."
        },
        {
            title: "AI-Driven Chatbots",
            icon: <MessageSquare />,
            desc: "Instant cultural & skill triage for every applicant 24/7.",
            stat: "140% Apps",
            detail: "Brother Intl. saw a 140% application increase in 3 weeks."
        },
        {
            title: "Self-Serve Application",
            icon: <Users />,
            desc: "Manage massive talent pools without adding HR headcount.",
            stat: "Zero Friction",
            detail: "Automation handles high-volume intake seamlessly."
        },
        {
            title: "Objective Meritocracy",
            icon: <Scale />,
            desc: "Data-driven hiring that removes human perception bias.",
            stat: "Fair Talent",
            detail: "Increased diversity through blind data shortlisting."
        },
        {
            title: "Candidate Experience",
            icon: <Zap />,
            desc: "Personalized, instant communication for every candidate.",
            stat: "Fast Response",
            detail: "Eliminates the 'Recruitment Black Hole'."
        },
        {
            title: "Strategic Focus",
            icon: <BarChart3 />,
            desc: "Automates the 'Grunt Work' so HR can focus on relationships.",
            stat: "25% Faster",
            detail: "Reduces time-to-fill positions by a quarter."
        }
    ];

    return (
        <div className="max-w-5xl mx-auto py-20 px-6 font-sans">
            <div className="text-center mb-16 px-4">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                    AI HR: The Next Generation
                </h2>
                <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                    Innovative AI solutions engineered to boost workplace productivity and drive growth. A complete ecosystem for the modern workforce.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 rounded-[3rem] p-12 border border-slate-200">

                {/* LEFT: THE INTERACTIVE WHEEL */}
                <div className="relative w-80 h-80 mx-auto">
                    {/* Rotating Ring Decor */}
                    <div className="absolute inset-0 border-4 border-dashed border-slate-200 rounded-full animate-spin-slow opacity-50" />

                    {strategies.map((item, i) => {
                        const angle = (i * 360) / strategies.length;
                        const active = activeTab === i;
                        return (
                            <button
                                key={i}
                                onMouseEnter={() => setActiveTab(i)}
                                className={`absolute w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 z-20 shadow-lg
                  ${active ? 'bg-orange-600 text-white scale-125 ring-4 ring-orange-100' : 'bg-white text-slate-400 hover:text-orange-500'}`}
                                style={{
                                    top: `calc(50% - 28px + ${Math.sin((angle * Math.PI) / 180) * 140}px)`,
                                    left: `calc(50% - 28px + ${Math.cos((angle * Math.PI) / 180) * 140}px)`
                                }}
                            >
                                {React.cloneElement(item.icon, { size: 24 })}
                            </button>
                        );
                    })}

                    {/* Center Hub */}
                    <div className="absolute inset-0 m-auto w-32 h-32 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-orange-500">
                        <span className="text-orange-600 font-black text-2xl leading-none">HR</span>
                        <span className="text-slate-900 font-bold text-[10px] uppercase">Engine</span>
                    </div>
                </div>

                {/* RIGHT: THE CONTENT DYNAMIC CARD */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-900">
                        {strategies[activeTab].icon}
                    </div>

                    <div className="mb-6">
                        <span className="bg-orange-100 text-orange-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                            Action Point {activeTab + 1}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 mt-2">{strategies[activeTab].title}</h3>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                        {strategies[activeTab].desc}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-50 p-4 rounded-2xl border-l-4 border-orange-500">
                            <span className="block text-2xl font-black text-orange-600">{strategies[activeTab].stat}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Impact Metric</span>
                        </div>
                        <div className="p-4 rounded-2xl flex items-center">
                            <p className="text-xs text-slate-500 font-medium italic">
                                {strategies[activeTab].detail}
                            </p>
                        </div>
                    </div>

                    <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group hover:bg-orange-600 transition-colors">
                        Implement This Solution <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>

            {/* CSS FOR SLOW SPIN */}
            <style>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
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
