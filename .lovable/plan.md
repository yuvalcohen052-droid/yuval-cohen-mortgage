

# הוספת סקשן "עליי" מתחת ל-WhyYuval

## מה ייעשה

יצירת קומפוננטה חדשה `src/components/AboutSection.tsx` עם הטקסט שסיפקת, בעיצוב נקי שמתאים לשפה הקיימת של האתר — רקע לבן, כותרת "עליי" בנייבי, והטקסט בפסקאות מעוצבות.

### קובץ חדש: `src/components/AboutSection.tsx`
- כותרת h2: "עליי"
- 4 פסקאות עם הטקסט שסיפקת
- עיצוב: רקע לבן, container ממורכז, טקסט `text-muted-foreground` עם `leading-relaxed`
- שימוש ב-`useReveal` לאנימציית כניסה כמו שאר הסקשנים

### עריכת `src/pages/Index.tsx`
- ייבוא AboutSection
- הוספתו מתחת ל-`<WhyYuval />` ומעל `<section id="services">`

