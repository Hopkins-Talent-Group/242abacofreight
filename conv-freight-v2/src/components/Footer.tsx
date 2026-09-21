export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 pt-14 pb-28 md:pb-14 -mt-px">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.4fr_1.1fr_0.8fr] gap-10">
        <div>
          <p className="font-bebas text-2xl tracking-wider text-white mb-3">ABACO FREIGHT</p>
          <p className="text-sm text-white/60 max-w-sm mb-4">
            Time-sensitive air cargo and island supply between West Palm Beach, FL and the Abacos,
            Bahamas. Air beats boat.
          </p>
          <a
            href="https://web.facebook.com/abacofreight"
            className="mono text-[12px] tracking-[0.1em] text-aqua"
          >
            facebook.com/abacofreight ↗
          </a>
        </div>
        <div>
          <p className="font-bebas text-lg tracking-[0.08em] text-white mb-3">CONTACT / NAP</p>
          <div className="mono text-[12px] leading-relaxed text-white/60">
            <b className="text-white/90">FL WAREHOUSE</b>
            <br />
            2532 Old Okeechobee Rd, West Palm Beach, FL 33409
            <br />
            (verified — Sunbiz)
            <br />
            <br />
            <b className="text-white/90">ABACO COUNTER</b> · Marsh Harbour [TBD]
            <br />
            <b className="text-white/90">DISPATCH</b> +1 (561) 502-2632
            <br />
            <b className="text-white/90">WHATSAPP</b> +1 (242) 555-0242 [ph]
            <br />
            <b className="text-white/90">EMAIL</b> kimber@abacofreightllc.com [verify]
          </div>
        </div>
        <div>
          <p className="font-bebas text-lg tracking-[0.08em] text-white mb-3">QUICK LINKS</p>
          <div className="grid gap-2 text-sm">
            <a href="#schedule" className="hover:text-aqua transition-colors">Flight board</a>
            <a href="#rates" className="hover:text-aqua transition-colors">Rates</a>
            <a href="#services" className="hover:text-aqua transition-colors">Services</a>
            <a href="#process" className="hover:text-aqua transition-colors">How it works</a>
            <a href="#quote" className="hover:text-aqua transition-colors">Get a quote</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-5 border-t border-white/10 flex flex-wrap justify-between gap-3 mono text-[11px] text-white/40">
        <span>© 2026 Abaco Freight LLC &amp; Island Supply — Variant B (design mockup)</span>
        <span>PLACEHOLDERS MARKED [ ]/[ph] — SEE DESIGN-SPEC.md §5/§8</span>
      </div>
    </footer>
  );
}
