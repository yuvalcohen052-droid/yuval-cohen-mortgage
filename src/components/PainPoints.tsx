import { useReveal } from "@/hooks/use-reveal";
import { Building2, TrendingUp, Scale } from "lucide-react";

const pains = [
  {
    icon: Building2,
    title: "מסלול אחד — שטוב לבנק",
    text: "הבנק מציע לכם את המסלול שמניב לו את הרווח הגבוה ביותר, לא בהכרח את המסלול הכי טוב עבורכם.",
  },
  {
    icon: TrendingUp,
    title: "ריבית גבוהה מדי",
    text: "בלי משא ומתן מקצועי ובלי להשוות בין בנקים, אתם כמעט תמיד משלמים ריבית גבוהה מהנדרש.",
  },
  {
    icon: Scale,
    title: "תמהיל לא מותאם = הפסד של עשרות אלפים",
    text: "תמהיל משכנתא שלא מותאם לפרופיל הפיננסי שלכם יכול לעלות לכם מאות אלפי שקלים לאורך חיי ההלוואה.",
  },
];

export default function PainPoints() {
  const ref = useReveal();

  return (
    <section className="bg-white py-20">
      <div ref={ref} className="container mx-auto px-4 reveal-section">
        <h2 className="font-heebo font-bold text-center mb-12 text-foreground" style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2 }}>
          אתם יודעים מה הבנק{" "}
          <span className="text-gold-accent">לא</span>{" "}
          אומר לכם?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pains.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <div
                key={i}
                className="reveal-child bg-white rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 border-r-4 border-r-gold-accent"
                style={{
                  boxShadow: "0 4px 24px rgba(10,22,40,0.08)",
                  border: "1px solid rgba(10,22,40,0.06)",
                  borderRight: "4px solid hsl(44 54% 54%)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(201,168,76,0.08)" }}
                >
                  <Icon className="w-6 h-6 text-gold-accent" />
                </div>
                <h3 className="font-heebo font-bold text-xl text-foreground mb-3">{pain.title}</h3>
                <p className="font-assistant text-base text-cool-gray leading-relaxed">{pain.text}</p>
              </div>
            );
          })}
        </div>

        {/* Transition */}
        <div className="text-center mt-12">
          <p className="font-heebo font-bold text-2xl text-gold-accent mb-2">אבל יש דרך אחרת...</p>
          <span className="bounce-arrow inline-block text-gold-accent text-2xl">↓</span>
        </div>
      </div>
    </section>
  );
}
