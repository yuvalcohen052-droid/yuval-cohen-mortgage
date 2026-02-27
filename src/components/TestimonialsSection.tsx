import { useRef, useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    text: "אחרי יועצים שונים והבטחות שלא היה להן בסיס, הגענו ליובל כהן, יועץ משכנתאות מהשורה הראשונה שנתן לנו תחושה מההתחלה שאנחנו בידיים טובות וידע הכל לאורך כל הדרך, ובסוף קיבלנו את המשכנתא הכי נוחה והכי טובה לנו. ממליץ בחום!",
    author: "ל.מ.",
  },
  {
    text: "הגעתי לדבר עם יובל ולהתייעץ. הוא ישב איתי והסביר לעומק את התוכן. בסוף התהליך הוא הצליח לחסוך לי כמעט מאה אלף שקל! ממליץ בחום!!!",
    author: "א.ב.",
  },
  {
    text: "יובל, אלוף מספר אחד. עזר לי המון ונתן לי תחושת ביטחון. ממליץ בחום לכל מי שרוצה מישהו מקצועי ואמין.",
    author: "ד.ר.",
  },
  {
    text: "אדם אמין שנותן שירות מכל הלב. עזר לי המון עם המשכנתא שלי.",
    author: "מ.כ.",
  },
  {
    text: "אחי, איזה שירות והבנה יש לו. הוא מכיר את העבודה שלו, אין ספק, ונחזור אליו בפעם הבאה בטוח. ממליץ בחום.",
    author: "ש.ע.",
  },
];

export default function TestimonialsSection() {
  const ref = useReveal();
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [paused, setPaused] = useState(false);

  // How many visible at once
  const visibleCount = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = testimonials.length - visibleCount;

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, maxIndex]);

  const scrollToForm = () => {
    document.querySelector("#final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-navy-deep py-20 grain-texture overflow-hidden">
      <div ref={ref} className="relative z-10 container mx-auto px-4 reveal-section">
        <h2 className="font-heebo font-bold text-center text-white mb-2" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          מה הלקוחות שלי אומרים
        </h2>
        <p className="font-assistant text-base text-cool-gray text-center mb-12">
          ביקורות אמיתיות מ-Google — 5.0 ★ מתוך 48 ביקורות
        </p>

        <div
          className="overflow-hidden max-w-5xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${current * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[calc(33.333%-16px)] flex-shrink-0 bg-navy-medium rounded-xl p-7 relative"
              >
                {/* Decorative quote */}
                <span
                  className="absolute top-4 right-4 font-frank text-7xl leading-none select-none"
                  style={{ color: "rgba(201,168,76,0.15)" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-gold-accent text-lg">★</span>
                    ))}
                    <span className="text-white/40 text-xs mr-2 font-assistant">Google</span>
                  </div>
                  <p className="font-assistant text-base leading-relaxed mb-5" style={{ color: "#E0E0E0", lineHeight: 1.8 }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <span className="font-assistant font-semibold text-sm text-gold-accent">— {t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-gold-accent w-6" : "bg-white/20"
              }`}
              aria-label={`ביקורת ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            onClick={scrollToForm}
            className="cta-pulse font-heebo font-bold text-lg px-10 py-4 rounded-lg text-navy-deep transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #D4B85C 100%)",
              boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
            }}
            aria-label="דברו איתי"
          >
            גם אתם יכולים לחסוך — דברו איתי ←
          </button>
        </div>
      </div>
    </section>
  );
}
