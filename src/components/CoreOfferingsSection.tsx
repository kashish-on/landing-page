import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CoreOfferingsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <span className="section-badge">Core Offerings</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          Your <span className="violet-gradient-text italic">Next-Gen Sales</span>
          <br />
          Intelligence Engine
        </motion.h2>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative max-w-5xl mx-auto bg-[hsl(var(--brand-violet))] rounded-3xl p-8 md:p-12 overflow-hidden"
        >

{/* Animated Chevrons Background */}
<div
  className="absolute inset-0 flex items-center overflow-hidden opacity-20"
  style={{
    maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
  }}
>
  <motion.div
    className="flex items-center"
    animate={{ x: ["-50%", "0%"] }}
    transition={{
      duration: 50,       // slow, premium
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {/* First batch */}
    <div className="flex items-center">
      {[...Array(50)].map((_, i) => (
        <ChevronRight
          key={`a-${i}`}
          className="w-64 h-64 text-white/30 -ml-40"
          strokeWidth={2}
        />
      ))}
    </div>

    {/* Second batch (duplicate for seamless loop) */}
    <div className="flex items-center">
      {[...Array(50)].map((_, i) => (
        <ChevronRight
          key={`b-${i}`}
          className="w-64 h-64 text-white/30 -ml-40"
          strokeWidth={2}
        />
      ))}
    </div>
  </motion.div>
</div>




          <div className="relative z-10 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-8">
              Find Verified Leads - Establish connect - Secure Business
            </h3>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-base font-semibold group shadow-lg"
            >
              GET STARTED
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreOfferingsSection;
