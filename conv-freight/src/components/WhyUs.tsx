export function WhyUs() {
  return (
    <section className="py-24 bg-white dark:bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-bebas text-4xl md:text-5xl text-center mb-12">Why Choose Abaco Freight?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-[var(--accent)] rounded-full">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.37a4 4 0 0 1 0 7.74" />
              </svg>
            </div>
            <h3 className="font-bebas text-2xl mb-3">14+ Years Experience</h3>
            <p className="text-[var(--muted)] text-sm">Family-owned and operated since 2010. Proven reliability in every shipment.</p>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-[var(--accent)] rounded-full">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.37a4 4 0 0 1 0 7.74" />
              </svg>
            </div>
            <h3 className="font-bebas text-2xl mb-3">Bahamas Expertise</h3>
            <p className="text-[var(--muted)] text-sm">Specialized routes from Florida to Abaco and the entire Bahamian archipelago.</p>
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
            <p className="text-[var(--muted)] text-sm">No hidden fees — clear quotes up front with competitive rates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}