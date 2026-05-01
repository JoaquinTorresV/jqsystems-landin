'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  open: boolean;
  onClose: () => void;
}

const NICHES = [
  'Clínica / Centro médico',
  'Restaurante / Gastronomía',
  'Inmobiliaria / Bienes raíces',
  'E-commerce / Tienda online',
  'Agencia / Consultora',
  'Estudio contable / Legal',
  'Educación / Academia',
  'Otro',
];

const BUDGETS = [
  'Menos de $500 USD',
  '$500 – $2.000 USD',
  '$2.000 – $5.000 USD',
  '$5.000 – $10.000 USD',
  'Más de $10.000 USD',
];

interface FormData {
  niche:  string;
  budget: string;
  name:   string;
  phone:  string;
}

const EMPTY: FormData = { niche: '', budget: '', name: '', phone: '' };

export default function BookingModal({ open, onClose }: Props) {
  const [step, setStep]     = useState(1);
  const [form, setForm]     = useState<FormData>(EMPTY);
  const [loading, setLoading] = useState(false);

  function reset() {
    setStep(1);
    setForm(EMPTY);
    onClose();
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Error al guardar');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setStep(4);
    }
  }

  const canNext: Record<number, boolean> = {
    1: !!form.niche,
    2: !!form.budget,
    3: !!form.name && !!form.phone,
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={reset}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-hero-bg border border-accent/20 rounded-3xl p-8 shadow-[0_0_80px_rgba(56,189,248,0.15)]">

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-white font-bold text-xl">Agendar llamada</h2>
                  {step < 4 && (
                    <p className="text-white/40 text-sm mt-0.5">Paso {step} de 3</p>
                  )}
                </div>
                <button
                  onClick={reset}
                  className="text-white/40 hover:text-white transition-colors text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              {/* Progress bar */}
              {step < 4 && (
                <div className="h-1 bg-white/10 rounded-full mb-8">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}

              {/* Steps */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <Step key="step1">
                    <StepTitle>¿Cuál es el rubro de tu empresa?</StepTitle>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {NICHES.map(n => (
                        <button
                          key={n}
                          onClick={() => setForm(f => ({ ...f, niche: n }))}
                          className={`px-3 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                            form.niche === n
                              ? 'bg-accent text-hero-bg'
                              : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </Step>
                )}

                {step === 2 && (
                  <Step key="step2">
                    <StepTitle>¿Cuánto estás dispuesto a invertir en automatizar e integrar IA en tu empresa?</StepTitle>
                    <div className="flex flex-col gap-2 mt-4">
                      {BUDGETS.map(b => (
                        <button
                          key={b}
                          onClick={() => setForm(f => ({ ...f, budget: b }))}
                          className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                            form.budget === b
                              ? 'bg-accent text-hero-bg'
                              : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </Step>
                )}

                {step === 3 && (
                  <Step key="step3">
                    <StepTitle>¿Cómo te contactamos?</StepTitle>
                    <div className="flex flex-col gap-4 mt-4">
                      <div>
                        <label className="text-white/60 text-xs font-medium block mb-1.5">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          placeholder="Juan García"
                          className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-accent/60 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-white/60 text-xs font-medium block mb-1.5">
                          Número de teléfono (WhatsApp)
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          placeholder="+56 9 1234 5678"
                          className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-accent/60 transition-colors"
                        />
                      </div>
                    </div>
                  </Step>
                )}

                {step === 4 && (
                  <Step key="step4">
                    <div className="text-center py-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 12 }}
                        className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-6"
                      >
                        <span className="text-4xl">✓</span>
                      </motion.div>
                      <h3 className="text-white font-bold text-xl mb-2">¡Todo listo, {form.name.split(' ')[0]}!</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Te contactaremos por WhatsApp al <span className="text-accent font-medium">{form.phone}</span> dentro de las próximas 24 horas para coordinar tu llamada.
                      </p>
                    </div>
                  </Step>
                )}
              </AnimatePresence>

              {/* Botones de navegación */}
              {step < 4 && (
                <div className="flex gap-3 mt-8">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(s => s - 1)}
                      className="px-5 py-3 rounded-xl text-white/50 hover:text-white border border-white/10 hover:border-white/20 text-sm font-medium transition-colors"
                    >
                      ← Atrás
                    </button>
                  )}
                  <motion.button
                    whileHover={{ scale: canNext[step] ? 1.02 : 1 }}
                    whileTap={{ scale: canNext[step] ? 0.98 : 1 }}
                    disabled={!canNext[step] || loading}
                    onClick={() => (step < 3 ? setStep(s => s + 1) : handleSubmit())}
                    className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                      canNext[step]
                        ? 'bg-accent text-hero-bg shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                        : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    {loading ? 'Enviando...' : step === 3 ? 'Confirmar' : 'Continuar →'}
                  </motion.button>
                </div>
              )}

              {step === 4 && (
                <button
                  onClick={reset}
                  className="w-full mt-6 py-3 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/20 text-sm font-medium transition-colors"
                >
                  Cerrar
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Step({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-white font-semibold text-base leading-snug">{children}</h3>;
}
