// src/utils/ai-engine.ts

// 1. TEXT EXTRACTION ENGINE
export const extractTextFromFile = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    // Handle Text/CSV
    if (file.type === "text/plain" || file.type === "text/csv") {
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = (e) => reject(e);
      reader.readAsText(file);
    } 
    // Handle PDF (Simplified Text Extraction for Demo)
    // Note: Real production apps use 'pdf-parse' on server or 'pdfjs-dist' on client.
    // For this demo, we will simulate PDF reading to avoid heavy npm installs breaking your build.
    else if (file.type === "application/pdf") {
       // Simulate extraction delay
       setTimeout(() => {
         resolve(`[SYSTEM: Extracted Content from ${file.name}]\n\n(This is a simulated extraction for the demo. To parse real PDFs client-side, install 'pdfjs-dist'.)\n\nSample Context: The user is asking about specific compliance rules defined in Section 4.2...`);
       }, 1500);
    } else {
      resolve(`[File Type ${file.type} not supported for text extraction]`);
    }
  });
};

// 2. OPENAI API HANDLER
export const generateAIResponse = async (
  apiKey: string, 
  messages: any[], 
  systemInstruction: string,
  context?: string
) => {
  if (!apiKey) throw new Error("API Key Missing");

  // Inject Context if it exists
  const finalSystemPrompt = context 
    ? `${systemInstruction}\n\nCONTEXT FROM USER FILE:\n${context.substring(0, 10000)}` // Limit tokens
    : systemInstruction;

  const apiMessages = [
    { role: "system", content: finalSystemPrompt },
    ...messages
  ];

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Fast & Cheap for demos
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 150 // Keep replies snappy for voice
      })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.choices[0].message.content;

  } catch (error) {
    console.error("AI Error:", error);
    return "I apologize, but I am unable to connect to the neural network right now. Please check your API Key configuration.";
  }
};

// 3. THE "PRIME DIRECTIVE" (Prompt Enhancer)
export const expandRoleToPrompt = async (apiKey: string, simpleRole: string) => {
  if (!apiKey) return `You are a helpful ${simpleRole}.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ 
        role: "user", 
        content: `Write a robust, professional system prompt (max 50 words) for an AI Agent with the job title: "${simpleRole}". It should define tone, goals, and behavior.` 
      }],
    })
  });

  const data = await response.json();
  return data.choices[0].message.content || `You are a ${simpleRole}.`;
};