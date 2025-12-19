"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Mic, MicOff, UploadCloud, Play, Settings, Loader2, Volume2, PhoneForwarded } from 'lucide-react';
import { generateAIResponse, expandRoleToPrompt, extractTextFromFile } from '@/utils/ai-engine';

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
  const isCustomBuilder = agent.id === 'custom_builder';
  const [view, setView] = useState(isCustomBuilder ? 'config' : 'chat');
  
  // Builder State
  const [customName, setCustomName] = useState('');
  const [customRole, setCustomRole] = useState('');
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [fileContext, setFileContext] = useState('');
  const [isBuilding, setIsBuilding] = useState(false);

  // Chat State
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false); // 🆕 Transfer State
  
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const silenceTimer = useRef<any>(null);

  // 🛡️ TASK 3: STRICT CLEANUP ON UNMOUNT
  useEffect(() => {
    // Initial Greeting
    if (!isCustomBuilder && messages.length === 0) {
      const greeting = agent.firstMessage || `Hello. I am ${agent.name}. How can I assist?`;
      setMessages([{ role: 'bot', text: greeting }]);
      if (agent.mode === 'voice') speakText(greeting);
    }

    // Cleanup Function: Runs when component closes/unmounts
    return () => {
      console.log("🛑 CLEANUP: Stopping all audio threads.");
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Kill voice immediately
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop(); // Kill mic immediately
      }
      if (silenceTimer.current) {
        clearTimeout(silenceTimer.current);
      }
    };
  }, [agent]); // Only run on mount/agent change

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isTransferring]);

  // Voice Output
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop previous speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.1; 
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  // 🎤 TASK 1: FIX MICROPHONE TIMEOUT (2.5s)
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true; 
        recognitionRef.current.interimResults = true; 

        recognitionRef.current.onstart = () => setIsListening(true);
        
        recognitionRef.current.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            .map((result: any) => result[0].transcript)
            .join('');
            
          setInput(transcript);

          // 🆕 UPDATED LOGIC: Wait 2.5 seconds (2500ms) before cutting off
          if (silenceTimer.current) clearTimeout(silenceTimer.current);
          
          silenceTimer.current = setTimeout(() => {
            recognitionRef.current?.stop();
            setIsListening(false);
            handleSend(transcript); 
          }, 2500); // Increased from 1s/2s to 2.5s for better UX
        };

        recognitionRef.current.onend = () => {
             setIsListening(false);
        };
        
        recognitionRef.current.start();
      } else {
        alert("Voice input not supported in this browser.");
      }
    }
  };

  const handleInitializeCustom = async () => {
    if (!customName || !customRole) return;
    setIsBuilding(true);

    try {
      if (customFile) {
        const context = await extractTextFromFile(customFile);
        setFileContext(context);
      }
      const expandedSystemPrompt = await expandRoleToPrompt(customRole);
      setIsBuilding(false);
      setView('chat');
      agent.name = customName;
      agent.systemInstruction = expandedSystemPrompt;
      setMessages([{ 
        role: 'bot', 
        text: `System Online. I am ${customName}. My directives have been updated. Ready.` 
      }]);
    } catch (error) {
      console.error(error);
      setIsBuilding(false);
    }
  };

  // 📞 TASK 2: TRANSFER SIMULATION LOGIC
  const handleSend = async (textOverride?: string) => {
    const userText = textOverride || input;
    if (!userText.trim()) return;

    // Add User Message
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');

    // CHECK FOR TRANSFER TRIGGER
    const lowerText = userText.toLowerCase();
    if (lowerText.includes("transfer") || lowerText.includes("speak with") || lowerText.includes("speak to")) {
        
        // 1. Immediate Feedback
        setIsTransferring(true);
        const holdMsg = "Let me see if they are available. Please hold...";
        speakText(holdMsg);
        
        // 2. The 5-Second Delay
        setTimeout(() => {
            setIsTransferring(false);
            const failMsg = "I apologize, they are currently unavailable. Would you like to leave a message?";
            
            // 3. The Result
            setMessages(prev => [...prev, { role: 'bot', text: failMsg }]);
            speakText(failMsg);
        }, 5000);

        return; // ⛔ STOP HERE. Do not call the AI Engine.
    }

    // NORMAL AI FLOW
    setIsTyping(true);
    const sysPrompt = agent.systemInstruction || "You are a helpful AI assistant.";

    try {
      const reply = await generateAIResponse(
        messages.map(m => ({ role: m.role, content: m.text })).concat({ role: 'user', content: userText }), 
        sysPrompt,
        fileContext
      );
      
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
      if (agent.mode === 'voice') speakText(reply);

    } catch (err) {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: "Error connecting to Agent Network." }]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 font-sans">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl shadow-2xl flex flex-col h-[700px] animate-in zoom-in-95 duration-200 overflow-hidden relative">
        
        {/* Header */}
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

        {view === 'config' && (
          <div className="flex-1 p-8 flex flex-col justify-center space-y-8 bg-slate-950">
             {/* ... Builder UI (No Changes Here) ... */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-400 uppercase tracking-wider">Step 1: Identity</label>
              <input value={customName} onChange={(e) => setCustomName(e.target.value)} placeholder="Name your agent" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-purple-400 uppercase tracking-wider">Step 2: Prime Directive</label>
              <textarea value={customRole} onChange={(e) => setCustomRole(e.target.value)} placeholder="Define role" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-purple-500 outline-none h-32 resize-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-green-400 uppercase tracking-wider">Step 3: Knowledge Base</label>
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-colors cursor-pointer bg-slate-900/50">
                <input type="file" className="hidden" id="file-upload" onChange={(e) => setCustomFile(e.target.files?.[0] || null)} />
                <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
                  <UploadCloud className="w-8 h-8 text-slate-500" />
                  <span className="text-slate-300 font-medium">{customFile ? customFile.name : "Upload TXT, CSV, or PDF"}</span>
                </label>
              </div>
            </div>
            <button onClick={handleInitializeCustom} disabled={!customName || !customRole || isBuilding} className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${(!customName || !customRole) ? 'bg-slate-800 text-slate-500' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}>
              {isBuilding ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
              {isBuilding ? "Initializing..." : "Initialize Agent"}
            </button>
          </div>
        )}

        {view === 'chat' && (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-6 py-4 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* TYPING INDICATOR */}
              {isTyping && <div className="flex justify-start"><div className="bg-slate-800 rounded-2xl px-4 py-3"><Loader2 className="w-4 h-4 animate-spin text-slate-500" /></div></div>}
              
              {/* 🆕 TRANSFER INDICATOR */}
              {isTransferring && (
                  <div className="flex justify-center my-4">
                      <div className="bg-blue-900/30 border border-blue-500/30 text-blue-200 px-6 py-2 rounded-full flex items-center gap-3 animate-pulse">
                          <PhoneForwarded className="w-4 h-4" />
                          <span className="text-xs font-bold tracking-wider uppercase">Transferring Call...</span>
                      </div>
                  </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-900">
              <div className="flex gap-3">
                {(agent.mode === 'voice' || isCustomBuilder) && (
                   <button onClick={toggleListening} className={`p-4 rounded-xl transition-all ${isListening ? 'bg-red-500/20 text-red-400 animate-pulse border border-red-500/50' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>
                     {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                   </button>
                )}
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Type your instruction..." className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
                <button onClick={() => handleSend()} className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-xl"><Send className="w-5 h-5" /></button>
              </div>
              {isSpeaking && <div className="text-center mt-2 text-[10px] text-green-500 animate-pulse flex justify-center gap-2"><Volume2 className="w-3 h-3"/> SPEAKING</div>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}