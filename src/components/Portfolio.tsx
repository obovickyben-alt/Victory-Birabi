import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Executive Calendar Management',
    category: 'Google Workspace',
    desc: 'Optimized complex schedules and meeting coordination for executive teams, ensuring smooth daily operations.',
    details: 'Streamlined executive scheduling using Google Calendar. Resolved timezone conflicts, prioritized high-value meetings, and set up buffer times to maximize productivity while minimizing meeting fatigue. \n\nKey achievements included reducing scheduling conflicts by 90% and freeing up 5+ hours of executive time weekly.',
    image: '/GOO MAG.png'
  },
  {
    title: 'Data Entry & Organization',
    category: 'Documentation',
    desc: 'Structured and cleaned complex data sets to improve accessibility and reporting accuracy.',
    details: 'Systematized unstructured data into clean, formatted Excel sheets. Applied advanced formulas, data validation, and clear formatting to create a reliable single source of truth for business reporting. \n\nThis project significantly reduced data retrieval time and eliminated reporting errors caused by messy raw data.',
    image: '/Excel sheet.png'
  },
  {
    title: 'Inbox Management Optimization',
    category: 'Communication',
    desc: 'Organized and streamlined email workflows to improve response efficiency and reduce inbox clutter.',
    details: 'Implemented a robust tagging and folder system to manage high-volume email traffic. Automated routine responses and categorized urgent items to achieve Inbox Zero consistently. \n\nResponse times improved significantly, and critical communications were never missed.',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800'
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-base text-brand-royal font-semibold tracking-wide uppercase mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">
              Sample Projects &<br/> Administrative Solutions
            </h3>
          </div>
          <button className="hidden md:flex items-center gap-2 font-medium text-brand-royal hover:text-brand-navy transition-colors">
            View All Work <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold rounded-full text-brand-navy">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col grow">
                <h4 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                  {project.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-royal">
                  View Details <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-8 w-full flex items-center justify-center gap-2 font-medium text-brand-royal py-3 border border-brand-royal/20 rounded-lg">
          View All Work <ArrowUpRight size={20} />
        </button>

      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-50 flex justify-center items-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-brand-navy hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-full h-64 sm:h-80 bg-slate-100 relative shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold rounded-full text-brand-navy">
                  {selectedProject.category}
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-4">
                  {selectedProject.title}
                </h3>
                <div className="w-12 h-1 bg-brand-gold mb-6 rounded-full"></div>
                
                <div className="prose prose-slate max-w-none">
                  {selectedProject.details.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-600 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
