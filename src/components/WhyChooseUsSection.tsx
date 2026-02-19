import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import FeatureLeftImg from "@/assets/whychooseus.svg";
import { NavLink } from "./NavLink";

const features = [
  "AI-driven Contact + Account Intelligence",
  "India + APAC strong, global expansion",
  "Data + Events Network + Client Account List Enrichment",
  "Flexible, volume-based, competitive",
  "Trusted Growth Partner — Events + Data + AI",
  "Event-Driven Market Intel ObserveNow",
];

const marqueeItems = [
  "EXPERTISE",
  "AI POWERED SALES INTELLIGENCE",
  "CXO DATA PACKS",
  "REVENUE-DRIVING INTELLIGENCE",
  "LEAD-TO-REVENUE",
];

const WhyChooseUsSection = () => {
  return (
    <section className="pt-16 pb-0 bg-[#470277]/5 overflow-hidden">
       <div className="container mx-auto px-4">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <span className="section-badge border border-[#470277]">Why Choose Us</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Box */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div
              className="
                aspect-[4/3] 
                rounded-2xl 
                bg-white 
                border-2 
                border-[#72339F]/40 
                shadow-[0_12px_40px_rgba(114,51,159,0.15)]
                p-6
                flex 
                items-center 
                justify-center
                duration-300 
    ease-out
    hover:-translate-y-2
    hover:shadow-[0_12px_30px_rgba(114,51,159,0.12)]
    hover:border-[#72339F]
              "
            >
              {/* Replace this div with your actual image */}
              {/* <div className="w-full h-full rounded-xl bg-gray-100" /> */}
              <img 
  src={FeatureLeftImg}
  alt="Why Choose Us"
  className="w-full h-full object-contain rounded-xl"
/>

            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <h2 className="font-sora text-3xl md:text-4xl font-bold mb-2">
              Trusted Partner in
            </h2>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#72339F]/80 mb-6">
              Data-Driven Growth
            </h2>
            <p className="font-sora text-muted-foreground mb-8">
              With advanced data extraction, verified lead generation, and a track record of powering faster conversions, helps businesses unlock real opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#72339F] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          <NavLink to="/pricing">
            <Button 
              size="lg" 
              className="bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all"
            >
              EXPLORE NOW
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </NavLink>
          </motion.div>
        </div>
      </div>
    

      {/* Marquee */}
      <div className="mt-16 py-4 bg-[#0B87BA]/10 overflow-hidden">
        <motion.div 
          className="whitespace-nowrap flex"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="mx-8 text-sm font-semibold text-foreground flex items-center gap-4">
              <span className="text-[#72339F]">✦</span>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
};

export default WhyChooseUsSection;

