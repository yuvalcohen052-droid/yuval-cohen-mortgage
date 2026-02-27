import { useReveal } from "@/hooks/use-reveal";

const badges = [
  "בעל הסמכה מקצועית",
  "עובד מול כל הבנקים",
  "ליווי אישי מ-A עד Z",
];

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section className="bg-off-white py-20">
      <div ref={ref} className="container mx-auto px-4 reveal-section">
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
          {/* Image column (right in RTL) */}
          <div className="reveal-child flex-shrink-0">
            <div
              className="w-72 h-96 rounded-2xl bg-navy-medium flex items-center justify-center"
              style={{ border: "3px solid rgba(201,168,76,0.3)" }}
            >
              <span className="text-cool-gray font-assistant text-sm">תמונת היועץ</span>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 bg-white rounded-lg py-2 px-4 shadow-sm">
              <span className="text-sm font-assistant" style={{ color: "#4285F4" }}>G</span>
              <span className="font-assistant font-semibold text-sm text-foreground">5.0 ★ — 48 ביקורות</span>
            </div>
          </div>

          {/* Text column */}
          <div className="reveal-child flex-1">
            <p className="font-assistant font-semibold text-sm text-gold-accent tracking-widest uppercase mb-2">
              הכירו את היועץ שלכם
            </p>
            <h2 className="font-heebo font-bold text-foreground mb-1" style={{ fontSize: "clamp(32px, 4vw, 40px)" }}>
              יובל כהן
            </h2>
            <p className="font-assistant text-lg text-cool-gray mb-6">יועץ משכנתאות ופיננסים</p>
            <p className="font-assistant text-base leading-relaxed mb-8" style={{ color: "#4A5568", lineHeight: 1.8 }}>
              עם ניסיון של למעלה מעשור בתחום המשכנתאות והפיננסים, אני מלווה משפחות בדרך להחלטה הכלכלית החשובה ביותר בחייהן. הפילוסופיה שלי פשוטה: הלקוח תמיד במרכז. אני לא עובד בשביל הבנק — אני עובד בשבילכם.
            </p>
            <div className="flex flex-col gap-3">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="text-success-green font-bold">✓</span>
                  <span className="font-assistant font-semibold text-sm text-foreground">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
