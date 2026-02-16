import { motion } from "framer-motion";
import jeetImg from "@/assets/jeet.png";
import taniyaImg from "@/assets/taniya.png";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          The Minds behind <span className="text-[#72339F]">The Magic</span>
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          We're building the future of digital interactions with a touch of elegance and a lot of heart
        </p>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-20">
          {founders.map((f) => (
            <div
              key={f.name}
              className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#470277]/20 via-[#8F6DB8]/20 to-[#FFFFFF] pt-6 px-6 pb-0 w-[400px] h-[550px] max-w-full mx-auto flex flex-col"
            >
              <div className="flex items-center gap-2 text-white mb-1">
                <h3 className="font-semibold text-lg text-white">{f.name}</h3>
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
          <div className="absolute -top-4 left-48 w-[110px] h-[110px] bg-white/10 rounded-full" />
          <div className="absolute -top-2 -right-12 w-[110px] h-[110px] bg-white/10 rounded-full" />
          <div className="absolute -bottom-12 right-1 w-[110px] h-[110px] bg-white/10 rounded-full" />
          <div className="absolute -bottom-12 -left-9 w-[110px] h-[110px] bg-white/10 rounded-full" />
          

          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            Smarter Prospecting Starts Here
          </h3>

          <p className="text-white/80 max-w-2xl mx-auto text-sm mb-6">
            Try ObserveNow free and access verified contacts, intelligent filters, and real-time insights in minutes.
          </p>

          <button className="mx-auto flex items-center justify-center gap-2 bg-white text-[#5C2E88] rounded-full w-[176px] h-[44px] text-xs font-semibold shadow-md hover:scale-105 transition-transform duration-200">
            GET STARTED 
            <span className="text-base">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
