import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import PainPoints from "@/components/PainPoints";
import SolutionTimeline from "@/components/SolutionTimeline";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingMobileCTA from "@/components/FloatingMobileCTA";

const Index = () => {
  return (
    <div>
      <NavigationBar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <PainPoints />
        <SolutionTimeline />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingMobileCTA />
    </div>
  );
};

export default Index;
