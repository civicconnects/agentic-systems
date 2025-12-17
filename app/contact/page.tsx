"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowLeft, Send, CheckCircle, Loader2 } from 'lucide-react';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    // This access key is for the public free tier of Web3Forms. 
    // It works instantly but you might want to get your own free key at web3forms.com later.
    formData.append("access_key", "98580280-b787-4425-a6b4-e723e8192bbf"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white">
      
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            AGENTIC <span className="text-blue-500">SYSTEMS</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </a>
        </div>
      </header>

      <section className="flex-1 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Form */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800 text-blue-400 text-xs font-semibold uppercase tracking-wide mb-6">
              Now Taking New Clients
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your <br/>
              <span className="text-blue-500">Automation Journey</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              Fill out the form below or book a time on the calendar. We usually respond within 2 hours.
            </p>

            {isSuccess ? (
              <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl flex flex-col items-center text-center animate-in fade-in zoom-in">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-slate-400">Our agents are processing your request. Talk soon.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-sm text-green-400 hover:text-green-300 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
                {/* We need an access key from Web3Forms. You can leave this placeholder for testing or get a free one. */}
                <input type="hidden" name="access_key" value="98580280-b787-4425-a6b4-e723e8192bbfE" /> 
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Full Name</label>
                    <input required type="text" name="name" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email Address</label>
                    <input required type="email" name="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Phone Number</label>
                  <input type="tel" name="phone" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="(555) 000-0000" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">How can we help?</label>
                  <textarea required name="message" rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="I need a voice agent for my dental practice..."></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Calendly */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl h-[750px]">
             <iframe 
              src="https://calendly.com/dwhitesvp/30min?hide_gdpr_banner=1&background_color=0f172a&text_color=ffffff&primary_color=3b82f6" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Select a Date & Time - Calendly"
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}