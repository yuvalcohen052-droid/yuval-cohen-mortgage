import { useState, useMemo, useCallback } from "react";
import { Calculator } from "lucide-react";

const formatCurrency = (value: number): string => {
  return "₪ " + Math.round(value).toLocaleString("he-IL");
};

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState(1_000_000);
  const [years, setYears] = useState(25);
  const [interestRate, setInterestRate] = useState(4.5);

  const results = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = years * 12;

    if (monthlyRate === 0) {
      const monthlyPayment = principal / totalMonths;
      return {
        monthlyPayment,
        totalPayment: principal,
        totalInterest: 0,
      };
    }

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalPayment = monthlyPayment * totalMonths;
    const totalInterest = totalPayment - principal;

    return { monthlyPayment, totalPayment, totalInterest };
  }, [principal, years, interestRate]);

  const handleWhatsApp = useCallback(() => {
    const message = `היי יובל, ביצעתי חישוב במחשבון המשכנתא באתר:\nסכום משכנתא: ${principal.toLocaleString("he-IL")} ש״ח\nתקופה: ${years} שנים\nריבית: ${interestRate}%\nהחזר חודשי משוער: ${Math.round(results.monthlyPayment).toLocaleString("he-IL")} ש״ח.\nאשמח לפרטים נוספים!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/972506006042?text=${encoded}`, "_blank");
  }, [principal, years, interestRate, results.monthlyPayment]);

  return (
    <section
      className="py-16 md:py-20 bg-[hsl(var(--slate-bg))]"
      aria-label="מחשבון משכנתא"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--gold))] text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            <span>מחשבון משכנתא</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[hsl(var(--navy))]">
            חשב את ההחזר החודשי שלך
          </h2>
          <p className="text-gray-500 mt-2 text-base">
            הזן את פרטי המשכנתא וקבל תוצאות בזמן אמת
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <div className="space-y-8">
            {/* Loan Amount */}
            <SliderInput
              label="סכום משכנתא"
              value={principal}
              onChange={setPrincipal}
              min={100_000}
              max={5_000_000}
              step={10_000}
              suffix="₪"
              formatValue={(v) => v.toLocaleString("he-IL")}
            />

            {/* Years */}
            <SliderInput
              label="תקופה בשנים"
              value={years}
              onChange={setYears}
              min={4}
              max={30}
              step={1}
              suffix="שנים"
            />

            {/* Interest Rate */}
            <SliderInput
              label="ריבית שנתית"
              value={interestRate}
              onChange={setInterestRate}
              min={1}
              max={10}
              step={0.1}
              suffix="%"
              isDecimal
            />
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8" />

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ResultCard
              label="החזר חודשי משוער"
              value={formatCurrency(results.monthlyPayment)}
              highlight
            />
            <ResultCard
              label="סה״כ תשלום"
              value={formatCurrency(results.totalPayment)}
            />
            <ResultCard
              label="סה״כ ריבית"
              value={formatCurrency(results.totalInterest)}
            />
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="mt-8 w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-lg py-4 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            aria-label="שלח תוצאות להתייעצות בוואטסאפ"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>שלח תוצאות להתייעצות בוואטסאפ</span>
          </button>

          {/* Disclaimer */}
          <p className="mt-4 text-center text-xs text-gray-500 leading-relaxed">
            הנתונים במחשבון הינם להערכה בלבד ואינם מהווים התחייבות לקבלת משכנתא או לתנאים המוצגים. אין לראות בתוצאות המחשבון המלצה או ייעוץ פיננסי.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ─── Slider + Input Combo ─── */

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix: string;
  formatValue?: (v: number) => string;
  isDecimal?: boolean;
}

const SliderInput = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  formatValue,
  isDecimal,
}: SliderInputProps) => {
  const percent = ((value - min) / (max - min)) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    if (raw === "") return;
    const parsed = isDecimal ? parseFloat(raw) : parseInt(raw, 10);
    if (!isNaN(parsed)) {
      onChange(Math.min(max, Math.max(min, parsed)));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-semibold text-[hsl(var(--navy))]">
          {label}
        </label>
        <div className="flex items-center gap-1.5">
          <input
            type="text"
            inputMode={isDecimal ? "decimal" : "numeric"}
            value={formatValue ? formatValue(value) : value}
            onChange={handleInputChange}
            className="w-28 text-left text-sm font-bold text-[hsl(var(--navy))] bg-[hsl(var(--slate-bg))] border border-gray-200 rounded-lg px-3 py-1.5 focus:border-[hsl(var(--gold))]"
            aria-label={label}
          />
          <span className="text-xs text-gray-500 font-medium">{suffix}</span>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) =>
          onChange(isDecimal ? parseFloat(e.target.value) : parseInt(e.target.value, 10))
        }
        className="slider-range w-full"
        style={
          {
            "--percent": `${percent}%`,
          } as React.CSSProperties
        }
        aria-label={label}
      />
      <div className="flex justify-between text-[11px] text-gray-500 mt-1">
        <span>
          {formatValue ? formatValue(min) : min} {suffix}
        </span>
        <span>
          {formatValue ? formatValue(max) : max} {suffix}
        </span>
      </div>
    </div>
  );
};

/* ─── Result Card ─── */

interface ResultCardProps {
  label: string;
  value: string;
  highlight?: boolean;
}

const ResultCard = ({ label, value, highlight }: ResultCardProps) => (
  <div
    className={`rounded-xl p-4 text-center transition-all ${
      highlight
        ? "bg-[hsl(var(--navy))] text-white shadow-lg scale-[1.02]"
        : "bg-[hsl(var(--slate-bg))] text-[hsl(var(--navy))]"
    }`}
  >
    <p className={`text-xs mb-1 ${highlight ? "text-gray-300" : "text-gray-500"}`}>
      {label}
    </p>
    <p className="text-xl sm:text-2xl font-extrabold">{value}</p>
  </div>
);

export default MortgageCalculator;
