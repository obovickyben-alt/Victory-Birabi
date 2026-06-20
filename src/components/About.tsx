import { motion } from 'motion/react';
import { Target, MessageSquare, ClipboardCheck, Sparkles } from 'lucide-react';

const STATS = [
  { icon: ClipboardCheck, label: 'Organized Workflows', value: '100%' },
  { icon: MessageSquare, label: 'Efficient Comm.', value: '24/7' },
  { icon: Target, label: 'Reliable Support', value: 'Top Tier' },
  { icon: Sparkles, label: 'Admin Excellence', value: 'Proven' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base text-brand-royal font-semibold tracking-wide uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
              Your Partner in Productivity
            </h3>
            
            <div className="space-y-4 text-lg text-slate-600 mb-8">
              <p>
                Hello, I'm Birabi Victory Leera. I am a detail-oriented, highly organized, and proactive administrative professional dedicated to supporting your business goals. 
              </p>
              <p>
                With a strong emphasis on professional communication and reliability, I take the operational burden off your shoulders, allowing you to focus on what you do best—leading and innovating.
              </p>
              
              <div className="p-6 bg-brand-light rounded-2xl border-l-4 border-brand-gold mt-8">
                <h4 className="font-heading font-bold text-brand-navy mb-2">My Mission</h4>
                <p className="text-base italic text-slate-700">
                  "My goal is to help professionals reduce administrative workload, improve productivity, and create more time for strategic business growth."
                </p>
              </div>
            </div>
            
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-royal mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-1">{stat.value}</h4>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
