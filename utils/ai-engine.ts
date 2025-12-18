// src/utils/ai-engine.ts

// 1. CONFIGURATION
// 🚨 IMPORTANT: Add this URL to your Cloudflare Environment Variables as NEXT_PUBLIC_N8N_WEBHOOK_URL
// For testing now, you can paste your Production URL here inside the quotes.
const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "https://n8n.civicconnects.com/webhook/chatgpt4"; 

// 2. TEXT EXTRACTION (Kept for UI simulation)
export const extractTextFromFile = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    if (file.type === "application/pdf") {
       setTimeout(() => resolve(`[SYSTEM: Extracted Content from ${file.name}]`), 1000);
    } else {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.readAsText(file);
    }
  });
};

// 3. N8N API HANDLER
export const generateAIResponse = async (
  userProvidedKey: string, // We ignore this now (or use it as an auth token if you want)
  messages: any[], 
  systemInstruction: string,
  context?: string
) => {

  const activeWebhook = N8N_WEBHOOK_URL;

  if (!activeWebhook || activeWebhook.includes("PASTE_YOUR")) {
    console.error("❌ ERROR: No N8N Webhook URL configured.");
    return "Configuration Error: Developer has not set up the N8N Connection yet.";
  }

  const finalSystemPrompt = context 
    ? `${systemInstruction}\n\nCONTEXT FROM USER FILE:\n${context.substring(0, 30000)}` 
    : systemInstruction;

  // Get the last user message to send as the primary prompt
  const lastMessage = messages[messages.length - 1].content || messages[messages.length - 1].text;

  try {
    console.log("📡 CONNECTING: Sending to N8N Automation...");
    
    const response = await fetch(activeWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatInput: lastMessage,
        systemPrompt: finalSystemPrompt,
        history: messages // Sending full history in case you want to use it in N8N
      })
    });

    const data = await response.json();

    // N8N usually returns JSON. We expect an 'output' or 'text' field.
    // Adjust this based on your final N8N "Respond to Webhook" node settings.
    if (data.output) return data.output;
    if (data.text) return data.text;
    if (data.message) return data.message;
    
    // Fallback if N8N just returns the raw string
    if (typeof data === 'string') return data;

    return "Error: N8N returned an empty response. Check your 'Respond to Webhook' node.";

  } catch (error) {
    console.error("❌ N8N ERROR:", error);
    return "Connection Error: Unable to reach the Automation Backend.";
  }
};

// 4. PROMPT ENHANCER (Simplified)
export const expandRoleToPrompt = async (key: string, role: string) => {
  return `You are a helpful ${role}.`;
};