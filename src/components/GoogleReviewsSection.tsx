import { useReveal } from "@/hooks/use-reveal";
import { Star } from "lucide-react";

const GOOGLE_REVIEWS_LINK =
"https://www.google.com/search?q=%D7%99%D7%95%D7%91%D7%9C+%D7%9B%D7%94%D7%9F+%D7%99%D7%95%D7%A2%D7%A5+%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA+%D7%95%D7%A4%D7%99%D7%A0%D7%A0%D7%A1%D7%99%D7%9D#lrd=0x4008255371b23971:0x72872cdad23b9f9f,1";

const reviews = [
{ name: "דני ורחל מ.", text: "יובל חסך לנו 180,000 ₪ על המשכנתא. פשוט מדהים! ממליצים בחום.", time: "לפני חודשיים" },
{ name: "אלון מ.", text: "הגענו אליו בייאוש אחרי שהבנק דחה אותנו. יובל סגר לנו תוך שבועיים.", time: "לפני 3 חודשים" },
{ name: "משפחת לוי", text: "תהליך מקצועי, שקוף ונגיש. יובל זמין תמיד ונלחם עבורנו.", time: "לפני חודש" },
{ name: "שרון כ.", text: "יובל ליווה אותנו מהרגע הראשון ועד החתימה. הרגשנו בטוחים לאורך כל הדרך. מומלץ בחום!", time: "לפני שבוע" },
{ name: "מיכאל ונעמה ש.", text: "הצליח להוריד לנו ריבית משמעותית על מיחזור המשכנתא. חסכנו מאות שקלים בחודש!", time: "לפני 2 שבועות" },
{ name: "רותם ד.", text: "יועץ משכנתאות מספר 1. ידע מקצועי, יחס אישי ותוצאות מעולות. תודה יובל!", time: "לפני 4 חודשים" }];


function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="דירוג 5 מתוך 5 כוכבים">
      {[...Array(5)].map((_, i) =>
      <Star key={i} className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]" aria-hidden="true" />
      )}
    </div>);

}

function ReviewCard({ review }: {review: (typeof reviews)[0];}) {
  const initials = review.name.charAt(0);
  return (
    <article className="bg-card rounded-xl p-5 shadow-sm border border-border min-w-[280px] md:min-w-0 snap-center flex-shrink-0">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" aria-hidden="true">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{review.name}</p>
          <p className="text-muted-foreground text-xs">{review.time}</p>
        </div>
      </div>
      <StarRating />
      <p className="text-foreground mt-3 leading-relaxed text-[15px]">
        &ldquo;{review.text}&rdquo;
      </p>
    </article>);

}

export default function GoogleReviewsSection() {
  const ref = useReveal();

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-slate-bg py-20">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <div className="text-center mb-12">
          <h2 id="reviews-heading" className="text-navy text-3xl md:text-4xl font-bold mb-4">
            מה הלקוחות אומרים
          </h2>
          <div className="flex items-center justify-center gap-3">
            <svg viewBox="0 0 24 24" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">5.0</span>
              <div className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) =>
                <Star key={i} className="h-5 w-5 fill-[#FBBC04] text-[#FBBC04]" />
                )}
              </div>
              <span className="text-muted-foreground text-sm">ביקורות מאומתות</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden" aria-hidden="true">
          <div className="flex animate-marquee-reviews items-center gap-5 w-max">
            {[...reviews, ...reviews].map((review, i) =>
            <ReviewCard key={i} review={review} />
            )}
          </div>
        </div>

        

        

        <div className="text-center mt-6">
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold font-bold px-6 py-3 rounded-full hover:bg-gold hover:text-navy transition-colors">
            
            <Star className="h-5 w-5" strokeWidth={1.5} />
            לכל הביקורות בגוגל
          </a>
        </div>
      </div>
    </section>);

}