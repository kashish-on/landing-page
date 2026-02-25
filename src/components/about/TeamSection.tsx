import { motion } from "framer-motion"; 
import jeetImg from "@/assets/jeet.jpeg";
import taniyaImg from "@/assets/taniya.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import linkedinIcon from "@/assets/linkedin.png";

const founders = [
  {
    name: "Jeet Sharma",
    role: "Co-founder & CEO",
    handle: "@jeetsharma",
    img: jeetImg,
    linkedin: "https://www.linkedin.com/in/jeetsharma6/",
    twitter: "https://x.com/ObservenowMedia",
    bio: "An IIT Delhi alumnus, He looks after the Corporate Strategies & Growth of the organization. His area of expertise lies in corporate partnerships across functions. Previously he has worked with Leading Media Organizations and has Built and Launched multiple media verticals.",
  },
  {
    name: "Taniya Tikoo",
    role: "Co-founder & Editor-in-Chief",
    handle: "@taniyatikoo",
    img: taniyaImg,
    linkedin: "https://www.linkedin.com/in/taniya-tikoo-04651b129/",
    twitter: "https://x.com/ObservenowMedia",
    bio: "She studied Masters in Broadcast Journalism from BCU, UK and is responsible for Editorial Initiatives, Branding & Marketing for the organizations. Previously worked as Journalist for some Prominent Media Organizations.",
  },
];

const TeamSection = () => {
  return (
    <section className="pt-10 pb-20 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col gap-8 mb-16">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl bg-[#470277]/5 p-5 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row gap-5 items-stretch">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-xl"
                  />
                </div>

                {/* White Bio Box */}
                <div className="flex-1 bg-white/80 rounded-xl p-6 flex flex-col justify-between">
                  {/* Bio */}
                  <p className="font-sora text-sm md:text-base text-foreground/80 leading-relaxed mb-5">
                    {f.bio}
                  </p>

                  {/* Handle + Social INSIDE box */}
                  <div className="flex items-center justify-between pt-4 border-t border-black/10">
                    <div className="bg-[#470277]/10 rounded-full px-4 py-1.5 text-xs font-medium text-[#470277]">
                      {f.handle}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* X */}
                      <a
                        href={f.twitter}
                        className="w-9 h-9 rounded-lg bg-black flex items-center justify-center hover:opacity-80 transition"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                        </svg>
                      </a>

                      {/* LinkedIn */}
                      <a
                        href={f.linkedin}
                        className="w-9 h-9 rounded-lg bg-[#0077B5] flex items-center justify-center hover:opacity-90 transition"
                      >
                        {/* <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                        </svg> */}
                        <img
      src={linkedinIcon}
      alt="LinkedIn"
      className="w-5 h-5"
    />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
          

           <h3 className="font-sora text-2xl text-center md:text-3xl font-semibold mb-2">
            Smarter Prospecting Starts Here
           </h3>

           <p className="text-white/80 max-w-2xl text-center mx-auto text-sm mb-6">
             Try ObserveNow free and access verified contacts, intelligent filters, and real-time insights in minutes.
           </p>
          <div className="flex justify-center">
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

      </div>
    </section>
  );
};

export default TeamSection;