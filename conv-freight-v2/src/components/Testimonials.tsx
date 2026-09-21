export function Testimonials() {
  return (
    <section id="reviews" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-head">
          <span className="section-eyebrow">From the docks</span>
          <h2 className="section-title">WHAT SHIPPERS SAY</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <article className="card border-l-4 border-l-teal p-6">
            <p className="text-[15px] leading-relaxed">
              &ldquo;Called at noon, parts were in Marsh Harbour the next day. Saved our charter
              week.&rdquo;
            </p>
            <p className="mono text-[11px] tracking-[0.1em] uppercase text-muted mt-4">
              [Customer name] — Marsh Harbour
            </p>
          </article>
          <article className="card border-l-4 border-l-teal p-6">
            <p className="text-[15px] leading-relaxed">
              &ldquo;They handle the customs side so I don&apos;t think about it. My supply list
              just shows up.&rdquo;
            </p>
            <p className="mono text-[11px] tracking-[0.1em] uppercase text-muted mt-4">
              [Customer name] — Treasure Cay
            </p>
          </article>
          <article className="card border-l-4 border-l-teal p-6">
            <p className="text-[15px] leading-relaxed">
              &ldquo;Finally a US address that works. Mail and parcels consolidated and flown every
              week.&rdquo;
            </p>
            <p className="mono text-[11px] tracking-[0.1em] uppercase text-muted mt-4">
              [Customer name] — Hope Town
            </p>
          </article>
        </div>
        <p className="micro mt-4">[Placeholder quotes — collect real ones via the Facebook page]</p>
      </div>
    </section>
  );
}
