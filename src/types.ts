export type Language = 'id' | 'en';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'academic' | 'community';
  descriptionId: string;
  descriptionEn: string;
  tags: string[];
  role: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  highlights: string[];
}

export interface CompetitionItem {
  id: string;
  title: string;
  event: string;
  organizer: string;
  year: string;
  category: string;
  achievementId: string;
  achievementEn: string;
  descriptionId: string;
  descriptionEn: string;
  badge: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  descriptionId: string[];
  descriptionEn: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  formerName?: string;
  period: string;
  location: string;
  gpa?: string;
  focusId: string[];
  focusEn: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  projects: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  type: 'publication' | 'certificate';
  image?: string;
}

