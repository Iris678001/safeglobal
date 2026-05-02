# Task 14-a: Homepage and EHS/AI Route Pages

## Summary
Created three pages for the SafeGlobal Next.js project:

### 1. Homepage (`/home/z/my-project/src/app/page.tsx`)
- Trimmed-down landing page using `"use client"` for dynamic imports
- Includes: HeroSection, LiveMetricsBanner, TrustIndicators (direct imports)
- Custom **Services Overview** section with 6 cards linking to `/ehs-ai/{slug}` subpages
- Custom **Industries Overview** section with 6 cards linking to `/industries` subpages
- PartnersSection (direct import)
- TestimonialsSection (dynamic import)
- CTA section linking to `/contact`
- Uses `servicesData` from `@/data/services` and `colorMap` from navConfig for consistent styling

### 2. EHS/AI Overview Page (`/home/z/my-project/src/app/ehs-ai/page.tsx`)
- **Server component** (no "use client") for SEO
- Exports `metadata` for SEO
- Breadcrumb: Home > EHS / AI
- Hero section with title, description, CTA buttons
- Grid of all 12 services with cards showing icon, title, subtitle, description, stats preview, and badge
- Each card links to `/ehs-ai/{slug}`
- Bottom CTA section for free assessment

### 3. EHS/AI Dynamic Subpage (`/home/z/my-project/src/app/ehs-ai/[slug]/page.tsx`)
- **Server component** for SEO
- `generateStaticParams` pre-generates all 12 service pages from `serviceSlugs`
- `generateMetadata` returns dynamic SEO metadata per service
- Uses `notFound()` for invalid slugs → 404
- Breadcrumb: Home > EHS / AI > {Service Name}
- Page structure:
  - Hero with icon, title, subtitle, badge, description, CTA
  - Stats row (4 stats in grid)
  - Features section (6 features in 2x3 grid)
  - Benefits section (4 benefits in 2x2 grid)
  - Related Services section (3 linked cards with icons)
  - CTA section with buttons linking to `/contact` and `/ehs-ai`

### Test Results
- `GET /` → 200 ✅
- `GET /ehs-ai` → 200 ✅
- `GET /ehs-ai/ai-safety-monitoring` → 200 ✅
- `GET /ehs-ai/predictive-risk-analytics` → 200 ✅
- `GET /ehs-ai/nonexistent-slug` → 404 ✅

### Lint
- Only pre-existing error in `Header.tsx` (set-state-in-effect) — not from new code
- All new files pass lint cleanly
