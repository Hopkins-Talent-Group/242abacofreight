export function StatBar() {
  return (
    <section className="py-20 bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="font-bebas text-3xl md:text-4xl text-[var(--accent)] mb-2">14</p>
            <p className="text-[var(--muted)]">Years in Operation</p>
          </div>
          <div className="text-center">
            <p className="font-bebas text-3xl md:text-4xl text-[var(--accent)] mb-2">98%</p>
            <p className="text-[var(--muted)]">On-Time Delivery</p>
          </div>
          <div className="text-center">
            <p className="font-bebas text-3xl md:text-4xl text-[var(--accent)] mb-2">Bahamas</p>
            <p className="text-[var(--muted)]">Route Coverage</p>
          </div>
          <div className="text-center">
            <p className="font-bebas text-3xl md:text-4xl text-[var(--accent)] mb-2">MC-1234567</p>
            <p className="text-[var(--muted)]">Licensed & Insured</p>
          </div>
        </div>
      </div>
    </section>
  );
}