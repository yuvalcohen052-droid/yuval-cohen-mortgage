import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function QuickContactStrip() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) setSubmitted(true);
  };

  return (
    <div className="relative z-10 -mt-12 mb-8">
      <div className="container mx-auto px-4">
        <div
          className="bg-navy rounded-2xl border-2 border-gold/40 p-6 md:p-8"
          style={{ boxShadow: "0 8px 40px rgba(184,134,11,0.25)" }}
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-primary-foreground">
              <CheckCircle2 className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <span className="text-lg font-bold">תודה! נחזור אליכם בהקדם</span>
            </div>
          ) : (
            <>
              <p className="text-primary-foreground font-bold text-lg md:text-xl mb-5 text-center">
                השאירו פרטים בטופס ונחזור אליכם בהקדם
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch gap-3">
                <input
                  type="text"
                  placeholder="שם"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-1 bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl border-none px-5 py-3 text-base focus:bg-white/25 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="טלפון"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  dir="ltr"
                  className="flex-1 bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl border-none px-5 py-3 text-base focus:bg-white/25 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-l from-gold to-gold-light text-navy font-bold rounded-full px-8 py-3 text-base hover:scale-[1.03] transition-transform inline-flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" strokeWidth={2} />
                  שליחה
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
