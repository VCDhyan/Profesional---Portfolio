
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">VC DHYAN</span>
            <span className="text-[10px] font-bold text-indigo-600 tracking-[0.2em] uppercase mt-1">Full Stack</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a 
              href={SOCIAL_LINKS.resume} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-600 transition-colors"
            >
              Resume
            </a>
          </div>
          <a 
            href="#contact" 
            className="bg-indigo-600 text-white px-6 py-2.5 text-sm font-bold rounded-lg hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100"
          >
            Work With Me
          </a>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;
