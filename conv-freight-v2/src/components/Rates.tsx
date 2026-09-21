const RATES = [
  {
    label: "Small parcel",
    price: "$[X.XX]/lb",
    copy: "Boxes, envelopes and personal items up to 50 lb. Minimum charge applies.",
    note: "[PLACEHOLDER — CONFIRM]",
  },
  {
    label: "Palletized freight",
    price: "$[X.XX]/lb",
    copy: "Crates and pallets. Dimensional weight applies on bulky, light cargo.",
    note: "[PLACEHOLDER — CONFIRM]",
  },
  {
    label: "Island supply order",
    price: "$[XX] flat",
    copy: "We source, buy and fly your supply list — hardware, parts, appliances.",
    note: "+ items at cost [PLACEHOLDER]",
  },
];

export function Rates() {
  return (
    <section id="rates" className="py-20 border-y border-line scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-head">
          <span className="section-eyebrow">Rates — no surprises</span>
          <h2 className="section-title">PUBLISHED RATES, PER POUND</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {RATES.map((r) => (
            <div key={r.label} className="card border-t-4 border-t-amber p-6">
              <p className="mono text-[11px] tracking-[0.16em] uppercase text-muted">{r.label}</p>
              <p className="font-bebas text-5xl leading-none mt-3 mb-2">{r.price}</p>
              <p className="text-sm text-muted">{r.copy}</p>
              <p className="mono text-[11px] tracking-[0.1em] uppercase text-teal mt-4">{r.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
