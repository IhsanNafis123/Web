import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';
import type { Language } from '../types';

interface FooterProps {
  darkMode: boolean;
  lang?: Language;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                IN
              </span>
              <span className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {personalInfo.university} • D4 Teknik Informatika
            </p>
          </div>

          <div className="text-center sm:text-right space-y-1 text-xs">
            <p className="flex items-center justify-center sm:justify-end gap-1.5">
              <span>Designed & Built with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>using React & Tailwind CSS</span>
            </p>
            <p className="text-slate-500 text-[11px]">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className={`p-3 rounded-2xl border transition-all cursor-pointer ${
              darkMode
                ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 shadow-sm'
            }`}
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
