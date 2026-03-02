import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  {
    icon: "🎯",
    title: "תמהיל משכנתא מותאם אישית",
    text: "בנייה חכמה שמתאימה למצב הכלכלי שלכם היום ולתכניות שלכם לעתיד.",
  },
  {
    icon: "💪",
    title: "כוח מיקוח אגרסיבי",
    text: "משיגים את הריביות הנמוכות ביותר בזכות היכרות עמוקה עם כל המערכת הבנקאית.",
  },
  {
    icon: "🔑",
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
          למה דווקא יובל?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <div className="text-5xl mb-4" aria-hidden="true">{p.icon}</div>
              <h3 className="text-navy font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
