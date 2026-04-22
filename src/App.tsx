/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen pt-[72px]">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-500 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8">
          {/* Sidebar Area - We combine Hero and Contact-side info here */}
          <aside className="space-y-8 h-fit lg:sticky lg:top-[112px]">
            <Hero />
          </aside>

          {/* Main Content Area */}
          <div className="space-y-12">
            <Skills />
            <div className="grid md:grid-cols-2 gap-8">
               {/* We might want to nest some components if needed, or keep them stacked */}
               <div className="md:col-span-2">
                 <Projects />
               </div>
               <div className="md:col-span-2">
                 <Experience />
               </div>
               <div className="md:col-span-2">
                 <Certifications />
               </div>
               <div className="md:col-span-2">
                 <Contact />
               </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center font-display font-bold text-white text-sm">
              AD
            </div>
            <span className="font-display font-bold text-lg text-white">
              Abhik Dutta
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Abhik Dutta. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}

