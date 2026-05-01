'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// URL del agente de voz ElevenLabs — reemplazar cuando Joaquin lo pase
const DEMO_URL = '#';

const services = [
  {
    icon: '🤖',
    title: 'Chatbots e IA Conversacional',
    description:
      'Agentes inteligentes que atienden clientes 24/7, responden consultas, califican leads y agendan reuniones — sin intervención humana.',
    tags: ['WhatsApp', 'Web', 'Instagram'],
  },
  {
    icon: '⚙️',
    title: 'Automatización de Procesos',
    description:
      'Eliminamos tareas repetitivas conectando tus sistemas: CRM, facturación, inventario, correos y notificaciones en un solo flujo automatizado.',
    tags: ['n8n', 'Make', 'Zapier'],
  },
  {
    icon: '📊',
    title: 'CRM Inteligente',
    description:
      'Sistema de gestión de clientes adaptado a tu negocio, con seguimiento automático, recordatorios y reportes en tiempo real.',
    tags: ['Custom', 'Supabase', 'Dashboard'],
  },
  {
    icon: '🔍',
    title: 'Captación de Leads con IA',
    description:
      'Automatizamos la búsqueda, calificación y contacto de prospectos. Tu equipo solo habla con los leads que ya están listos para comprar.',
    tags: ['Scraping', 'IA', 'Outreach'],
  },
  {
    icon: '🏢',
    title: 'Sistema Operativo de Agencia',
    description:
      'Infraestructura completa para agencias: gestión de proyectos, clientes, facturación y equipo en un solo lugar automatizado.',
    tags: ['SaaS', 'Multi-cliente', 'Reportes'],
  },
  {
    icon: '💰',
    title: 'Optimización de Ingresos',
    description:
      'Analizamos tus datos y automatizamos los puntos de contacto clave para maximizar conversiones, upsells y retención de clientes.',
    tags: ['Analytics', 'Email', 'IA'],
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Soluciones a medida para<br className="hidden md:block" /> cada tipo de empresa
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            No vendemos plantillas. Construimos sistemas que se adaptan exactamente a tu negocio.
          </p>
        </motion.div>

        {/* Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🎙️</span>
            <div className="text-left">
              <p className="text-sm font-black">Probar demo en vivo</p>
              <p className="text-xs text-white/60 font-normal">Habla con nuestro agente de IA</p>
            </div>
          </a>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative p-7 rounded-2xl border transition-all duration-300 cursor-default ${
                hovered === i
                  ? 'border-primary/40 bg-primary/5 shadow-lg -translate-y-1'
                  : 'border-gray-100 bg-white shadow-sm'
              }`}
            >
              <span className="text-4xl block mb-4">{s.icon}</span>
              <h3 className="text-lg font-bold text-primary mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
