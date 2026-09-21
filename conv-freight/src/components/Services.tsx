export function Services() {
  return (
    <section className="py-20 bg-white dark:bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-bebas text-4xl md:text-5xl text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-6 rounded-xl border border-white/[.1] hover:border-[var(--accent)] transition">
            <h3 className="font-bebas text-2xl mb-3">Full Truckload</h3>
            <p className="text-[var(--muted)] text-sm">Dedicated capacity across all lanes.</p>
          </article>

          <article className="p-6 rounded-xl border border-white/[.1] hover:border-[var(--accent)] transition">
            <h3 className="font-bebas text-2xl mb-3">LTL Shipping</h3>
            <p className="text-[var(--muted)] text-sm">Cost-effective less-than-truckload.</p>
          </article>

          <article className="p-6 rounded-xl border border-white/[.1] hover:border-[var(--accent)] transition">
            <h3 className="font-bebas text-2xl mb-3">Warehousing</h3>
            <p className="text-[var(--muted)] text-sm">Secure short-term and long-term storage.</p>
          </article>
        </div>
      </div>
    </section>
  );
}