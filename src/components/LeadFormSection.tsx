import { useState } from "react";
import { useForm } from "react-hook-form";
import { useReveal } from "@/hooks/use-reveal";

const WHATSAPP_LINK = "https://wa.me/message/77DQ23O73ZPJD1";
const INSTAGRAM_LINK = "https://www.instagram.com/yuval_cohen_m";
const WISECARD_LINK = "https://app.wisecard.co.il/c/RequestWizard/YUVALC";

const serviceOptions = [
  { value: "purchase-used", icon: "🏠", label: "רכישה" },
  { value: "refinance", icon: "🔄", label: "מחזור" },
  { value: "consolidation", icon: "🔗", label: "איחוד" },
  { value: "general", icon: "🤝", label: "ייעוץ" },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  consent: boolean;
}

export default function LeadFormSection() {
  const ref = useReveal();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const handleServiceSelect = (value: string) => {
    setSelectedService(value);
    setValue("serviceType", value);
    setStep(2);
  };

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
              בואו נבדוק כמה אתם יכולים לחסוך — בלי התחייבות
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              מלאו את הטופס ויובל יחזור אליכם תוך שעה בימי עסקים
            </p>

            {submitted ? (
              <div className="bg-slate-bg rounded-2xl p-10 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-navy text-2xl font-bold mb-2">
                  תודה! קיבלנו את פרטיך
                </h3>
                <p className="text-muted-foreground text-lg">
                  יובל יחזור אליך בהקדם
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Step 1: Service selection */}
                <div>
                  <p className="text-foreground font-semibold mb-3">
                    {step === 1 ? "① " : "✓ "}בחרו את סוג הבקשה:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {serviceOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => handleServiceSelect(opt.value)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                          selectedService === opt.value
                            ? "border-cta bg-cta/10 scale-[1.03]"
                            : "border-border hover:border-gold hover:scale-[1.02]"
                        }`}
                      >
                        <span className="text-3xl">{opt.icon}</span>
                        <span className="text-sm font-semibold text-foreground">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                  <input type="hidden" {...register("serviceType", { required: "בחרו סוג שירות" })} />
                  {errors.serviceType && (
                    <span className="text-destructive text-sm mt-1 block">{errors.serviceType.message}</span>
                  )}
                </div>

                {/* Step 2: Personal details (revealed after selection) */}
                <div
                  className={`space-y-4 transition-all duration-500 ${
                    step >= 2 ? "opacity-100 max-h-[600px]" : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-foreground font-semibold">② השאירו פרטים:</p>
                  <div>
                    <label htmlFor="name" className="block text-foreground font-semibold mb-1">
                      שם מלא *
                    </label>
                    <input
                      id="name"
                      type="text"
                      maxLength={100}
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
                      טלפון נייד *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      maxLength={15}
                      {...register("phone", { required: "שדה חובה" })}
                      className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground"
                      placeholder="05X-XXXXXXX"
                      dir="ltr"
                    />
                    {errors.phone && (
                      <span className="text-destructive text-sm">{errors.phone.message}</span>
                    )}
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="consent"
                      {...register("consent", { required: "יש לאשר כדי לשלוח" })}
                      className="mt-1 accent-cta"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      אני מאשר/ת קבלת פנייה מיועץ משכנתאות. המידע מאובטח ולא מועבר לצד שלישי.
                    </label>
                  </div>
                  {errors.consent && (
                    <span className="text-destructive text-sm">{errors.consent.message}</span>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-cta text-cta-foreground font-bold py-4 rounded-full text-lg hover:scale-[1.03] transition-transform shadow-lg shadow-cta/30"
                  >
                    שלחו — ויובל יחזור אליכם תוך שעה 🚀
                  </button>
                  {/* Trust signals */}
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground pt-2">
                    <span>🔒 מאובטח ופרטי</span>
                    <span>⏱️ תגובה ממוצעת: 47 דקות</span>
                    <span>📞 מעדיפים טלפון? חייגו</span>
                  </div>
                </div>
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
                className="block w-full bg-whatsapp text-primary-foreground font-bold py-3 rounded-lg text-center hover:opacity-90 transition-opacity"
              >
                💬 וואטסאפ ישיר
              </a>
              <div className="flex items-center gap-3 py-3 border-b border-primary-foreground/20">
                <span className="text-xl">📞</span>
                <span>זמין לשיחה</span>
              </div>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 border-b border-primary-foreground/20 hover:text-gold transition-colors"
              >
                <span className="text-xl">📸</span>
                <span>אינסטגרם</span>
              </a>
              <a
                href={WISECARD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 hover:text-gold transition-colors"
              >
                <span className="text-xl">🪪</span>
                <span>הגשה דיגיטלית</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
