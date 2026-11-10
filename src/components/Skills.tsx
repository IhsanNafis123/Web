import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, Server, Database, Sparkles, FolderGit2 } from 'lucide-react';
import type { Language } from '../types';

interface SkillsProps {
  darkMode: boolean;
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode, lang }) => {
  const categories = [
    {
      titleId: 'Frontend & Mobile',
      titleEn: 'Frontend & Mobile',
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      skills: skillsData.frontendAndMobile,
      descId: 'Pengembangan antarmuka pengguna interaktif dan aplikasi mobile multiplatform.',
      descEn: 'Interactive user interface and multiplatform mobile engineering.'
    },
    {
      titleId: 'Backend & Frameworks',
      titleEn: 'Backend & Frameworks',
      icon: <Server className="w-5 h-5 text-cyan-500" />,
      skills: skillsData.backendAndFrameworks,
      descId: 'Arsitektur backend MVC, logika server, dan integrasi API Layanan Web.',
      descEn: 'Backend MVC architecture, server logic, and web service API integration.'
    },
    {
      titleId: 'Database & Relasional',
      titleEn: 'Database & Relational',
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      skills: skillsData.databaseAndStorage,
      descId: 'Pengelolaan data SQL, database terstruktur MySQL, dan MongoDB NoSQL.',
      descEn: 'SQL querying, relational MySQL database management, and MongoDB NoSQL.'
    },
    {
      titleId: 'Tools & AI Architecture',
      titleEn: 'Tools & AI Architecture',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      skills: skillsData.toolsAndArchitecture,
      descId: 'Generative AI prototyping (Vercel V0) dan metodologi pengembangan web modern.',
      descEn: 'Generative AI prototyping (Vercel V0) and modern web engineering methodologies.'
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Keahlian Terhubung' : 'Skills & Associated Works'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? 'Keahlian & Implementasi Proyek' : 'Skills & Project Implementations'}
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {lang === 'id'
              ? 'Daftar keahlian terverifikasi beserta proyek dan institusi tempat keahlian tersebut diterapkan.'
              : 'Verified skills directly linked to real projects and institutional coursework.'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-md shadow-slate-200/50'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                  darkMode ? 'bg-slate-800' : 'bg-slate-100'
                }`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {lang === 'id' ? cat.titleId : cat.titleEn}
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {lang === 'id' ? cat.descId : cat.descEn}
                  </p>
                </div>
              </div>

              {/* Skills List with Associated Projects */}
              <div className="mt-5 space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-3 sm:p-3.5 rounded-2xl border transition-all ${
                      darkMode
                        ? 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
                        : 'bg-slate-50 border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                        {skill.level}
                      </span>
                    </div>

                    {/* Associated Projects Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                        <FolderGit2 className="w-3 h-3 text-slate-500" />
                        <span>{lang === 'id' ? 'Diterapkan pada:' : 'Used in:'}</span>
                      </span>
                      {skill.projects.map((proj) => (
                        <span
                          key={proj}
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${
                            proj === 'Universitas Harkat Negeri'
                              ? darkMode
                                ? 'bg-indigo-950/60 border-indigo-800 text-indigo-300'
                                : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                              : darkMode
                              ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                              : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                          }`}
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
