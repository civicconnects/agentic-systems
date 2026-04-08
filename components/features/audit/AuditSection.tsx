import React from 'react';
import { ChevronLeft, Info, HelpCircle } from "lucide-react";
import type { Question } from "@/utils/auditData";

interface AuditSectionProps {
  question: Question;
  selectedOptionId: string;
  onSelect: (optionId: string) => void;
  onBack: () => void;
  progress: number;
  currentStep: number;
  totalSteps: number;
}

export default function AuditSection({ 
  question, 
  selectedOptionId, 
  onSelect, 
  onBack,
  progress,
  currentStep,
  totalSteps
}: AuditSectionProps) {
  return (
    <div className="flex-1 flex flex-col bg-slate-950 min-h-[80vh] pt-10 px-6 pb-20">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Navigation & Progress */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-1 text-slate-500 hover:text-white transition-colors text-sm font-medium group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back
          </button>
          
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">
              Section {currentStep + 1} of {totalSteps}
            </span>
            <div className="w-40 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="h-full bg-blue-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question Header */}
        <div className="space-y-4 mb-10 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-900/20 border border-blue-800 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
            {question.category}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            {question.text}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            {question.description}
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid gap-4 animate-in fade-in slide-in-from-bottom duration-500 delay-150">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`
                group relative flex items-center p-6 rounded-2xl border-2 text-left transition-all duration-200
                ${selectedOptionId === option.id 
                  ? "bg-blue-600/10 border-blue-600 ring-4 ring-blue-600/5 shadow-lg shadow-blue-900/20" 
                  : "bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80"
                }
              `}
            >
              <div className="flex-1 pr-6">
                <div className={`font-bold text-lg mb-1 transition-colors ${selectedOptionId === option.id ? "text-blue-400" : "text-white"}`}>
                  {option.text}
                </div>
                {option.subtext && (
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {option.subtext}
                  </p>
                )}
              </div>
              
              <div className={`
                w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300
                ${selectedOptionId === option.id 
                  ? "bg-blue-500 border-blue-500 scale-110" 
                  : "border-slate-700 group-hover:border-slate-500 group-hover:scale-105"
                }
              `}>
                <div className={`w-2 h-2 rounded-full bg-slate-950 transition-transform ${selectedOptionId === option.id ? "scale-100" : "scale-0"}`} />
              </div>

              {/* Selection Glow */}
              {selectedOptionId === option.id && (
                <div className="absolute inset-0 rounded-2xl bg-blue-500/5 pointer-events-none" />
              )}
            </button>
          ))}
        </div>

        {/* Context Footer */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 flex gap-4 items-start animate-in fade-in slide-in-from-bottom duration-500 delay-300">
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex-shrink-0 mt-1">
            <HelpCircle className="w-5 h-5 text-blue-500/80" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Industry Conversion Benchmark</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">
              "{question.benchmark}"
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
