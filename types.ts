
export interface Project {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
}

export interface ValuePoint {
  title: string;
  description: string;
}
