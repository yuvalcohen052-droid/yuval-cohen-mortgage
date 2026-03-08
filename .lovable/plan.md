

# תוכנית שיפור SEO מקיפה לאתר יובל כהן

## מצב נוכחי

האתר כולל כבר כמה בסיסים טובים: `lang="he"`, `dir="rtl"`, title, meta description, Open Graph tags, ו-robots.txt. אבל חסרים הרבה אלמנטים קריטיים לאינדוקס ודירוג בגוגל.

## מה חסר ומה נעשה

### 1. מפת אתר (sitemap.xml)
יצירת קובץ `public/sitemap.xml` סטטי עם כל הדפים:
- `/` (דף ראשי)
- `/accessibility` (הצהרת נגישות)

כולל `lastmod`, `changefreq`, `priority`.

### 2. עדכון robots.txt
הוספת שורת `Sitemap:` שמפנה ל-sitemap.xml עם ה-URL המלא של האתר המפורסם.

### 3. Structured Data (JSON-LD)
הוספת סקריפטים של Schema.org ב-`index.html`:
- **LocalBusiness** — שם העסק, טלפון, תיאור, תמונה, דירוג (AggregateRating 5.0/49 ביקורות)
- **ProfessionalService** — סוג השירות (ייעוץ משכנתאות)
- **FAQPage** — שאלות נפוצות שיופיעו כ-Rich Snippets בגוגל (מה עושה יועץ משכנתאות, כמה עולה, וכו')
- **BreadcrumbList** — ניווט

### 4. מטא תגיות נוספות ב-index.html
- `og:url`, `og:locale` (he_IL)
- `canonical` link tag
- `keywords` meta tag עם מילות מפתח רלוונטיות: יועץ משכנתאות, משכנתא, מחזור משכנתא, ייעוץ פיננסי וכו'
- `geo.region`, `geo.placename` לחיפוש מקומי
- `theme-color`

### 5. Semantic HTML — שיפורים קלים
- הוספת תגית `<article>` סביב ביקורות בקומפוננטה של Google Reviews (כבר קיים בחלקו)
- ודא שכל תמונה יש לה `alt` מתאר (כבר מסודר)

### 6. דף FAQ נפרד (אופציונלי — מוטמע בדף הראשי)
הוספת קומפוננטת FAQ עם Accordion בתחתית הדף הראשי — שאלות נפוצות על משכנתאות. זה משפר SEO משמעותית כי גוגל מציג תשובות ישירות מה-FAQ.

### 7. תגיות Canonical + hreflang
הוספת `<link rel="canonical">` ו-`<link rel="alternate" hreflang="he">` ב-head.

---

## פירוט טכני

### קבצים חדשים:
- `public/sitemap.xml`

### קבצים שיערכו:
- `index.html` — הוספת JSON-LD, canonical, keywords, geo, theme-color
- `public/robots.txt` — הוספת Sitemap URL
- `src/pages/Index.tsx` — הוספת קומפוננטת FAQ
- קומפוננטה חדשה: `src/components/FAQSection.tsx` — שאלות נפוצות עם Accordion

### שאלות נפוצות שייכתבו (6-8 שאלות):
- מה עושה יועץ משכנתאות?
- כמה עולה ייעוץ משכנתא?
- למה כדאי לקחת יועץ משכנתאות עצמאי?
- מה ההבדל בין יועץ משכנתאות לבנקאי?
- איך עובד תהליך מחזור משכנתא?
- מה זה תמהיל משכנתא?
- האם כדאי לעשות מחזור משכנתא?
- מה עושים אם הבנק דחה את הבקשה?

