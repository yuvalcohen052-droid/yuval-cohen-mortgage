

# תוכנית: אופטימיזציית מהירות + הגנה משפטית מפני תביעות

## חלק א: מהירות וביצועים

### בעיות שזוהו
- **אין lazy loading** - כל הקומפוננטות נטענות מיד, כולל דפים פנימיים (Accessibility, Terms)
- **תמונות בנקים (9 תמונות PNG)** נטענות ישירות בלי lazy loading
- **תמונת Hero ו-About** נטענות ללא אופטימיזציה
- **Framer Motion** נטען גם אם לא צריך אותו מיד
- **פונט Heebo** נטען מ-Google Fonts ללא `font-display: swap`

### מה ניישם
1. **Lazy loading לדפים פנימיים** - `React.lazy` + `Suspense` לדפי Accessibility ו-Terms
2. **הוספת `loading="lazy"`** לכל התמונות מתחת ל-fold (בנקים, about, ביקורות)
3. **הוספת `fetchpriority="high"`** לתמונת Hero (LCP)
4. **הוספת `font-display: swap`** ל-Google Fonts URL
5. **הוספת `<link rel="preload">`** לתמונת Hero ב-index.html

---

## חלק ב: הגנה משפטית מפני תביעות

### סיכונים שזוהו

#### 1. נגישות (תקן 5568) - סיכון תביעה גבוה
- **מה קיים**: הצהרת נגישות, Tabnav, ARIA, skip-link, focus indicators
- **מה חסר**: 
  - תאריך עדכון אחרון בהצהרת הנגישות (לוודא שעדכני)
  - קישור חזרה לדף הבית מדף הנגישות

#### 2. פרטיות ו-GDPR/חוק הגנת הפרטיות
- **הטופס שולח נתונים ל-Google Sheets** ללא הסכמה מפורשת
- **חסר checkbox הסכמה** לתנאי שימוש ומדיניות פרטיות בטפסים
- **חסרה הודעת cookies** (Tabnav widget עשוי ליצור cookies)

#### 3. תנאי שימוש - מה צריך לחזק
- **הגבלת אחריות מקצועית** - להדגיש שהאתר לא מחליף ייעוץ מקצועי
- **disclaimer על תוצאות** - "החיסכון הממוצע" אינו מובטח

### מה ניישם

1. **הוספת checkbox הסכמה בטפסים** - "אני מסכים/ה לתנאי השימוש ומדיניות הפרטיות" עם קישור לדף התנאים, חובה לסמן לפני שליחה

2. **הוספת disclaimer קטן** מתחת לסטטיסטיקות/ביקורות - "התוצאות משתנות מלקוח ללקוח ואינן מובטחות"

3. **הוספת קישור חזרה** בדף הצהרת הנגישות

4. **עדכון דף תנאי שימוש** - הוספת סעיף הסכמה לקבלת הודעות שיווקיות

---

## סיכום משימות

| # | משימה | קבצים |
|---|--------|-------|
| 1 | Lazy load לדפים פנימיים | `App.tsx` |
| 2 | אופטימיזציית תמונות (lazy, preload, fetchpriority) | `index.html`, `HeroSection.tsx`, `TrustBar.tsx`, `AboutSection.tsx` |
| 3 | font-display: swap | `index.html` |
| 4 | Checkbox הסכמה בטפסים | `LeadFormSection.tsx`, `QuickContactStrip.tsx` |
| 5 | Disclaimer לתוצאות | `GoogleReviewsSection.tsx` |
| 6 | קישור חזרה בדף נגישות | `AccessibilityStatement.tsx` |

