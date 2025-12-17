import React from 'react';
import { Bot, Shield, Cpu, ArrowRight, Lock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Factory() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />

      <div className="relative isolate pt-14 flex-1 flex flex-col justify-center">
        {/* Background Gradients */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-2xl py-12 px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-400 ring-1 ring-white/10 hover:ring-white/20">
              Private Beta Access <span className="font-semibold text-blue-400"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 mb-8">
            Sovereign AI.<br/>
            <span className="text-white">Your Infrastructure.</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Stop renting intelligence from public models. The <strong>AI Factory</strong> allows you to drag-and-drop a private "Agent Swarm" that lives on your servers. It knows your business secrets but never shares them.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="relative w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Enter work email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              Request Early Access
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Feature 
              icon={<Shield className="w-6 h-6 text-green-400" />}
              title="Data Sovereignty"
              desc="Your data never leaves your perimeter. Zero retention by public LLMs."
            />
            <Feature 
              icon={<Bot className="w-6 h-6 text-blue-400" />}
              title="Custom Swarms"
              desc="Orchestrate multi-agent teams that collaborate on complex tasks."
            />
            <Feature 
              icon={<Cpu className="w-6 h-6 text-purple-400" />}
              title="On-Premise Ready"
              desc="Deploy via Docker/Kubernetes to your own private cloud."
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
      <div className="mb-4 bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  )
}