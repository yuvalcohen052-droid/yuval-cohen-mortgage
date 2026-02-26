import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ComparisonSection from "@/components/ComparisonSection";
import WhyYuval from "@/components/WhyYuval";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CalculatorWarning from "@/components/CalculatorWarning";
import LeadFormSection from "@/components/LeadFormSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-heebo">
      <StickyHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <ComparisonSection />
        <WhyYuval />
        <section id="services">
          <ServicesSection />
        </section>
        <ProcessSection />
        <TestimonialsSection />
        <CalculatorWarning />
        <LeadFormSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
