export interface Project {
  id: string;
  title: string;
  description: string;
  featured: boolean;
  techStack: string[];
  category: 'backend' | 'fullstack' | 'mobile' | 'iot' | 'ecommerce';
  links: {
    github?: string;
    demo?: string;
    live?: string;
  };
  technicalDetails: {
    architecture: string[];
    keyFeatures: string[];
    challenges: string[];
    solutions: string[];
    demonstrates: string[];
  };
  period: string;
  status: 'completed' | 'in-progress' | 'prototype';
  school?: {
    name: string;
    career: string;
    semester: string;
    competition?: string;
    achievement?: string;
  };
  team?: string;
}

export interface TechnicalDetails {
  whatIDid: string[];
  demonstrates: string[];
}
