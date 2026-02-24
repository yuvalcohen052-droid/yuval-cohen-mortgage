const WHATSAPP_LINK = "https://wa.me/message/77DQ23O73ZPJD1";
const INSTAGRAM_LINK = "https://www.instagram.com/yuval_cohen_m";
const WISECARD_LINK = "https://app.wisecard.co.il/c/RequestWizard/YUVALC";

const quickLinks = [
  { label: "למה יובל?", href: "#why" },
  { label: "השירותים", href: "#services" },
  { label: "התהליך", href: "#process" },
  { label: "המלצות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact-form" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill="currentColor" />
              </svg>
              <span className="text-primary-foreground font-bold text-lg">יובל כהן</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              הבנק דואג לבנק. אני דואג לכם.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">צרו קשר</h4>
            <div className="space-y-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/70 hover:text-gold transition-colors">
                💬 וואטסאפ
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/70 hover:text-gold transition-colors">
                📸 אינסטגרם
              </a>
              <a href={WISECARD_LINK} target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/70 hover:text-gold transition-colors">
                🪪 כרטיס דיגיטלי
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/50 text-sm">
          <span>כל הזכויות שמורות © 2025 יובל כהן - ייעוץ משכנתאות</span>
          <div className="flex gap-4">
            <span>הצהרת נגישות</span>
            <span>תנאי שימוש</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
