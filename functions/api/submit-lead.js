export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    const { contact, results } = data;

    const INSTANTLY_API_KEY = "NDdlZDBmYjktM2JmYS00Nzc1LTgxZGYtMTc2ZDEzOGI4ZGE1Omx1aldvT0VndVpXQw==";
    const INSTANTLY_CAMPAIGN_ID = "dca8bbe6-e285-47d0-a0c2-31ba892e0eba";

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
      return new Response(JSON.stringify({ error: errorText }), { status: response.status });
    }

    const result = await response.json();
    return new Response(JSON.stringify({ success: true, result }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
