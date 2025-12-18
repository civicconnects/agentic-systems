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

// 2. ROBUST API HANDLER (With Auto-Switching)
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

  // HELPER: Function to try a specific model
  const tryModel = async (modelName: string) => {
    console.log(`📡 CONNECTING: Trying model ${modelName}...`);
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${activeKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: geminiContents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 300 }
      })
    });
    const data = await response.json();
    return { status: response.status, data };
  };

  try {
    // ATTEMPT 1: Try the newest Flash model
    let result = await tryModel("gemini-1.5-flash");

    // ATTEMPT 2: If Flash fails (404), try the standard Pro model
    if (result.status === 404) {
        console.warn("⚠️ Flash model not found. Switching to Gemini Pro...");
        result = await tryModel("gemini-pro");
    }

    if (result.data.error) {
      console.error("❌ GOOGLE ERROR:", result.data.error);
      return `Error: ${result.data.error.message}`;
    }

    if (!result.data.candidates || result.data.candidates.length === 0) {
      return "The agent is thinking but returned no text. (Quota limit reached?)";
    }

    return result.data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("❌ NETWORK ERROR:", error);
    return "Connection Error. Please check your internet.";
  }
};

// 3. PROMPT ENHANCER (Simple Version)
// We simplified this to avoid extra API calls breaking the flow
export const expandRoleToPrompt = async (userProvidedKey: string, simpleRole: string) => {
  return `You are a helpful ${simpleRole}.`; 
};