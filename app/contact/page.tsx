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
              Start Your <br />
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
              <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm relative overflow-hidden group">
                {/* Subtle gradient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 transition-opacity opacity-50 group-hover:opacity-100"></div>

                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Full Name</label>
                    <input required type="text" name="name" className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all text-white" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email Address</label>
                    <input required type="email" name="email" className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all text-white" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Phone Number</label>
                  <input type="tel" name="phone" className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all text-white" placeholder="(555) 000-0000" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">How can we help?</label>
                  <textarea required name="message" rows={4} className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all text-white resize-none" placeholder="I need a voice agent for my dental practice..."></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Calendly */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10"></div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl h-[750px] flex flex-col">
              <div className="bg-slate-950/50 border-b border-slate-800 p-6 flex justify-between items-center backdrop-blur-md">
                <div>
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Calendar className="w-4 h-4" /> Priority Access
                  </div>
                  <h3 className="font-bold text-white text-lg">Book a Strategy Call</h3>
                </div>
                <div className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded border border-green-500/20 animate-pulse">
                  Detailed Quote
                </div>
              </div>

              <div className="flex-1 bg-slate-900">
                <iframe
                  src="https://calendly.com/dwhitesvp/30min?hide_gdpr_banner=1&background_color=0f172a&text_color=ffffff&primary_color=3b82f6"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Select a Date & Time - Calendly"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}