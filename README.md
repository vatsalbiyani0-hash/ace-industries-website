# ACE Industries — Industrial Manufacturing Website

> **Brand positioning:** *Trusted ISO 9001 Certified Manufacturer of Power Distribution & Metering Enclosures.*

A complete, modern, responsive, SEO-optimized marketing website for **ACE Industries**, an ISO 9001 certified manufacturer of LT distribution boxes, meter boxes, feeder pillars, smart-meter enclosures and customized power-distribution solutions.

The site is built as a **fast, dependency-free static website** (HTML5 + modern CSS + vanilla JavaScript). It loads instantly, ranks well, and deploys to any static host (Netlify, Vercel, GitHub Pages, S3, IIS, Apache, Nginx) with **zero build step**.

---

## 1. Quick start

No build tooling is required. Just open or serve the folder.

```powershell
# Option A — open directly
Start-Process .\index.html

# Option B — serve locally (recommended, enables correct routing & fetch)
# Python
python -m http.server 8080
# or Node
npx serve .
```

Then browse to `http://localhost:8080`.

> Google Fonts load from CDN, so an internet connection gives the intended typography. The site still renders cleanly with system-font fallbacks offline.

---

## 2. Sitemap

```
ACE Industries
├── Home ................... index.html
│   ├── Hero + dual CTA (Request a Quote / Download Catalogue)
│   ├── Approved-vendor logo marquee
│   ├── A. Company Overview
│   ├── Stats band
│   ├── B. Product Categories + Manufacturing Methods
│   ├── C. Why Choose ACE Industries
│   ├── D. Industries Served
│   ├── E. Approved Vendor Network (16 utilities)
│   ├── F. Major Clients (9 EPC/infra)
│   ├── G. Manufacturing Facility
│   └── H. Inquiry CTA
├── About Us .............. about.html
│   └── History · Vision · Mission · Quality Policy · Manufacturing Strength · ISO · Leadership
├── Products .............. products.html
│   └── Filterable catalog (14 products) · Manufacturing tech · Download catalogue
├── Approvals ............. approvals.html
│   └── ISO 9001 · Utility approvals · Testing reports · QA process
├── Clients ............... clients.html
│   └── Client grid · Project references · Stats · Testimonials
├── Infrastructure ........ infrastructure.html
│   └── Factory overview · Equipment · Testing facilities · Inspection process
└── Contact ............... contact.html
    └── Contact info · Inquiry/vendor form · Google Map · WhatsApp
```

Machine-readable: [`sitemap.xml`](sitemap.xml) · crawler rules: [`robots.txt`](robots.txt)

---

## 3. File structure

```
ACE WEBSITE/
├── index.html              # Home
├── about.html              # About Us
├── products.html           # Products (filterable catalog)
├── approvals.html          # Approvals & Certifications
├── clients.html            # Clients & testimonials
├── infrastructure.html     # Manufacturing facility
├── contact.html            # Contact + form + map
├── css/
│   └── style.css           # Complete design system + components + responsive
├── js/
│   └── main.js             # Interactions (menu, reveal, counters, filters, form)
├── assets/
│   ├── favicon.svg         # Brand mark / favicon
│   ├── logo.svg            # Horizontal logo (reuse / email / print)
│   └── og-image.svg        # Social share preview (1200×630)
├── sitemap.xml
├── robots.txt
├── site.webmanifest        # PWA metadata
└── README.md               # This document
```

---

## 4. UI design system

### 4.1 Color palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` (Power Blue) | `#003366` | Brand base, headings, primary buttons |
| `--color-primary-600/500` | `#013f7a` / `#0a4f93` | Gradients, hovers |
| `--color-primary-50` | `#eef4fb` | Icon tints, soft fills |
| `--color-secondary` (Industrial Orange) | `#FF6B00` | Primary CTAs, accents, highlights |
| `--color-accent` (Energy Green) | `#008A4E` | Success, "approved", checkmarks |
| `--color-bg` / `--color-bg-alt` | `#FFFFFF` / `#F4F6F9` | Page & alternating section backgrounds |
| `--color-ink` / `--color-text` / `--color-muted` | `#14233A` / `#33445C` / `#6A7892` | Text hierarchy |
| `--color-dark` | `#081A31` | Footer, top bar |

All colors are defined as CSS custom properties in `:root` (see [css/style.css](css/style.css#L37)). Change a brand color in one place to re-theme the entire site.

### 4.2 Typography

- **Headings / display:** `Barlow` & `Barlow Semi Condensed` — an industrial, engineering-grade sans.
- **Body / UI:** `Inter` — highly legible at all sizes.
- Loaded from Google Fonts with `preconnect`; system-font fallbacks included.

| Token | Clamp range | Role |
|-------|-------------|------|
| `--fs-hero` | 2.4 → 4.25rem | Home hero H1 |
| `--fs-h1` | 2 → 3.1rem | Page H1 |
| `--fs-h2` | 1.7 → 2.5rem | Section titles |
| `--fs-h3` | 1.3 → 1.6rem | Card titles |
| `--fs-body` | 1rem | Paragraphs |

Type scales fluidly with the viewport via `clamp()` — no separate mobile sizes needed.

### 4.3 Spacing, radii, elevation

- **Spacing scale:** `--space-1…9` (0.25rem → 6rem) + fluid `--section-y`.
- **Radii:** `--radius-sm/…/xl` (6 → 24px) + `--radius-pill`.
- **Shadows:** `--shadow-xs/sm/_/lg` plus brand-tinted `--shadow-primary` / `--shadow-secondary`.
- **Motion:** shared easing (`--ease`, `--ease-out`) and durations (`--t-fast/_/slow`).

---

## 5. Component library

All components live in [css/style.css](css/style.css) (organized & numbered) and are reused across pages:

| Component | Class(es) | Notes |
|-----------|-----------|-------|
| Top utility bar | `.topbar` | Phone, email, hours, ISO badge, socials |
| Sticky header | `.header`, `.nav`, `.nav-toggle` | Shrinks/shadows on scroll; mobile drawer |
| Buttons | `.btn` + `--primary/secondary/accent/ghost/outline/light` + `--lg/sm/block` | |
| Hero | `.hero`, `.hero__panel`, `.hero__floating` | Animated grid, floating badges |
| Page hero | `.page-hero`, `.breadcrumbs` | Inner-page header |
| Section heading | `.section-head`, `.eyebrow` | `--center` modifier |
| Stats band | `.stats`, `.stat` | Animated counters via `data-count` |
| Product card | `.product-card`, `.product-card--detailed` | Tag, specs, features, materials |
| Feature card | `.feature-card` + `--orange/green` | Left accent bar on hover |
| Industry card | `.industry-card` | Image/gradient overlay |
| Logo / vendor / client card | `.logo-card`, `.logo-grid` | Auto-colored monograms |
| Filters | `.filters`, `.filter-btn` | Category filtering (JS) |
| Split section | `.split` + `--reverse` | Media + content, floating badge |
| Process steps | `.process`, `.process-step` | Auto-numbered |
| Spec table / chips | `.spec-table`, `.chip` | Product specs |
| Cert / timeline / accordion | `.cert-card`, `.timeline`, `.accordion` | |
| Testimonials | `.testimonial`, `.stars` | |
| CTA banner / strip | `.cta-band`, `.cta-strip` | |
| Forms | `.form-card`, `.field`, `.form-success` | Validated demo form |
| Footer | `.footer` | 4-column + legal bar |
| Floating actions | `.fab` (`--whatsapp` / `--inquiry`), `.back-to-top`, `.sticky-cta` | Sticky inquiry + WhatsApp |

---

## 6. JavaScript behavior ([js/main.js](js/main.js))

Single ~6 KB file, no dependencies. Driven by `data-*` hooks:

| Hook | Behavior |
|------|----------|
| `[data-header]` | Adds shadow when scrolled |
| `[data-nav-toggle]` / `[data-nav]` / `[data-nav-backdrop]` | Mobile drawer + ESC/backdrop close |
| `[data-reveal]` (+`data-reveal-delay`) | Scroll-reveal via `IntersectionObserver` |
| `[data-count]` | Animated number counters |
| `[data-filter]` / `[data-category]` | Product category filtering |
| `[data-accordion]` | Accessible accordion |
| `[data-marquee]` | Seamless logo loop |
| `[data-demo-form]` / `[data-form-success]` | Front-end form validation + success state |
| `[data-back-to-top]`, `[data-year]` | Back-to-top, dynamic year |

Respects `prefers-reduced-motion` (animations disabled automatically).

---

## 7. Responsive layouts

Mobile-first, fluid system. Key breakpoints:

| Breakpoint | Changes |
|------------|---------|
| `> 1080px` | Full multi-column desktop |
| `≤ 1080px` | Footer & 6-col logo grids condense |
| `≤ 940px` | Top bar hidden, hamburger drawer, hero stacks, splits stack, sticky bottom CTA shown |
| `≤ 620px` | Single-column grids, stacked stats/forms |
| `≤ 400px` | Single-column logo grids |

Verified layouts: 320, 375, 414, 768, 1024, 1280, 1440, 1920 px.

---

## 8. SEO structure

- **Unique `<title>` + meta description + keywords** per page, targeting the supplied keyword set (Distribution Box Manufacturer, LT Distribution Box Manufacturer, Meter Box Manufacturer India, Smart Meter Box Manufacturer, Feeder Pillar Manufacturer, SMC Meter Box Manufacturer, Electrical Enclosure Manufacturer, Utility Approved Vendor, Power Distribution Equipment).
- **Open Graph + Twitter Card** tags with `og-image.svg`.
- **JSON-LD structured data:** `Organization`, `WebSite`, `CollectionPage`/`ItemList` (products), `AboutPage`, `ContactPage`, and `BreadcrumbList` on every inner page.
- **Semantic HTML5** landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`), one `h1` per page, logical heading order.
- `canonical` URLs, `theme-color`, `sitemap.xml`, `robots.txt`, `site.webmanifest`.
- Accessibility: ARIA labels, `aria-current`, keyboard-operable menu/accordion, focus-visible outlines, `alt`/`role` on inline SVG imagery, AA-contrast palette.

---

## 9. Wireframe reference (Home)

```
┌──────────────────────────────────────────────────────────┐
│ TOPBAR  phone · email · hours          ISO badge · social │
├──────────────────────────────────────────────────────────┤
│ HEADER  [logo]      nav links            [Request a Quote]│  ← sticky
├──────────────────────────────────────────────────────────┤
│ HERO                                                       │
│  badges                          ┌───────────────────────┐│
│  H1 headline (accent)            │  enclosure illustration││
│  subheadline                     │   ◦ ISO floating card ││
│  [Request Quote][Download Cat.]  │   ◦ clients card      ││
│  20+   16+   500K+  (trust)      └───────────────────────┘│
├──────────────────────────────────────────────────────────┤
│ APPROVED-VENDOR MARQUEE  (auto-scrolling utility names)   │
├──────────────────────────────────────────────────────────┤
│ A. OVERVIEW   [factory img + badge] | text + checklist+CTA│
├──────────────────────────────────────────────────────────┤
│ STATS BAND    10+ | 16+ | 500K+ | 315 KVA    (dark)       │
├──────────────────────────────────────────────────────────┤
│ B. PRODUCTS   filter row · 6 product cards · 4 methods    │
├──────────────────────────────────────────────────────────┤
│ C. WHY ACE    3×2 feature cards + 2 wide                  │
├──────────────────────────────────────────────────────────┤
│ D. INDUSTRIES 6 image-overlay cards                       │
├──────────────────────────────────────────────────────────┤
│ E. VENDORS    16 monogram logo cards                      │
├──────────────────────────────────────────────────────────┤
│ F. CLIENTS    9 monogram logo cards                       │
├──────────────────────────────────────────────────────────┤
│ G. FACILITY   text+checklist | [facility img + badge]     │
├──────────────────────────────────────────────────────────┤
│ H. CTA BAND   "Looking for Reliable…?"  [Quote][Call]     │
├──────────────────────────────────────────────────────────┤
│ FOOTER   brand+certs | Company | Products | Contact       │
│          legal bar                                        │
└──────────────────────────────────────────────────────────┘
  Floating: ◀ back-to-top      WhatsApp ● / Inquiry ▣ ▶  (sticky CTA on mobile)
```

Inner pages share: `page-hero` + breadcrumbs → content sections → CTA band → footer.

---

## 10. Developer handoff notes

1. **Shared header/footer are inlined** in each HTML file (for SEO + no-JS robustness). When editing nav, contact details, or footer, update **all 7 pages**, or introduce a templating step / server include (e.g. Eleventy, Astro, PHP includes) keying off the existing markup.
2. **Real company details are already in place** (from the official company profile): ACE Industries, established 2016, ISO 9001:2015 **&** NSIC certified; phone **+91 77288 85999**; email **info@aceindustries.co**; address **Plot No. 461, Road No. 17, Near Police Chowki, Vishwakarma Industrial Area, Akera Dungar, Jaipur, Rajasthan**. Verify the postal code (`302013` placeholder) and the Google Maps `q=` query against the exact plot, and add a landline if available.
3. **Replace remaining placeholders before launch:**
   - Inline SVG product/factory illustrations → real product photography (keep the `.product-card__media` / `.split__img` containers and aspect ratios).
   - Monogram `.logo-card__monogram` → official utility/client logos (swap the `<div>` for an `<img>`).
   - "Datasheet"/"Download Catalogue" links currently route to Contact → point to real PDF assets.
   - Confirm utility-approval and client lists, and the testimonials, against current records.
4. **Wire up the contact form:** [`contact.html`](contact.html) uses a front-end demo handler. Point the `<form>` at your endpoint (Formspree, your CRM, or a serverless function) and remove/adjust `data-demo-form` handling in [js/main.js](js/main.js).
5. **Analytics & consent:** add your analytics snippet before `</body>` and a cookie/consent banner if required.
6. **Domain:** canonical/OG URLs use `https://www.aceindustries.co/` — update if the production domain differs.
7. **Performance:** already lean (no frameworks, inline SVG, lazy map iframe, system-font fallbacks). For further gains, self-host fonts and convert hero illustrations to optimized WebP if photos are added.

---

## 11. Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari) and iOS/Android. Uses `IntersectionObserver`, CSS Grid, custom properties, `clamp()`, and `backdrop-filter` with graceful fallbacks.

---

© ACE Industries — ISO 9001:2015 Certified Manufacturer. Design & front-end delivered as a static, handoff-ready package.
