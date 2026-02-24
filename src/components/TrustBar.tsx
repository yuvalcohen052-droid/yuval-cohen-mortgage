const banks = [
  "בנק לאומי",
  "בנק הפועלים",
  "בנק מזרחי-טפחות",
  "בנק דיסקונט",
  "בנק הבינלאומי",
  "בנק יהב",
];

export default function TrustBar() {
  const doubled = [...banks, ...banks];

  return (
    <section className="bg-card py-12 overflow-hidden">
      <p className="text-center text-navy font-bold text-lg md:text-xl mb-8 px-4">
        מומחיות בניהול משא ומתן מול כל המערכת הבנקאית בישראל
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-8 w-max">
          {doubled.map((bank, i) => (
            <span
              key={i}
              className="inline-block px-6 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium whitespace-nowrap opacity-50"
            >
              {bank}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
