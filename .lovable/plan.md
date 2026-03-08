
# תוכנית תיקון מריחות ואסימטריה במובייל

## בעיה שזוהתה
יש גלילה אופקית (horizontal overflow) לאורך כל הדף — נראית כפס גלילה בצד ימין. זה נגרם ממספר מקורות.

## תיקונים נדרשים

### 1. הוספת `overflow-x: hidden` על ה-root wrapper
בקובץ `src/pages/Index.tsx` — הוספת `overflow-x-hidden` ל-div הראשי כדי למנוע גלילה אופקית מכל מקור.

### 2. הסרת `xl:mr-[8%]` מה-HeroSection
בקובץ `src/components/HeroSection.tsx` שורה 20 — ה-`xl:mr-[8%]` על ה-container דוחף את התוכן הצידה ועלול לגרום לגלישה. יש להסיר אותו ולהשתמש בגישה סימטרית יותר.

### 3. ווידוא overflow-hidden על מרקי-אנימציות
TrustBar ו-GoogleReviewsSection כבר מכילים `overflow-hidden` על ה-wrapper — אבל ננוודא שאין אלמנט שגולש מעבר.

### קבצים שיערכו:
- `src/pages/Index.tsx` — הוספת `overflow-x-hidden`
- `src/components/HeroSection.tsx` — הסרת `xl:mr-[8%]`
- `src/index.css` — הוספת `overflow-x: hidden` על `html` ו-`body` כגיבוי
