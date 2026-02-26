import { useReveal } from "@/hooks/use-reveal";

export default function CalculatorWarning() {
  const ref = useReveal();

  return (
    <section className="bg-slate-bg py-20">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
          <div className="text-5xl mb-4 text-center">⚠️</div>
          <h2 className="text-navy text-2xl md:text-3xl font-bold text-center mb-4">
            מחשבון המשכנתא שלכם? הוא משקר לכם.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-center mb-6">
            מחשבוני משכנתא מקוונים{" "}
            <strong className="text-foreground">
              לא מחשבים אינפלציה, מדד תשומות בנייה, או שינויי ריבית פריים עתידיים.
            </strong>{" "}
            המספר שאתם רואים — יכול לקפוץ ב-30%-50% תוך שנתיים.
          </p>
          <div className="bg-cta/10 border border-cta/30 rounded-xl p-5 mb-8">
            <p className="text-foreground font-semibold text-center">
              🔴 רק ייעוץ אנושי מקצועי יכול לבנות תמהיל שמגן עליכם מפני תרחישי קיצון.
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={() => document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-cta text-cta-foreground font-bold px-8 py-4 rounded-full text-lg hover:scale-[1.03] transition-transform shadow-lg shadow-cta/30"
            >
              רוצים לדעת מה ההחזר האמיתי שלכם? בדיקה חינם →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
