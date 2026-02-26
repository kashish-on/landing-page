import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import Step1 from "@/assets/step-1.png"; 
import Step2 from "@/assets/step-2.png"; 
import Step3 from "@/assets/step-3.png"; 

import StepLine from "@/assets/step-line.png"; 

import PuzzleDeco from "@/assets/puzzle.png";

import FeatureLeftImg from "@/assets/howitworks.png";

const steps = [
  {
    icon: Step1,
    title: "Install",
    desc: "Add ObserveNow.AI from the Chrome Store in seconds.",
  },
  {
    icon: Step2,
    title: "Browse",
    desc: "Visit LinkedIn profiles or company websites as usual.",
  },
  {
    icon: Step3,
    title: "Capture",
    desc: "Get real-time data, signals, and save leads instantly.",
  },
];



const HowItWorksSection = () => {
  return (
    <section id="howitworks" className="pt-16 pb-10 bg-[#470277]/5 relative overflow-hidden">
       <div className="container mx-auto px-4">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <span className="section-badge border border-[#470277]">Work Seamlessly</span>
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
                p-4 md:p-5
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
  alt="Work Seamlessly"
  className="w-full h-full object-cover rounded-xl"
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
              Boost Prospecting with a
            </h2>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#72339F]/80 mb-6">
              Chrome Extension
            </h2>
            <p className="font-sora text-muted-foreground mb-8">
              ObserveNow.AI runs as a lightweight Chrome Extension that supercharges prospecting directly on Linkedin and other sites websites in real time.
            </p>

            <div className="relative isolate space-y-6 mb-10">

             <img
    src={StepLine}
    alt=""
    className="absolute left-[18px] top-[16px] w-[1px] h-[160px] z-0 pointer-events-none"
  />

  {steps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative flex items-start gap-4 z-10"
    >
      {/* Number Icon */}
      <img
        src={step.icon}
        alt={step.title}
        className="w-10 h-10 flex-shrink-0"
      />

      {/* Text */}
      <div>
        <h4 className="font-semibold text-lg">{step.title}</h4>
        <p className="text-muted-foreground text-sm">
          {step.desc}
        </p>
      </div>
    </motion.div>
  ))}
</div>


            <Button 
              size="lg" 
              className="btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet"
            >
              <a href="https://chromewebstore.google.com/detail/observenowai-linkedin-pro/pkoknghbccdigldobkjndnbjoagajahi" className="flex items-center gap-2">
              ADD TO CHROME – IT’S FREE!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom-right decorative puzzle */}
<img
  src={PuzzleDeco}
  alt=""
  className="absolute -bottom-14 right-0 w-[120px] sm:w-[240px] opacity-100"
/>

    
      
    </section>
  );
};

export default HowItWorksSection

