// ============================================================
// REAL ESTATE LEAD LEAKAGE AUDIT — Data & Scoring Engine
// Design: "Velvet Urgency" — Forest Green + Gold + Crimson
// ============================================================

export interface AuditOption {
  id: string;
  text: string;
  subtext?: string;
  value: number; // 0 = worst, 3 = best
  isDanger?: boolean;
}

export interface Question {
  id: string;
  text: string;
  description?: string;
  category: string;
  benchmark: string;
  leakageImpact: string; // dollar impact label
  weight: number; // multiplier for scoring
  options: AuditOption[];
  isCritical?: boolean;
}

export interface AuditSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  questions: Question[];
  maxPoints: number;
}

// ============================================================
// SCORING SYSTEM
// Each question: 0–3 points × weight
// Total possible: 100 points (normalized)
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: "stl-1",
    category: "Speed-to-Lead",
    text: "How quickly do you personally respond to a new online lead?",
    description: "Speed-to-lead is the single biggest predictor of conversion. Every minute you wait, your odds drop.",
    benchmark: "78% of buyers work with the first agent who responds. Odds of conversion drop 100x after 30 minutes.",
    leakageImpact: "Up to $8,000/month in lost commissions",
    weight: 3,
    isCritical: true,
    options: [
      { id: "a1", text: "Over 24 hours (or I don't always respond)", value: 0, isDanger: true, subtext: "Critical leak — most leads have already hired someone else" },
      { id: "a2", text: "1–24 hours", value: 1, isDanger: true, subtext: "High risk — competitors are calling within minutes" },
      { id: "a3", text: "Within 30 minutes", value: 2, subtext: "Acceptable, but still losing after-hours leads" },
      { id: "a4", text: "Within 5 minutes, 24/7 (automated)", value: 3, subtext: "Optimal — AI handles instant response even at 2am" },
    ],
  },
  {
    id: "stl-2",
    category: "Speed-to-Lead",
    text: "What happens to leads that come in after hours (evenings, weekends)?",
    description: "Over 60% of online real estate leads are submitted outside of business hours.",
    benchmark: "Leads contacted within 5 minutes are 9x more likely to convert than those contacted after 10 minutes.",
    leakageImpact: "Up to $6,000/month in after-hours lead loss",
    weight: 3,
    isCritical: true,
    options: [
      { id: "b1", text: "They wait until I'm back in the office", value: 0, isDanger: true, subtext: "You're losing 60%+ of your leads before you even know about them" },
      { id: "b2", text: "I try to check messages in the evening", value: 1, isDanger: true, subtext: "Inconsistent — still missing most after-hours leads" },
      { id: "b3", text: "I have someone cover for me occasionally", value: 2, subtext: "Better, but not reliable or scalable" },
      { id: "b4", text: "Automated system responds instantly 24/7", value: 3, subtext: "Every lead gets an immediate, personalized response" },
    ],
  },
  {
    id: "fu-1",
    category: "Follow-Up Persistence",
    text: "How many times do you follow up with a lead before marking them as 'dead'?",
    description: "The fortune is in the follow-up. Most agents give up right before the lead was ready to convert.",
    benchmark: "80% of sales require 5–12 follow-up attempts. The average agent makes only 1.7 attempts.",
    leakageImpact: "Up to $15,000/month in abandoned pipeline",
    weight: 3,
    isCritical: true,
    options: [
      { id: "c1", text: "1–2 times, then I move on", value: 0, isDanger: true, subtext: "You're abandoning 80% of your potential deals" },
      { id: "c2", text: "3–4 times over a week", value: 1, isDanger: true, subtext: "Still leaving most long-term buyers on the table" },
      { id: "c3", text: "5–7 times over a month", value: 2, subtext: "Getting closer — but still missing the 3–6 month buyers" },
      { id: "c4", text: "12+ automated touchpoints over 6–12 months", value: 3, subtext: "Optimal — your pipeline never goes cold" },
    ],
  },
  {
    id: "lq-1",
    category: "Qualification",
    text: "Do you know a lead's timeline, budget, and pre-approval status before calling?",
    description: "The 'Big 4' qualification questions determine if a lead is worth your personal time.",
    benchmark: "Agents who pre-qualify leads spend 40% less time on unqualified prospects and close 2x more deals.",
    leakageImpact: "20+ hours/month wasted on unqualified leads",
    weight: 2,
    isCritical: true,
    options: [
      { id: "d1", text: "No — I call everyone and qualify on the phone", value: 0, isDanger: true, subtext: "You're burning hours on leads who will never buy" },
      { id: "d2", text: "I ask a few questions during the first call", value: 1, subtext: "Better, but still inefficient" },
      { id: "d3", text: "I have a basic intake form they fill out", value: 2, subtext: "Good — but form completion rates are low without automation" },
      { id: "d4", text: "AI pre-qualifies every lead before I ever speak to them", value: 3, subtext: "Optimal — you only talk to serious, qualified buyers" },
    ],
  },
  {
    id: "mc-1",
    category: "Multi-Channel",
    text: "Which channels do you use to follow up with leads?",
    description: "Leads respond to different channels. Relying on just one means missing most of your audience.",
    benchmark: "SMS has a 98% open rate vs 20% for email. Combining SMS + email + voicemail increases response rates by 300%.",
    leakageImpact: "$4,000–$8,000/month in unreached leads",
    weight: 2,
    isCritical: true,
    options: [
      { id: "e1", text: "Email only", value: 0, isDanger: true, subtext: "80% of your follow-ups are going unread" },
      { id: "e2", text: "Phone calls and email", value: 1, subtext: "Better, but missing the highest-engagement channel" },
      { id: "e3", text: "Phone, email, and occasional texts", value: 2, subtext: "Good — but not systematic or automated" },
      { id: "e4", text: "Automated SMS + email + ringless voicemail sequences", value: 3, subtext: "Optimal — maximum reach across all channels" },
    ],
  },
  {
    id: "dr-1",
    category: "Database Reactivation",
    text: "How many dormant leads are sitting in your CRM?",
    description: "Every dormant lead in your database is a commission waiting to be claimed — by you or a competitor.",
    benchmark: "The average agent has 300–500+ dormant leads. At a 15% reactivation rate, that's 45–75 potential closings.",
    leakageImpact: "$50,000–$150,000 in dormant pipeline",
    weight: 2,
    isCritical: true,
    options: [
      { id: "f1", text: "Hundreds — I never go back to old leads", value: 0, isDanger: true, subtext: "You're sitting on a gold mine and don't know it" },
      { id: "f2", text: "50–200 — I occasionally reach out to some", value: 1, subtext: "Inconsistent — most of this pipeline is being lost" },
      { id: "f3", text: "Under 50 — I stay relatively current", value: 2, subtext: "Good discipline, but still needs a systematic approach" },
      { id: "f4", text: "Zero — automated reactivation campaigns keep my database warm", value: 3, subtext: "Optimal — your old leads are your best future clients" },
    ],
  },
  {
    id: "mc2-1",
    category: "Missed Calls",
    text: "When you miss a call from a lead, what happens next?",
    description: "85% of people who can't reach you on the first call will not call back. They'll call the next agent.",
    benchmark: "Agents who auto-text missed callers within 60 seconds recover 40% of those leads. Without a system, 85% are lost forever.",
    leakageImpact: "$5,000–$12,000/month in missed-call losses",
    weight: 2,
    isCritical: true,
    options: [
      { id: "g1", text: "Nothing — they get voicemail and I call back later", value: 0, isDanger: true, subtext: "85% of these leads will never call back" },
      { id: "g2", text: "I try to call back within a few hours", value: 1, subtext: "Too slow — they've already moved on" },
      { id: "g3", text: "I call back within 30 minutes", value: 2, subtext: "Better, but still inconsistent" },
      { id: "g4", text: "Automated text sent within 60 seconds", value: 3, subtext: "Optimal — you recover 40% of missed calls automatically" },
    ],
  },
];

export interface SectionScore {
  sectionId: string;
  sectionTitle: string;
  icon: string;
  earned: number;
  possible: number;
  percentage: number;
  grade: string;
  gradeColor: string;
}

export interface AuditResults {
  totalScore: number;
  totalEarned: number;
  totalPossible: number;
  grade: string;
  gradeLabel: string;
  gradeColor: string;
  gradeBgColor: string;
  monthlyLoss: number;
  annualLoss: number;
  leadsLostPerMonth: number;
  sectionScores: SectionScore[];
  criticalFailures: string[];
  topRecommendations: string[];
}

export function calculateAuditResults(answersByQuestion: Record<string, string>): AuditResults {
  let totalEarned = 0;
  let totalPossible = 0;
  const criticalFailures: string[] = [];
  const sectionScoresMap: Record<string, { earned: number, possible: number }> = {};

  QUESTIONS.forEach(q => {
    const selectedOptionId = answersByQuestion[q.id];
    const option = q.options.find(o => o.id === selectedOptionId);
    const value = option ? option.value : 0;
    
    const points = value * q.weight;
    const maxVal = 3 * q.weight;

    totalEarned += points;
    totalPossible += maxVal;

    if (!sectionScoresMap[q.category]) {
      sectionScoresMap[q.category] = { earned: 0, possible: 0 };
    }
    sectionScoresMap[q.category].earned += points;
    sectionScoresMap[q.category].possible += maxVal;

    if (q.isCritical && value <= 1) {
      criticalFailures.push(q.text);
    }
  });

  const sectionScores: SectionScore[] = Object.keys(sectionScoresMap).map(cat => {
    const { earned, possible } = sectionScoresMap[cat];
    const percentage = Math.round((earned / possible) * 100);
    const { grade, color } = getGrade(percentage);
    return {
      sectionId: cat.toLowerCase().replace(/\s+/g, '-'),
      sectionTitle: cat,
      icon: getIcon(cat),
      earned,
      possible,
      percentage,
      grade,
      gradeColor: color
    };
  });

  const totalScore = Math.round((totalEarned / totalPossible) * 100);
  const { grade, color, label, bgColor } = getOverallGrade(totalScore);

  // Constants for dollar loss
  const avgLeadsPerMonth = 50;
  const avgCommission = 8500;
  const baseConversionRate = 0.03;
  const aiConversionRate = 0.05;
  const captureRate = totalScore / 100;

  const currentDeals = avgLeadsPerMonth * baseConversionRate * captureRate;
  const potentialDeals = avgLeadsPerMonth * aiConversionRate;
  const missedDealsPerMonth = Math.max(0, potentialDeals - currentDeals);
  const monthlyLoss = Math.round(missedDealsPerMonth * avgCommission);
  const annualLoss = monthlyLoss * 12;
  const leadsLostPerMonth = Math.round(avgLeadsPerMonth * (1 - captureRate) * 0.6);

  const topRecommendations = getRecommendations(sectionScores);

  return {
    totalScore,
    totalEarned,
    totalPossible,
    grade,
    gradeLabel: label,
    gradeColor: color,
    gradeBgColor: bgColor,
    monthlyLoss,
    annualLoss,
    leadsLostPerMonth,
    sectionScores,
    criticalFailures,
    topRecommendations,
  };
}

function getGrade(pct: number) {
  if (pct >= 85) return { grade: "A", color: "#15803d" };
  if (pct >= 70) return { grade: "B", color: "#65a30d" };
  if (pct >= 55) return { grade: "C", color: "#d97706" };
  if (pct >= 35) return { grade: "D", color: "#ea580c" };
  return { grade: "F", color: "#dc2626" };
}

function getOverallGrade(score: number) {
  if (score >= 81) return { grade: "A", color: "#15803d", bgColor: "#dcfce7", label: "AI-Optimized" };
  if (score >= 61) return { grade: "B", color: "#65a30d", bgColor: "#ecfccb", label: "Moderate Leakage" };
  if (score >= 41) return { grade: "C", color: "#d97706", bgColor: "#fef3c7", label: "High Leakage" };
  if (score >= 21) return { grade: "D", color: "#ea580c", bgColor: "#ffedd5", label: "Severe Leakage" };
  return { grade: "F", color: "#dc2626", bgColor: "#fee2e2", label: "Critical Leakage" };
}

function getIcon(cat: string) {
  switch (cat) {
    case "Speed-to-Lead": return "⚡";
    case "Follow-Up Persistence": return "🔄";
    case "Qualification": return "🎯";
    case "Multi-Channel": return "📱";
    case "Database Reactivation": return "💎";
    case "Missed Calls": return "📞";
    default: return "📊";
  }
}

function getRecommendations(scores: SectionScore[]) {
  const recs: string[] = [];
  const sorted = [...scores].sort((a, b) => a.percentage - b.percentage);

  sorted.slice(0, 4).forEach(s => {
    switch (s.sectionTitle) {
      case "Speed-to-Lead": recs.push("Deploy an AI agent for 24/7 instant response."); break;
      case "Follow-Up Persistence": recs.push("Implement a 12-touch automated sequence."); break;
      case "Qualification": recs.push("Use AI to pre-qualify leads before calling."); break;
      case "Multi-Channel": recs.push("Activate SMS and Ringless Voicemail."); break;
      case "Database Reactivation": recs.push("Run a DB reactivation campaign for old leads."); break;
      case "Missed Calls": recs.push("Install a missed call text-back system."); break;
    }
  });
  return recs;
}
