import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import QuickContactStrip from "@/components/QuickContactStrip";
import TrustBar from "@/components/TrustBar";
import WhyYuval from "@/components/WhyYuval";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import FAQSection from "@/components/FAQSection";
import LeadFormSection from "@/components/LeadFormSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-heebo overflow-x-hidden">
      <a href="#main-content" className="skip-to-content">
        דלג לתוכן הראשי
      </a>
      <StickyHeader />
      <main id="main-content">
        <HeroSection />
        <QuickContactStrip />
        <TrustBar />
        <WhyYuval />
        <section id="services">
          <ServicesSection />
        </section>
        <ProcessSection />
        <GoogleReviewsSection />
        <FAQSection />
        <LeadFormSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
