'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from '@/components/BookingModal';

interface Props {
  onBack: () => void;
}

// URL demo ElevenLabs — reemplazar cuando Joaquin lo pase
const DEMO_URL = '#';

const services = [
  { icon: '🤖', title: 'Chatbots IA',         description: 'Agentes que atienden, califican y agendan 24/7 sin intervención humana.',        tags: ['WhatsApp', 'Web', 'Instagram'] },
  { icon: '⚙️', title: 'Automatización',       description: 'Conectamos tus sistemas para eliminar tareas repetitivas de tu equipo.',           tags: ['n8n', 'Make', 'API']          },
  { icon: '📊', title: 'CRM Inteligente',       description: 'Seguimiento de clientes, recordatorios y reportes en tiempo real, adaptados a ti.',tags: ['Custom', 'Dashboard', 'DB']   },
  { icon: '🔍', title: 'Captación de Leads',   description: 'Búsqueda, calificación y contacto automático. Tu equipo habla solo con los listos.',tags: ['Scraping', 'IA', 'Outreach']  },
  { icon: '🏢', title: 'Agency OS',             description: 'Infraestructura completa para agencias: proyectos, clientes y facturación unified.',tags: ['SaaS', 'Multi-cliente']       },
  { icon: '💰', title: 'Revenue Flow',          description: 'Maximizamos conversiones y retención automatizando cada punto de contacto clave.',  tags: ['Analytics', 'Email', 'IA']    },
];

const steps = [
  { n: '01', title: 'Diagnóstico',    desc: 'Llamada para entender tu negocio y detectar dónde la IA tiene mayor impacto.' },
  { n: '02', title: 'Diseño',         desc: 'Plan detallado con automatizaciones, integraciones, fechas y entregables claros.' },
  { n: '03', title: 'Implementación', desc: 'Construimos, probamos y entregamos. Capacitación incluida y soporte post-entrega.' },
];

const faqs = [
  { q: '¿Necesito conocimientos técnicos?',           a: 'No. Diseñamos todo para ser fácil desde el día uno. Incluye capacitación completa.' },
  { q: '¿Cuánto tiempo tarda la implementación?',     a: '2 a 4 semanas para proyectos estándar. Proyectos complejos hasta 8 semanas.' },
  { q: '¿Trabajan con empresas de cualquier tamaño?', a: 'Sí. Desde emprendedores hasta equipos de 50+ personas. Las soluciones escalan.' },
  { q: '¿Se integra con las herramientas que ya uso?', a: 'Absolutamente. Si tiene API, lo conectamos: CRM, ERP, WhatsApp, email y más.' },
];

interface Particle { width: string; height: string; top: string; left: string; animationDelay: string; animation: string; }

function Particles() {
  const [p, setP] = useState<Particle[]>([]);
  useEffect(() => {
    setP(Array.from({ length: 15 }, () => ({
      width: `${Math.random() * 3 + 1}px`, height: `${Math.random() * 3 + 1}px`,
      top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      animation: `float ${Math.random() * 3 + 3}s ease-in-out infinite`,
    })));
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {p.map((pt, i) => <div key={i} className="absolute rounded-full bg-accent/15" style={pt} />)}
    </div>
  );
}

export default function ServicesPanel({ onBack }: Props) {
  const [modalOpen, setModalOpen]   = useState(false);
  const [openFaq,   setOpenFaq]     = useState<number | null>(null);
  const [hoveredService, setHovered] = useState<number | null>(null);

  return (
    <>
      <motion.div
        key="services-panel"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 bg-hero-bg flex flex-col overflow-hidden"
      >
        <Particles />

        {/* Gradiente top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(56,189,248,0.07)_0%,transparent_70%)] pointer-events-none" />

        {/* Nav bar */}
        <div className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/5 flex-shrink-0">
          <motion.button
            onClick={onBack}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium"
          >
            <span className="text-lg">←</span>
            <span>Volver</span>
          </motion.button>

          <div className="text-white font-black text-xl tracking-tight">
            jq<span className="text-accent">system</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 border border-white/15 text-white/70 hover:text-white hover:border-white/30 rounded-xl text-sm font-medium transition-all"
            >
              <span>🎙️</span> Demo en vivo
            </a>
            <motion.button
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 bg-accent text-hero-bg font-bold rounded-xl text-sm shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              Agendar llamada
            </motion.button>
          </div>
        </div>

        {/* Contenido scrolleable */}
        <div className="relative z-10 flex-1 overflow-y-auto">

          {/* ── SERVICIOS ─────────────────────────────────── */}
          <section className="px-6 md:px-12 pt-12 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-12"
            >
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">Servicios</p>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
                Soluciones a medida
              </h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto">
                No vendemos plantillas. Construimos lo que tu negocio necesita exactamente.
              </p>
            </motion.div>

            {/* Demo mobile */}
            <div className="flex justify-center mb-10 md:hidden">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white/15 text-white/70 rounded-xl text-sm font-medium"
              >
                <span>🎙️</span> Probar demo
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                    hoveredService === i
                      ? 'border-accent/40 bg-accent/5 shadow-[0_0_30px_rgba(56,189,248,0.1)] -translate-y-1'
                      : 'border-white/8 bg-white/3'
                  }`}
                >
                  <span className="text-3xl block mb-3">{s.icon}</span>
                  <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── CÓMO FUNCIONA ─────────────────────────────── */}
          <section className="px-6 md:px-12 py-16 border-t border-white/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">Proceso</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">Así trabajamos contigo</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-5">
                    <span className="text-accent font-black text-lg">{s.n}</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── FAQ ───────────────────────────────────────── */}
          <section className="px-6 md:px-12 py-16 border-t border-white/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">Preguntas frecuentes</h2>
            </motion.div>

            <div className="max-w-2xl mx-auto flex flex-col gap-2">
              {faqs.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border border-white/8 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="text-white/80 font-medium text-sm pr-4">{f.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      className="text-accent text-2xl font-light flex-shrink-0"
                    >+</motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-4 text-white/40 text-sm leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── CTA FINAL ─────────────────────────────────── */}
          <section className="px-6 md:px-12 py-20 border-t border-white/5">
            <div className="relative max-w-2xl mx-auto text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(56,189,248,0.08)_0%,transparent_70%)] pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-accent text-xs font-bold tracking-widest uppercase mb-4">¿Listo?</p>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
                  Tu empresa en<br />piloto automático
                </h2>
                <p className="text-white/40 mb-10 leading-relaxed">
                  30 minutos. Te mostramos exactamente qué automatizaríamos en tu negocio.
                </p>
                <motion.button
                  onClick={() => setModalOpen(true)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-5 bg-accent text-hero-bg text-lg font-black rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.4)] hover:shadow-[0_0_60px_rgba(56,189,248,0.6)] transition-all duration-300"
                >
                  Agendar llamada gratuita →
                </motion.button>
                <p className="text-white/20 text-xs mt-4">Sin compromiso · Respuesta en menos de 24h</p>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-white/5 px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white font-black">jq<span className="text-accent">system</span></p>
            <p className="text-white/20 text-xs">© {new Date().getFullYear()} jqsystem — Todos los derechos reservados</p>
            <div className="flex gap-4 text-white/20 text-xs">
              <a href="#" className="hover:text-white/50 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white/50 transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </motion.div>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
