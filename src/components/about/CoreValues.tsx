import { motion } from "framer-motion";
// import { Heart, FileText, Shield, TrendingUp } from "lucide-react";

import CareSvg from "@/assets/care.svg";
import ClaritySvg from "@/assets/clarity.svg";
import TrustSvg from "@/assets/trust.svg";
import DriveSvg from "@/assets/drive.svg";

const values = [
  {
    svg: CareSvg,
    title: "Customers Come First",
    description: "We design with empathy to help users succeed.",
  },
  {
    svg: ClaritySvg,
    title: "Smart Data Decisions",
    description: "Accurate data and AI guide practical, reliable actions.",
  },
  {
    svg: TrustSvg,
    title: "Transparent Innovation",
    description: "Clear processes, honest outcomes, no black-box systems.",
  },
  {
    svg: DriveSvg,
    title: "Fast Impact Growth",
    description: "Move quickly, deliver results, and improve continuously.",
  },
];

const CoreValues = () => {
  return (
    <section className="relative gradient-hero-bg pt-4 pb-20 bg-[#470277]/5 text-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            Core Values
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl font-sora md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            What we <span className="text-[#72339F]/80 font-sora">Stand for</span>
          </h1>
        </motion.div>

        <p className="font-sora text-sm text-muted-foreground text-base max-w-4xl mx-auto mb-14">
          Guiding how we build AI-powered intelligence that helps teams connect faster, sell smarter, and grow with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col items-center">
              {/* Circle with icon and label */}
              <div className="mb-4">
  <img
    src={value.svg}
    alt={value.title}
    className="w-32 sm:w-[220px]"
  />
</div>
 
            {/* Text aligned beside the line */}
  <div className="mt-0 sm:mt-[-110px] ml-0 sm:ml-[70px] text-left max-w-[220px]">
    <h3 className="text-sm sm:text-[12px] font-semibold text-foreground mb-1">
      {value.title}
    </h3>
    <p className="text-xs sm:text-[10px] text-muted-foreground text-justify leading-[1.6]">
      {value.description}
    </p>
  </div>

              {/* <h3 className="font-bold text-foreground mt-2 mb-1">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;