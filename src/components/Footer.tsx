import { Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">Birabi Victory Leera</h2>
            <p className="text-slate-400 max-w-md mb-8">
              Reliable administrative and virtual assistant support to help you streamline operations and focus on growth.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/victory-birabi-844270416" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-brand-royal hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:obovickyben10@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-brand-royal hover:text-white transition-colors">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-brand-royal hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-brand-gold transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-brand-gold transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 shrink-0">
              <li><a href="#services" className="text-slate-400 hover:text-brand-gold transition-colors">Executive Support</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-gold transition-colors">Email Management</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-gold transition-colors">Data & Docs</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-gold transition-colors">Scheduling</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 Birabi Victory Leera. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 text-slate-300 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
