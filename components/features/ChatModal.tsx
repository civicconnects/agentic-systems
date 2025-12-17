"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, UploadCloud, FileText, Lock, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function ChatModal({ agent, onClose }: any) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
      // FIX: Backticks added
      setMessages([{ role: 'bot', text: `Identity Verified: ${agent.name}. ${agent.greeting}` }]);
  }, [agent]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const userInput = input;
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      // FIX: Backticks added
      let reply = `[DEMO RESPONSE] I am roleplaying as ${agent.role}. You asked about "${userInput}". In a live environment, I would query your private database to answer this.`;
      
      if (userInput.includes('@')) {
        reply = "Secure handshake initiated. I have logged your contact info. An Architect will deploy your private instance shortly.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 1500);
  };

  const handleFileSelect = (e: any) => {
      const f = e.target.files[0];
      if (f) {
          setFile(f);
          setShowUpload(false);
          setMessages(prev => [...prev, { role: 'user', text: `Uploaded: ${f.name}` }]);
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            // FIX: Backticks added
            setMessages(prev => [...prev, { role: 'bot', text: `I have analyzed "${f.name}". Security protocol active: This file will be purged in 24 hours. What would you like to know about this document?` }]);
          }, 2000);
      }
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-white/10 w-full max-w-2xl rounded-3xl shadow-2xl flex flex-col h-[700px] animate-in zoom-in-95 duration-200 overflow-hidden relative">
        
        {/* Header */}
        {/* FIX: Backticks added */}
        <div className={`p-6 border-b border-white/10 flex justify-between items-center ${agent.color}`}>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white">{agent.name}</h3>
              <div className="flex items-center gap-2 text-xs text-white/80 font-mono mt-1">
                 <ShieldCheck className="w-3 h-3" /> ENCRYPTED SESSION
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors bg-black/20 p-2 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950">
          
          {/* Trust Badge */}
          <div className="flex justify-center">
            <div className="bg-blue-900/20 border border-blue-500/20 rounded-full px-4 py-1.5 flex items-center gap-2 text-[10px] text-blue-400 font-mono tracking-tight uppercase">
                <Lock className="w-3 h-3" />
                Ephemeral Security Protocol: Data purged after 24h
            </div>
          </div>

          {messages.map((msg, idx) => (
            // FIX: Backticks added
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-900/20' 
                  : 'bg-white/5 text-slate-200 rounded-bl-none border border-white/10'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-white/5 rounded-2xl rounded-bl-none px-4 py-3 border border-white/10">
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

        {/* Upload Modal Overlay */}
        {showUpload && (
            <div className="absolute inset-0 bg-slate-950/90 z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-200">
                <div className="bg-amber-500/10 p-4 rounded-full mb-4">
                    <AlertTriangle className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Security Check</h3>
                <p className="text-slate-400 mb-8 max-w-sm text-sm">
                    Please upload non-sensitive business data for this public demo. Your file will be processed in a sandbox.
                </p>
                <label className="cursor-pointer group">
                    <input type="file" className="hidden" onChange={handleFileSelect} accept=".pdf,.txt,.csv" />
                    <div className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                        <FileText className="w-4 h-4" /> Select Document
                    </div>
                </label>
                <button onClick={() => setShowUpload(false)} className="mt-6 text-slate-500 hover:text-white text-sm">Cancel</button>
            </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-slate-900">
          <div className="flex gap-3">
            <button 
                onClick={() => setShowUpload(true)}
                className="p-3 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl transition-all"
                title="Upload Context"
            >
                <UploadCloud className="w-6 h-6" />
            </button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask your agent..."
              className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl transition-colors shadow-lg shadow-blue-900/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}