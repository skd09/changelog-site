# The Changelog — Website

Marketing website for **The Changelog** iOS/Android app.
Built with **Next.js 14 + TypeScript + Tailwind CSS**.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage (Hero, Features, About sections) |
| `/privacy` | Privacy Policy (deep-linked from app settings) |
| `/terms` | Terms of Service (deep-linked from app settings) |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

### Vercel (recommended)
```bash
npx vercel --prod
```

### Any static host
The site can be statically exported:
```bash
# Add to next.config.ts: output: "export"
npm run build
# Outputs to /out — deploy to Netlify, Cloudflare Pages, etc.
```

---

## Customisation

### Store links
Update the App Store and Google Play links in:
- `components/Hero.tsx` — hero store buttons
- `components/Footer.tsx` — footer store buttons

### Contact email
Replace `hello@thechangelog.app` in:
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `components/Footer.tsx`

### App deep links (from mobile app)
The app links directly to:
- `https://yoursite.com/privacy` → Privacy Policy
- `https://yoursite.com/terms` → Terms of Service

These are proper Next.js routes, so they work with SSR, static export, and direct URL access (no JavaScript routing needed).

---

## Accessibility

- ✅ Skip-to-content link
- ✅ Semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`)
- ✅ ARIA labels on all interactive elements
- ✅ `role` and `aria-label` on navigation landmarks
- ✅ `aria-expanded` / `aria-controls` on mobile menu
- ✅ `aria-hidden` on decorative elements
- ✅ Focus-visible styles (WCAG 2.1 AA)
- ✅ `prefers-reduced-motion` respected
- ✅ `forced-colors` / high contrast mode support
- ✅ Breadcrumb navigation on policy pages
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Descriptive `alt` / `aria-label` on all icons and buttons
- ✅ Color contrast ratios meet WCAG AA

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS variables + Tailwind utilities
- **Fonts**: Space Mono (headings) + DM Sans (body) via `next/font/google`
- **Animations**: CSS keyframes + Intersection Observer scroll reveals

---

## Design Tokens

```css
--bg:       #0D0E14   /* page background */
--surface:  #13141C   /* card surface */
--neon:     #BD93F9   /* primary accent (Dracula purple) */
--magenta:  #FF79C6   /* secondary accent */
--cyan:     #8BE9FD   /* tertiary */
--green:    #50FA7B   /* success */
--txt:      #F8F8F2   /* primary text */
--txt-dim:  #6272A4   /* secondary text */
```

---

© 2026 The Changelog. Crafted with ♥ by [Sharvari](https://sharvari.dev).
