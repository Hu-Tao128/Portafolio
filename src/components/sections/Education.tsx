import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaCheckCircle } from 'react-icons/fa';
import { education } from '../../data';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Educación y Logros
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Trayectoria académica y reconocimientos en desarrollo de software
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#10b981] to-[#3b82f6] transform md:-translate-x-1/2" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`relative mb-12 md:mb-8 ${index % 2 === 0 ? 'md:pr-8 md:ml-auto md:w-1/2' : 'md:pl-8 md:mr-auto md:w-1/2'}`}
              >
                <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-[#10b981] to-[#3b82f6] border-4 border-[#020617] transform -translate-x-1/2 z-10 flex items-center justify-center">
                  {edu.id === 'competencias' ? (
                    <FaTrophy className="text-white text-sm" />
                  ) : (
                    <FaGraduationCap className="text-white text-sm" />
                  )}
                </div>

                <Card className="ml-12 md:ml-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#f1f5f9] mb-1">{edu.degree}</h3>
                      <p className="text-[#34d399] font-semibold">{edu.institution}</p>
                    </div>
                    <Badge variant={edu.status === 'in-progress' ? 'accent' : 'primary'}>
                      {edu.status === 'in-progress' ? 'En Curso' : 'Completado'}
                    </Badge>
                  </div>

                  <p className="text-[#94a3b8] text-sm mb-3">{edu.field}</p>
                  <p className="text-[#64748b] text-sm mb-4 flex items-center gap-2">
                    <FaCheckCircle />
                    {edu.period}
                  </p>

                  <p className="text-[#cbd5e1] text-sm mb-4 leading-relaxed">{edu.description}</p>

                  {edu.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-[#34d399] mb-2">Logros destacados:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement) => (
                          <li key={achievement} className="text-[#94a3b8] text-sm flex items-start gap-2">
                            <span className="text-[#60a5fa] mt-0.5">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}