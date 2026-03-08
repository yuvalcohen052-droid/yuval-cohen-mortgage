

## Plan: Remove Banner Background & Make It Transparent

### Problem
The JPEG banner image has a baked-in navy background that never perfectly matches the CSS `--navy` variable, creating visible color seams.

### Solution
Use the AI image generation API to remove the background from the banner image, creating a transparent PNG. Then the logo/text will sit directly on the CSS `bg-navy` background with zero color mismatch.

### Steps

1. **Generate transparent version** — Use Gemini image editing API to remove the navy background from `yuval-banner.jpeg`, producing a transparent PNG.

2. **Save as PNG** — Replace `src/assets/yuval-banner.jpeg` with `src/assets/yuval-banner.png`.

3. **Update import** in `src/components/StickyHeader.tsx` line 2:
   - Change `import yuvalBanner from "@/assets/yuval-banner.jpeg"` → `import yuvalBanner from "@/assets/yuval-banner.png"`

4. **Verify** — Screenshot to confirm seamless blending with no color boundaries.

This permanently eliminates the color matching problem since there's no image background to conflict with.

