"use client";
import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function GlobalChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Welcome to Agentic Systems. I am The Concierge. How can I direct you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    const userText = input;
    setInput("");
    
    // Simple routing logic
    setTimeout(() => {
      let reply = "I can help with that. Would you like to see our Case Studies or Pricing?";
      if (userText.toLowerCase().includes('price') || userText.toLowerCase().includes('cost')) reply = "Our Pricing Plans start at $2,500. You can view them on the Home page.";
      if (userText.toLowerCase().includes('service')) reply = "We offer Voice Agents, N8N Automation, and Custom Swarms. Check our Services page.";
      
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl shadow-blue-600/40 hover:scale-110 transition-transform flex items-center gap-2"
        >
          <Bot className="w-6 h-6" />
          <span className="font-bold text-sm hidden md:inline">Ask Concierge</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-slate-900 border border-slate-700 w-80 h-96 rounded-2xl shadow-2xl flex flex-col animate-in slide-in-from-bottom-5">
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-blue-900/20 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-white text-sm">The Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 text-slate-400 hover:text-white" /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm p-3 rounded-xl ${m.role === 'bot' ? 'bg-slate-800 text-slate-200' : 'bg-blue-600 text-white ml-8'}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-slate-800">
            <div className="flex gap-2">
              <input 
                className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 outline-none"
                placeholder="Type..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} className="bg-blue-600 p-2 rounded-lg text-white"><Send className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}