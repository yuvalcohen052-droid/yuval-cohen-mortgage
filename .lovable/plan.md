

## Plan: Make QuickContactStrip smaller and visually integrated with the Hero

The form strip currently feels like a separate block. The goal is to make it more compact and blend it seamlessly into the Hero section's navy + gold design.

### Changes to `src/components/QuickContactStrip.tsx`:

1. **Reduce size**: Smaller padding (`p-4 md:p-5` instead of `p-6 md:p-8`), smaller text (`text-sm` for title, `text-sm` for inputs), reduce margin-bottom
2. **Tighter title**: `text-base md:text-lg mb-3` instead of `text-lg md:text-xl mb-5`
3. **Smaller inputs**: `px-4 py-2 text-sm` instead of `px-5 py-3 text-base`
4. **Smaller button**: `px-6 py-2 text-sm` instead of `px-8 py-3 text-base`
5. **Narrower container**: Add `max-w-3xl mx-auto` to constrain width so it doesn't span the full container
6. **Softer border**: `border border-gold/25` instead of `border-2 border-gold/40`
7. **Reduce gap**: `gap-2` instead of `gap-3` in the form row
8. **Reduce overlap**: `-mt-8 mb-4` instead of `-mt-12 mb-8`

This will make the strip feel like a natural extension of the Hero rather than a separate heavy block.

