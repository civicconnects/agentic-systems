import React from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  // Mobile menu state
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="font-bold text-xl tracking-tighter text-white hover:opacity-80 transition-opacity">
          AGENTIC <span className="text-blue-500">SYSTEMS</span>
        </a>

        {/* Desktop Menu (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/portfolio" className="hover:text-white transition-colors">Case Studies</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* CTA Button (Hidden on mobile) */}
        <div className="hidden md:block">
          <a href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2">
            <PhoneCall className="w-4 h-4" /> Book Strategy Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 hover:text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 p-4 space-y-4">
          <a href="/" className="block text-slate-300 hover:text-white font-medium">Home</a>
          <a href="/portfolio" className="block text-slate-300 hover:text-white font-medium">Case Studies</a>
          <a href="/contact" className="block text-slate-300 hover:text-white font-medium">Contact</a>
          <a href="/contact" className="block text-center bg-blue-600 text-white py-2 rounded-lg font-bold">
            Book Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;