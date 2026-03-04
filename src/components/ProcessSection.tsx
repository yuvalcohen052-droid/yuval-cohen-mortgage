import { useReveal } from "@/hooks/use-reveal";
import { ClipboardList, Settings, Handshake } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "1",
    title: "אבחון פיננסי מעמיק",
    text: "ניתוח מלא של מצבכם הכלכלי, מקורות ההכנסה, התחייבויות עתידיות ותכנון תזרים ארוך טווח – כדי לבנות בסיס נכון להחלטה.",
  },
  {
    icon: Settings,
    num: "2",
    title: "בניית אסטרטגיית מימון מותאמת",
    text: "הרכבת תמהיל משכנתא מדויק בהתאם ליעדים, רמת סיכון רצויה ותכנון עתידי – לא פתרון מדף, אלא תכנון אישי.",
  },
  {
    icon: Handshake,
    num: "3",
    title: "ניהול משא ומתן וסגירה מיטבית",
    text: "פנייה יזומה לבנקים, ניהול מו״מ מקצועי והשגת התנאים האופטימליים – עד חתימה בליווי מלא.",
  },
];

export default function ProcessSection() {
  const ref = useReveal();

  return (
    <section id="process" aria-labelledby="process-heading" className="bg-navy py-20">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <h2 id="process-heading" className="text-primary-foreground text-3xl md:text-4xl font-bold text-center mb-14">
          תהליך ליווי מקצועי – שלב אחר שלב
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4 justify-center">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center gap-4 md:gap-0 md:flex-col">
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3" aria-hidden="true">
                  <step.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </div>
                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-navy font-extrabold text-xl mb-4">
                  {step.num}
                </div>
                <h3 className="text-primary-foreground font-bold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {step.text}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span className="hidden md:block text-gold text-3xl mx-6 mt-16" aria-hidden="true">←</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
