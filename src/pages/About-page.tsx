import HeroSection from "@/components/about/HeroSection";
import PlatformOverview from "@/components/about/PlatformOverview";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import TeamSection from "@/components/about/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PlatformOverview />
      <MissionVision />
      <CoreValues />
      <TeamSection />
    </div>
  );
};

export default About;
