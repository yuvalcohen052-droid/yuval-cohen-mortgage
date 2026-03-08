

## Plan: Shift Hero Content to the Right on Wide Screens

The site is RTL, so the content should naturally align to the right. Currently, `max-w-6xl` with `mx-auto` centers the container, which on very wide screens makes it look too far left.

### Change in `src/components/HeroSection.tsx` (line 20):

Replace `mx-auto` with `mr-auto ml-auto lg:mr-[10%] lg:ml-auto` so on large screens the container shifts toward the right (RTL start) instead of being perfectly centered.

Alternatively, a simpler approach: increase `max-w` to `max-w-7xl` to let the content spread wider, which will make it feel less "stuck to the side."

**Recommended approach**: Change `mx-auto` to `mx-auto xl:mr-[8%]` on the container div. This keeps it centered on normal screens but nudges it rightward on extra-wide displays.

| Line | Current | New |
|------|---------|-----|
| 20 | `className="container mx-auto px-4 py-24 md:py-32 max-w-6xl"` | `className="container mx-auto xl:mr-[8%] px-4 py-24 md:py-32 max-w-6xl"` |

Single file change, one line.

