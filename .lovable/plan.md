

## Plan: Inline Contact Form Strip Below Hero

Based on the reference image, create a compact, single-row contact form strip that sits directly below the Hero section. The design: a rounded card with navy background, gold border glow, containing a title line + a single row with "שם", "טלפון" inputs and a gradient gold "שליחה" button.

### New Component: `src/components/QuickContactStrip.tsx`

A compact inline form with:
- Navy background (`bg-navy`) with rounded corners and a gold border/glow effect
- Title text: "השאירו פרטים בטופס ונחזור אליכם בהקדם" in white, right-aligned
- Single row (flex, RTL): two rounded input fields (שם, טלפון) with semi-transparent gray backgrounds, and a gold gradient submit button ("שליחה") with rounded-full shape
- On submit: show success state inline
- Mobile: stack vertically
- Positioned to overlap slightly between hero and next section using negative margin

### Update: `src/pages/Index.tsx`

Add `<QuickContactStrip />` between `<HeroSection />` and `<TrustBar />`.

### Styling Details
- Form container: `bg-navy rounded-2xl border-2 border-gold/40 p-6 md:p-8` with gold box-shadow glow
- Inputs: `bg-white/20 text-white placeholder:text-white/60 rounded-xl border-none px-4 py-3`
- Button: gold gradient background (`bg-gradient-to-l from-gold to-gold-light`), `rounded-full px-8 py-3 text-navy font-bold`
- Use negative margin-top to pull it up into the hero area slightly

