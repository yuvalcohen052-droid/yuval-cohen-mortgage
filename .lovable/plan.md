

## Plan: Mobile Compatibility Audit and Fixes

After reviewing all components, here are the mobile issues to fix:

### 1. **HeroSection.tsx** - Hero image and floating badge overlap on small screens
- The floating badge (`absolute -bottom-2 -right-4`) can overlap content on very small screens
- Stats row (`flex flex-wrap gap-6`) gap is too wide for mobile -- reduce to `gap-3` on mobile
- Add `text-center` on mobile for the hero text block

### 2. **StickyHeader.tsx** - Mobile menu missing phone call link
- The mobile hamburger menu (line 108-116) only has WhatsApp link, no phone call option
- Add a "שיחת ייעוץ" phone link (`tel:+972527272380`) to the mobile menu

### 3. **QuickContactStrip.tsx** - Form inputs stack correctly but button could be full-width on mobile
- Already uses `flex-col md:flex-row` which is good
- No changes needed

### 4. **ProcessSection.tsx** - Arrow direction wrong for RTL on mobile
- The `←` arrows between steps are hidden on mobile (good), but the vertical layout could use connecting lines
- Steps gap `gap-8` is fine

### 5. **GoogleReviewsSection.tsx** - Review cards in marquee have fixed `min-w-[300px]`
- On screens < 320px this could cause horizontal overflow
- Change to `min-w-[280px]`

### 6. **TestimonialsSection.tsx** - Same min-width issue
- Change `min-w-[300px]` to `min-w-[280px]`

### 7. **LeadFormSection.tsx** - Grid layout stacks correctly on mobile
- Already uses `grid md:grid-cols-2` -- good
- Contact info box should have slightly less padding on mobile: `p-6 md:p-8`

### 8. **FloatingWhatsApp.tsx** - Position `bottom-6 left-6` is fine
- No issues

### 9. **Footer.tsx** - Grid stacks on mobile correctly
- No issues

### Summary of changes:

| File | Change |
|------|--------|
| `StickyHeader.tsx` | Add phone call link to mobile menu |
| `HeroSection.tsx` | Reduce stats gap on mobile (`gap-3 md:gap-6`), ensure floating badge doesn't overflow |
| `GoogleReviewsSection.tsx` | Reduce review card min-width to `min-w-[280px]` |
| `TestimonialsSection.tsx` | Reduce testimonial card min-width to `min-w-[280px]` |
| `LeadFormSection.tsx` | Reduce contact info padding on mobile (`p-6 md:p-8`) |

