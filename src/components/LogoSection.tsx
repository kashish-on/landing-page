// src/components/LogoSection.tsx
import { motion } from "framer-motion";
// import useIsMobile from "@/hooks/use-mobile";
import google from "@/assets/google.png";
import microsoft from "@/assets/microsoft.png";
import ibm from "@/assets/ibm.png";
import ntt from "@/assets/ntt-logo.png";
import crayon from "@/assets/crayon.png";
// import { Star } from "lucide-react";

const logos = [
  { src: google, alt: "Google" },
  { src: microsoft, alt: "Microsoft" },
  { src: ibm, alt: "IBM" },
  { src: ntt, alt: "NTT Data" },
  { src: crayon, alt: "Crayon" },
];

const LogoSection = () => {
  // const isMobile = useIsMobile();
  // duplicate logos for marquee animation
  const duplicated = [...logos, ...logos, ...logos];

  return (
    <section className="relative z-20 -mt-10 w-full">
      <div className="w-full">
        <div className="w-full bg-white/70 backdrop-blur-md py-7 px-4 sm:px-8">

          {/* Trusted Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-full flex justify-center">
            <span className="section-badge border border-[#470277] shadow-lg text-xs md:text-sm px-2 py-0.5 max-w-[240px] md:max-w-[300px] text-center">
               Trusted by 500+ Fortune companies all over the world 
            </span>
          </div>

          {/* Logos */}
          <div className="mt-6 overflow-hidden">
            <motion.div
              className="flex items-center gap-8"
              animate={{ x: [0, -500] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear", repeatType: "loop" }}
            >
              {duplicated.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-10 object-contain opacity-80 hover:grayscale-0 hover:opacity-100 transition"
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogoSection;
