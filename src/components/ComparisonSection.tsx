import { useReveal } from "@/hooks/use-reveal";

const rows = [
  {
    alone: "מקבלים הצעה אחת — של הבנק שלכם",
    withYuval: "מכרז בין 6 בנקים — הם מתחרים עליכם",
  },
  {
    alone: "לא יודעים אם הריבית שקיבלתם טובה",
    withYuval: "ריבית benchmark מול נתוני שוק אמיתיים",
  },
  {
    alone: "מבזבזים 40+ שעות על בירוקרטיה",
    withYuval: "יובל מטפל בהכל — אתם רק חותמים",
  },
  {
    alone: "אין ניסיון במשא ומתן מול הבנק",
    withYuval: "500+ עסקאות ויחסים אישיים עם כל סניף",
  },
];

export default function ComparisonSection() {
  const ref = useReveal();

  return (
    <section className="bg-card py-20">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <h2 className="text-navy text-3xl md:text-4xl font-bold text-center mb-3">
          הבנק לא האויב שלכם. הוא פשוט לא חבר שלכם.
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-12">
          ראו את ההבדל בין לנהל את התהליך לבד לבין ליווי מקצועי
        </p>
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="bg-destructive/10 px-6 py-4 text-center font-bold text-destructive">
              ❌ לבד מול הבנק
            </div>
            <div className="bg-cta/10 px-6 py-4 text-center font-bold text-cta">
              ✅ עם יובל כהן
            </div>
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 ${i < rows.length - 1 ? "border-b border-border" : ""}`}>
              <div className="px-6 py-4 text-muted-foreground text-sm leading-relaxed">
                {row.alone}
              </div>
              <div className="px-6 py-4 text-foreground font-medium text-sm leading-relaxed bg-cta/5">
                {row.withYuval}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-cta text-cta-foreground font-bold px-8 py-4 rounded-full text-lg hover:scale-[1.03] transition-transform shadow-lg shadow-cta/30"
          >
            רוצים את ההבדל? בדיקה חינם →
          </button>
        </div>
      </div>
    </section>
  );
}
