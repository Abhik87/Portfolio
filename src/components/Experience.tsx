import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Experience</div>
      <div className="space-y-4">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.period}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="sleek-panel p-6 hover:bg-[#2d3a4f] transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h4 className="text-[16px] font-bold text-[#f8fafc]">{exp.role}</h4>
                <p className="text-brand-500 font-medium text-sm">{exp.company}</p>
              </div>
              <div className="text-[12px] font-mono text-[#475569] uppercase tracking-wider text-right">
                {exp.period}
              </div>
            </div>
            <div className="mt-4 flex items-center text-[12px] text-[#94a3b8]">
                <MapPin size={12} className="mr-1.5" /> {exp.location}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
