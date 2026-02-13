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
    title: 'Backend E-commerce (MedusaJS v2)',
    description: 'Plataforma e-commerce headless con MedusaJS v2, implementando módulos personalizados, arquitectura modular y event-driven para gestión multi-vendedor.',
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
        'Módulo personalizado \'custom-products\' (cross-sell, upsell, related products)',
        'Módulo personalizado \'seller\' (gestión multi-vendedor con estados: pending/approved/rejected)',
        'Sistema de email transaccional con Nodemailer y templates HTML',
        'Integración con Firebase Admin para notificaciones',
        'Integración con Stripe para pagos',
        'Almacenamiento de archivos en S3',
        'API Routes: products, orders, customers, addresses, inventory, shipping, collections, sellers',
        'Subscribers: payment-success, order-preparation, fulfillment-shipment-created, product-updated',
        'Workflows para procesos de negocio (create-seller-product, link-seller-product)',
        'Links entre entidades (seller-customer, seller-product, product-custom)'
      ],
      challenges: [
        'Gestión de catálogo con productos personalizados',
        'Sistema multi-vendedor con validación de estados',
        'Email transaccional escalable',
        'Gestión de inventario y órdenes en tiempo real'
      ],
      solutions: [
        'Módulos personalizados con MikroORM',
        'Event sourcing con subscribers para trazabilidad',
        'Service layer separado para lógica de negocio',
        'Integración con Redis para caché y colas'
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
    period: '2024 - Actualidad',
    status: 'in-progress'
  },
  {
    id: 'fitbalance',
    title: 'FitBalance',
    description: 'Aplicación móvil multiplataforma de seguimiento nutricional con integración IoT Bluetooth, búsqueda de alimentos por texto y código de barras, backend en la nube y modo oscuro nativo.',
    featured: true,
    techStack: [
      'React Native',
      'Expo Go',
      'TypeScript',
      'Node.js',
      'Express',
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
        'Búsqueda de alimentos por texto mediante Nutritionix API',
        'Escaneo de códigos de barras con cámara (expo-camera)',
        'Conexión Bluetooth Low Energy con dispositivos IoT (react-native-ble-plx)',
        'Modo oscuro con persistencia local (AsyncStorage) y detección automática del sistema',
        'Gestión de datos en la nube con MongoDB',
        'Sistema de autenticación con bcrypt y perfiles de usuario',
        'Notificaciones locales programadas (expo-notifications)',
        'Creación de comidas personalizadas almacenadas localmente',
        'Estadísticas y gráficas diarias/semanales'
      ],
      challenges: [
        'Integración con APIs externas de nutrición (Nutritionix, FatSecret)',
        'Sincronización de datos entre app y dispositivos Bluetooth',
        'Optimización de rendimiento en dispositivos móviles',
        'Gestión de estados complejos con Context API'
      ],
      solutions: [
        'State management con Context API + custom hooks',
        'AsyncStorage para persistencia local de preferencias y comidas',
        'Detección automática del tema del sistema con persistencia manual',
        'Lazy loading de componentes y optimización de renders'
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
    description: 'Sistema e-commerce completo desarrollado con PHP y MySQL, con arquitectura modular y gestión de pedidos en tiempo real.',
    featured: true,
    techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'REST API'],
    category: 'ecommerce',
    links: {
      github: 'https://github.com/Hu-Tao128/YG_Amigurumis',
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
