import { useReveal } from "@/hooks/use-reveal";
import yuvalAbout from "@/assets/yuval-about.png";

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-background py-20">
      <div ref={ref} className="container mx-auto px-4 max-w-4xl reveal">
        <h2 id="about-heading" className="text-navy text-3xl md:text-4xl font-bold text-center mb-12">
          קצת עליי
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10">
          {/* Image */}
          <div className="shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
              <img
                src={yuvalAbout}
                alt="יובל כהן – יועץ משכנתאות"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Text */}
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg text-right flex-1">
            <p>
              שמי יובל כהן, יועץ משכנתאות ופיננסים.
            </p>
            <p>
              אני מלווה אנשים ומשפחות בתהליך קבלת משכנתא בצורה מקצועית, שקופה ומדויקת לצרכים האישיים שלהם.
            </p>
            <p>
              משכנתא היא אחת ההחלטות הכלכליות המשמעותיות בחיים, ולכן חשוב לבצע אותה בצורה נכונה, לאחר בחינה מעמיקה של האפשרויות והמסלולים הקיימים. במסגרת הליווי אני שם דגש על הבנה מלאה של המצב הפיננסי, התאמה אישית של תמהיל המשכנתא והסבר ברור של כל שלב בתהליך.
            </p>
            <p>
              המטרה שלי היא לעזור לכם לקבל החלטה כלכלית נכונה ולבנות משכנתא שמתאימה לכם – היום ובעתיד, תוך ראייה רחבה של הצרכים והיכולת הכלכלית שלכם.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
