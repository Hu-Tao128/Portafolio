import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t border-[#334155] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">AJH</h3>
            <p className="text-[#94a3b8] leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#f1f5f9] mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-[#94a3b8] hover:text-[#34d399] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#94a3b8] hover:text-[#34d399] transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[#94a3b8] hover:text-[#34d399] transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#94a3b8] hover:text-[#34d399] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#f1f5f9] mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#34d399] transition-colors"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.contact.email}
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#34d399] transition-colors"
              >
                <FaEnvelope size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#334155] mt-8 pt-8 text-center text-[#64748b]">
          <p>© {currentYear} Alcantara Huerta Angel Josue. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}