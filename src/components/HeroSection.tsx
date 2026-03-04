import yuvalHero from "@/assets/yuval-hero.png";
import { Star, PiggyBank, Landmark, PhoneCall } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/message/77DQ23O73ZPJD1";

const stats = [
  { icon: Star, text: "500+ לקוחות מרוצים" },
  { icon: PiggyBank, text: "חוסכים ממוצע 200,000 ₪" },
  { icon: Landmark, text: "עובד מול כל הבנקים" },
];

export default function HeroSection() {
  const scrollToForm = () => {
    document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section aria-label="באנר ראשי" className="relative min-h-screen bg-navy hero-pattern flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 hero-stagger">
            <div className="inline-block bg-gold text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              ייעוץ עצמאי ובלתי תלוי ✓
            </div>

            <h1 className="text-primary-foreground font-extrabold leading-[1.1] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              הבנק דואג לבנק.
              <br />
              אני דואג{" "}
              <span className="underline decoration-gold decoration-4 underline-offset-8">לכם</span>.
            </h1>

            <p className="text-primary-foreground/60 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              חוסכים מאות אלפי שקלים בתמהיל המשכנתא עם ליווי אובייקטיבי, מקצועי ובלתי תלוי מאת יובל כהן.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={scrollToForm}
                className="bg-gold text-navy font-bold px-8 py-4 rounded-full text-lg hover:scale-[1.03] transition-transform"
              >
                בדיקת חיסכון ללא עלות
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-foreground text-primary-foreground font-bold px-8 py-4 rounded-full text-lg hover:bg-primary-foreground/10 transition-colors inline-flex items-center gap-2"
              >
                <PhoneCall className="h-5 w-5" strokeWidth={1.5} />
                שיחה בוואטסאפ
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div key={stat.text} className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                  <stat.icon className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 relative">
            <div
              className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-gold overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(184,134,11,0.3)" }}
            >
              <img
                src={yuvalHero}
                alt="יובל כהן - יועץ משכנתאות ופיננסים"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-4 md:right-auto md:-left-8 bg-card rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              <span className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <PhoneCall className="h-4 w-4 text-navy" strokeWidth={1.5} aria-hidden="true" />
                זמין עבורכם 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
