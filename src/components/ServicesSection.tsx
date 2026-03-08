import { useReveal } from "@/hooks/use-reveal";
import { Home, Building2, RefreshCw, Link2, Handshake, ShieldOff } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "רכישה יד שנייה",
    text: "ניתוח עסקאות מורכבות, בדיקת זכאות והתאמת תמהיל אישי.",
  },
  {
    icon: Building2,
    title: "רכישה מקבלן",
    text: "ניהול מדד תשומות הבנייה, גרייס ותכנון פיננסי אסטרטגי.",
  },
  {
    icon: RefreshCw,
    title: "מחזור משכנתא",
    text: "שיפור תנאי הריבית וההחזרים למשכנתא קיימת – חוסכים מהיום הראשון.",
  },
  {
    icon: Link2,
    title: "איחוד הלוואות",
    text: "ריכוז חובות להחזר חודשי אחד נמוך ושפוי בתוך המשכנתא.",
  },
  {
    icon: Handshake,
    title: "ליווי מלא ואובייקטיבי",
    text: "ניהול משא ומתן, טיפול בבירוקרטיה וזמינות מלאה גם אחרי החתימה.",
  },
  {
    icon: ShieldOff,
    title: "טיפול במסורבי בנקים",
    text: "פתרונות יצירתיים ומקצועיים ללקוחות שנדחו על ידי הבנקים – כולל מימון חוץ בנקאי.",
  },
];

export default function ServicesSection() {
  const ref = useReveal();

  return (
    <section aria-labelledby="services-heading" className="bg-card py-20">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <h2 id="services-heading" className="text-navy text-3xl md:text-4xl font-bold text-center mb-3">
          השירותים שלי
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12">
          פתרון מקצועי לכל סיטואציה פיננסית
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border p-6 hover:border-gold hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4" aria-hidden="true">
                <s.icon className="h-7 w-7 text-navy" strokeWidth={1.5} />
              </div>
              <h3 className="text-navy font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
