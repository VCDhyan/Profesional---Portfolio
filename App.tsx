
import React from 'react';
import Layout from './components/Layout';
import { PROJECTS, SKILLS, EXPERIENCES, WHY_HIRE, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-24 md:py-40 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block py-2 px-4 mb-8 text-sm font-bold tracking-widest text-indigo-700 uppercase bg-indigo-50 rounded-full border border-indigo-100">
            Full-Stack Software Engineer
          </span>
          
          <div className="mb-4">
            <span className="text-xl md:text-2xl font-medium text-slate-500">Hi, I'm</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900">
              VC DHYAN
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Building scalable digital solutions with <span className="text-indigo-600 font-semibold">precision</span> and <span className="text-indigo-600 font-semibold">leadership</span>. 
            Specializing in high-performance web architecture and strategic product engineering.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={SOCIAL_LINKS.resume} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all text-center flex items-center justify-center shadow-xl shadow-slate-200"
            >
              View Full Resume
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
            <a href="#projects" className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-xl hover:border-slate-400 transition-all text-center">
              View My Work
            </a>
          </div>
          
          <div className="mt-16 flex justify-center space-x-6 text-slate-400">
             <div className="flex flex-col items-center">
                <span className="text-slate-900 font-bold text-lg">Bangalore</span>
                <span className="text-xs uppercase tracking-widest">Location</span>
             </div>
             <div className="w-px h-10 bg-slate-200"></div>
             <div className="flex flex-col items-center">
                <span className="text-slate-900 font-bold text-lg">BCA (Hons)</span>
                <span className="text-xs uppercase tracking-widest">Education</span>
             </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Technical Arsenal</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">A focused technical stack architected for modern scalability and product efficiency.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((cat, idx) => (
              <div key={idx} className="p-10 border border-slate-200 rounded-2xl bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center mr-3 text-sm">{idx + 1}</span>
                  {cat.category}
                </h3>
                <ul className="space-y-4">
                  {cat.items.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center text-slate-600 font-medium">
                      <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Engineering</h2>
            <p className="text-slate-400 text-lg">Selected projects where I spearheaded development and architecture.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="group bg-slate-800/50 border border-slate-700 p-10 rounded-3xl hover:border-indigo-500 hover:bg-slate-800 transition-all shadow-2xl">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-3xl font-bold tracking-tight">{proj.title}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-3 py-1.5 rounded-full border border-indigo-400/20">
                    {proj.role}
                  </span>
                </div>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-bold bg-slate-900 text-slate-300 px-4 py-2 rounded-lg border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-6">
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-indigo-400 transition-colors flex items-center">
                    Source Code
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-indigo-400 transition-colors flex items-center">
                    Live Demo
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center tracking-tight">Career Path</h2>
          <div className="max-w-4xl mx-auto">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-12 pb-16 border-l-2 border-slate-100 last:pb-0">
                <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{exp.role}</h3>
                    <p className="text-xl text-indigo-600 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2 md:mt-0 bg-slate-50 px-3 py-1 rounded-md">{exp.duration}</span>
                </div>
                <ul className="space-y-5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-slate-600 text-lg leading-relaxed flex items-start">
                      <span className="text-indigo-500 font-black mr-3 text-xl">·</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">The Dhyan Advantage</h2>
          <p className="text-slate-500 text-lg mt-4">Why I am the right choice for your technical leadership needs.</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_HIRE.map((point, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-xl mb-8">
                <span className="font-black text-xl">{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter">Ready to Build Something Remarkable?</h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-16 font-light">
            I'm currently accepting new opportunities for remote full-stack roles and strategic technical collaborations.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href={SOCIAL_LINKS.email} 
              className="flex-1 bg-slate-900 text-white px-10 py-6 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center"
            >
              Send an Email
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white border-2 border-slate-900 text-slate-900 px-10 py-6 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="mt-20 pt-16 border-t border-slate-100 flex justify-center space-x-12 text-slate-400 font-bold uppercase tracking-widest text-xs">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            <a href={SOCIAL_LINKS.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Portfolio</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <p className="text-2xl font-black text-slate-900 tracking-tighter uppercase">VC DHYAN</p>
            <p className="text-slate-500 font-medium">Software Product Engineer</p>
          </div>
          <div className="text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} VC DHYAN. Engineered for impact.</p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default App;
