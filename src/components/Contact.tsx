import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-base text-brand-royal font-semibold tracking-wide uppercase mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
            Let's Work Together
          </h3>
          <p className="text-lg text-slate-600">
            Ready to streamline your operations and reclaim your time? Send a message and let's discuss how I can support your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <h4 className="text-xl font-heading font-bold text-brand-navy mb-6">Contact Information</h4>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-slate-700">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-royal flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Email Registration</p>
                    <a href="mailto:obovickyben10@gmail.com" className="font-semibold hover:text-brand-royal transition-colors block break-all">
                      obovickyben10@gmail.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 text-slate-700">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-royal flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Phone Number</p>
                    <a href="tel:+2348143765282" className="font-semibold hover:text-brand-royal transition-colors block">
                      08143765282
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4 text-slate-700">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-royal flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Location</p>
                    <span className="font-semibold">Abuja, Nigeria</span>
                  </div>
                </li>

                <li className="flex items-start gap-4 text-slate-700">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-royal flex-shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Professional Network</p>
                    <a href="https://www.linkedin.com/in/victory-birabi-844270416" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-brand-royal transition-colors block">
                      Victory Birabi
                    </a>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal/50 focus:border-brand-royal transition-all" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal/50 focus:border-brand-royal transition-all" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal/50 focus:border-brand-royal transition-all" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or administrative needs..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-royal/50 focus:border-brand-royal transition-all resize-none" 
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-brand-royal text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
