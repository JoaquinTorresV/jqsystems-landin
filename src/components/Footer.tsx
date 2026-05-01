export default function Footer() {
  return (
    <footer className="bg-hero-bg border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white font-black text-xl">
          jq<span className="text-accent">system</span>
        </p>
        <p className="text-white/30 text-sm text-center">
          © {new Date().getFullYear()} jqsystem — Todos los derechos reservados
        </p>
        <div className="flex gap-6 text-white/40 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
}
