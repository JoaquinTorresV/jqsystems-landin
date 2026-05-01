'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '30+', label: 'Proyectos entregados' },
  { value: '98%', label: 'Satisfacción de clientes' },
  { value: '5x',  label: 'ROI promedio' },
  { value: '24h', label: 'Tiempo de respuesta' },
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-primary/5 border-y border-primary/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-black text-primary">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
