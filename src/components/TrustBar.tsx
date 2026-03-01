import bankLeumi from "@/assets/banks/bank-leumi.png";
import bankHapoalim from "@/assets/banks/bank-hapoalim.png";
import bankMizrahi from "@/assets/banks/bank-mizrahi.png";
import bankDiscount from "@/assets/banks/bank-discount.png";
import bankBeinleumi from "@/assets/banks/bank-beinleumi.png";
import bankYahav from "@/assets/banks/bank-yahav.png";
import bankOtsar from "@/assets/banks/bank-otsar.png";
import bankJerusalem from "@/assets/banks/bank-jerusalem.png";
import bankMercantile from "@/assets/banks/bank-mercantile.png";

const banks = [
  { name: "בנק לאומי", logo: bankLeumi },
  { name: "בנק הפועלים", logo: bankHapoalim },
  { name: "בנק מזרחי-טפחות", logo: bankMizrahi },
  { name: "בנק דיסקונט", logo: bankDiscount },
  { name: "בנק הבינלאומי", logo: bankBeinleumi },
  { name: "בנק יהב", logo: bankYahav },
  { name: "אוצר החייל", logo: bankOtsar },
  { name: "בנק ירושלים", logo: bankJerusalem },
  { name: "מרכנתיל", logo: bankMercantile },
];

export default function TrustBar() {
  const doubled = [...banks, ...banks];

  return (
    <section className="bg-card py-12 overflow-hidden">
      <p className="text-center text-navy font-bold text-lg md:text-xl mb-8 px-4">
        מומחיות בניהול משא ומתן מול כל המערכת הבנקאית בישראל
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee items-center gap-16 w-max">
          {doubled.map((bank, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center h-12 w-32 shrink-0 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="h-12 w-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
