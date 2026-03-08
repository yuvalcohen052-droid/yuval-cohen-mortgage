

## Plan: Fix Header Banner Background and Keep Header Fixed

Two changes needed in `src/components/StickyHeader.tsx`:

### 1. Make header background always navy (not transparent)

Line 35: Change `"bg-transparent"` to `"bg-navy"` so the banner image always sits on a matching navy background, eliminating any visible mismatch between the image edges and the header background.

### 2. Header already stays fixed at top

The header already uses `fixed top-0` (line 32), so it stays at the top when scrolling. No change needed here — it will not move down with the page.

### Summary

| Line | Current | New |
|------|---------|-----|
| 35 | `: "bg-transparent"` | `: "bg-navy"` |

One line change. The header will always have a solid navy background matching the banner image, and it stays fixed at the top at all times.

