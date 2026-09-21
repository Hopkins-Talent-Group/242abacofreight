const STEPS = [
  { n: "01", title: "Request", copy: "Call, WhatsApp or the quote form. Rate comes back fast — usually within 15 minutes during dispatch hours." },
  { n: "02", title: "Drop-off", copy: "Bring cargo to the West Palm Beach warehouse — or book a pickup anywhere in South Florida." },
  { n: "03", title: "We fly & clear", copy: "Customs paperwork is prepared by us. Your cargo boards the next scheduled flight south." },
  { n: "04", title: "Pickup in Abaco", copy: "Collect at our Marsh Harbour counter with a signed POD — or ask about local island delivery." },
];

export function Process() {
  return (
    <section id="process" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-head">
          <span className="section-eyebrow">How it works</span>
          <h2 className="section-title">FOUR STEPS, NO GUESSWORK</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s) => (
            <div key={s.n} className="card p-6">
              <p className="font-bebas text-4xl text-teal leading-none">{s.n}</p>
              <h3 className="font-bebas text-lg tracking-wide mt-3 mb-1">{s.title}</h3>
              <p className="text-sm text-muted">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
