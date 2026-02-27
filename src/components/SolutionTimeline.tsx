import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    num: 1,
    title: "שיחת אפיון חינמית",
    text: "נבין את הצרכים שלכם, המצב הפיננסי, ונגדיר יעדים ברורים למשכנתא",
  },
  {
    num: 2,
    title: "בדיקת זכאות ומיפוי",
    text: "נבדוק את כל האפשרויות מול כל הבנקים ונבנה תמהיל אופטימלי",
  },
  {
    num: 3,
    title: "משא ומתן מול הבנקים",
    text: "אנהל בשבילכם משא ומתן אגרסיבי להשגת התנאים הטובים ביותר",
  },
  {
    num: 4,
    title: "סגירה + ליווי מלא",
    text: "אלווה אתכם עד חתימת הסכם המשכנתא — ואחריה",
  },
];

export default function SolutionTimeline() {
  const ref = useReveal();

  const scrollToForm = () => {
    document.querySelector("#final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-navy-deep py-20 grain-texture overflow-hidden">
      <div ref={ref} className="relative z-10 container mx-auto px-4 reveal-section">
        <h2 className="font-heebo font-bold text-center text-white mb-14" style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2 }}>
          כך אני חוסך לכם כסף —{" "}
          <span className="text-gold-accent">צעד אחר צעד</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal-child bg-navy-medium rounded-xl p-7 relative"
            >
              {/* Number circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-heebo font-bold text-xl text-gold-accent"
                style={{ border: "2px solid hsl(44 54% 54%)" }}
              >
                {step.num}
              </div>
              <h3 className="font-heebo font-bold text-lg text-white mb-2">{step.title}</h3>
              <p className="font-assistant text-base leading-relaxed" style={{ color: "#B0BEC5" }}>
                {step.text}
              </p>

              {/* Dashed connector line (desktop only, between pairs) */}
              {i < 3 && (
                <div
                  className="hidden md:block absolute"
                  style={{
                    ...(i % 2 === 0
                      ? { left: "-12px", top: "50%", width: "1px", height: "0" }
                      : {}),
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToForm}
            className="cta-pulse font-heebo font-bold text-lg px-10 py-4 rounded-lg text-navy-deep transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #D4B85C 100%)",
              boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
            }}
            aria-label="בואו נתחיל עם שיחה חינם"
          >
            בואו נתחיל עם שיחה חינם ←
          </button>
        </div>
      </div>
    </section>
  );
}
