import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useToast } from "@/hooks/use-toast";

const subjects = ["משכנתא לרכישה", "מחזור משכנתא", "ייעוץ פיננסי", "אחר"];

export default function FinalCTA() {
  const ref = useReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", subject: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    console.log("Lead submitted:", form);
    setSubmitted(true);
    toast({
      title: "תודה! 🎉",
      description: "נחזור אליכם בהקדם.",
    });
  };

  return (
    <section
      id="final-cta"
      className="relative bg-navy-deep py-20 grain-texture overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06), transparent 60%)",
      }}
    >
      <div ref={ref} className="relative z-10 container mx-auto px-4 reveal-section">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-heebo font-bold text-white mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2 }}>
            מוכנים לחסוך{" "}
            <span className="text-gold-accent">עשרות אלפי שקלים</span>?
          </h2>
          <p className="font-assistant text-lg mb-10" style={{ color: "#B0BEC5" }}>
            השאירו פרטים ואחזור אליכם תוך 24 שעות עם הערכה ראשונית — ללא עלות וללא התחייבות.
          </p>

          {submitted ? (
            <div className="bg-navy-medium rounded-xl p-10 text-center">
              <span className="text-4xl mb-4 block">🎉</span>
              <p className="font-heebo font-bold text-xl text-white mb-2">תודה!</p>
              <p className="font-assistant text-base" style={{ color: "#B0BEC5" }}>
                קיבלתי את הפרטים. אחזור אליכם בהקדם האפשרי.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="השם שלכם"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-lg px-5 py-4 font-assistant text-base text-white placeholder:text-white/40 outline-none transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                aria-label="שם מלא"
              />
              <input
                type="tel"
                placeholder="050-000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="w-full rounded-lg px-5 py-4 font-assistant text-base text-white placeholder:text-white/40 outline-none transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                aria-label="מספר טלפון"
              />
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-lg px-5 py-4 font-assistant text-base text-white outline-none transition-all duration-300 appearance-none"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                aria-label="נושא הפנייה"
              >
                <option value="" disabled className="text-foreground">נושא הפנייה</option>
                {subjects.map((s) => (
                  <option key={s} value={s} className="text-foreground">{s}</option>
                ))}
              </select>

              <button
                type="submit"
                className="cta-pulse w-full font-heebo font-bold text-lg py-5 rounded-lg text-navy-deep transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #D4B85C 100%)",
                  boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
                }}
              >
                📞 שלחו ואני חוזר אליכם
              </button>
            </form>
          )}

          <p className="font-assistant text-xs text-cool-gray mt-4 flex items-center justify-center gap-1">
            🔒 הפרטים שלכם מאובטחים ולא מועברים לצד שלישי
          </p>
        </div>
      </div>
    </section>
  );
}
