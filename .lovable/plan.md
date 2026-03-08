

## Plan: Center text symmetrically in WhatsApp button

The issue is that the text has uneven padding (1px right, 10px left), making it off-center. The icon on one side also creates asymmetry.

### Changes to `src/components/FloatingWhatsApp.tsx`:

1. Use `justify-center` on the link element for centering
2. Set equal padding on both sides of the text (e.g., `6px` left and right)
3. This will make the text appear visually centered between the icon and the edge of the button

