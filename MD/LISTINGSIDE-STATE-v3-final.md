# The Listing Side — State of the Union v3
*Updated: April 24, 2026 — VERSION 1.0 LOCKED*

> Both pages locked. Do not edit copy or forms without Director approval. Push to GitHub when back in New York.

---

## The Project

**The Listing Side** — NYC's first efficient rental clearinghouse and tenant representation platform.
- URL: **thelistingside.com** (acquired)
- Local: `/Users/ctholland/Documents/websites/christoferholland.com/` with two subfolders:
  - `listingside/` — owner/landlord index page
  - `thelistingside/` — renter page (matches the actual folder name on Christofer's machine)
- Hosted: Netlify (GitHub-connected), same repo as christoferholland.com
- thelistingside.com → GoDaddy masked forward → christoferholland.com

---

## Brand

- **Tagline:** "Clear Rates. Faster Closings."
- **Mission:** NYC's first efficient clearinghouse. Dual-stream: open market representation now, managed exclusive inventory coming.
- **Christofer's title:** Director of Operations (brand role) / Licensed Real Estate Salesperson NY Lic. #10401390448 (legal — must appear in all compliance sections)
- **Colors:** Red #C8102E, Navy #1A2744, Black #111111, White #ffffff, Gold #C9A04C
- **Fonts:** Bebas Neue (display), DM Sans (body), DM Mono (labels/eyebrows)
- **KW NYC branding required** on all pages
- **Never say "standard"** re: rates

---

## Core Narrative (LOCKED)

### The Perpetual Rent Tax
The "no-fee" model is a scam. When landlords pay a one-month broker fee, they raise rent $200–400/mo to recoup it. The renter thinks they got a deal — they actually signed a Perpetual Rent Tax that compounds every year.

**The Math (on a $5,000/mo apartment):**
- No-Fee Trap: $5,250/mo (inflated) → Year 1: $63,000 → Year 3: $189,000
- The Listing Side: $5,000/mo (true market) + $4,200 fee → Year 1: $64,200 → Year 3: $184,200
- **By Year 3: Renter saves $4,800. Every year after is pure loss for the "no-fee" renter.**

### Fee Structure
| Tier | Units | Fee |
|------|-------|-----|
| Tenant Rep | Under $10,000/mo | 7% of annual rent |
| Luxury Tenant Rep | $10,000+/mo | 5% of annual rent |
| New Dev Exclusive | $15,000+/mo or institutional | 1 month minimum |

- Landlord-pay model (FARE Act compliant)
- "One month = 8.33% of annual. We charge 7%. We do better."
- Never say "standard rates"

---

## Files Built

### `listingside/index.html` ✅ — OWNER/LANDLORD PAGE
**Status:** Solid. Minor polish remaining.

**Sections:**
- Sticky header: Red compliance bar → Black nav ("THE LISTING SIDE" Bebas Neue wordmark)
- Hero: "Clear Rates. Faster Closings." with fee card (7% / 5% / 1 month minimum)
- Ticker: "42 Pre-Cleared Renters Ready — FiDi 10004" format, 10 neighborhoods with zip codes
- Two-path owner section (Standard/Luxury + New Dev)
- How It Works (3 steps)
- FARE Act compliance banner (navy)
- Lease Break section
- STB Bridge
- Footer (uniform with renters page)
- **Owner Sifter Modal** (4 steps):
  1. Unit neighborhood (full 21-neighborhood grouped dropdown with zip codes)
  2. Unit details: number vacant, asking rent, availability
  3. FARE Act compliance (Yes/No/Not sure) — shows note if not compliant
  4. Contact: name, company, email, phone
  - Netlify form: `sifter-owner`
  - Success: "Received. We'll follow up within 24 hours."

**Pending:**
- Hero copy could be stronger (owner-facing aggression)
- STB bridge link → update to correct Eventbrite/workshop URL

---

### `thelistingside/renters.html` ✅ — RENTER PAGE (GOLD STANDARD)
**Status:** This is the master template. Index should mirror its structure.

**Key sections:**

**Hero:**
- Eyebrow: "Attention: NYC Renters"
- Title: "Stop Paying The One-Month Tax. Stop Paying Perpetual Rent."
- Sub: Explains the no-fee scam, landlords inflate rent, Perpetual Rent Tax
- CTA: "Get Cleared — Request Representation"
- Deal card: Units Under $10k (7%) / Units $10k+ (5%) with old rate context

**Ticker:** Vetted renter counts by neighborhood (same format as index)

**Benefits (6 cards):**
1. Capped Fee. No Games. — 7%/5%, never one month
2. Member-Only Inventory Access — Cleared status unlocks private pool
3. Landlords Take You First — Cleared certificate = front of line
4. The Representation Certificate — paperwork as protection
5. Neighborhood Targeting — open market now, exclusive inventory coming
6. The Long-Term Play — path to ownership, STB foreshadowed

**Math Section:**
- Title: "The 'No-Fee' Trap is a Lie."
- 2-column table: No-Fee Trap ($5,250 inflated) vs TLS ($5,000 true market)
- Year 1, Year 3 comparison — $4,800 ahead by Year 3
- "Perpetual Rent Tax" in red bold throughout

**Why section (2-column):**
- Left: "NYC's First Efficient Clearinghouse" — dual-stream, open market now, managed portfolios coming
- Right: "Your Rental Is the Beginning" — long-term platform goal
- Christofer Holland, Director of Operations attribution

**How It Works (4 steps):**
1. Request Representation — 5-step intake described honestly
2. Get Cleared — qualification review, reach out to complete
3. Search Begins — open market + exclusive inventory coming (future-paced honestly)
4. Sign and Move — representation agreement, 7%/5% at signing, spelled out fully

**STB Bridge (navy):**
- "One Question Worth Asking / Still Renting Next Year?"
- Card: Stop the Bleeding, Every Tuesday 7–8 PM ET
- "Or book a free Buyer Orientation Call →"

**Renter Sifter Modal (5 steps + success):**
1. Neighborhood — full 21-neighborhood grouped dropdown with zip codes
2. Move-in window (4 options)
3. **The Vetting Layer:**
   - Annual income (4 ranges)
   - Credit score (700+, 650–699, Below 650)
   - Target monthly rent (numeric)
   - Guarantor needed (Yes/No/Not sure)
   - **Live logic:** credit < 650 → warning + "Consultation Required" flag
   - **Live logic:** rent > income÷40 → income warning
   - **Status field:** `Pre-Cleared` or `Consultation Required` auto-tagged on submission
4. Buying Power dead giveaway (Yes → opens STB workshop after submit)
5. Contact + Master Agreement checkbox
   - Agreement: 7% open-market cap, $0 for TLS exclusive inventory, dual-agency disclosure
- Netlify form: `sifter-renter`
- Success (Step 6): "Application Received. You are in the Pool. Check email for Cleared Status Certificate."

---

## nav.js — Current State ✅

**Key features:**
- The Listing Side added after Manhattan Rentals in menu
- Path detection: `/listingside/` AND `/thelistingside/` both detected
- Logo swap: on TLS pages → "THE LISTING SIDE" in Bebas Neue + "NY Living Solutions | Keller Williams NYC"
- Bebas Neue injected dynamically on TLS pages
- Injection: checks for `.compliance-bar` → inserts nav after it via `insertAdjacentHTML('afterend')`
- Fallback: main site pages get nav at body top as before

**Sticky header system:**
- Both pages have `<div class="sticky-header" id="stickyHeader">` wrapping compliance bar
- nav.js detects `stickyHeader` and injects nav inside it (`beforeend`)
- Result: red bar + black nav move as one unit, no gap

---

## Compliance Bar (Both TLS Pages)

Red `#C8102E` bar at very top. Four links with red dot separators:
- Fair Housing Notice → dos.ny.gov PDF
- Standard Operating Procedures → kwnyc.com/sop *(verify URL)*
- Reasonable Accommodation → kwnyc.com/reasonable-accommodation *(verify URL)*
- Agency Disclosure → dos.ny.gov PDF

---

## Footer (Both Pages — Identical)

Navy `#1A2744` background, red top border `4px solid #C8102E`
- Brand: "The Listing SIDE" (red)
- Tagline: "Clear Rates. Faster Closings."
- Social: Instagram, LinkedIn, Facebook (white icons)
- Navigate links
- Contact: Christofer Holland, Licensed Real Estate Salesperson, NY Lic. #10401390448, 90 John Street, 917-207-1414, christofer@kw.com
- Footer bottom: © line, FARE Act compliance, disclosure links (centered)

---

## Docket — What's Still To Build

| # | Page | Status |
|---|------|--------|
| 1 | `listingside/index.html` | ✅ LOCKED — Version 1.0 |
| 2 | `thelistingside/renters.html` | ✅ LOCKED — Version 1.0 GOLD STANDARD |
| 3 | `thelistingside/lease-break.html` | ❌ Not built |
| 4 | Standalone Sifter page | ❌ Not built |
| 5 | Developer Pipeline Dashboard | ❌ Not built |
| 6 | Dual-Path Master Agreement page | ❌ Not built |
| 7 | Tenant Rep Agreement | ❌ Not built |
| 8 | Thank You pages | ❌ Not built |

---

## Automation — Next Steps

- **Zapier + Netlify webhook:** When `sifter-renter` form submits with `status = Pre-Cleared`, trigger Cleared Status Certificate email automatically
- **The email:** Subject: "Your Cleared Status Certificate — The Listing Side" — drafted by Gemini (see conversation)
- **Plaid integration (Phase 2):** Bank-verify income instead of self-reported
- **LLM matchmaker (Phase 3):** AI negotiates with landlords based on Cleared pool data

---

## Startup Roadmap

- **Phase 1 (Now):** Logic Engine. Intake + Cleared Status emails. Prove the Flash-Mob concept.
- **Phase 2 (Growth):** Plaid verification. Cleared status becomes bank-verified fact.
- **Phase 3 (AI Pivot):** LLM matchmaker. Cleared pool → auto-negotiates with developers.
- **VC Pitch Assets:** Data moat (income ranges, credit tiers, neighborhood zip clusters), Pre-Cleared count by zip, Year-3 perpetual rent math

---

## Key People

| Person | Role |
|--------|------|
| Christofer Holland | Director of Operations (brand) / Licensed Real Estate Salesperson, NY Lic. #10401390448 |
| Andrew (KW) | Needs to back the rates — conversation pending |
| Matthew Correia | Greenberg Traurig — agreements, FARE compliance. Reply pending. |
| Bojan | Photography — Visual Standard Clause |
| Dave Roberts | Chase Home Lending — STB/buyer pipeline |
| Jacqueline Plaza | VP Chase — co-marketing/canvassing |

---

## STB Bridge (Critical Connection)

Renter enters Sifter → Step 4 asks buying power question → Yes → STB workshop auto-opens after submission
- Links to: `../workshops/stopthebleeding.html`
- Every "Yes" = a future buyer tagged in the system

---

## iOS Dark Mode Fix

Both TLS pages use:
- `<meta name="color-scheme" content="light">`
- `html { color-scheme: light; }`
- `@media (prefers-color-scheme: dark)` block that explicitly names white section classes
- Dark sections (STB, footer) explicitly kept dark
- NO nuclear JS approach — causes more problems than it solves

---

## How We Work

- Files edited locally: `/Users/ctholland/Documents/websites/christoferholland.com/`
- Test in browser locally → push to GitHub → Netlify auto-deploys
- Always read full file before touching anything
- Always grep to confirm strings before str_replace
- Copy uploaded files to `/home/claude/` before editing
- Deliver to `/mnt/user-data/outputs/`
- Python string replacement for multi-change edits
- Never push scripts across the site — local first

---

## Trademark

- Intent-to-use filing for "The Listing Side" in Class 036 (real estate services)
- Discussed, NOT YET FILED
- TEAS Plus, $250, USPTO
- IP attorney recommended before filing

---

*Drop this doc into new conversation with the relevant HTML files to continue.*
