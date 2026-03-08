import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function TermsAndPrivacy() {
  useEffect(() => {
    document.title = "תנאי שימוש ומדיניות פרטיות | יובל כהן - ייעוץ משכנתאות ופיננסים";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "תנאי שימוש ומדיניות פרטיות של אתר יובל כהן - ייעוץ משכנתאות ופיננסים. מידע על איסוף מידע, אבטחה וזכויותיכם.");
    return () => { document.title = "יובל כהן - ייעוץ משכנתאות ופיננסים | הבנק דואג לבנק, אני דואג לכם"; };
  }, []);
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8"
        >
          <ArrowRight className="h-4 w-4" />
          חזרה לעמוד הראשי
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">
          תנאי שימוש ומדיניות פרטיות
        </h1>

        {/* Terms of Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">תנאי שימוש</h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              ברוכים הבאים לאתר של יובל כהן - ייעוץ משכנתאות. השימוש באתר זה מהווה הסכמה לתנאים המפורטים להלן.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-6">1. כללי</h3>
            <p>
              האתר מספק מידע כללי בנושא ייעוץ משכנתאות ושירותים פיננסיים. המידע באתר אינו מהווה ייעוץ משפטי, פיננסי או אחר, ואינו מחליף התייעצות עם אנשי מקצוע מוסמכים.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-6">2. שימוש באתר</h3>
            <p>
              השימוש באתר מותר למטרות חוקיות בלבד. אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בתכנים המופיעים באתר ללא אישור מראש ובכתב.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-6">3. הגבלת אחריות</h3>
            <p>
              יובל כהן - ייעוץ משכנתאות אינו אחראי לנזקים ישירים או עקיפים שעלולים להיגרם כתוצאה מהשימוש באתר או מהסתמכות על המידע המופיע בו.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-6">4. קישורים חיצוניים</h3>
            <p>
              האתר עשוי להכיל קישורים לאתרים חיצוניים. איננו אחראים לתוכן, למדיניות הפרטיות או לפעילות של אתרים אלה.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-6">5. שינויים בתנאים</h3>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן תנאים אלה מעת לעת. המשך השימוש באתר לאחר עדכון התנאים מהווה הסכמה לתנאים המעודכנים.
            </p>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">מדיניות פרטיות</h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              אנו מכבדים את פרטיותכם ומחויבים להגן על המידע האישי שאתם מוסרים לנו.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-6">1. איסוף מידע</h3>
            <p>
              אנו אוספים מידע שאתם מוסרים לנו באופן ישיר דרך טפסי יצירת הקשר באתר, כולל: שם, מספר טלפון, כתובת דוא"ל וסוג השירות המבוקש.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-6">2. שימוש במידע</h3>
            <p>
              המידע שנאסף ישמש אותנו אך ורק לצורך:
            </p>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>יצירת קשר עמכם בנוגע לפנייתכם</li>
              <li>מתן השירות המבוקש</li>
              <li>שיפור השירותים שלנו</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy mt-6">3. אבטחת מידע</h3>
            <p>
              אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלכם מפני גישה בלתי מורשית, שימוש לרעה או חשיפה.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-6">4. שיתוף מידע</h3>
            <p>
              לא נמכור, נשכיר או נעביר את המידע האישי שלכם לצדדים שלישיים, למעט במקרים הבאים:
            </p>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>כאשר הדבר נדרש על פי חוק</li>
              <li>לצורך אספקת השירות המבוקש (למשל, בנקים למשכנתאות)</li>
              <li>בהסכמתכם המפורשת</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy mt-6">5. עוגיות (Cookies)</h3>
            <p>
              האתר עשוי להשתמש בעוגיות לצורך שיפור חוויית המשתמש וניתוח תעבורה. ניתן לנהל את העדפות העוגיות דרך הגדרות הדפדפן.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-6">6. זכויותיכם</h3>
            <p>
              על פי חוק הגנת הפרטיות, יש לכם זכות לעיין במידע השמור אודותיכם, לבקש לתקנו או למחקו. לכל בקשה, ניתן לפנות אלינו בפרטים המופיעים להלן.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-card rounded-xl p-6 border border-border">
          <h2 className="text-xl font-bold text-navy mb-4">יצירת קשר</h2>
          <p className="text-muted-foreground mb-4">
            לשאלות או בקשות בנוגע לתנאי השימוש או מדיניות הפרטיות, ניתן לפנות אלינו:
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p>
              <strong>שם:</strong> יובל כהן
            </p>
            <p>
              <strong>טלפון:</strong>{" "}
              <a href="tel:+972506006042" className="text-gold hover:text-gold-light transition-colors">
                050-600-6042
              </a>
            </p>
            <p>
              <strong>דוא"ל:</strong>{" "}
              <a href="mailto:yuvalcohen052@gmail.com" className="text-gold hover:text-gold-light transition-colors">
                yuvalcohen052@gmail.com
              </a>
            </p>
          </div>
          <p className="text-sm text-muted-foreground/70 mt-6">
            עדכון אחרון: מרץ 2026
          </p>
        </section>
      </div>
    </main>
  );
}
