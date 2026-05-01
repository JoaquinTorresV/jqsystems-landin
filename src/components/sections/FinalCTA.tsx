'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from '@/components/BookingModal';

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="contacto" className="py-24 md:py-32 px-6 bg-hero-bg relative overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-6 px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/20">
              ¿Listo para automatizar?
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Tu empresa en piloto automático
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
              Agenda una llamada gratuita. En 30 minutos te mostramos exactamente qué automatizaríamos en tu negocio y cuánto tiempo y dinero te ahorraría.
            </p>

            <motion.button
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-5 bg-accent text-hero-bg text-xl font-black rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.5)] hover:shadow-[0_0_60px_rgba(56,189,248,0.7)] transition-all duration-300"
            >
              Agendar llamada gratuita →
            </motion.button>

            <p className="text-white/30 text-sm mt-4">Sin compromiso · Respuesta en menos de 24h</p>
          </motion.div>
        </div>
      </section>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
