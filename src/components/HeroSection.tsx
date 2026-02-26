import { useEffect, useRef, useState } from "react";
import yuvalHero from "@/assets/yuval-hero.png";

const WHATSAPP_LINK = "https://wa.me/message/77DQ23O73ZPJD1";

const stats = [
  { icon: "⭐", text: "500+ לקוחות מרוצים" },
  { icon: "💰", text: "חוסכים ממוצע 200,000 ₪" },
  { icon: "🏦", text: "מכרז מול כל 6 הבנקים" },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-cta font-extrabold text-4xl md:text-5xl tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function HeroSection() {
  const scrollToForm = () => {
    document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-navy hero-pattern flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text Column */}
          <div className="flex-1 hero-stagger">
            <div className="inline-block bg-gold text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              ייעוץ עצמאי ובלתי תלוי ✓
            </div>

            <h1
              className="text-primary-foreground font-extrabold leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              בכל חודש שעובר, אתם משלמים
              <br />
              <span className="underline decoration-cta decoration-4 underline-offset-8">אלפי שקלים מיותרים</span>{" "}
              לבנק.
            </h1>

            <p className="text-primary-foreground/60 text-lg md:text-xl max-w-lg mb-4 leading-relaxed">
              בריבית של 4.5%, משכנתא ממוצעת עולה לכם מאות אלפי שקלים ריבית מיותרת. יובל כהן יוצא למכרז בין כל הבנקים ומשיג לכם תנאים שלא תקבלו לבד.
            </p>

            {/* Animated savings counter */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 mb-8 inline-flex flex-col items-start gap-1">
              <span className="text-primary-foreground/60 text-sm">חסכנו ללקוחותינו בשנה האחרונה:</span>
              <div className="flex items-baseline gap-2">
                <AnimatedCounter target={47} />
                <span className="text-primary-foreground font-bold text-xl">מיליון ₪</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={scrollToForm}
                className="bg-cta text-cta-foreground font-bold px-8 py-4 rounded-full text-lg hover:scale-[1.03] transition-transform shadow-lg shadow-cta/30"
              >
                בדיקת חיסכון חינם — תוך 60 שניות
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-foreground text-primary-foreground font-bold px-8 py-4 rounded-full text-lg hover:bg-primary-foreground/10 transition-colors"
              >
                💬 שיחה בוואטסאפ
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div key={stat.text} className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                  <span className="text-lg">{stat.icon}</span>
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
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
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-foreground">📞 זמין עבורכם 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
