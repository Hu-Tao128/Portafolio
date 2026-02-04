import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaDatabase, FaLaptopCode, FaMicrochip, FaVial, FaPaintBrush } from 'react-icons/fa';
import { skills, skillCategories } from '../../data';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

const iconMap: Record<string, React.ElementType> = {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaMicrochip,
  FaVial,
  FaPaintBrush,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Habilidades Técnicas
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Stack tecnológico diversificado con enfoque en desarrollo full-stack móvil y backend
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <Card hover className="h-full">
                <div className="bg-gradient-to-r from-[#10b981]/20 to-[#3b82f6]/20 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <span className="text-sm text-[#94a3b8] capitalize">{category.level}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="secondary" size="sm">
                      {skill}
                    </Badge>
                  ))}
                  {category.skills.length > 4 && (
                    <Badge variant="dark" size="sm">
                      +{category.skills.length - 4}
                    </Badge>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center text-[#f1f5f9]"
        >
          Stack Completo
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div key={skill.category} variants={itemVariants}>
                <Card hover>
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && <Icon className="text-[#34d399] text-2xl" />}
                    <h4 className="text-lg font-semibold text-[#f1f5f9]">{skill.category}</h4>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <span className="text-[#cbd5e1] text-sm">{item.name}</span>
                        <Badge
                          variant={item.level === 'expert' ? 'primary' : item.level === 'advanced' ? 'secondary' : 'dark'}
                          size="sm"
                        >
                          {item.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}