"use client"; // This is required because we use "state" (interactive parts)

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

type Message = {
  role: 'bot' | 'user';
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hello! I am the Agentic Systems virtual assistant. How can we help automate your business today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Add User Message
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // 2. Simulate AI "Thinking" (We will replace this with N8N later)
    setTimeout(() => {
      let botResponse = "That sounds like a great use case for our Autonomous Agents. Would you like to book a strategy call to discuss the details?";
      
      // Simple keyword detection to make it feel smarter
      if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('cost')) {
        botResponse = "Our automation packages start at $2,500 depending on complexity. Do you have a specific workflow in mind?";
      } else if (userMessage.toLowerCase().includes('voice')) {
        botResponse = "Voice Agents are our specialty! We use Vapi to create human-sounding callers. Do you need inbound support or outbound sales?";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500); // 1.5 second delay
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* 1. Toggle Button (Visible when chat is closed) */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-110 flex items-center gap-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="font-semibold hidden sm:inline">Ask AI</span>
        </button>
      )}

      {/* 2. Chat Window (Visible when chat is open) */}
      {isOpen && (
        <div className="bg-slate-900 border border-slate-700 w-[350px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-bold text-white">Agentic Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'bot' ? 'bg-blue-600/20 text-blue-400' : 'bg-slate-700 text-slate-300'}`}>
                  {msg.role === 'bot' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
                <div className={`p-3 rounded-lg text-sm max-w-[80%] ${msg.role === 'bot' ? 'bg-slate-800 text-slate-200' : 'bg-blue-600 text-white'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-slate-800 p-4 rounded-lg flex gap-1 items-center">
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900 border-t border-slate-700">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}