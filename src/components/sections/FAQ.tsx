'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: '¿Necesito conocimientos técnicos para usar los sistemas que construyen?',
    a: 'No. Diseñamos todo para que sea fácil de usar desde el primer día. Te entregamos capacitación completa y soporte continuo para que tu equipo adopte la herramienta sin fricción.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'Depende del alcance, pero la mayoría de proyectos están listos en 2 a 4 semanas. Proyectos más complejos pueden tomar hasta 8 semanas. Siempre fijamos plazos claros antes de empezar.',
  },
  {
    q: '¿Trabajan con empresas de cualquier tamaño?',
    a: 'Sí. Trabajamos desde emprendedores con pequeños negocios hasta empresas con equipos de 50+ personas. Las soluciones se adaptan a cada escala y presupuesto.',
  },
  {
    q: '¿Qué pasa si algo falla después de la entrega?',
    a: 'Incluimos soporte post-entrega en todos los proyectos. Dependiendo del plan, puede ser 1 mes de soporte gratuito o un acuerdo de mantenimiento continuo.',
  },
  {
    q: '¿Puedo integrar los sistemas con herramientas que ya uso?',
    a: 'Absolutamente. Nos integramos con CRMs, ERPs, plataformas de e-commerce, calendarios, WhatsApp, email, y más. Si tiene API, lo podemos conectar.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-primary text-sm pr-4">{f.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-accent text-2xl font-light flex-shrink-0"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
