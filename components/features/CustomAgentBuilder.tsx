import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Bot, Check, Play, User, Sparkles, MessageSquare, ArrowRight, FileText } from 'lucide-react';
import { generateAIResponse } from '@/utils/ai-engine';

interface CustomAgentBuilderProps {
    onClose: () => void;
    initialAgentName?: string;
    initialAgentRole?: string;
}

const CustomAgentBuilder: React.FC<CustomAgentBuilderProps> = ({ onClose, initialAgentName = '', initialAgentRole = '' }) => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Agent Config State
    const [agentName, setAgentName] = useState(initialAgentName);
    const [agentRole, setAgentRole] = useState(initialAgentRole);
    const [knowledgeBase, setKnowledgeBase] = useState('');
    const [fileName, setFileName] = useState('');

    // Chat Integration State
    const [messages, setMessages] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState('');

    // Auto-scroll to bottom of chat
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Handle uploading (simulation)
    const handleFileUpload = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setKnowledgeBase(prev => prev + `\n[Uploaded Content from ${file.name} for context]`);
        }
    };

    const startChat = () => {
        setMessages([{ role: 'system', content: `Hello! I am ${agentName}. I have been trained on your specific data. How can I help you today?` }]);
        setStep(2);
    };

    const handleChatSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMsg = { role: 'user', content: inputValue };
        const newHistory = [...messages, newMsg];
        setMessages(newHistory);
        setInputValue('');
        setIsLoading(true);

        try {
            // Construct a system prompt that enforces the persona
            const systemInstruction = `You are ${agentName}, a ${agentRole}. 
      You are a specialized digital employee.
      IMPORTANT: Use the provided context to answer questions. If the answer is in the context, prioritize it.
      Tone: Professional, helpful, and concise.`;

            const response = await generateAIResponse(
                newHistory,
                systemInstruction,
                knowledgeBase // RAG Context
            );

            setMessages([...newHistory, { role: 'assistant', content: response }]);
        } catch (err) {
            setMessages([...newHistory, { role: 'assistant', content: "I'm having trouble connecting to the neural network. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-slate-900 w-full max-w-5xl h-[80vh] min-h-[600px] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-800 ring-1 ring-white/10">

                {/* LEFT SIDE: CONFIGURATION PANEL */}
                <div className="w-full md:w-[400px] bg-slate-950 p-8 border-r border-slate-800 flex flex-col relative shrink-0">
                    <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-800 rounded-full text-slate-500 hover:text-white transition-colors">
                        <X size={20} />
                    </button>

                    <div className="mb-8">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                            <Bot className="text-blue-500" size={24} />
                        </div>
                        <h2 className="text-2xl font-black text-white mb-2">AI Forge</h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Design a custom neural agent tailored to your workflow.
                        </p>
                    </div>

                    <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">

                        {/* Step 1: Identity */}
                        <div className={`transition-all duration-300 ${step === 2 ? 'opacity-50 pointer-events-none grayscale' : 'opacity-100'}`}>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">1. Agent Identity</label>
                            <div className="space-y-4">
                                <div>
                                    <input
                                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                                        placeholder="Name (e.g. Leasing Assistant)"
                                        value={agentName}
                                        onChange={e => setAgentName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all h-24 text-sm resize-none leading-relaxed"
                                        placeholder="Role Description (e.g. You are a helpful leasing agent who explains rent policies...)"
                                        value={agentRole}
                                        onChange={e => setAgentRole(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Knowledge */}
                        <div className={`transition-all duration-300 ${step === 2 ? 'opacity-50 pointer-events-none grayscale' : 'opacity-100'}`}>
                            <div className="flex justify-between items-center mb-3">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">2. Knowledge Base</label>
                                {fileName && <span className="text-[10px] text-green-400 flex items-center gap-1"><Check size={10} /> {fileName}</span>}
                            </div>

                            <div className="relative group">
                                <input
                                    type="file"
                                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                    onChange={handleFileUpload}
                                />
                                <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${fileName ? 'border-green-500/30 bg-green-500/5' : 'border-slate-800 hover:border-blue-500/50 hover:bg-slate-900'}`}>
                                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-3 border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                                        {fileName ? <FileText size={18} className="text-green-400" /> : <Upload size={18} className="text-slate-400 group-hover:text-blue-400" />}
                                    </div>
                                    <p className="text-xs text-slate-400 font-medium">
                                        {fileName ? 'File Successfully Loaded' : 'Drop PDF, TXT, or CSV'}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-2">Or Paste Text Context</p>
                                <textarea
                                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-xs h-32 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none leading-relaxed text-slate-300"
                                    placeholder="// Paste policies, pricing, or FAQs here for the agent to learn..."
                                    value={knowledgeBase}
                                    onChange={e => setKnowledgeBase(e.target.value)}
                                />
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-900">
                        {step === 1 ? (
                            <button
                                disabled={!agentName || !agentRole}
                                onClick={startChat}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
                            >
                                <Sparkles size={18} /> Initialize Agent
                            </button>
                        ) : (
                            <button
                                onClick={() => setStep(1)}
                                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition-colors text-sm"
                            >
                                Edit Configuration
                            </button>
                        )}
                    </div>
                </div>

                {/* RIGHT SIDE: PREVIEW CHAT */}
                <div className="flex-1 bg-slate-900 flex flex-col relative overflow-hidden">

                    {/* BACKGROUND DECORATION */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                    {/* ZERO STATE */}
                    {step === 1 && (
                        <div className="flex-1 flex flex-col items-center justify-center text-slate-600 p-12 text-center">
                            <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/5">
                                <Bot size={40} className="text-slate-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-700 mb-2">Agent Offline</h3>
                            <p className="max-w-xs text-slate-600 leading-relaxed">
                                Configure your agent's identity and knowledge base on the left to activate the neural interface.
                            </p>
                        </div>
                    )}

                    {/* ACTIVE CHAT */}
                    {step === 2 && (
                        <>
                            {/* CHAT HEADER */}
                            <div className="p-6 border-b border-slate-800 flex items-center gap-4 bg-slate-900/50 backdrop-blur-sm z-10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-2 ring-slate-900">
                                    {agentName[0]?.toUpperCase() || 'A'}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">{agentName || 'Custom Agent'}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="flex h-2 w-2 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <span className="text-xs text-green-400 font-medium tracking-wide uppercase">System Online</span>
                                    </div>
                                </div>
                            </div>

                            {/* MESSAGES */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                                {messages.map((msg, idx) => {
                                    const isSystem = msg.role === 'system';
                                    const isUser = msg.role === 'user';

                                    if (isSystem) return (
                                        <div key={idx} className="flex justify-center mb-4">
                                            <span className="bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-full font-medium border border-slate-700">
                                                {msg.content}
                                            </span>
                                        </div>
                                    );

                                    return (
                                        <div key={idx} className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                                            {!isUser && (
                                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-1 border border-slate-700">
                                                    <Bot size={16} className="text-blue-400" />
                                                </div>
                                            )}
                                            <div className={`p-5 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm ${isUser
                                                ? 'bg-blue-600 text-white rounded-br-none shadow-blue-900/20'
                                                : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                                                }`}>
                                                {msg.content}
                                            </div>
                                        </div>
                                    );
                                })}

                                {isLoading && (
                                    <div className="flex gap-4 justify-start animate-in fade-in duration-300">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-1 border border-slate-700">
                                            <Bot size={16} className="text-blue-400" />
                                        </div>
                                        <div className="bg-slate-800 p-5 rounded-2xl rounded-bl-none border border-slate-700 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-0" />
                                            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-150" />
                                            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-300" />
                                        </div>
                                    </div>
                                )}
                                <div ref={chatEndRef} />
                            </div>

                            {/* INPUT AREA */}
                            <div className="p-6 border-t border-slate-800 bg-slate-900/90 backdrop-blur relative z-20">
                                <form onSubmit={handleChatSubmit} className="relative group">
                                    <input
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-5 pr-14 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner font-medium"
                                        placeholder="Type your message..."
                                        value={inputValue}
                                        onChange={e => setInputValue(e.target.value)}
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !inputValue}
                                        className="absolute right-2 top-2 p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all disabled:opacity-0 disabled:scale-95 shadow-lg shadow-blue-600/20"
                                    >
                                        <ArrowRight size={18} />
                                    </button>
                                </form>
                                <div className="text-center mt-3 flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                                    <Sparkles size={12} className="text-blue-400" />
                                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                                        Powered by Agentic Neural Engine
                                    </p>
                                </div>
                            </div>
                        </>
                    )}

                </div>

            </div>
        </div>
    );
};

export default CustomAgentBuilder;
