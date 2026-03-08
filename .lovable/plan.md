# החלפת לוגו + שינוי צבעים + רקע לבן להירו

## סיכום

המשתמש מעלה לוגו חדש ורוצה:

1. להחליף את הלוגו בכל האתר (Header + Footer)
2. לשנות את פלטת הצבעים לצבעים של הלוגו (כחול כהה + זהב-צהוב)
3. סקשן הפתיחה (Hero) ברקע **לבן** במקום כחול כהה

## ניתוח צבעי הלוגו

הלוגו משתמש בכחול כהה (#1B3A5C בערך) וזהב-צהוב (#E8A83E בערך). הצבעים דומים לקיימים אבל הזהב יותר צהוב/כתום.

## שינויים

### 1. העתקת הלוגו החדש

- העתקת `user-uploads://image_1-3.png` ל-`src/assets/yuval-logo-new.png`
- החלפת הלוגו ב-`StickyHeader.tsx` וב-`Footer.tsx`

### 2. עדכון פלטת צבעים (`src/index.css`)  
ולמעלה לרשום יובל כהן | יועץ משכנתאות ופיננסים   
(ולנסות לסדר את הלוגו שיראה יותר יפה וטבעי)

- עדכון `--gold` לגוון צהוב-כתום יותר שמתאים ללוגו (~43 85% 57%)
- עדכון `--navy` אם צריך לפי הלוגו

### 3. הפיכת Hero לרקע לבן (`src/components/HeroSection.tsx`)

- שינוי `bg-navy` ל-`bg-white`
- הפיכת כל הטקסטים מ-`text-primary-foreground` ל-`text-navy` / `text-foreground`
- הפיכת הפסקה מ-`text-primary-foreground/60` ל-`text-muted-foreground`
- כפתור השיחה: מ-`border-primary-foreground text-primary-foreground` ל-`border-navy text-navy`
- הסטטיסטיקות: מ-`text-primary-foreground/80` ל-`text-foreground/80`
- הסרת `hero-pattern` (שמיועד לרקע כהה)
- הבאדג' הירוק "צרו קשר": יישאר כמו שהוא

### 4. עדכון Header (`src/components/StickyHeader.tsx`)

- החלפת הלוגו לחדש

### 5. עדכון Footer (`src/components/Footer.tsx`)

- החלפת הלוגו לחדש

### קבצים שיערכו

- `src/assets/yuval-logo-new.png` (חדש)
- `src/index.css` (צבעים)
- `src/components/HeroSection.tsx` (רקע לבן + צבעי טקסט)
- `src/components/StickyHeader.tsx` (לוגו)
- `src/components/Footer.tsx` (לוגו)