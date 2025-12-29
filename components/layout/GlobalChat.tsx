"use client";
import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { generateAIResponse } from '@/utils/ai-engine';

export default function GlobalChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Welcome to Agentic Systems. I am The Concierge. How can I direct you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setMessages([...messages, { role: 'user', text: userText }]);
    setInput("");
    setIsTyping(true);

    try {
      // Use the AI engine to get real responses from n8n
      const systemPrompt = "You are The Concierge, a helpful AI assistant for Agentic Systems. You help visitors navigate the website, answer questions about services (Voice Agents, N8N Automation, Custom Swarms), pricing, and case studies. Be professional, concise, and helpful.";

      const conversationHistory = messages.map(m => ({
        role: m.role === 'bot' ? 'assistant' : 'user',
        content: m.text
      })).concat({ role: 'user', content: userText });

      const reply = await generateAIResponse(conversationHistory, systemPrompt);

      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    } catch (error) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: 'bot',
        text: "I'm having trouble connecting right now. Please try again in a moment."
      }]);
    }
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
            {isTyping && (
              <div className="bg-slate-800 text-slate-200 text-sm p-3 rounded-xl flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Thinking...</span>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-slate-800">
            <div className="flex gap-2">
              <input
                className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 outline-none"
                placeholder="Type..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 p-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isTyping}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}