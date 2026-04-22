import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../constants';
import { Award, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section>
      <div className="section-label">Accreditations</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="bg-[#1e293b] border border-[#334155] p-5 rounded-[20px] flex items-center space-x-3 hover:bg-[#2d3a4f] transition-all cursor-default group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-[#0f172a] shadow-lg shadow-brand-500/10">
              <Award size={18} />
            </div>
            <div>
              <h4 className="text-[#f8fafc] font-bold text-[13px] leading-tight mb-0.5">{cert.name}</h4>
              <p className="text-[#475569] text-[10px] font-mono uppercase tracking-widest">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
