import type { Metadata } from "next";
import { Suspense } from "react";
import PreAssessmentRequestClient from "./PreAssessmentRequestClient";

export const metadata: Metadata = {
  title: "Request a HIPAA Cyber Risk Pre-Assessment | AI Hub Sentinel",
  description: "Request a no-cost HIPAA compliance and cyber-risk pre-assessment for your medical or dental practice. No patient information is required.",
};

export default function RequestPreAssessmentPage() {
  return (
    <Suspense>
      <PreAssessmentRequestClient />
    </Suspense>
  );
}
