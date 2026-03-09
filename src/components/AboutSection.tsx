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
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shrink-0 ring-4 ring-gold ring-offset-2 ring-offset-background">
            <img
              src={yuvalAbout}
              alt="יובל כהן – יועץ משכנתאות"
              className="w-full h-full object-cover"
              loading="lazy"
            />
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

        {/* Why clients choose me box */}
        <div className="mt-12 bg-navy rounded-2xl p-8 md:p-10 text-right">
          <h3 className="text-gold font-bold text-xl md:text-2xl mb-6">למה לקוחות בוחרים לעבוד איתי</h3>
          <ul className="space-y-4 text-primary-foreground text-lg leading-relaxed">
            <li className="flex items-start gap-3 justify-end">
              <span>ניסיון בתחום המשכנתאות והפיננסים</span>
              <span className="text-gold font-bold text-xl shrink-0">✔</span>
            </li>
            <li className="flex items-start gap-3 justify-end">
              <span>ליווי אישי מתחילת התהליך ועד קבלת המפתח</span>
              <span className="text-gold font-bold text-xl shrink-0">✔</span>
            </li>
            <li className="flex items-start gap-3 justify-end">
              <span>ניהול משא ומתן מול כל הבנקים</span>
              <span className="text-gold font-bold text-xl shrink-0">✔</span>
            </li>
            <li className="flex items-start gap-3 justify-end">
              <span>התאמת משכנתא לצרכים שלכם – לא לאינטרס של הבנק</span>
              <span className="text-gold font-bold text-xl shrink-0">✔</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
