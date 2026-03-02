// import { Rocket, Zap, Users, Eye, Link2, PenTool } from "lucide-react";
import { motion } from "framer-motion";

import missionIcon from "@/assets/mission.svg";        
import visionIcon from "@/assets/vision.svg";          
import enrichmentIcon from "@/assets/fast.svg";  
import workflowIcon from "@/assets/workflow.svg";      
import usersIcon from "@/assets/users-about.svg";

import missionBg from "@/assets/mission-bg.svg";  
import visionBg from "@/assets/vision-bg.svg";     
import growthBg from "@/assets/growth-bg.svg";     

const cards = [
  {
    type: "mission",
    title: "Our Mission",
    desc: "To deliver AI-powered, verified contact intelligence that removes manual research and helps sales and marketing teams connect with the right people faster and more effectively.",
    bg: "bg-white",
    col: "lg:col-span-2",
    icon: missionIcon,
    bgArt: missionBg, 
  },
  {
    type: "feature",
    title: "Fast enrichment",
    desc: "Instant data capture within your workflow.",
    bg: "bg-[#470277]/10",
    col: "lg:col-span-1",
    icon: enrichmentIcon,
  },
  {
    type: "stat",
    title: "Fast Growth",
    value: "250%",
    bg: "bg-[#0B87BA]/10",
    col: "lg:col-span-1",
     bgArt: growthBg,
  },
  {
    type: "stat",
    title: "Global Users",
    value: "10M+",
    bg: "bg-[#0B87BA]/10",
    col: "lg:col-span-1",
    icon: usersIcon,
  },
  {
    type: "vision",
    title: "Our Vision",
    desc: "To make real-time B2B intelligence effortless — where finding accurate data and reaching decision-makers happens instantly, enabling smarter growth for every business.",
    bg: "bg-white",
    col: "lg:col-span-2",
    icon: visionIcon,
    bgArt: visionBg
  },
  {
    type: "feature",
    title: "Seamless Workflow",
    desc: "Chrome Extension + smooth integrations.",
    bg: "bg-[#470277]/10",
    col: "lg:col-span-1",
    icon: workflowIcon
  },
];


const MissionVision = () => {
  return (
    <section className="pt-4 pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            Our Purpose
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
            Our <span className="text-[#72339F]/80 font-sora">Mission & Vision</span>
          </h1>
        </motion.div>

        <p className="font-sora text-sm text-muted-foreground md:text-base max-w-4xl mx-auto mb-12">
          Guiding how we build AI-powered intelligence that helps teams connect faster, sell smarter, and grow with confidence.
          </p>

          {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className={`${card.bg} ${card.col} rounded-[18px] p-6 border border-border shadow-sm hover:shadow-lg transition-all relative overflow-hidden ${card.type === "mission" || card.type === "vision" ? "lg:col-span-2 min-h-[220px] shadow-md w-full max-w-[300px] sm:max-w-none mx-auto sm:mx-0" : "lg:col-span-1 w-full max-w-[300px] mx-auto min-h-[220px] shadow-md"}`}
            >
              {card.bgArt && (
  <img
    src={card.bgArt}
    alt=""
    className={`
      pointer-events-none absolute opacity-70
      ${card.type === "mission" ? "right-[-60px] top-[-60px] w-60" : ""}
      ${card.type === "vision" ? "right-[-50px] bottom-[-50px] w-60" : ""}
      ${card.type === "stat" && card.title === "Fast Growth" ? "right-[-5px] bottom-[-30px] w-48" : ""}
    `}
  />
)}
              {/* Decorative faded icon background (optional) */}
              {(card.type === "mission" || card.type === "vision" || card.value === "10M+") && card.icon && (
                <img
                  src={card.icon}
                  alt={card.title}
                  className="absolute top-5 left-5 w-12 h-12"
                />
              )}

              {card.type === "mission" ? (
                <div className="text-left mt-16 max-w-[65%]">
                  <h3 className="text-2xl font-sora font-bold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ) : card.type === "vision" ? (
                <div className="text-left mt-16 max-w-[70%]">
                  <h3 className="text-2xl font-sora font-bold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-left text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ) : card.type === "feature" ? (
                <div className="h-full flex flex-col justify-center text-center">
                  <div className="flex justify-center mb-3">
                    {card.icon && (
                      <img src={card.icon} alt={card.title} className="w-12 h-12" />
                    )}
                  </div>
                  <h4 className="font-sora font-semibold text-foreground mb-2">{card.title}</h4>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </div>
              ) : (

(() => {
    const isBottomStat = card.value === "10M+";

    return (
      <div
        className={`h-full flex flex-col items-start text-left ${
          isBottomStat ? "justify-end pb-5" : "justify-start pt-1"
        }`}
      >
        {!isBottomStat && (
          <span className="text-sm font-sora text-muted-foreground mb-2">
            {card.title}
          </span>
        )}

        <div className="text-2xl font-sora md:text-3xl font-extrabold text-foreground leading-none mb-1">
          {card.value}
        </div>

        {/* {card.desc && (
          <span className="text-sm text-muted-foreground">
            {card.desc}
          </span>
        )} */}
        {/* Bottom stat (Global Users) */}
      {isBottomStat && (
        <span className="text-sm text-muted-foreground">
          {card.title}
        </span>
      )}
      </div>
    );
  })()
              )}
             

            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default MissionVision;
