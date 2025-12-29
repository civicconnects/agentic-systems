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

    // 🚀 Direct POST to n8n webhook with expected payload structure
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

    // 🛠️ THE FIX: Handle if n8n sends an Array (List) instead of an Object
    const data = Array.isArray(rawData) ? rawData[0] : rawData;

    console.log("🔍 AI RESPONSE DEBUG:", data); // Check console to see what we got

    // Handle various response formats from n8n
    if (data.output) return data.output;
    if (data.text) return data.text;
    if (data.response) return data.response;
    if (data.message) return data.message;

    // Fallback if data is just a string
    return typeof data === 'string' ? data : "AI is processing your request... (Response format unknown)";

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