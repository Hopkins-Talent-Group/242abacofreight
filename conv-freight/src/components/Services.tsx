export function Services() {
  return (
    <section className="py-24 bg-white dark:bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-bebas text-4xl md:text-5xl text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-6 rounded-xl border border-white/[.1] hover:border-[var(--accent)] transition">
            <h3 className="font-bebas text-2xl mb-3">Air Freight</h3>
            <p className="text-[var(--muted)] text-sm">Fast air transportation from Florida to Abaco and the Bahamas. Time-critical deliveries with reliable scheduling.</p>
          </article>

          <article className="p-6 rounded-xl border border-white/[.1] hover:border-[var(--accent)] transition">
            <h3 className="font-bebas text-2xl mb-3">Full Truckload (FTL)</h3>
            <p className="text-[var(--muted)] text-sm">Dedicated capacity for large shipments. Direct routes with minimal handling for secure transport.</p>
          </article>

          <article className="p-6 rounded-xl border border-white/[.1] hover:border-[var(--accent)] transition">
            <h3 className="font-bebas text-2xl mb-3">LTL Shipping</h3>
            <p className="text-[var(--muted)] text-sm">Cost-effective less-than-truckload shipping. Consolidated freight with consistent schedules to the Bahamas.</p>
          </article>
        </div>
      </div>
    </section>
  );
}