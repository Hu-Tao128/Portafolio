import { useActionState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../../data';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ContactFormState {
  success: boolean;
  message: string;
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

async function sendEmail(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const errors: ContactFormState['errors'] = {};

    if (!name || name.trim().length < 2) {
      errors.name = ['El nombre debe tener al menos 2 caracteres'];
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = ['Por favor ingresa un email válido'];
    }

    if (!message || message.trim().length < 10) {
      errors.message = ['El mensaje debe tener al menos 10 caracteres'];
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, message: 'Por favor corrige los errores', errors };
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: '¡Mensaje enviado con éxito! Te responderé pronto.',
      errors: {},
    };
  } catch {
    return {
      success: false,
      message: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.',
      errors: {},
    };
  }
}

export function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmail, {
    success: false,
    message: '',
    errors: {},
  });

  return (
    <section id="contact" className="py-20 bg-[#0f172a]/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Contáctame
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            ¿Interesado en colaborar o tienes alguna pregunta? ¡Hablemos!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card glass>
              <h3 className="text-2xl font-bold mb-6 text-[#f1f5f9]">Información de Contacto</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#cbd5e1] mb-4 flex items-center gap-2">
                    <FaGithub className="text-[#34d399]" />
                    GitHub
                  </h4>
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94a3b8] hover:text-[#34d399] transition-colors block"
                  >
                    Hu-Tao128
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#cbd5e1] mb-4 flex items-center gap-2">
                    <FaEnvelope className="text-[#60a5fa]" />
                    Email
                  </h4>
                  <a
                    href={personalInfo.contact.email}
                    className="text-[#94a3b8] hover:text-[#34d399] transition-colors block"
                  >
                    angel.josue@utj.edu.mx
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#cbd5e1] mb-4">Ubicación</h4>
                  <p className="text-[#94a3b8]">{personalInfo.location}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#cbd5e1] mb-4">Disponibilidad</h4>
                  <Badge variant="primary">
                    {personalInfo.availability === 'open' ? 'Disponible para proyectos' : personalInfo.availability === 'busy' ? 'Ocupado' : 'Disponibilidad limitada'}
                  </Badge>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#334155]">
                <h4 className="text-lg font-semibold text-[#cbd5e1] mb-4">Sobre Mí</h4>
                <p className="text-[#94a3b8] leading-relaxed">
                  {personalInfo.about.split('\n').map((paragraph, index) => (
                    <span key={index} className="block mb-3">
                      {paragraph}
                    </span>
                  ))}
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card glass>
              <h3 className="text-2xl font-bold mb-6 text-[#f1f5f9]">Envíame un Mensaje</h3>

              <form action={formAction} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#cbd5e1] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#f1f5f9] focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                  {state.errors.name && (
                    <p className="mt-1 text-sm text-red-400">{state.errors.name[0]}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#cbd5e1] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#f1f5f9] focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                  {state.errors.email && (
                    <p className="mt-1 text-sm text-red-400">{state.errors.email[0]}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#cbd5e1] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#f1f5f9] focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all resize-none"
                    placeholder="Tu mensaje..."
                  />
                  {state.errors.message && (
                    <p className="mt-1 text-sm text-red-400">{state.errors.message[0]}</p>
                  )}
                </div>

                {state.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${state.success ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}
                  >
                    {state.message}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#10b981] to-[#3b82f6] hover:from-[#059669] hover:to-[#2563eb] text-white rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    'Enviando...'
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}