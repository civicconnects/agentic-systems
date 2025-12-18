"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Mic, MicOff, UploadCloud, FileText, Play, Settings, Loader2, Volume2, StopCircle } from 'lucide-react';

// Types for our sophisticated agent
interface Agent {
  id: string | number;
  name: string;
  role: string;
  systemInstruction?: string;
  firstMessage?: string;
  mode?: 'text' | 'voice';
  color?: string;
}

export default function ChatModal({ agent, onClose }: { agent: Agent, onClose: () => void }) {
  // STATE: Flow & Config
  const isCustomBuilder = agent.id === 'custom_builder';
  const [view, setView] = useState(isCustomBuilder ? 'config' : 'chat'); // 'config' | 'chat'
  
  // STATE: Custom Agent Builder
  const [customName, setCustomName] = useState('');
  const [customRole, setCustomRole] = useState('');
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isBuilding, setIsBuilding] = useState(false);

  // STATE: Chat & Voice
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // --- 1. INITIALIZATION & GREETING ---
  useEffect(() => {
    // If it's a pre-made agent, trigger the greeting immediately
    if (!isCustomBuilder && messages.length === 0) {
      const greeting = agent.firstMessage || `Hello. I am ${agent.name}. How can I assist?`;
      setMessages([{ role: 'bot', text: greeting }]);
      
      // If Voice Mode, speak immediately
      if (agent.mode === 'voice') {
        speakText(greeting);
      }
    }
  }, [agent, isCustomBuilder]);

  // Scroll to bottom effect
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // --- 2. VOICE ENGINE (Web Speech API) ---
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop previous
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.1; // Slightly faster for "AI" feel
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        
        recognitionRef.current.onstart = () => setIsListening(true);
        
        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          handleSend(transcript); // Auto-send on voice end
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error("Speech error", event);
          setIsListening(false);
        };

        recognitionRef.current.onend = () => setIsListening(false);
        
        recognitionRef.current.start();
      } else {
        alert("Voice input not supported in this browser.");
      }
    }
  };

  // --- 3. CUSTOM AGENT BUILDER LOGIC ---
  const handleInitializeCustom = () => {
    if (!customName || !customRole) return;
    setIsBuilding(true);
    
    // Simulate "Vectorizing" and "Building"
    setTimeout(() => {
      setIsBuilding(false);
      setView('chat');
      setMessages([{ 
        role: 'bot', 
        text: `System Online. I am ${customName}. My role is ${customRole}. I have indexed your file: "${customFile?.name || 'No file'}". Ready for instructions.` 
      }]);
    }, 2000);
  };

  // --- 4. CHAT LOGIC (The "Brain") ---
  const handleSend = async (textOverride?: string) => {
    const userText = textOverride || input;
    if (!userText.trim()) return;

    // 1. Add User Message
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    // 2. CONSTRUCT SYSTEM PROMPT (Simulation of API Payload)
    const systemPayload = {
      agent: isCustomBuilder ? customName : agent.name,
      role: isCustomBuilder ? customRole : agent.role,
      instruction: agent.systemInstruction || "You are a helpful AI assistant.",
      context: isCustomBuilder ? customFile?.name : "Internal Knowledge Base",
      userQuery: userText
    };

    console.log("🚀 SENDING TO LLM API:", systemPayload);

    // 3. GENERATE RESPONSE (Simulated Latency & Logic)
    setTimeout(() => {
      setIsTyping(false);
      
      let reply = "";
      
      // Dynamic Response Logic based on Persona
      if (agent.mode === 'voice') {
        // Short, spoken responses for voice agents
        if (agent.name.includes("Front Desk")) reply = "I can certainly help with that. Connecting you now.";
        else if (agent.name.includes("Voice Ops")) reply = "Copy that. Routing updated. ETA 15 minutes.";
        else reply = "Understood. Processing your request.";
      } else {
        // Detailed text responses for text agents
        if (isCustomBuilder) reply = `[Custom Agent: ${customName}] Based on the uploaded context from ${customFile?.name || 'memory'}, here is the analysis regarding "${userText}"...`;
        else if (agent.name.includes("Sentinel")) reply = "I've reviewed the employee handbook. According to Section 4.2, that request requires VP approval. Shall I draft the form?";
        else if (agent.name.includes("Analyst")) reply = "Data analysis complete. I detect a 12% inefficiency in the supply chain node. Recommending immediate rerouting.";
        else if (agent.name.includes("Closer")) reply = "I love the enthusiasm! Let's lock this in. If I can show you a 5x ROI by Friday, are you ready to sign today?";
        else if (agent.name.includes("Architect")) reply = "That's a good start, but it lacks punch. Let's rephrase it to trigger 'Fear of Missing Out'. Here are 3 viral variations...";
        else reply = `I have received your message: "${userText}". How else can I help?`;
      }

      setMessages(prev => [...prev, { role: 'bot', text: reply }]);

      // Auto-speak if in voice mode
      if (agent.mode === 'voice') {
        speakText(reply);
      }

    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 font-sans">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl shadow-2xl flex flex-col h-[700px] animate-in zoom-in-95 duration-200 overflow-hidden relative">
        
        {/* HEADER */}
        <div className={`p-6 border-b border-slate-800 flex justify-between items-center ${isCustomBuilder ? 'bg-indigo-900/20' : agent.color || 'bg-slate-800'}`}>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
              {isCustomBuilder ? <Settings className="w-8 h-8 text-white" /> : <Bot className="w-8 h-8 text-white" />}
            </div>
            <div>
              <h3 className="font-bold text-xl text-white">{isCustomBuilder ? (customName || "Agent Builder") : agent.name}</h3>
              <p className="text-xs text-white/70 font-mono tracking-wide">
                {isCustomBuilder ? "CONFIGURE & DEPLOY" : `${agent.role.toUpperCase()} • ONLINE`}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* --- VIEW: BUILDER CONFIG (Custom Only) --- */}
        {view === 'config' && (
          <div className="flex-1 p-8 flex flex-col justify-center space-y-8 bg-slate-950">
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-400 uppercase tracking-wider">Step 1: Identity</label>
              <input 
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="Name your agent (e.g. Legal Eagle)" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-purple-400 uppercase tracking-wider">Step 2: Prime Directive</label>
              <textarea 
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                placeholder="Define the role (e.g. 'You are a senior attorney. Review contracts for risk.')" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-purple-500 outline-none transition-all h-32 resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-green-400 uppercase tracking-wider">Step 3: Knowledge Base</label>
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-colors cursor-pointer bg-slate-900/50">
                <input type="file" className="hidden" id="file-upload" onChange={(e) => setCustomFile(e.target.files?.[0] || null)} />
                <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
                  <UploadCloud className="w-8 h-8 text-slate-500" />
                  <span className="text-slate-300 font-medium">{customFile ? customFile.name : "Upload PDF, CSV, or TXT"}</span>
                </label>
              </div>
            </div>

            <button 
              onClick={handleInitializeCustom}
              disabled={!customName || !customRole || isBuilding}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                (!customName || !customRole) ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20'
              }`}
            >
              {isBuilding ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
              {isBuilding ? "Vectorizing Data..." : "Initialize Agent"}
            </button>
          </div>
        )}

        {/* --- VIEW: CHAT INTERFACE --- */}
        {view === 'chat' && (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950 scrollbar-thin scrollbar-thumb-slate-800">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-6 py-4 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 border border-slate-700">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}
            <div className="p-4 border-t border-slate-800 bg-slate-900">
              <div className="flex gap-3">
                {/* Voice Toggle */}
                {(agent.mode === 'voice' || isCustomBuilder) && (
                   <button 
                     onClick={toggleListening}
                     className={`p-4 rounded-xl transition-all ${isListening ? 'bg-red-500/20 text-red-400 animate-pulse border border-red-500/50' : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'}`}
                   >
                     {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                   </button>
                )}

                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={agent.mode === 'voice' && isListening ? "Listening..." : "Type your instruction..."}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                />
                
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-4 rounded-xl transition-colors shadow-lg shadow-blue-900/20"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {agent.mode === 'voice' && (
                <div className="text-center mt-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
                        {isSpeaking ? <><Volume2 className="w-3 h-3 text-green-500 animate-pulse" /> Speaking</> : "Voice Engine Standby"}
                    </span>
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </div>
  );
}