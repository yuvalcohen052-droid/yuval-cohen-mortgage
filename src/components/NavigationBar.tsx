import { useState, useEffect } from "react";

const PHONE = "tel:0506006042";

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.querySelector("#final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-lg"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "rgba(10,22,40,0.95)" } : {}}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-heebo font-bold text-xl text-white">יובל כהן</span>
          <span className="font-assistant text-xs text-cool-gray hidden sm:block">
            יועץ משכנתאות ופיננסים
          </span>
        </div>

        {/* Desktop CTA */}
        <button
          onClick={scrollToForm}
          className="hidden md:block font-heebo font-bold text-sm px-6 py-2.5 rounded-md text-navy-deep transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #D4B85C 100%)",
          }}
          aria-label="לשיחת ייעוץ חינם"
        >
          לשיחת ייעוץ חינם
        </button>

        {/* Mobile phone icon */}
        <a
          href={PHONE}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-navy-deep"
          style={{ background: "linear-gradient(135deg, #C9A84C 0%, #D4B85C 100%)" }}
          aria-label="התקשרו עכשיו"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
