import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import VideoSection from "@/components/VideoSection";
import CoreOfferingsSection from "@/components/CoreOfferingsSection";
import FeaturesSection from "@/components/FeaturesSection";
import DataToRevenueSection from "@/components/DataToRevenueSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PricingSection from "@/components/PricingSection";
import CustomerStoriesSection from "@/components/CustomerStoriesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full">
          <HeroSection />
          <LogoSection />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <VideoSection />
          <CoreOfferingsSection />
          <FeaturesSection />
          <DataToRevenueSection />
          <HowItWorksSection />
          <AnalyticsSection />
        </div>
          <WhyChooseUsSection />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PricingSection />
          <CustomerStoriesSection />
          <IntegrationsSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
