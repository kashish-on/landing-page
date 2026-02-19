import { motion } from "framer-motion";
import jeetImg from "@/assets/jeet.png";
import taniyaImg from "@/assets/taniya.png";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import linkedinIcon from "@/assets/linkedin-icon.png";

const founders = [
  {
    name: "Jeet Sharma",
    role: "Co-founder & CEO",
    img: jeetImg,
    linkedin: "#",
  },
  {
    name: "Taniya Tikoo",
    role: "Co-founder & Editor-in-Chief",
    img: taniyaImg,
    linkedin: "#",
  },
];

const TeamSection = () => {
  return (
    <section className="pt-8 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl text-center">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            Meet The Founders
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl font-sora md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            The Minds behind <span className="text-[#72339F]/80 font-sora">The Magic</span>
          </h1>
        </motion.div>

        <p className="font-sora text-sm text-muted-foreground max-w-2xl mx-auto mb-12">
          We're building the future of digital interactions with a touch of elegance and a lot of heart
        </p>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-20">
          {founders.map((f) => (
            <div
              key={f.name}
              className="font-sora relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#470277]/30 via-[#8F6DB8]/20 to-[#FFFFFF] pt-6 px-6 pb-0 w-[400px] h-[550px] max-w-full mx-auto flex flex-col"
            >
              <div className="flex items-center gap-2 text-white mb-1">
                <h3 className="font-sora font-semibold text-lg text-white">{f.name}</h3>
                <a
    href={f.linkedin}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center"
  >
    <img
      src={linkedinIcon}
      alt="LinkedIn"
      className="w-4 h-4"
    />
  </a>
              </div>

              <p className="text-white/80 text-sm mb-0.5 text-left">{f.role}</p>

              <div className="flex-1 relative">
                <img
                  src={f.img}
                  alt={f.name}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[85%] scale-110 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative max-w-5xl mx-auto rounded-[28px] bg-[#7C4DA6] text-white px-10 py-12 overflow-hidden">
          <motion.div className="absolute -top-4 left-48 w-[110px] h-[110px] bg-white/10 rounded-full"
           animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div className="absolute -top-2 -right-12 w-[110px] h-[110px] bg-white/10 rounded-full" animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

          <motion.div className="absolute -bottom-12 right-1 w-[110px] h-[110px] bg-white/10 rounded-full" animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

          <motion.div className="absolute -bottom-12 -left-9 w-[110px] h-[110px] bg-white/10 rounded-full" animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}/>
          

          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            Smarter Prospecting Starts Here
          </h3>

          <p className="text-white/80 max-w-2xl mx-auto text-sm mb-6">
            Try ObserveNow free and access verified contacts, intelligent filters, and real-time insights in minutes.
          </p>

          {/* <button className="button mx-auto flex items-center justify-center gap-2 whitespace-nowrap bg-white text-[#5C2E88] rounded-full w-[176px] h-[44px] text-xs font-semibold shadow-md hover:scale-105 transition-transform duration-200">
            <a href="https://dashboard.observenow.ai/login" className="flex items-center gap-2">
            GET STARTED 
            <span className="text-base">→</span>
            </a>
          </button> */}
          <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-base font-semibold group shadow-lg"
            >
              <a href="https://dashboard.observenow.ai/login" className="flex items-center gap-2">
              GET STARTED
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
