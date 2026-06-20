import { motion } from 'motion/react';
import { LayoutList, MessageCircleHeart, SearchCheck, CheckCircle2 } from 'lucide-react';

const FEATURES = [
  {
    title: 'Organized & Efficient',
    desc: 'Structured methodologies and efficient workflows that save hours of your week.',
    icon: LayoutList
  },
  {
    title: 'Strong Communication Skills',
    desc: 'Clear, concise, and professional communication across all channels.',
    icon: MessageCircleHeart
  },
  {
    title: 'Detail-Oriented Approach',
    desc: 'Meticulous attention to every task ensures nothing falls through the cracks.',
    icon: SearchCheck
  },
  {
    title: 'Reliable Administrative Support',
    desc: 'A dependable partner you can trust to represent your business professionally.',
    icon: CheckCircle2
  }
];

export function Features() {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-royal/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-semibold uppercase tracking-wider text-sm mb-3">Why Choose Me</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold">Why Work With Me</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 bg-brand-royal/20 text-brand-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              <h4 className="text-lg font-heading font-bold mb-3">{feature.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
