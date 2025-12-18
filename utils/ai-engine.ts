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

// 2. API HANDLER (Stable Version)
export const generateAIResponse = async (
  userProvidedKey: string, 
  messages: any[], 
  systemInstruction: string,
  context?: string
) => {
  
  // Use User Key or Public Key
  const activeKey = (userProvidedKey || PUBLIC_DEMO_KEY).trim();

  if (!activeKey || activeKey.includes("PASTE_YOUR")) {
    console.error("❌ ERROR: No API Key configured.");
    return "Configuration Error: API Key missing.";
  }

  // Inject Context
  const finalSystemPrompt = context 
    ? `${systemInstruction}\n\nCONTEXT FROM USER FILE:\n${context.substring(0, 30000)}` 
    : systemInstruction;

  // Format for Gemini
  const geminiContents = [
    { role: 'user', parts: [{ text: `SYSTEM INSTRUCTION: ${finalSystemPrompt}` }] },
    ...messages.map(m => ({
      role: m.role === 'bot' ? 'model' : 'user',
      parts: [{ text: m.text || m.content }]
    }))
  ];

  try {
    console.log("📡 CONNECTING: Sending to Google Gemini...");
    
    // UPDATED TO STABLE VERSION: gemini-1.5-flash-001
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-001:generateContent?key=${activeKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: geminiContents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 300 }
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("❌ GOOGLE ERROR:", data.error);
      return `Error: ${data.error.message}`;
    }

    if (!data.candidates || data.candidates.length === 0) {
      return "The agent received your message but generated no response. (Check API quota)";
    }

    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("❌ NETWORK ERROR:", error);
    return "Connection Error. Please check your internet.";
  }
};

// 3. PROMPT ENHANCER (Stable Version)
export const expandRoleToPrompt = async (userProvidedKey: string, simpleRole: string) => {
  const activeKey = (userProvidedKey || PUBLIC_DEMO_KEY).trim();
  if (!activeKey) return `You are a helpful ${simpleRole}.`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-001:generateContent?key=${activeKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: `Write a system prompt for: ${simpleRole}` }] }]
      })
    });
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (e) {
    return `You are a ${simpleRole}.`;
  }
};