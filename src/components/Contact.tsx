import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MessageSquare, Send, CheckCircle2, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import type { Language } from '../types';

interface ContactProps {
  darkMode: boolean;
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ darkMode, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(lang === 'id' ? 'Mohon lengkapi semua kolom wajib.' : 'Please fill out all required fields.');
      return;
    }

    setLoading(true);
    // Simulate swift submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Kontak & Kolaborasi' : 'Get In Touch'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'id' ? 'Mari Terhubung & Berkolaborasi' : "Let's Connect & Collaborate"}
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {lang === 'id'
              ? 'Terbuka untuk peluang magang, freelance web development, proyek riset, atau sekadar berdiskusi.'
              : 'Open for internship opportunities, freelance web development, research collaboration, or discussions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'id' ? 'Informasi Kontak Langsung' : 'Direct Contact Channels'}
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800 hover:border-blue-500'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-400'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Email</p>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800 hover:border-emerald-500'
                      : 'bg-slate-50 border-slate-200 hover:border-emerald-400'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>WhatsApp</p>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Chat via WhatsApp
                    </p>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800 hover:border-blue-500'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-400'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>LinkedIn</p>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Ihsan Nafis Hidayat
                    </p>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800 hover:border-slate-500'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-500/10 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>GitHub</p>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      IhsanNafis123
                    </p>
                  </div>
                </a>

                <div className={`flex items-start gap-4 p-4 rounded-2xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {lang === 'id' ? 'Lokasi Kampus & Domisili' : 'Location'}
                    </p>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'id' ? 'Kirim Pesan Langsung' : 'Send a Message'}
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {lang === 'id'
                  ? 'Isi formulir di bawah ini dan saya akan merespons sesegera mungkin.'
                  : "Fill out the form below and I'll get back to you promptly."}
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    {lang === 'id'
                      ? 'Terima kasih! Pesan Anda berhasil dikirim.'
                      : 'Thank you! Your message has been sent successfully.'}
                  </span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {lang === 'id' ? 'Nama Anda *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {lang === 'id' ? 'Email Anda *' : 'Your Email *'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {lang === 'id' ? 'Subjek Pesan' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={lang === 'id' ? 'e.g. Peluang Magang Web Development' : 'e.g. Web Development Opportunity'}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {lang === 'id' ? 'Isi Pesan *' : 'Message *'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'id' ? 'Tuliskan detail pesan Anda di sini...' : 'Type your message details here...'}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? (lang === 'id' ? 'Mengirim...' : 'Sending...') : (lang === 'id' ? 'Kirim Pesan' : 'Send Message')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
