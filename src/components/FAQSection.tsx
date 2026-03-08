import { useReveal } from "@/hooks/use-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "מה עושה יועץ משכנתאות?",
    a: "יועץ משכנתאות מלווה אתכם בתהליך לקיחת המשכנתא מא׳ ועד ת׳. הוא בודק את היכולת הכלכלית שלכם, בונה תמהיל משכנתא אופטימלי, משווה הצעות מהבנקים ומנהל משא ומתן להשגת התנאים הטובים ביותר.",
  },
  {
    q: "כמה עולה ייעוץ משכנתא?",
    a: "עלות הייעוץ משתנה בהתאם למורכבות התהליך. בדיקת חיסכון ראשונית אצל יובל כהן היא ללא עלות וללא התחייבות. החיסכון הממוצע שלקוחות משיגים עומד על כ-200,000 ₪.",
  },
  {
    q: "למה כדאי לקחת יועץ משכנתאות עצמאי?",
    a: "יועץ עצמאי עובד בשבילכם ולא בשביל הבנק. הוא אובייקטיבי, משווה בין כל הבנקים ומחפש את העסקה הטובה ביותר עבורכם — בניגוד ליועץ בנקאי שמייצג את האינטרסים של הבנק.",
  },
  {
    q: "מה ההבדל בין יועץ משכנתאות לבנקאי?",
    a: "הבנקאי עובד עבור הבנק ומציע את המוצרים של הבנק שלו בלבד. יועץ משכנתאות עצמאי עובד עבורכם, משווה הצעות מכל הבנקים ומנהל משא ומתן להשגת תנאים טובים יותר.",
  },
  {
    q: "איך עובד תהליך מחזור משכנתא?",
    a: "מחזור משכנתא הוא תהליך שבו לוקחים משכנתא חדשה בתנאים טובים יותר כדי לסגור את המשכנתא הקיימת. התהליך כולל בדיקת כדאיות, השוואת הצעות מבנקים שונים, וסגירת העסקה החדשה.",
  },
  {
    q: "מה זה תמהיל משכנתא?",
    a: "תמהיל משכנתא הוא ההרכב של סוגי ההלוואות השונים שמרכיבים את המשכנתא שלכם — כמו ריבית קבועה, ריבית משתנה, צמודה למדד ועוד. תמהיל נכון יכול לחסוך מאות אלפי שקלים.",
  },
  {
    q: "האם כדאי לעשות מחזור משכנתא?",
    a: "מחזור משכנתא כדאי כאשר הריביות בשוק ירדו, כאשר המצב הכלכלי שלכם השתפר, או כאשר התנאים המקוריים לא היו אופטימליים. בדיקת כדאיות ראשונית אצל יובל כהן היא ללא עלות.",
  },
  {
    q: "מה עושים אם הבנק דחה את הבקשה למשכנתא?",
    a: "דחייה מבנק אחד לא אומרת שאין פתרון. יועץ משכנתאות מנוסה יכול לבחון את הסיבות לדחייה, לשפר את התנאים ולפנות לבנקים אחרים שעשויים לאשר את הבקשה בתנאים מתאימים.",
  },
];

export default function FAQSection() {
  const ref = useReveal();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-background py-20">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl reveal">
        <h2
          id="faq-heading"
          className="text-navy text-3xl md:text-4xl font-bold text-center mb-10"
        >
          שאלות נפוצות
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-right text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[15px]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}