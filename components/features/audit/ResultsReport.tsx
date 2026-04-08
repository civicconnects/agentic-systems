import React from 'react';
import { 
  Trophy, 
  AlertTriangle, 
  TrendingDown, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  RefreshCcw,
  Zap,
  ChevronRight,
  PieChart,
  Target,
  ArrowUpRight
} from "lucide-react";
import type { AuditResults } from "@/utils/auditData";
import type { ContactInfo } from "@/hooks/useAudit";

interface ResultsReportProps {
  results: AuditResults;
  contact: ContactInfo;
  onRestart: () => void;
}

export default function ResultsReport({ results, contact, onRestart }: ResultsReportProps) {
  return (
    <div className="flex-1 bg-slate-950 pb-32">
      
      {/* Summary Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden border-b border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            
            <div className="space-y-3">
              <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">Audit Result for {contact.name}</span>
              <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tighter">
                Lead Conversion Audit <span className="text-blue-500">2026</span>
              </h1>
            </div>

            <div className={`
              relative w-64 h-64 rounded-full flex flex-col items-center justify-center p-8
              border-4 transition-all duration-1000 animate-in zoom-in
              ${results.totalScore >= 80 ? 'border-green-500 bg-green-500/5 shadow-[0_0_50px_rgba(34,197,94,0.1)]' : 
                results.totalScore >= 60 ? 'border-blue-500 bg-blue-500/5 shadow-[0_0_50px_rgba(59,130,246,0.1)]' : 
                results.totalScore >= 40 ? 'border-amber-500 bg-amber-500/5 shadow-[0_0_50px_rgba(245,158,11,0.1)]' : 
                'border-red-500 bg-red-500/5 shadow-[0_0_50px_rgba(239,68,68,0.1)]'}
            `}>
              <span className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-1">Overall Grade</span>
              <span className={`text-9xl font-black mb-2 leading-none ${results.gradeColor.startsWith('#') ? '' : results.gradeColor}`}>{results.grade}</span>
              <span className={`text-sm font-bold uppercase tracking-widest ${results.gradeColor.startsWith('#') ? '' : results.gradeColor}`}>{results.gradeLabel}</span>
              <div className="absolute -bottom-4 bg-slate-900 px-6 py-2 rounded-full border border-slate-800 shadow-xl">
                <span className="text-white font-black text-xl">{results.totalScore}</span>
                <span className="text-slate-500 text-xs font-bold ml-1">/ 100</span>
              </div>
            </div>

            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Based on your responses, your lead conversion system has 
              <span className="text-white font-bold"> {results.totalScore < 60 ? 'significant' : 'some'} gaps</span> that are costing your business every single month.
            </p>
          </div>
        </div>
        
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-0"></div>
      </section>

      {/* Revenue Impact Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid lg:grid-cols-3 gap-6">
          
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-[32px] p-8 lg:col-span-2 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingDown className="w-32 h-32 text-red-500" />
            </div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Estimated Annual Revenue Loss</h3>
                  <p className="text-sm text-slate-500">Directly attributed to lead leakage and slow response times.</p>
                </div>
              </div>
              
              <div className="flex items-baseline gap-4">
                <span className="text-6xl sm:text-7xl font-black text-white tracking-tighter">
                  ${results.annualLoss.toLocaleString()}
                </span>
                <span className="text-2xl text-red-500 font-bold">/ Year</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <div className="bg-slate-950/50 rounded-2xl p-5 border border-slate-800/50">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Monthly Cost</p>
                  <p className="text-2xl font-bold text-white">${results.monthlyLoss.toLocaleString()}</p>
                </div>
                <div className="bg-slate-950/50 rounded-2xl p-5 border border-slate-800/50">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Leads Lost Permanently</p>
                  <p className="text-2xl font-bold text-white">{results.leadsLostPerMonth} <span className="text-sm text-slate-500">leads / mo</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-blue-500/20">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <Zap className="w-64 h-64 text-white" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-4 leading-tight">Want to stop the leakage?</h3>
              <p className="text-blue-100 font-medium mb-8">
                We've built an AI system specifically designed to plug these holes 24/7.
              </p>
            </div>

            <a 
              href="https://calendly.com/aihubagency/30min"
              className="relative z-10 w-full bg-white text-blue-600 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 group/btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Priority Call
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* Recommendations Section */}
      <section className="max-w-7xl mx-auto px-6 mt-20 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">Priority Recommendations</h2>
            <p className="text-slate-400">Implement these 4 high-impact changes to recover your lost revenue.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.topRecommendations.map((rec, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 hover:border-blue-500/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 font-bold">0{i+1}</span>
              </div>
              <p className="text-white font-medium leading-relaxed">
                {rec}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Critical Failures Breakdown */}
      {results.criticalFailures.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className="bg-red-500/5 border border-red-500/20 rounded-[32px] p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Critical Success Blocks identified</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {results.criticalFailures.map((fail, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-slate-950/50 rounded-2xl border border-red-500/10">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 font-medium leading-relaxed">
                    {fail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Section Breakdown */}
      <section className="max-w-7xl mx-auto px-6 mt-20 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">Detailed Score Breakdown</h2>
            <p className="text-slate-400">Every conversion pillar analyzed.</p>
          </div>
        </div>

        <div className="space-y-4">
          {results.sectionScores.map((section) => (
            <div key={section.sectionId} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl hover:bg-slate-900 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-[200px]">
                  <span className="text-2xl">{section.icon}</span>
                  <div>
                    <h4 className="font-bold text-white leading-none">{section.sectionTitle}</h4>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Pillar Strength</span>
                  </div>
                </div>
                
                <div className="flex-1 max-w-[400px] h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full transition-all duration-1000"
                    style={{ 
                      width: `${section.percentage}%`,
                      backgroundColor: section.gradeColor 
                    }}
                  />
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="block text-2xl font-black text-white">{section.percentage}%</span>
                  </div>
                  <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl
                    ${section.grade === 'A' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                      section.grade === 'B' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' : 
                      'bg-red-500/10 text-red-500 border border-red-500/20'}
                  `}>
                    {section.grade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Restart Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom duration-500 delay-1000">
        <button 
          onClick={onRestart}
          className="flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur-xl border border-slate-800 text-slate-400 hover:text-white transition-all rounded-full shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
        >
          <RefreshCcw className="w-4 h-4" />
          <span className="font-bold text-sm uppercase tracking-widest">Restart Audit</span>
        </button>
      </div>

    </div>
  );
}
