import { Link } from 'react-router-dom';
import { Diamond } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/10 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <Diamond className="w-8 h-8 text-white stroke-[1.5px]" />
              <div className="flex items-center gap-2">
                <span className="font-display font-medium text-2xl tracking-[0.2em] text-white uppercase">
                  OFCALC
                </span>
                <span className="text-[10px] font-black bg-white text-black px-1.5 py-0.5 rounded-sm tracking-tighter">
                  PRO
                </span>
              </div>
            </div>
            <p className="text-white/30 max-w-sm leading-relaxed text-sm font-light">
              The industry-standard financial forecasting tool for modern creators. 
              Built for precision, privacy, and performance.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-white/20">Navigation</h4>
            <ul className="space-y-5">
              <li><Link to="/" className="text-[13px] text-white/40 hover:text-white transition-colors">Calculator</Link></li>
              <li><Link to="/about" className="text-[13px] text-white/40 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-[13px] text-white/40 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-white/20">Legal</h4>
            <ul className="space-y-5">
              <li><Link to="/privacy-policy" className="text-[13px] text-white/40 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-[13px] text-white/40 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/10">© {new Date().getFullYear()} OFCALC PRO. ALL RIGHTS RESERVED.</p>
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/10">NOT AFFILIATED WITH ONLYFANS.</p>
        </div>
      </div>
    </footer>
  );
}
