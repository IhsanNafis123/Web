import React from 'react';
import { competitionsData } from '../data/portfolioData';
import { Trophy, Award, Calendar, Building, Sparkles, CheckCircle } from 'lucide-react';
import type { Language } from '../types';

interface CompetitionsProps {
  darkMode: boolean;
  lang: Language;
}

export const Competitions: React.FC<CompetitionsProps> = ({ darkMode, lang }) => {
  return (
    <section id="competitions" className="py-20 border-t border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Prestasi & Kompetisi' : 'Competitions & Achievements'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? 'Rekam Jejak Kompetisi' : 'Competition Track Record'}
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {lang === 'id'
              ? 'Daftar keikutsertaan dan penghargaan dalam kompetisi pengembangan teknologi, inovasi digital, dan hackathon kemasyarakatan.'
              : 'Record of participation and accolades in tech development competitions, digital innovation challenges, and community hackathons.'}
          </p>
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitionsData.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden ${
                darkMode
                  ? 'bg-slate-900/75 border-slate-800 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5'
                  : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200/60'
              }`}
            >
              {/* Corner Glow Accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

              <div className="space-y-4">
                {/* Badge and Category */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-500 border border-amber-500/30">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.badge}</span>
                  </span>

                  <span className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${
                    darkMode ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'
                  }`}>
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className={`text-lg sm:text-xl font-bold tracking-tight group-hover:text-amber-500 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-500 mt-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? item.achievementId : item.achievementEn}</span>
                  </p>
                </div>

                {/* Organizer & Year */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-500" />
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{item.organizer}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{item.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {lang === 'id' ? item.descriptionId : item.descriptionEn}
                </p>
              </div>

              {/* Bottom Verification Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Terverifikasi' : 'Verified Entry'}</span>
                </span>
                <span className={`text-[11px] font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  {item.event}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
