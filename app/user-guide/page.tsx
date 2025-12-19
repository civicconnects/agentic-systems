"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { BookOpen, Download, ArrowLeft, Play, Lightbulb, Shield, Zap, Cpu } from 'lucide-react';

export default function UserGuidePage() {
  
  // 🖨️ PDF GENERATION LOGIC
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500/30">
      
      {/* 🛡️ PRINT STYLES: This hides the fluff and formats the text for paper */}
      <style jsx global>{`
        @media print {
          nav, footer, button, .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          main { padding: 0 !important; }
          h1 { font-size: 24pt !important; color: black !important; }
          p { font-size: 12pt !important; line-height: 1.5 !important; }
          section { padding: 20px 0 !important; }
          .shadow-xl, .shadow-2xl { shadow: none !important; border: 1px solid #ccc !important; }
          a { text-decoration: none !important; color: black !important; }
        }
      `}</style>

      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="bg-slate-950 pt-32 pb-20 px-6 text-center relative overflow-hidden no-print">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <BookOpen className="w-3 h-3" />
            <span>Official Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Hub Mastery Guide
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Your playbook for automating your business. Learn how to deploy, manage, and scale your digital workforce.
          </p>
        </div>
      </section>

      {/* 2. DOWNLOAD CARD */}
      <section className="px-6 -mt-10 relative z-20 no-print">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-200 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-lg flex items-center justify-center text-white shrink-0">
            <BookOpen className="w-12 h-12" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Download the Offline Manual</h3>
            <p className="text-slate-600 mb-6">Get the full PDF version to share with your team or read offline.</p>
            
            {/* 🖨️ UPDATED BUTTON WITH ONCLICK HANDLER */}
            <button 
              onClick={handleDownloadPDF}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-3 w-full md:w-auto justify-center animate-pulse"
            >
              <Download className="w-5 h-5" />
              Download Official Guide (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* 3. THE CONTENT (ON-PAGE PREVIEW) */}
      <section className="py-20 px-6 max-w-4xl mx-auto print:py-0">
        
        {/* PRINT HEADER (Visible only on print) */}
        <div className="hidden print:block mb-10 border-b-2 border-black pb-4">
          <h1 className="text-4xl font-bold">AI Hub Mastery Guide</h1>
          <p>Generated from Agentic Systems Knowledge Base</p>
        </div>

        {/* CHAPTER 1 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold print:border print:border-black print:bg-white print:text-black">01</span>
            The Agents (Your New Workforce)
          </h2>
          
          <div className="prose prose-lg text-slate-600 max-w-none space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm print:shadow-none print:border-black">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-500 print:text-black" /> The Sentinel (HR)
              </h3>
              <p>
                <strong>Real World Use:</strong> Don't spend Friday answering benefit questions. Deploy The Sentinel to your Slack. It answers "How many PTO days do I have?" instantly, saving you 4 hours a week.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm print:shadow-none print:border-black">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500 print:text-black" /> The Closer (Sales)
              </h3>
              <p>
                <strong>Real World Use:</strong> A lead fills out a form at 2 AM. The Closer engages them immediately, qualifies their budget, and books a meeting on your calendar for the morning.
              </p>
            </div>
          </div>
        </div>

        {/* CHAPTER 2 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold print:border print:border-black print:bg-white print:text-black">02</span>
            The AI Factory (Your Private Build)
          </h2>
          
          <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl border border-slate-700 shadow-xl print:bg-white print:text-black print:border-black print:shadow-none">
             <h3 className="text-xl font-bold text-white mb-4 print:text-black">Why build your own?</h3>
             <p className="mb-6 leading-relaxed">
               You have 10 years of PDF invoices. Upload them to the AI Factory. Now you can ask: <em>"Which vendor cost us the most in 2023?"</em> and get an instant answer. That is the power of Private Data.
             </p>
             <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex gap-3 print:border-black print:bg-white">
                <Lightbulb className="w-5 h-5 text-blue-400 shrink-0 mt-1 print:text-black" />
                <p className="text-sm text-blue-200 print:text-black">
                  <strong>Pro Tip:</strong> Private models run in a sandbox. Your data never trains the public ChatGPT.
                </p>
             </div>
          </div>
        </div>

        {/* CHAPTER 3 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold print:border print:border-black print:bg-white print:text-black">03</span>
            Custom Agents (The Forge)
          </h2>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm print:shadow-none print:border-black">
             <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
               <Cpu className="w-5 h-5 text-purple-500 print:text-black" /> How to use the Builder
             </h3>
             <ol className="list-decimal list-inside space-y-4 text-slate-700 print:text-black">
               <li><strong>Upload Context:</strong> Drag and drop your "Employee Handbook" PDF.</li>
               <li><strong>Assign Identity:</strong> Name it "Office Manager".</li>
               <li><strong>Define Role:</strong> "You answer questions about dress code and holidays."</li>
               <li><strong>Result:</strong> You stop answering the same email 50 times a day.</li>
             </ol>
          </div>
        </div>

      </section>

      {/* 4. FOOTER NAVIGATION */}
      <section className="bg-slate-100 py-12 px-6 border-t border-slate-200 no-print">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
          <Link href="/video-tour" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors font-bold shadow-lg">
            <Play className="w-5 h-5" /> Watch Video Tour
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}