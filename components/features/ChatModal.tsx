"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

export default function ChatModal({ agent, onClose }: any) {
  // FIX 1: Added backticks around the initial message text
  const [messages, setMessages] = useState<any[]>([
    { role: 'bot', text: `Hi! I'm ${agent.name}. ${agent.greeting}` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const userInput = input;
    setInput('');
    setIsTyping(true);

    // Simulate AI delay and response
    setTimeout(() => {
      setIsTyping(false);
      // FIX 2: Added backticks around the bot response text
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: `[DEMO MODE] That's a great question about ${userInput}. In a live deployment, I would process this using your knowledge base and provide a specific answer.` 
      }]);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl flex flex-col h-[600px] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        {/* FIX 3: Added backticks around the className string */}
        <div className={`p-4 border-b border-slate-800 flex justify-between items-center rounded-t-2xl ${agent.color}`}>
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

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
          {messages.map((msg, idx) => (
            // FIX 4: Added backticks around the className string
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
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

        {/* Input Area */}
        <div className="p-4 border-t border-slate-800 bg-slate-900 rounded-b-2xl">
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

      </div>
    </div>
  );
}