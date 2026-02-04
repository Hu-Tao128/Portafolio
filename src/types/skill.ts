export interface Skill {
  category: string;
  icon: string;
  items: {
    name: string;
    level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
    years?: number;
  }[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  color: string;
}