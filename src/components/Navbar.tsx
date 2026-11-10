import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, FileDown } from 'lucide-react';
import type { Language } from '../types';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: Language;
  setLang: (l: Language) => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  lang,
  setLang,
  onOpenCv
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelId: 'Tentang', labelEn: 'About' },
    { href: '#education', labelId: 'Pendidikan', labelEn: 'Education' },
    { href: '#competitions', labelId: 'Kompetisi', labelEn: 'Competitions' },
    { href: '#experience', labelId: 'Pengalaman', labelEn: 'Experience' },
    { href: '#skills', labelId: 'Keahlian', labelEn: 'Skills' },
    { href: '#projects', labelId: 'Proyek', labelEn: 'Projects' },
    { href: '#contact', labelId: 'Kontak', labelEn: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group font-bold text-xl tracking-tight"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              IN
            </span>
            <div className="flex flex-col">
              <span className={`text-base font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Ihsan Nafis
              </span>
              <span className="text-[10px] font-medium text-blue-500 uppercase tracking-widest -mt-1">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {lang === 'id' ? link.labelId : link.labelEn}
              </a>
            ))}
          </div>

          {/* Actions: Theme Toggle, Lang Toggle, CV Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                darkMode
                  ? 'border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
              title="Ganti Bahasa / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Dark/Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-800 text-amber-400 hover:bg-slate-800'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CV Download / Preview */}
            <button
              onClick={onOpenCv}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/30 hover:shadow-md hover:shadow-blue-500/40 transition-all cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Lihat CV' : 'View CV'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'border-slate-800 text-amber-400'
                  : 'border-slate-200 text-slate-700'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'border-slate-800 text-slate-200 hover:bg-slate-800'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className={`sm:hidden border-b px-4 pt-3 pb-6 space-y-2 transition-all ${
            darkMode
              ? 'bg-slate-950/98 border-slate-800 text-slate-200'
              : 'bg-white/98 border-slate-200 text-slate-800'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                darkMode ? 'hover:bg-slate-800/80' : 'hover:bg-slate-100'
              }`}
            >
              {lang === 'id' ? link.labelId : link.labelEn}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800/50 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setLang(lang === 'id' ? 'en' : 'id');
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold border border-slate-700"
            >
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Bahasa: {lang.toUpperCase()}</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenCv();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md"
            >
              <FileDown className="w-4 h-4" />
              <span>{lang === 'id' ? 'Lihat Resume' : 'View Resume'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
