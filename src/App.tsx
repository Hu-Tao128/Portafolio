import { useState, type ReactNode } from 'react';
import { FaArrowRight, FaBars, FaEnvelope, FaFileDownload, FaGithub, FaTimes } from 'react-icons/fa';
import { education, personalInfo, projects } from './data';

const navLinks = [
  { name: 'Stack', href: '#technical-stack' },
  { name: 'Architecture', href: '#architecture-approach' },
  { name: 'Projects', href: '#projects' },
  { name: 'Practices', href: '#engineering-practices' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const stackLayers = [
  { title: 'Backend', tools: ['Spring Boot', 'Node.js', 'Express', 'Java', 'TypeScript'] },
  { title: 'Databases', tools: ['PostgreSQL', 'MongoDB', 'pgvector', 'Firebase'] },
  { title: 'Mobile', tools: ['React Native', 'Expo', 'Bluetooth', 'IoT Integration'] },
  { title: 'DevOps', tools: ['GitHub Actions', 'Jest', 'Testing Library', 'Rate Limiting'] },
  { title: 'Infrastructure', tools: ['Docker', 'OAuth2/JWT', 'Supabase Auth', 'Environment Isolation'] },
];

const architecturePrinciples = [
  'Controller -> Service -> Repository boundaries keep responsibilities explicit.',
  'DTO contracts isolate transport models from domain evolution.',
  'Validation and error middleware standardize API behavior.',
  'Security is enforced at gateway and resource-server layers.',
  'Domain logic stays framework-agnostic for portability.',
];

const architectureFlow = [
  'Client Request',
  'Validation Layer',
  'Controller Layer',
  'Domain Services',
  'Data Access Layer',
  'Relational / Document Storage',
];

const engineeringPractices = [
  {
    title: 'Contract-First APIs',
    description: 'Endpoints are designed from explicit request and response contracts before implementation.',
  },
  {
    title: 'Layered Reviews',
    description: 'PR reviews validate boundaries between transport, domain logic, and persistence.',
  },
  {
    title: 'Testing Baseline',
    description: 'Unit and integration tests cover business-critical paths and failure handling.',
  },
  {
    title: 'Operational Readiness',
    description: 'Rate limiting, logs, and environment separation are included early in delivery.',
  },
  {
    title: 'Incremental CI',
    description: 'Lint, build, and test gates run on each pull request for stable integration.',
  },
  {
    title: 'Documentation Discipline',
    description: 'Architecture notes and API decisions are tracked to support long-term maintenance.',
  },
];

function SectionWrapper({
  children,
  variant = 'dark',
}: {
  children: ReactNode;
  variant?: 'dark' | 'soft';
}) {
  return (
    <section className={`py-28 ${variant === 'soft' ? 'bg-surface-soft' : 'bg-surface-primary'}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-surface-card border border-border rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40">
      {children}
    </div>
  );
}

function SectionHeading({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <header className="mb-14">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400">{description}</p>
    </header>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-surface-primary/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="font-mono text-sm tracking-wide text-accent">
          {'<BackendMobile />'}
        </a>
        <nav className="hidden gap-8 text-sm text-slate-400 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="transition-colors hover:text-slate-100">
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className="text-slate-300 transition-colors hover:text-accent md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-border bg-surface-primary px-6 py-4 text-sm text-slate-400 md:hidden" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const primaryBtn =
    'inline-flex items-center gap-2 rounded-lg border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5';
  const secondaryBtn =
    'inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-accent hover:text-slate-100';

  return (
    <section id="hero" className="bg-surface-primary px-6 pb-24 pt-36 sm:pt-40">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Backend and Mobile Developer</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Building reliable product architecture from API contracts to mobile delivery.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400">
            I design layered systems with predictable data flow, maintainable backend services, and mobile clients that stay stable under real-world conditions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#projects" className={primaryBtn}>
              View Projects
              <FaArrowRight size={12} />
            </a>
            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
              <FaGithub size={12} />
              GitHub
            </a>
            <a href="/Alcantara-Huerta-Angel-Josue-CV.txt" download className={secondaryBtn}>
              <FaFileDownload size={12} />
              Download CV
            </a>
          </div>
        </div>

        <aside>
          <Card>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">Current Focus</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-slate-300">
              <li>API architecture for modular business domains.</li>
              <li>Hybrid persistence patterns (SQL and document stores).</li>
              <li>Mobile-to-backend integrations with IoT data streams.</li>
              <li>CI-driven quality gates and service reliability.</li>
            </ul>
          </Card>
        </aside>
      </div>
    </section>
  );
}

function TechnicalStack() {
  return (
    <div id="technical-stack" aria-labelledby="technical-stack-title">
      <SectionHeading
        label="Capabilities"
        title="Technical Stack"
        description="Technology grouped by architecture layer to show how systems are built end-to-end."
      />
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
        {stackLayers.map((layer) => (
          <article key={layer.title}>
            <Card>
              <h3 className="text-base font-semibold text-slate-100">{layer.title}</h3>
              <div className="my-4 h-px bg-border" />
              <ul className="flex flex-col gap-3 text-sm text-slate-300">
                {layer.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </Card>
          </article>
        ))}
      </div>
    </div>
  );
}

function ArchitectureApproach() {
  return (
    <div id="architecture-approach" aria-labelledby="architecture-title">
      <SectionHeading
        label="System Design"
        title="Architecture Approach"
        description="Layered architecture is used to keep backend services predictable, testable, and portable across frameworks."
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <article>
          <Card>
            <h3 className="text-base font-semibold text-slate-100">Layered Principles</h3>
            <div className="my-4 h-px bg-border" />
            <ul className="flex flex-col gap-3 text-sm leading-relaxed text-slate-300">
              {architecturePrinciples.map((principle) => (
                <li key={principle} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </Card>
        </article>

        <article>
          <Card>
            <h3 className="text-base font-semibold text-slate-100">Request Lifecycle Diagram</h3>
            <div className="my-4 h-px bg-border" />
            <div className="flex flex-col gap-3">
              {architectureFlow.map((step, index) => (
                <div key={step} className="relative pl-5">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm text-slate-300">{step}</p>
                  {index < architectureFlow.length - 1 && <div className="ml-1 mt-2 h-4 w-px bg-border" />}
                </div>
              ))}
            </div>
          </Card>
        </article>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const decisions = project.technicalDetails.solutions.slice(0, 3);
  const architecture = project.technicalDetails.architecture.slice(0, 4);

  return (
    <article>
      <Card>
        <div className="flex h-full flex-col gap-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{project.period}</p>
            </div>
            <span
              className={`rounded-full border px-3 py-1 text-xs ${
                project.status === 'in-progress'
                  ? 'border-accent/50 bg-accent/15 text-accent'
                  : 'border-border bg-slate-800/60 text-slate-400'
              }`}
            >
              {project.status === 'in-progress' ? 'In progress' : 'Completed'}
            </span>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">Problem</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.description}</p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">Architecture</p>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-border bg-surface-primary p-6 text-xs leading-relaxed text-slate-400">
              {architecture.join('\n')}
            </pre>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">Tech Stack</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack.slice(0, 6).map((tech) => (
                <span key={tech} className="rounded-md border border-border bg-surface-primary px-2.5 py-1 text-xs text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">Technical Decisions</p>
            <ul className="mt-2 flex flex-col gap-3 text-sm text-slate-300">
              {decisions.map((decision) => (
                <li key={decision} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.links?.github && (
            <div className="pt-2">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent/80"
              >
                <FaGithub size={14} />
                View Repository
                <FaArrowRight size={10} />
              </a>
            </div>
          )}
        </div>
      </Card>
    </article>
  );
}

function Projects() {
  return (
    <div id="projects" aria-labelledby="projects-title">
      <SectionHeading
        label="Portfolio"
        title="Projects"
        description="Each project is presented from a system design perspective: problem, architecture, stack, and decisions."
      />
      <div className="grid gap-10 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function EngineeringPractices() {
  return (
    <div id="engineering-practices" aria-labelledby="engineering-practices-title">
      <SectionHeading
        label="Quality"
        title="Engineering Practices"
        description="Delivery process centered on maintainability, reliability, and measurable system behavior."
      />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {engineeringPractices.map((practice) => (
          <article key={practice.title}>
            <Card>
              <h3 className="text-sm font-semibold text-slate-100">{practice.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{practice.description}</p>
            </Card>
          </article>
        ))}
      </div>
    </div>
  );
}

function Education() {
  return (
    <div id="education" aria-labelledby="education-title">
      <SectionHeading label="Background" title="Education" description="Academic training and applied software engineering outcomes." />
      <div className="grid gap-10">
        {education.map((item) => (
          <article key={item.id}>
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-100">{item.degree}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.institution}</p>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs ${
                    item.status === 'in-progress'
                    ? 'border-accent/50 bg-accent/15 text-accent'
                    : 'border-border bg-slate-800/60 text-slate-400'
                  }`}
                >
                  {item.period}
                </span>
              </div>
              <div className="my-4 h-px bg-border" />
              <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
            </Card>
          </article>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const actionBtn =
    'inline-flex items-center justify-start gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-accent hover:text-slate-100';

  return (
    <div id="contact" aria-labelledby="contact-title">
      <SectionHeading
        label="Collaboration"
        title="Contact"
        description="Open to backend and mobile opportunities with architecture, API, and integration challenges."
      />
      <div className="mx-auto max-w-4xl">
        <Card>
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Preferred Channels</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-100">Let us discuss your system requirements.</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                I usually collaborate on API architecture, backend refactors, and mobile integration with cloud services.
              </p>
            </div>
            <div className="grid gap-3">
              <a href={`mailto:${personalInfo.contact.email}`} className={actionBtn} aria-label="Send an email">
                <FaEnvelope size={12} />
                {personalInfo.contact.email}
              </a>
              <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className={actionBtn}>
                <FaGithub size={12} />
                github.com/Hu-Tao128
              </a>
              <p className="pt-1 text-xs text-slate-500">Location: {personalInfo.location}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface-primary">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{personalInfo.name} | Backend and Mobile Developer</p>
        <div className="flex items-center gap-4">
          <a href="#technical-stack" className="transition-colors hover:text-slate-300">
            Stack
          </a>
          <a href="#projects" className="transition-colors hover:text-slate-300">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-slate-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-surface-primary text-slate-200 font-sans">
      <Header />
      <main>
        <Hero />
        <SectionWrapper variant="soft">
          <TechnicalStack />
        </SectionWrapper>
        <SectionWrapper variant="dark">
          <ArchitectureApproach />
        </SectionWrapper>
        <SectionWrapper variant="soft">
          <Projects />
        </SectionWrapper>
        <SectionWrapper variant="dark">
          <EngineeringPractices />
        </SectionWrapper>
        <SectionWrapper variant="soft">
          <Education />
        </SectionWrapper>
        <SectionWrapper variant="dark">
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default App;
