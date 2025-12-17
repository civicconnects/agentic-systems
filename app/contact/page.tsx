import React from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowLeft } from 'lucide-react';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white">
      
      {/* Simple Header */}
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
          
          {/* Left Column: Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800 text-blue-400 text-xs font-semibold uppercase tracking-wide mb-6">
              Now Taking New Clients
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate <br/>
              <span className="text-blue-500">Your Business?</span>
            </h1>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              We don't just sell software; we sell time. Book a strategy call to discuss how our AI Agents can replace your manual workflows.
            </p>

            <div className="space-y-8">
              <ContactItem 
                icon={<Phone className="w-6 h-6 text-blue-500" />}
                title="Call Directly"
                value="918-409-2361"
                sub="Mon-Fri, 9am - 6pm CST"
              />
              <ContactItem 
                icon={<Mail className="w-6 h-6 text-blue-500" />}
                title="Email Us"
                value="hello@ai-hub.agency"
                sub="We reply within 2 hours."
              />
              <ContactItem 
                icon={<MapPin className="w-6 h-6 text-blue-500" />}
                title="HQ Location"
                value="Dallas, Texas"
                sub="Serving clients globally."
              />
            </div>
          </div>

          {/* Right Column: The "Booking" Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-500" />
              Book a Strategy Call
            </h3>
            
            {/* Placeholder for Calendar Embed (Calendly) */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center min-h-[300px] flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center animate-pulse">
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-slate-300 font-medium">Calendar Integration Loading...</p>
                <p className="text-sm text-slate-500 mt-2">
                  (We can embed your Calendly here later)
                </p>
              </div>
              <a 
                href="mailto:hello@ai-hub.agency" 
                className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-bold transition-all w-full"
              >
                Send an Email Instead
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

// Helper Component for the contact list
function ContactItem({ icon, title, value, sub }: any) {
  return (
    <div className="flex gap-4 items-start">
      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg text-white">{title}</h4>
        <p className="text-blue-400 font-medium">{value}</p>
        <p className="text-sm text-slate-500">{sub}</p>
      </div>
    </div>
  )
}