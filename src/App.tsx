import { useState } from 'react';
import { FaBars, FaEnvelope, FaGithub, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { education, personalInfo, projects } from './data';

/* ═══════════════════════════════════════════
   Header
   ═══════════════════════════════════════════ */

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Stack', href: '#technologies' },
    { name: 'Architecture', href: '#architecture-approach' },
    { name: 'Projects', href: '#projects' },
    { name: 'Practices', href: '#practices' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="nav-shell fixed inset-x-0 top-0 z-50">
      <nav aria-label="Primary" className="container-shell flex h-full items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-xs font-medium tracking-wider"
          style={{ color: 'var(--color-warm)' }}
          aria-label="Go to home section"
        >
          {'<AJH />'}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
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
            <FaGithub size={15} />
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          style={{ color: 'var(--color-text-secondary)' }}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t md:hidden"
          style={{
            borderColor: 'var(--color-border)',
            background: 'var(--color-bg-primary)',
          }}
        >
          <div className="container-shell flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link py-1 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link inline-flex items-center gap-2 py-1 text-sm"
            >
              <FaGithub size={13} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════
   Hero
   ═══════════════════════════════════════════ */

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
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="mb-3 font-mono text-xs font-medium uppercase tracking-widest"
            style={{ color: 'var(--color-warm)' }}
          >
            Backend &amp; Mobile Engineer
          </p>
          <h1
            id="hero-title"
            className="mb-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Building scalable systems{' '}
            <span style={{ color: 'var(--color-accent)' }}>with clean architecture</span>
          </h1>
          <p
            className="mx-auto mb-8 max-w-lg text-sm leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            REST architecture, IoT integration and headless commerce solutions focused on
            separation of concerns, modularity and maintainability.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={handleViewProjects} className="cta-primary" aria-label="View project section">
              View Projects
            </button>
            <button type="button" onClick={handleOpenGitHub} className="cta-secondary" aria-label="Open GitHub profile in new tab">
              <FaGithub size={13} />
              GitHub
            </button>
            <button type="button" onClick={handleDownloadCv} className="cta-secondary" aria-label="Download curriculum vitae">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Technical Stack
   ═══════════════════════════════════════════ */

function Technologies() {
  const layers = [
    {
      title: 'Backend',
      accent: 'var(--color-warm)',
      items: [
        { name: 'Spring Boot 3', note: 'Java backend framework for layered API services with production-grade configuration.' },
        { name: 'Java 17/21', note: 'LTS runtime for strongly typed domain services and enterprise codebases.' },
        { name: 'Node.js', note: 'Non-blocking I/O runtime for high-throughput REST services.' },
        { name: 'Express', note: 'Modular routing, validation middleware and centralized error handling.' },
        { name: 'TypeScript', note: 'Static typing for API contracts, domain models and backend maintainability.' },
        { name: 'MapStruct', note: 'Compile-time DTO mapping for consistent request/response transformations.' },
      ],
    },
    {
      title: 'Databases',
      accent: 'var(--color-accent)',
      items: [
        { name: 'MongoDB', note: 'Document model for flexible data and optimized queries in Node.js apps.' },
        { name: 'PostgreSQL', note: 'Relational consistency, complex relations and advanced SQL queries.' },
        { name: 'pgvector', note: 'Vector extension for semantic search and embedding-based retrieval.' },
        { name: 'Firebase', note: 'Real-time services for event synchronization and offline support in mobile.' },
      ],
    },
    {
      title: 'Mobile',
      accent: 'var(--color-sage)',
      items: [
        { name: 'React Native', note: 'Cross-platform development with reusable component architecture.' },
        { name: 'Expo', note: 'Build tooling, OTA updates and consistent native API access.' },
        { name: 'Bluetooth / IoT', note: 'Physical device connectivity for telemetry and real-time data sync.' },
      ],
    },
    {
      title: 'Testing & DevOps',
      accent: 'var(--color-mauve)',
      items: [
        { name: 'Bucket4j', note: 'Rate limiting to protect API throughput and enforce fair client usage.' },
        { name: 'Jest', note: 'Unit testing for business logic, services and API validations.' },
        { name: 'RN Testing Library', note: 'Behavior-driven UI testing for critical mobile flows.' },
        { name: 'GitHub Actions', note: 'CI pipelines for lint, testing and automated builds on each PR.' },
      ],
    },
    {
      title: 'Infrastructure',
      accent: 'var(--color-clay)',
      items: [
        { name: 'Spring Security OAuth2', note: 'Resource server token validation for JWT-protected endpoints.' },
        { name: 'Supabase Auth', note: 'Delegated identity provider with backend-side token verification.' },
        { name: 'Docker', note: 'Basic containerization with environment-based variable configuration.' },
        { name: 'REST Deployment', note: 'API deployment with environment separation (dev/staging/prod).' },
        { name: 'Env Configuration', note: 'Secrets and runtime parameter management across environments.' },
      ],
    },
  ];

  return (
    <section id="technologies" className="section section-alt" aria-labelledby="technologies-title">
      <div className="container-shell">
        <div className="section-heading">
          <span className="section-label">Capabilities</span>
          <h2 id="technologies-title" className="section-title">Technical Stack</h2>
          <p className="section-description">
            Technology capabilities organized by architecture layer with backend-first priorities.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {layers.map((layer) => (
            <article key={layer.title} className="panel" style={{ borderTopColor: layer.accent, borderTopWidth: '2px' }}>
              <h3 className="panel-title" style={{ color: layer.accent }}>
                {layer.title}
              </h3>
              <div className="divider" />
              <ul className="panel-list">
                {layer.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-2">
                    <span className="list-dot" style={{ background: layer.accent }} />
                    <span className="flex flex-col gap-0.5">
                      <span className="text-xs font-medium" style={{ color: 'var(--color-text-primary)' }}>
                        {item.name}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {item.note}
                      </span>
                    </span>
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

/* ═══════════════════════════════════════════
   Architecture Approach
   ═══════════════════════════════════════════ */

function Architecture() {
  const corePrinciples = [
    'RESTful resource-oriented API design.',
    'Layer separation across Controllers, Services and Data Access boundaries.',
    'DTO-based request and response contracts for stable integrations.',
    'Middleware-driven validation before domain execution.',
    'Centralized error-handling with standardized failure envelopes.',
    'Modular domain boundaries for maintainable service decomposition.',
    'Framework-agnostic service logic to keep domain behavior portable.',
  ];

  const layerDiagram = `Client / Frontend
       |
     Routes
       |
  Controllers
       |
    Services
       |
   Data Access
       |
 Database / Medusa`;

  const flowDiagram = `Request -> Validation Middleware -> Controller
            -> Service -> Model -> Response

Error Path -> AppError -> Error Middleware -> Standard JSON`;

  return (
    <section id="architecture-approach" className="section section-dark" aria-labelledby="architecture-title">
      <div className="container-shell">
        <div className="section-heading">
          <span className="section-label">Design Patterns</span>
          <h2 id="architecture-title" className="section-title">Architecture Approach</h2>
          <p className="section-description">
            Layered backend architecture patterns focused on separation of concerns, modular services and transport-independent domain logic.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Core principles */}
          <article className="panel" style={{ borderTopColor: 'var(--color-accent)', borderTopWidth: '2px' }}>
            <h3 className="panel-title" style={{ color: 'var(--color-accent)' }}>Core Principles</h3>
            <div className="divider" />
            <ul className="panel-list">
              {corePrinciples.map((principle) => (
                <li key={principle} className="flex items-start gap-2">
                  <span className="list-dot" style={{ background: 'var(--color-accent)' }} />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
            <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Architectural portability is demonstrated by implementing equivalent backend domains in both Node.js (TypeScript) and Spring Boot (Java), validating stable design decisions across technology stacks.
            </p>
          </article>

          {/* Polyglot validation */}
          <article className="panel" style={{ borderTopColor: 'var(--color-warm)', borderTopWidth: '2px' }}>
            <h3 className="panel-title" style={{ color: 'var(--color-warm)' }}>FitBalance Backend -- Polyglot Validation</h3>
            <div className="divider" />
            <div className="grid gap-4 sm:grid-cols-2">
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
            <h4 className="panel-subtitle mt-2">Shared Architecture</h4>
            <ul className="panel-list">
              <li>Controller layer for request handling.</li>
              <li>Service layer for domain logic.</li>
              <li>Repository / Data Access abstraction.</li>
              <li>DTO-based input and output contracts.</li>
              <li>Validation through middleware or annotations.</li>
              <li>Centralized exception handling.</li>
            </ul>
            <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              This dual implementation validates backend architecture proficiency beyond framework conventions.
            </p>
          </article>

          {/* Layer diagram */}
          <article className="panel lg:col-span-2" style={{ borderTopColor: 'var(--color-sage)', borderTopWidth: '2px' }}>
            <h3 className="panel-title" style={{ color: 'var(--color-sage)' }}>Layer Diagram</h3>
            <div className="divider" />
            <div className="grid gap-4 md:grid-cols-2">
              <pre className="mono-block">{layerDiagram}</pre>
              <pre className="mono-block">{flowDiagram}</pre>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Projects
   ═══════════════════════════════════════════ */

const projectAccents: Record<string, string> = {
  'study-medical': 'var(--color-warm)',
  'medusa-ecommerce': 'var(--color-sage)',
  fitbalance: 'var(--color-mauve)',
  safecar: 'var(--color-clay)',
  'yg-amigurumis': 'var(--color-accent)',
};

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const accent = projectAccents[project.id] || 'var(--color-accent)';

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
        'Healthcare-domain backend system built for architectural stability before feature density, with explicit domain boundaries and a hybrid persistence strategy.',
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
        'Controller -> Service -> Repository boundaries to isolate transport from domain logic.',
        'Standardized DTO mapping and contract control for predictable API evolution.',
        'Spring Security OAuth2 Resource Server for JWT validation, delegating identity to Supabase Auth.',
        'Hybrid persistence: relational entities in PostgreSQL, high-volume data in MongoDB.',
        'Bucket4j rate limiting, Docker runtime consistency and STOMP WebSocket channels.',
      ],
      challengesSolved: [
        'Avoided tight coupling with hybrid persistence across relational and document stores.',
        'Maintained domain clarity between users, sessions and medical records.',
        'Integrated secure JWT validation without operating a custom auth server.',
        'Prepared scalability boundaries through environment separation and observability-ready architecture.',
      ],
    },
    'medusa-ecommerce': {
      problem:
        'Headless commerce backend that scales product catalog operations, order workflows and third-party integrations without coupling business logic to a single storefront.',
      diagram: `Next.js Storefront / Admin UI
            |
        API Gateway
            |
 Medusa Modules + Custom Services
      |           |           |
 PostgreSQL    Redis      Worker Queue`,
      decisions: [
        'Adopted Medusa plugin architecture to extend payments and shipping without modifying core.',
        'Introduced Redis caching for read-heavy catalog endpoints.',
        'Separated domain services from transport layer for thin, testable controllers.',
      ],
      challengesSolved: [
        'Handled high catalog read volume with caching and index-aware query patterns.',
        'Stabilized order workflows using event-driven processing.',
        'Reduced integration risk by isolating external providers behind service adapters.',
      ],
    },
    fitbalance: {
      problem:
        'Mobile fitness platform with reliable backend services and IoT-connected devices while maintaining responsive UX under unstable network conditions.',
      diagram: `React Native App
      |      \\
Bluetooth   REST API (Node/Express)
      |              |
 Smart Scale      MongoDB Atlas
                    |
             Auth + Metrics Services`,
      decisions: [
        'API modules by bounded context (auth, profiles, metrics, devices) for maintainability.',
        'Synchronization contracts between device events and API writes to avoid inconsistent states.',
        'Typed request/response models to preserve API compatibility across mobile releases.',
      ],
      challengesSolved: [
        'Solved intermittent connectivity with resilient sync patterns.',
        'Improved query performance through targeted indexing and pagination.',
        'Decoupled hardware event processing from UI rendering.',
      ],
    },
    safecar: {
      problem:
        'Real-time vehicle tracking system integrating ESP32 telemetry, cloud persistence and mobile visualization with dependable event propagation.',
      diagram: `ESP32 Device -> Firebase Realtime DB
        |                |
   Telemetry Stream   Cloud Triggers
        |                |
   React Native App <- Alert Service
            |
       VIN + Policy Module`,
      decisions: [
        'Telemetry ingestion as event streams instead of direct state mutation.',
        'Explicit data contracts for VIN lookup, policy records and alert payloads.',
        'Separated real-time updates from administrative operations.',
      ],
      challengesSolved: [
        'Resolved device-cloud synchronization with predictable retry and reconnection.',
        'Reduced noisy updates by shaping telemetry payloads before client consumption.',
        'Maintained data consistency across tracking, policy and notification domains.',
      ],
    },
    'yg-amigurumis': {
      problem:
        'Transactional e-commerce system with reliable inventory and order consistency using a traditional PHP/MySQL stack with modular backend behavior.',
      diagram: `Storefront (Web)
      |
PHP Controllers -> Service Layer
      |               |
 Session/Auth      Order Domain
      |               |
   MySQL <-> Payment Integration`,
      decisions: [
        'Normalized relational design for catalog, cart and order entities.',
        'MVC boundaries to isolate request handling, domain logic and persistence.',
        'Transactional safeguards on payment operations to prevent partial order states.',
      ],
      challengesSolved: [
        'Addressed inventory race conditions with transactional updates on checkout.',
        'Improved reliability with clear order state transitions and auditable flows.',
        'Optimized MySQL performance through selective indexing.',
      ],
    },
  };

  const notes = projectDesignNotes[project.id] ?? {
    problem: project.description,
    diagram: 'Client -> API -> Service -> Data Layer',
    decisions: project.technicalDetails.solutions,
    challengesSolved: project.technicalDetails.challenges,
  };

  return (
    <article className="panel h-full" style={{ borderTopColor: accent, borderTopWidth: '2px' }}>
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
            {project.period}
          </p>
        </div>
        <span
          className={`status-badge ${
            project.status === 'in-progress'
              ? 'status-badge--active'
              : project.status === 'completed'
              ? 'status-badge--completed'
              : 'status-badge--prototype'
          }`}
        >
          {project.status === 'completed' ? 'Completed' : project.status === 'in-progress' ? 'In progress' : 'Prototype'}
        </span>
      </div>

      <div className="divider" />

      {/* Problem */}
      <div>
        <h4 className="panel-subtitle">Problem</h4>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {notes.problem}
        </p>
      </div>

      {/* Tech stack badges */}
      <div>
        <h4 className="panel-subtitle">Stack</h4>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>

      {/* Architecture diagram */}
      <div>
        <h4 className="panel-subtitle">Architecture</h4>
        <pre className="mono-block">{notes.diagram}</pre>
      </div>

      {/* Expandable details */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="flex items-center gap-1.5 font-mono text-xs font-medium"
        style={{ color: accent }}
        aria-expanded={expanded}
      >
        {expanded ? 'Hide details' : 'Show details'}
        {expanded ? <FaChevronUp size={9} /> : <FaChevronDown size={9} />}
      </button>

      {expanded && (
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="panel-subtitle">Key Decisions</h4>
            <ul className="panel-list">
              {notes.decisions.map((decision) => (
                <li key={decision} className="flex items-start gap-2">
                  <span className="list-dot" style={{ background: accent }} />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="panel-subtitle">Challenges Solved</h4>
            <ul className="panel-list">
              {notes.challengesSolved.map((challenge) => (
                <li key={challenge} className="flex items-start gap-2">
                  <span className="list-dot" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="divider" />
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
          Backend &amp; system design focus
        </span>
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary inline-flex items-center gap-1.5 !px-3 !py-1.5 !text-xs"
            aria-label={`Open ${project.title} repository`}
          >
            <FaGithub size={12} />
            Repository
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section section-alt" aria-labelledby="projects-title">
      <div className="container-shell">
        <div className="section-heading">
          <span className="section-label">Portfolio</span>
          <h2 id="projects-title" className="section-title">Projects</h2>
          <p className="section-description">
            Complete implementations with focus on architecture, data and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Engineering Practices
   ═══════════════════════════════════════════ */

function Practices() {
  const practices = [
    { title: 'Clean Code', description: 'Small focused modules, meaningful naming and explicit boundaries between transport, domain and persistence logic.', accent: 'var(--color-sage)' },
    { title: 'SOLID Principles', description: 'Applied in service layer design with interface-driven contracts, low coupling and testable domain abstractions.', accent: 'var(--color-accent)' },
    { title: 'REST API Design', description: 'Resource-oriented endpoints, predictable status codes, version-safe contracts and consistent response envelopes.', accent: 'var(--color-warm)' },
    { title: 'Git Workflow', description: 'Feature branching, pull-request reviews, conventional commits and controlled merges to maintain release stability.', accent: 'var(--color-mauve)' },
    { title: 'Unit Testing (Jest)', description: 'Coverage for services, validation rules and critical business flows with deterministic test fixtures.', accent: 'var(--color-clay)' },
    { title: 'CI/CD (GitHub Actions)', description: 'Automated lint, build and test pipelines on pull requests for fast feedback and reliable integration.', accent: 'var(--color-accent)' },
  ];

  return (
    <section id="practices" className="section section-dark" aria-labelledby="practices-title">
      <div className="container-shell">
        <div className="section-heading">
          <span className="section-label">Standards</span>
          <h2 id="practices-title" className="section-title">Engineering Practices</h2>
          <p className="section-description">
            Development standards applied across backend and mobile delivery.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice) => (
            <article
              key={practice.title}
              className="panel"
              style={{ borderLeftColor: practice.accent, borderLeftWidth: '2px' }}
            >
              <h3 className="text-sm font-semibold" style={{ color: practice.accent }}>
                {practice.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {practice.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Education
   ═══════════════════════════════════════════ */

const educationAccents = ['var(--color-mauve)', 'var(--color-accent)', 'var(--color-warm)'];

function Education() {
  return (
    <section id="education" className="section section-alt" aria-labelledby="education-title">
      <div className="container-shell">
        <div className="section-heading">
          <span className="section-label">Background</span>
          <h2 id="education-title" className="section-title">Education</h2>
          <p className="section-description">
            Academic background and applied software engineering training.
          </p>
        </div>

        <div className="grid gap-5">
          {education.map((item, index) => {
            const accent = educationAccents[index] || 'var(--color-accent)';
            return (
              <article key={item.id} className="panel" style={{ borderLeftColor: accent, borderLeftWidth: '2px' }}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="panel-title">{item.degree}</h3>
                    <p className="mt-1 font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {item.institution}
                    </p>
                  </div>
                  <span
                    className={`status-badge ${
                      item.status === 'in-progress' ? 'status-badge--active' : 'status-badge--completed'
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <div className="divider" />

                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.description}
                </p>

                <div>
                  <h4 className="panel-subtitle">Key Outcomes</h4>
                  <ul className="panel-list">
                    {item.achievements.slice(0, 3).map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2">
                        <span className="list-dot" style={{ background: accent }} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Contact
   ═══════════════════════════════════════════ */

function Contact() {
  return (
    <section id="contact" className="section section-dark" aria-labelledby="contact-title">
      <div className="container-shell">
        <div className="section-heading">
          <span className="section-label">Get in Touch</span>
          <h2 id="contact-title" className="section-title">Contact</h2>
          <p className="section-description">
            Available for backend, mobile and IoT project collaborations.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <article className="panel" style={{ borderTopColor: 'var(--color-warm)', borderTopWidth: '2px' }}>
            <div className="grid gap-4 text-xs sm:grid-cols-2" style={{ color: 'var(--color-text-secondary)' }}>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex items-center gap-2"
                aria-label="Open GitHub profile"
              >
                <FaGithub size={13} />
                Hu-Tao128
              </a>
              <a
                href={personalInfo.contact.email}
                className="text-link inline-flex items-center gap-2"
                aria-label="Send email"
              >
                <FaEnvelope size={13} />
                angel.josue@utj.edu.mx
              </a>
              <p>{personalInfo.location}</p>
              <p className="sm:text-right">Backend &amp; Mobile Collaboration</p>
            </div>

            <div className="divider" />

            <form className="flex flex-col gap-4" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="field-input"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@email.com"
                    className="field-input"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your opportunity or project"
                  className="field-input resize-none"
                  required
                />
              </div>
              <button type="submit" className="cta-primary w-full" aria-label="Send contact message">
                Send Message
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   Footer
   ═══════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-primary)' }}>
      <div className="container-shell flex flex-col items-center justify-between gap-4 py-6 text-xs sm:flex-row" style={{ color: 'var(--color-text-muted)' }}>
        <p className="font-mono">{personalInfo.name} -- Backend &amp; Mobile Developer</p>
        <nav aria-label="Footer" className="flex items-center gap-5">
          <a href="#technologies" className="text-link">Stack</a>
          <a href="#projects" className="text-link">Projects</a>
          <a href={personalInfo.contact.github} className="text-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={personalInfo.contact.email} className="text-link">Email</a>
        </nav>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   App
   ═══════════════════════════════════════════ */

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>
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
