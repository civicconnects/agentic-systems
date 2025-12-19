// src/utils/ai-engine.ts

// 🚨 CONFIGURATION 
const PROXY_ENDPOINT = "/api/chat"; 

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
    console.log("📡 ENGINE: Sending to Proxy...");
    
    // 🚀 CRITICAL: This MUST be a POST request to trigger the route.ts handler
    const response = await fetch(PROXY_ENDPOINT, {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatInput: lastMessage,
        systemPrompt: finalSystemPrompt,
        history: messages 
      })
    });

    if (!response.ok) {
        throw new Error(`Server Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.output) return data.output;
    if (data.text) return data.text;
    
    return typeof data === 'string' ? data : "System Error: Empty response.";

  } catch (error) {
    console.error("❌ CLIENT ERROR:", error);
    return "Connection Error. The system is rebooting, please try again in 10 seconds.";
  }
};

export const expandRoleToPrompt = async (role: string) => {
  return `You are a helpful ${role}.`;
};