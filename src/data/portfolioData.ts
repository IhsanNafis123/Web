import type { ProjectItem, CompetitionItem, ExperienceItem, EducationItem, CertificateItem, SkillItem } from '../types';

export const personalInfo = {
  name: 'Ihsan Nafis Hidayat',
  title: 'Web & Mobile Developer | Informatics Engineering Student',
  university: 'Universitas Harkat Negeri',
  formerUniversity: 'Politeknik Harapan Bersama',
  degree: 'Bachelor of Applied Information Engineering (D4 Teknik Informatika)',
  period: 'Jul 2023 – Mei 2027',
  gpa: '3.64',
  location: 'Tegal, Jawa Tengah, Indonesia',
  email: 'ihsannafishidayat@gmail.com',
  linkedin: 'https://id.linkedin.com/in/ihsan-nafis-hidayat-4a3334274',
  github: 'https://github.com/IhsanNafis123',
  whatsapp: 'https://wa.me/6281234567890',
  bioId: 'Mahasiswa Teknik Informatika di Universitas Harkat Negeri dengan minat dan pengalaman mendalam dalam pengembangan aplikasi web dan mobile (Frontend & Backend), Machine Learning, serta integrasi database.',
  bioEn: 'Informatics Engineering student at Universitas Harkat Negeri with passion and experience in full-stack web & mobile development, Machine Learning, and database architecture.',
  aboutDetailedId: 'Saya adalah mahasiswa Teknik Informatika yang memiliki minat dan pengalaman dalam pengembangan aplikasi berbasis web dan mobile. Saya terbiasa mengembangkan aplikasi dari sisi frontend maupun backend, mulai dari perancangan database, pembuatan REST API, hingga implementasi antarmuka pengguna.\n\nSaya memiliki pengalaman menggunakan berbagai teknologi seperti PHP, Laravel, JavaScript, Python, Flask, MySQL, dan Java. Saya juga memiliki ketertarikan pada Machine Learning, pengembangan sistem informasi, dan integrasi database.\n\nDalam mengembangkan aplikasi, saya terbiasa menggunakan Git/GitHub, VS Code, Laragon, XAMPP, serta menerapkan konsep CRUD, REST API, authentication, database management, dan responsive web design.',
  aboutDetailedEn: 'I am an Informatics Engineering student passionate and experienced in web and mobile application engineering. Proficient in both frontend and backend development—from relational database architecture, RESTful API design, to user interface implementation.\n\nExperienced with modern technologies including PHP, Laravel, JavaScript, Python, Flask, MySQL, and Java, alongside a strong interest in Machine Learning, information systems, and intelligent database integrations.\n\nComfortable leveraging Git/GitHub, VS Code, Laragon, and XAMPP while applying solid software practices: CRUD, REST APIs, authentication security, database management, and responsive web design.'
};

export const educationData: EducationItem = {
  degree: 'Bachelor of Applied Information Engineering',
  major: 'Informatics (D4 Teknik Informatika)',
  institution: 'Universitas Harkat Negeri',
  formerName: 'Politeknik Harapan Bersama',
  period: 'Jul 2023 – Mei 2027',
  location: 'Kota Tegal, Jawa Tengah',
  gpa: '3.64 / 4.00',
  focusId: [
    'Web & Mobile Development (PHP, Laravel, React, Flutter, Flask)',
    'Database Architecture & Management (MySQL, CRUD, Authentication)',
    'RESTful API Engineering & Backend Services',
    'Machine Learning & Generative AI Integration (Model Flux, NLP)',
    'Responsive Web Design & Modern Frontend Standards'
  ],
  focusEn: [
    'Web & Mobile Development (PHP, Laravel, React, Flutter, Flask)',
    'Database Architecture & Management (MySQL, CRUD, Authentication)',
    'RESTful API Engineering & Backend Services',
    'Machine Learning & Generative AI Integration (Flux Model, NLP)',
    'Responsive Web Design & Modern Frontend Standards'
  ]
};

export const experiencesData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'IT Intern / Magang Industri',
    organization: 'Program Magang Industri',
    period: '27 Juli – 27 November 2026',
    location: 'Indonesia',
    type: 'Industry Internship',
    descriptionId: [
      'Terlibat aktif dalam pengembangan solusi teknologi informasi, pengembangan sistem, dan implementasi fitur perangkat lunak.',
      'Mengimplementasikan praktik rekayasa perangkat lunak modern, pengujian fungsionalitas, serta integrasi basis data.'
    ],
    descriptionEn: [
      'Actively involved in IT solutions development, enterprise system engineering, and feature implementations.',
      'Applied modern software development practices, functionality validation, and database integrations.'
    ],
    skills: ['Web Development', 'REST API', 'MySQL', 'System Architecture', 'Git']
  },
  {
    id: 'exp-2',
    role: 'Pelaksana Pengabdian Pada Masyarakat (PPM)',
    organization: 'PPM Universitas Harkat Negeri',
    period: '2024 – 2025',
    location: 'Tegal, Jawa Tengah',
    type: 'Community Service & Research',
    descriptionId: [
      'Menerapkan keahlian teknologi informasi untuk membantu digitalisasi UMKM dan masyarakat luas.',
      'Merancang sistem profil berbasis web (seperti Cafe Cosmic Cup) dengan pendekatan Service Learning dan Python Flask yang terpublikasi di jurnal ilmiah.'
    ],
    descriptionEn: [
      'Applied IT engineering expertise to empower local SMEs and community organizations.',
      'Built profile web systems (including Cafe Cosmic Cup) with Service Learning methodology published in academic community journals.'
    ],
    skills: ['Python', 'Flask', 'Service Learning', 'HTML5/CSS3', 'Digitalization']
  },
  {
    id: 'exp-3',
    role: 'Member & Project Collaborator',
    organization: 'NovoClub (ParagonCorp)',
    period: 'Oktober 2023 – Mei 2024',
    location: 'Region Jawa Tengah',
    type: 'Leadership & Development Program',
    descriptionId: [
      'Terpilih mengikuti program pengembangan kepemimpinan mahasiswa nasional oleh PT Paragon Technology and Innovation.',
      'Berkolaborasi lintas disiplin dalam inisiatif aksi sosial kemasyarakatan dan manajemen proyek kolaboratif.'
    ],
    descriptionEn: [
      'Selected for nationwide student leadership and self-development program organized by ParagonCorp.',
      'Collaborated across disciplines in community social initiatives and agile team coordination.'
    ],
    skills: ['Leadership', 'Team Collaboration', 'Problem Solving', 'Social Projects']
  }
];

export const competitionsData: CompetitionItem[] = [
  {
    id: 'comp-1',
    title: 'Juara II ICT Potential Product — Proyek LEGITA',
    event: 'The 5th International Innovation Technology Expo (IITE 2025)',
    organizer: 'Politeknik Indonusa Surakarta & Co-Hosts',
    year: '2025',
    category: 'Engineering, Information, Communication and Technology (ICT)',
    achievementId: 'Juara II - Potential Product',
    achievementEn: '2nd Place - Potential Product',
    descriptionId: 'Meraih Juara II pada ajang The 5th International Innovation Technology Expo (IITE 2025) dengan karya "LEGITA" — AI-Based Interactive Digital Assistant Innovation for Community Legal Consultation and Education.',
    descriptionEn: 'Achieved 2nd Place at The 5th International Innovation Technology Expo (IITE 2025) with "LEGITA" — an AI-Based Interactive Digital Assistant for Community Legal Consultation and Education.',
    badge: '🏆 The 2nd Winner IITE 2025'
  },
  {
    id: 'comp-2',
    title: 'Finalis Lomba Web Development — Museum Digital',
    event: 'ITC UDINUSFEST 2026 Tingkat Nasional',
    organizer: 'UDINUS & Himpunan Mahasiswa TI',
    year: '2026',
    category: 'Web Development & Cultural Preservation',
    achievementId: 'Finalis Lomba Web Development Nasional',
    achievementEn: 'National Web Development Finalist',
    descriptionId: 'Mengembangkan "Museum Digital" interaktif menggunakan React.js dan modern responsive web untuk mendigitalkan pameran budaya dan sejarah secara virtual bagi publik.',
    descriptionEn: 'Developed an interactive "Digital Museum" platform using React.js to digitally preserve and showcase cultural heritage through virtual exhibitions.',
    badge: '⭐ Finalis Nasional'
  },
  {
    id: 'comp-3',
    title: 'Inovasi BatikFly — Generatif AI Model Flux',
    event: 'Academic & IT Innovation Showcase',
    organizer: 'Universitas Harkat Negeri',
    year: '2026',
    category: 'Mobile & Generative AI Innovation',
    achievementId: 'Karya Unggulan Aplikasi Mobile & AI',
    achievementEn: 'Featured Mobile & AI Application',
    descriptionId: 'Menggabungkan desain klasik dan modern dalam aplikasi "BatikFly" berbasis Flutter dan Python Flask yang memanfaatkan Generatif AI Model Flux untuk kreasi motif batik nusantara.',
    descriptionEn: 'Integrated classic and modern art in "BatikFly", a Flutter and Python Flask app leveraging the Flux Generative AI Model to design Indonesian batik motifs.',
    badge: '🎨 Best AI Innovation'
  },
  {
    id: 'comp-4',
    title: 'NovoClub Leadership Initiative Showcase',
    event: 'NovoClub Batch 3 Social Action',
    organizer: 'PT Paragon Technology and Innovation',
    year: '2023 - 2024',
    category: 'Student Leadership & Community Impact',
    achievementId: 'Graduate & Active Contributor',
    achievementEn: 'Graduate & Active Contributor',
    descriptionId: 'Penyelesaian program kepemimpinan komprehensif, eksekusi proyek sosial, dan pengembangan kapasitas diri mahasiswa berprestasi.',
    descriptionEn: 'Successfully graduated from the nationwide leadership program with impactful team-based social contribution.',
    badge: '🎖️ ParagonCorp Award'
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'LEGITA (AI Tentang Hukum di Indonesia)',
    category: 'web',
    descriptionId: 'Platform berbasis Kecerdasan Buatan (Artificial Intelligence) untuk literasi dan analisis hukum di Indonesia. Meraih Juara II ICT Potential Product pada The 5th International Innovation Technology Expo (IITE 2025).',
    descriptionEn: 'AI-driven platform for legal literacy and advisory in Indonesia. Awarded 2nd Place (The 2nd Winner) in ICT Potential Product at The 5th International Innovation Technology Expo (IITE 2025).',
    tags: ['Artificial Intelligence', 'Flask', 'JavaScript', 'Vercel V0', 'The 2nd Winner IITE 2025'],
    role: 'Lead Developer & AI Architect',
    year: 'Okt 2025',
    liveUrl: 'https://www.linkedin.com/in/ihsan-nafis-hidayat-4a3334274/',
    githubUrl: 'https://github.com/IhsanNafis123',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'The 2nd Winner ICT Potential Product — IITE 2025 (International)',
      'Pemanfaatan model AI untuk konsultasi literasi hukum publik',
      'Antarmuka modern terintegrasi Vercel V0 & Flask'
    ]
  },
  {
    id: 'proj-2',
    title: 'Website Azzahra (Migrasi CodeIgniter ke Laravel)',
    category: 'web',
    descriptionId: 'Modernisasi dan migrasi arsitektur sistem aplikasi Website Azzahra dari framework CodeIgniter ke Laravel untuk peningkatan keamanan, modularitas kode, dan performa database.',
    descriptionEn: 'Full system architecture migration of Azzahra Website from CodeIgniter to modern Laravel framework, improving security, maintainability, and query performance.',
    tags: ['Laravel', 'PHP', 'MySQL', 'SQL', 'Pengembangan Web'],
    role: 'Backend & Full-Stack Developer',
    year: 'Agt 2026 – Sekarang',
    liveUrl: 'https://www.linkedin.com/in/ihsan-nafis-hidayat-4a3334274/',
    githubUrl: 'https://github.com/IhsanNafis123',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Migrasi database dan query builder dari CI ke Eloquent ORM Laravel',
      'Peningkatan struktur routing, middleware autentikasi, dan keamanan CSRF',
      'Penyusunan REST API endpoint modular'
    ]
  },
  {
    id: 'proj-3',
    title: 'Aplikasi BatikFly (Generative AI Motif Batik)',
    category: 'web',
    descriptionId: 'Aplikasi inovatif yang menggabungkan desain klasik motif nusantara dengan teknologi modern. Memanfaatkan Generatif AI Model Flux berbasis prompt dan hybrid untuk merancang motif batik kustom.',
    descriptionEn: 'Innovative app fusing classic Indonesian batik heritage with modern tech. Employs Flux Generative AI model via prompt and hybrid pipelines to generate unique batik patterns.',
    tags: ['Flutter', 'Flask', 'MongoDB', 'API Layanan Web', 'Generative AI'],
    role: 'Full-Stack & AI Engineer',
    year: 'Feb 2026 – Jun 2026',
    liveUrl: 'https://www.linkedin.com/in/ihsan-nafis-hidayat-4a3334274/',
    githubUrl: 'https://github.com/IhsanNafis123',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Integrasi Generatif AI Model Flux (Text-to-Image & Hybrid Image Blending)',
      'Backend Flask & MongoDB dengan integrasi API Layanan Web',
      'Aplikasi mobile cross-platform berbasis Flutter di Universitas Harkat Negeri'
    ]
  },
  {
    id: 'proj-4',
    title: 'Elcoding (Platform Belajar Coding)',
    category: 'web',
    descriptionId: 'Website edukasi interaktif untuk pembelajaran pemrograman dan coding, dirancang untuk memudahkan pemula memahami logika algoritma, web dev, dan sintaks kode.',
    descriptionEn: 'Interactive educational web platform for learning programming and coding, structured to guide beginners through programming logic and web development.',
    tags: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'SQL'],
    role: 'Full-Stack Developer',
    year: 'Jul 2026 – Agt 2026',
    liveUrl: 'https://www.linkedin.com/in/ihsan-nafis-hidayat-4a3334274/',
    githubUrl: 'https://github.com/IhsanNafis123',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Sistem modul pembelajaran terstruktur dengan pelacakan progres pengguna',
      'Fitur latihan koding interaktif dan manajemen materi',
      'Dibangun dengan arsitektur MVC Laravel & MySQL yang bersih'
    ]
  },
  {
    id: 'proj-5',
    title: 'Museum Digital (ITC UDINUSFEST 2026)',
    category: 'academic',
    descriptionId: 'Website pameran digital virtual interaktif yang dikembangkan untuk Lomba Web Development ITC DINUSFEST 2026 tingkat Nasional, mewakili Universitas Harkat Negeri.',
    descriptionEn: 'Interactive virtual digital museum website developed for the National ITC DINUSFEST 2026 Web Development Competition, representing Universitas Harkat Negeri.',
    tags: ['React.js', 'Next.js', 'JavaScript', 'Website Building', 'DINUSFEST 2026'],
    role: 'Frontend Architect & UI Designer',
    year: 'Jan 2026 – Feb 2026',
    liveUrl: 'https://www.linkedin.com/in/ihsan-nafis-hidayat-4a3334274/',
    githubUrl: 'https://github.com/IhsanNafis123',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Finalis Lomba Web Development Nasional IT Competition 8.0 DINUSFEST 2026',
      'Tur galeri visual responsif dengan Next.js & React.js',
      'Terkait resmi dengan Universitas Harkat Negeri'
    ]
  },
  {
    id: 'proj-6',
    title: 'Website Doger Interior (Company Profile)',
    category: 'web',
    descriptionId: 'Pembuatan website profil perusahaan profesional untuk Doger Interior guna memamerkan portofolio pengerjaan interior, estimasi layanan, dan kontak konsultasi klien.',
    descriptionEn: 'Professional company profile website crafted for Doger Interior to display interior design portfolios, project case studies, and client consultation bookings.',
    tags: ['React.js', 'Next.js', 'MySQL', 'Pengembangan Web', 'Tailwind CSS'],
    role: 'Frontend Developer',
    year: 'Feb 2026 – Mar 2026',
    liveUrl: 'https://www.linkedin.com/in/ihsan-nafis-hidayat-4a3334274/',
    githubUrl: 'https://github.com/IhsanNafis123',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Desain modern, elegan, dan estetik dengan performa rendering Next.js & React.js',
      'Integrasi database MySQL untuk manajemen portofolio interior',
      'Tingkat konversi kontak dan konsultasi klien yang optimal'
    ]
  }
];

export const skillsData = {
  frontendAndMobile: [
    {
      name: 'React.js',
      level: 'Advanced',
      projects: ['Website Doger Interior', 'Museum Digital']
    },
    {
      name: 'Next.js',
      level: 'Advanced',
      projects: ['Website Doger Interior', 'Museum Digital']
    },
    {
      name: 'Flutter',
      level: 'Advanced',
      projects: ['Aplikasi BatikFly', 'Universitas Harkat Negeri']
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      projects: ['LEGITA', 'Elcoding', 'Museum Digital']
    },
    {
      name: 'Website Building',
      level: 'Advanced',
      projects: ['Museum Digital', 'Website Doger Interior', 'Website Azzahra']
    }
  ],
  backendAndFrameworks: [
    {
      name: 'Laravel',
      level: 'Advanced',
      projects: ['Website Azzahra', 'Elcoding', 'Universitas Harkat Negeri']
    },
    {
      name: 'PHP',
      level: 'Advanced',
      projects: ['Website Azzahra', 'Elcoding']
    },
    {
      name: 'Flask',
      level: 'Advanced',
      projects: ['Aplikasi BatikFly', 'LEGITA', 'Universitas Harkat Negeri']
    },
    {
      name: 'API Layanan Web (REST API)',
      level: 'Advanced',
      projects: ['Aplikasi BatikFly']
    }
  ],
  databaseAndStorage: [
    {
      name: 'MySQL',
      level: 'Advanced',
      projects: ['Website Doger Interior', 'Website Azzahra', 'Elcoding']
    },
    {
      name: 'SQL',
      level: 'Advanced',
      projects: ['Universitas Harkat Negeri', 'Website Azzahra', 'Elcoding']
    },
    {
      name: 'MongoDB',
      level: 'Intermediate',
      projects: ['Aplikasi BatikFly']
    }
  ],
  toolsAndArchitecture: [
    {
      name: 'Vercel V0',
      level: 'Advanced',
      projects: ['LEGITA']
    },
    {
      name: 'Pengembangan Web',
      level: 'Advanced',
      projects: ['Museum Digital', 'Website Azzahra', 'Website Doger Interior', 'Elcoding']
    }
  ]
};

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'The 2nd Winner — ICT Potential Product (Proyek LEGITA)',
    issuer: 'The 5th International Innovation Technology Expo (IITE 2025)',
    date: 'Juli 2025',
    credentialId: '2478/DI/INDO/VIII/2025',
    verificationUrl: 'https://www.linkedin.com/in/ihsan-nafis-hidayat-4a3334274/',
    type: 'certificate',
    image: '/images/certificates/iite-2025-legita.jpg'
  },
  {
    id: 'cert-2',
    title: 'Finalis Lomba Web Development IT Competition 8.0 DINUSFEST 2026 Tingkat Nasional',
    issuer: 'Universitas Dian Nuswantoro (UDINUS) Semarang',
    date: 'Januari – Februari 2026',
    credentialId: '055/G.12/UDN-01/II/2026',
    verificationUrl: 'https://www.linkedin.com/in/ihsan-nafis-hidayat-4a3334274/',
    type: 'certificate',
    image: '/images/certificates/dinusfest-2026-webdev.jpg'
  },
  {
    id: 'cert-3',
    title: 'NovoClub (Program Pembinaan Mahasiswa ParagonCorp)',
    issuer: 'PT Paragon Technology and Innovation',
    date: 'Oktober 2023 – Mei 2024',
    credentialId: 'PARAGON-NOVOCLUB-2324',
    verificationUrl: 'https://www.linkedin.com/in/ihsan-nafis-hidayat-4a3334274/',
    type: 'certificate'
  },
  {
    id: 'cert-4',
    title: 'Program Pengabdian Pada Masyarakat (PPM) & Magang Industri',
    issuer: 'Universitas Harkat Negeri',
    date: '2024 – 2026',
    credentialId: 'UHN-PPM-MAGANG-2026',
    verificationUrl: 'https://www.linkedin.com/in/ihsan-nafis-hidayat-4a3334274/',
    type: 'certificate'
  }
];
