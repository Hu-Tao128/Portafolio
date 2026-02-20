import type { Project } from '../types';

export const projects: Project[] = [
  // {
  //   id: 'study-medical',
  //   title: 'Study Medical — Backend Arquitectura (En progreso)',
  //   description: 'Backend para una plataforma de estudio médico con enfoque en arquitectura por capas, seguridad JWT y búsqueda semántica.',
  //   featured: true,
  //   techStack: [
  //     'Spring Boot 3',
  //     'Java 21',
  //     'Spring Security (OAuth2)',
  //     'PostgreSQL (Supabase)',
  //     'MongoDB Atlas',
  //     'pgvector',
  //     'WebSocket (STOMP)',
  //     'Docker',
  //     'Flutter',
  //     'Supabase Auth'
  //   ],
  //   category: 'backend',
  //   links: {
  //     github: 'https://github.com/Hu-Tao128',
  //   },
  //   technicalDetails: {
  //     architecture: [
  //       'Arquitectura por capas (Controller -> Service -> Repository)',
  //       'OAuth2 Resource Server para validación de JWT',
  //       'Persistencia híbrida (PostgreSQL + MongoDB)',
  //       'MapStruct para mapeo DTO'
  //     ],
  //     keyFeatures: [
  //       'Supabase Auth integration for secure authentication',
  //       'PostgreSQL for structured domain entities',
  //       'MongoDB Atlas for high-volume flexible data (chats, logs, flashcards)',
  //       'Vector embeddings via pgvector for semantic search',
  //       'RESTful API baseline with version-ready structure'
  //     ],
  //     challenges: [
  //       'Designing hybrid persistence without tight coupling',
  //       'Maintaining domain clarity across relational and document storage',
  //       'Planning scalable service boundaries before feature expansion',
  //       'Integrating secure JWT validation without custom auth server'
  //     ],
  //     solutions: [
  //       'Separación explícita de responsabilidades por tipo de datos',
  //       'Delegación de autenticación en Supabase y validación server-side',
  //       'Aislamiento entre capa de transporte, negocio y persistencia'
  //     ],
  //     demonstrates: [
  //       'Hybrid backend architecture planning',
  //       'Security-aware backend design',
  //       'Scalability-conscious system modeling',
  //       'Healthcare-domain structured thinking',
  //       'Infrastructure-level awareness beyond CRUD APIs'
  //     ],
  //   },
  //   period: '2026 - Actualidad',
  //   status: 'in-progress',
  // },
  {
    id: 'medusa-ecommerce',
    title: 'Backend E-commerce (MedusaJS v2)',
    description: 'Backend e-commerce headless con MedusaJS v2 para catálogo, órdenes y flujos multi-vendedor con módulos personalizados.',
    featured: true,
    techStack: [
      'MedusaJS',
      'Node.js',
      'PostgreSQL',
      'MikroORM',
      'Stripe',
      'S3',
      'Firebase',
      'TypeScript',
      'Nodemailer'
    ],
    category: 'backend',
    links: {
      github: 'https://github.com/Hu-Tao128/medusa-store',
    },
    technicalDetails: {
      architecture: [
        'Arquitectura modular con módulos personalizados',
        'Event-driven architecture con subscribers',
        'API Routes personalizadas con MedusaJS v2',
        'Containerized con Docker',
        'ORM con MikroORM para PostgreSQL'
      ],
      keyFeatures: [
        'Módulos personalizados para productos relacionados y sellers',
        'Flujo multi-vendedor con estados (pending/approved/rejected)',
        'Integración con Stripe para pagos y S3 para archivos',
        'Emails transaccionales con Nodemailer',
        'Subscribers para eventos críticos de pago y fulfillment'
      ],
      challenges: [
        'Gestión de catálogo con productos personalizados',
        'Sistema multi-vendedor con validación de estados',
        'Email transaccional escalable',
        'Gestión de inventario y órdenes en tiempo real'
      ],
      solutions: [
        'Módulos propios con MikroORM y servicios desacoplados',
        'Subscribers para trazabilidad de eventos de negocio',
        'Redis para caché y tareas asíncronas'
      ],
      demonstrates: [
        'Comprensión de arquitectura modular MedusaJS v2',
        'Manejo de APIs REST estructuradas',
        'Patrones de diseño con MikroORM',
        'Event-driven architecture con subscribers',
        'Integración con servicios externos (Stripe, S3, Firebase)',
        'Módulo admin personalizado con SDK'
      ]
    },
    period: 'Septiembre 2025 - Diciembre 2025',
    status: 'completed'
  },
  {
    id: 'fitbalance',
    title: 'FitBalance',
    description: 'App móvil de seguimiento nutricional con registro de comidas, escaneo de código de barras y sincronización con backend Node.js.',
    featured: true,
    techStack: [
      'React Native',
      'Expo Go',
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'Bluetooth Low Energy',
      'AsyncStorage',
      'Axios'
    ],
    category: 'mobile',
    links: {
      github: 'https://github.com/Hu-Tao128/FitBalance'
    },
    technicalDetails: {
      architecture: [
        'Cross-platform con React Native + Expo',
        'Backend RESTful con Node.js + Express',
        'Base de datos NoSQL con MongoDB + Mongoose',
        'Arquitectura cliente-servidor con sincronización en tiempo real'
      ],
      keyFeatures: [
        'Búsqueda de alimentos por texto y escaneo de barras',
        'Registro de comidas con almacenamiento local y remoto',
        'Conexión Bluetooth Low Energy para dispositivos externos',
        'Modo oscuro y preferencias persistentes',
        'Estadísticas semanales de consumo'
      ],
      challenges: [
        'Integración de APIs externas de nutrición',
        'Sincronización entre app, backend y dispositivos Bluetooth',
        'Rendimiento en dispositivos de gama media'
      ],
      solutions: [
        'Context API + custom hooks para estado global',
        'AsyncStorage para persistencia de preferencias',
        'Optimización de render y carga diferida de vistas'
      ],
      demonstrates: [
        'Desarrollo móvil multiplataforma completo',
        'Integración hardware-software (Bluetooth LE)',
        'Consumo de APIs externas de nutrición',
        'UI/UX con modo oscuro nativo y tema personalizado',
        'Backend RESTful con Express y MongoDB',
        'Gestión de notificaciones locales',
        'Gráficos y estadísticas en tiempo real'
      ]
    },
    period: 'Mayo 2025 - Agosto 2025',
    status: 'completed'
  },
  {
    id: 'fitbalance-backend',
    title: 'Backend de Nutrición (FitBalance)',
    description: 'API backend para una app de nutrición enfocada en pacientes y nutriólogos, con planes semanales, registro diario de comidas, alimentos personalizados, citas y recuperación de contraseña por correo.',
    featured: true,
    techStack: [
      'Node.js',
      'Express',
      'TypeScript',
      'MongoDB Atlas',
      'Mongoose',
      'Axios',
      'Nutritionix API',
      'FatSecret OAuth',
      'Nodemailer',
      'Luxon',
      'bcryptjs',
      'Docker',
      'Fly.io'
    ],
    category: 'backend',
    links: {
      github: 'https://github.com/Hu-Tao128/fitbalance-backend'
    },
    technicalDetails: {
      architecture: [
        'Monolito backend en Express con un único entrypoint (`src/index.ts`)',
        'Arquitectura orientada a recursos REST (auth, alimentos, planes, logs diarios, citas, nutriólogo)',
        'Persistencia con modelos Mongoose sobre MongoDB',
        'Integración de servicios externos vía HTTP (Nutritionix y FatSecret)',
        'Despliegue containerizado con Docker y configuración para Fly.io'
      ],
      keyFeatures: [
        'Login de pacientes y consulta de perfil',
        'Recuperación de contraseña por token enviado por correo',
        'Búsqueda de alimentos en Nutritionix y lectura de catálogo local',
        'Gestión de plan semanal y consulta del plan diario',
        'Registro diario de comidas con recálculo de calorías/macros',
        'CRUD de comidas personalizadas por paciente',
        'Consulta de citas y datos de nutriólogo'
      ],
      challenges: [
        'Manejo correcto de fechas diarias por zona horaria específica (America/Tijuana)',
        'Sincronización entre plan semanal y bitácora diaria',
        'Consistencia de totales nutricionales al agregar/eliminar comidas',
        'Convivencia de rutas con convenciones de naming distintas (kebab-case/PascalCase)'
      ],
      solutions: [
        'Helpers de fecha centralizados con Luxon para inicio/fin del día en Tijuana',
        'Función reusable para recálculo de totales diarios (`calculateDailyTotals`)',
        'Modelado por colecciones separadas (Patient, WeeklyPlan, DailyMealLog, PatientMeal, Appointment, Nutritionist)',
        'Upsert y normalización de alimentos al registrar comida desde búsqueda externa'
      ],
      demonstrates: [
        'Diseño de API REST en Express con TypeScript',
        'Modelado de dominio nutricional en MongoDB/Mongoose',
        'Integración con APIs externas y manejo de credenciales por entorno',
        'Flujos de negocio de salud nutricional (planificación y tracking diario)',
        'Preparación para despliegue cloud con Docker/Fly.io'
      ]
    },
    period: 'Mayo 2025 - Agosto 2025',
    status: 'completed'
  },
  {
    id: 'safecar',
    title: 'SafeCar',
    description: 'Sistema de rastreo vehicular en tiempo real con integración IoT, sincronización bidireccional y gestión de pólizas digitales.',
    featured: true,
    techStack: ['React Native', 'Firebase', 'ESP32', 'JavaScript', 'IoT', 'Real-time Database'],
    category: 'iot',
    links: {
      github: 'https://github.com/oscarsgg/SafeCar',
    },
    technicalDetails: {
      architecture: [
        'Mobile app con React Native',
        'Backend-as-a-Service con Firebase',
        'Hardware IoT con ESP32',
        'Arquitectura de sincronización en tiempo real',
      ],
      keyFeatures: [
        'Integración de hardware ESP32 con Firebase',
        'Desarrollo de sistema de rastreo vehicular en tiempo real',
        'Implementación de búsqueda por VIN (Vehicle Identification Number)',
        'Gestión digital de pólizas dentro de la app',
        'Sincronización de datos bidireccional con servicios en la nube',
        'Sistema de alertas y notificaciones push',
      ],
      challenges: [
        'Conexión inalámbrica ESP32 ↔ Firebase',
        'Optimización de datos en tiempo real',
        'Gestión de estados de conectividad hardware',
      ],
      solutions: [
        'Implementación de WebSockets para comunicación real-time',
        'Algoritmo de compresión de datos IoT',
        'Offline-first architecture con cache local',
        'Reconexión automática con exponential backoff',
      ],
      demonstrates: [
        'Desarrollo IoT completo',
        'Comunicación en tiempo real',
        'Integración de hardware con aplicaciones móviles',
        'Arquitectura de sincronización bidireccional',
        'Gestión de estados complejos',
      ],
    },
    period: 'Enero 2025 - Abril 2025',
    status: 'completed',
  },
  {
    id: 'yg-amigurumis',
    title: 'YG Amigurumis',
    description: 'E-commerce escolar de amigurumis desarrollado en PHP y MySQL, presentado en concurso de emprendedores a nivel estatal.',
    featured: true,
    techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    category: 'ecommerce',
    links: {
      github: 'https://github.com/Hu-Tao128/YG_Amigurumis'
    },
    technicalDetails: {
      architecture: [
        'Monolito PHP tradicional',
        'Base de datos relacional con MySQL',
        'Sistema de sesiones PHP para autenticación',
        'Gestión de archivos modular por funcionalidad'
      ],
      keyFeatures: [
        'Registro e inicio de sesión de usuarios',
        'Carrito de compras y flujo de checkout por pasos',
        'Catálogo categorizado con buscador',
        'Panel administrativo para gestión de productos',
        'Módulo de personalización de pedidos'
      ],
      challenges: [
        'Diseño de base de datos para múltiples tipos de producto',
        'Gestión de imágenes y formularios dinámicos',
        'Validación de datos durante el checkout'
      ],
      solutions: [
        'Modelo relacional normalizado con tablas vinculadas',
        'Carga y organización de imágenes por producto',
        'Validación backend para formularios y compras'
      ],
      demonstrates: [
        'Desarrollo web full-stack clásico con PHP',
        'Diseño de bases de datos relacionales',
        'Manejo de sesiones y autenticación',
        'Gestión de formularios y validación',
        'Programación orientada a objetos con MySQLi',
        'Diseño UI/UX para e-commerce'
      ]
    },
    period: 'Enero 2023 - Febrero 2023',
    status: 'completed',
    school: {
      name: 'CETIs No. 58 \'Emiliano Zapata\'',
      career: 'Técnico en Programación',
      semester: '6to Semestre',
      competition: 'Concurso de Emprendedores 2023',
      achievement: 'Etapa Estatal Ensenada'
    },
    team: 'Bahía Group'
  },
];
