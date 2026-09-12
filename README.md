# D-Connect Delivery Services — Phase 1

Premium Nigerian foodstuff and provisions delivery website. Client-facing frontend prototype built with production-quality foundations.

**Live Prototype:** `npm run dev` → http://localhost:3000  
**WhatsApp Ordering:** https://wa.me/2348147400129

## Brand Direction

- **Deep Emerald:** #0E3327 (primary, trust, premium)
- **Warm Tangerine:** #FF6B18 (CTA, energy, warmth)
- **Cream / Off-white:** #FFFBF5 (background, abundance)
- **Charcoal:** #1A1F1E (text, sophistication)
- **Aesthetic:** Premium modern Nigerian delivery brand — not a generic grocery template, not Uber Eats clone
- **Typography:** Fraunces (display serif) + Plus Jakarta Sans (sans) — premium, editorial, Nigerian food culture
- **UI:** Sophisticated rounded (24-36px), clean spacing, high polish, intentional motion

## Phase 1 Delivered

### Architecture
- Next.js 16 App Router + TypeScript + Tailwind CSS v4
- Production-ready structure: `src/components/{layout,sections,ui}`, `src/lib`
- SEO-first: metadata, Open Graph, robots.txt, sitemap.xml, manifest, structured data
- Performance: next/image with AVIF/WebP, remote optimization, font-display swap, Turbopack
- Accessibility: semantic HTML, keyboard nav, focus states, alt text, reduced-motion support

### Design System
- Centralized tokens in `globals.css` via `@theme`
- Reusable primitives: Button, Badge, Section, Reveal (IntersectionObserver)
- WhatsApp conversion utilities with prefilled messages per category/product
- No fabricated business info — price-free prototype, honest claims

### Homepage Sections
1. **Header** — Sticky, backdrop-blur, premium logo, desktop nav (Home, Products, How It Works, About, Contact), WhatsApp CTA, accessible mobile menu with animation
2. **Hero** — Headline "Your Foodstuff. Delivered." Supporting copy about bulk foodstuff, provisions, WhatsApp convenience. Primary CTA Order on WhatsApp, secondary Browse Products. Premium food photography, floating cards, marquee trust bar
3. **Product Categories** — 7 categories: Rice & Grains, Garri & Cassava, Beans, Oils, Spices, Provisions, Other Foodstuff. Visually rich cards with image, number badge, WhatsApp enquiry, extensible to real catalogue pages
4. **How It Works** — 4 steps: Choose → Send order → We prepare → Delivered. Built to be wording-flexible for future business process changes
5. **Featured Products** — 8 realistic Nigerian foodstuff items (Long Grain Rice, Garri Ijebu, Honey Beans, Palm Oil, etc.) Presented as visual prototype — no prices, no stock, no fabricated availability. Enquire via WhatsApp
6. **Value Props / About** — Convenient, Reliable, Bulk-Friendly, Doorstep Delivery. Factual, general claims only — no invented stats, testimonials, awards
7. **Delivery Section** — "Foodstuff delivered to your location." Explains delivery checking via WhatsApp, no invented service areas. CTA Check Delivery Availability
8. **Final CTA** — Conversion-focused dark section with WhatsApp CTA
9. **Footer** — Brand, navigation, categories, contact (WhatsApp only, no fake address), SEO-friendly copy

### SEO Foundation
- Title: `D-Connect Delivery Services | Bulk Foodstuff & Provisions Delivered`
- Meta description: Human-written, keyword-natural (foodstuff delivery, bulk foodstuff, provisions, Nigerian foodstuff, etc.) — no stuffing
- Open Graph + Twitter cards, canonical, robots, sitemap, manifest
- Semantic heading hierarchy (h1 → h2 → h3), crawlable anchor navigation
- Image alt text descriptive (Nigerian foodstuff context)
- Structured data: Organization with contactPoint, areaServed Nigeria (no fabricated address)
- Local SEO architecture ready for future: address, city, state, delivery areas, Google Business Profile

### WhatsApp Conversion
- Primary URL: https://wa.me/2348147400129
- Centralized in `src/lib/whatsapp.ts` with message templates:
  - General order
  - Delivery check
  - Browse products
  - Category-specific
  - Product-specific
- All CTAs use `target="_blank" rel="noopener noreferrer"`
- Mobile: prominent sticky CTA in header, full-width in menu

### Motion Design
- Section-specific, not uniform:
  - Hero: sequenced entrance (badge → headline stagger → copy → CTAs → social proof)
  - Categories: StaggerContainer with 90ms delay, hover lift + scale
  - How It Works: grid reveal with progress line on hover
  - Products: card entrance + image scale on hover
  - Value Props: icon scale on hover
  - Delivery: image scroll-linked subtle translateY
  - Marquee: infinite CSS animation
- Respects `prefers-reduced-motion`
- No excessive parallax, no slow transitions, performant (transform + opacity only)

### Responsive Design
- Mobile-first, intentional compositions:
  - Header: compact, hamburger with animated X, prominent Order button
  - Hero: single column on mobile, image below content, touch-friendly CTAs (52px height)
  - Categories: 1 col mobile, 2 col tablet, 12-col grid desktop with varied spans
  - Products: 1 col mobile, 2 tablet, 4 desktop
  - All touch targets ≥ 44px, spacing scaled via Tailwind
- Tested: desktop, laptop, tablet, mobile layouts

## Tech Stack

- **Framework:** Next.js 16.3.5 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, CSS variables for design tokens
- **Images:** next/image with remotePatterns (Unsplash), AVIF/WebP
- **Icons:** Inline SVG, no icon library bloat
- **Utilities:** clsx + tailwind-merge for cn()
- **Lint:** ESLint + next/core-web-vitals

## Getting Started

```bash
# Install
npm install

# Dev (http://localhost:3000)
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint
```

## Project Structure

```
src/
  app/
    layout.tsx       # Metadata, viewport, fonts, structured data
    page.tsx         # Homepage composition
    globals.css      # Design tokens, animations, base styles
    robots.ts        # SEO robots
    sitemap.ts       # SEO sitemap
    manifest.ts      # PWA manifest
  components/
    layout/
      Header.tsx     # Sticky header + mobile menu
      Footer.tsx     # Conversion footer
    sections/
      Hero.tsx
      Categories.tsx
      HowItWorks.tsx
      FeaturedProducts.tsx
      ValueProps.tsx
      DeliverySection.tsx
    ui/
      Button.tsx     # Primary, secondary, ghost, WhatsAppButton
      Badge.tsx
      Section.tsx    # Section wrapper + SectionHeader
      Reveal.tsx     # IntersectionObserver reveal
  lib/
    constants.ts     # Categories, products, nav, values
    whatsapp.ts      # WhatsApp URL builder
    cn.ts            # Tailwind merge utility
public/
  icon-*.png         # Generated brand icons
  og-image.jpg       # OG image
```

## Content Rules (Enforced)

- No fabricated prices, discounts, stock, weights, reviews, testimonials, customer numbers, years, awards, certifications, partnerships, guarantees, addresses, delivery locations
- Prototype notices included where appropriate
- All claims factual and general
- Architecture ready for verified info insertion

## Performance Notes

- No large animation libraries (Framer Motion avoided intentionally)
- CSS-only animations where possible, transform/opacity only
- next/image lazy loading, priority for hero
- Font loading via Google Fonts CDN with system fallback (offline-safe build)
- Bundle optimized via `optimizePackageImports`

## Accessibility

- Semantic HTML (header, nav, main, section, footer)
- Keyboard navigable, visible focus rings
- Alt text for all images
- ARIA only where necessary (menu expanded, labels)
- Color contrast meets WCAG AA (emerald + cream, charcoal + cream, tangerine + white)
- Reduced-motion support

## Future Phases (Not Built Yet)

- Product catalogue pages
- Product detail pages
- Cart / order builder
- WhatsApp order generation with cart summary
- Delivery-location checking logic
- Contact forms
- Admin/product management

Phase 1 intentionally stops at polished frontend foundation for client visual/UX approval.

## Validation Checklist

- [x] Project runs (`npm run dev` / `npm run build`)
- [x] Homepage loads without console errors
- [x] Desktop layout intentional, not shrunk
- [x] Mobile layout intentional, touch-friendly
- [x] Full scroll, no overflow
- [x] Animation timing premium, controlled
- [x] Navigation works (anchor links, mobile menu)
- [x] All CTAs link to WhatsApp with correct number
- [x] Images load, optimized, alt text present
- [x] Typography hierarchy correct
- [x] Spacing clean, consistent
- [x] Accessibility basics pass
- [x] SEO metadata present, crawlable
- [x] No fabricated business info

## License

Private — D-Connect Delivery Services prototype.
