import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "כמה עולה ייעוץ משכנתא?",
    a: "שכר הטרחה שלי הוא תחרותי ביחס לשוק, אבל מה שחשוב — ברוב המקרים ההחזר על ההשקעה הוא פי 10 ויותר. המשמעות היא שהכסף שתשקיעו בייעוץ חוזר אליכם בחיסכון של עשרות ומאות אלפי שקלים לאורך חיי המשכנתא. שיחת הייעוץ הראשונה היא ללא עלות וללא התחייבות.",
  },
  {
    q: "למי מתאים ייעוץ — רק לרוכשי דירה?",
    a: "ממש לא! אני מלווה גם רוכשי דירה ראשונה, גם משפרי דיור, גם משקיעים, וגם מי שרוצה לבצע מחזור משכנתא קיימת. כל מצב שבו יש משכנתא — יש מקום לייעוץ מקצועי.",
  },
  {
    q: "מה ההבדל בינך לבין פקיד המשכנתאות בבנק?",
    a: 'פקיד הבנק עובד בשביל הבנק ומציע לכם את המוצרים של הבנק שלו בלבד. <strong>אני עובד בשבילכם</strong> — משווה בין כל הבנקים, מנהל משא ומתן על הריביות, ובונה תמהיל שמותאם לכם ולא לרווחי הבנק.',
  },
  {
    q: "כמה זמן לוקח התהליך?",
    a: "תהליך טיפוסי לוקח בין שבועיים לחודש, תלוי במורכבות המקרה ובקצב של הבנקים. אני דואג שהתהליך יזרום בצורה חלקה ומעדכן אתכם בכל שלב.",
  },
  {
    q: "אפשר לפנות אליך גם למחזור משכנתא קיימת?",
    a: "בהחלט! מחזור משכנתא הוא אחד השירותים הכי מבוקשים שלי. הרבה מהלקוחות שלי חוסכים עשרות אלפי שקלים רק ממחזור — גם אם לקחו משכנתא לפני שנה או שנתיים.",
  },
];

export default function FAQSection() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div ref={ref} className="container mx-auto px-4 reveal-section max-w-3xl">
        <h2 className="font-heebo font-bold text-center text-foreground mb-12" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          שאלות שכולם שואלים
        </h2>

        <div className="divide-y divide-light-gray">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="reveal-child">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="font-heebo font-semibold text-lg text-foreground">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cool-gray flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className="font-assistant text-base text-cool-gray pb-5 leading-relaxed"
                    style={{ lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
