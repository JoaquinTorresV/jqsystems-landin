'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import ServicesPanel from '@/components/sections/ServicesPanel';

type View = 'hero' | 'services';

export default function Home() {
  const [view, setView] = useState<View>('hero');

  return (
    <div className="h-screen w-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {view === 'hero' && (
          <Hero key="hero" onServicesClick={() => setView('services')} />
        )}
        {view === 'services' && (
          <ServicesPanel key="services" onBack={() => setView('hero')} />
        )}
      </AnimatePresence>
    </div>
  );
}
