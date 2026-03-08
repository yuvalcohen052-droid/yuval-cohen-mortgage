import { useState } from "react";
import { useForm } from "react-hook-form";
import { useReveal } from "@/hooks/use-reveal";
import { CheckCircle2, MessageCircle, Phone, Instagram, CreditCard, Send, Loader2, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { submitToGoogleSheet } from "@/lib/google-sheets";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_LINK = "https://wa.me/972506006042";
const INSTAGRAM_LINK = "https://www.instagram.com/yuval_cohen_m";
const WISECARD_LINK = "https://app.wisecard.co.il/c/RequestWizard/YUVALC";
const FACEBOOK_LINK = "https://www.facebook.com/share/1cT8Fw1rsf/?mibextid=wwXIfr";
const TIKTOK_LINK = "https://www.tiktok.com/@yuvalcohenmortgage";

const containerAnimation = {
  initial: { "--x": "100%", scale: 0.95 } as any,
  animate: { "--x": "-100%", scale: 1 } as any,
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    repeatDelay: 1,
    type: "spring" as const,
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring" as const,
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
}

export default function LeadFormSection() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const success = await submitToGoogleSheet({
      name: data.name,
      phone: data.phone,
      email: data.email,
      serviceType: data.serviceType,
      source: "full",
    });
    setLoading(false);
    if (success) {
      setSubmitted(true);
    } else {
      toast({ title: "שגיאה", description: "לא הצלחנו לשלוח את הטופס, נסו שוב", variant: "destructive" });
    }
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
              מלאו את הטופס ואחזור אליכם בהקדם
            </p>

            <motion.div
              {...containerAnimation}
              className="relative bg-navy rounded-xl border border-gold/25 p-6 md:p-8"
              style={{ boxShadow: "0 6px 30px rgba(184,134,11,0.18)" }}
            >
              {/* Shiny sweep overlay */}
              <span
                style={{
                  maskImage:
                    "linear-gradient(-75deg, hsl(var(--primary)) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), hsl(var(--primary)) calc(var(--x) + 100%))",
                }}
                className="absolute inset-0 z-10 block rounded-[inherit] pointer-events-none"
              />
              <span
                style={{
                  mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
                  maskComposite: "exclude",
                }}
                className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px pointer-events-none"
              />

              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 text-primary-foreground relative z-20 py-6">
                  <CheckCircle2 className="h-12 w-12 text-gold" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold">תודה! קיבלנו את פרטיך</h3>
                  <p className="text-primary-foreground/70">יובל יחזור אליך בהקדם</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative z-20">
                  <div>
                    <label htmlFor="name" className="block text-primary-foreground font-semibold mb-1 text-sm">
                      שם מלא *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", { required: "שדה חובה" })}
                      className="w-full bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 rounded-lg border-none px-4 py-3 focus:bg-white/25 transition-colors"
                      placeholder="השם המלא שלכם"
                    />
                    {errors.name && (
                      <span className="text-destructive text-sm">{errors.name.message}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-primary-foreground font-semibold mb-1 text-sm">
                      טלפון *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone", { required: "שדה חובה" })}
                      className="w-full bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 rounded-lg border-none px-4 py-3 focus:bg-white/25 transition-colors"
                      placeholder="05X-XXXXXXX"
                      dir="ltr"
                    />
                    {errors.phone && (
                      <span className="text-destructive text-sm">{errors.phone.message}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-primary-foreground font-semibold mb-1 text-sm">
                      אימייל
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 rounded-lg border-none px-4 py-3 focus:bg-white/25 transition-colors"
                      placeholder="your@email.com"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="block text-primary-foreground font-semibold mb-1 text-sm">
                      סוג הבקשה *
                    </label>
                    <select
                      id="serviceType"
                      {...register("serviceType", { required: "שדה חובה" })}
                      className="w-full bg-white/15 text-primary-foreground rounded-lg border-none px-4 py-3 focus:bg-white/25 transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-navy">בחרו סוג שירות</option>
                      <option value="משכנתא חדשה - רכישה יד שנייה" className="text-navy">משכנתא חדשה - רכישה יד שנייה</option>
                      <option value="משכנתא חדשה - רכישה מקבלן" className="text-navy">משכנתא חדשה - רכישה מקבלן</option>
                      <option value="מחזור משכנתא" className="text-navy">מחזור משכנתא</option>
                      <option value="איחוד הלוואות" className="text-navy">איחוד הלוואות</option>
                      <option value="ייעוץ פיננסי כללי" className="text-navy">ייעוץ פיננסי כללי</option>
                    </select>
                    {errors.serviceType && (
                      <span className="text-destructive text-sm">{errors.serviceType.message}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-l from-gold to-gold-light text-navy font-bold py-3 rounded-full text-lg hover:scale-[1.03] transition-transform inline-flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? <Loader2 className="h-5 w-5 shrink-0 animate-spin" /> : <Send className="h-5 w-5 shrink-0" strokeWidth={1.5} />}
                    {loading ? "שולח..." : "שליחת בקשה לבדיקה ראשונית"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Contact info */}
          <div className="bg-navy rounded-2xl p-6 md:p-8 text-primary-foreground">
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
              <a
                href="tel:+972506006042"
                className="flex items-center gap-3 py-3 border-b border-primary-foreground/20 hover:text-gold transition-colors"
              >
                <Phone className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span>שיחת ייעוץ</span>
              </a>
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
                className="flex items-center gap-3 py-3 border-b border-primary-foreground/20 hover:text-gold transition-colors"
              >
                <CreditCard className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span>הגשה דיגיטלית</span>
              </a>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 border-b border-primary-foreground/20 hover:text-gold transition-colors"
              >
                <Facebook className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span>פייסבוק</span>
              </a>
              <a
                href={TIKTOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 hover:text-gold transition-colors"
              >
                <svg className="h-5 w-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                <span>טיקטוק</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
