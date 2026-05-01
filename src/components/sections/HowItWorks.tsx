'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title:  'Diagnóstico gratuito',
    description:
      'Agendamos una llamada para entender tu negocio, tus procesos actuales y dónde la automatización tiene mayor impacto.',
  },
  {
    number: '02',
    title:  'Diseño de la solución',
    description:
      'Construimos un plan detallado con las automatizaciones e integraciones que vamos a implementar, con fechas y entregables claros.',
  },
  {
    number: '03',
    title:  'Implementación y entrega',
    description:
      'Desarrollamos, probamos y entregamos el sistema. Te capacitamos para usarlo y quedamos disponibles para cualquier ajuste.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
            Proceso
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Así trabajamos contigo
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Simple, transparente y sin sorpresas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Línea conectora desktop */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-accent/30 via-accent to-accent/30" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <span className="text-accent font-black text-lg">{s.number}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
