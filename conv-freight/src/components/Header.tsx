import Link from "next/link";

export function Header() {
  return (
    <header className="sticky-header">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
        <Link
          className="font-bebas text-2xl tracking-wider"
          href="/"
        >
          ABA FREIGHT
        </Link>
        <div className="flex items-center gap-4">
          <a
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            href="tel:+1-555-0199"
          >
            +1 555 0199
          </a>
          <a
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            href="mailto:dispatch@abacofreight.com"
          >
            dispatch@abacofreight.com
          </a>
        </div>
      </div>
    </header>
  );
}