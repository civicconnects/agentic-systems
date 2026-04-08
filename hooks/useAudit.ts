import { useState, useCallback } from "react";
import { 
  QUESTIONS, 
  calculateAuditResults, 
  type AuditResults 
} from "@/utils/auditData";

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  brokerage?: string;
}

export function useAudit() {
  const [step, setStep] = useState<"landing" | "audit" | "calculating" | "results">("landing");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState<ContactInfo>({ name: "", email: "", phone: "" });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<AuditResults | null>(null);

  const totalQuestions = QUESTIONS.length;
  const progressPercent = ((currentQuestionIndex) / totalQuestions) * 100;
  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const startAudit = useCallback(() => {
    setStep("audit");
    setCurrentQuestionIndex(0);
    setAnswers({});
  }, []);

  const submitLead = useCallback(async (contactInfo: ContactInfo, auditResults: AuditResults) => {
    try {
      await fetch("/api/audit/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: contactInfo, results: auditResults })
      });
    } catch (error) {
      console.error("Failed to submit lead:", error);
    }
  }, []);

  const setAnswer = useCallback((questionId: string, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 300);
    } else {
      setStep("calculating");
      // Simulate calculation time for "Velvet Urgency" effect
      setTimeout(() => {
        const auditResults = calculateAuditResults({ ...answers, [questionId]: answerId });
        setResults(auditResults);
        setStep("results");
        
        // Auto-submit lead to Instantly
        submitLead(contact, auditResults);
      }, 2500);
    }
  }, [currentQuestionIndex, totalQuestions, answers, contact, submitLead]);

  const prevSection = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setStep("landing");
    }
  }, [currentQuestionIndex]);

  const updateContact = useCallback((info: Partial<ContactInfo>) => {
    setContact(prev => ({ ...prev, ...info }));
  }, []);

  const restart = useCallback(() => {
    setStep("landing");
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResults(null);
  }, []);

  return {
    step,
    currentQuestion,
    currentSectionIndex: currentQuestionIndex,
    totalSections: totalQuestions,
    progressPercent,
    answers,
    contact,
    results,
    startAudit,
    setAnswer,
    prevSection,
    updateContact,
    restart,
  };
}
