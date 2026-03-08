

## Plan: Shift text left for symmetry

The text needs more padding on the right side (closer to the icon) and less on the left side to shift it visually to the left.

### Change in `src/components/FloatingWhatsApp.tsx` (line 27-28):
- Increase `paddingRight` from `6px` to `10px` (pushes text away from icon / leftward)
- Decrease `paddingLeft` from `6px` to `4px` (less space on the left edge)

This will shift the text block to the left, creating better visual centering.

