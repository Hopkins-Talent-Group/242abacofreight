export function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-bebas text-4xl md:text-5xl text-center mb-12">What People Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="p-6 rounded-xl border border-white/[.1]">
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
              &ldquo;Abaco Freight moved our equipment cross-country with professionalism and care.
              The communication was top-notch throughout the entire process.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-medium text-white">
                J
              </div>
              <div>
                <p className="font-medium">Jamal R.</p>
                <p className="text-[var(--muted)] text-sm">Owner-Operator</p>
              </div>
            </div>
          </article>

          <article className="p-6 rounded-xl border border-white/[.1]">
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
              &ldquo;Reliable, punctual, and transparent. They gave us a fair quote and delivered
              on time, every time. Highly recommended for any freight needs.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-medium text-white">
                S
              </div>
              <div>
                <p className="font-medium">Sarah T.</p>
                <p className="text-[var(--muted)] text-sm">Logistics Manager</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}