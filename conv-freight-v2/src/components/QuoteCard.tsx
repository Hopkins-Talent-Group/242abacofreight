export function QuoteCard() {
  return (
    <form
      id="quote-card"
      action="#quote"
      className="card p-6 shadow-[0_24px_48px_rgba(16,22,29,0.08)]"
    >
      <h2 className="font-bebas text-2xl tracking-wide mb-1">GET TODAY&apos;S RATE</h2>
      <p className="mono text-[11px] tracking-[0.14em] uppercase text-teal mb-5">
        Rate back within 15 min · dispatch hours
      </p>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input className="quote-input" type="text" placeholder="Name" aria-label="Name" />
        <input className="quote-input" type="tel" placeholder="WhatsApp #" aria-label="WhatsApp number" />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
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
      <input
        className="quote-input mb-4"
        type="text"
        placeholder="What are you shipping? e.g. 2 boxes of boat parts · 40 lb"
        aria-label="What are you shipping"
      />
      <a href="#quote" className="cta-primary w-full">Get my rate →</a>
      <p className="micro mt-3">
        <b className="text-teal">No spam, no obligation.</b> Variant B mockup — nothing is sent;
        the live site posts this to the quote API.
      </p>
    </form>
  );
}
