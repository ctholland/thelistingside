# THE LISTING SIDE — Master State Document
## All Pages · Brand System · Copy · Architecture
### Last Updated: April 2026

---

## IDENTITY

| Field | Value |
|-------|-------|
| Brand | The Listing Side |
| Director of Operations | Christofer Holland |
| License | NY Lic. #10401390448 — Licensed Real Estate Salesperson |
| Brokerage | NY Living Solutions \| Keller Williams NYC |
| Address | 90 John Street, Storefront, New York, NY 10038 |
| Phone | 917-207-1414 |
| Email (personal) | christofer@kw.com |
| Email (brand) | Info@thelistingside.com |
| Primary site | christoferholland.com |
| Brand domain | thelistingside.com (GoDaddy masked forward → christoferholland.com/thelistingside/) |

---

## BRAND DESIGN SYSTEM

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Red | `#C8102E` | Primary accent, CTAs, borders, compliance bar background, ticker separators |
| Navy | `#1A2744` | STB section background, footer, secondary dark sections |
| Black | `#111111` | Nav background, intercept bars, hero backgrounds (some pages) |
| White | `#ffffff` | Page background, form background, hero (renters, landlord) |
| Light Grey | `#f4f4f4` | Utility bar background, asset requirement blocks, form sections |
| Mid Grey | `#555555` | Body text |
| Border | `#e0e0e0` | Card borders, section dividers |
| Gold | `#C9A04C` | STB eyebrows, sales page accents |
| Green | `#1D9E75` | Savings/positive numbers only (math sections) |

**NEVER use pure black `#000000`. Never use rgba opacity hacks on text.**

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| Bebas Neue | Regular | All headlines, section titles, ticker, numbers |
| DM Sans | 400/500/600 | Body text, buttons, nav, form inputs |
| DM Mono | 400/500 | Eyebrows, labels, compliance bar, ticker items, metadata |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap
```

### Key CSS Values
- Compliance bar: `padding: 8px 24px`, full width, centered
- Sticky header: `position: sticky; top: 0; z-index: 9001; padding-top: env(safe-area-inset-top);`
- Utility bar: `background: #f4f4f4; border-bottom: 1px solid #e0e0e0;`
- Section padding: `padding-left: 48px; padding-right: 48px;` (24px mobile)
- Max content width: `1100px`
- Red top border on dark sections: `border-top: 4px solid #C8102E;`

---

## VETO LIST — NEVER USE

| Banned Word | Replacement |
|-------------|-------------|
| Protocol | The System / The Process / The Standard |
| Kill | Resolve / End / Eliminate |
| High-Velocity | Direct / Institutional |
| Clearinghouse | Registry (functional term only) |
| Standard Units | Just say "units under $10,000/mo" |
| Luxury Units | Just say "units $10,000/mo and above" |
| Winning the Unit | Securing the lease |
| Flash-Mob | Direct |
| Desk splits / eliminated splits | "Cut the friction" / "Institutional rates" |
| Private pool | Direct pipeline |
| Managed inventory | Direct inventory |
| Steering (accusations) | Remove |
| Negotiation (rental context) | Representation |
| Clearance | Verification |
| No-Fee Tax | Perpetual Rent Tax |
| Penalty month | Ongoing rent liability / remaining rent |
| Registry Registry | Registry (deduplicate) |

---

## FEE STRUCTURE — LOCKED

### Rentals (Tenant Representation)

| Rent | Fee | Notes |
|------|-----|-------|
| Under $10,000/mo | 7% of annual rent | Capped |
| $10,000/mo and above | 5% of annual rent | Capped |
| Owner pays 1.0 month+ | $0 to renter | 1:1 OP credit |
| Market standard | 8.33% (1 month) to 15% | For comparison |

**Owner-Credit Rule:** Any commission paid by the Owner is credited 1:1. If Owner pays 1.0 month or more → renter pays $0.

### Rentals (Owner / Landlord)

| Unit Type | Fee |
|-----------|-----|
| Units under $10,000/mo | 7% of annual rent — paid by owner at signing |
| Units $10,000/mo and above | 5% of annual rent — paid by owner at signing |
| New Development | 1 month minimum — structured per deal |

**Asset Requirement:** Owners provide professional-grade photography + floor plans + cover direct listing pass-throughs (StreetEasy, Zillow, RentHop). FARE Act compliant.

### Sales (Buyer & Seller Representation)

| Side | Fee | Notes |
|------|-----|-------|
| Listing (seller side) | 2.5% of sale price | Paid at close |
| Buyer agent co-broke | 2.5% of sale price | Seller's option — recommended |
| Staging | Pass-through | Seller pays directly |
| Photography/marketing | Pass-through | Seller pays directly — assets owned by seller |
| Buyer consultation | $0 | Free 1-hour buying power review |

**Legal note:** All commissions are negotiable and not set by law or any Realtor® association. REBNY buyer rep agreements required before showings (effective Jan 13, 2025).

### Lease Exit

| Item | Fee |
|------|-----|
| Replacement tenant sourcing | 7% of annual rent — paid at assignment signing |
| Liability stops | At replacement signing |

---

## COMPLIANCE LINKS (All Pages — Same 4 Links)

1. **Fair Housing Notice:** `https://d1e1jt2fj4r8r.cloudfront.net/documents/fairhousingnotice.pdf`
2. **Standard Operating Procedures:** `https://d1e1jt2fj4r8r.cloudfront.net/d36fff22-1ea6-464a-8fbd-aee2a2b71bb2/-jHhTwrOg/sop.pdf`
3. **Reasonable Accommodation:** `https://kwnyc.com/ada-disclosure`
4. **Agency Disclosure:** `https://image.info.rebny.com/lib/fe35157075640479701d77/m/1/68142058-8e73-4146-b9d6-54fc56484a07.pdf?utm_source=sfmc&utm_medium=email&utm_campaign=FARE+Act+Updated+Compliance&utm_term=Flyer&utm_id=1811434&sfmc_id=628153611`

---

## HEADER SYSTEM (All Pages — Identical Stack)

```
1. Red compliance bar (#C8102E) — 4 links, DM Mono, centered
2. Black nav — injected by nav.js — "THE LISTING SIDE / NY Living Solutions | KW NYC"
3. Light grey utility bar (#f4f4f4) — links to OTHER two/three paths
```

**Utility bar per page:**
- `index.html` (hub): I Am a Renter · I Need to Break a Lease
- `renters.html`: I Am a Landlord · I Need to Break a Lease
- `landlord.html`: I Am a Renter · I Need to Break a Lease
- `lease-break.html`: I Am a Renter · I Am a Landlord
- `sales.html`: I Am a Renter · I Am a Landlord · I Need to Break a Lease

---

## SITE ARCHITECTURE

```
christoferholland.com/
├── nav.js                              ← shared nav (TLS logo swap on /listingside/ and /thelistingside/)
│
├── listingside/
│   └── index.html                     ← HUB — portal only, three pillars
│
└── thelistingside/
    ├── renters.html                   ← Renter demand engine
    ├── landlord.html                  ← Owner/landlord listing page ✅ NEW
    ├── lease-break.html               ← Lease exit / liability resolution
    ├── sales.html                     ← Buy or Sell — sales listings ✅ NEW
    └── relocation.html                ← [PLANNED] Relocation accounts page
```

**Deploy path:** GitHub → Netlify auto-deploy → thelistingside.com masked forward via GoDaddy

---

## PAGE 1: `listingside/index.html` — THE HUB

**Purpose:** Portal only. Three pillars. No scrolling content. Switchboard.

**Hero:**
- Eyebrow: THE LISTING SIDE — NYC RENTAL REGISTRY
- Headline: WHAT BRINGS YOU HERE?
- Three pillars in a grid (white / black / white)

**Pillar 1 — I AM A RENTER (white):**
- Sub: NYC Rental Representation / 7% (Under $10k/mo) | 5% ($10k/mo & Above)
- Body: "Most agents charge 8.33% (one month) to 15%. We cap your fee at 7% for rent under $10,000/mo — and 5% for rent $10,000/mo and above — and apply a 1:1 credit for any commission the landlord pays. If the Owner pays the fee, you pay us $0. Better rates. Quality service."
- CTA: Get Pre-Cleared → `renters.html`

**Pillar 2 — I AM A LANDLORD (black):**
- Sub: Rent Your Unit(s). Protect Your Margin.
- Body: "Traditional NYC commissions are inflated to cover brokerage overhead and administration. We've cut the friction. 7% (under $10k) or 5% ($10k+) — you pay for representation, not desk fees."
- CTA: Submit Your Vacancy → `landlord.html`

**Pillar 3 — I NEED TO BREAK A LEASE (white):**
- Sub: Resolve Your Lease Liability.
- Body: "Under NY Law (§ 227-e), you remain responsible for rent until a replacement is found. We manage the transition, find the qualified replacement, and resolve your lease obligations."
- CTA: Start My Exit → `lease-break.html`

**Footer nav:** The Listing Side System — all 5 pages + christoferholland.com
**Netlify form:** `sifter-owner` (sifter modal still present for quick owner intake on hub)

---

## PAGE 2: `thelistingside/renters.html` — RENTER DEMAND ENGINE

**Hero:**
- Eyebrow: NYC Rental Representation
- Headline: Get Rental Representation At The Best Rate In NYC.
- Sub P1: "When the FARE Act passed, rents went up all over NYC to cover the coming broker fees. Now, those one-time fees are perpetually baked into inflated rents. Some rental agents are still trying to charge 15% of annual rent, while most broker fees have been reduced to one month — 8.33% of annual rent."
- Sub P2: "We charge 7% for rent under $10,000/mo and 5% for rent $10,000/mo and above. If the landlord pays a commission, that credit applies to your fee — in many cases, you pay us $0."
- Deal card (right): Two rows — Units under $10k (big red 7%) and Units $10k+ (big red 5%), each with "Market Standard: 8.33% (1 Month)" crossed out
- CTA: Request Representation (red) + See How It Works (ghost)

**Ticker:** Bebas Neue · "7% Renter Cap · 5% Over $10k/mo · Owner-Paid Credits Applied · Lease Resolution"

**6 Benefits:**
1. Capped Fee. No Games. — 7% under $10k / 5% over $10k / Owner credit 1:1 / $0 if Owner pays 1 month+
2. The Inventory Pipeline — building direct-to-owner pipeline, currently working open market
3. Pre-Cleared Status — income-verified, credit-reviewed
4. The Representation Certificate — locks in 7% under $10k / 5% over $10k
5. Open Market Mastery — full market access, fee protection
6. Stop The Bleeding: From Renting to Owning — weekly Tuesday 7–8 PM ET webinar

**Math section:**
- Headline: The Perpetual Rent Tax
- Body: FARE Act raised rents. Every "no-fee" has the fee baked in. We charge once — 7% (or 5% over $10k). Math favors the renter.
- Table: No-Fee Trap vs. TLS model over 1–3 years

**About the Model:**
- "Professional Representation. Open Market."
- TLS represents interests on open market, 7% (5% for units $10k+), transparent math
- Direct-to-owner pipeline coming

**The Long Game:**
- "Your Rental is the Beginning."
- Building toward ownership. When you're ready to buy, already in the system.
- Attribution: Christofer Holland, Director of Operations — margin-bottom: 48px

**How It Works (4 steps):**
- 01 Targeting · 02 Vitals · 03 Credit & Buying Power (live 7%/5% fee calc) · 04 Verification & Documents

**Step 04 body:** "Fee capped at 7% for units under $10,000 and 5% for units above. If the landlord pays the fee, the tenant pays $0. Owner-paid commissions credited 1:1."

**Sifter checkbox (legal — LOCKED):**
> "I understand the fee for representation is capped at 7% (for rent under $10,000/mo) or 5% (for rent $10,000/mo and above). I acknowledge that any commission paid by the Owner is credited 1:1 to my balance — if the Owner pays 1.0 month or more, my fee is $0. I acknowledge the NYS Agency Disclosure and understand Christofer Holland represents my interests."

**Success screen (Step 6):**
> "Data Received. Christofer Holland is reviewing your file. To lock your capped rate, check your email to sign the required NYS Disclosures."
> Note box: "Your agreement includes a mandatory Owner-Credit clause — if the landlord pays a commission, it is credited to you, reducing your out-of-pocket fee to $0."

**STB Bridge:** Navy section, 4px red top border. "Still Renting Next Year?" Tuesday webinar.
**Intercept above footer:** "Still locked into a lease? Exit Your Lease →" → lease-break.html
**Netlify form:** `sifter-renter` · Subject: "🔴 NEW RENTER — The Listing Side Registry"
**Hidden status field:** Pre-Cleared or Consultation Required (auto-tagged)

**Documents to send on signup (pending digital signing setup):**
1. NYS Disclosure Form for Landlord and Tenant (DOS-1735-f)
2. NYS Housing and Anti-Discrimination Disclosure (DOS-2156)
3. Exclusive Right to Represent Tenant — needs fee updated 8.3% → 7% under $10k / 5% over $10k
4. Rental Registration & Commission Agreement — needs fee updated 15% → 7% / 5%

---

## PAGE 3: `thelistingside/landlord.html` — OWNER LISTING PAGE ✅ NEW

**Hero:** Dark/black · "Rent Your Unit(s). Protect Your Margin." · Rate card: 7% vs 8.33% market / 5% vs 8.33% market / 1 month new dev

**6 Why TLS cards:** Capped Commissions · Pre-Vetted Demand · You Own the Assets · FARE Act Compliant · Professional Media Standard · Lease Resolution

**Asset Requirement section:**
- To maintain institutional rates: owner provides professional photography + floor plans
- Owner covers: StreetEasy + Zillow + RentHop pass-throughs directly
- Link: StreetEasy commission explainer
- Photography referrals available

**How It Works (4 steps):** Submit → Tenant Matching → Application & Agreement → Signed. Done.

**Intake form fields:**
- Contact (name/email/phone)
- Unit address
- Asking rent / availability
- Vacancy count (1 / 2–5 / 6–20 / 20+ portfolio)
- Photography status / photo URL link
- OP status (offering outside brokers?)
- Agreement checkbox: "7% (under $10k) or 5% ($10k+). Responsible for professional media and listing fees (StreetEasy, Zillow, RentHop) directly."

**Intercept:** "Have a Tenant Who Needs Out? Don't let the unit go dark." → lease-break.html
**Netlify form:** `landlord-intake` · Subject: "🏢 NEW OWNER VACANCY — The Listing Side"

---

## PAGE 4: `thelistingside/lease-break.html` — LEASE EXIT

**Hero:** White background · "Break Your Lease. End The Liability."
- Sub: "Under NY law, when you break a lease you're on the hook for every remaining month of rent until the landlord re-rents the unit. That's not a fine — that's your full remaining balance."
- Math card: $4,500/mo unit · Ongoing liability $9,000–$18,000+ · TLS 7% fee $3,780 · Liability stops at signing

**6 Scenarios:** Relocation · Travel/Sabbatical · Buying · Upgrading · Building Issues · Financial Pivot

**Legal cite:** NY Real Property Law § 227-e — landlord must make reasonable efforts to re-rent; tenant liable for remaining rent until done.

**Math table:** Monthly rent vs 2–4 month exposure vs 7% TLS fee. "Liability killed" at replacement signing.

**Math section body:** "Under NY Real Property Law § 227-e, your landlord must make reasonable efforts to re-rent — but you remain liable for every month of remaining rent until they do. On a $4,500 apartment, that's $9,000–$18,000+ in unpaid rent exposure over 2–4 months. We find the replacement tenant. Your liability stops the day they sign. Our 7% fee is the cost of making that happen cleanly."

**Intake form fields:**
- Contact (name/email/phone)
- Unit address
- Monthly rent
- Lease end date
- Reason for leaving (relocation / moving in together / buying / upgrading / building issues / travel/sabbatical / financial / other)
- Landlord-contacted status
- Photography ready?
- Authorization checkbox

**Intercept above footer:** "Once your liability is clear, find your next place at 7%. Get Pre-Cleared →" → renters.html
**Netlify form:** `lease-break` · Subject: "🔑 NEW LEASE EXIT — The Listing Side"

---

## PAGE 5: `thelistingside/sales.html` — BUY OR SELL ✅ NEW

**Hero:** Navy · "Buy or Sell In NYC. For Less." · Two path buttons: Seller / Buyer (toggle the forms)

**Fee tables (side by side):**

Seller: 2.5% listing + optional 2.5% co-broke + pass-through staging + pass-through photography
Buyer: 2.5% rep fee (ideally seller-paid) + free consultation

**6 Service cards:** Pricing Strategy · Professional Media · Co-op & Condo Board · Buyer Representation · Contract & Negotiation · Close

**Tabbed forms — Seller:**
- Contact
- Address / building type (pre-war co-op, post-war, modern condo, 2/3/4-family, townhouse, etc.)
- Unit type / asking price / sq ft
- Maintenance / common charges / taxes / assessments (amount + term) / flip tax (co-op)
- Amenity checkboxes: doorman, elevator, outdoor, parking, in-unit laundry, storage, gym, roof deck
- Photography status + photo link URL
- Timeline
- Agreement checkbox: "2.5% at close. Staging/marketing paid by me directly. All fees negotiable."

**Tabbed forms — Buyer:**
- Contact
- Annual household income
- Credit score
- DTI (debt-to-income): under 28% / 28–36% / 36–43% / 43+
- Pre-approval status / down payment available / guarantor
- Budget min + max
- Property type preference (co-op / condo / either / multi-family / townhouse)
- Bedrooms
- Target neighborhoods (text field)
- Timeline
- Agreement checkbox: "2.5% buyer agent fee. REBNY buyer rep agreement required before showings. All fees negotiable. NYS Agency Disclosure acknowledged."

**STB Section:** Navy, 4px red top border. Tuesday 7–8 PM. First-time buyer focused.
**Intercept:** "Renting while you plan to buy" → renters.html
**Netlify forms:** `seller-intake` + `buyer-sifter`

**Upcoming on this page:**
- Multiple photo upload field (file or link)
- Line of credit / building amenities (planned)
- Listing agreement link (once PandaDoc/DottedSign set up)
- Sales-specific agreements and riders
- Buyer vetting tie-in to Stop the Bleeding workshop

---

## PAGE 6: `thelistingside/relocation.html` — PLANNED

**Concept:** Dedicated page for corporate relocation clients and relocation account relationships (HR/relocation management companies).

**Headline direction:** "Relocating to New York? Best Rate in NYC. Professional Representation."

**The hook:** Relocation clients are high-value, time-pressured, and often have employer-paid or reimbursed moving budgets. They need fast turnaround, pre-vetted units, and a trusted agent. You already have the system — this is just a different front door to it.

**What differentiates:**
- Relocation clients often need both a rental (short-term) AND a purchase (medium-term)
- One relationship = two transactions
- Corporate HR contacts can send multiple employees
- Relocation management companies (like Cartus, SIRVA, Aires) pay referral fees back to the broker — worth exploring as a revenue line

**Form fields (planned):**
- Client name + contact
- Company name + HR contact (if corporate referral)
- Relocation timeline (start date, first day of work)
- Budget (rent or purchase)
- Needs: rental only / purchase only / rental then purchase
- Family size / bedrooms
- Neighborhood preferences (or commute-based: office address)
- Any corporate relocation allowance / budget cap

**Tone:** More professional/corporate than renter page. Less "forensic accusation," more "white glove efficiency." Still transparent on rates. Still 7%/5%.

**Connection to other pages:** 
- Rental → renters.html
- Purchase → sales.html buyer path
- STB workshop mentioned for purchase clients

---

## STOP THE BLEEDING PAGES

### Core Identity
- **Full name:** Stop The Bleeding — From Renting to Owning
- **Tagline:** "One Step at a Time"
- **Format:** Weekly Tuesday webinar · 7–8 PM ET · Free · Zoom
- **URL:** hartvigandholland.com/stopthebleeding (historic) → moving to christoferholland.com/workshops/stopthebleeding.html
- **TicketTailor registration**

### Brand Tie-In to The Listing Side
Stop The Bleeding appears on:
- `renters.html` — Benefit #6 and STB bridge section (navy, 4px red top border)
- `sales.html` — STB section at bottom (first-time buyers)
- `relocation.html` — mentioned for purchase clients (planned)
- It does NOT appear on `landlord.html` or `lease-break.html` — landlords don't care

### STB Core Copy (Locked)
**Eyebrow:** One Question Worth Asking
**Title:** Still Renting Next Year?
**Body:** "Every month you pay rent, you're building someone else's equity. That's not a lecture — it's math. A lot of NYC renters are closer to buying than they think. We run a free buying power review. Ten minutes. Most people are surprised."
**Quote:** "I work with NYC renters who are on the edge of buying but don't realize it yet." — Christofer Holland

**Workshop card:**
- Eyebrow: Every Tuesday — 7–8 PM ET — Free
- Title: Stop The Bleeding.
- Body: "One hour. The real cost of renting vs. owning in NYC. Bring your numbers — rent, savings, income. We do the math live. No sales pitch. Just the truth."
- CTAs: Reserve Your Seat → workshop page · Book a free Buyer Orientation Call → buyer-orientation.html

### STB Visual Standard
- Background: Navy `#1A2744`
- Top border: 4px solid `#C8102E`
- Eyebrow: DM Mono, gold `#C9A04C` (on dark backgrounds)
- Title: Bebas Neue, white
- Card: `rgba(255,255,255,.06)` background with subtle border

### STB Workshop Page (christoferholland.com/workshops/stopthebleeding.html)
**Status:** Built. Full speaker notes, PowerPoint, handout PDF (v7), agenda, Instagram story graphics all completed.
**Presenters:** Christofer Holland + Dave Roberts (Chase Home Lending) + Scott Scolnick, Esq. (Scolnick Law)
**Event:** 90 John Street, Manhattan · 6:30–8:30 PM
**Registration:** TicketTailor
**Post-event URL:** hartvigandholland.com/nextsteps

---

## BACKEND / FORMS

### Current Setup
| Form | Netlify Name | Subject Line | Goes To |
|------|-------------|--------------|---------|
| Renter Sifter | `sifter-renter` | 🔴 NEW RENTER — The Listing Side Registry | Your email |
| Owner Hub Sifter | `sifter-owner` | 🏢 NEW OWNER VACANCY — The Listing Side Registry | Your email |
| Owner Landlord Page | `landlord-intake` | 🏢 NEW OWNER VACANCY — The Listing Side | Your email |
| Lease Exit | `lease-break` | 🔑 NEW LEASE EXIT — The Listing Side | Your email |
| Seller | `seller-intake` | 🏠 NEW SELLER — The Listing Side Sales | Your email |
| Buyer Sifter | `buyer-sifter` | 🔑 NEW BUYER — The Listing Side Sales | Your email |

**All forms:** `data-netlify="true"` — live at Netlify deploy. Free up to 100 submissions/month.

### Automation (When Volume Warrants)
- **Zapier** (free tier: 5 Zaps, 100 tasks/month): Netlify webhook → Gmail auto-reply → Google Sheets row
- **Airtable** (free tier: 1,000 rows): Master registry database, filterable by zip/credit/income/buying power/status
- Cost to scale: Zapier $20/month / Airtable free for a long time

### Renter Sifter Logic
- Income ÷ 40 ≥ target rent AND credit ≥ 650 → **Pre-Cleared** (auto-tagged in hidden field)
- Either fails → **Consultation Required** (auto-tagged, different follow-up email)
- Live fee calculator: rent entered → shows "Fee ceiling: 7% = $X,XXX" or "5% = $X,XXX" + $0 if landlord pays

### Digital Signing (Pending)
- **Platform decision:** DottedSign (free for low volume) or PandaDoc (free tier)
- **4 documents to bundle:**
  1. NYS Disclosure Form for Landlord and Tenant (DOS-1735-f) ✅
  2. NYS Housing and Anti-Discrimination Disclosure (DOS-2156) ✅
  3. Exclusive Right to Represent Tenant — update 8.3% → 7%/5% ⚠️ PENDING
  4. Rental Registration & Commission Agreement — update 15% → 7%/5% ⚠️ PENDING
- **Success screen message:** "Check your email to sign the NYS Disclosures and Representation Agreement."

---

## PENDING ITEMS

### Immediate (Back in NYC)
- [ ] `git add . && git commit -m "V1.0 Launch - TLS" && git push`
- [ ] GoDaddy masked forward: thelistingside.com → christoferholland.com/thelistingside/
- [ ] Add `sales.html` and `landlord.html` to `nav.js` path detection
- [ ] Update `index.html` hub — add "Buy or Sell" as 4th path option or in footer
- [ ] Update Exclusive Right to Represent: 8.3% → 7% under $10k / 5% over $10k
- [ ] Update Rental Registration & Commission Agreement: 15% → 7%/5%
- [ ] Set up DottedSign or PandaDoc with corrected PDFs
- [ ] Verify all compliance link URLs are live

### Short-Term
- [ ] Zapier + Airtable setup (20 min at desk)
- [ ] relocation.html — build dedicated relocation page
- [ ] Update hub `index.html` to include sales path (4th pillar or section)
- [ ] Photo upload capability in landlord + seller forms
- [ ] Matthew Correia reply (Greenberg Traurig)
- [ ] The Andrew conversation (KW backing rates)
- [ ] Press/media section on christoferholland.com — add Mann Report feature

### Medium-Term
- [ ] Trademark ITU filing — Class 036, TEAS Plus $250
- [ ] Title company partnership outreach (Langdon Title first) using Mann Report as credibility
- [ ] Chase co-sponsor canvas campaign (Jacqueline at Chase)
- [ ] Ad campaign: Instagram + LinkedIn for renters and landlords
- [ ] Seller page photo gallery / unit showcase
- [ ] stbcalculator.html tablet optimization

---

## AD COPY (Reviewed — Pending Final Approval)

### AD 1 — Landlord / Instagram Square
> Attention Manhattan Landlords.
> You're paying too much in broker fees.
> The Listing Side — capped at 7% (under $10k) and 5% ($10k+).
> Pre-vetted. Income-qualified. Ready to sign.
> Christofer Holland · NY Lic. #10401390448
> NY Living Solutions | Keller Williams NYC
> Info@thelistingside.com
> #ExclusiveRepresentation #ManhattanRentals #TheListingSide

### AD 2 — Renter / Instagram Story
> Get Rental Representation At The Best Rate In NYC.
> Most agents charge 8.33% to 15%.
> We charge 7% — or 5% if your rent is over $10k.
> If the landlord pays — you pay us $0.
> → Request Representation — Free
> thelistingside.com/renters

### AD 3 — General / "Sign Up" Campaign
> Seeking quality representation for less?
> Fill out our Representation Sifter.
> 5 minutes. No commitment.
> 7% (5% over $10k). $0 if landlord pays.
> [REQUEST REPRESENTATION →]
> thelistingside.com

### AD 4 — Landlord Outreach Email / LinkedIn
> Subject: Institutional Rental Representation | [Building Name]
> I'm reaching out regarding the current vacancy strategy at [Building/Address].
> The Listing Side offers capped commissions — 7% (under $10k/mo) and 5% ($10k+/mo) — paid at signing.
> Owners provide professional photography and cover direct listing costs (StreetEasy, Zillow, RentHop).
> Our tenants are income-qualified, credit-reviewed, and organized by zip code before your unit goes live.
> Christofer Holland · Director of Operations — The Listing Side
> NY Living Solutions | Keller Williams NYC · 917-207-1414

---

## SOCIAL MEDIA STRATEGY (Planned)

### Platforms
| Platform | Audience | Tone |
|----------|----------|------|
| Instagram | Renters, first-time buyers | Punchy, hook-first, present tense |
| LinkedIn | Landlords, management companies, HR/relocation | Analytical, asset management language |
| TikTok | Young renters, first-timers | Education-first, math-based |
| Facebook | Broader NYC renter market | Accessible, community |

### Key Messages to Rotate
1. "Most agents charge 8.33% to 15%. We charge 7% — or 5% if your rent is over $10k."
2. "If the landlord pays a commission, you pay us $0."
3. "When the FARE Act passed, rents went up all over NYC. That fee is baked in now — forever."
4. "You're not avoiding a broker fee in a 'no-fee' apartment. You're paying it every month."
5. "Break your lease. End the liability. We find the replacement. You walk."
6. "Every month you pay rent, you're building someone else's equity."

### Metricool
- Scheduling tool in use
- Cannot add clickable links to Instagram Stories — use "Link in Bio" approach

---

## RELOCATION PAGE NOTES (Planned)

**URL:** `thelistingside/relocation.html`
**Headline:** Relocating to New York? Professional Representation. Best Rate in NYC.

**Value prop:**
- Relocation clients need fast, trusted, transparent
- One relationship = rental now + purchase later = two transactions
- Corporate HR contacts → repeat referrals
- Relocation management companies (Cartus, SIRVA, Aires) → referral fee revenue stream worth exploring

**Per-client flow:**
- Rental: → renters.html sifter (7%/5%)
- Purchase: → sales.html buyer sifter (2.5%)
- STB workshop: mentioned for purchase-track clients

**Form fields (planned):**
- Client name / contact
- Company name + HR contact (if corporate)
- Start date / first day of work
- Needs: rental / purchase / both
- Budget + family size / bedrooms
- Neighborhood or commute-based (office address → neighborhood match)
- Corporate relocation allowance

**Tone:** White-glove efficiency. Less forensic/accusatory than renter page. Professional.

---

## FILE PATHS (Local)

```
/Users/ctholland/Documents/websites/christoferholland.com/
├── nav.js
├── listingside/
│   └── index.html
└── thelistingside/
    ├── renters.html
    ├── landlord.html      ← NEW
    ├── lease-break.html
    ├── sales.html         ← NEW
    └── relocation.html    ← PLANNED
```

---

*The Listing Side · Clear Rates. Faster Closings. · 🔴*
