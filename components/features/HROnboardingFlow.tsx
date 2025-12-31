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
        <div className="max-w-7xl mx-auto py-24 px-6 font-sans">

            {/* HEADER SECTION - Fixed Contrast & Spacing */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
                    AI HR: The Next Generation
                </h2>
                <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                    Innovative AI solutions engineered to boost workplace productivity and drive growth. A complete ecosystem for the modern workforce.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-slate-50 rounded-[3rem] p-12 lg:p-16 border border-slate-200 shadow-sm">

                {/* LEFT: THE INTERACTIVE WHEEL */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                    {/* Rotating Ring Decor */}
                    <div className="absolute inset-0 border-[3px] border-dashed border-slate-300 rounded-full animate-spin-slow opacity-60" />

                    {strategies.map((item, i) => {
                        const angle = (i * 360) / strategies.length;
                        const active = activeTab === i;
                        // Adjusted radius for better fit
                        const radius = 170; // Wider spread for legibility

                        return (
                            <button
                                key={i}
                                onMouseEnter={() => setActiveTab(i)}
                                className={`absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-20 shadow-md
                  ${active ? 'bg-orange-600 text-white scale-110 ring-4 ring-orange-200 shadow-xl' : 'bg-white text-slate-400 hover:text-orange-600 border border-slate-200'}`}
                                style={{
                                    top: `calc(50% - 32px + ${Math.sin((angle * Math.PI) / 180) * radius}px)`,
                                    left: `calc(50% - 32px + ${Math.cos((angle * Math.PI) / 180) * radius}px)`
                                }}
                            >
                                {React.cloneElement(item.icon, { size: 28 })}
                            </button>
                        );
                    })}

                    {/* Center Hub */}
                    <div className="absolute inset-0 m-auto w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-8 border-slate-50 z-10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 text-center">
                            <span className="block text-orange-600 font-black text-3xl leading-none tracking-tighter">AGI</span>
                            <span className="text-slate-900 font-bold text-xs uppercase tracking-widest mt-1 block">Engine</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT: THE CONTENT DYNAMIC CARD */}
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden h-full flex flex-col justify-center">

                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-slate-900 transform scale-150">
                        {React.cloneElement(strategies[activeTab].icon, { size: 120 })}
                    </div>

                    <div className="mb-6 relative z-10">
                        <span className="bg-orange-100 text-orange-700 text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-4">
                            Capability {activeTab + 1}
                        </span>
                        <h3 className="text-3xl font-black text-slate-900 leading-tight">{strategies[activeTab].title}</h3>
                    </div>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                        {strategies[activeTab].desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-orange-500">
                            <span className="block text-3xl font-black text-orange-600 mb-1">{strategies[activeTab].stat}</span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Metric</span>
                        </div>
                        <div className="p-5 rounded-2xl border border-slate-100 flex items-center bg-white shadow-sm">
                            <p className="text-sm text-slate-600 font-medium italic">
                                "{strategies[activeTab].detail}"
                            </p>
                        </div>
                    </div>

                    <button className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25">
                        Deploy Capability <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>

            {/* CSS FOR SLOW SPIN */}
            <style>{`
        .animate-spin-slow {
          animation: spin 30s linear infinite;
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
