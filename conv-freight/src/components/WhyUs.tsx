export function WhyUs() {
  return (
    <section className="py-16 bg-white dark:bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-bebas text-4xl md:text-5xl text-center mb-12">Why Choose Abaco?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-[var(--accent)] rounded-full">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.37a4 4 0 0 1 0 7.74" />
              </svg>
            </div>
            <h3 className="font-bebas text-2xl mb-3">Reliability</h3>
            <p className="text-[var(--muted)] text-sm">On-time delivery rate that exceeds industry standards.</p>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-[var(--accent)] rounded-full">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.37a4 4 0 0 1 0 7.74" />
              </svg>
            </div>
            <h3 className="font-bebas text-2xl mb-3">Coverage</h3>
            <p className="text-[var(--muted)] text-sm">Nationwide service across 48 states and growing.</p>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-[var(--accent)] rounded-full">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.37a4 4 0 0 1 0 7.74" />
              </svg>
            </div>
            <h3 className="font-bebas text-2xl mb-3">Transparent Pricing</h3>
            <p className="text-[var(--muted)] text-sm">No hidden fees — clear quotes up front.</p>
          </div>
        </div>
      </div>
    </section>
  );
}