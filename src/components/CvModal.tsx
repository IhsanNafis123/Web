import React, { useState } from 'react';
import { personalInfo, educationData, experiencesData, competitionsData, certificatesData, projectsData } from '../data/portfolioData';
import { generateAtsPdf } from '../utils/generateAtsPdf';
import { X, Printer, Mail, MapPin, FileText, CheckCircle2, FileDown, Loader2, Globe } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import type { Language } from '../types';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, lang: appLang }) => {
  const [cvLang, setCvLang] = useState<Language>('en'); // Defaults to English for global ATS standard
  const [activeFormat, setActiveFormat] = useState<'ats' | 'modern'>('ats');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);

  if (!isOpen) return null;

  const isEn = cvLang === 'en';

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadAtsPdf = (targetLang?: Language) => {
    const chosenLang = targetLang || cvLang;
    setIsPdfGenerating(true);
    try {
      generateAtsPdf(chosenLang);
      setDownloadSuccess(`PDF (${chosenLang.toUpperCase()})`);
      setTimeout(() => setDownloadSuccess(null), 3500);
    } catch (err) {
      console.error('Failed to generate ATS PDF:', err);
    } finally {
      setIsPdfGenerating(false);
    }
  };

  const handleDownloadAtsTxt = () => {
    const divider = '======================================================================';
    const subDivider = '----------------------------------------------------------------------';

    const locationStr = isEn ? 'Tegal, Central Java, Indonesia' : personalInfo.location;
    const summaryStr = isEn ? personalInfo.aboutDetailedEn : personalInfo.aboutDetailedId;
    const formerNote = isEn ? `Formerly ${educationData.formerName}` : `Sebelumnya ${educationData.formerName}`;
    const periodStr = isEn ? 'Jul 2023 – May 2027' : educationData.period;
    const focusItems = isEn ? educationData.focusEn : educationData.focusId;

    const textContent = `${divider}
${personalInfo.name.toUpperCase()}
${personalInfo.title}
Location : ${locationStr}
Email    : ${personalInfo.email}
LinkedIn : ${personalInfo.linkedin}
GitHub   : ${personalInfo.github}
${divider}

${isEn ? 'PROFESSIONAL SUMMARY' : 'RINGKASAN PROFESIONAL'}
${subDivider}
${summaryStr}

${isEn ? 'EDUCATION' : 'PENDIDIKAN'}
${subDivider}
${educationData.institution} (${formerNote})
${educationData.degree} - ${educationData.major}
Period: ${periodStr} | ${isEn ? 'GPA' : 'IPK'}: ${educationData.gpa}
Location: ${locationStr}
${isEn ? 'Academic Focus' : 'Fokus Keilmuan'}:
${focusItems.map((f) => `• ${f}`).join('\n')}

${isEn ? 'TECHNICAL SKILLS' : 'KEAHLIAN TEKNIS'}
${subDivider}
• ${isEn ? 'Programming Languages' : 'Bahasa Pemrograman'} : PHP, JavaScript, Python, Java, SQL, HTML5, CSS3
• ${isEn ? 'Frameworks & Mobile' : 'Framework & Mobile'}   : Laravel, React.js, Next.js, Flutter, Flask, CodeIgniter, Tailwind CSS
• ${isEn ? 'Databases & Backend' : 'Basis Data & Backend'} : MySQL, MongoDB, RESTful APIs, MVC Architecture, Authentication, CRUD
• ${isEn ? 'Tools & Methodologies' : 'Tools & Metodologi'} : Git, GitHub, VS Code, Laragon, XAMPP, Vercel V0, Responsive Web Design

${isEn ? 'KEY TECHNICAL PROJECTS' : 'PROYEK PENGEMBANGAN TEKNOLOGI'}
${subDivider}
${projectsData
  .map(
    (p) => `• ${p.title} | Role: ${p.role} (${p.year})
  - Description  : ${isEn ? p.descriptionEn : p.descriptionId}
  - Technologies : ${p.tags.join(', ')}
  - Highlights   :
${p.highlights.map((h) => `    * ${h}`).join('\n')}`
  )
  .join('\n\n')}

${isEn ? 'WORK & ORGANIZATIONAL EXPERIENCE' : 'PENGALAMAN KERJA & ORGANISASI'}
${subDivider}
${experiencesData
  .map(
    (e) => `• ${e.role} — ${e.organization} (${e.period})
  Type: ${e.type} | Location: ${e.location}
  ${isEn ? 'Key Responsibilities' : 'Tanggung Jawab & Kontribusi'}:
${(isEn ? e.descriptionEn : e.descriptionId).map((d) => `  - ${d}`).join('\n')}`
  )
  .join('\n\n')}

${isEn ? 'HONORS & AWARDS' : 'KOMPETISI & PENGHARGAAN'}
${subDivider}
${competitionsData
  .map(
    (c) => `• ${c.title} (${c.year})
  ${isEn ? 'Award' : 'Penghargaan'} : ${isEn ? c.achievementEn : c.achievementId}
  Event     : ${c.event}
  Organizer : ${c.organizer}
  Details   : ${isEn ? c.descriptionEn : c.descriptionId}`
  )
  .join('\n\n')}

${isEn ? 'CERTIFICATIONS & CREDENTIALS' : 'SERTIFIKASI & KREDENSIAL'}
${subDivider}
${certificatesData
  .map(
    (cert) => `• ${cert.title}
  Issuer     : ${cert.issuer}
  Date       : ${cert.date}
  Credential : ${cert.credentialId || 'N/A'}`
  )
  .join('\n')}

${divider}
Generated from ${personalInfo.name} Professional Portfolio (ATS-Compliant Plaintext - ${isEn ? 'English' : 'Indonesia'})
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_${personalInfo.name.replace(/\s+/g, '_')}_ATS_${isEn ? 'English' : 'Indonesia'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(`TXT (${isEn ? 'EN' : 'ID'})`);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div id="cv-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div id="cv-modal-container" className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto bg-white text-slate-900 rounded-3xl shadow-2xl p-6 sm:p-10 my-auto">
        {/* Modal Top Bar (Hidden in print) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4 print:hidden">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              <span className="ml-2 text-xs font-bold text-slate-600 uppercase tracking-widest">
                Curriculum Vitae • {personalInfo.name}
              </span>
            </div>

            {/* Language & Layout Controls */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Language Switcher */}
              <div className="inline-flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setCvLang('en')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    cvLang === 'en'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Switch CV content to English (International ATS Standard)"
                >
                  <span>🇬🇧</span>
                  <span>English (ATS)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCvLang('id')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    cvLang === 'id'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Ganti konten CV ke Bahasa Indonesia"
                >
                  <span>🇮🇩</span>
                  <span>Indonesia</span>
                </button>
              </div>

              {/* Layout Switcher */}
              <div className="inline-flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveFormat('ats')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeFormat === 'ats'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  📄 ATS View
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFormat('modern')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeFormat === 'modern'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🎨 Modern View
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Primary Action: Direct Download ATS PDF */}
            <button
              onClick={() => handleDownloadAtsPdf()}
              disabled={isPdfGenerating}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
              title={`Unduh file PDF format ATS dalam bahasa ${isEn ? 'English' : 'Indonesia'}`}
            >
              {isPdfGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : downloadSuccess?.startsWith('PDF') ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                  <span className="text-emerald-100 font-bold">{downloadSuccess} Done!</span>
                </>
              ) : (
                <>
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download ATS (.pdf) [{isEn ? 'EN' : 'ID'}]</span>
                </>
              )}
            </button>

            {/* Secondary Action: Download ATS Text */}
            <button
              onClick={handleDownloadAtsTxt}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-300 bg-slate-50 text-slate-800 hover:bg-slate-100 shadow-sm cursor-pointer transition-all hover:-translate-y-0.5"
              title="Download pure ATS-compliant plain text format (.txt)"
            >
              {downloadSuccess?.startsWith('TXT') ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">{downloadSuccess} Done!</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5 text-slate-600" />
                  <span>Download ATS (.txt)</span>
                </>
              )}
            </button>

            {/* Print / Save PDF via Browser Print */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm cursor-pointer transition-all"
              title="Cetak atau Simpan PDF via browser"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>{isEn ? 'Print' : 'Cetak'}</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-300 hover:bg-slate-100 cursor-pointer transition-all ml-1"
              title="Tutup"
            >
              <X className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* ATS-COMPLIANT SINGLE-COLUMN LAYOUT (Default & Clean for Parsers) */}
        {/* ============================================================== */}
        {activeFormat === 'ats' ? (
          <div id="cv-print-area" className="space-y-6 text-slate-900 font-sans leading-relaxed">
            {/* ATS Header: Clear, Centered/Structured, Single Column */}
            <div className="text-center border-b-2 border-slate-900 pb-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-slate-900">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2 font-medium">
                <span>{isEn ? 'Tegal, Central Java, Indonesia' : personalInfo.location}</span>
                <span>•</span>
                <a href={`mailto:${personalInfo.email}`} className="text-slate-900 hover:underline">
                  {personalInfo.email}
                </a>
                <span>•</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-900 hover:underline">
                  linkedin.com/in/ihsan-nafis-hidayat
                </a>
                <span>•</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-900 hover:underline font-semibold">
                  github.com/IhsanNafis123
                </a>
              </div>
            </div>

            {/* ATS Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                {isEn ? 'PROFESSIONAL SUMMARY' : 'RINGKASAN PROFESIONAL'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-800 text-justify leading-relaxed">
                {isEn ? personalInfo.aboutDetailedEn : personalInfo.aboutDetailedId}
              </p>
            </div>

            {/* ATS Education (Multi-line layout with ZERO text overlaps) */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                {isEn ? 'EDUCATION' : 'PENDIDIKAN'}
              </h2>
              <div className="text-xs sm:text-sm space-y-1">
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span className="text-sm font-extrabold">{educationData.institution}</span>
                  <span className="font-semibold text-slate-700 text-xs whitespace-nowrap">
                    {isEn ? 'Jul 2023 – May 2027' : educationData.period}
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-slate-700">
                  <span className="font-medium text-slate-800">
                    {educationData.degree} - {educationData.major}
                  </span>
                  <span className="whitespace-nowrap text-slate-600">
                    {isEn ? 'Tegal, Central Java, Indonesia' : educationData.location}
                  </span>
                </div>
                <p className="text-xs text-slate-500 italic">
                  {isEn ? `(Formerly ${educationData.formerName})` : `(Sebelumnya ${educationData.formerName})`}
                </p>
                <p className="text-xs font-bold text-emerald-700 pt-0.5">
                  {isEn ? `GPA: ${educationData.gpa}` : `IPK: ${educationData.gpa}`}
                </p>
                <div className="pt-1">
                  <p className="text-xs font-semibold text-slate-800">
                    {isEn ? 'Academic Focus:' : 'Fokus Keilmuan:'}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-700 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    {(isEn ? educationData.focusEn : educationData.focusId).map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ATS Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                {isEn ? 'TECHNICAL SKILLS' : 'KEAHLIAN TEKNIS'}
              </h2>
              <div className="text-xs sm:text-sm space-y-1 text-slate-800">
                <p>
                  <strong className="text-slate-900 font-bold">{isEn ? 'Programming Languages:' : 'Bahasa Pemrograman:'}</strong> PHP, JavaScript, Python, Java, SQL, HTML5, CSS3
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">{isEn ? 'Frameworks & Mobile:' : 'Framework & Mobile:'}</strong> Laravel, React.js, Next.js, Flutter, Flask, CodeIgniter, Tailwind CSS
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">{isEn ? 'Databases & Backend:' : 'Basis Data & Backend:'}</strong> MySQL, MongoDB, RESTful API, CRUD, Authentication, Machine Learning
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">{isEn ? 'Tools & Methodologies:' : 'Tools & Metodologi:'}</strong> Git, GitHub, VS Code, Laragon, XAMPP, Vercel V0, Responsive Web Design
                </p>
              </div>
            </div>

            {/* ATS Key Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                {isEn ? 'KEY TECHNICAL PROJECTS' : 'PROYEK PENGEMBANGAN TEKNOLOGI'}
              </h2>
              <div className="space-y-3">
                {projectsData.map((p) => {
                  const projectYear = isEn
                    ? p.year.replace('Sekarang', 'Present').replace('Agt', 'Aug').replace('Okt', 'Oct')
                    : p.year;

                  return (
                    <div key={p.id} className="text-xs sm:text-sm space-y-1">
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>{p.title}</span>
                        <span className="font-semibold text-slate-700 text-xs">{projectYear}</span>
                      </div>
                      <p className="text-xs text-slate-700 italic">
                        Role: {p.role} | Tech Stack: {p.tags.join(', ')}
                      </p>
                      <p className="text-xs text-slate-800">
                        {isEn ? p.descriptionEn : p.descriptionId}
                      </p>
                      <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                        {p.highlights.map((h, hIdx) => (
                          <li key={hIdx}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ATS Work & Leadership Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                {isEn ? 'WORK & LEADERSHIP EXPERIENCE' : 'PENGALAMAN KERJA & ORGANISASI'}
              </h2>
              <div className="space-y-3">
                {experiencesData.map((e) => {
                  const expPeriod = isEn
                    ? e.period.replace('Juli', 'July').replace('November', 'November').replace('Oktober', 'October').replace('Mei', 'May')
                    : e.period;

                  return (
                    <div key={e.id} className="text-xs sm:text-sm space-y-1">
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>
                          {e.role} — <span className="font-semibold">{e.organization}</span>
                        </span>
                        <span className="font-semibold text-slate-700 text-xs whitespace-nowrap">{expPeriod}</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Type: {e.type} | {e.location}
                      </p>
                      <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                        {(isEn ? e.descriptionEn : e.descriptionId).map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ATS Competitions & Awards */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                {isEn ? 'HONORS & AWARDS' : 'KOMPETISI & PENGHARGAAN'}
              </h2>
              <div className="space-y-2.5">
                {competitionsData.map((c) => (
                  <div key={c.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>
                        {c.title} — <span className="font-semibold text-slate-700">({isEn ? c.achievementEn : c.achievementId})</span>
                      </span>
                      <span className="font-semibold text-slate-700 text-xs whitespace-nowrap">{c.year}</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      {c.organizer} • {c.event}
                    </p>
                    <p className="text-xs text-slate-700 mt-0.5">
                      {isEn ? c.descriptionEn : c.descriptionId}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ATS Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                {isEn ? 'CERTIFICATIONS & CREDENTIALS' : 'SERTIFIKASI & KREDENSIAL'}
              </h2>
              <div className="space-y-1.5 text-xs">
                {certificatesData.map((cert) => {
                  const certDate = isEn
                    ? cert.date.replace('Juli', 'July').replace('Januari', 'January').replace('Februari', 'February').replace('Oktober', 'October').replace('Mei', 'May')
                    : cert.date;

                  return (
                    <div key={cert.id} className="flex justify-between items-baseline gap-4 py-0.5">
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-slate-900">{cert.title}</span>
                        <span className="text-slate-600"> — {cert.issuer}</span>
                        {cert.credentialId && (
                          <span className="text-slate-500 font-mono text-[11px]"> (ID: {cert.credentialId})</span>
                        )}
                      </div>
                      <span className="text-slate-700 font-medium whitespace-nowrap shrink-0 text-right">
                        {certDate}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* ============================================================== */
          /* MODERN STYLIZED LAYOUT */
          /* ============================================================== */
          <div id="cv-print-area" className="space-y-8">
            {/* Header */}
            <div className="border-b border-slate-300 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                  {personalInfo.name}
                </h1>
                <p className="text-base font-bold text-blue-600 mt-1">
                  {personalInfo.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {personalInfo.university} ({isEn ? `Formerly ${educationData.formerName}` : `Sebelumnya ${educationData.formerName}`})
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-1 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>{isEn ? 'Tegal, Central Java, Indonesia' : personalInfo.location}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-500" />
                  <span>{personalInfo.email}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    linkedin.com/in/ihsan-nafis-hidayat
                  </a>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="font-semibold text-slate-800 hover:underline">
                    github.com/IhsanNafis123
                  </a>
                </p>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-200 pb-1 mb-2">
                {isEn ? 'Professional Summary' : 'Ringkasan Profesional'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {isEn ? personalInfo.aboutDetailedEn : personalInfo.aboutDetailedId}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-200 pb-1 mb-3">
                {isEn ? 'Education' : 'Pendidikan'}
              </h2>
              <div className="flex justify-between items-start gap-4 text-xs sm:text-sm">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900">{educationData.institution}</p>
                  <p className="text-slate-600 text-xs italic">
                    {isEn ? `Formerly ${educationData.formerName}` : `Sebelumnya ${educationData.formerName}`}
                  </p>
                  <p className="text-slate-700">{educationData.degree} - {educationData.major}</p>
                </div>
                <div className="text-right text-xs text-slate-500 shrink-0 whitespace-nowrap">
                  <p className="font-semibold text-slate-700">{isEn ? 'Jul 2023 – May 2027' : educationData.period}</p>
                  <p>{isEn ? 'Tegal, Central Java, Indonesia' : educationData.location}</p>
                  {educationData.gpa && <p className="font-semibold text-emerald-600">IPK / GPA: {educationData.gpa}</p>}
                </div>
              </div>
            </div>

            {/* Key Technical Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-200 pb-1 mb-3">
                {isEn ? 'Featured Projects' : 'Proyek Unggulan'}
              </h2>
              <div className="space-y-3">
                {projectsData.slice(0, 4).map((p) => {
                  const projectYear = isEn
                    ? p.year.replace('Sekarang', 'Present').replace('Agt', 'Aug').replace('Okt', 'Oct')
                    : p.year;

                  return (
                    <div key={p.id} className="text-xs sm:text-sm">
                      <div className="flex justify-between items-baseline gap-4 font-bold text-slate-900">
                        <span>{p.title}</span>
                        <span className="text-slate-500 font-normal text-xs whitespace-nowrap">{projectYear}</span>
                      </div>
                      <p className="text-xs text-blue-600 font-semibold">{p.role}</p>
                      <p className="text-xs text-slate-700 mt-0.5">
                        {isEn ? p.descriptionEn : p.descriptionId}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Competitions & Achievements */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-600 border-b border-amber-200 pb-1 mb-3">
                {isEn ? 'All Competitions & Achievements' : 'Semua Kompetisi & Penghargaan'}
              </h2>
              <div className="space-y-3">
                {competitionsData.map((c) => (
                  <div key={c.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between items-baseline gap-4 font-bold text-slate-900">
                      <span className="flex-1 min-w-0">{c.title} — <span className="text-amber-600">({isEn ? c.achievementEn : c.achievementId})</span></span>
                      <span className="text-slate-500 font-semibold text-xs shrink-0 whitespace-nowrap text-right">{c.year}</span>
                    </div>
                    <p className="text-xs text-slate-600 font-semibold">{c.organizer} • {c.event}</p>
                    <p className="text-xs text-slate-700 mt-0.5">
                      {isEn ? c.descriptionEn : c.descriptionId}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-200 pb-1 mb-3">
                {isEn ? 'Experience & Leadership' : 'Pengalaman Kerja & Organisasi'}
              </h2>
              <div className="space-y-4">
                {experiencesData.map((e) => {
                  const expPeriod = isEn
                    ? e.period.replace('Juli', 'July').replace('November', 'November').replace('Oktober', 'October').replace('Mei', 'May')
                    : e.period;

                  return (
                    <div key={e.id} className="text-xs sm:text-sm space-y-1">
                      <div className="flex justify-between items-baseline gap-4 font-bold text-slate-900">
                        <span className="flex-1 min-w-0">{e.role} — <span className="text-blue-600">{e.organization}</span></span>
                        <span className="text-slate-500 font-semibold text-xs shrink-0 whitespace-nowrap text-right">{expPeriod}</span>
                      </div>
                      <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                        {(isEn ? e.descriptionEn : e.descriptionId).map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Publications & Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-200 pb-1 mb-3">
                {isEn ? 'Publications & Certificates' : 'Publikasi Ilmiah & Sertifikasi'}
              </h2>
              <div className="space-y-2 text-xs">
                {certificatesData.map((cert) => {
                  const certDate = isEn
                    ? cert.date.replace('Juli', 'July').replace('Januari', 'January').replace('Februari', 'February').replace('Oktober', 'October').replace('Mei', 'May')
                    : cert.date;

                  return (
                    <div key={cert.id} className="flex justify-between items-baseline gap-4 py-1 border-b border-slate-100 last:border-b-0">
                      <div className="flex-1 min-w-0 pr-2">
                        <span className="font-semibold text-slate-800">{cert.title}</span>
                        <span className="text-slate-500"> — {cert.issuer}</span>
                      </div>
                      <span className="text-slate-500 font-medium text-xs whitespace-nowrap shrink-0 text-right">
                        {certDate}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-200 pb-1 mb-3">
                {isEn ? 'Technical Skills & Tools' : 'Keahlian Teknis & Alat Bantu'}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div>
                  <p className="font-bold text-slate-800">Languages</p>
                  <p className="text-slate-600">PHP, JavaScript, Python, Java, HTML5, CSS3</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Frameworks</p>
                  <p className="text-slate-600">Laravel, Flask, React.js, Next.js, Flutter, CodeIgniter</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Database & Backend</p>
                  <p className="text-slate-600">MySQL, RESTful API, CRUD, Auth, Machine Learning</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Tools & Workflow</p>
                  <p className="text-slate-600">Git, GitHub, VS Code, Laragon, XAMPP, Responsive Web</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
