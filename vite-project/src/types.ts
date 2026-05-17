export interface SocialLink {
  label: string
  href: string
  value: string
}

export interface Stat {
  value: string
  label: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Experience {
  company: string
  role: string
  client: string
  location: string
  duration: string
  summary: string
  highlights: string[]
}

export interface Project {
  name: string
  tagline: string
  stack: string[]
  impact: string[]
}

export interface Achievement {
  title: string
  detail: string
}

export interface Certification {
  name: string
  issuer: string
}

export interface SoftSkill {
  title: string
  detail: string
}

export interface ValuePoint {
  title: string
  detail: string
}

export interface Education {
  degree: string
  institution: string
  duration: string
  score: string
}

export interface SectionLink {
  id: string
  label: string
}

export interface PortfolioData {
  name: string
  title: string
  location: string
  summary: string
  availability: string
  email: string
  phone: string
  resumeHref: string
  photoSrc: string
  socials: SocialLink[]
  stats: Stat[]
  skills: SkillGroup[]
  experience: Experience
  projects: Project[]
  achievements: Achievement[]
  softSkills: SoftSkill[]
  valuePoints: ValuePoint[]
  certifications: Certification[]
  education: Education
  sectionLinks: SectionLink[]
}
