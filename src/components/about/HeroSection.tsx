import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import GridPattern from "@/assets/white-grid.svg";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero-bg bg-[#470277]/5 pt-10 pb-16 md:pt-24 md:pb-15 text-center overflow-hidden">
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
      {/* Decorative gradient bar at top */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 gradient-brand" /> */}
      
      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-3 mt-16"
        >
          <span className="section-badge border border-[#470277]">
            About Us
          </span>
        </motion.div>

         {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Where Data Meets <span className="text-[#72339F]/80 font-sora">Opportunity</span>
          </h1>
        </motion.div>

        <p className="font-sora text-sm text-muted-foreground text-base md:text-lg mb-8 max-w-3xl mx-auto">
          ObserveNow.ai helps B2B teams find high-intent prospects, access verified contacts, and act on
          real-time insights to drive faster, more predictable revenue.
        </p>

         {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2"
        >
          <Button size="lg" className="btn-gradient button text-primary-foreground text-base group shadow-violet">
            <a href="https://dashboard.observenow.ai/signup" className="flex items-center gap-2">
            START YOUR FREE TRIAL
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
