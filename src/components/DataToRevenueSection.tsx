import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

// import CountUp from "react-countup";

import IconUsers from "@/assets/user.svg";

// FOUNDATION
import FoundationIcon from "@/assets/foundation.png";
import FoundationShape from "@/assets/shape1.png";
import FoundationLine from "@/assets/line.png";
import Fline from "@/assets/line1.png";

// RECOGNITION
import RecognitionIcon from "@/assets/recognition.png";
import RecognitionShape from "@/assets/shape2.png";
import RecognitionLine from "@/assets/line.png";
import Rline from "@/assets/line2.png";

// COMMUNITY
import CommunityIcon from "@/assets/community.png";
import CommunityShape from "@/assets/shape3.png";
import CommunityLine from "@/assets/line.png";
import Cline from "@/assets/line3.png";

// REPUTATION
import ReputationIcon from "@/assets/reputation.png";
import ReputationShape from "@/assets/shape4.png";
import ReputationLine from "@/assets/line.png";
import Repline from "@/assets/line4.png";

// LEAD INTELLIGENCE
import LeadIcon from "@/assets/lead.png";
import LeadShape from "@/assets/shape5.png";
import LeadLine from "@/assets/line.png";
import Lline from "@/assets/line5.png";

import AnalyticsSection from "./AnalyticsSection";

const steps = [
  {
    icon: FoundationIcon,
    shape: FoundationShape,
    line: FoundationLine,
    bar:Fline,
    lineoffset: "-ml-120 -mt-2",
    textOffset: "-ml-6",
    textTop: "-mt-2",
    title: "Foundation",
    heading: "Data Infrastructure & Quality Base",
    desc: "Verified data infrastructure for accurate targeting.",
    barColor: "bg-[#0B87BA]",
  },
  {
    icon: RecognitionIcon,
    shape: RecognitionShape,
    line: RecognitionLine,
    bar: Rline,
    lineoffset: "-ml-112 -mt-3",
    textOffset: "-ml-10",
    textTop: "-mt-6",
    title: "Recognition",
    heading: "AI-Driven Contact + Account Intelligence",
    desc: "Enriched contact and account insights powered by AI.",
    barColor: "bg-[#0B87BA]",
  },
  {
    icon: CommunityIcon,
    shape: CommunityShape,
    line: CommunityLine,
    bar: Cline,
    lineoffset: "-ml-120 -mt-3",
    textOffset: "-ml-14",
    textTop: "-mt-10",
    title: "Community",
    heading: "Data + Events Network + Client Ecosystem",
    desc: "Events and data combined for stronger outreach.",
    barColor: "bg-[#1E5FA8]",
  },
  {
    icon: ReputationIcon,
    shape: ReputationShape,
    line: ReputationLine,
    bar: Repline,
    lineoffset: "-ml-110 -mt-3",
    textOffset: "-ml-18",
    textTop: "-mt-12",
    title: "Reputation",
    heading: "India + APAC Strong, Global Expansion",
    desc: "Regional strength with scalable global expansion.",
    barColor: "bg-[#2D469C]",
  },
  {
    icon: LeadIcon,
    shape: LeadShape,
    line: LeadLine,
    bar: Lline,
    lineoffset: "-ml-120 -mt-3",
    textOffset: "-ml-22",
    textTop: "-mt-16",
    title: "Lead Intelligence",
    heading: "Event-Driven Market Intel + Conversion Growth",
    desc: "Actionable insights that accelerate conversions.",
    barColor: "bg-[#4A1575]",
  },
];

const stats = [
  { icon: IconUsers, value: "50K+", label: "Business Leads" },
  { icon: IconUsers, value: "34M+", label: "CXO Data Sets" },
  { icon: IconUsers, value: "340M+", label: "CXO Leaders Data Points" },
  { icon: IconUsers, value: "800K+", label: "B2B Organisations" },
];

const DataToRevenueSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-5xl mx-auto">

                 {/* Badge */}
         <div className="flex justify-center mb-6">
           <span className="section-badge border border-[#470277]">
             Data-driven Strategy
           </span>
         </div>

         {/* Heading */}
         <h2 className="font-sora text-4xl md:text-5xl font-bold text-center mb-3">
           From Data to <span className="text-[#72339F]/80">Revenue</span>
         </h2>

         <p className="font-sora text-center text-muted-foreground max-w-2xl mx-auto mb-16">
           A structured 5-stage approach that transforms raw lead data into targeted outreach, smarter decisions, and sales growth.
         </p>

         {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}

          {/* LEFT VISUAL STACK */}
           <div className="flex flex-col gap-10">
             {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col sm:flex-row items-start gap-4"
              >
                {/* White Circle */}
                {/* <div className="relative w-16 h-16 flex items-center justify-center"> */}
                  {/* <img src={step.shape} alt="" className="absolute inset-0 w-full h-full" /> */}
                  {/* <img src={step.icon} alt={step.title} className="relative w-16 h-16 ml-8" />
                </div> */}

                {/* Colored Step Shape */}
                {/* <img src={step.shape} alt="" className="h-14 w-auto" /> */}
                {/* <div className="relative">
  <img src={step.shape} alt="" className="h-14 w-auto" /> */}

  {/* White text overlay */}
  {/* <span className="absolute inset-0 flex items-center justify-center 
                   text-white font-sora text-sm font-semibold tracking-wide">
    {step.title}
  </span>
</div> */}

{/* Step Shape + Overlapping Icon */}
<div className="relative flex items-center">
  {/* Colored Step Shape */}
  <div className="relative">
    <img src={step.shape} alt="" className="h-10 sm:h-14 w-auto" />

    {/* White text on shape */}
    <span className="absolute inset-0 flex items-center justify-center 
                     text-white font-sora text-sm font-semibold tracking-wide">
      {step.title}
    </span>
  </div>

  {/* White Circle Icon (overlapping) */}
  <img
    src={step.icon}
    alt={step.title}
    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-md p-2 sm:p-3
               sm:absolute sm:-left-8"
  />
</div>


                {/* Connector Line */}
                <img src={step.line} alt="" className="hidden sm:block h-1 w-32 -ml-4" />
              {/* </motion.div>
            ))}
          </div> */}

                {/* Right text */}
                <div className="relative sm:pl-10 pl-0">
                   {/* Colored vertical bar */}
  <img
    src={step.bar}
    alt=""
    className={`hidden sm:block absolute left-0 top-1 w-[6px] h-[56px] ${step.lineoffset}`}
  />
                  <h3 className="font-bold text-foreground text-lg sm:text-xl leading-tight text-center sm:text-left">
                    {step.heading}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base mt-1 leading-relaxed max-w-full sm:max-w-sm text-center sm:text-left">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
              
            {/* );
          })} */}
        {/* </div> */}
       
                 <AnalyticsSection />


           {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              // className="bg-card rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/50 transition-colors text-center shadow-card"
              className="font-sora bg-card rounded-2xl p-6 border-2 border-[#72339F] transition-colors text-center shadow-[0_8px_24px_rgba(114,51,159,0.15)]"
            >
              {/* <div className="w-6 h-6 bg-[#72339F] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-white" />
              </div> */}
              <div className="w-10 h-10 bg-[#72339F] rounded-xl mx-auto mb-4 flex items-center justify-center">
  <img 
    src={stat.icon} 
    alt={stat.label} 
    className="w-12 h-12 object-contain"
  />
</div>

              {/* <div className="font-sora text-3xl font-bold text-foreground mb-1">{stat.value}</div> */}
               {/* Animated Number */}
      <div className="font-sora text-3xl font-bold text-foreground mb-1">
        <CountUp value={stat.value} />
      </div>

              <div className="font-sora text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DataToRevenueSection;
