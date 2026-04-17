export type Profile = {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location?: string;
  email?: string;
  githubUrl: string;
  linkedinUrl?: string;
  resumeUrl: string;
  skillChips: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type SocialLink = {
  label: string;
  url: string;
  icon?: string;
};

