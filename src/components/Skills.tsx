import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">Expertise</div>
      <div className="flex flex-wrap gap-2">
        {SKILL_CATEGORIES.flatMap(c => c.skills).map((skill, idx) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="bg-[#1e293b] border border-[#334155] px-[14px] py-[6px] rounded-full text-[12px] font-semibold text-[#cbd5e1] hover:border-brand-500 hover:text-white transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
