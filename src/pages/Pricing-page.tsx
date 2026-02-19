import HeroSection from "@/components/pricing/HeroSection";
import PricingSection from "@/components/pricing/PricingSection";
import ServicesSection from "@/components/pricing/ServicesSection";
import FAQSection from "@/components/pricing/FAQSection";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PricingSection />
      <ServicesSection />
      <FAQSection />
    </div>
  );
};

export default Pricing;
