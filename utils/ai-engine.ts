// src/utils/ai-engine.ts

// 🚨 CONFIGURATION - Direct n8n Webhook Integration
const N8N_WEBHOOK_URL = "https://n8n.civicconnects.com/webhook/chat";

// Generate unique session ID for conversation tracking
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

// Store session ID in memory (persists during page session)
let currentSessionId = generateSessionId();

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

export const generateAIResponse = async (
  messages: any[],
  systemInstruction: string,
  context?: string
) => {

  const finalSystemPrompt = context
    ? `${systemInstruction}\n\nCONTEXT FROM USER FILE:\n${context.substring(0, 30000)}`
    : systemInstruction;

  const lastMessage = messages[messages.length - 1].content || messages[messages.length - 1].text;

  try {
    console.log("📡 ENGINE: Connecting to n8n AI...");

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: lastMessage,
        sessionId: currentSessionId,
        systemPrompt: finalSystemPrompt,
        history: messages
      })
    });

    if (!response.ok) {
      throw new Error(`n8n Error: ${response.status} ${response.statusText}`);
    }

    const rawData = await response.json();

    // 🔍 DEBUG: Look at your Browser Console (F12) to see this log!
    console.log("🔥 FULL N8N RESPONSE:", JSON.stringify(rawData, null, 2));

    // 1. Unwrap Array (n8n often returns [ { data } ])
    const data = Array.isArray(rawData) ? rawData[0] : rawData;

    // 2. Check for standard keys
    if (typeof data === 'string') return data; // It might be just "Hello"
    if (data.output) return data.output;
    if (data.text) return data.text;
    if (data.response) return data.response;
    if (data.message) return data.message;
    if (data.reply) return data.reply;

    // 3. n8n JSON wrapper check (Most common default)
    if (data.json && data.json.output) return data.json.output;
    if (data.json && data.json.text) return data.json.text;
    if (data.json && data.json.response) return data.json.response;
    if (data.json && data.json.message) return data.json.message;

    // 4. Deep check (sometimes n8n nests it in body)
    if (data.body && data.body.text) return data.body.text;
    if (data.body && data.body.output) return data.body.output;

    return "Error: Unknown response format. Please check Console (F12) for '🔥 FULL N8N RESPONSE'";

  } catch (error) {
    console.error("❌ CONNECTION ERROR:", error);
    return "Unable to connect to AI. Please check your connection and try again.";
  }
};

export const expandRoleToPrompt = async (role: string) => {
  return `You are a helpful ${role}.`;
};

// Export session management functions
export const resetSession = () => {
  currentSessionId = generateSessionId();
};

export const getSessionId = () => currentSessionId;