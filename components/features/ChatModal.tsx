"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, UploadCloud, FileText, CheckCircle, Loader2, Lock } from 'lucide-react';

export default function ChatModal({ agent, onClose }: any) {
  // State for the "Custom Agent" flow
  const isCustom = agent.id === 'custom';
  const [step, setStep] = useState(isCustom ? 'upload' : 'chat'); // 'upload', 'processing', 'chat'
  const [file, setFile] = useState<File | null>(null);

  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Initialize generic agents
  useEffect(() => {
    if (!isCustom) {
      // FIX: Added backticks
      setMessages([{ role: 'bot', text: `Hi! I'm ${agent.name}. ${agent.greeting}` }]);
    }
  }, [agent, isCustom]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  // Handle File Upload for Custom Agent
  const handleFileUpload = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setStep('processing');
      
      // Simulate "AI Training" delay
      setTimeout(() => {
        setStep('chat');
        // FIX: Added backticks
        setMessages([
          { role: 'bot', text: `Analysis complete! I have processed "${selectedFile.name}".` },
          { role: 'bot', text: `Since this is a public demo, I cannot display private data from your PDF here for security reasons. However, I am now ready to be deployed securely on your private server. Enter your email below to get a quote for this specific agent!` }
        ]);
      }, 3000);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const userInput = input;
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      
      // FIX: Added backticks
      let reply = `[DEMO] That's a great question about "${userInput}". In a live version, I would check your knowledge base and answer instantly.`;
      
      // Special logic if they enter an email (Lead Gen)
      if (userInput.includes('@')) {
        reply = "Thanks! I've saved your email. A senior automation architect will contact you to build this custom bot.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl flex flex-col h-[600px] animate-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Header */}
        {/* FIX: Added backticks */}
        <div className={`p-4 border-b border-slate-800 flex justify-between items-center ${agent.color}`}>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">{agent.name}</h3>
              <p className="text-xs text-white/80">{agent.role}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* --- STEP 1: UPLOAD MODE (Custom Only) --- */}
        {step === 'upload' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6 bg-slate-950/50">
            <div className="bg-blue-500/10 p-6 rounded-full">
              <UploadCloud className="w-16 h-16 text-blue-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Train Your Agent</h3>
              <p className="text-slate-400 max-w-xs mx-auto">
                Upload your company PDF, FAQ, or Employee Handbook. I will analyze it to answer questions.
              </p>
            </div>
            
            <label className="cursor-pointer group">
              <input type="file" className="hidden" accept=".pdf,.doc,.docx,.txt" onChange={handleFileUpload} />
              <div className="bg-blue-600 group-hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Select Document
              </div>
            </label>
            <p className="text-xs text-slate-600 flex items-center gap-1">
              <Lock className="w-3 h-3" /> Files are processed securely
            </p>
          </div>
        )}

        {/* --- STEP 2: PROCESSING MODE (Custom Only) --- */}
        {step === 'processing' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 bg-slate-950/50">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-slate-800 border-t-blue-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Bot className="w-10 h-10 text-slate-500 animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white animate-pulse">Analyzing Document...</h3>
              <div className="text-sm text-slate-500 space-y-1">
                {/* FIX: Added backticks */}
                <p>Reading "{file?.name}"...</p>
                <p className="delay-75">Extracting key entities...</p>
                <p className="delay-150">Building vector index...</p>
              </div>
            </div>
          </div>
        )}

        {/* --- STEP 3: CHAT MODE (Standard) --- */}
        {step === 'chat' && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
              {messages.map((msg, idx) => (
                // FIX: Added backticks
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
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
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-900">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}