export default function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: "#060E1A" }}>
      <div className="container mx-auto px-4 text-center">
        <p className="font-heebo font-bold text-base text-white mb-2">
          יובל כהן — יועץ משכנתאות ופיננסים
        </p>
        <p className="font-assistant text-sm text-cool-gray mb-3">
          📞 050-600-6042 · 📍 אשקלון
        </p>
        <p className="font-assistant text-xs" style={{ color: "#4A5568" }}>
          © {new Date().getFullYear()} כל הזכויות שמורות
        </p>
      </div>
    </footer>
  );
}
