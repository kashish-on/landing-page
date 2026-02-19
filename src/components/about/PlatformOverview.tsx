import { CheckCircle, Linkedin, Target, MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";

import VerifiedIcon from "@/assets/verified.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import TargetIcon from "@/assets/target.svg";
import ClickIcon from "@/assets/click.svg";


const features = [
  {
    icon: VerifiedIcon,
    title: "Verified Intelligence",
    description:
      "Access decision-maker contact details with AI-verified accuracy. Enrich profiles with complete contact and company data in seconds.",
  },
  {
    icon: LinkedinIcon,
    title: "LinkedIn Enrichment",
    description:
      "Turn any LinkedIn profile into a full contact record including emails, phone numbers, job roles, and firmographic insights.",
  },
  {
    icon: TargetIcon,
    title: "Smart Targeting",
    description:
      "Use advanced filters to find ideal prospects by role, seniority, industry, and company signals — making prospecting precise and efficient.",
  },
  {
    icon: ClickIcon,
    title: "One-Click Enrichment",
    description:
      "Our Chrome Extension enables instant enrichment while browsing LinkedIn. Fast, accurate lead intelligence delivered directly into your workflow.",
  },
];

const PlatformOverview = () => {
  return (
    <section className="pt-4 pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl text-center">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            Platform Overview
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            About <span className="text-[#72339F]/80 font-sora">ObserveNow.AI</span>
          </h1>
        </motion.div>

        <p className="font-sora text-sm text-muted-foreground text-base max-w-2xl mx-auto mb-12">
          ObserveNow.AI by ObserveNow's AI-powered B2B lead enrichment platform designed to transform raw
          LinkedIn data into verified, actionable contact intelligence. With DataGen, businesses can instantly
          enrich profiles with real mobile numbers, work emails, personal emails, job roles, and firmographic
          data — all in one seamless workflow.
        </p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {features.map((feature, index) => {
    const shadowMap = [
  "shadow-[-6px_-6px_16px_rgba(71,2,119,0.15)]",  // 1st
  "shadow-[0_8px_16px_rgba(71,2,119,0.15)]",     // 2nd
  "shadow-[0_-8px_16px_rgba(71,2,119,0.15)]",    // 3rd
  "shadow-[6px_-6px_16px_rgba(71,2,119,0.15)]",  // 4th
];


    return (
      <div
        key={feature.title}
        className={`
          font-dm text-center items-center rounded-xl border border-[#470277]/20 bg-card p-6 min-h-[300px] flex flex-col items-start justify-start text-left
          transition-all duration-300
          ${index % 2 === 1 ? "lg:translate-y-10" : "lg:-translate-y-4"}
          ${shadowMap[index]}
          hover:shadow-[0_20px_40px_rgba(71,2,119,0.35)]
        `}
      >
        <div className="font-dm mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
          <img
            src={feature.icon}
            alt={feature.title}
            className="h-10 w-10 object-contain"
          />
        </div>

        <h3 className="font-semibold items-center justify-center text-foreground mb-2">
          {feature.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground max-w-[240px]">
          {feature.description}
        </p>
      </div>
    );
  })}
</div>


      </div>
    </section>
  );
};

export default PlatformOverview;
