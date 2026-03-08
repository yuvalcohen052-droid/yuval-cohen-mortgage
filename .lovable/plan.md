

# תוכנית: meta tags, sitemap, ובדיקת מובייל

## מה כבר מיושם
- Lazy loading לדפים פנימיים (App.tsx) ✓
- Consent checkbox בטפסים ✓
- Disclaimer בביקורות ✓
- `loading="lazy"` בתמונות בנקים ו-about ✓
- `fetchPriority="high"` בתמונת Hero ✓

## מה עוד צריך

### 1. הוספת דף Terms ל-sitemap.xml
הוספת `/terms` ל-sitemap עם priority 0.3 ו-changefreq monthly.

### 2. הוספת meta tags דינמיים לדפים פנימיים
**AccessibilityStatement.tsx** ו-**TermsAndPrivacy.tsx** - הוספת `document.title` ו-`<meta name="description">` באמצעות `useEffect` בכל דף:
- דף נגישות: title "הצהרת נגישות | יובל כהן"
- דף תנאים: title "תנאי שימוש ומדיניות פרטיות | יובל כהן"

### 3. הוספת Helmet-style meta עם useEffect
מכיוון שאין react-helmet בפרויקט, נשתמש ב-`useEffect` פשוט לעדכון `document.title` ו-meta description בכל דף פנימי.

## קבצים לעריכה
| קובץ | שינוי |
|-------|--------|
| `public/sitemap.xml` | הוספת /terms |
| `src/pages/AccessibilityStatement.tsx` | הוספת useEffect ל-title + meta |
| `src/pages/TermsAndPrivacy.tsx` | הוספת useEffect ל-title + meta |

