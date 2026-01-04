import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Terms() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-950 text-slate-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                <p className="mb-4 text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing and using the services provided by Agentic Systems ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. Description of Service</h2>
                        <p>Agentic Systems provides AI automation services, including but not limited to AI Voice Agents, N8N Workflows, and Custom App Development. We reserve the right to modify, suspend, or discontinue any part of our service at any time.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. User Responsibilities</h2>
                        <p>You engage to use our services only for lawful purposes. You are responsible for all activities that occur under your account or engagement with us. You agree not to misuse our services or help anyone else do so.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. Intellectual Property</h2>
                        <p>All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of Agentic Systems and are protected by international copyright, trademark, and other intellectual property laws.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                        <p>In no event shall Agentic Systems, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">6. Governing Law</h2>
                        <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">7. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at hello@ai-hub.agency.</p>
                    </section>
                </div>
            </section>
            <Footer />
        </main>
    );
}
