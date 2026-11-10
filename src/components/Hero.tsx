import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, ExternalLink, Mail, MessageSquare, Sparkles, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import type { Language } from '../types';

interface HeroProps {
  darkMode: boolean;
  lang: Language;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, lang, onOpenCv }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border shadow-sm ${darkMode
                ? 'bg-blue-950/60 border-blue-800 text-blue-300'
                : 'bg-blue-50 border-blue-200 text-blue-700'
                }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {lang === 'id' ? 'Tersedia untuk Magang & Proyek' : 'Open for Internship & Projects'}
              </span>

              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${darkMode
                ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                <span>{personalInfo.university}</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <p className={`text-base sm:text-lg font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {lang === 'id' ? 'Halo, Saya' : "Hi, I'm"}
              </p>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                {personalInfo.name}
              </h1>
              <p className={`text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent`}>
                {personalInfo.title}
              </p>
            </div>

            {/* Brief Bio */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
              {lang === 'id' ? personalInfo.bioId : personalInfo.bioEn}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{lang === 'id' ? 'Jelajahi Proyek' : 'Explore Projects'}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCv}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:-translate-y-0.5 cursor-pointer ${darkMode
                  ? 'border-slate-700 bg-slate-900/80 text-white hover:bg-slate-800'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-sm'
                  }`}
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{lang === 'id' ? 'Unduh / Lihat CV' : 'Download / View CV'}</span>
              </button>

              <a
                href="#contact"
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${darkMode
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                <MessageSquare className="w-4 h-4 text-blue-500" />
                <span>{lang === 'id' ? 'Hubungi' : 'Contact'}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className={`text-xs uppercase tracking-wider font-semibold mr-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                {lang === 'id' ? 'Sosial:' : 'Socials:'}
              </span>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${darkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-sm'
                  }`}
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${darkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-black hover:border-slate-400 shadow-sm'
                  }`}
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${darkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-emerald-600 hover:border-emerald-300 shadow-sm'
                  }`}
                title="WhatsApp Direct"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-2.5 rounded-xl border transition-all ${darkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-cyan-600 hover:border-cyan-300 shadow-sm'
                  }`}
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-md opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

              <div className={`relative rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl ${darkMode
                ? 'bg-slate-900/90 border-slate-800 backdrop-blur-xl'
                : 'bg-white/95 border-slate-200 backdrop-blur-xl'
                }`}>
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-extrabold text-2xl sm:text-3xl shadow-lg shadow-blue-500/30">
                    IH
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg sm:text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-500 font-semibold">
                      D4 Teknik Informatika
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {personalInfo.university}
                    </p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 pt-2 border-t border-slate-800/40">
                  <div className={`flex items-start gap-3 p-3 rounded-xl border text-xs sm:text-sm ${darkMode
                    ? 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                    : 'bg-slate-50 border-slate-200/80 text-slate-700'
                    }`}>
                    <span className="text-amber-400 font-bold text-base">🏆</span>
                    <div>
                      <p className="font-semibold">{lang === 'id' ? 'Juara II ICT Potential Product (2025)' : '2nd Place ICT Potential Product (2025)'}</p>
                      <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {lang === 'id' ? 'IITE 2025 Internasional — Proyek LEGITA AI' : 'International IITE 2025 — LEGITA AI Project'}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 p-3 rounded-xl border text-xs sm:text-sm ${darkMode
                    ? 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                    : 'bg-slate-50 border-slate-200/80 text-slate-700'
                    }`}>
                    <span className="text-cyan-400 font-bold text-base">★</span>
                    <div>
                      <p className="font-semibold">{lang === 'id' ? 'Finalis Web Development DINUSFEST' : 'National Web Dev Finalist'}</p>
                      <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {lang === 'id' ? 'Karya Museum Digital (React.js)' : 'Digital Museum Platform'}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 p-3 rounded-xl border text-xs sm:text-sm ${darkMode
                    ? 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                    : 'bg-slate-50 border-slate-200/80 text-slate-700'
                    }`}>
                    <span className="text-blue-500 font-bold text-base">✓</span>
                    <div>
                      <p className="font-semibold">NovoClub & Magang Industri</p>
                      <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {lang === 'id' ? 'ParagonCorp & PPM Universitas Harkat Negeri' : 'ParagonCorp & Community Action'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-2">
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                    {lang === 'id' ? 'Keahlian Inti' : 'Core Technologies'}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['PHP', 'Laravel', 'React.js', 'Flutter', 'Python', 'Flask', 'MySQL', 'Machine Learning'].map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] px-2.5 py-1 rounded-md font-semibold border ${darkMode
                          ? 'bg-slate-800/80 border-slate-700 text-blue-300'
                          : 'bg-blue-50/70 border-blue-200 text-blue-700'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
