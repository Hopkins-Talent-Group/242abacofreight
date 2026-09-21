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

