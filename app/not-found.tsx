import Link from 'next/link'
import { Bot, ArrowLeft } from 'lucide-react'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-slate-900/50 p-8 rounded-full mb-8 animate-bounce">
        <Bot className="w-16 h-16 text-blue-500" />
      </div>
      <h2 className="text-6xl font-bold text-white mb-4 tracking-tighter">404</h2>
      <p className="text-xl text-slate-400 mb-8">System Malfunction. Agent not found.</p>
      <Link 
        href="/" 
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold transition-all"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Base
      </Link>
    </div>
  )
}