# The Listing Side — Project State v2
*Updated: April 24, 2026 — Ready for new conversation*

---

## The Project

**The Listing Side** is a high-velocity NYC rental clearinghouse built by Christofer Holland.
- URL: **thelistingside.com** (acquired, forwarding to christoferholland.com for now)
- Lives in folder: `thelistingside/` inside christoferholland.com project
- Local path: `/Users/ctholland/Documents/websites/christoferholland.com/thelistingside/`
- Hosted: Netlify (GitHub-connected), same repo as christoferholland.com

---

## Brand

- **Tagline:** "UnReal Estate: From Fiction to Fact and Friction to Freedom"
- **Colors:** Navy #1A2744, Red #C8102E, White #ffffff, Black #111111, Gold #C9A04C
- **Fonts:** Bebas Neue (display), DM Sans (body), DM Mono (labels/eyebrows)
- **Visual:** White background pages. Dark sections (navy/black) used for FARE Act banner, STB bridge, footer. NOT for hero.
- **Nav:** Uses shared nav.js from root. Logo swaps to "THE LISTING SIDE" in Bebas Neue when on `/thelistingside/` pages.
- **KW NYC branding required** on all pages (19 NYCRR 175.25)
- **Never say "standard"** re: rates (antitrust)
- **No black** in brand materials — exception: near-black #111111 used for footer/dark sections only

---

## Fee Structure

| Tier | Units | Fee |
|------|-------|-----|
| Standard Rental | < $10,000/mo | 7% of annual rent |
| Luxury Rental | $10,000–$15,000/mo | 5% of annual rent |
| New Dev Exclusive | $15,000+/mo or institutional | 1 month minimum (negotiated) |

- All fees paid by owner/landlord (FARE Act compliant)
- Legal to publish as firm's own rates (unilateral, not price-fixing)
- Never "standard rates" — always "our rates" or "The Listing Side charges"

---

## File Structure

```
christoferholland.com/
├── nav.js                    ← UPDATED (TLS in menu, logo swap, root detection)
├── images/
│   ├── listingsidelogo-dark.png   ← white strokes + red dot (for dark nav)
│   └── listingsidelogo-light.png  ← black strokes + red dot (for white pages)
└── thelistingside/
    ├── index.html            ✅ BUILT — main landlord/owner page
    └── renters.html          ✅ BUILT — renter-facing page (needs polish)
```

---

## Pages Built

### `thelistingside/index.html` ✅
**Main landing page — landlord/owner facing**
- Compliance bar (navy, 4 links, red dot separators)
- Nav via nav.js (logo = "THE LISTING SIDE" in Bebas Neue)
- Hero: white background, fee card (7% / 5% / 1 month minimum)
- Scrolling ticker (vetted renters by neighborhood — fake data for now)
- Two-path owner section (Standard/Luxury + New Dev)
- How It Works (3 steps)
- FARE Act compliance banner (navy)
- Lease Break section (dark)
- STB Bridge (cream, buying power pivot)
- Footer (KW NYC compliance, license #10401390448)
- Sifter modal (4-step intake, Netlify form `sifter-intake`)

**Status:** Solid. Needs micro-edits after review. iOS dark mode handled.

---

### `thelistingside/renters.html` ✅ (needs polish)
**Renter-facing page — the 5/7 deal**
- Compliance bar (same as index)
- Nav via nav.js
- Hero: WHITE background (changed from black — user didn't want stark black)
  - Title: "You Should Never Pay A Full Month."
  - Deal card showing fee comparison
- Benefits grid (6 cards)
- Math table ($2,500–$10,000 rent levels, savings vs 1 month)
- How It Works (4 steps)
- STB Bridge (navy, buying power pivot, workshop link)
- Footer
- Sifter modal (4-step, Netlify form `sifter-renter`)
  - Step 3: "Buying Power" dead giveaway — Yes → auto-opens STB workshop

**Status:** Needs polish pass. Dark mode issue was hero being black — now white, should resolve. Need to verify on device.

**KNOWN ISSUES TO FIX:**
- Hero section needs a proper polish pass now that it's white (copy review, layout tightening)
- Page hasn't been reviewed at full quality yet — do a complete top-to-bottom pass
- Confirm dark mode works after hero color change

---

## nav.js — Current State ✅

Key additions:
- `{ label: 'The Listing Side', href: root + 'thelistingside/index.html' }` — after Manhattan Rentals
- `/thelistingside/` added to root path detection (`../`)
- Logo swap: when on `/thelistingside/` pages, shows "THE LISTING SIDE" in Bebas Neue + "NY Living Solutions | Keller Williams NYC" in DM Mono
- Bebas Neue font injected dynamically when on TLS pages

---

## The Sifter (Vetting Bot)

Core intake machine. Currently embedded as modal in both index.html and renters.html. Four steps:
1. Neighborhood (mapped to zip clusters)
2. Move-in window
3. Buying Power dead giveaway (Yes/No) — Yes → routes to STB workshop after submit
4. Name/email/phone → Netlify form

**Naming:** Still unresolved. "Prequal" was considered and rejected. "The Sifter" (just the whole system) is the working name. Output state = "Cleared." Credit repair referral if they don't clear (no fee, partner TBD).

---

## Full Build Docket (Remaining Pages)

| # | Page | Status |
|---|------|--------|
| 1 | Owner/Landlord landing (`index.html`) | ✅ Built |
| 2 | Renter page (`renters.html`) | ✅ Built, needs polish |
| 3 | Lease Break page (`lease-break.html`) | ❌ Not built |
| 4 | Vetting Bot full page (`sifter.html`) | ❌ Not built |
| 5 | Developer Pipeline Dashboard | ❌ Not built |
| 6 | Dual-Path Master Agreement | ❌ Not built |
| 7 | Tenant Rep Agreement | ❌ Not built |
| 8 | Dual Agency Disclosure | ❌ Not built |
| 9 | FARE Act Compliance Disclosure | ❌ Not built |
| 10 | Thank You / Confirmation pages | ❌ Not built |

---

## Legal Infrastructure (Agreements)

All pending. Matthew Correia (Greenberg Traurig) to review/draft.
- **Dual-Path Master Agreement** — toggles landlord-pay vs tenant-pay, anti-ghosting clause
- **Tenant Rep Agreement** — Path B deals and outside-broker situations
- **Visual Standard Clause** — landlord provides pro photography OR pays Bojan directly
- **Dual Agency Disclosure** — 19 NYCRR 175.7 compliance
- **FARE Act Disclosure** — itemized, signed by tenant, retained 3 years

---

## Revenue Streams

| Stream | Fee |
|--------|-----|
| Standard rental exclusives | 7% annual |
| Luxury rental exclusives | 5% annual |
| New dev institutional | 1 month minimum |
| Sales pivot from renter database | 2.5–3% (12-month trigger) |
| Corporate/relocation portal | Retainer + 5/7 |
| Outside broker velocity incentive | $500 flat (brokerage-to-brokerage) |

---

## Key People

| Person | Role |
|--------|------|
| Christofer Holland | Managing Director / Salesperson, Lic. #10401390448 |
| Andrew (KW) | Needs to back the rates — conversation not yet happened |
| Matthew Correia | Greenberg Traurig — agreements, FARE compliance. Reply pending. |
| Bojan | Photography vendor — Visual Standard Clause |
| Dave Roberts | Chase Home Lending — STB/buyer pipeline |
| Jacqueline Plaza | VP Chase — co-marketing/canvassing partner |

---

## STB Bridge (Critical)

The Listing Side → christoferholland.com buyer pipeline:
- Renter enters Sifter → asked "Want a free Buying Power review?"
- Yes → tagged high-liquidity → routes to STB Tuesday workshop (7–8 PM ET) + Chase pre-approval
- Converts 7% renter lead into 2.5–3% buyer lead
- STB link: `../workshops/stopthebleeding.html`

---

## Compliance (Built Into Every Page)

Compliance bar at top of every TLS page:
- Fair Housing Notice → dos.ny.gov PDF
- Standard Operating Procedures → kwnyc.com/sop *(verify URL)*
- Reasonable Accommodation → kwnyc.com/reasonable-accommodation *(verify URL)*
- Agency Disclosure → dos.ny.gov PDF

Footer contains:
- Christofer Holland, Licensed Real Estate Salesperson, NY Lic. #10401390448
- NY Living Solutions | Keller Williams NYC
- FARE Act compliance statement
- "Rates are those of this firm — not standard industry rates"
- Equal Housing Opportunity

---

## iOS Dark Mode

**The fix that works:** `<meta name="color-scheme" content="light">` + `<meta name="supported-color-schemes" content="light">` + `html { color-scheme: light; }` + `@media (prefers-color-scheme: dark)` block that:
1. Sets `body { background-color: #ffffff !important; color: #111111 !important; }`
2. Explicitly names white section classes with white backgrounds
3. Explicitly names dark sections (navy/black) with their dark backgrounds
4. NEVER uses `section { background: white }` globally — kills dark hero sections
5. NEVER uses the nuclear JS approach — breaks pages

**Key lesson:** If a page has an intentionally dark hero, iOS reads it as a dark page and fights you. Solution: make the hero white. Dark sections (STB bridge, footer, FARE banner) are fine — they're not the first element.

---

## TODAY'S PRIORITY LIST

### Immediate (this session):
1. **Polish `renters.html`** — full top-to-bottom pass:
   - Hero section (now white) — tighten layout, verify copy
   - Confirm dark mode works after hero color flip
   - Make sure all sections feel premium and consistent with index.html quality
2. **Verify `index.html`** dark mode is still working after all changes
3. **Update state doc** ← this file

### Next up:
4. `lease-break.html` — Exit your lease legally page
5. Micro-edits to index.html (Gemini's 3 flagged items: bot CTA wiring, ticker, agent recruitment footer link)
6. `sifter.html` — full standalone intake page

### Horizon:
7. Agreement pages (with Matthew Correia)
8. Developer dashboard
9. Renter page ads + social posts (5/7 campaign)
10. Trademark ITU filing (Class 036)
11. The Andrew conversation (rate backing)
12. Mann Report press section on christoferholland.com
13. `first-time-buyer.html` Google Ads landing page
14. `dothemath.html` calculator reorganization
15. Canvassing strategy (Jacqueline Plaza / Chase co-sponsor)

---

## Design Standards (Non-Negotiable)

- **White pages** — no black hero sections on TLS pages
- **Bebas Neue** for all display/headline text
- **DM Mono** for all labels, eyebrows, data
- **DM Sans** for body
- **Red #C8102E** for CTAs, accents, eyebrows
- **Navy #1A2744** for dark section backgrounds, compliance bar
- **Compliance bar** on every page — navy, 4 links, red dot separators
- **KW NYC** branding on every page
- **No "standard"** in rate copy ever
- Copy never changed without explicit instruction
- Read the full file before touching anything

---

## How We Work

- All files edited locally first: `/Users/ctholland/Documents/websites/christoferholland.com/`
- Test in browser locally before pushing to GitHub
- Push to GitHub → Netlify auto-deploys
- Claude delivers files via present_files tool
- Always read the full file before making changes
- Always grep to confirm strings before str_replace
- Copy uploaded files to `/home/claude/` before editing
- Deliver finished files to `/mnt/user-data/outputs/`

---

*To continue: paste this doc into a new conversation. All files are in the christoferholland.com project folder.*
