
import { Project, SkillCategory, Experience, ValuePoint } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/vcdhyan",
  github: "https://github.com/VCDhyan",
  email: "mailto:dhyanvaradha2005@gmail.com",
  portfolio: "https://www.linkedin.com/in/vcdhyan",
  resume: "https://www.linkedin.com/in/vcdhyan"
};

export const PROJECTS: Project[] = [
  {
    title: "Gold Web Application",
    description: "A comprehensive web-based platform designed for managing high-value asset transactions. Streamlined backend processes to ensure data integrity and real-time synchronization.",
    role: "Team Lead",
    technologies: ["Full Stack", "Database Design", "Project Management"],
    githubUrl: "https://github.com/VCDhyan",
    liveUrl: "https://www.linkedin.com/in/vcdhyan"
  },
  {
    title: "Restaurant Billing Software",
    description: "End-to-end software solution for hospitality operations, featuring inventory tracking, secure transaction processing, and automated reporting modules.",
    role: "Team Lead",
    technologies: ["System Architecture", "Payment Integration", "UI/UX"],
    githubUrl: "https://github.com/VCDhyan",
    liveUrl: "https://www.linkedin.com/in/vcdhyan"
  },
  {
    title: "Professional Portfolio",
    description: "High-performance, responsive portfolio website optimized for recruiter engagement and technical showcase of engineering capabilities.",
    role: "Sole Developer",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/VCDhyan",
    liveUrl: "https://www.linkedin.com/in/vcdhyan"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical Expertise",
    items: ["Full Stack Web Development", "System Architecture", "RESTful APIs", "Database Management"]
  },
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript"]
  },
  {
    category: "Design & Tools",
    items: ["Figma", "Version Control (Git)", "Project Management", "Technical Documentation"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Valise Technologies",
    role: "Full-Stack Developer Intern",
    duration: "3 Months",
    bullets: [
      "Contributed to the development and optimization of internal web applications, improving operational efficiency by 15%.",
      "Collaborated with cross-functional teams to translate business requirements into functional code and technical specifications.",
      "Assisted in debugging complex system issues and implementing security patches across the application stack.",
      "Gained hands-on experience in full-cycle software development within a professional corporate environment."
    ]
  }
];

export const WHY_HIRE: ValuePoint[] = [
  {
    title: "Proven Leadership",
    description: "Demonstrated ability to lead technical teams and manage end-to-end project lifecycles from conception to delivery."
  },
  {
    title: "Analytical Problem Solving",
    description: "Strong foundation in software product engineering, allowing for efficient resolution of complex architectural challenges."
  },
  {
    title: "Strategic Communication",
    description: "Ability to articulate technical concepts to non-technical stakeholders, bridging the gap between engineering and business goals."
  },
  {
    title: "Adaptability & Growth",
    description: "Quickly master new technologies and frameworks, consistently staying ahead of industry standards for scalable development."
  }
];
