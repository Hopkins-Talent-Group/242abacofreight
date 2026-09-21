# DESIGN-SPEC — Abaco Freight & Island Supply (242abacofreight)

**Target:** Next.js (App Router) · **Status:** design-only mockup · **Goal:** revenue-catcher landing page

## 0. Verified facts vs. placeholders

Verified from public web during this design pass:
- Facebook page title: **"Abaco Freight | West Palm Beach FL"** (`facebook.com/abacofreight`)
- Current domain **242abacofreight.com** — title: "Abaco Freight & Island Supply — Fast, Reliable Flights from Florida to Abaco"
- Sunbiz Florida LLC: **ABACO FREIGHT LLC & ISLAND SUPPLY** (L16000015364, registered 2016), 2532 Old Okeechobee Rd, West Palm Beach, FL 33409
- Third-party write-ups (myabacoblog.com, azfreight.com, waterwayguide) position Abaco Freight as the **fast, time-sensitive FL→Abaco air option**, vs. boat consolidators (SEC Freight) and other air forwarders (Abaco Air, Tropix)

Everything else — phones, WhatsApp, rates, flight days, hours, stats, testimonials — is a **marked placeholder** in the mockup.

## 1. Fit-check: Claude's earlier prompt/approach

| Claude's call | Verdict | Fix applied here |
|---|---|---|
| Pivot from frontend audit → design request | ✅ fits | — |
| Facebook login-wall → fallback to search | ✅ fits, but gave up too early | Title-tag leak ("West Palm Beach FL") + Sunbiz + directory/press mining identified the real company |
| Generic US interstate trucking template (MC#/USDOT#, 48 states) | ⚠️ wrong archetype | This is FL→Bahamas **air cargo + island supply**. Design centers on routes WPB→MHH/MYAT, customs handling, island supply sourcing |
| Conversion-first section order (hero ask, trust, services, process, final form) | ✅ fits | Kept, plus an above-the-fold mini quote card |
| Single quote form at page bottom | ⚠️ thin for "revenue catcher" | Three capture paths: call, WhatsApp, form + sticky mobile action bar |
| Charcoal + safety-amber industrial aesthetic, Bebas Neue | ✅ fits | Kept; added **Abaco aqua** + flight-board/manifest motifs to match air cargo |
| Placeholders honestly marked | ✅ fits | Kept, with a completion checklist (§5) |
| Artifact only, not in a repo | ⚠️ | Landed in `design/` + this spec, versioned in git |

**Verdict: ~70% fits.** The structure and honesty were right; the company archetype research and multi-channel capture were the critical gaps.

## 2. "Revenue catcher" conversion strategy

1. **Three always-visible capture paths:** click-to-call, WhatsApp deep link (`wa.me` — the dominant channel in the Bahamian market), and the quote form. Header + mobile bar keep all three one tap away.
2. **Above-the-fold capture:** a mini quote card sits *inside* the hero — visitors can start the ask without scrolling. The long form at the bottom is the second touch, not the only one.
3. **Speed is the offer:** the competitor set (boat consolidators) is slow. Copy sells "days faster," the flight board proves it, and the "rate back in 15 minutes" promise kills the #1 freight friction: waiting for a quote.
4. **Trust ladder:** licensed FL forwarder → customs paperwork handled → manifest/POD visual → reviews → published rates. Freight buyers disqualify on uncertainty; every unknown is answered before the form.
5. **Urgency without sleaze:** "next flight out" framing + drop-off cut-off times (once the real schedule is confirmed). Reserve space on a flight — no fake countdown timers.
6. **Measurement hooks to add at build time:** GA4 events (`call_click`, `wa_click`, `quote_start`, `quote_submit`), call-tracking number swap, form POST → `app/api/quote/route.ts` → dispatch email/SMS.

## 3. Brand system

**Palette:** charcoal `#0B1218` (base) · panel `#111A21` · hairline `#223040` · **safety amber `#FFB300`** (primary CTA/accent) · **Abaco aqua `#2BC4D4`** (secondary accent — the water the company flies over) · paper `#F5F3EE` (single light rhythm section for rates) · body text `#E8EEF2` · muted `#9FB0BD`

**Type:** Bebas Neue (display headlines) · Barlow 400–800 (body/UI) · IBM Plex Mono (labels, stats, phone numbers, flight data)

**Motifs:** hazard-stripe dividers, runway/corrugation line texture, airport flight-board tiles, dashed manifest rows, barcode block, oversized ghost "242" numeral

## 4. Next.js App Router map (when this goes to code)

```
app/
  layout.tsx            // fonts (next/font), metadata, Header/Footer shells
  page.tsx              // single-route landing page (as mocked up)
  api/quote/route.ts    // POST -> dispatch email/SMS (out of design scope)
components/
  Header.tsx        Hero.tsx        QuoteCard.tsx    FlightBoard.tsx
  Rates.tsx         Services.tsx    Process.tsx      WhyUs.tsx
  Routes.tsx        Testimonials.tsx  Faq.tsx        QuoteBand.tsx
  Footer.tsx        MobileActionBar.tsx
```

Every section in `design/index.html` carries an HTML comment naming its future component. No UI libraries assumed — plain CSS or Tailwind at the implementer's choice. The mockup's only JS is a ~10-line demo handler (mobile nav toggle + local form confirmation); production forms post to the API route instead.

## 5. Content checklist before launch (replace every placeholder)

- [ ] Real dispatch phone + WhatsApp number (+ wa.me deep link), email
- [ ] Confirmed flight days + drop-off cut-off times (FlightBoard + hero chip)
- [ ] Published per-lb / palletized / island-supply rates
- [ ] Abaco-side counter address (Marsh Harbour) + FL pickup radius
- [ ] 3 real testimonials (ask repeat shippers via the Facebook page)
- [ ] Real stats (years operating, loads flown, on-time %)
- [ ] License/insurance numbers that may legally be printed
- [ ] Logo files + photography (warehouse, aircraft, island dock)

## 6. Accessibility & QA notes

- Amber on charcoal passes AA for display/bold text; keep body copy `#E8EEF2` on dark, `#101418` on paper
- Visible focus states (aqua border) on all inputs/buttons; FAQ uses native `<details>`; `tel:`/`wa.me` are real anchors
- Mockup loads fonts from Google Fonts; the Next.js build should self-host via `next/font` (no layout shift)
- Mobile action bar must not overlap footer content — footer has bottom padding reserved

## 7. Implementation status — `conv-freight/` (verified this pass)

**Toolchain:** pnpm 11.24 · Next.js 16.3.5 (Turbopack) · Tailwind 4.3.3 · React 19.2.8 · TypeScript 5. Gate status: `pnpm build` ✓ · `pnpm lint` ✓ (both verified end-to-end).

**Implemented & rendered on `/`:** `Header` (fixed bar: phone + email), `Hero`, `Services` (Air Freight / FTL / LTL), `WhyUs`, `StatBar`, and an inline "Get a Free Quote" form section.

**Built but NOT mounted:** `Coverage`, `Process`, `Testimonials` (files exist in `src/components/` but `page.tsx` doesn't render them).

**Theme system (fixed this pass):** Tailwind v4 tokens for colors (`--color-background/foreground/muted/accent/charcoal/silver`) and fonts (`--font-sans` / `--font-mono` / `--font-bebas` / `--font-display`), so the `font-bebas` display utility used across all headings actually renders Bebas Neue via `next/font` (`--font-plex-sans` / `--font-plex-mono` / `--font-bebas-neue` set in `layout.tsx`).

**Contact data surfaced by the implementation (candidates — verify before print):**
- Phone `+1 561 502 2632` (561 = West Palm Beach area code — consistent with the Sunbiz filing)
- Email `kimber@abacofreightllc.com` (domain matches the LLC name)

**Divergence to arbitrate:** the implemented copy is a generic US interstate template (FTL/LTL, "nationwide coverage", placeholder `MC-1234567`), while the verified research (§0) points to **FL→Abaco air cargo & island supply** as the actual differentiator. Pick one archetype before launch copy is finalized.

**Revenue-catcher gaps vs. the approved design (`design/index.html`):** no above-the-fold quote card, no WhatsApp CTA (critical for the Bahamian market), no flight board, no published rates, no mobile action bar (Call/WhatsApp/Quote), no FAQ, no route detail, no POD/manifest trust visual. All of these exist as ready sections in the mockup — the §4 component map is the porting guide.

**Toolchain fixes applied during bring-up (re-check these first if the build regresses):**
1. `pnpm-workspace.yaml` — `allowBuilds.unrs-resolver: true` (pnpm generates this entry as a literal placeholder string, which blocks install under strict deps verification and fails every `pnpm build` before `next build` even runs)
2. `src/app/globals.css` — Tailwind **v4** syntax (`@import "tailwindcss"` + `@theme inline`); v3 directives (`@tailwind base/components/utilities`) hard-fail the v4 build with "Cannot apply unknown utility class"
3. `layout.tsx` — `next/font` variables declared (`variable:` option) so the Google fonts actually apply
4. `page.tsx` — `Header` mounted, dead `#quote`/`#services` anchors given real targets with `scroll-mt-20`, unused starter `Image` import removed
5. `Testimonials.tsx` — raw `"` in JSX replaced with `&ldquo;`/`&rdquo;` (react/no-unescaped-entities)
6. Housekeeping: dual lockfiles present (`pnpm-lock.yaml` is the one in use; `package-lock.json` is an npm leftover, safe to delete once committed to pnpm)

**Convergence update (latest pass):** the parallel session adopted the DESIGN-SPEC §3 palette in `:root` (charcoal `#0b1218`, amber `#ffb300`, aqua `#2bc4d4`), added an `--color-aqua` theme token, and ported the mockup's component classes (`.cta-primary`, `.cta-aqua`, `.cta-ghost`, `.quote-input`, `.section-title`, `.section-eyebrow`, `.tag`, `.hazard-stripe`) into `globals.css` — but via **invented `@apply` classes** (`bg-amber`, `text-101418`, `font-800`, `letter-spacing-009em`, `font-plex-mono`, `border-line`…) that broke the build again ("Cannot apply unknown utility class `bg-amber`"). All 12 component classes were rewritten as plain CSS (unbreakable, hover/focus states preserved, class names unchanged) and the build was re-verified green (exit 0, twice). **Rule for future CSS edits in this repo:** Tailwind v4 `@apply` only accepts utilities that exist in the `@theme` or defaults — anything else must be plain CSS or an arbitrary value (`text-[13.5px]`, `z-[60]`). The component classes are staged but not yet consumed by the section components (they still use arbitrary-value classes).

**Second convergence event (dev-server 500 fix):** the component classes were rewritten a third time by the parallel session with different invented utilities (`font-800`, `text-uppercase`, `letter-spacing-009em`, `text-13px`, `color-[var(--aqua)]`, `border-1`, `@apply mono`, broken brackets like `hover:bg-[var(--accent)/10 transition-colors]`) → dev server 500 + `Cannot apply unknown utility class 'font-plex-mono'`. Instead of patching again, the **preferred class names were registered as real `@theme` tokens** so they compile natively: `--color-amber` (= accent), `--color-amber2`, `--color-aqua2`, `--color-line` (+ `--line` in `:root`), `--color-ink`, `--color-deep`, `--font-plex-sans`, `--font-plex-mono`. Only genuinely impossible names were corrected to valid syntax: `font-800`→`font-extrabold`, `font-600`→`font-semibold`, `text-uppercase`/`text-transform-uppercase`→`uppercase`, `letter-spacing-*em`→`tracking-[…]em`, `text-Npx`→`text-[Npx]`/`text-xs`, `border-1`→`border`, `z-60`→`z-[60]`, `color-[…]`→`text-aqua`, `@apply mono`→`font-mono`. Build re-verified green (exit 0). **Alias tokens are the contract going forward: `bg-amber`/`text-amber`/`hover:bg-amber2`/`border-line`/`text-ink`/`text-deep`/`font-plex-*` are all valid — prefer them over `bg-[var(--…)]` spellings.**

## 8. A/B test plan — Variant A vs Variant B

**Variant A — `conv-freight/`** (dark industrial "freight-yard"): charcoal background, generic freight copy (FTL/LTL), quote form only at page bottom, no WhatsApp channel.

**Variant B — `conv-freight-v2/`** (light "island professional"): paper background + white cards, researched **FL→Abaco air-cargo positioning** ("Fly it to Abaco. Skip the boat wait."), and four structural revenue-catcher additions:
1. **Above-the-fold mini quote card** (Hero right column) — capture starts before any scrolling
2. **Flight board** (schedule tiles = speed proof) + **published per-lb rates** (kills quote-wait anxiety)
3. **WhatsApp dispatch CTA** beside the primary CTA (dominant channel in the Bahamian market)
4. **Sticky mobile action bar** — Call / WhatsApp / Quote always one tap away

**Hypotheses:**
- H1: the above-fold quote card raises quote-start rate vs a bottom-only form
- H2: flight board + published rates raise form completion (less uncertainty)
- H3: the WhatsApp CTA raises total contact rate
- H4 (segment): light theme wins casual island shippers; dark theme wins commercial/charter clients

**Metrics to wire at implementation:** GA4 events `quote_start`, `quote_submit`, `tel_click`, `wa_click`; primary KPI = `quote_submit` / visitor.

**Running it:** deploy A and B separately (e.g., A at root, B under `/b` or a `b.` subdomain), split traffic 50/50 by cookie or edge rule; run to a pre-agreed sample size before reading results. B currently changes several factors at once (theme + structure + copy), so treat A-vs-B first as a **style bake-off**, then isolate the winning elements in follow-up single-variable tests.

**Status:** Variant B is design-complete — `pnpm build` ✓ and `pnpm lint` ✓ verified in `conv-freight-v2/`. All real-world data (rates, flight schedule, phone/WhatsApp numbers, hours) remains placeholder pending owner confirmation (§5 checklist).

