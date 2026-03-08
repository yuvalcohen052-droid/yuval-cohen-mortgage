import { useState, useEffect } from "react";
import yuvalLogo from "@/assets/yuval-logo-new.png";

const WHATSAPP_LINK = "https://wa.me/972506006042";

const navLinks = [
  { label: "למה יובל?", href: "#why" },
  { label: "תהליך הליווי", href: "#process" },
  { label: "המלצות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact-form" },
];

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white shadow-md border-gold/20"
          : "bg-white border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={yuvalLogo} alt="יובל כהן - ייעוץ משכנתאות" className="h-12 w-auto object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-navy font-bold text-base">יובל כהן</span>
            <span className="text-muted-foreground text-xs">יועץ משכנתאות ופיננסים</span>
          </div>
        </div>

        <nav aria-label="ניווט ראשי" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-foreground/80 hover:text-navy text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+972506006042"
            aria-label="חייגו עכשיו ליובל כהן"
            className="border border-navy/60 text-navy text-sm px-4 py-2 rounded-full hover:bg-navy/10 transition-colors"
          >
            חייגו עכשיו
          </a>
          <button
            onClick={() => scrollTo("#contact-form")}
            className="bg-gold text-navy font-bold text-sm px-5 py-2 rounded-full hover:scale-103 transition-transform"
          >
            הגשה דיגיטלית
          </button>
        </div>

        <button
          className="md:hidden text-navy p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "סגור תפריט ניווט" : "פתח תפריט ניווט"}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="תפריט ניווט נייד" className="md:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col">
          {/* Top bar with close button */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <img src={yuvalLogo} alt="יובל כהן" className="h-12 w-auto object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-navy font-bold text-base">יובל כהן</span>
                <span className="text-muted-foreground text-xs">יועץ משכנתאות ופיננסים</span>
              </div>
            </div>
            <button
              className="text-navy p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="סגור תפריט ניווט"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col px-6 pt-8 gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-navy text-xl font-semibold text-right hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA button */}
          <div className="mt-auto px-6 pb-10 flex flex-col gap-4">
            <a
              href="tel:+972527272380"
              className="bg-gradient-to-r from-gold to-gold-light text-navy font-bold px-8 py-3.5 rounded-full text-lg text-center shadow-md"
            >
              📞 שיחת ייעוץ חינם
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
