import { motion } from 'motion/react';
import { Briefcase, Mailbox, Database } from 'lucide-react';

const SERVICES = [
  {
    title: 'Executive & Administrative Support',
    description: 'Comprehensive assistance tailored for executives to manage daily operations smoothly.',
    icon: Briefcase,
    items: [
      'Calendar Management',
      'Appointment Scheduling',
      'Meeting Coordination',
      'Travel Planning'
    ]
  },
  {
    title: 'Email & Communication Management',
    description: 'Keep your inbox pristine and ensure your clients receive timely, professional responses.',
    icon: Mailbox,
    items: [
      'Inbox Management',
      'Email Organization',
      'Customer Support',
      'Client Communication'
    ]
  },
  {
    title: 'Data & Documentation',
    description: 'Accurate and structured data handling to keep your business records intact and accessible.',
    icon: Database,
    items: [
      'Data Entry',
      'Internet Research',
      'File Organization',
      'Report Preparation'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-royal font-semibold tracking-wide uppercase mb-3">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
            Services I Offer
          </h3>
          <p className="text-lg text-slate-600">
            Premium, high-end administrative services designed to liberate your time and supercharge your productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-royal/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-light text-brand-royal rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-royal group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-heading font-bold text-brand-navy mb-4">
                {service.title}
              </h4>
              <p className="text-slate-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start text-sm font-medium text-slate-700">
                    <span className="text-brand-gold mr-3 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
