import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowRight, Layers, Terminal, Briefcase } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">Featured Projects</div>
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#1e293b] border border-[#334155] rounded-[20px] p-6 relative overflow-hidden flex flex-col justify-between group h-full"
          >
            <div className="absolute top-0 left-0 w-[4px] h-full bg-[#10b981] group-hover:w-[6px] transition-all" />
            
            <div>
              <h4 className="text-[16px] font-bold text-[#f8fafc] mb-2">{project.title}</h4>
              <p className="text-[13px] text-[#94a3b8] leading-[1.5] mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.environment.slice(0, 3).map(env => (
                  <span key={env} className="text-[10px] uppercase font-mono text-[#475569]">{env}</span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 flex items-center gap-2 text-[12px] font-bold text-brand-500 cursor-pointer hover:translate-x-1 transition-transform group">
              View Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
