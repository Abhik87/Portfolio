import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[72px] flex items-center border-b border-[#1e293b] ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-12 w-full">
        <div className="flex justify-between items-center h-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center space-x-1"
          >
            <span className="font-display font-bold text-xl tracking-tighter text-[#f8fafc]">
              AD<span className="text-brand-500">.</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-[14px] font-medium tracking-tight transition-colors ${i === 0 ? 'text-[#f8fafc]' : 'text-[#94a3b8] hover:text-[#f8fafc]'}`}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-[#334155]">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
                <Github size={18} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#94a3b8] hover:text-[#f8fafc] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="absolute top-[72px] left-0 w-full bg-[#0f172a] border-b border-[#1e293b] md:hidden"
        >
          <div className="px-12 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
