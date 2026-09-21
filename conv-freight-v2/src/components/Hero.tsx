import { QuoteCard } from "./QuoteCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(180deg,#ffffff,var(--background))]">
      <div className="hazard-stripe" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
        <div>
          <span className="section-eyebrow">West Palm Beach ⇄ Marsh Harbour — direct air cargo</span>
          <h1 className="font-bebas text-5xl md:text-6xl leading-[0.95] mb-5">
            FLY IT TO ABACO.
            <br />
            <span className="text-teal">SKIP THE BOAT WAIT.</span>
          </h1>
          <p className="text-lg text-muted max-w-xl mb-6">
            Time-sensitive air freight &amp; island supply from our West Palm Beach warehouse to
            Marsh Harbour — parcels, pallets, parts and supply orders, with customs paperwork
            prepared for you.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#quote" className="cta-primary">Get today&apos;s rate</a>
            <a href="https://wa.me/12425550242" className="cta-aqua">WhatsApp dispatch</a>
          </div>
          <ul className="micro flex flex-wrap gap-x-6 gap-y-2 mt-6">
            <li>✓ Rate back within 15 min (dispatch hours)</li>
            <li>✓ Customs docs handled for you</li>
            <li>✓ POD on every flight</li>
          </ul>
        </div>
        <QuoteCard />
      </div>
    </section>
  );
}
