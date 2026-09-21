const SERVICES = [
  {
    icon: "✈",
    title: "Air Freight",
    copy: "Parcels and pallets on scheduled flights. The fastest way to the island for anything time-sensitive.",
  },
  {
    icon: "🛒",
    title: "Island Supply",
    copy: "We source and fly building materials, hardware, appliance parts and groceries from Florida stores.",
  },
  {
    icon: "✉",
    title: "Mail & Parcel Receiving",
    copy: "Your own US address. We receive, consolidate, fly it over and hold it at the Marsh Harbour counter.",
  },
  {
    icon: "❄",
    title: "Perishables & Cold Box",
    copy: "Insulated cold-chain handling for food, medicine and bait — packed to survive the ramp.",
  },
  {
    icon: "🛠",
    title: "Marine & AOG Parts",
    copy: "Urgent boat and aircraft parts get priority on the next flight out. Your season can't wait for a boat.",
  },
  {
    icon: "🚐",
    title: "FL Pickup & Drop-off",
    copy: "Drop at the West Palm Beach warehouse, or book a pickup across South Florida [radius placeholder].",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-head flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="section-eyebrow">What we move</span>
            <h2 className="section-title">SIX WAYS TO GET IT THERE</h2>
          </div>
          <a href="#quote" className="cta-ghost">Request a service</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <article key={s.title} className="card p-6 transition hover:-translate-y-0.5 hover:border-teal">
              <div className="w-11 h-11 grid place-items-center border border-line rounded bg-background text-xl mb-4">
                {s.icon}
              </div>
              <h3 className="font-bebas text-xl tracking-wide mb-2">{s.title}</h3>
              <p className="text-sm text-muted">{s.copy}</p>
              <a href="#quote" className="mono text-[11px] tracking-[0.16em] uppercase text-teal inline-block mt-4">
                Get rate →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
