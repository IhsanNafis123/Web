import React from 'react';
import { experiencesData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building } from 'lucide-react';
import type { Language } from '../types';

interface ExperienceProps {
  darkMode: boolean;
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode, lang }) => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Pengalaman & Organisasi' : 'Experience & Leadership'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? 'Perjalanan Profesional' : 'Professional Journey'}
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {lang === 'id'
              ? 'Pengalaman proyek riil, program pembinaan kepemimpinan mahasiswa, dan kontribusi publik.'
              : 'Real-world project development, student leadership programs, and public knowledge sharing.'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-indigo-500 hidden sm:block opacity-30" />

          <div className="space-y-12">
            {experiencesData.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot Indicator */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-blue-500 items-center justify-center z-10 shadow-lg shadow-blue-500/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                      darkMode
                        ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500/50 shadow-xl'
                        : 'bg-white border-slate-200 hover:border-blue-400 shadow-lg shadow-slate-200/50'
                    }`}>
                      {/* Organization & Type Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-blue-500" />
                          <span className={`text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            {exp.organization}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">
                          {exp.type}
                        </span>
                      </div>

                      {/* Role Title */}
                      <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-2 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {exp.role}
                      </h3>

                      {/* Meta: Period & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-5">
                        {(lang === 'id' ? exp.descriptionId : exp.descriptionEn).map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                              {desc}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/40">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded border ${
                              darkMode
                                ? 'bg-slate-800/70 border-slate-700 text-slate-300'
                                : 'bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
