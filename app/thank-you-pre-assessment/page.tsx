import type { Metadata } from "next";
import { cookies } from "next/headers";
import Script from "next/script";
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
  const adsConversionSendTo = process.env.NEXT_PUBLIC_PREASSESSMENT_GOOGLE_ADS_CONVERSION_SEND_TO;

  return (
    <>
      {initialAllowed ? (
        <Script
          id="preassessment-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'sentinel_preassessment_form_success',
                conversion_url: 'https://ai-hub.agency/thank-you-pre-assessment'
              });
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'generate_lead', {
                  event_category: 'AI Hub Sentinel',
                  event_label: 'Pre-Assessment Request'
                });
                ${
                  adsConversionSendTo
                    ? `window.gtag('event', 'conversion', { send_to: ${JSON.stringify(adsConversionSendTo)}, value: 1, currency: 'USD' });`
                    : ""
                }
              }
            `,
          }}
        />
      ) : null}
      <ThankYouPreAssessmentClient initialAllowed={initialAllowed} />
    </>
  );
}
