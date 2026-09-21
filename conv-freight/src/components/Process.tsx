export function Process() {
  return (
    <section className="py-16 bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-bebas text-4xl md:text-5xl text-center mb-12">Our 4-Step Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 border-r border-white/[.1]">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-[var(--accent)] rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M3 3v2h6l4 7l4-7h6v2"></path></svg>
            </div>
            <p className="font-bebas text-xl text-[var(--accent)]">1. Request Quote</p>
            <p className="text-[var(--muted)] text-sm mt-1">Fill out our form or call.</p>
          </div>

          <div className="text-center p-4 border-r border-white/[.1]">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-[var(--accent)] rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M16 14l2-2l-2-2"></path></svg>
            </div>
            <p className="font-bebas text-xl text-[var(--accent)]">2. Review Options</p>
            <p className="text-[var(--muted)] text-sm mt-1">We match you with best rates.</p>
          </div>

          <div className="text-center p-4 border-r border-white/[.1]">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-[var(--accent)] rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
            </div>
            <p className="font-bebas text-xl text-[var(--accent)]">3. Book Shipment</p>
            <p className="text-[var(--muted)] text-sm mt-1">Schedule your pickup/delivery.</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-[var(--accent)] rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M3 3v2h6l4 7l4-7h6v2"></path></svg>
            </div>
            <p className="font-bebas text-xl text-[var(--accent)]">4. Track & Deliver</p>
            <p className="text-[var(--muted)] text-sm mt-1">Real-time visibility end-to-end.</p>
          </div>
        </div>
      </div>
    </section>
  );
}