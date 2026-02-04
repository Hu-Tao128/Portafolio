export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  contact: {
    github: string;
    email: string;
  };
  about: string;
  location: string;
  availability: 'open' | 'busy' | 'limited';
}