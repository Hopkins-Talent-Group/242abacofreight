export function Coverage() {
  return (
    <section className="py-16 bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-bebas text-4xl md:text-5xl text-center mb-12">Coverage Map</h2>

        <div className="text-center">
          <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8">
            Nationwide freight coverage with our core lanes highlighted. Contact us to confirm
            service availability for your specific routes.
          </p>
          <div>
            <svg
              className="w-16 h-16 mx-auto mb-4 text-[var(--accent)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M22 11.08V12a1 1 0 0 1-1 1h-7.08a1 1 0 0 1-1-1V5.91l1.43-1.42A1 1 0 0 1 21.73 4h-.45a1 1 0 0 1-1-1zm-8 0L3.59 5.91a1 1 0 0 1-1.42-1.43H5.91l1.43 1.42zm11.32 3.16l1.42 1.42a1 1 0 0 1-1.42 1.43H5.91l1.43-1.42zm0 5.76l1.42 1.42a1 1 0 0 1-1.42 1.43H5.91l1.43-1.42zm11.32-8.64l1.42 1.42a1 1 0 0 1-1.42 1.43H5.91l1.43-1.42zm-15.58 8.64L9.91 15.91a1 1 0 0 1-1.42 1.43H5.91l1.43 1.42zm15.58-8.64L24 7.08V5.91a1 1 0 0 0-1-1h-.56l-.45.45a1 1 0 0 1-1 1z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}