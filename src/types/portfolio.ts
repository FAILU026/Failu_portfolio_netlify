export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'dribbble' | 'email'
}

export interface PersonalInfo {
  name: string
  title: string
  /** Roles cycled through by the animated typing headline on the Hero section. */
  roles: string[]
  tagline: string
  location: string
  email: string
  phone: string
  website: string
  resumeUrl: string
  avatar: string
  eyebrow: string
  heroHeadline: string
  heroIntro: string
}

export interface QuickFact {
  label: string
  value: string
}

export interface AboutInfo {
  summary: string[]
  philosophy: string
  focus: string
  facts: QuickFact[]
}

export type SkillCategory =
  | 'Frontend'
  | 'UI Libraries'
  | 'Architecture'
  | 'Mobile'
  | 'Backend'
  | 'Cloud & AI'
  | 'Tools'
  | 'Practices'

export interface Skill {
  name: string
  category: SkillCategory
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  companyUrl?: string
  period: string
  location: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export type ProjectCategory = 'Web App' | 'AI Product' | 'Dashboard' | 'SaaS'

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  problem: string
  image: string
  category: ProjectCategory
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Service {
  number: string
  icon: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
}

export interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  detail?: string
}

export interface CertificationItem {
  id: string
  name: string
  issuer: string
  date?: string
  image?: string
  credentialUrl?: string
}

export interface NavItem {
  label: string
  /** Client-side route path, e.g. "/portfolio". */
  path: string
  icon: 'home' | 'user' | 'file' | 'layout' | 'briefcase' | 'quote' | 'award' | 'email'
  badge?: number
}

export interface PortfolioData {
  personal: PersonalInfo
  socials: SocialLink[]
  nav: NavItem[]
  about: AboutInfo
  skills: Skill[]
  experience: ExperienceItem[]
  education: EducationItem[]
  certifications: CertificationItem[]
  projects: Project[]
  services: Service[]
  stats: Stat[]
  testimonials: Testimonial[]
}
