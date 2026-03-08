export default function AccessibilityStatement() {
  return (
    <div className="font-heebo min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-navy text-3xl md:text-4xl font-bold mb-8">
          הצהרת נגישות
        </h1>

        <div className="prose prose-lg max-w-none text-foreground space-y-6 leading-relaxed">
          <p>
            אתר זה שייך ל<strong>יובל כהן - ייעוץ משכנתאות ופיננסים</strong>.
            אנו מאמינים ופועלים למען שוויון הזדמנויות לאנשים עם מוגבלויות ועושים
            מאמצים רבים להנגיש את האתר בהתאם לתקן הישראלי ת&quot;י 5568 ולהנחיות
            WCAG 2.1 ברמת AA.
          </p>

          <h2 className="text-navy text-2xl font-bold mt-8">
            פעולות הנגשה שבוצעו
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>התאמת האתר לקוראי מסך ותוכנות טכנולוגיה מסייעת</li>
            <li>ניווט מלא באמצעות מקלדת עם אינדיקציית מיקוד ברורה</li>
            <li>כפתור &quot;דלג לתוכן הראשי&quot; לנוחות ניווט מקלדת</li>
            <li>שימוש בתגיות ARIA ו-alt מתארות לתמונות</li>
            <li>שמירה על ניגודיות צבעים תקנית (4.5:1)</li>
            <li>מבנה כותרות היררכי והגיוני</li>
            <li>שדות טופס עם תוויות (labels) מקושרות כראוי</li>
            <li>שימוש בתוסף נגישות Tabnav להתאמות אישיות נוספות</li>
          </ul>

          <h2 className="text-navy text-2xl font-bold mt-8">
            יצירת קשר בנושא נגישות
          </h2>
          <p>
            אם נתקלתם בבעיית נגישות באתר, נשמח לשמוע מכם ולטפל בכך בהקדם.
          </p>
          <div className="bg-card rounded-xl border border-border p-6 space-y-3">
            <p>
              <strong>רכז/ת נגישות:</strong> יובל כהן
            </p>
            <p>
              <strong>טלפון:</strong>{" "}
              <a
                href="tel:+972506006042"
                className="text-gold underline hover:no-underline"
              >
                050-0000000
              </a>
            </p>
            <p>
              <strong>אימייל:</strong>{" "}
              <a
                href="mailto:yuval@example.com"
                className="text-gold underline hover:no-underline"
              >
                yuval@example.com
              </a>
            </p>
            <p>
              <strong>כתובת:</strong> ישראל
            </p>
          </div>

          <h2 className="text-navy text-2xl font-bold mt-8">
            תאריך עדכון אחרון
          </h2>
          <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך: מרץ 2026.</p>
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gold font-bold hover:underline"
          >
            → חזרה לעמוד הראשי
          </a>
        </div>
      </main>
    </div>
  );
}
