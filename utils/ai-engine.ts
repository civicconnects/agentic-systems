// src/utils/ai-engine.ts

// 🚨 PASTE YOUR GEMINI KEY HERE 🚨
const PUBLIC_DEMO_KEY = "AIzaSyB9FamRD0r3B9CoJdFw_yEaaPVC7a3UDyQ"; 

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

  // 🛡️ THE MATRIX: Try every combination of Version + Model
  const ENDPOINTS = [
    { ver: "v1beta", model: "gemini-1.5-flash" },
    { ver: "v1beta", model: "gemini-1.5-flash-latest" },
    { ver: "v1beta", model: "gemini-pro" },
    { ver: "v1", model: "gemini-1.5-flash" }, // Try Stable API
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

      // IF SUCCESS:
      if (response.ok && data.candidates) {
        console.log(`✅ SUCCESS: Connected via ${ver}/${model}`);
        return data.candidates[0].content.parts[0].text;
      }

      // IF ERROR: Log the specific message from Google
      if (data.error) {
        console.warn(`⚠️ Failed on ${model}:`, data.error.message);
        
        // Critical Check: Did the user forget to enable the API?
        if (data.error.message.includes("API has not been used") || data.error.message.includes("Enable it")) {
            return "CRITICAL ERROR: You created a Key, but did not ENABLE the 'Generative Language API' in Google Console. Please go to console.cloud.google.com and enable it.";
        }
      }
    
    } catch (e) {
      console.error(`❌ Network error on ${model}`);
    }
  }

  return "Error: Unable to connect to Google Gemini. Please check the Console Logs (F12) to see the specific error message from Google.";
};

export const expandRoleToPrompt = async (userProvidedKey: string, simpleRole: string) => {
  return `You are a helpful ${simpleRole}.`; 
};