import type { Education } from '../types';

export const education: Education[] = [
  {
    id: 'utt-ingenieria',
    institution: 'Universidad Tecnológica de Tijuana',
    degree: 'Ingeniería en Desarrollo y Gestión de Software',
    field: 'Ingeniería de Software',
    period: '2025 – Actualidad',
    description: 
      'Programa de Ingeniería enfocado en el diseño, desarrollo y gestión de sistemas de software, con énfasis en arquitectura, seguridad, experiencia de usuario y toma de decisiones técnicas a nivel sistema.',
    achievements: [
      'Formación en arquitectura de software y diseño de sistemas',
      'Diseño de interfaces y prototipos funcionales con Figma',
      'Aplicación de principios de UX como base para decisiones técnicas',
      'Desarrollo de proyectos colaborativos con Java, React y bases de datos',
      'Introducción a seguridad, administración de datos y gestión de proyectos de software',
    ],
    status: 'in-progress',
  },
  {
    id: 'tsu-desarrollo',
    institution: 'Universidad Tecnológica de Tijuana',
    degree: 'Técnico Superior Universitario en Desarrollo de Software Multiplataforma',
    field: 'Desarrollo de Software',
    period: '2023 – 2025',
    description: 
      'Formación técnica intensiva orientada al desarrollo práctico de aplicaciones web, móviles e IoT, con énfasis en implementación completa, integración de tecnologías y resolución de problemas reales.',
    achievements: [
      'Desarrollo de proyectos completos de principio a fin (FitBalance, SafeCar)',
      'Implementación de aplicaciones móviles con React Native',
      'Desarrollo backend con Node.js, PHP y Java',
      'Integración de dispositivos IoT y comunicación en tiempo real',
      'Diseño visual y creación de identidad básica de proyectos con Adobe Illustrator',
      'Experiencia práctica en desarrollo full-stack',
      'Título en trámite',
    ],
    status: 'completed',
  },
  {
    id: 'competencias',
    institution: 'Concurso Nacional Emprendedores 2023 (Etapa Ensenada)',
    degree: 'Proyecto YG Amigurumis - Sistema E-Commerce',
    field: 'Desarrollo Web',
    period: '2023',
    description: 'Proyecto de e-commerce completo presentado en concurso nacional 2023 (Etapa Ensenada).',
    achievements: [
      'Desarrollo completo de sistema e-commerce con PHP + MySQL',
      'Presentación en concurso nacional',
      'Arquitectura modular y escalable',
      'Integración de pagos y notificaciones',
    ],
    status: 'completed',
  },
];