import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, Download, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="sleek-panel hero-gradient p-8 flex flex-col min-h-[600px]"
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-500 mb-6 flex items-center justify-center text-[32px] font-bold text-[#0f172a] shadow-lg shadow-brand-500/20">
        AD
      </div>
      
      <h1 className="text-[32px] font-extrabold text-[#f8fafc] leading-[1.1] mb-3">
        {PERSONAL_INFO.name}
      </h1>
      
      <div className="text-[16px] font-semibold text-brand-500 mb-5 uppercase tracking-wide">
        {PERSONAL_INFO.title}
      </div>
      
      <p className="text-[14px] text-[#94a3b8] leading-[1.6] mb-8">
        {PERSONAL_INFO.summary}
      </p>

      <div className="mt-auto pt-8 border-t border-[#334155]">
        <div className="section-label">Hire Me</div>
        <div className="space-y-3">
          <div className="flex items-center text-[14px] text-[#cbd5e1] group cursor-default">
            <span className="w-2 h-2 rounded-full bg-brand-500 mr-3 group-hover:scale-125 transition-transform" />
            {PERSONAL_INFO.email}
          </div>
          <div className="flex items-center text-[14px] text-[#cbd5e1] group cursor-default">
            <span className="w-2 h-2 rounded-full bg-brand-500 mr-3 group-hover:scale-125 transition-transform" />
            {PERSONAL_INFO.location}
          </div>
        </div>
        
        <div className="mt-8 flex gap-4">
          <a href="#contact" className="flex-1 bg-brand-500 text-[#0f172a] rounded-lg py-3 text-[13px] font-bold uppercase tracking-wider text-center hover:bg-brand-400 transition-colors">
            Contact
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 bg-[#0f172a] border border-[#334155] rounded-lg flex items-center justify-center text-brand-500 hover:text-white transition-colors">
             <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
