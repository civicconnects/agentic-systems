"use client";

import React from "react";
import { useAudit } from "@/hooks/useAudit";
import LandingPage from "@/components/features/audit/LandingPage";
import AuditSection from "@/components/features/audit/AuditSection";
import ResultsReport from "@/components/features/audit/ResultsReport";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Loader2 } from "lucide-react";

export default function RealEstateAuditPage() {
  const {
    step,
    currentQuestion,
    progressPercent,
    currentSectionIndex,
    totalSections,
    answers,
    contact,
    results,
    startAudit,
    setAnswer,
    prevSection,
    updateContact,
    restart,
  } = useAudit();

  const renderContent = () => {
    switch (step) {
      case "landing":
        return (
          <LandingPage 
            contact={contact} 
            onUpdateContact={updateContact} 
            onStart={startAudit} 
          />
        );
      
      case "audit":
        return (
          <AuditSection
            question={currentQuestion}
            selectedOptionId={answers[currentQuestion.id]}
            onSelect={(optionId) => setAnswer(currentQuestion.id, optionId)}
            onBack={prevSection}
            progress={progressPercent}
            currentStep={currentSectionIndex}
            totalSteps={totalSections}
          />
        );
      
      case "calculating":
        return (
          <div className="flex-1 flex flex-col items-center justify-center bg-slate-950 p-6 min-h-[70vh]">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-slate-900 border-t-blue-500 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-blue-500 animate-pulse" />
              </div>
            </div>
            <div className="mt-12 text-center space-y-4 max-w-sm">
              <h2 className="text-2xl font-bold text-white tracking-tight">Analyzing Your Conversion Gaps...</h2>
              <p className="text-slate-400 leading-relaxed italic">
                Cross-referencing your responses with 2026 industry benchmarks and revenue models.
              </p>
              
              <div className="pt-8 space-y-2">
                {[
                  "Calculating Speed-to-Lead impact...",
                  "Auditing follow-up persistence...",
                  "Checking multi-channel coverage...",
                  "Finalizing revenue loss report..."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case "results":
        return results ? (
          <ResultsReport 
            results={results} 
            contact={contact} 
            onRestart={restart} 
          />
        ) : null;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <div className="flex-1 pt-24">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}
