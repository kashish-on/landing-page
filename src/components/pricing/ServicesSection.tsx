import { FilePlus, Sparkles, BadgeCheck, SlidersHorizontal, Globe, FileText } from "lucide-react";
import { motion } from "framer-motion";

import UniqueIcon from "@/assets/unique.svg";
import AIIcon from "@/assets/AI.svg";
import CXOIcon from "@/assets/CXO.svg";
import FiltersIcon from "@/assets/smart.svg";
import EventsIcon from "@/assets/events.svg";
import EnrichmentIcon from "@/assets/client.svg";

const services = [
  {
    icon: UniqueIcon,
    title: "Unique Add-On",
    description: "Get verified CXO intelligence, ready-to-use industry data packs, and instant insights to supercharge your outreach.",
  },
  {
    icon: AIIcon,
    title: "AI-Powered Recommendations",
    description: "Leverage smart activity-based suggestions, personalized insights, and targeted conversions with AI accuracy.",
  },
  {
    icon: CXOIcon,
    title: "Verified CXO Contacts",
    description: "Access verified names, emails, and phone numbers, stay updated on job changes, and connect directly via LinkedIn.",
  },
  {
    icon: FiltersIcon,
    title: "Smart Filters & Integration",
    description: "Target by role, industry, or company with ease, find qualified leads faster, and integrate seamlessly into your workflow.",
  },
  {
    icon: EventsIcon,
    title: "Events Network",
    description: "Tap into a curated network of industry events and connect with decision-makers at the right time.",
  },
  {
    icon: EnrichmentIcon,
    title: "Client Account List Enrichment",
    description: "Enhance your account lists with verified CXO details, job updates, and enriched insights for stronger engagement.",
  },
];

const ServicesSection = () => {
  return (
    <section className="pt-3 pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-3 mt-14"
        >
          <span className="section-badge border border-[#470277]">
            Our Services
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 whitespace-nowrap">
            Examining <span className="text-[#72339F]/80">Essential Services</span>
          </h1>
        </motion.div>

        <p className="font-sora text-muted-foreground text-base max-w-3xl mx-auto mb-14">
          CRM management is comprehensive contact management, allowing businesses to centralize
          and organize customer information for easy access.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="font-dm rounded-xl border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light-violet">
                <img
            src={service.icon}
            alt={service.title}
            className="h-12 w-12 object-contain"
          />
                {/* <service.icon className="h-7 w-7 text-brand-violet" /> */}
              </div>
              <h3 className="font-dm font-bold text-foreground mb-2">{service.title}</h3>
              <p className="font-dm text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
