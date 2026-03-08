

# תיקון שגיאת שליחת טופס

## הבעיה

Google Apps Script עושה redirect (302) כשמגיעה בקשת GET, ו-`fetch` הרגיל נכשל בגלל CORS. ה-catch תופס את השגיאה ומחזיר `false` → הודעת שגיאה.

## הפתרון

שינוי `src/lib/google-sheets.ts` - שימוש ב-`mode: "no-cors"` עם `fetch`. בגלל ש-no-cors מחזיר תשובה אטומה (opaque), לא ניתן לבדוק `response.ok`. לכן נחזיר `true` אם לא נזרקה שגיאה (ה-fetch עצמו הצליח).

זה הפתרון הסטנדרטי לעבודה עם Google Apps Script מצד הלקוח.

```ts
export async function submitToGoogleSheet(data: FormSubmission): Promise<boolean> {
  try {
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
      mode: "no-cors",
    });

    return true;
  } catch (error) {
    console.error("Failed to submit form:", error);
    return false;
  }
}
```

### קובץ לעריכה
- `src/lib/google-sheets.ts`

