import { motion } from 'motion/react';

// Using simple SVG badges or text for tools for a modern look
const TOOLS = [
  'Google Workspace',
  'Microsoft Office',
  'Zoom',
  'Google Calendar',
  'Google Drive',
  'Canva',
  'Capcut',
  'WordPress'
];

export function Tools() {
  return (
    <section id="tools" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-brand-royal font-semibold tracking-wide uppercase mb-3">My Stack</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-12">
          Tools & Software
        </h3>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-brand-royal hover:text-brand-royal hover:shadow-md transition-all cursor-default flex items-center gap-2"
            >
              {/* Optional: Add custom icon mapping here if needed. Using a standard dot for now. */}
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
