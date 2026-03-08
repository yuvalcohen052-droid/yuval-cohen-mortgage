import { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { submitToGoogleSheet } from "@/lib/google-sheets";
import { toast } from "@/hooks/use-toast";

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
        <motion.div
          {...containerAnimation}
          className="relative max-w-3xl mx-auto bg-navy rounded-xl border border-gold/25 p-4 md:p-5"
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
            <div className="flex items-center justify-center gap-2 text-primary-foreground relative z-20">
              <CheckCircle2 className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <span className="text-sm font-bold">תודה! נחזור אליכם בהקדם</span>
            </div>
          ) : (
            <div className="relative z-20">
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
                <button
                  type="submit"
                  className="bg-gradient-to-l from-gold to-gold-light text-navy font-bold rounded-full px-6 py-2 text-sm hover:scale-[1.03] transition-transform inline-flex items-center justify-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                  שליחה
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
