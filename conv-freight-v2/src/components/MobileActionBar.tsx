export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="md:hidden fixed bottom-0 left-0 right-0 z-[70] grid grid-cols-3 border-t border-line"
    >
      <a
        href="tel:+15615022632"
        className="bg-amber text-ink text-center py-3.5 text-xs font-extrabold uppercase tracking-[0.08em]"
      >
        Call
      </a>
      <a
        href="https://wa.me/12425550242"
        className="bg-aqua text-deep text-center py-3.5 text-xs font-extrabold uppercase tracking-[0.08em]"
      >
        WhatsApp
      </a>
      <a
        href="#quote"
        className="bg-card text-teal text-center py-3.5 text-xs font-extrabold uppercase tracking-[0.08em]"
      >
        Quote
      </a>
    </nav>
  );
}
