# THE LISTING SIDE — Master State Document
*Last updated: May 3, 2026*

---

## SITE

**Domain:** thelistingside.com
**Hosting:** Netlify (connected to GitHub — ctholland/thelistingside)
**Push workflow:**
```
cd ~/Documents/websites/thelistingside.com
git add .
git commit -m "updating"
git push origin main
```

---

## BRAND

**Colors:** Red `#C8102E` · Navy `#0f1c35` · White `#ffffff` · Light `#f0f3f8` · Mid `#556070`
**Fonts:** Bebas Neue (display/headlines) · DM Sans (body) · DM Mono (labels/eyebrows) · Cormorant Garamond (italic pull quotes)
**Logo files:**
- `NYLS_KW_NYC_White_Red_copy.png` — KW logo, transparent background (black removed)
- `tls-white-on-black.png` — TLS profile icon
- `favicon.ico` — site favicon (root folder)

---

## PAGES

| File | Purpose | Status |
|------|---------|--------|
| `index.html` | Homepage — Choose Your Path | Live |
| `landlord.html` | Landlord listing intake | Live |
| `renter.html` | Renter representation | Live (renamed from renters.html) |
| `lease-break.html` | Lease break / exit | Live |
| `listings.html` | Current inventory | Live |
| `sales.html` | Buy or sell | Live |
| `relocation.html` | Corporate/individual relocation | Live |
| `about.html` | Christofer Holland bio | Built — push when ready |

---

## NAV.JS

Single file in root. Injects:
1. Compliance bar (red, 4 links)
2. Main nav (black, red accent, hamburger on mobile)

**Links in nav:**
- Landlords → `landlord.html`
- Renters → `renter.html`
- Lease Break → `lease-break.html`
- Listings → `listings.html`
- Relocation → `relocation.html`
- Sales → `sales.html`
- christoferholland.com ↗ (external, new tab)

**Every page must have at top of `<body>`:**
```html
<div id="nav"></div>
<script src="nav.js"></script>
```

---

## IMAGES FOLDER

| File | Used For |
|------|----------|
| `christoferholland.png` | Agent photo (transparent background) |
| `NYLS_KW_NYC_White_Red_copy.png` | KW logo (transparent) |
| `og-listing-side.png` | OG social share image (1200x630) |
| `favicon.ico` | Browser favicon |

**OG meta tag (all pages):**
```html
<meta property="og:image" content="https://thelistingside.com/images/og-listing-side.png">
<meta property="og:url" content="https://thelistingside.com/">
```

---

## FEE STRUCTURE & COMPLIANCE LANGUAGE

**Rental listings:**
- 7% for units under $10,000/mo
- 5% for units $10,000/mo and above
- 1 month minimum for new development
- Owner covers platform listing fees (StreetEasy, Zillow, RentHop)
- Commission paid at signing
- FARE Act compliant (Local Law 119 of 2024)

**Sales & purchase representation:**
- All fees negotiable · Not set by law
- NEVER say "standard" regarding rates

**Relocation / RMC:**
- Referral fees honored per standard agreement (typically 25–35%)
- Contingent on a full 15% gross commission arrangement

**Universal footer language:**
> All fees negotiable and not set by law · FARE Act compliant (Local Law 119 of 2024) · Fair Housing laws apply

**Compliance bar links (all pages via nav.js):**
1. Fair Housing Notice
2. Standard Operating Procedures
3. Reasonable Accommodation
4. Agency Disclosure

---

## INSTAGRAM — @thelistingside

**Profile:** TLS white-on-black logo · `thelistingside` username
**Bio:**
```
30+ years in Manhattan.
NY Living Solutions | Keller Williams NYC
Rentals · Sales · Every side.
```
**Link:** thelistingside.com

**Post format:** 1080x1350 (portrait) preferred
**Caption structure:** Copy first · invisible Braille spacer (⠀) between sections · hashtags in first comment

**Hashtags (first comment):**
`#TheListingSide #NYCRealEstate #ManhattanRealEstate #NYCLandlord #NYCRentals #LandlordNYC #RentNYC #FAREAct #KellerWilliamsNYC #NoBrokerFee #NYCAgent #ManhattanRentals #NYCHousing #AnySideOfTheDeal`

**Content hashtag:** `#unrealestate`

---

## WATERMARK ASSETS

| File | Use |
|------|-----|
| `watermark-7pct.png` | 7% ghost — red, transparent |
| `watermark-5pct.png` | 5% ghost — navy, transparent |
| `watermark-TLS.png` | TLS ghost — navy, transparent |
| `watermark-NYC-red.png` | NYC ghost — red |
| `watermark-NYC-black.png` | NYC ghost — black |
| `watermark-CH-red.png` | CH initials — red |
| `watermark-CH-black.png` | CH initials — black |
| `watermark-fareact-red.png` | FARE ACT ghost — red |
| `watermark-fareact-navy.png` | FARE ACT ghost — navy |

---

## COPY PRINCIPLES

- **Present tense always** — reader is in the moment
- **No "standard" re: rates** — compliance requirement
- **No "buyer-exclusive"** — full service practice
- **"Any side of the deal"** — not "every side" (dual agency implication)
- **FARE Act** — always spell out (Local Law 119 of 2024) on first reference
- **StreetEasy over Zillow** in NYC-specific copy
- **P.S. note on renter posts:** "If the landlord is covering the broker fee, you pay nothing at signing"

---

## AGENT BIO — Christofer Holland

Licensed Real Estate Salesperson
NY Living Solutions | Keller Williams NYC
NY Lic. #10401390448

**Bio copy:**
> I moved to Manhattan and never left. Gramercy. Kips Bay. Murray Hill. Thirty years of paying rent, watching neighborhoods shift, and learning the difference between a good building and a great deal.
>
> I work with landlords who need their units filled, renters who need real representation, buyers who want an honest read before they sign anything, and sellers who need clean execution. No conflicts, no divided loyalties — just straight talk and a market you can actually navigate.
>
> If it stops making sense for you, we stop. That's not a line. That's how I work.

**Pull quote:** "I don't perform. I don't chase. I deal in reality."

**Credentials:**
- Gramercy, Kips Bay & Murray Hill — 30+ years as a Manhattan resident
- Columbia College Chicago — Communications & Music Business
- Landlord rep · Rentals · Buyers · Sellers · Relocation

---

## CONTACT

917-207-1414
info@thelistingside.com
thelistingside.com
90 John Street, Storefront, New York, NY 10038
