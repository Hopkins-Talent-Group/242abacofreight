# 242abacofreight — Abaco Freight & Island Supply (Website Redesign)

Design-only mockup for **Abaco Freight LLC & Island Supply** — time-sensitive air cargo & island supply between **West Palm Beach, FL and Abaco, Bahamas (Marsh Harbour)**. The goal of the redesign is a **revenue-catcher** landing page: capture calls, WhatsApp messages, and quote requests in as few taps as possible.

- Company Facebook: https://web.facebook.com/abacofreight (page title: "Abaco Freight | West Palm Beach FL")
- Current domain: https://242abacofreight.com
- Stack target: **Next.js (App Router)** — design-only for now, zero build step

## Files

| Path | What it is |
|---|---|
| `design/index.html` | Full static visual mockup — open in any browser, no build |
| `DESIGN-SPEC.md` | Fit-check vs. prior AI draft, brand system, section→Next.js component map, conversion strategy, content checklist |
| `conv-freight/` | Next.js 16.3.5 + Tailwind 4 app — **partial implementation** (8 components; `pnpm build` + `pnpm lint` both green). Still missing several revenue-catcher sections — see `DESIGN-SPEC.md §7` |

> **Note:** the approved design reference lives in `design/` + `DESIGN-SPEC.md`. `conv-freight/` is the working Next.js implementation (parallel workstream). The component map in `DESIGN-SPEC.md §4` is the porting guide; `§7` tracks implementation status, gaps, and the toolchain fixes applied during bring-up.


## View the mockup

Open `design/index.html` directly in a browser, or serve it:

```powershell
npx serve design
```

## Status

Design-only per brief ("pure design, no code"). Phone numbers, rates, flight schedule, hours, and stats are clearly-marked placeholders awaiting owner confirmation — see the checklist in `DESIGN-SPEC.md`. The West Palm Beach warehouse address is verified from the company's Florida Sunbiz filing.

powered by VitrixLab PH
