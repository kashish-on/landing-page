import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

import GridPattern from "@/assets/white-grid.svg";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero-bg bg-[#470277]/5 overflow-hidden pt-16 pb-6 md:pt-24 md:pb-8 text-center">
       {/* Center purple glow */}
<div className="pointer-events-none absolute inset-0 flex items-center justify-center translate-y-48">
  <div
    className="w-[900px] h-[500px] rounded-full blur-[50px] opacity-100"
    style={{
        background:
        "radial-gradient(circle at center, rgba(71,2,119,0.35) 0%, rgba(71,2,119,0.18) 35%, rgba(71,2,119,0.08) 55%, rgba(71,2,119,0) 70%)",
    }}
  />
</div>
    
    {/* White grid pattern overlay */}
<img
  src={GridPattern}
  alt=""
  className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-30"
/>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            Get In Touch
          </span>
        </motion.div>

         {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            We're Here to <span className="text-[#72339F]">Help</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8">
          Have questions about our data, features, or pricing? Our team is here to help you find the right insights, contacts, and strategy to accelerate your pipeline.
        </p>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2"
        >
          <Button size="lg" className="btn-gradient button text-primary-foreground text-base group shadow-violet">
            TALK TO OUR TEAM
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
