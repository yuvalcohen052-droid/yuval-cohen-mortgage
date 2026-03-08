

# תיקון שליחת טפסים - השארת פרטים

## הבעיה

הפונקציה `submitToGoogleSheet` משתמשת ב-`navigator.sendBeacon` שמחזיר `true` ברגע שהבקשה "נכנסת לתור" - גם אם היא נכשלת בפועל. בנוסף, הפולבק משתמש ב-`mode: "no-cors"` שמחזיר תשובה אטומה (opaque) ולא ניתן לדעת אם הבקשה הצליחה.

כלומר: הטופס תמיד מראה "תודה!" גם כשהנתונים לא באמת נשמרים.

## הפתרון

שינוי `src/lib/google-sheets.ts`:

1. **הסרת `sendBeacon`** - לא מתאים לטפסים כי אין דרך לוודא הצלחה
2. **שליחה עם `fetch` רגיל ב-`mode: "cors"`** - כדי לקבל תשובה אמיתית מהשרת
3. **בדיקת `response.ok`** - כדי לדעת אם הנתונים באמת נשמרו
4. אם Google Apps Script לא תומך ב-CORS, נעבור לשליחה דרך **URL params (GET)** שעוקפת את הבעיה

### קוד מוצע:
```ts
export async function submitToGoogleSheet(data: FormSubmission): Promise<boolean> {
  try {
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
    });

    return response.ok;
  } catch (error) {
    console.error("Failed to submit form:", error);
    return false;
  }
}
```

### קובץ שיערך
- `src/lib/google-sheets.ts`

