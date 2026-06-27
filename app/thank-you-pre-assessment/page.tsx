import type { Metadata } from "next";
import ThankYouPreAssessmentClient from "./ThankYouPreAssessmentClient";

export const metadata: Metadata = {
  title: "Thank You | AI Hub Sentinel",
  description: "Your AI Hub Sentinel pre-assessment request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPreAssessmentPage() {
  return <ThankYouPreAssessmentClient />;
}
