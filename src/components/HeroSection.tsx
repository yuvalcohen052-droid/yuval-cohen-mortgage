import yuvalHero from "@/assets/yuval-hero.png";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { CheckCircle2, PhoneCall } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/972506006042";

const stats = [
  { icon: CheckCircle2, text: "תכנון משכנתא מקצועי ואובייקטיבי" },
  { icon: CheckCircle2, text: "בחירת המסלול המשתלם ביותר" },
  { icon: CheckCircle2, text: "ניהול משא ומתן מול הבנקים" },
  { icon: CheckCircle2, text: "ליווי אישי עד חתימה על המשכנתא" },
];

export default function HeroSection() {
  const scrollToForm = () => {
    document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section aria-label="באנר ראשי" className="relative min-h-screen bg-background flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16">
          <div className="flex-1 hero-stagger">
            <div className="inline-block bg-gold text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              ייעוץ עצמאי ובלתי תלוי ✓
            </div>

            <h1 className="text-navy font-extrabold leading-[1.1] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              <TypingAnimation text="משכנתא חכמה" duration={80} />
              <br />
              <TypingAnimation text="מתחילה ב" duration={80} delay={1000} />
              <span className="relative inline-block">
                <TypingAnimation text="תכנון נכון" duration={80} delay={1800} />
                <span 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full animate-[underline-grow_0.6s_ease-out_forwards]"
                  style={{ 
                    width: '0%',
                    animationDelay: '2800ms'
                  }}
                />
              </span>
              <TypingAnimation text="." duration={80} delay={2800} />
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              משכנתא לא לוקחים – משכנתא מתכננים. ליווי מקצועי שחוסך לכם כסף כבר מהצעד הראשון.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={scrollToForm}
                className="bg-gold text-navy font-bold px-6 py-3 rounded-full text-base hover:scale-[1.03] transition-transform"
              >
                בדיקת חיסכון ללא עלות
              </button>
              <a
                href="tel:+972506006042"
                className="border-2 border-navy text-navy font-bold px-6 py-3 rounded-full text-base hover:bg-navy/10 transition-colors inline-flex items-center gap-2"
              >
                <PhoneCall className="h-5 w-5" strokeWidth={1.5} />
                שיחת ייעוץ
              </a>
            </div>

            <div className="flex flex-col gap-2">
              {stats.map((stat) => (
                <div key={stat.text} className="flex items-center gap-2 text-foreground/80 text-sm">
                  <stat.icon className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden">
              <img
                src={yuvalHero}
                alt="יובל כהן - יועץ משכנתאות ופיננסים"
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-2 right-0 md:right-auto md:-left-8 bg-card rounded-xl shadow-lg px-3 py-2 md:px-4 md:py-3 flex items-center gap-2 max-w-[200px] md:max-w-none">
              <span className="w-2.5 h-2.5 rounded-full bg-whatsapp animate-pulse" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <PhoneCall className="h-4 w-4 text-navy" strokeWidth={1.5} aria-hidden="true" />
                צרו קשר ותתחילו לחסוך!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
