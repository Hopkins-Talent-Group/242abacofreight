import Link from "next/link";

export function Header() {
  return (
    <header className="sticky-header">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between gap-4 px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-bebas text-2xl tracking-wider">ABACO FREIGHT</span>
          <span className="tag hidden sm:inline-block">FL ⇄ 242 · AIR CARGO</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          <a href="#schedule" className="px-3 py-2 text-muted hover:text-teal transition-colors">Schedule</a>
          <a href="#rates" className="px-3 py-2 text-muted hover:text-teal transition-colors">Rates</a>
          <a href="#services" className="px-3 py-2 text-muted hover:text-teal transition-colors">Services</a>
          <a href="#process" className="px-3 py-2 text-muted hover:text-teal transition-colors">Process</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+15615022632" className="hidden lg:block mono text-[13px] font-semibold text-teal">
            +1 (561) 502-2632
          </a>
          <a href="#quote" className="cta-primary">Get a Quote</a>
        </div>
      </div>
    </header>
  );
}
