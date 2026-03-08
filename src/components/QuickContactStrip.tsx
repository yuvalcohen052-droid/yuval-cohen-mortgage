import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function QuickContactStrip() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) setSubmitted(true);
  };

  return (
    <div className="relative z-10 -mt-8 mb-4">
      <div className="container mx-auto px-4">
        <div
          className="max-w-3xl mx-auto bg-navy rounded-xl border border-gold/25 p-4 md:p-5"
          style={{ boxShadow: "0 6px 30px rgba(184,134,11,0.18)" }}
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary-foreground">
              <CheckCircle2 className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <span className="text-sm font-bold">תודה! נחזור אליכם בהקדם</span>
            </div>
          ) : (
            <>
              <p className="text-primary-foreground font-bold text-base md:text-lg mb-3 text-center">
                השאירו פרטים בטופס ונחזור אליכם בהקדם
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch gap-2">
                <input
                  type="text"
                  placeholder="שם"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-1 bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 rounded-lg border-none px-4 py-2 text-sm focus:bg-white/25 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="טלפון"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  dir="ltr"
                  className="flex-1 bg-white/15 text-primary-foreground placeholder:text-primary-foreground/50 rounded-lg border-none px-4 py-2 text-sm focus:bg-white/25 transition-colors"
                />
                <ShinyButton
                  type="submit"
                  className="bg-gradient-to-l from-gold to-gold-light text-navy font-bold rounded-full px-6 py-2 text-sm inline-flex items-center justify-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5" strokeWidth={2} />
                  שליחה
                </ShinyButton>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
