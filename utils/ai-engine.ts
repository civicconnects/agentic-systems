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

    // 🔍 DEBUG MODE: Return the raw JSON string directly to the Chat Window
    // This allows us to see EXACTLY what n8n is sending without opening the console.
    return "DEBUG_DATA: " + JSON.stringify(rawData, null, 2);

  } catch (error) {
    return "❌ Connection Error: " + error.message;
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