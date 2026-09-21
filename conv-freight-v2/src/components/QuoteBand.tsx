export function QuoteBand() {
  return (
    <section id="quote" className="bg-charcoal py-20 scroll-mt-24">
      <div className="hazard-stripe" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto px-6 pt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <div className="text-white/90">
          <span
            className="section-eyebrow"
            style={{ color: "var(--accent)" }}
          >
            Start your load
          </span>
          <h2 className="section-title text-white">GET YOUR CARGO ON THE NEXT FLIGHT.</h2>
          <p className="text-white/70 mb-6 max-w-md">
            Tell us what it is, where it&apos;s going, and when you need it. A dispatcher replies —
            no ticket queue.
          </p>
          <a
            href="tel:+15615022632"
            className="mono block text-2xl font-semibold mb-1"
            style={{ color: "var(--accent)" }}
          >
            +1 (561) 502-2632
          </a>
          <a href="https://wa.me/12425550242" className="mono text-sm text-aqua block">
            WhatsApp: +1 (242) 555-0242 [placeholder]
          </a>
          <p className="micro text-white/60 mt-6">
            <b className="text-white/90">Dispatch hours [placeholder]</b>
            <br />
            Mon–Fri · 8:00 AM – 5:00 PM
            <br />
            Sat · 8:00 AM – 12:00 PM · Sun · WhatsApp monitored
          </p>
        </div>
        <form className="card p-6">
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <input className="quote-input" type="text" placeholder="Name *" aria-label="Name" required />
            <input className="quote-input" type="tel" placeholder="WhatsApp *" aria-label="WhatsApp" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <input className="quote-input" type="email" placeholder="Email" aria-label="Email" />
            <input className="quote-input" type="date" aria-label="Needed by" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <select className="quote-input" aria-label="From" defaultValue="wpb">
              <option value="wpb">West Palm Beach warehouse</option>
              <option value="mia">Miami pickup</option>
              <option value="ftl">Fort Lauderdale pickup</option>
            </select>
            <select className="quote-input" aria-label="To" defaultValue="myam">
              <option value="myam">Marsh Harbour (MYAM)</option>
              <option value="myat">Treasure Cay (MYAT)</option>
              <option value="cays">Other Abaco cay</option>
            </select>
          </div>
          <textarea
            className="quote-input mb-4"
            rows={3}
            placeholder="What are you shipping? Items, boxes/pallets, weight and dims *"
            aria-label="What are you shipping"
            required
          ></textarea>
          <button type="button" className="cta-primary w-full">
            Submit — reserve flight space
          </button>
          <p className="micro text-white/60 mt-3">
            Rate back within 15 minutes during dispatch hours ·{" "}
            <b className="text-white/90">no obligation</b> · mockup only, nothing is sent
          </p>
        </form>
      </div>
    </section>
  );
}
