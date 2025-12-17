import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-slate-300">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="mb-4 text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>Agentic Systems collects information you provide directly to us, such as when you book a strategy call, sign up for our services, or communicate with us. This may include your name, email address, phone number, and company details.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Information</h2>
            <p>We use your information to: provide, maintain, and improve our automation services; communicate with you about products, services, and events; and monitor and analyze trends and usage.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Data Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Tools</h2>
            <p>We use third-party services (such as Calendly for scheduling and Vapi for voice processing). Please review their privacy policies to understand how they handle your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at hello@ai-hub.agency.</p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}