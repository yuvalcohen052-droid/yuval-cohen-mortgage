

## Plan: Header Background White-Gold + New Logo

The user wants to:
1. Replace the header background from navy to white/gold colors (both initial and scrolled states)
2. Replace the current banner image with the new uploaded logo
3. Keep the white/gold theme even when scrolling down

### Changes in `src/components/StickyHeader.tsx`:

1. **Save uploaded image** as `src/assets/yuval-logo-new.png` (the new logo with house icon)

2. **Header background**: Change from `bg-navy/95` (scrolled) and `bg-transparent` (top) to white/gold theme:
   - Top: `bg-white/90 backdrop-blur-md`
   - Scrolled: `bg-white/95 backdrop-blur-md shadow-lg`

3. **Text colors**: Change all `text-primary-foreground` (white) references to `text-navy` so text is visible on white background:
   - Nav links: `text-navy/70 hover:text-navy`
   - Phone button border: `border-navy/40 text-navy`
   - Hamburger icon: `text-navy`

4. **Mobile menu background**: Change from `bg-navy` to `bg-white` with `text-navy` for all items

5. **Logo image**: Replace `yuval-banner.jpeg` with the new uploaded logo, adjust height

6. **Gold accent**: Add a subtle gold bottom border to the header: `border-b border-gold/30`

