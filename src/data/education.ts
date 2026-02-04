import type { Education } from '../types';

export const education: Education[] = [
  {
    id: 'utt-ingenieria',
    institution: 'Universidad Tecnológica de Tijuana',
    degree: 'Ingeniería en Desarrollo y Gestión de Software',
    field: 'Desarrollo de Software',
    period: '2025 – Actualidad',
    description: 'Ingeniería en Desarrollo y Gestión de Software con enfoque en arquitectura de software, methodologies ágiles y desarrollo de aplicaciones empresariales.',
    achievements: [
      'Cursando actualmente con especialización en desarrollo full-stack',
      'Proyectos colaborativos con tecnologías modernas (React, Node.js, Cloud)',
      'Participación en hackathons y competencias de programación',
    ],
    status: 'in-progress',
  },
  {
    id: 'tsu-desarrollo',
    institution: 'Universidad Tecnológica de Tijuana',
    degree: 'Técnico Superior Universitario en Desarrollo de Software Multiplataforma',
    field: 'Desarrollo de Software Multiplataforma',
    period: '2023 – 2025',
    description: 'TSU con especialización en desarrollo de aplicaciones para múltiples plataformas, incluyendo web, móvil y desktop.',
    achievements: [
      'Título en trámite',
      'Desarrollo de múltiples proyectos completos (FitBalance, SafeCar, YG Amigurumis)',
      'Experiencia práctica en desarrollo full-stack',
      'Integración de IoT en aplicaciones móviles',
      'Dominio de React Native, Node.js, PHP y Java',
    ],
    status: 'completed',
  },
  {
    id: 'competencias',
    institution: 'Concurso Nacional',
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