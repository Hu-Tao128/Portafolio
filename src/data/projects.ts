import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'study-medical',
    title: 'Study Medical — Architecture-Driven Backend (In Progress)',
    description: 'Healthcare-domain backend system designed with layered architecture, hybrid data strategy, and long-term scalability in mind.',
    featured: true,
    techStack: [
      'Spring Boot 3',
      'Java 17/21',
      'Spring Security (OAuth2)',
      'PostgreSQL (Supabase)',
      'MongoDB Atlas',
      'pgvector',
      'WebSocket (STOMP)',
      'Docker',
      'Flutter (Client)',
      'Supabase Auth'
    ],
    category: 'backend',
    links: {
      github: 'https://github.com/Hu-Tao128',
    },
    technicalDetails: {
      architecture: [
        'Layered backend structure (Controller → Service → Repository)',
        'JWT validation via Spring Security OAuth2 Resource Server',
        'Hybrid persistence strategy (Relational + NoSQL)',
        'DTO mapping via MapStruct',
        'Rate limiting with Bucket4j',
        'WebSocket-based real-time communication'
      ],
      keyFeatures: [
        'Supabase Auth integration for secure authentication',
        'PostgreSQL for structured domain entities',
        'MongoDB Atlas for high-volume flexible data (chats, logs, flashcards)',
        'Vector embeddings via pgvector for semantic search',
        'RESTful API baseline with version-ready structure'
      ],
      challenges: [
        'Designing hybrid persistence without tight coupling',
        'Maintaining domain clarity across relational and document storage',
        'Planning scalable service boundaries before feature expansion',
        'Integrating secure JWT validation without custom auth server'
      ],
      solutions: [
        'Explicit separation of domain responsibilities per data store',
        'Security delegation to Supabase with token validation server-side',
        'Layer isolation between transport, business logic and persistence',
        'Future-proofed architecture with Dockerized environment design'
      ],
      demonstrates: [
        'Hybrid backend architecture planning',
        'Security-aware backend design',
        'Scalability-conscious system modeling',
        'Healthcare-domain structured thinking',
        'Infrastructure-level awareness beyond CRUD APIs'
      ],
    },
    period: '2026 - In Progress',
    status: 'in-progress',
  },
  {
    id: 'medusa-ecommerce',
    title: 'Backend E-commerce (MedusaJS)',
    description: 'Configuración completa de plataforma e-commerce headless con MedusaJS, implementando arquitectura modular y escalable.',
    featured: true,
    techStack: ['MedusaJS', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'REST API'],
    category: 'backend',
    links: {
      github: 'https://github.com/Hu-Tao128',
    },
    technicalDetails: {
      architecture: [
        'Arquitectura de microservicios',
        'API Gateway con Express',
        'Event-driven architecture',
        'Containerized services con Docker',
      ],
      keyFeatures: [
        'Modelado de productos, variantes y colecciones',
        'Configuración de servicios, middlewares y plugins personalizados',
        'Implementación de autenticación JWT y gestión de órdenes',
        'Integración con frontend desacoplado (React/Next.js)',
        'Sistema de caché con Redis',
      ],
      challenges: [
        'Escalabilidad de catálogo con miles de productos',
        'Gestión de inventario en tiempo real',
        'Integración con múltiples servicios de pago',
      ],
      solutions: [
        'Redis caching para consultas frecuentes',
        'Event sourcing para trazabilidad de órdenes',
        'Queue system para procesamiento asíncrono',
        'Plugin system para pagos y envíos',
      ],
      demonstrates: [
        'Comprensión de arquitectura modular',
        'Manejo de APIs REST estructuradas',
        'Entendimiento de e-commerce escalable',
        'Experiencia con headless commerce',
        'Patrones de diseño avanzados',
      ],
    },
    period: '2024 - Actualidad',
    status: 'completed',
  },
  {
    id: 'fitbalance',
    title: 'FitBalance',
    description: 'Aplicación móvil multiplataforma de fitness con integración IoT, backend en la nube y modo oscuro nativo.',
    featured: true,
    techStack: ['React Native', 'Expo', 'Node.js', 'MongoDB Atlas', 'TypeScript', 'Bluetooth'],
    category: 'mobile',
    links: {
      github: 'https://github.com/Hu-Tao128',
    },
    technicalDetails: {
      architecture: [
        'Cross-platform con React Native + Expo',
        'Backend RESTful con Node.js + Express',
        'Base de datos NoSQL con MongoDB Atlas',
        'Arquitectura cliente-servidor',
      ],
      keyFeatures: [
        'Implementación de backend con Node.js y MongoDB Atlas',
        'Integración de escáner de códigos QR',
        'Conexión Bluetooth con báscula inteligente',
        'Implementación de modo oscuro con persistencia local',
        'Gestión de datos en la nube con optimización de consultas',
        'Sistema de autenticación y perfiles de usuario',
      ],
      challenges: [
        'Sincronización de datos en tiempo real',
        'Optimización de performance en dispositivos móviles',
        'Gestión de estados complejos en múltiples pantallas',
      ],
      solutions: [
        'Implementación de React Query para data fetching',
        'Optimización de imágenes con cache local',
        'State management con Context API + custom hooks',
        'Lazy loading de componentes pesados',
      ],
      demonstrates: [
        'Desarrollo móvil multiplataforma completo',
        'Integración hardware-software (Bluetooth)',
        'Gestión de datos en tiempo real',
        'UI/UX con modo oscuro nativo',
        'Arquitectura cross-platform',
      ],
    },
    period: 'Mayo 2025 - Agosto 2025',
    status: 'completed',
  },
  {
    id: 'safecar',
    title: 'SafeCar',
    description: 'Sistema de rastreo vehicular en tiempo real con integración IoT, sincronización bidireccional y gestión de pólizas digitales.',
    featured: true,
    techStack: ['React Native', 'Firebase', 'ESP32', 'JavaScript', 'IoT', 'Real-time Database'],
    category: 'iot',
    links: {
      github: 'https://github.com/Hu-Tao128',
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
    description: 'Sistema e-commerce completo desarrollado con PHP y MySQL, con arquitectura modular y gestión de pedidos en tiempo real.',
    featured: true,
    techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'REST API'],
    category: 'ecommerce',
    links: {
      github: 'https://github.com/Hu-Tao128',
    },
    technicalDetails: {
      architecture: [
        'Monolito PHP tradicional',
        'Arquitectura MVC',
        'Base de datos relacional con MySQL',
        'REST API para comunicación frontend-backend',
      ],
      keyFeatures: [
        'Diseño de arquitectura de base de datos modular multi-producto',
        'Desarrollo completo de sistema e-commerce',
        'Implementación de autenticación con sesiones PHP',
        'Carrito de compras con gestión de inventario',
        'Gestión de pedidos y notificaciones',
        'Integración de sistema de pagos (Stripe)',
        'Sistema de notificaciones automáticas por email',
      ],
      challenges: [
        'Diseño de BD escalable para múltiples productos',
        'Gestión de transacciones seguras',
        'Optimización de consultas MySQL',
      ],
      solutions: [
        'Normalización de base de datos',
        'Implementación de transacciones ACID',
        'Indexación estratégica de tablas',
        'Cache de consultas frecuentes',
      ],
      demonstrates: [
        'Desarrollo web full-stack clásico',
        'Diseño de bases de datos relacionales',
        'Manejo de flujos de e-commerce',
        'Experiencia con PHP tradicional',
        'Gestión de sistemas de pagos',
      ],
    },
    period: 'Agosto 2022 - Diciembre 2022',
    status: 'completed',
  },
];
