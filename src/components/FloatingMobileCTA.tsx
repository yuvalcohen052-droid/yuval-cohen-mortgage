import { useState, useEffect } from "react";

const PHONE = "tel:0506006042";
const WHATSAPP = "https://wa.me/972506006042?text=היי יובל, אשמח לייעוץ משכנתא";

export default function FloatingMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex gap-2 p-3"
      style={{
        backgroundColor: "#0A1628",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <a
        href={PHONE}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-heebo font-bold text-base text-navy-deep"
        style={{ background: "linear-gradient(135deg, #C9A84C 0%, #D4B85C 100%)" }}
        aria-label="התקשרו עכשיו"
      >
        📞 התקשרו עכשיו
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-heebo font-bold text-base text-white bg-whatsapp"
        aria-label="WhatsApp"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
