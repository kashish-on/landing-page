// src/components/LogoSection.tsx
import google from "@/assets/google.png";
import microsoft from "@/assets/microsoft.png";
import ibm from "@/assets/ibm.png";
import ntt from "@/assets/ntt.png";
import { Star } from "lucide-react";

const logos = [
  { src: google, alt: "Google" },
  { src: microsoft, alt: "Microsoft" },
  { src: ibm, alt: "IBM" },
  { src: ntt, alt: "NTT Data" },
  { src: google, alt: "Google" },
];

const LogoSection = () => {
  return (
    <section className="relative z-20 -mt-10">
      <div className="w-full">
        <div className="mx-auto max-w-[1400px] bg-white/70 backdrop-blur-md py-7 px-8">

          {/* Trusted Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <span className="section-badge shadow-lg">
               Trusted by 500+ Fortune companies all over the world 
            </span>
          </div>

          {/* Logos */}
          <div className="flex items-center justify-between w-full px-6 md:px-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 object-contain opacity-80 hover:grayscale-0 hover:opacity-100 transition"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogoSection;
