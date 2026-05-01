'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name:    'Carlos Mendoza',
    role:    'CEO — Clínica Bienestar',
    quote:
      'Implementaron un chatbot que atiende a nuestros pacientes las 24 horas. El 70% de las consultas se resuelven sin intervención humana. Increíble.',
    avatar: 'CM',
  },
  {
    name:    'Valentina Torres',
    role:    'Directora — Agencia Impulsa',
    quote:
      'Automatizaron todo nuestro proceso de onboarding de clientes. Lo que antes nos tomaba 2 horas por cliente, ahora es automático.',
    avatar: 'VT',
  },
  {
    name:    'Roberto Silva',
    role:    'Dueño — Distribuidora RS',
    quote:
      'El CRM que construyeron nos da visibilidad total del negocio en tiempo real. Nunca habíamos tenido eso.',
    avatar: 'RS',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
            Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary">
            Lo que dicen quienes<br className="hidden md:block" /> ya automatizaron
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="text-accent text-4xl font-black mb-4 leading-none">"</div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-primary font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
