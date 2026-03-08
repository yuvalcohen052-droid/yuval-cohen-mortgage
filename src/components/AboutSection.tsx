import { useReveal } from "@/hooks/use-reveal";

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-background py-20">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl reveal">
        <h2 id="about-heading" className="text-navy text-3xl md:text-4xl font-bold text-center mb-10">
          עליי
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg text-right">
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
    </section>
  );
}
