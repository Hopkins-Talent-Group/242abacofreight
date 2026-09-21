import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-screen bg-[var(--charcoal)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--charcoal)] via-[var(--charcoal)] to-[var(--background)]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent)] rotate-6 blur-[100px] opacity-10"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center py-20 px-6 sm:py-32">
        <div className="max-w-4xl text-center w-full">
          <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-[var(--accent)] mb-6 tracking-widest">
            Reliable Freight<br />
            & Logistics Solutions
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto">
            Family-owned and operated for 14+ years. We provide dedicated freight transportation from Florida to the Bahamas, including air freight, LTL shipping, and full truckload services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:gap-6">
            <a
              href="#quote"
              className="rounded bg-[var(--accent)] px-8 py-4 text-base font-medium text-white hover:opacity-95 transition-opacity"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="rounded border-2 border-white/[.2] px-8 py-4 text-base font-medium text-[var(--foreground)] hover:bg-[var(--accent)]/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
