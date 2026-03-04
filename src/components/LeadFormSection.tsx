import { useState } from "react";
import { useForm } from "react-hook-form";
import { useReveal } from "@/hooks/use-reveal";
import { CheckCircle2, MessageCircle, Phone, Instagram, CreditCard, Send } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/message/77DQ23O73ZPJD1";
const INSTAGRAM_LINK = "https://www.instagram.com/yuval_cohen_m";
const WISECARD_LINK = "https://app.wisecard.co.il/c/RequestWizard/YUVALC";

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
}

export default function LeadFormSection() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="bg-card py-20">
      <div ref={ref} className="container mx-auto px-4 reveal">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div>
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-3">
              בואו נבדוק כמה אתם יכולים לחסוך
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              מלאו את הטופס ואחזור אליכם תוך שעה בימי עסקים
            </p>

            {submitted ? (
              <div className="bg-slate-bg rounded-2xl p-10 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle2 className="h-16 w-16 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-navy text-2xl font-bold mb-2">
                  תודה! קיבלנו את פרטיך
                </h3>
                <p className="text-muted-foreground text-lg">
                  יובל יחזור אליך בהקדם
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-foreground font-semibold mb-1">
                    שם מלא *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "שדה חובה" })}
                    className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground"
                    placeholder="השם המלא שלכם"
                  />
                  {errors.name && (
                    <span className="text-destructive text-sm">{errors.name.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-foreground font-semibold mb-1">
                    טלפון *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: "שדה חובה" })}
                    className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground"
                    placeholder="05X-XXXXXXX"
                    dir="ltr"
                  />
                  {errors.phone && (
                    <span className="text-destructive text-sm">{errors.phone.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-foreground font-semibold mb-1">
                    אימייל
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground"
                    placeholder="your@email.com"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-foreground font-semibold mb-1">
                    סוג הבקשה *
                  </label>
                  <select
                    id="serviceType"
                    {...register("serviceType", { required: "שדה חובה" })}
                    className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground"
                    defaultValue=""
                  >
                    <option value="" disabled>בחרו סוג שירות</option>
                    <option value="purchase-used">משכנתא חדשה - רכישה יד שנייה</option>
                    <option value="purchase-new">משכנתא חדשה - רכישה מקבלן</option>
                    <option value="refinance">מחזור משכנתא</option>
                    <option value="consolidation">איחוד הלוואות</option>
                    <option value="general">ייעוץ פיננסי כללי</option>
                  </select>
                  {errors.serviceType && (
                    <span className="text-destructive text-sm">{errors.serviceType.message}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-navy font-bold py-4 rounded-full text-lg hover:scale-[1.03] transition-transform inline-flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" strokeWidth={1.5} />
                  שליחת בקשה לבדיקה ראשונית
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="bg-navy rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-xl font-bold mb-6">דרכים נוספות לדבר איתי</h3>
            <div className="space-y-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-whatsapp text-primary-foreground font-bold py-3 rounded-lg text-center hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                וואטסאפ ישיר
              </a>
              <div className="flex items-center gap-3 py-3 border-b border-primary-foreground/20">
                <Phone className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span>זמין לשיחה</span>
              </div>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 border-b border-primary-foreground/20 hover:text-gold transition-colors"
              >
                <Instagram className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span>אינסטגרם</span>
              </a>
              <a
                href={WISECARD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 hover:text-gold transition-colors"
              >
                <CreditCard className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span>הגשה דיגיטלית</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
