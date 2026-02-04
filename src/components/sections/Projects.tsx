import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaClock, FaStar } from 'react-icons/fa';
import { projects } from '../../data';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0f172a]/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Proyectos Destacados
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Proyectos completos que demuestran experiencia real en desarrollo full-stack, IoT y e-commerce
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card
                hover
                glass
                className={`${project.featured ? 'border-[#10b981]/30 shadow-lg shadow-[#10b981]/10' : ''}`}
              >
                {project.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <FaStar className="text-yellow-400" />
                    <span className="text-yellow-400 font-semibold text-sm">PROYECTO DESTACADO</span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold mb-3 gradient-text">{project.title}</h3>
                    <p className="text-[#cbd5e1] mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <span className="flex items-center gap-2 text-[#94a3b8] text-sm">
                        <FaClock />
                        {project.period}
                      </span>
                      <Badge variant={project.status === 'completed' ? 'primary' : 'dark'} size="sm">
                        {project.status === 'completed' ? 'Completado' : project.status === 'in-progress' ? 'En Progreso' : 'Prototipo'}
                      </Badge>
                    </div>

                    <div className="flex gap-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-[#334155] text-white rounded-lg transition-colors font-medium"
                        >
                          <FaGithub />
                          GitHub
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#10b981] to-[#3b82f6] hover:from-[#059669] hover:to-[#2563eb] text-white rounded-lg transition-colors font-medium"
                        >
                          <FaExternalLinkAlt />
                          Demo en Vivo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#34d399] mb-2 uppercase tracking-wider">
                        ¿Qué hice técnicamente?
                      </h4>
                      <ul className="space-y-2">
                        {project.technicalDetails.keyFeatures.map((feature) => (
                          <li key={feature} className="text-[#cbd5e1] text-sm flex items-start gap-2">
                            <span className="text-[#60a5fa] mt-1">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#34d399] mb-2 uppercase tracking-wider">
                        ¿Qué demuestra?
                      </h4>
                      <ul className="space-y-2">
                        {project.technicalDetails.demonstrates.map((demo) => (
                          <li key={demo} className="text-[#cbd5e1] text-sm flex items-start gap-2">
                            <span className="text-[#10b981] mt-1">✓</span>
                            <span>{demo}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}