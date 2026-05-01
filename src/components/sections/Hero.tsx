'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookingModal from '@/components/BookingModal';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="robot-float robot-glow w-48 h-48 rounded-full bg-gradient-to-br from-accent/30 to-primary/40 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-accent/20 animate-pulse" />
      </div>
    </div>
  ),
});

interface Props {
  onServicesClick: () => void;
}

interface Particle { width: string; height: string; top: string; left: string; animationDelay: string; animation: string; }

function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    setParticles(Array.from({ length: 20 }, () => ({
      width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px`,
      top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      animation: `float ${Math.random() * 3 + 3}s ease-in-out infinite`,
    })));
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => <div key={i} className="absolute rounded-full bg-accent/20" style={p} />)}
    </div>
  );
}

const SPLINE_URL = 'https://prod.spline.design/hruM-HwSvm3tqO1A/scene.splinecode';

/* Glass card reutilizable */
function GlassCard({ icon, title, desc, cta, onClick }: {
  icon: React.ReactNode; title: string; desc: string; cta: string; onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group w-full bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-accent/40 rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.08)]"
    >
      <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
        {icon}
      </div>
      <p className="text-white font-bold text-base mb-1">{title}</p>
      <p className="text-white/40 text-xs leading-relaxed mb-5">{desc}</p>
      <div className="flex items-center gap-2 text-accent text-sm font-semibold">
        <span>{cta}</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.button>
  );
}

const CalendarIcon = () => (
  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
  </svg>
);

export default function Hero({ onServicesClick }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.section
        key="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="relative w-full h-screen min-h-[600px] overflow-hidden bg-hero-bg flex flex-col"
      >
        {/* Glow de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_55%,rgba(56,189,248,0.10)_0%,transparent_65%)] pointer-events-none" />
        <Particles />

        {/* Nav */}
        <div className="relative z-10 flex items-center justify-between px-6 md:px-16 pt-6 md:pt-8 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="text-white font-black text-xl md:text-2xl tracking-tight"
          >
            jq<span className="text-accent">system</span>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-accent/40 text-accent text-xs md:text-sm font-medium hover:bg-accent/10 transition-colors"
          >
            Contactar
          </motion.button>
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-center mt-4 md:mt-6 px-6 flex-shrink-0"
        >
          <p className="text-accent text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Automatización · IA · Sistemas a medida
          </p>
          <h1 className="text-2xl md:text-5xl font-black text-white leading-tight">
            El futuro de tu empresa<br className="hidden md:block" /> empieza hoy
          </h1>
        </motion.div>

        {/* ── DESKTOP: 3 columnas ─────────────────────── */}
        <div className="hidden md:grid relative z-10 flex-1 grid-cols-[280px_1fr_280px] items-center px-10 pb-10 gap-6">

          {/* Card izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            className="flex justify-end"
          >
            <div className="w-full max-w-[240px]">
              <GlassCard
                icon={<CalendarIcon />}
                title="Agendar llamada"
                desc="30 min. Te mostramos qué automatizaríamos en tu negocio."
                cta="Agenda aquí"
                onClick={() => setModalOpen(true)}
              />
            </div>
          </motion.div>

          {/* Robot */}
          <div className="relative h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(56,189,248,0.12)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10 w-full h-full">
              <Spline scene={SPLINE_URL} className="w-full h-full" />
            </div>
          </div>

          {/* Card derecha */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            className="flex justify-start"
          >
            <div className="w-full max-w-[240px]">
              <GlassCard
                icon={<ArrowIcon />}
                title="Ver servicios"
                desc="Chatbots, automatizaciones, CRMs y agentes IA a medida."
                cta="Explorar"
                onClick={onServicesClick}
              />
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE: robot + 2 botones compactos ────── */}
        <div className="flex md:hidden relative z-10 flex-col flex-1 pb-6 overflow-hidden">

          {/* Robot */}
          <div className="relative flex-1 min-h-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(56,189,248,0.12)_0%,transparent_70%)] pointer-events-none" />
            <Spline scene={SPLINE_URL} className="w-full h-full" />
          </div>

          {/* Dos botones compactos lado a lado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-3 px-6 pt-4 flex-shrink-0"
          >
            <motion.button
              onClick={() => setModalOpen(true)}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-hero-bg font-bold rounded-xl text-sm shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              <CalendarIcon />
              Agendar llamada
            </motion.button>
            <motion.button
              onClick={onServicesClick}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-accent/50 text-accent font-bold rounded-xl text-sm"
            >
              Ver servicios
              <span>→</span>
            </motion.button>
          </motion.div>
        </div>

      </motion.section>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
