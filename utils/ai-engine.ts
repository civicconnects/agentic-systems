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
    const response = await fetch("https://n8n.civicconnects.com/webhook/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: lastMessage,
        sessionId: currentSessionId,
        systemPrompt: finalSystemPrompt,
        history: messages
      })
    });

    const rawData = await response.json();

    // Handle different possible response formats from n8n
    if (rawData.response) {
      return rawData.response;
    } else if (rawData.message) {
      return rawData.message;
    } else if (rawData.output) {
      return rawData.output;
    } else if (rawData.text) {
      return rawData.text;
    } else if (typeof rawData === 'string') {
      return rawData;
    } else {
      // If response is empty or unexpected format, return helpful error
      console.error('Unexpected n8n response format:', rawData);
      return "⚠️ The AI service returned an unexpected response format. Please check the n8n webhook configuration.\n\nReceived: " + JSON.stringify(rawData, null, 2);
    }

  } catch (error) {
    return "❌ Connection Error: " + (error instanceof Error ? error.message : String(error));
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