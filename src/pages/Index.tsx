
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ContactSection from "@/components/sections/ContactSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <ReviewsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
