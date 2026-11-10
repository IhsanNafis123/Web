import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code, BookOpen, Trophy, Users, MapPin, Mail, Sparkles, Smartphone } from 'lucide-react';
import type { Language } from '../types';

interface AboutProps {
  darkMode: boolean;
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ darkMode, lang }) => {
  const stats = [
    {
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      titleId: 'D4 Teknik Informatika',
      titleEn: 'Applied Informatics',
      subId: 'Universitas Harkat Negeri (IPK 3.64)',
      subEn: 'Universitas Harkat Negeri (GPA 3.64)'
    },
    {
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      titleId: 'The 2nd Winner IITE 2025',
      titleEn: '2nd Place Winner IITE 2025',
      subId: 'ICT Potential Product (LEGITA AI)',
      subEn: 'ICT Potential Product (LEGITA AI)'
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-500" />,
      titleId: 'Web & Mobile Apps',
      titleEn: 'Web & Mobile Apps',
      subId: 'Laravel, React, Flutter, Flask',
      subEn: 'Laravel, React, Flutter, Flask'
    },
    {
      icon: <Users className="w-5 h-5 text-cyan-500" />,
      titleId: 'NovoClub & PPM',
      titleEn: 'NovoClub & Community',
      subId: 'ParagonCorp & Pengabdian Masyarakat',
      subEn: 'ParagonCorp & Community Action'
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Tentang Saya' : 'About Me'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? 'Profil & Latar Belakang' : 'Profile & Background'}
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {lang === 'id'
              ? 'Pengembangan aplikasi berbasis web dan mobile dengan pendekatan arsitektur modern.'
              : 'Web and mobile application development with modern architectural standards.'}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Detailed Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {lang === 'id'
                ? 'Mahasiswa Teknik Informatika • Web & Mobile Developer'
                : 'Informatics Engineering Student • Web & Mobile Developer'}
            </h3>

            <div className={`space-y-4 text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <p>
                {lang === 'id'
                  ? 'Saya adalah mahasiswa Teknik Informatika di Universitas Harkat Negeri yang memiliki minat dan pengalaman dalam pengembangan aplikasi berbasis web dan mobile. Saya terbiasa mengembangkan aplikasi dari sisi frontend maupun backend, mulai dari perancangan database, pembuatan REST API, hingga implementasi antarmuka pengguna.'
                  : 'I am an Informatics Engineering student at Universitas Harkat Negeri passionate and experienced in web and mobile applications. Proficient across both frontend and backend development—from relational database architecture, RESTful API design, to user interface implementation.'}
              </p>
              <p>
                {lang === 'id'
                  ? 'Saya memiliki pengalaman menggunakan berbagai teknologi seperti PHP, Laravel, JavaScript, Python, Flask, MySQL, dan Java. Saya juga memiliki ketertarikan pada Machine Learning (seperti Generative AI Model Flux pada BatikFly), pengembangan sistem informasi, dan integrasi database.'
                  : 'Experienced using modern technologies including PHP, Laravel, JavaScript, Python, Flask, MySQL, and Java, alongside a strong interest in Machine Learning (such as the Flux Generative AI model in BatikFly), information systems, and intelligent database integrations.'}
              </p>
              <p>
                {lang === 'id'
                  ? 'Dalam mengembangkan aplikasi, saya terbiasa menggunakan Git/GitHub, VS Code, Laragon, XAMPP, serta menerapkan konsep CRUD, REST API, authentication, database management, dan responsive web design.'
                  : 'Comfortable leveraging Git/GitHub, VS Code, Laragon, and XAMPP while applying solid software practices: CRUD, REST APIs, authentication security, database management, and responsive web design.'}
              </p>
            </div>

            <div className={`p-5 rounded-2xl border space-y-3 ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                : 'bg-blue-50/50 border-blue-100 text-slate-700'
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                  <span><strong>{lang === 'id' ? 'Kampus:' : 'Campus:'}</strong> {personalInfo.university}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                  <span><strong>Email:</strong> {personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
                  <span><strong>{lang === 'id' ? 'IPK Kumulatif:' : 'GPA:'}</strong> {personalInfo.gpa} / 4.00</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Code className="w-4 h-4 text-blue-500 shrink-0" />
                  <span><strong>{lang === 'id' ? 'Periode Studi:' : 'Period:'}</strong> {personalInfo.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500/50 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-blue-400 shadow-md shadow-slate-200/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  darkMode ? 'bg-slate-800' : 'bg-slate-100'
                }`}>
                  {s.icon}
                </div>
                <h4 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'id' ? s.titleId : s.titleEn}
                </h4>
                <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'id' ? s.subId : s.subEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
