import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">Hire Me</div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="sleek-panel p-8"
      >
        <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
          <input type="text" className="input-sleek" placeholder="Your Name" />
          <input type="email" className="input-sleek" placeholder="Email Address" />
          <textarea className="input-sleek h-24 resize-none" placeholder="Your Message"></textarea>
          <button 
            type="submit" 
            className="w-full py-3.5 bg-brand-500 text-[#0f172a] rounded-lg font-bold text-[13px] uppercase tracking-[0.5px] hover:bg-brand-400 transition-colors"
          >
            Send Inquiry
          </button>
        </form>
      </motion.div>
    </section>
  );
}
