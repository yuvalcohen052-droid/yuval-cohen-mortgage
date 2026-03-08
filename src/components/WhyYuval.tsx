import { useReveal } from "@/hooks/use-reveal";
import { Crosshair, Swords, KeyRound } from "lucide-react";
import { motion } from "framer-motion";

const iconAnimations: Record<string, any> = {
  Swords: {
    initial: { rotate: 0 },
    animate: { rotate: [0, -12, 10, -8, 6, -3, 0] },
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  Crosshair: {
    initial: { scale: 0.6, opacity: 0 },
    animate: { scale: [0.6, 1.2, 0.95, 1], opacity: 1 },
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  KeyRound: {
    initial: { scale: 0.6, opacity: 0 },
    animate: { scale: [0.6, 1.15, 0.97, 1], opacity: 1 },
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 },
  },
};

const pillars = [
  {
    icon: Crosshair,
    iconKey: "Crosshair",
    title: "תמהיל משכנתא מותאם אישית",
    text: "בנייה חכמה שמתאימה למצב הכלכלי שלכם היום ולתכניות שלכם לעתיד.",
  },
  {
    icon: Swords,
    iconKey: "Swords",
    title: "כוח מיקוח אגרסיבי",
    text: "משיגים את הריביות הנמוכות ביותר בזכות היכרות עמוקה עם כל המערכת הבנקאית.",
  },
  {
    icon: KeyRound,
    iconKey: "KeyRound",
    title: "ליווי עד המפתח",
    text: "שקט נפשי מלא – אני מטפל בבירוקרטיה, אתם חותמים ועוברים לדירה.",
  },
];

export default function WhyYuval() {
  const ref = useReveal();

  return (
    <section id="why" aria-labelledby="why-heading" className="bg-slate-bg py-20">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <h2 id="why-heading" className="text-navy text-3xl md:text-4xl font-bold text-center mb-12">
          יובל כהן – אסטרטגיית משכנתא מנצחת
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <motion.div
                  {...iconAnimations[p.iconKey]}
                  viewport={{ once: true }}
                  whileInView={iconAnimations[p.iconKey].animate}
                  animate={undefined}
                >
                  <p.icon className="h-7 w-7 text-navy" strokeWidth={1.5} aria-hidden="true" />
                </motion.div>
              </div>
              <h3 className="text-navy font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
