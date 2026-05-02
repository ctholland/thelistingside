# The Listing Side — V1.0 State Document
## Handoff for Social Media & Advertising Session

---

## IDENTITY

**Brand:** The Listing Side  
**Director of Operations:** Christofer Holland  
**License:** NY Lic. #10401390448 | Licensed Real Estate Salesperson  
**Brokerage:** NY Living Solutions | Keller Williams NYC  
**Address:** 90 John Street, Storefront, New York, NY 10038  
**Phone:** 917-207-1414  
**Email:** christofer@kw.com  
**Site:** christoferholland.com (The Listing Side lives here)  
**Acquired domain:** thelistingside.com (GoDaddy masked forward — pending)

---

## BRAND DESIGN SYSTEM

**Colors:** Red `#C8102E` · Navy `#1A2744` · Black `#111111` · White `#ffffff` · Light grey `#f4f4f4`  
**Fonts:** Bebas Neue (display/headlines) · DM Sans (body) · DM Mono (labels/metadata)  
**Tagline:** Clear Rates. Faster Closings.  
**Tone:** Institutional. Surgical. No marketing fluff. Asset management language for owners. Plain math for renters.

**VETO LIST — never use:**
- Protocol
- Kill (replace with: Resolve, End, Eliminate)
- High-Velocity (replace with: Direct, Institutional)
- Clearinghouse (replace with: Registry, as functional term only)
- Standard Units / Luxury Units
- Winning the Unit
- Flash-Mob
- Desk splits / eliminated splits (say: cut the friction, institutional rates)
- Private pool
- Managed inventory
- Steering (accusations)
- Negotiation (in rental context)

---

## THE THREE-PATH ARCHITECTURE

### Hub Page: `listingside/index.html`
**"What Brings You Here?"** — three-pillar gateway

**Pillar 1 — I AM A RENTER**
- NYC Rental Representation
- 7% (Under $10k/mo) | 5% ($10k/mo & Above)
- "Most agents charge 8.33% (one month) to 15%. We cap your fee at 7% for rent under $10,000/mo — and 5% for rent $10,000/mo and above — and apply a 1:1 credit for any commission the landlord pays. If the Owner pays the fee, you pay us $0."
- CTA: Get Pre-Cleared → `renters.html`

**Pillar 2 — I AM A LANDLORD**
- Protect Your Margin. / Institutional Rates. Zero Bloat.
- "Traditional NYC commissions are inflated to cover brokerage overhead and administration. We've cut the friction. 7% (under $10k) or 5% ($10k+) — you pay for representation, not desk fees."
- Asset Requirement: owners provide professional photography/floor plans and cover StreetEasy pass-throughs
- CTA: Submit Your Vacancy → opens owner sifter modal

**Pillar 3 — I NEED TO BREAK A LEASE**
- Resolve Your Lease Liability.
- "Under NY Law (§ 227-e), you remain responsible for rent until a replacement is found. We manage the transition, find the qualified replacement, and resolve your lease obligations."
- CTA: Start My Exit → `lease-break.html`

---

## FEE STRUCTURE (LOCKED — NEVER DEVIATE)

| Rent | Fee |
|------|-----|
| Under $10,000/mo | 7% of annual rent |
| $10,000/mo and above | 5% of annual rent |
| Owner pays 1.0 month or more | Renter pays $0 |

**Owner-Credit Rule:** Any commission paid by the Owner is credited 1:1 to the renter's balance. If Owner pays a full month's commission or more, renter's fee = $0.

**Market comparison:** Most agents charge 8.33% (one month) to 15%.  
**The FARE Act context:** When the FARE Act passed, rents went up all over NYC to cover the coming broker fees. Now those one-time fees are perpetually baked into inflated rents.

---

## PAGE 1: `thelistingside/renters.html`

**Hero eyebrow:** NYC Rental Representation  
**Hero headline:** Get Rental Representation At The Best Rate In NYC.  
**Hero sub (P1):** When the FARE Act passed, rents went up all over NYC to cover the coming broker fees. Now, those one-time fees are perpetually baked into inflated rents. Some rental agents are still trying to charge 15% of annual rent, while most broker fees have been reduced to one month — 8.33% of annual rent.  
**Hero sub (P2):** We charge 7% for rent under $10,000/mo and 5% for rent $10,000/mo and above. If the landlord pays a commission, that credit applies to your fee — in many cases, you pay us $0.

**Deal card (hero right side):**
- Row 1: Units Under $10,000/mo · Market Standard: 8.33% (1 Month) · The Listing Side: Capped at 7% · Big red **7%**
- Row 2: Units $10,000/mo and Above · Market Standard: 8.33% (1 Month) · The Listing Side: Capped at 5% · Big red **5%**

**Hero CTA:** Request Representation (button) + See How It Works (ghost)

**6 Benefits:**
1. Capped Fee. No Games. — 7% under $10k, 5% at $10k+, Owner credit 1:1, $0 if Owner pays 1 month+
2. The Inventory Pipeline — direct-to-owner pipeline building, currently working open market at 7% cap
3. Pre-Cleared Status — income-verified, credit-reviewed before you walk in
4. The Representation Certificate — locks in capped rate (7% under $10k / 5% over $10k), licensed advocate
5. Open Market Mastery — full market access, fee protection maintained
6. Stop The Bleeding: From Renting to Owning — weekly webinar Tuesday 7–8 PM ET

**Math section headline:** The Perpetual Rent Tax  
**Math body:** FARE Act raised rents. Every "no-fee" apartment has that fee baked in permanently. We charge once — 7% (or 5% over $10k). Math favors the renter.

**How it Works (4 steps):**
01 — Targeting · 02 — Vitals · 03 — Credit & Buying Power (live 7%/5% fee calc) · 04 — Verification & Documents (7% under $10k, 5% above, $0 if landlord pays)

**Sifter checkbox (legal):**  
"I understand the fee for representation is capped at 7% (for rent under $10,000/mo) or 5% (for rent $10,000/mo and above). I acknowledge that any commission paid by the Owner is credited 1:1 to my balance — if the Owner pays 1.0 month or more, my fee is $0. I acknowledge the NYS Agency Disclosure and understand Christofer Holland represents my interests."

**Success screen (Step 6):**  
"Data Received. Christofer Holland is reviewing your file. To lock your capped rate, check your email to sign the required NYS Disclosures."  
Note box: "Your agreement includes a mandatory Owner-Credit clause — if the landlord pays a commission, it is credited to you, reducing your out-of-pocket fee to $0."

**Netlify form:** `sifter-renter` · Subject: "🔴 NEW RENTER — The Listing Side Registry"  
**Hidden status field:** Pre-Cleared or Consultation Required (auto-tagged based on income/credit logic)

**STB intercept (above footer):** "Still locked into a lease? Exit Your Lease →" → `lease-break.html`

---

## PAGE 2: `listingside/index.html` — Owner Section

**Owners section headline:** Protect Your Margin.  
**Sub:** Traditional NYC commissions inflated by overhead. We cut the friction. 7% (under $10k) or 5% ($10k+). You pay for representation, not desk fees.

**Asset Requirement block (red border):** "To maintain institutional rates, owners provide professional-grade photography and floor plans, and cover direct marketing pass-throughs (StreetEasy). You save on the commission; you own the assets."

**Path 01:** 7% Commission. Pre-Vetted Demand. (under $10k units)  
**Path 02:** 5% Commission. Zero Overhead. (units $10k+)

**How It Works (3 steps):**
01 — Submit Your Unit (professional photography required)  
02 — The Sifter Runs (income/credit/move-in matched)  
03 — Signed. Done. (7% under $10k, 5% at $10k+, paid at signing)

**Owner sifter modal (4 steps):** neighborhood → unit details + photography toggle → OP status + FARE compliance → contact  
**Owner checkbox:** "I understand the fee is capped at 7% (under $10k/mo) or 5% ($10k+/mo). I acknowledge that to maintain this rate, I am responsible for providing professional media and covering third-party listing fees (StreetEasy) directly."  
**Netlify form:** `sifter-owner` · Subject: "🏢 NEW OWNER VACANCY — The Listing Side Registry"

---

## PAGE 3: `thelistingside/lease-break.html`

**Hero eyebrow:** Lease Break Solutions  
**Hero headline:** Break Your Lease. End The Liability.  
**Hero sub:** Under NY law, when you break a lease you're on the hook for every remaining month of rent until the landlord re-rents the unit. That's not a fine — that's your full remaining balance.

**Math card (hero):** $4,500/mo unit · Ongoing liability: $9,000–$18,000+ · Our 7% fee: $3,780 · Liability stops at signing.

**6 Scenarios:** Relocation · Travel/Sabbatical · Buying · Upgrading · Building Issues · Financial Pivot

**How It Works (4 steps):**  
01 — Submit Details · 02 — We List Your Unit · 03 — Replacement Found · 04 — You Walk Clean

**Math table:** Monthly rent vs ongoing liability (2–4 months) vs 7% TLS fee. "Liability killed" at signing.

**Legal cite:** NY Real Property Law § 227-e — landlord must mitigate but tenant liable until re-rented.

**Intake form fields:** name, email, phone, unit address, monthly rent, lease end date, reason (includes travel/sabbatical), photography, landlord-contacted, authorization checkbox  
**Netlify form:** `lease-break` · Subject: "🔑 NEW LEASE EXIT — The Listing Side"

**Intercept above footer:** "Once your liability is clear, find your next place at 7%. Get Pre-Cleared →" → `renters.html`

---

## NAVIGATION SYSTEM

**All three pages share identical header stack:**
1. Red compliance bar (`#C8102E`) — Fair Housing · SOP · Reasonable Accommodation · Agency Disclosure
2. Black nav — "THE LISTING SIDE / NY Living Solutions | Keller Williams NYC" + hamburger
3. Light grey utility bar (`#f4f4f4`) — links to the OTHER two paths (never the current page)

**Utility bar per page:**
- index: "I Am a Renter" | "I Need to Break a Lease"
- renters: "I Am a Landlord" | "I Need to Break a Lease"
- lease-break: "I Am a Renter" | "I Am a Landlord"

**Footer (all pages — identical):** Navy `#1A2744`, red top border, social icons, "The Listing SIDE", "Clear Rates. Faster Closings.", Registry Protocol nav, compliance links, Equal Housing Opportunity

---

## TICKER TAPE (per page)

**index.html:** 7% Renter Cap · 5% Over $10k/mo · Owner-Paid Credits Applied · Lease Resolution Services · Unit Onboarding · NYS Licensed

**renters.html:** 7% Renter Cap · 5% Over $10k/mo · Owner-Paid Credits Applied · Lease Resolution

**lease-break.html:** no ticker

---

## BACKEND / FORMS

**Hosting:** Netlify (free tier — 100 submissions/mo)  
**Forms:** data-netlify="true" on all three forms — live at deploy  
**Notifications:** email on every submission  
**Status tagging:** renters sifter auto-tags Pre-Cleared vs Consultation Required based on income/credit logic

**When you're back in NYC (20 min setup):**
1. Push to GitHub: `git add . && git commit -m "V1.0 Launch - TLS" && git push`
2. Netlify auto-deploys
3. Zapier: Netlify webhook → Gmail (Cleared Certificate email vs Consultation email)
4. Airtable: every submission → row in database filterable by zip/credit/income/buying power

**Signing platform (pending decision):** DottedSign or PandaDoc free tier  
**Four PDFs to be updated and bundled:**
- NYS Disclosure Form for Landlord and Tenant (DOS-1735-f) ✅ ready
- NYS Housing and Anti-Discrimination Disclosure (DOS-2156) ✅ ready
- Exclusive Right to Represent Tenant — needs fee updated from 8.3% → 7%/5%
- Rental Registration & Commission Agreement — needs fee updated from 15% → 7%/5%

---

## FILES (local path)

```
/Users/ctholland/Documents/websites/christoferholland.com/
├── nav.js                              ← shared nav (TLS logo swap)
├── listingside/
│   └── index.html                     ← Hub/Gateway + Owner page
└── thelistingside/
    ├── renters.html                   ← Renter demand engine
    └── lease-break.html               ← Lease exit / inventory generator
```

---

## PENDING ITEMS

- [ ] Push V1.0 to GitHub when back in NYC
- [ ] GoDaddy: thelistingside.com masked forward to christoferholland.com/thelistingside/
- [ ] Update Exclusive Right to Represent: 8.3% → 7% under $10k / 5% at $10k+
- [ ] Update Rental Registration & Commission Agreement: 15% → 7%/5%
- [ ] Set up DottedSign or PandaDoc with corrected PDFs
- [ ] Zapier + Airtable automation (20 min at desk)
- [ ] Replace PandaDoc placeholder URL in Step 6 success screen
- [ ] Matthew Correia reply (Greenberg Traurig)
- [ ] Andrew conversation (KW backing rates)
- [ ] Trademark ITU filing — Class 036, TEAS Plus $250

---

## FOR THE NEXT SESSION (Social Media & Advertising)

**Key messages to build assets around:**

1. "Most agents charge 8.33% to 15%. We charge 7% — or 5% if your rent is over $10k."
2. "If the landlord pays a commission, you pay us $0."
3. "When the FARE Act passed, rents went up all over NYC. That fee is baked into your rent now — forever."
4. "You're not avoiding a broker fee in a 'no-fee' apartment. You're paying it every month."
5. "Break your lease. End the liability. We find the replacement. You walk."

**Platforms to cover:** Instagram · LinkedIn · TikTok · Facebook  
**Formats needed:** Story graphics · Feed posts · Carousel · Short-form video scripts · LinkedIn outreach copy for building owners/management companies

**Brand voice by platform:**
- Instagram/TikTok: punchy, hook-first, present tense
- LinkedIn: analytical, asset management language, owner-facing
- Email (outreach): institutional, direct, subject line first

🔴
