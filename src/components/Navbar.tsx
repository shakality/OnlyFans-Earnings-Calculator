import { Link } from 'react-router-dom';
import { Diamond } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Diamond className="w-6 h-6 text-white stroke-[1.5px] group-hover:rotate-[180deg] transition-transform duration-1000" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-medium text-xl tracking-[0.2em] text-white uppercase">
              OFCALC
            </span>
            <span className="text-[10px] font-black bg-white text-black px-1.5 py-0.5 rounded-sm tracking-tighter">
              PRO
            </span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">Calculator</Link>
          <Link to="/about" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">About</Link>
          <Link to="/contact" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
