import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

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
            cookie
          </span>
        </motion.div>

         {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 mt-12">
            Cookie <span className="text-[#72339F]/80 font-sora">Policy</span>
          </h1>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;