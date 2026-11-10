import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import type { ProjectItem, Language } from '../types';
import { ExternalLink, FolderGit2, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  darkMode: boolean;
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode, lang }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'academic' | 'community'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const categories = [
    { key: 'all', labelId: 'Semua Proyek', labelEn: 'All Projects' },
    { key: 'web', labelId: 'Web Apps & UMKM', labelEn: 'Web Apps & SMEs' },
    { key: 'academic', labelId: 'Akademik Kampus', labelEn: 'Academic & Campus' },
    { key: 'community', labelId: 'Sosial & Komunitas', labelEn: 'Community Impact' },
  ];

  return (
    <section id="projects" className="py-20 border-t border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Portofolio Hasil Karya' : 'Featured Projects'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? 'Proyek & Solusi Digital' : 'Selected Works & Case Studies'}
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {lang === 'id'
              ? 'Kumpulan proyek nyata dari pendampingan UMKM, sistem informasi kampus, hingga solusi sosial.'
              : 'Real-world software projects spanning SME digitalization, academic tools, and community initiatives.'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === c.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {lang === 'id' ? c.labelId : c.labelEn}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-200/50'
              }`}
            >
              {/* Image Thumbnail */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-950/80 text-blue-400 backdrop-blur-md border border-slate-800">
                    {proj.role}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 text-slate-300 backdrop-blur-md border border-slate-800">
                    {proj.year}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${
                          darkMode
                            ? 'bg-slate-800/80 border-slate-700 text-blue-300'
                            : 'bg-blue-50 border-blue-200 text-blue-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={`text-xl font-bold tracking-tight group-hover:text-blue-500 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {proj.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {lang === 'id' ? proj.descriptionId : proj.descriptionEn}
                  </p>
                </div>

                {/* Highlights Summary */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/40">
                  {proj.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-center bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    {lang === 'id' ? 'Detail Proyek' : 'View Details'}
                  </button>

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2.5 rounded-xl border transition-all ${
                        darkMode
                          ? 'border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-700'
                          : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 shadow-sm'
                      }`}
                      title="Live Demo / Publication"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2.5 rounded-xl border transition-all ${
                        darkMode
                          ? 'border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:border-slate-700'
                          : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 shadow-sm'
                      }`}
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className={`relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-slate-700 hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-2xl"
              />

              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                  {selectedProject.role} • {selectedProject.year}
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {lang === 'id' ? selectedProject.descriptionId : selectedProject.descriptionEn}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {lang === 'id' ? 'Poin Kunci & Hasil Proyek' : 'Key Highlights & Outcomes'}
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {lang === 'id' ? 'Teknologi yang Digunakan' : 'Technologies Used'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-lg font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl text-center text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {lang === 'id' ? 'Buka Live / Publikasi' : 'Open Live Demo / Publication'}
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl text-center text-xs sm:text-sm font-semibold border border-slate-700 hover:bg-slate-800"
                  >
                    GitHub Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
