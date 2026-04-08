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
      // Direct client-side call to Instantly (compatible with static export)
      const leadData = {
        campaign_id: "dca8bbe6-e285-47d0-a0c2-31ba892e0eba",
        skip_if_in_any_campaign: true,
        leads: [
          {
            email: contactInfo.email,
            first_name: contactInfo.name.split(" ")[0] || "Lead",
            last_name: contactInfo.name.split(" ").slice(1).join(" ") || "",
            company_name: contactInfo.brokerage || "",
            phone: contactInfo.phone || "",
            custom_variables: {
              audit_score: auditResults.totalScore.toString(),
              grade: auditResults.grade,
              monthly_loss: auditResults.monthlyLoss.toLocaleString(),
              annual_loss: auditResults.annualLoss.toLocaleString(),
              leads_lost: auditResults.leadsLostPerMonth.toString(),
              recommendations: auditResults.topRecommendations.join(" | ")
            }
          }
        ]
      };

      // 1. Send to Instantly for CRM/Sequencing
      await fetch("https://api.instantly.ai/api/v2/leads/add", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": "Bearer NDdlZDBmYjktM2JmYS00Nzc1LTgxZGYtMTc2ZDEzOGI4ZGE1Omx1aldvT0VndVpXQw=="
        },
        body: JSON.stringify(leadData)
      });

      // 2. Send to Web3Forms for Admin Notification
      const notificationData = new FormData();
      notificationData.append("access_key", "98580280-b787-4425-a6b4-e723e8192bbf");
      notificationData.append("subject", `New Audit Completed: ${contactInfo.name} (${auditResults.totalScore}/100)`);
      notificationData.append("from_name", "Real Estate Audit Tool");
      notificationData.append("name", contactInfo.name);
      notificationData.append("email", contactInfo.email);
      notificationData.append("phone", contactInfo.phone || "Not provided");
      notificationData.append("brokerage", contactInfo.brokerage || "Not provided");
      notificationData.append("score", auditResults.totalScore.toString());
      notificationData.append("annual_loss", `$${auditResults.annualLoss.toLocaleString()}`);
      notificationData.append("top_recommendations", auditResults.topRecommendations.join(", "));

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: notificationData
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
