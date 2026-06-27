import type { Metadata } from "next";
import { cookies } from "next/headers";
import ThankYouPreAssessmentClient from "./ThankYouPreAssessmentClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Thank You | AI Hub Sentinel",
  description: "Your AI Hub Sentinel pre-assessment request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ThankYouPreAssessmentPage() {
  const cookieStore = await cookies();
  const initialAllowed = cookieStore.get("sentinelPreAssessmentSubmitted")?.value === "true";

  return <ThankYouPreAssessmentClient initialAllowed={initialAllowed} />;
}
