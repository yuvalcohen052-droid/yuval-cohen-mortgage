

## Plan: Update Phone Links and Text

### Changes needed in 3 files:

1. **`src/components/HeroSection.tsx`** (line 48-56): Change the selected WhatsApp button to a phone call button:
   - Change `href` from WhatsApp link to `tel:+972527272380`
   - Change text from "שיחה בוואטסאפ" to "שיחת ייעוץ"
   - Keep the PhoneCall icon

2. **`src/components/StickyHeader.tsx`** (line 58, 62): Update the "חייגו עכשיו" button:
   - Change `href="tel:+972000000000"` to `href="tel:+972527272380"`

3. **`src/pages/AccessibilityStatement.tsx`** (line 44): Update phone link:
   - Change `href="tel:+972000000000"` to `href="tel:+972527272380"`

