export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
  achievements: string[];
  status: 'completed' | 'in-progress';
}