import React, { useState } from 'react';
import { certificatesData } from '../data/portfolioData';
import { Award, BookOpen, ExternalLink, ShieldCheck, X, ZoomIn } from 'lucide-react';
import type { Language } from '../types';

interface CertificatesProps {
  darkMode: boolean;
  lang: Language;
}

export const Certificates: React.FC<CertificatesProps> = ({ darkMode, lang }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-20 border-t border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Sertifikasi & Publikasi' : 'Certificates & Publications'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? 'Kredensial & Publikasi Ilmiah' : 'Credentials & Scientific Output'}
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {lang === 'id'
              ? 'Sertifikasi kompetensi, keikutsertaan program nasional, dan publikasi jurnal terakreditasi.'
              : 'Accredited journal publications, national leadership certificates, and tech credentials.'}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificatesData.map((cert) => {
            const isPub = cert.type === 'publication';

            return (
              <div
                key={cert.id}
                className={`rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500/50 shadow-xl'
                    : 'bg-white border-slate-200 hover:border-blue-400 shadow-md shadow-slate-200/50'
                }`}
              >
                {/* Accent line for publications */}
                {isPub && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600" />
                )}

                {/* Certificate Image */}
                {cert.image && (
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => setPreviewImage(cert.image!)}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )}

                <div className={`space-y-4 ${cert.image ? 'p-6' : 'p-6 sm:p-8'}`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      isPub
                        ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                        : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                    }`}>
                      {isPub ? <BookOpen className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
                      <span>{isPub ? (lang === 'id' ? 'Publikasi Ilmiah' : 'Journal Publication') : (lang === 'id' ? 'Sertifikat Resmi' : 'Official Certificate')}</span>
                    </span>

                    <span className="text-xs font-semibold text-slate-400 shrink-0 whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-500 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mx-6 mb-6 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs">
                  <span className={`font-mono text-[11px] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    ID: {cert.credentialId || 'N/A'}
                  </span>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <span>{lang === 'id' ? 'Lihat Profil' : 'View Profile'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={previewImage}
            alt="Certificate Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
