export function StatBar() {
  return (
    <section className="py-16 px-6 bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <p className="font-bebas text-3xl md:text-4xl text-[var(--accent)] mb-2">25</p>
          <p className="text-[var(--muted)]">Years in Operation</p>
        </div>
        <div className="text-center">
          <p className="font-bebas text-3xl md:text-4xl text-[var(--accent)] mb-2">98</p>
          <p className="text-[var(--muted)]">On-Time %</p>
        </div>
        <div className="text-center">
          <p className="font-bebas text-3xl md:text-4xl text-[var(--accent)] mb-2">48</p>
          <p className="text-[var(--muted)]">States Covered</p>
        </div>
        <div className="text-center">
          <p className="font-bebasel text-3xl md:text-4xl text-[var(--accent)] mb-2">MC-1234567</p>
          <p className="text-[var(--muted)]">MC/USDOT #</p>
        </div>
      </div>
    </section>
  );
}