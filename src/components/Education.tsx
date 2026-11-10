import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import type { Language } from '../types';

interface EducationProps {
  darkMode: boolean;
  lang: Language;
}

export const Education: React.FC<EducationProps> = ({ darkMode, lang }) => {
  return (
    <section id="education" className="py-20 border-t border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Riwayat Pendidikan' : 'Education'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? 'Pendidikan Akademik' : 'Academic Background'}
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {lang === 'id'
              ? 'Latar belakang pendidikan formal di bidang Teknologi Informasi dan Rekayasa Perangkat Lunak.'
              : 'Formal academic background in Information Technology and Software Engineering.'}
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-3xl border p-6 sm:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
            darkMode
              ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-slate-800 shadow-xl'
              : 'bg-gradient-to-b from-white to-slate-50 border-slate-200 shadow-lg'
          }`}>
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              {/* Institution & Major Details */}
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-500 border border-blue-500/20 flex items-center justify-center font-bold text-xl">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {educationData.institution}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 mt-0.5 text-xs font-semibold text-blue-500 bg-blue-500/10 px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      <span>{lang === 'id' ? `Sebelumnya ${educationData.formerName}` : `Formerly ${educationData.formerName}`}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {educationData.degree} — {educationData.major}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {lang === 'id'
                      ? 'Fokus pada kurikulum terapan, rekayasa perangkat lunak web/mobile, dan implementasi proyek nyata di masyarakat.'
                      : 'Focused on applied software engineering, modern web/mobile development, and community-driven projects.'}
                  </p>
                </div>
              </div>

              {/* Meta Badges */}
              <div className="flex flex-wrap md:flex-col items-start gap-2.5 shrink-0">
                <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border ${
                  darkMode
                    ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                    : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                }`}>
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>{educationData.period}</span>
                </div>

                <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border ${
                  darkMode
                    ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                    : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                }`}>
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>{educationData.location}</span>
                </div>

                {educationData.gpa && (
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <span>IPK: {educationData.gpa}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Core Curriculum Focus Area */}
            <div className="mt-8 pt-6 border-t border-slate-800/40">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {lang === 'id' ? 'Kompetensi & Fokus Pembelajaran Utama' : 'Core Competencies & Study Focus'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(lang === 'id' ? educationData.focusId : educationData.focusEn).map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs sm:text-sm ${
                      darkMode
                        ? 'bg-slate-950/50 border-slate-800/80 text-slate-300'
                        : 'bg-white border-slate-200/80 text-slate-700 shadow-sm'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
