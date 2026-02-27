import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { value: 12, prefix: "₪", suffix: "M+", label: "נחסכו ללקוחות" },
  { value: 340, prefix: "", suffix: "+", label: "משפחות ליוויתי" },
  { value: 10, prefix: "", suffix: "+", label: "שנות ניסיון בתחום" },
];

function Counter({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
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
          let start: number | null = null;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-frank font-bold text-gold-accent" style={{ fontSize: "clamp(40px, 5vw, 52px)" }}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function SocialProofBar() {
  const ref = useReveal();

  return (
    <section className="bg-off-white py-16">
      <div ref={ref} className="container mx-auto px-4 reveal-section">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-0">
              <div className="flex flex-col items-center text-center px-8 md:px-12 reveal-child">
                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                <span className="font-assistant text-base text-cool-gray mt-1">{stat.label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-light-gray" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
