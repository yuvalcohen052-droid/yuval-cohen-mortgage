

## Plan: Match Header Background to Logo Image Background Color

### Problem
The banner/logo image (`yuval-banner.jpeg`) has a baked-in background color that doesn't match the CSS `--navy` variable (`hsl(215, 69%, 19%)` ≈ `#0f3566`). This creates a visible color boundary around the logo in the header.

### Solution
Update the `--navy` CSS variable to match the logo image's actual background color. From the screenshot, the logo background appears to be a darker navy, approximately `#0e2647` (`hsl(214, 68%, 17%)`).

### Changes

**`src/index.css`** — Update `--navy` and `--primary` to match the logo:
- Line 13: `--primary: 215 69% 19%` → `--primary: 214 68% 17%`
- Line 29: `--navy: 215 69% 19%` → `--navy: 214 68% 17%`

If the color still doesn't match perfectly after this first attempt, we'll iterate with browser screenshots to fine-tune the exact HSL values.

