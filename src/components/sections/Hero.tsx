import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../../data';
import { Button } from '../ui/Button';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#34d399] text-lg mb-4 font-medium">
              {personalInfo.title}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#cbd5e1] mb-8 max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#94a3b8] text-lg mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button onClick={scrollToProjects} size="lg">
              Ver Proyectos
            </Button>
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-[#10b981] text-[#10b981] hover:border-[#059669] hover:bg-[#1e293b] transition-all duration-300 flex items-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {['React Native', 'Node.js', 'TypeScript', 'MongoDB', 'MedusaJS', 'IoT'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[#1e293b]/80 text-[#cbd5e1] rounded-full border border-[#334155] text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <button
          onClick={scrollToProjects}
          className="text-[#34d399] hover:text-[#10b981] transition-colors"
          aria-label="Scroll to projects"
        >
          <FaArrowDown size={32} />
        </button>
      </motion.div>
    </section>
  );
}