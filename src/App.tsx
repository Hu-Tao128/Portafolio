import { useState, useEffect } from 'react';
import { FaGithub, FaBars, FaTimes, FaClock, FaStar, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { personalInfo, projects } from './data';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Arquitectura', href: '#architecture' },
    { name: 'Prácticas', href: '#practices' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s',
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      backgroundColor: isScrolled ? '#0F172A' : 'transparent',
      borderBottom: isScrolled ? '1px solid #1E293B' : 'none',
    }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <a href="#hero" style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#38BDF8',
          textDecoration: 'none',
          letterSpacing: '0.025em'
        }}>
          AJH
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{
              color: '#64748B',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }} onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>
              {link.name}
            </a>
          ))}
          <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" style={{
            color: '#64748B',
            transition: 'color 0.3s'
          }} onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>
            <FaGithub size={20} />
          </a>
        </div>

        <button style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#E2E8F0'
        }} className="md:flex" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#0F172A',
          borderTop: '1px solid #1E293B',
          padding: '1.5rem'
        }} className="md:hidden">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} style={{
                color: '#94A3B8',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.125rem',
                padding: '0.5rem 0'
              }} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" style={{
              color: '#94A3B8',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1.125rem',
              padding: '0.5rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }} onClick={() => setMobileMenuOpen(false)}>
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#0F172A',
      borderTop: '1px solid #1E293B',
      marginTop: '5rem'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }} className="md:grid-cols-3">
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#38BDF8', marginBottom: '0.5rem', letterSpacing: '0.025em' }}>
              AJH
            </h3>
            <p style={{ color: '#64748B', lineHeight: 1.5, marginBottom: '0.5rem' }}>
              {personalInfo.tagline}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.75rem', letterSpacing: '0.025em' }}>
              NAVEGACIÓN
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li><a href="#hero" style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.8125rem' }}>Inicio</a></li>
              <li><a href="#architecture" style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.8125rem' }}>Arquitectura</a></li>
              <li><a href="#practices" style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.8125rem' }}>Prácticas</a></li>
              <li><a href="#projects" style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.8125rem' }}>Proyectos</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.75rem', letterSpacing: '0.025em' }}>
              CONTACTO
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', textDecoration: 'none', fontSize: '0.8125rem' }}>
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.contact.email} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', textDecoration: 'none', fontSize: '0.8125rem' }}>
                <FaEnvelope size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #334155', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', color: '#475569', fontSize: '0.8125rem' }}>
          <p>© {currentYear} Alcantara Huerta Angel Josue. Backend & Mobile Developer.</p>
        </div>
      </div>
    </footer>
  );
}

function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem', position: 'relative', overflow: 'hidden', backgroundColor: '#0F172A' }}>
      <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#38BDF8', fontSize: '1rem', marginBottom: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {personalInfo.title}
          </p>

          <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: '#E2E8F0', lineHeight: 1.1 }} className="md:text-7xl">
            {personalInfo.name}
          </h1>

          <p style={{ fontSize: '1.125rem', color: '#94A3B8', marginBottom: '1.5rem', maxWidth: '384px', margin: '0 auto', lineHeight: 1.5 }} className="md:text-2xl">
            {personalInfo.tagline}
          </p>

          <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '2.5rem', maxWidth: '512px', margin: '0 auto', lineHeight: 1.6 }}>
            {personalInfo.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }} className="sm:flex-row">
            <a href="#projects" style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              background: '#38BDF8',
              color: 'white',
              textDecoration: 'none',
              letterSpacing: '0.025em'
            }} className="md:text-lg md:px-8 md:py-3">
              Ver Proyectos
            </a>
            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '0.5rem',
              border: '2px solid #38BDF8',
              color: '#38BDF8',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              letterSpacing: '0.025em'
            }} className="md:text-lg md:px-8 md:py-3">
              <FaGithub />
              GitHub
            </a>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['React Native', 'Node.js', 'TypeScript', 'MongoDB', 'MedusaJS', 'IoT', 'REST APIs'].map((skill) => (
              <span key={skill} style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#1E293B',
                color: '#E2E8F0',
                borderRadius: '0.25rem',
                border: '1px solid #334155',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.025em'
              }}>
                {skill}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#94A3B8', fontWeight: 500, letterSpacing: '0.025em' }}>
              Arquitectura REST · IoT · Headless Commerce
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" style={{ padding: '5rem 0', backgroundColor: '#0F172A' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#38BDF8', letterSpacing: '0.025em' }}>
          Arquitectura Backend & Mobile
        </h2>
        <p style={{ color: '#64748B', fontSize: '1rem', marginBottom: '3rem', lineHeight: 1.5 }}>
          Enfoque en separación de capas, APIs estructuradas y principios SOLID.
        </p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '0.5rem',
            padding: '2rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '1rem', letterSpacing: '0.025em' }}>
              SEPARACIÓN CLIENTE / SERVIDOR
            </h3>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.6 }}>
              <div style={{ margin: 0, whiteSpace: 'pre', backgroundColor: '#0F172A', padding: '1rem', borderRadius: '0.25rem', border: '1px solid #334155' }}>
Mobile App (React Native)
     ↓
Node.js / Express API
     ↓
MongoDB / Firebase / MedusaJS
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '0.5rem',
            padding: '2rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '1rem', letterSpacing: '0.025em' }}>
              APIs REST ESTRUCTURADAS
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem' }}>
                <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                <span>JWT Authentication</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem' }}>
                <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                <span>Middleware de validación</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem' }}>
                <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                <span>Error handling estructurado</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem' }}>
                <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                <span>Logging centralizado</span>
              </li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '0.5rem',
            padding: '2rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '1rem', letterSpacing: '0.025em' }}>
              MODULARIZACIÓN
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem' }}>
                <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                <span>Separación por capas (routes/services/models)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem' }}>
                <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                <span>Dependency injection</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem' }}>
                <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                <span>Plugin architecture (MedusaJS)</span>
              </li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '0.5rem',
            padding: '2rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '1rem', letterSpacing: '0.025em' }}>
              TESTING & CI/CD
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem' }}>
                <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                <span>Jest unit tests</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem' }}>
                <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                <span>React Native Testing Library</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem' }}>
                <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                <span>GitHub Actions CI/CD</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Practices() {
  return (
    <section id="practices" style={{ padding: '5rem 0', backgroundColor: '#0F172A' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#38BDF8', letterSpacing: '0.025em' }}>
          Prácticas de Ingeniería
        </h2>
        <p style={{ color: '#64748B', fontSize: '1rem', marginBottom: '3rem', lineHeight: 1.5 }}>
          Principios SOLID, Clean Code y procesos profesionales de desarrollo.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem' }} className="md:grid-cols-2">
          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.75rem', letterSpacing: '0.025em' }}>
              DISEÑO DE APIS REST
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>Endpoints RESTful:</strong> GET, POST, PUT, DELETE
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>Status codes:</strong> 200, 201, 400, 401, 500
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>JSON responses:</strong> Consistent data structures
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>Validation:</strong> Request body + Query params
              </li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.75rem', letterSpacing: '0.025em' }}>
              CLEAN CODE
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>Functions:</strong> Single responsibility
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>Variables:</strong> Descriptive names, no magic numbers
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>Comments:</strong> JSDoc for functions & classes
              </li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.75rem', letterSpacing: '0.025em' }}>
              PRINCIPIOS SOLID
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>S:</strong> Single Responsibility Principle
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>O:</strong> Open/Closed Principle
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>L:</strong> Liskov Substitution Principle
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>I:</strong> Interface Segregation Principle
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>D:</strong> Dependency Inversion Principle
              </li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.75rem', letterSpacing: '0.025em' }}>
              GIT FLOW
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>Branches:</strong> main, develop, feature/*
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>Commits:</strong> Conventional commits (feat:, fix:, docs:)
              </li>
              <li style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                <strong>PRs:</strong> Code reviews required before merge
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: '5rem 0', backgroundColor: '#0F172A' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#38BDF8', letterSpacing: '0.025em' }}>
            Proyectos con Arquitectura
          </h2>
          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '384px', margin: '0 auto' }}>
            Diseño técnico, estructura modular y criterio de ingeniería
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project) => (
            <div key={project.id} style={{
              backgroundColor: '#1E293B',
              borderRadius: '0.5rem',
              padding: '2rem',
              border: project.featured ? '2px solid #38BDF8' : '1px solid #334155'
            }}>
              {project.featured && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#38BDF8' }}>
                  <FaStar style={{ color: '#FBBF24', fontSize: '1.125rem' }} />
                  <span style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.025em' }}>
                    PROYECTO PRINCIPAL
                  </span>
                </div>
              )}

              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#38BDF8', letterSpacing: '0.025em' }}>
                {project.title}
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9375rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                {project.description}
              </p>

              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#94A3B8', marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#0F172A', borderRadius: '0.25rem', border: '1px solid #334155' }}>
                <div style={{ margin: 0, whiteSpace: 'pre', color: '#64748B' }}>
{project.title}
{project.techStack.map(t => ` → ${t}`).join('\n')}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }} className="md:grid-cols-2">
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#38BDF8', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Arquitectura
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {project.technicalDetails.keyFeatures.slice(0, 8).map((feature) => (
                      <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                        <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#38BDF8', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Criterio Técnico
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {project.technicalDetails.demonstrates.map((demo) => (
                      <li key={demo} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                        <span style={{ color: '#38BDF8', fontWeight: 600, minWidth: '1rem' }}>✓</span>
                        <span>{demo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #334155' }}>
                <span style={{ color: '#64748B', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaClock />
                  {project.period}
                </span>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  backgroundColor: project.status === 'completed' ? '#38BDF8' : '#1E293B',
                  color: project.status === 'completed' ? 'white' : '#94A3B8',
                  borderRadius: '0.25rem',
                  border: project.status === 'completed' ? 'none' : '1px solid #334155',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.025em'
                }}>
                  {project.status === 'completed' ? 'COMPLETADO' : project.status === 'in-progress' ? 'EN PROGRESO' : 'PROTOTIPO'}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #334155' }}>
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#38BDF8',
                    color: 'white',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    letterSpacing: '0.025em'
                  }}>
                    <FaGithub />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: '5rem 0', backgroundColor: '#0F172A' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#38BDF8', letterSpacing: '0.025em' }}>
            Contacto
          </h2>
          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '384px', margin: '0 auto' }}>
            Disponible para oportunidades como Backend Engineer o Mobile Developer Senior
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }} className="lg:grid-cols-2">
          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '0.5rem',
            padding: '2rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '1.5rem' }}>
              Información de Contacto
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94A3B8', textDecoration: 'none' }}>
                  <FaGithub style={{ color: '#38BDF8', fontSize: '1.25rem' }} />
                  <div style={{ marginLeft: '0.5rem' }}>
                    <div style={{ fontWeight: 600, color: '#E2E8F0', fontSize: '0.875rem', marginBottom: '0.25rem' }}>GitHub</div>
                    <div style={{ color: '#64748B', fontSize: '0.875rem' }}>Hu-Tao128</div>
                  </div>
                </a>
              </div>

              <div>
                <a href={personalInfo.contact.email} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94A3B8', textDecoration: 'none' }}>
                  <FaEnvelope style={{ color: '#38BDF8', fontSize: '1.25rem' }} />
                  <div style={{ marginLeft: '0.5rem' }}>
                    <div style={{ fontWeight: 600, color: '#E2E8F0', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Email</div>
                    <div style={{ color: '#64748B', fontSize: '0.875rem' }}>angel.josue@utj.edu.mx</div>
                  </div>
                </a>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.75rem' }}>
                  Ubicación
                </h4>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  {personalInfo.location}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.75rem' }}>
                  Disponibilidad
                </h4>
                <span style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#38BDF8',
                  color: 'white',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.025em',
                  display: 'inline-block'
                }}>
                  Disponible para proyectos
                </span>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #334155' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '1rem' }}>
                Sobre Mí
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                {personalInfo.about}
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: '#1E293B',
            borderRadius: '0.5rem',
            padding: '2rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '1.5rem' }}>
              Envíame un Mensaje
            </h3>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#E2E8F0', marginBottom: '0.5rem' }}>
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    backgroundColor: '#0F172A',
                    border: '1px solid #334155',
                    borderRadius: '0.5rem',
                    color: '#E2E8F0',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#E2E8F0', marginBottom: '0.5rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    backgroundColor: '#0F172A',
                    border: '1px solid #334155',
                    borderRadius: '0.5rem',
                    color: '#E2E8F0',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#E2E8F0', marginBottom: '0.5rem' }}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe tu oportunidad o proyecto..."
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    backgroundColor: '#0F172A',
                    border: '1px solid #334155',
                    borderRadius: '0.5rem',
                    color: '#E2E8F0',
                    fontSize: '0.875rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.875rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  background: '#38BDF8',
                  color: 'white',
                  letterSpacing: '0.025em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>Enviar</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0F172A', color: '#E2E8F0', fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', margin: 0 }}>
      <Header />
      <main>
        <Hero />
        <Architecture />
        <Practices />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;