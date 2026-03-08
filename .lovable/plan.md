

## Plan: Match Header Color to Eliminate Differences

### Problem
There are color mismatches between three elements:
1. **Header background**: hardcoded `#0f2c52`
2. **Hero section background**: uses `bg-navy` = `hsl(212, 100%, 18%)`
3. **Banner image**: has its own background baked into the JPEG

`hsl(212, 100%, 18%)` ≈ `#005C9E`... these are clearly different shades.

### Solution

**Unify everything to one color.** Two changes:

1. **`src/components/StickyHeader.tsx`** (lines 33-35): Replace `bg-[#0f2c52]` with `bg-navy` so the header uses the exact same CSS variable as the hero section. This eliminates the visible color boundary between header and hero.

2. **`src/index.css`** (line 17): If the banner image background doesn't match `hsl(212, 100%, 18%)`, update the `--navy` CSS variable to match the banner image's actual background color. Based on the current value `#0f2c52`, update `--navy` from `212 100% 18%` to `215 69% 19%` (which is the HSL equivalent of `#0f2c52`).

This way: CSS variable = header = hero = consistent. The banner image will blend seamlessly since `#0f2c52` was already chosen to match it.

| File | Change |
|------|--------|
| `StickyHeader.tsx` lines 33-35 | Replace `bg-[#0f2c52]` with `bg-navy` (both states) |
| `index.css` line 17 | Change `--navy: 212 100% 18%` → `--navy: 215 69% 19%` to match `#0f2c52` |
| `index.css` line 14 | Change `--primary` to same value `215 69% 19%` for consistency |

