export function Hero() {
  return (
    <section className="relative min-h-[60vh] bg-[var(--charcoal)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/[.3] to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent)] rotate-6 blur-[80px] opacity-20" />
      <div className="relative flex flex-col items-center justify-center py-20 px-6">
        <h1 className="font-bebas text-5xl md:text-6xl text-[var(--accent)] mb-4 tracking-widest">
          Abaco Freight
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] mb-8 max-w-2xl">
          Family-owned & operated for 14+ years. Reliable freight transportation from Florida to the Bahamas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <a
            href="#quote"
            className="rounded bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white hover:opacity-95 transition-opacity"
          >
            Get a Quote
          </a>
          <a
            href="#services"
            className="rounded border-2 border-white/[.2] px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--accent)]/10 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}