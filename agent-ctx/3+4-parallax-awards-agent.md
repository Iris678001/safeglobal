# Task 3+4 - Parallax & Awards Agent

## Work Summary

Created 2 new components and updated page.tsx:

1. **ParallaxSection.tsx** - Reusable parallax wrapper using Framer Motion
   - useScroll + useTransform for subtle vertical parallax
   - IntersectionObserver to only animate when in viewport (performance)
   - Max shift of ~30px for subtlety
   - Works with both dark/light themes
   - Props: children, speed (default 0.1), className, id

2. **AwardsSection.tsx** - Premium awards/recognition section
   - 6 award cards: Gartner Magic Quadrant, Forbes Tech 50, ISO Excellence Award, Deloitte Fast 500, Safety Innovation Award, Best SaaS Platform
   - Each card: large gradient icon circle (w-16 h-16), award name, subtitle, year badge
   - Hover effects: card lifts, subtle glow, border brightens
   - Glass morphism backgrounds
   - Decorative rotating shield in background with animate-rotate-slow
   - Badge: "RECOGNITION", Title: "Industry Recognition" with text-gradient

3. **page.tsx** - Updated assembly
   - Wrapped AboutSection, TeamSection, IndustriesSection with ParallaxSection (speed={0.08})
   - Added AwardsSection between Industries and Security sections

## Verification
- Lint: 0 errors
- Dev server: HTTP 200
