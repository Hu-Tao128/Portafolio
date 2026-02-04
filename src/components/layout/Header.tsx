import { useState, useEffect } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { personalInfo } from '../../data';

export function Header() {
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
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Educación', href: '#education' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'glass-effect py-4 shadow-lg' : 'bg-transparent py-6'}
      `}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          AJH
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#94a3b8] hover:text-[#34d399] transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-[#34d399] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>

        <button
          className="md:hidden text-[#f1f5f9]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-[#334155]">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#94a3b8] hover:text-[#34d399] transition-colors font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#34d399] transition-colors font-medium text-lg flex items-center gap-2"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}