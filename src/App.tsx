import { useState } from 'react';
import { FaBars, FaEnvelope, FaGithub, FaTimes } from 'react-icons/fa';
import { education, personalInfo, projects } from './data';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Technical Stack', href: '#technologies' },
    { name: 'Architecture', href: '#architecture-approach' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Practices', href: '#practices' },
    { name: 'Educacion', href: '#education' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="nav-shell fixed inset-x-0 top-0 z-50">
      <nav aria-label="Primary" className="container-shell flex h-16 items-center justify-between">
        <a href="#hero" className="text-lg font-semibold tracking-wide text-[#2563eb]" aria-label="Go to home section">
          AJH
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-slate-200"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-slate-700 bg-slate-900 md:hidden">
          <div className="container-shell flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link inline-flex items-center gap-2 text-base font-medium"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenGitHub = () => {
    window.open(personalInfo.contact.github, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = '/Alcantara-Huerta-Angel-Josue-CV.txt';
    link.download = 'Alcantara-Huerta-Angel-Josue-CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="section section-dark pt-28 sm:pt-32" aria-labelledby="hero-title">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="hero-title" className="mb-4 text-4xl font-semibold tracking-tight leading-tight text-slate-100 sm:text-5xl">
            Backend &amp; Mobile Developer
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            REST architecture, IoT integration and headless commerce solutions focused on scalability and maintainability.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleViewProjects}
              className="cta-primary"
              aria-label="View project section"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={handleOpenGitHub}
              className="cta-secondary"
              aria-label="Open GitHub profile in new tab"
            >
              GitHub
            </button>
            <button
              type="button"
              onClick={handleDownloadCv}
              className="cta-secondary"
              aria-label="Download curriculum vitae"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture-approach" className="section section-dark" aria-labelledby="architecture-title">
      <div className="container-shell">
        <div className="section-heading">
          <h2 id="architecture-title" className="section-title">Architecture Approach</h2>
          <p className="mt-2 text-sm font-medium text-slate-400">Enfoque de Arquitectura</p>
          <p className="section-description">
            I apply layered backend architecture patterns across ecosystems, focused on separation of concerns, modular services and transport-independent domain logic.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <article className="panel">
            <h3 className="panel-title">Core principles</h3>
            <ul className="panel-list">
              <li>RESTful resource-oriented API design.</li>
              <li>Layer separation across Controllers, Services and Data Access boundaries.</li>
              <li>DTO-based request and response contracts for stable integrations.</li>
              <li>Middleware-driven validation before domain execution.</li>
              <li>Centralized error-handling strategy with standardized failure envelopes.</li>
              <li>Modular domain boundaries for maintainable service decomposition.</li>
              <li>Framework-agnostic service logic to keep domain behavior portable.</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Architectural portability is demonstrated by implementing equivalent backend domains in both Node.js (TypeScript) and Spring Boot (Java), validating stable design decisions across technology stacks.
            </p>
          </article>

          <article className="panel">
            <h3 className="panel-title">FitBalance Backend - Polyglot Validation</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="panel-subtitle">Implementation A</h4>
                <ul className="panel-list">
                  <li>Node.js + Express + TypeScript</li>
                  <li>MongoDB Atlas</li>
                </ul>
              </div>
              <div>
                <h4 className="panel-subtitle">Implementation B</h4>
                <ul className="panel-list">
                  <li>Java + Spring Boot</li>
                  <li>JPA with relational persistence</li>
                </ul>
              </div>
            </div>
            <h4 className="panel-subtitle mt-5">Shared architecture</h4>
            <ul className="panel-list">
              <li>Controller layer for request handling.</li>
              <li>Service layer for domain logic.</li>
              <li>Repository/Data Access abstraction.</li>
              <li>DTO-based input and output contracts.</li>
              <li>Validation through middleware or annotations.</li>
              <li>Centralized exception handling.</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              This dual implementation validates backend architecture proficiency beyond framework conventions, emphasizing structural design principles, clean layer boundaries and service portability across stacks.
            </p>
          </article>

          <article className="panel">
            <h3 className="panel-title">Layer diagram</h3>
            <pre className="mono-block mt-4">
{`Client / Frontend
       |
     Routes
       |
  Controllers
       |
    Services
       |
   Data Access
       |
 Database / Medusa`}
            </pre>
            <pre className="mono-block mt-4">
{`Request -> Validation Middleware -> Controller
            -> Service -> Model -> Response

Error Path -> AppError -> Error Middleware -> Standard JSON`}
            </pre>
          </article>
        </div>
      </div>
    </section>
  );
}

function Practices() {
  const practices = [
    {
      title: 'Clean Code',
      description: 'Small focused modules, meaningful naming and explicit boundaries between transport, domain and persistence logic.',
    },
    {
      title: 'SOLID principles (applied level)',
      description: 'Applied in service layer design with interface-driven contracts, low coupling and testable domain abstractions.',
    },
    {
      title: 'REST API design',
      description: 'Resource-oriented endpoints, predictable status codes, version-safe contracts and consistent response envelopes.',
    },
    {
      title: 'Git workflow',
      description: 'Feature branching, pull-request reviews, conventional commits and controlled merges to maintain release stability.',
    },
    {
      title: 'Unit testing (Jest)',
      description: 'Unit coverage for services, validation rules and critical business flows with deterministic test fixtures.',
    },
    {
      title: 'CI/CD (GitHub Actions)',
      description: 'Automated lint, build and test pipelines on pull requests for fast feedback and reliable integration.',
    },
  ];

  return (
    <section id="practices" className="section section-dark" aria-labelledby="practices-title">
      <div className="container-shell">
        <div className="section-heading">
          <h2 id="practices-title" className="section-title">Engineering Practices</h2>
          <p className="section-description">
            Development standards applied across backend and mobile delivery.
          </p>
        </div>

        <article className="panel">
          <ul className="divide-y divide-slate-700">
            {practices.map((practice) => (
              <li key={practice.title} className="py-4 first:pt-0 last:pb-0">
                <p className="text-sm font-semibold text-slate-200">{practice.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{practice.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function Technologies() {
  const layers = [
    {
      title: 'Backend',
      technologies: [
        {
          name: 'Spring Boot 3',
          description: 'Java backend framework for layered API services with production-grade configuration patterns.',
        },
        {
          name: 'Java 17/21',
          description: 'LTS runtime foundation for strongly typed domain services and maintainable enterprise codebases.',
        },
        {
          name: 'Node.js',
          description: 'Runtime orientado a I/O no bloqueante para servicios REST de alto throughput.',
        },
        {
          name: 'Express',
          description: 'Framework para routing modular, middlewares de validacion y manejo centralizado de errores.',
        },
        {
          name: 'TypeScript',
          description: 'Tipado estatico para contratos de API, modelos de dominio y mantenibilidad del backend.',
        },
        {
          name: 'MapStruct',
          description: 'Compile-time DTO mapping for consistent request/response transformations in layered services.',
        },
      ],
    },
    {
      title: 'Databases',
      technologies: [
        {
          name: 'MongoDB',
          description: 'Modelo documental para datos flexibles y consultas optimizadas en aplicaciones Node.js.',
        },
        {
          name: 'PostgreSQL',
          description: 'Base relacional para consistencia transaccional, relaciones complejas y consultas SQL avanzadas.',
        },
        {
          name: 'pgvector',
          description: 'Vector extension for semantic search and embedding-based retrieval in PostgreSQL.',
        },
        {
          name: 'Firebase',
          description: 'Servicios en tiempo real para sincronizacion de eventos y soporte offline en apps moviles.',
        },
      ],
    },
    {
      title: 'Mobile',
      technologies: [
        {
          name: 'React Native',
          description: 'Desarrollo cross-platform con arquitectura de componentes reutilizables para iOS y Android.',
        },
        {
          name: 'Expo',
          description: 'Tooling para builds, actualizaciones OTA y acceso consistente a APIs nativas.',
        },
        {
          name: 'Bluetooth / IoT Integration',
          description: 'Conexion de dispositivos fisicos para telemetria y sincronizacion de datos en tiempo real.',
        },
      ],
    },
    {
      title: 'Testing & DevOps',
      technologies: [
        {
          name: 'Bucket4j',
          description: 'Rate limiting controls to protect API throughput and enforce fair client usage.',
        },
        {
          name: 'Jest',
          description: 'Pruebas unitarias de logica de negocio, servicios y validaciones de API.',
        },
        {
          name: 'React Native Testing Library',
          description: 'Pruebas de interfaz por comportamiento para flujos criticos en aplicaciones moviles.',
        },
        {
          name: 'GitHub Actions',
          description: 'Pipelines CI para lint, testing y build automatizado en cada pull request.',
        },
      ],
    },
    {
      title: 'Infrastructure',
      technologies: [
        {
          name: 'Spring Security OAuth2',
          description: 'Resource server token validation for secure JWT-protected backend endpoints.',
        },
        {
          name: 'Supabase Auth',
          description: 'Delegated identity provider integrated with backend-side token verification workflows.',
        },
        {
          name: 'Docker (Basic)',
          description: 'Containerizacion basica de apps Node.js con configuracion de variables de entorno por ambiente.',
        },
        {
          name: 'REST Service Deployment',
          description: 'Despliegue de APIs con configuracion de entornos y separacion entre desarrollo y produccion.',
        },
        {
          name: 'Environment Configuration',
          description: 'Gestion de secretos y parametros runtime para mantener consistencia entre entornos.',
        },
      ],
    },
  ];

  return (
    <section id="technologies" className="section section-soft" aria-labelledby="technologies-title">
      <div className="container-shell">
        <div className="section-heading">
          <h2 id="technologies-title" className="section-title">Technical Stack</h2>
          <p className="section-description">
            Technology capabilities organized by architecture layer with backend-first priorities.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
          {layers.map((layer) => (
            <article key={layer.title} className="panel">
              <h3 className="panel-title">{layer.title}</h3>
              <ul className="panel-list">
                {layer.technologies.map((technology) => (
                  <li key={technology.name}>
                    <p className="text-sm font-semibold text-slate-100">{technology.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{technology.description}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section section-soft" aria-labelledby="education-title">
      <div className="container-shell">
        <div className="section-heading">
          <h2 id="education-title" className="section-title">Education</h2>
          <p className="section-description">
            Academic background and applied software engineering training.
          </p>
        </div>

        <div className="grid gap-12">
          {education.map((item) => (
            <article key={item.id} className="panel">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="panel-title">{item.degree}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                </div>
                <span className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-400">
                  {item.period}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>

              <div className="mt-4">
                <h4 className="panel-subtitle">Key outcomes</h4>
                <ul className="panel-list">
                  {item.achievements.slice(0, 3).map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projectDesignNotes: Record<
    string,
    {
      problem: string;
      diagram: string;
      decisions: string[];
      challengesSolved: string[];
    }
  > = {
    'study-medical': {
      problem:
        'Study Medical is an evolving healthcare-domain backend system built for architectural stability before feature density, with explicit domain boundaries and a hybrid persistence strategy for long-term scalability.',
      diagram: `Flutter Client
      |
Spring Boot 3 API (Java 17/21)
      |
Controllers -> Services -> Repositories
      |                  |
PostgreSQL (Supabase)  MongoDB Atlas
      |
pgvector + STOMP WebSocket`,
      decisions: [
        'Implemented Controller -> Service -> Repository boundaries to keep transport concerns isolated from domain logic.',
        'Standardized DTO mapping and contract control for predictable API evolution.',
        'Used Spring Security OAuth2 Resource Server for JWT validation, delegating identity to Supabase Auth.',
        'Applied hybrid persistence boundaries: relational entities in PostgreSQL and high-volume flexible data in MongoDB.',
        'Added infrastructure-oriented guards with Bucket4j rate limiting, Docker runtime consistency and STOMP WebSocket channels.',
      ],
      challengesSolved: [
        'Avoided tight coupling while introducing hybrid persistence across relational and document stores.',
        'Maintained domain clarity between users, sessions and medical records before scaling feature scope.',
        'Integrated secure JWT validation without operating a custom auth server.',
        'Prepared scalability boundaries early through environment separation and observability-ready architecture.',
      ],
    },
    'medusa-ecommerce': {
      problem:
        'Build a headless commerce backend that can scale product catalog operations, order workflows and third-party integrations without coupling business logic to a single storefront.',
      diagram: `Next.js Storefront / Admin UI
            |
        API Gateway
            |
 Medusa Modules + Custom Services
      |           |           |
 PostgreSQL    Redis      Worker Queue`,
      decisions: [
        'Adopted Medusa plugin architecture to extend payments and shipping without modifying core modules.',
        'Introduced Redis caching for read-heavy catalog endpoints to reduce database pressure.',
        'Separated domain services from transport layer so REST controllers remain thin and testable.',
      ],
      challengesSolved: [
        'Handled high catalog read volume with caching and index-aware query patterns.',
        'Stabilized order workflows using event-driven processing for asynchronous operations.',
        'Reduced integration risk by isolating external providers behind service adapters.',
      ],
    },
    fitbalance: {
      problem:
        'Deliver a mobile fitness platform with reliable backend services and IoT-connected devices while maintaining responsive UX under unstable network conditions.',
      diagram: `React Native App
      |      \
Bluetooth   REST API (Node/Express)
      |              |
 Smart Scale      MongoDB Atlas
                    |
             Auth + Metrics Services`,
      decisions: [
        'Designed API modules by bounded context (auth, profiles, metrics, devices) to keep the backend maintainable.',
        'Implemented synchronization contracts between device events and API writes to avoid inconsistent states.',
        'Used typed request/response models to preserve API compatibility across mobile releases.',
      ],
      challengesSolved: [
        'Solved intermittent connectivity with resilient sync patterns between app, device and backend.',
        'Improved query performance for historical metrics through targeted indexing and pagination.',
        'Kept mobile experience stable by decoupling hardware event processing from UI rendering.',
      ],
    },
    safecar: {
      problem:
        'Create a real-time vehicle tracking system that integrates ESP32 telemetry, cloud persistence and mobile visualization with dependable event propagation.',
      diagram: `ESP32 Device -> Firebase Realtime DB
        |                |
   Telemetry Stream   Cloud Triggers
        |                |
   React Native App <- Alert Service
            |
       VIN + Policy Module`,
      decisions: [
        'Structured telemetry ingestion as event streams instead of direct state mutation flows.',
        'Defined explicit data contracts for VIN lookup, policy records and alert payloads.',
        'Separated real-time updates from administrative operations to reduce coupling.',
      ],
      challengesSolved: [
        'Resolved device-cloud synchronization issues with predictable retry and reconnection behavior.',
        'Reduced noisy updates by shaping telemetry payloads before client consumption.',
        'Maintained data consistency across tracking, policy and notification domains.',
      ],
    },
    'yg-amigurumis': {
      problem:
        'Implement a transactional e-commerce system with reliable inventory and order consistency using a traditional PHP/MySQL stack with modular backend behavior.',
      diagram: `Storefront (Web)
      |
PHP Controllers -> Service Layer
      |               |
 Session/Auth      Order Domain
      |               |
   MySQL <-> Payment Integration`,
      decisions: [
        'Modeled catalog, cart and order entities with normalized relational design for transactional integrity.',
        'Applied MVC boundaries to isolate request handling, domain logic and persistence concerns.',
        'Wrapped payment operations with transactional safeguards to prevent partial order states.',
      ],
      challengesSolved: [
        'Addressed inventory race conditions by enforcing transactional updates on checkout.',
        'Improved operational reliability with clear order state transitions and auditable flows.',
        'Optimized MySQL performance through selective indexing on frequently filtered columns.',
      ],
    },
  };

  return (
    <section id="projects" className="section section-soft" aria-labelledby="projects-title">
      <div className="container-shell">
        <div className="section-heading">
          <h2 id="projects-title" className="section-title">Proyectos</h2>
          <p className="section-description">
            Implementaciones completas con enfoque en arquitectura, datos y operacion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className={`panel h-full ${project.featured ? 'border-[#334155]' : ''}`}>
              {(() => {
                const notes = projectDesignNotes[project.id] ?? {
                  problem: project.description,
                  diagram: `Client -> API -> Service -> Data Layer`,
                  decisions: project.technicalDetails.solutions,
                  challengesSolved: project.technicalDetails.challenges,
                };

                return (
                  <>
              <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">{project.period}</p>
                </div>
                <span className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-400">
                  {project.status === 'completed' ? 'Completed' : project.status === 'in-progress' ? 'In progress' : 'Prototype'}
                </span>
              </div>

              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h4 className="panel-subtitle">Problem statement</h4>
                  <p className="text-sm leading-relaxed text-slate-400">{notes.problem}</p>
                </div>

                <div>
                  <h4 className="panel-subtitle">Technical architecture diagram</h4>
                  <pre className="mono-block text-xs p-3">
{notes.diagram}
                  </pre>
                </div>

                <div>
                  <h4 className="panel-subtitle">Technologies used</h4>
                  <ul className="panel-list">
                    {project.techStack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="panel-subtitle">Key technical decisions</h4>
                  <ul className="panel-list">
                    {notes.decisions.map((decision) => (
                      <li key={decision}>{decision}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2">
                  <h4 className="panel-subtitle">Engineering challenges solved</h4>
                  <ul className="panel-list">
                    {notes.challengesSolved.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-700 pt-5">
                <span className="text-sm text-slate-400">Backend and system design focus</span>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-secondary !px-4 !py-2"
                    aria-label={`Open ${project.title} repository`}
                  >
                    <FaGithub size={14} />
                    Repository
                  </a>
                )}
              </div>
                  </>
                );
              })()}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-dark border-t border-slate-800" aria-labelledby="contact-title">
      <div className="container-shell pb-24 pt-16">
        <div className="section-heading">
          <h2 id="contact-title" className="section-title">Contacto</h2>
          <p className="section-description">
            Disponible para colaboraciones en backend, mobile y proyectos con IoT.
          </p>
        </div>

        <div className="contact-shell mx-auto max-w-3xl">
          <article className="panel contact-panel">
            <h3 className="panel-title">Mensaje</h3>
            <div className="mt-5 grid gap-4 text-sm text-slate-400 sm:grid-cols-2">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex items-center gap-2"
                aria-label="Open GitHub profile"
              >
                <FaGithub size={14} />
                Hu-Tao128
              </a>
              <a
                href={personalInfo.contact.email}
                className="text-link inline-flex items-center gap-2"
                aria-label="Send email"
              >
                <FaEnvelope size={14} />
                angel.josue@utj.edu.mx
              </a>
              <p>{personalInfo.location}</p>
              <p className="sm:text-right">Backend and Mobile Collaboration</p>
            </div>

            <form className="mt-8 space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-400">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  className="field-input"
                  required
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  className="field-input"
                  required
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-400">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe tu oportunidad o proyecto"
                  className="field-input resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="cta-primary w-full"
                aria-label="Send contact message"
              >
                Enviar mensaje
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#020617]">
      <div className="container-shell grid gap-8 py-10 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-200">{personalInfo.name}</p>
          <p className="mt-2">Backend and Mobile Developer</p>
        </div>
        <nav aria-label="Footer" className="space-y-2">
          <a href="#technologies" className="text-link block">Technical Stack</a>
          <a href="#architecture-approach" className="text-link block">Architecture Approach</a>
          <a href="#projects" className="text-link block">Projects</a>
        </nav>
        <div className="space-y-2">
          <a href={personalInfo.contact.github} className="text-link block" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personalInfo.contact.email} className="text-link block">Email</a>
          <p>{personalInfo.location}</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Technologies />
        <Architecture />
        <Projects />
        <Practices />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
