import Image from "next/image";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { StatBar } from "../components/StatBar";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="py-24">
        <Services />
        <WhyUs />
        <StatBar />
      </main>

      <section className="py-24 bg-[var(--charcoal)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="font-bebas text-4xl md:text-5xl mb-6">Get a Free Quote</h2>
            <p className="text-[var(--muted)] mb-12 max-w-2xl mx-auto">
              Fill out the form below or call us to receive a customized quote for your freight needs.
            </p>
            <div className="bg-white dark:bg-[var(--charcoal)] rounded-2xl p-8 max-w-md mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded bg-[var(--charcoal)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded bg-[var(--charcoal)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded bg-[var(--charcoal)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    placeholder="+1 561 502 2632"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Service Type
                  </label>
                  <select
                    className="w-full rounded bg-[var(--charcoal)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] appearance-none"
                  >
                    <option value="">Select service type</option>
                    <option value="air-freight">Air Freight</option>
                    <option value="full-truckload">Full Truckload (FTL)</option>
                    <option value="ltl">LTL Shipping</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded bg-[var(--accent)] px-6 py-3 text-base font-medium text-white hover:opacity-95 transition-opacity"
                >
                  Get Quote
                </button>
              </form>
            </div>
            <p className="mt-6 text-sm text-[var(--muted)]">
              Or call +1 561 502 2632 for immediate assistance
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
