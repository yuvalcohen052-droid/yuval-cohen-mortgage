import { useEffect, useRef, useState } from "react";

const banks = [
  "בנק הפועלים", "בנק לאומי", "בנק דיסקונט",
  "בנק מזרחי-טפחות", "הבנק הבינלאומי", "בנק יהב",
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
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function HeroSection() {
  const scrollToForm = () => {
    document.querySelector("#final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep grain-texture"
      style={{
        backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.06), transparent 60%)",
      }}
    >
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        {/* Trust Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 font-assistant font-semibold text-sm text-gold-accent"
          style={{
            background: "rgba(201,168,76,0.1)",
            border: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          ★ 5.0 מתוך 5 · 48 ביקורות בגוגל
        </div>

        {/* H1 */}
        <h1 className="font-heebo font-black tracking-tight mb-6" style={{ fontSize: "clamp(38px, 6vw, 60px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          <span className="text-white block">הבנק דואג לבנק.</span>
          <span className="text-gold-accent block mt-2">אני דואג לכם.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-assistant text-lg md:text-xl max-w-xl mb-8 leading-relaxed" style={{ color: "#B0BEC5" }}>
          ייעוץ משכנתא מקצועי שחוסך לכם עשרות אלפי שקלים —{" "}
          <span className="text-white font-semibold">ללא עלות מכיסכם.</span>
        </p>

        {/* CTA */}
        <button
          onClick={scrollToForm}
          className="cta-pulse font-heebo font-bold text-lg md:text-xl px-12 py-4 md:py-5 rounded-lg text-navy-deep transition-all duration-300 hover:-translate-y-0.5 mb-8"
          style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #D4B85C 100%)",
            boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
          }}
          aria-label="בדיקת זכאות חינם"
        >
          בדיקת זכאות חינם ←
        </button>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {["ללא התחייבות", "תוך 24 שעות", "100% דיסקרטי"].map((text) => (
            <span key={text} className="font-assistant text-sm text-cool-gray flex items-center gap-1.5">
              <span className="text-success-green">✓</span> {text}
            </span>
          ))}
        </div>

        {/* Banks */}
        <div className="w-full max-w-3xl">
          <p className="font-assistant text-xs text-cool-gray mb-4" style={{ color: "#4A5568" }}>
            עובד מול כל הבנקים בישראל
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {banks.map((bank) => (
              <div
                key={bank}
                className="px-4 py-2 rounded-lg font-assistant font-semibold text-xs opacity-50 hover:opacity-80 transition-opacity"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {bank}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
