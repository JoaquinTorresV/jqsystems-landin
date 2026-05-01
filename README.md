# jqsystem — Landing Page

Landing page oficial de **jqsystem**, agencia de automatización e inteligencia artificial.

## Stack

- **Framework** — Next.js 16 (App Router)
- **Estilos** — Tailwind CSS v4
- **Animaciones** — Framer Motion
- **3D** — Spline (robot interactivo)
- **Deploy** — Vercel

## Estructura

```
src/
├── app/                    # Layout y página principal
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Pantalla principal con robot 3D
│   │   └── ServicesPanel.tsx  # Panel de servicios (transición full-screen)
│   └── BookingModal.tsx    # Modal multi-step para agendar llamada
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Variables de entorno

Crear `.env.local` cuando se conecte la base de datos:

```env
# Supabase (bookings)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Pendiente

- [ ] Conectar base de datos Supabase para los bookings del modal
- [ ] Agregar URL del agente de voz ElevenLabs en `ServicesPanel.tsx`
