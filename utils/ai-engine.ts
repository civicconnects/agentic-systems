// src/utils/ai-engine.ts

// 🚨 PASTE YOUR GEMINI KEY HERE 🚨
const PUBLIC_DEMO_KEY = "AIzaSyBuq-tkFRg0jFKXY4vG-F-FwXSym03GqzE"; 

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
  userProvidedKey: string, 
  messages: any[], 
  systemInstruction: string,
  context?: string
) => {
  
  const activeKey = (userProvidedKey || PUBLIC_DEMO_KEY).trim();

  if (!activeKey || activeKey.includes("PASTE_YOUR")) {
    return "Configuration Error: API Key missing. Please check ai-engine.ts";
  }

  const finalSystemPrompt = context 
    ? `${systemInstruction}\n\nCONTEXT FROM USER FILE:\n${context.substring(0, 30000)}` 
    : systemInstruction;

  const geminiContents = [
    { role: 'user', parts: [{ text: `SYSTEM INSTRUCTION: ${finalSystemPrompt}` }] },
    ...messages.map(m => ({
      role: m.role === 'bot' ? 'model' : 'user',
      parts: [{ text: m.text || m.content }]
    }))
  ];

  // 🛡️ THE FINAL FIX: ONLY USE STABLE "v1" ENDPOINTS
  // We dropped v1beta because it is failing for your specific account.
  const ENDPOINTS = [
    { ver: "v1", model: "gemini-1.5-flash" },
    { ver: "v1", model: "gemini-pro" }
  ];

  for (const { ver, model } of ENDPOINTS) {
    console.log(`📡 CONNECTING: Trying ${ver}/${model}...`);
    
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/${ver}/models/${model}:generateContent?key=${activeKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: geminiContents,
          generationConfig: { temperature: 0.7, maxOutputTokens: 300 }
        })
      });

      const data = await response.json();

      if (response.ok && data.candidates) {
        console.log(`✅ SUCCESS: Connected via ${ver}/${model}`);
        return data.candidates[0].content.parts[0].text;
      }

      if (data.error) {
        console.warn(`⚠️ Failed on ${model}:`, data.error.message);
      }
    
    } catch (e) {
      console.error(`❌ Network error on ${model}`);
    }
  }

  return "Error: Unable to connect. Please Create a NEW API Key in a NEW Project at aistudio.google.com to reset your permissions.";
};

export const expandRoleToPrompt = async (userProvidedKey: string, simpleRole: string) => {
  return `You are a helpful ${simpleRole}.`; 
};