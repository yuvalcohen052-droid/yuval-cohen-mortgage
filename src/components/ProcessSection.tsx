import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    icon: "📋",
    num: "1",
    title: "אפיון וניתוח",
    text: "בונים תוכנית כלכלית שמתאימה לכם באמת.",
  },
  {
    icon: "⚔️",
    num: "2",
    title: "מכרז בנקים",
    text: "יוצאים למלחמה מול הבנקים על כל שבריר אחוז בריבית.",
  },
  {
    icon: "🎉",
    num: "3",
    title: "חתימה וחיסכון",
    text: "מגיעים לרגע המרגש עם המשכנתא המשתלמת ביותר בישראל.",
  },
];

export default function ProcessSection() {
  const ref = useReveal();

  return (
    <section id="process" className="bg-navy py-20">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <h2 className="text-primary-foreground text-3xl md:text-4xl font-bold text-center mb-14">
          איך זה עובד?
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4 justify-center">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center gap-4 md:gap-0 md:flex-col">
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="text-4xl mb-3">{step.icon}</div>
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
                <span className="hidden md:block text-gold text-3xl mx-6 mt-16">←</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
