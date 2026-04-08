import { NextResponse } from "next/server";

export const runtime = "edge"; // Required for Cloudflare Pages Functions / Edge Runtime

// We use an environment variable for security. 
// You will need to add INSTANTLY_API_KEY to your Cloudflare Pages Dashboard.
const INSTANTLY_API_KEY = process.env.INSTANTLY_API_KEY || "NDdlZDBmYjktM2JmYS00Nzc1LTgxZGYtMTc2ZDEzOGI4ZGE1Omx1aldvT0VndVpXQw==";
const INSTANTLY_CAMPAIGN_ID = "dca8bbe6-e285-47d0-a0c2-31ba892e0eba";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { contact, results } = data;

    if (!contact?.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Prepare lead for Instantly
    const leadData = {
      campaign_id: INSTANTLY_CAMPAIGN_ID,
      skip_if_in_any_campaign: true,
      leads: [
        {
          email: contact.email,
          first_name: contact.name.split(" ")[0] || "Lead",
          last_name: contact.name.split(" ").slice(1).join(" ") || "",
          company_name: contact.brokerage || "",
          phone: contact.phone || "",
          custom_variables: {
            audit_score: results.totalScore.toString(),
            grade: results.grade,
            monthly_loss: results.monthlyLoss.toLocaleString(),
            annual_loss: results.annualLoss.toLocaleString(),
            leads_lost: results.leadsLostPerMonth.toString(),
            recommendations: results.topRecommendations.join(" | ")
          }
        }
      ]
    };

    const response = await fetch("https://api.instantly.ai/api/v2/leads/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${INSTANTLY_API_KEY}`
      },
      body: JSON.stringify(leadData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Instantly API Error:", errorText);
      return NextResponse.json({ error: "Failed to send to Instantly" }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json({ success: true, result });

  } catch (error) {
    console.error("Audit Submission Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
