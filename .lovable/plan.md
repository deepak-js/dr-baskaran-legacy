

## Plan: Mobile-Friendly Fixes, Hero Improvements & WhatsApp Widget

### 1. WhatsApp Floating Widget
Create `src/components/ui/whatsapp-widget.tsx` — a fixed bottom-right floating button with the WhatsApp icon (green circle with SVG icon), linking to:
```
https://wa.me/919500979886?text=Hi%20Doctor%2C%20I%20saw%20your%20profile%20on%20the%20website%20and%20would%20like%20to%20book%20an%20appointment.
```
- Pulse animation on idle, scale on hover
- Small tooltip label "Chat with us" on hover
- `z-50`, positioned `bottom-6 right-6` (mobile: `bottom-4 right-4`)
- Add to `Layout.tsx` so it appears on all pages

### 2. Home Hero Section Improvements (`src/pages/Home.tsx`)
- Reduce excessive vertical padding: `min-h-[80vh]` → `min-h-[60vh] lg:min-h-[85vh]`, tighten `pt-16 pb-8 lg:pt-20 lg:pb-12`
- Mobile: stack text above image with smaller gaps (`gap-6 lg:gap-16`)
- Hero image: use `aspect-[4/5]` on mobile, `aspect-[3/4]` on desktop; ensure `object-position` centers the face
- Reduce `mb-10` → `mb-6` on CTA spacing, `mb-8` → `mb-4` on divider
- Make floating card visible on mobile (smaller variant) or remove `hidden md:block`

### 3. Remove Empty Spaces Throughout Home
- Authority strip: reduce `py-16` → `py-10 lg:py-16`, reduce gap `gap-8` → `gap-4 md:gap-8`
- Section padding: tighten mobile values in `section-padding` CSS variable from `clamp(4rem,...)` to `clamp(2.5rem, 8vw, 7rem)`
- Three Pillars: `mb-16` → `mb-10 lg:mb-16`
- Origin to Impact: reduce `gap-12 lg:gap-20` → `gap-8 lg:gap-16`
- Philosophy section: reduce inner spacing
- FAQ section: reduce `space-y-6` → `space-y-4`, reduce `mb-12` → `mb-8`
- CTA section: tighten `mb-8` → `mb-6`

### 4. Mobile Responsiveness Pass
- Hero buttons: ensure `w-full` on mobile with `flex-col` stacking
- Container padding: already `px-6`, keep as-is
- Heading sizes: already responsive via `heading-display`, verify balance on small screens
- Image decorative elements (`-bottom-4 -right-4` borders): hide on mobile with `hidden lg:block`

### Files to Create/Edit
- **Create**: `src/components/ui/whatsapp-widget.tsx`
- **Edit**: `src/components/layout/Layout.tsx` (add WhatsApp widget)
- **Edit**: `src/pages/Home.tsx` (hero + spacing fixes)
- **Edit**: `src/index.css` (tighten `--section-padding`)

