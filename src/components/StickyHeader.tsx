import { useState, useEffect } from "react";
import yuvalLogo from "@/assets/yuval-logo.png";

const WHATSAPP_LINK = "https://wa.me/message/77DQ23O73ZPJD1";

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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={yuvalLogo} alt="יובל כהן לוגו" className="h-10 w-auto" />
          <span className="text-primary-foreground font-bold text-lg">יובל כהן | משכנתאות</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+972000000000"
            className="border border-primary-foreground/60 text-primary-foreground text-sm px-4 py-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="תפריט"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-navy z-40 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-4 left-4 text-primary-foreground p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="סגור תפריט"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-primary-foreground text-2xl font-bold"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy font-bold px-8 py-3 rounded-full text-lg"
          >
            💬 וואטסאפ
          </a>
        </div>
      )}
    </header>
  );
}
