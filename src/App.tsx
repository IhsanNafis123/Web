import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Competitions } from './components/Competitions';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import type { Language } from './types';

export function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<Language>('id');
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300';
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          darkMode={darkMode}
          lang={lang}
          onOpenCv={() => setIsCvOpen(true)}
        />

        <About
          darkMode={darkMode}
          lang={lang}
        />

        <Education
          darkMode={darkMode}
          lang={lang}
        />

        <Competitions
          darkMode={darkMode}
          lang={lang}
        />

        <Experience
          darkMode={darkMode}
          lang={lang}
        />

        <Skills
          darkMode={darkMode}
          lang={lang}
        />

        <Projects
          darkMode={darkMode}
          lang={lang}
        />

        <Certificates
          darkMode={darkMode}
          lang={lang}
        />

        <Contact
          darkMode={darkMode}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        lang={lang}
      />

      {/* CV Preview & Print Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;
