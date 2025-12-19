// src/utils/ai-engine.ts

// 🚨 CONFIGURATION 
// We point to our internal proxy to handle the N8N connection securely (No CORS errors)
const PROXY_ENDPOINT = "/api/chat"; 

// 1. TEXT EXTRACTION (Kept for File Uploads)
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

// 2. THE ENGINE (Cleaned: No Key Logic, Direct to Proxy)
export const generateAIResponse = async (
  messages: any[], 
  systemInstruction: string,
  context?: string
) => {

  const finalSystemPrompt = context 
    ? `${systemInstruction}\n\nCONTEXT FROM USER FILE:\n${context.substring(0, 30000)}` 
    : systemInstruction;

  // Get the last user message
  const lastMessage = messages[messages.length - 1].content || messages[messages.length - 1].text;

  try {
    console.log("📡 ENGINE: Sending to N8N Proxy...");
    
    // Call the proxy which talks to N8N
    const response = await fetch(PROXY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatInput: lastMessage,
        systemPrompt: finalSystemPrompt,
        history: messages 
      })
    });

    const data = await response.json();

    // Mapping N8N response fields
    if (data.output) return data.output;
    if (data.text) return data.text;
    if (data.message) return data.message;
    
    // Handle N8N Errors
    if (data.error) {
        console.error("N8N Error:", data.error);
        return "I am currently undergoing maintenance. Please try again in a moment.";
    }

    return typeof data === 'string' ? data : "System Error: Empty response from Neural Engine.";

  } catch (error) {
    console.error("❌ CLIENT ERROR:", error);
    return "Connection Error. The agent is unreachable.";
  }
};

// 3. PROMPT HELPER
export const expandRoleToPrompt = async (role: string) => {
  return `You are a helpful ${role}.`;
};