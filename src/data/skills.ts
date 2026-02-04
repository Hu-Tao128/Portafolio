import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Lenguajes de Programación',
    icon: 'FaCode',
    items: [
      { name: 'Java', level: 'advanced', years: 3 },
      { name: 'JavaScript', level: 'advanced', years: 4 },
      { name: 'TypeScript', level: 'advanced', years: 2 },
      { name: 'PHP', level: 'intermediate', years: 2 },
      { name: 'Python', level: 'beginner', years: 1 },
    ],
  },
  {
    category: 'Desarrollo Móvil',
    icon: 'FaMobileAlt',
    items: [
      { name: 'React Native', level: 'advanced', years: 2 },
      { name: 'Expo', level: 'advanced', years: 2 },
      { name: 'Android (Java)', level: 'intermediate', years: 2 },
      { name: 'iOS', level: 'beginner', years: 1 },
    ],
  },
  {
    category: 'Backend & APIs',
    icon: 'FaServer',
    items: [
      { name: 'Node.js', level: 'advanced', years: 2 },
      { name: 'Express', level: 'advanced', years: 2 },
      { name: 'MedusaJS', level: 'intermediate', years: 1 },
      { name: 'REST APIs', level: 'advanced', years: 2 },
      { name: 'Firebase', level: 'advanced', years: 2 },
    ],
  },
  {
    category: 'Bases de Datos',
    icon: 'FaDatabase',
    items: [
      { name: 'MongoDB', level: 'advanced', years: 2 },
      { name: 'MySQL', level: 'intermediate', years: 2 },
      { name: 'PostgreSQL', level: 'intermediate', years: 1 },
      { name: 'Redis', level: 'beginner', years: 1 },
    ],
  },
  {
    category: 'Frontend Web',
    icon: 'FaLaptopCode',
    items: [
      { name: 'React', level: 'advanced', years: 3 },
      { name: 'HTML5/CSS3', level: 'advanced', years: 4 },
      { name: 'Tailwind CSS', level: 'advanced', years: 2 },
      { name: 'Framer Motion', level: 'intermediate', years: 1 },
    ],
  },
  {
    category: 'IoT & Hardware',
    icon: 'FaMicrochip',
    items: [
      { name: 'ESP32', level: 'intermediate', years: 1 },
      { name: 'Arduino', level: 'intermediate', years: 2 },
      { name: 'Sensors & Actuators', level: 'intermediate', years: 1 },
    ],
  },
  {
    category: 'Testing & DevOps',
    icon: 'FaVial',
    items: [
      { name: 'Jest', level: 'intermediate', years: 1 },
      { name: 'React Native Testing Library', level: 'intermediate', years: 1 },
      { name: 'Git', level: 'advanced', years: 3 },
      { name: 'GitHub Actions', level: 'intermediate', years: 1 },
      { name: 'Postman', level: 'intermediate', years: 2 },
      { name: 'Docker', level: 'beginner', years: 1 },
    ],
  },
  {
    category: 'Diseño & Ofimática',
    icon: 'FaPaintBrush',
    items: [
      { name: 'Figma', level: 'intermediate', years: 2 },
      { name: 'Microsoft Word', level: 'intermediate', years: 3 },
      { name: 'Excel', level: 'beginner', years: 2 },
      { name: 'PowerPoint', level: 'intermediate', years: 3 },
    ],
  },
];

export const skillCategories = [
  {
    name: 'Java / Android',
    skills: ['Java', 'Android', 'JUnit'],
    level: 'advanced',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'React Native / TypeScript',
    skills: ['React Native', 'Expo', 'TypeScript', 'JavaScript'],
    level: 'advanced',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Backend (PHP / APIs)',
    skills: ['PHP', 'Node.js', 'Express', 'REST APIs', 'Firebase'],
    level: 'intermediate',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Frontend Web',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
    level: 'intermediate-advanced',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Bases de Datos',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    level: 'intermediate',
    color: 'from-yellow-500 to-orange-500',
  },
];