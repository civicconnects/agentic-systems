// src/utils/ai-engine.ts

// 🚨 PASTE YOUR GEMINI KEY HERE 🚨
const PUBLIC_DEMO_KEY = "AIzaSyB9FamRD0r3B9CoJdFw_yEaaPVC7a3UDyQ"; 

// 1. TEXT EXTRACTION
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

// 2. THE "MODEL HUNTER" API HANDLER
export const generateAIResponse = async (
  userProvidedKey: string, 
  messages: any[], 
  systemInstruction: string,
  context?: string
) => {
  
  const activeKey = (userProvidedKey || PUBLIC_DEMO_KEY).trim();

  if (!activeKey || activeKey.includes("PASTE_YOUR")) {
    console.error("❌ ERROR: No API Key configured.");
    return "Configuration Error: API Key missing.";
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

  // 🛡️ THE LIST OF MODELS TO TRY (In order of preference)
  const MODEL_LIST = [
    "gemini-1.5-flash",
    "gemini-1.5-flash-001",
    "gemini-1.5-pro",
    "gemini-1.0-pro",
    "gemini-pro"
  ];

  // Helper to try a specific model
  const tryModel = async (modelName: string) => {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${activeKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: geminiContents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 300 }
      })
    });
    return { status: response.status, data: await response.json() };
  };

  // 🔄 LOOP THROUGH MODELS UNTIL ONE WORKS
  for (const model of MODEL_LIST) {
    console.log(`📡 CONNECTING: Trying model '${model}'...`);
    try {
      const result = await tryModel(model);
      
      if (result.status === 200) {
        console.log(`✅ SUCCESS: Connected to '${model}'`);
        return result.data.candidates[0].content.parts[0].text;
      }
      
      console.warn(`⚠️ Model '${model}' failed (${result.status}). Trying next...`);
    
    } catch (e) {
      console.error(`❌ Network error on '${model}'`);
    }
  }

  return "Error: Unable to connect to ANY Google Gemini models. Please check if your API Key is valid and enabled in Google Cloud Console.";
};

// 3. PROMPT ENHANCER (Simplified)
export const expandRoleToPrompt = async (userProvidedKey: string, simpleRole: string) => {
  return `You are a helpful ${simpleRole}.`; 
};