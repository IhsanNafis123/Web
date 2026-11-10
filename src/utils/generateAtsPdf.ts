// @ts-expect-error UMD module
import jspdfPkg from 'jspdf/dist/jspdf.umd.min.js';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsPDF: any = (jspdfPkg as any).jsPDF || jspdfPkg;

import {
  personalInfo,
  educationData,
  experiencesData,
  competitionsData,
  certificatesData,
  projectsData,
} from '../data/portfolioData';
import type { Language } from '../types';

export function generateAtsPdf(lang: Language = 'en'): void {
  const isEn = lang === 'en';

  // A4 standard: 210mm x 297mm
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182mm
  let y = 16;

  // Auto page-break helper
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = 16;
    }
  };

  // Section heading drawer
  const drawHeading = (title: string) => {
    checkPageBreak(12);
    y += 3;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;
    doc.setDrawColor(30, 41, 59);
    doc.setLineWidth(0.4);
    doc.line(margin, y, pageWidth - margin, y);
    y += 4;
  };

  // ==========================================
  // HEADER (Name, Title & Contact Info)
  // ==========================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(15, 23, 42);
  doc.text(personalInfo.name.toUpperCase(), pageWidth / 2, y, { align: 'center' });
  y += 5.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(51, 65, 85);
  doc.text(personalInfo.title, pageWidth / 2, y, { align: 'center' });
  y += 4.5;

  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const locationText = isEn ? 'Tegal, Central Java, Indonesia' : personalInfo.location;
  const contactLine = `${locationText}  |  ${personalInfo.email}  |  LinkedIn: linkedin.com/in/ihsan-nafis-hidayat`;
  doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
  y += 3.8;

  const githubLine = `GitHub: github.com/IhsanNafis123  |  Portfolio: Universitas Harkat Negeri`;
  doc.text(githubLine, pageWidth / 2, y, { align: 'center' });
  y += 3;

  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.6);
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;

  // ==========================================
  // 1. PROFESSIONAL SUMMARY
  // ==========================================
  drawHeading(isEn ? 'Professional Summary' : 'Ringkasan Profesional');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  const summaryText = isEn ? personalInfo.aboutDetailedEn : personalInfo.aboutDetailedId;
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  checkPageBreak(summaryLines.length * 4.2);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.2 + 2;

  // ==========================================
  // 2. EDUCATION (Clean Multi-line, NO Overlaps!)
  // ==========================================
  drawHeading(isEn ? 'Education' : 'Pendidikan');

  checkPageBreak(24);
  // Row 1: Institution & Period
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(educationData.institution, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const periodText = isEn ? 'Jul 2023 – May 2027' : educationData.period;
  doc.text(periodText, pageWidth - margin, y, { align: 'right' });
  y += 4;

  // Row 2: Degree & Major + Location
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  doc.text(`${educationData.degree} - ${educationData.major}`, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(locationText, pageWidth - margin, y, { align: 'right' });
  y += 4;

  // Row 3: Former Institution (Dedicated separate line!)
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(
    isEn ? `(Formerly ${educationData.formerName})` : `(Sebelumnya ${educationData.formerName})`,
    margin,
    y
  );
  y += 3.8;

  // Row 4: GPA / IPK
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(5, 150, 105);
  doc.text(isEn ? `GPA: ${educationData.gpa}` : `IPK: ${educationData.gpa}`, margin, y);
  y += 4;

  // Row 5: Focus areas
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.setFontSize(8.5);
  const focusItems = isEn ? educationData.focusEn : educationData.focusId;
  const focusPrefix = isEn ? 'Academic Focus: ' : 'Fokus Keilmuan: ';
  const focusText = focusPrefix + focusItems.join(', ');
  const focusLines = doc.splitTextToSize(focusText, contentWidth);
  checkPageBreak(focusLines.length * 3.8);
  doc.text(focusLines, margin, y);
  y += focusLines.length * 3.8 + 2;

  // ==========================================
  // 3. TECHNICAL SKILLS
  // ==========================================
  drawHeading(isEn ? 'Technical Skills' : 'Keahlian Teknis');

  const skillsList = isEn
    ? [
        { label: 'Programming Languages', val: 'PHP, JavaScript, Python, Java, SQL, HTML5, CSS3' },
        { label: 'Frameworks & Mobile', val: 'Laravel, React.js, Next.js, Flutter, Flask, CodeIgniter, Tailwind CSS' },
        { label: 'Databases & Backend', val: 'MySQL, MongoDB, RESTful APIs, MVC Architecture, Authentication, CRUD' },
        { label: 'Tools & Methodologies', val: 'Git, GitHub, VS Code, Laragon, XAMPP, Vercel V0, Responsive Web Design' },
      ]
    : [
        { label: 'Bahasa Pemrograman', val: 'PHP, JavaScript, Python, Java, SQL, HTML5, CSS3' },
        { label: 'Framework & Mobile', val: 'Laravel, React.js, Next.js, Flutter, Flask, CodeIgniter, Tailwind CSS' },
        { label: 'Basis Data & Backend', val: 'MySQL, MongoDB, RESTful APIs, Arsitektur MVC, Autentikasi, CRUD' },
        { label: 'Tools & Metodologi', val: 'Git, GitHub, VS Code, Laragon, XAMPP, Vercel V0, Responsive Web Design' },
      ];

  skillsList.forEach((s) => {
    checkPageBreak(5);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${s.label}: `, margin, y);
    const labelWidth = doc.getTextWidth(`• ${s.label}: `);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text(s.val, margin + labelWidth, y);
    y += 4.2;
  });
  y += 1;

  // ==========================================
  // 4. KEY TECHNICAL PROJECTS
  // ==========================================
  drawHeading(isEn ? 'Key Technical Projects' : 'Proyek Pengembangan Teknologi');

  projectsData.forEach((p) => {
    checkPageBreak(24);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(p.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    const projectYear = isEn
      ? p.year.replace('Sekarang', 'Present').replace('Agt', 'Aug').replace('Okt', 'Oct').replace('Feb', 'Feb')
      : p.year;
    doc.text(projectYear, pageWidth - margin, y, { align: 'right' });
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(37, 99, 235);
    doc.text(`Role: ${p.role}  |  Tech Stack: ${p.tags.join(', ')}`, margin, y);
    y += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(8.5);
    const descText = isEn ? p.descriptionEn : p.descriptionId;
    const descLines = doc.splitTextToSize(descText, contentWidth - 4);
    checkPageBreak(descLines.length * 3.6 + p.highlights.length * 3.6);
    doc.text(descLines, margin + 2, y);
    y += descLines.length * 3.6 + 1;

    p.highlights.forEach((h) => {
      checkPageBreak(4);
      doc.text(`- ${h}`, margin + 4, y);
      y += 3.6;
    });
    y += 2;
  });

  // ==========================================
  // 5. WORK & LEADERSHIP EXPERIENCE
  // ==========================================
  drawHeading(isEn ? 'Work & Leadership Experience' : 'Pengalaman Kerja & Organisasi');

  experiencesData.forEach((e) => {
    checkPageBreak(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${e.role} — ${e.organization}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    const expPeriod = isEn
      ? e.period.replace('Juli', 'July').replace('November', 'November').replace('Oktober', 'October').replace('Mei', 'May')
      : e.period;
    doc.text(expPeriod, pageWidth - margin, y, { align: 'right' });
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 116, 139);
    doc.text(`${e.type}  |  ${e.location}`, margin, y);
    y += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(8.5);
    const bulletList = isEn ? e.descriptionEn : e.descriptionId;
    bulletList.forEach((desc) => {
      const descLines = doc.splitTextToSize(`• ${desc}`, contentWidth - 2);
      checkPageBreak(descLines.length * 3.6);
      doc.text(descLines, margin + 2, y);
      y += descLines.length * 3.6;
    });
    y += 2;
  });

  // ==========================================
  // 6. COMPETITIONS & AWARDS
  // ==========================================
  drawHeading(isEn ? 'Honors & Awards' : 'Kompetisi & Penghargaan');

  competitionsData.forEach((c) => {
    checkPageBreak(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    const achievementLabel = isEn ? c.achievementEn : c.achievementId;
    doc.text(`${c.title} — (${achievementLabel})`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(c.year, pageWidth - margin, y, { align: 'right' });
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 116, 139);
    doc.text(`${c.organizer}  •  ${c.event}`, margin, y);
    y += 3.6;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(8.5);
    const compDesc = isEn ? c.descriptionEn : c.descriptionId;
    const descLines = doc.splitTextToSize(compDesc, contentWidth - 2);
    checkPageBreak(descLines.length * 3.6);
    doc.text(descLines, margin + 2, y);
    y += descLines.length * 3.6 + 2;
  });

  // ==========================================
  // 7. CERTIFICATIONS & CREDENTIALS
  // ==========================================
  drawHeading(isEn ? 'Certifications & Credentials' : 'Sertifikasi & Kredensial');

  certificatesData.forEach((cert) => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${cert.title}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const certDate = isEn
      ? cert.date.replace('Juli', 'July').replace('Januari', 'January').replace('Februari', 'February').replace('Oktober', 'October').replace('Mei', 'May')
      : cert.date;
    doc.text(certDate, pageWidth - margin, y, { align: 'right' });
    y += 3.6;

    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 116, 139);
    const credInfo = `${cert.issuer}${cert.credentialId ? `  (ID: ${cert.credentialId})` : ''}`;
    doc.text(credInfo, margin + 4, y);
    y += 4.2;
  });

  // ==========================================
  // SAVE / DOWNLOAD PDF
  // ==========================================
  const langSuffix = isEn ? 'English' : 'Indonesia';
  const filename = `CV_${personalInfo.name.replace(/\s+/g, '_')}_ATS_${langSuffix}.pdf`;
  doc.save(filename);
}
