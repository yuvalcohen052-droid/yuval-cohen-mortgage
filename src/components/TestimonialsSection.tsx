import { useReveal } from "@/hooks/use-reveal";

const INSTAGRAM_LINK = "https://www.instagram.com/yuval_cohen_m";

const testimonials = [
  {
    text: "יובל חסך לנו 183,400 ₪ על משכנתא של 1.4 מיליון. הבנק הציע 4.2%, יובל השיג 3.1%. פשוט מדהים!",
    author: "דני ורחל מזרחי",
    location: "תל אביב",
    savings: "183,400 ₪",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    text: "תהליך מקצועי, שקוף ונגיש. יובל זמין תמיד ונלחם עבורנו. חסכנו 147,000 ₪ על מחזור המשכנתא.",
    author: "משפחת לוי",
    location: "ראשון לציון",
    savings: "147,000 ₪",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    text: "הגענו אליו בייאוש אחרי שהבנק דחה אותנו. יובל סגר לנו אישור תוך 12 ימים וחסך לנו 210,000 ₪.",
    author: "אלון ומיכל שטרן",
    location: "חיפה",
    savings: "210,000 ₪",
    stars: "⭐⭐⭐⭐⭐",
  },
];

export default function TestimonialsSection() {
  const ref = useReveal();

  return (
    <section id="testimonials" className="bg-slate-bg py-20">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <h2 className="text-navy text-3xl md:text-4xl font-bold text-center mb-3">
          אל תאמינו לי. תאמינו להם.
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-12">
          לקוחות אמיתיים, חיסכון אמיתי
        </p>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-0 snap-center bg-card rounded-2xl shadow-sm overflow-hidden flex-shrink-0"
            >
              {/* WhatsApp-style header */}
              <div className="bg-[#075E54] px-4 py-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-xs font-bold">
                  👤
                </div>
                <span className="text-primary-foreground text-sm font-semibold">
                  {t.author}, {t.location}
                </span>
              </div>
              <div className="p-6">
                {/* Savings highlight */}
                <div className="inline-block bg-cta/10 text-cta font-bold text-sm px-3 py-1 rounded-full mb-3">
                  💰 חיסכון: {t.savings}
                </div>
                <p className="text-foreground leading-relaxed mb-4 text-lg">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t.stars}</span>
                  <span className="text-muted-foreground text-xs">✓✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold font-bold px-6 py-3 rounded-full hover:bg-gold hover:text-navy transition-colors"
          >
            📸 לעוד המלצות באינסטגרם
          </a>
        </div>
      </div>
    </section>
  );
}
