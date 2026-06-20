import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFA] h-auto min-h-screen flex items-center">
      
      {/* Background concentric/radial effect - matching the "light/airy" screenshot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200/40 to-transparent rounded-full opacity-60 z-0 pointer-events-none blur-[50px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#FDF8EC] text-[#D99A3A] rounded-full font-medium text-sm border border-[#D99A3A]/20 mb-8">
              <Sparkles size={16} /> Administrative & Virtual Assistant
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 text-brand-navy tracking-tight">
              Hi, I'm <span className="text-[#D99A3A]">Victory</span><br/>
              Welcome to my portfolio
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Specializing in <span className="font-semibold text-brand-navy">Executive & Administrative Support</span>. I create highly streamlined workflows that help entrepreneurs stand out and focus on growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14 pb-12 w-full max-w-[280px] sm:max-w-none mx-auto lg:mx-0 justify-center lg:justify-start items-stretch sm:items-center">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#D99A3A] text-white text-sm font-semibold rounded-lg hover:bg-[#c2872e] transition shadow-lg shadow-[#D99A3A]/20 flex items-center justify-center gap-2 group"
              >
                Contact Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-brand-navy text-sm font-semibold rounded-lg hover:bg-slate-50 transition flex items-center justify-center"
              >
                View My Work
              </a>
            </div>

            <div className="flex items-center gap-8 sm:gap-12 text-sm border-t border-slate-200 pt-8">
              <div>
                <p className="text-4xl font-heading font-bold text-[#D99A3A] mb-1 leading-none tracking-tight">20<span className="text-2xl">+</span></p>
                <p className="text-slate-500 font-medium">Projects</p>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div>
                <p className="text-4xl font-heading font-bold text-[#D99A3A] mb-1 leading-none tracking-tight">30<span className="text-2xl">+</span></p>
                <p className="text-slate-500 font-medium whitespace-nowrap">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div>
                <p className="text-4xl font-heading font-bold text-[#D99A3A] mb-1 leading-none tracking-tight">1<span className="text-2xl">+</span></p>
                <p className="text-slate-500 font-medium whitespace-nowrap">Years Exp.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center mt-12 lg:mt-0"
          >
            {/* Outer rings simulating the screenshot's graphic */}
            <div className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full border border-[#D99A3A]/30 flex items-center justify-center shadow-[0_0_80px_rgba(217,154,58,0.05)]">
              {/* Gap between ring and image */}
              <div className="absolute inset-5 rounded-full overflow-hidden border border-[#D99A3A]/10 bg-slate-100 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/KjTyvmgf/profile.jpg" 
                  alt="Birabi Victory Leera" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute bottom-6 right-0 bg-white p-4 sm:px-6 sm:py-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-50 flex items-center gap-4 z-10"
              >
                <div className="w-10 h-10 rounded-full bg-[#FDF8EC] text-[#D99A3A] flex items-center justify-center shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">Available</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">For Projects</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
