import { Megaphone, Heart, BarChart3, ClipboardCheck, Mic, Users } from "lucide-react";
import { motion } from "framer-motion";
import DataToRevenueStack from "@/assets/data-to-revenue-stack.svg";


import PolygonWhite from "@/assets/polygon-white.svg";

import arrow1 from "@/assets/arrow-1.svg";
import arrow2 from "@/assets/arrow-2.svg";
import arrow3 from "@/assets/arrow-3.svg";
import arrow4 from "@/assets/arrow-4.svg";
import arrow5 from "@/assets/arrow-5.svg";
import Shadow from "@/assets/shadow.svg";

import IconLead from "@/assets/icon-lead.svg";
import IconHeart from "@/assets/icon-heart.svg";
import IconChart from "@/assets/icon-chart.svg";
import IconClipboard from "@/assets/icon-clipboard.svg";
import IconMic from "@/assets/icon-mic.svg";

const steps = [
  { icon: IconMic, label: "Lead Intelligence", arrow: arrow1, shadow: Shadow },
  { icon: IconHeart, label: "Smart Recommendations", arrow: arrow2, shadow: Shadow },
  { icon: IconChart, label: "Precision Targeting", arrow: arrow3, shadow: Shadow },
  { icon: IconClipboard, label: "Data Enrichment", arrow: arrow4, shadow: Shadow },
  { icon: IconLead, label: "Workflow Integration", arrow: arrow5, shadow: Shadow },
];

const stats = [
  { icon: Users, value: "40K+", label: "Business Leads" },
  { icon: Users, value: "80K+", label: "CXO Data Sets" },
  { icon: Users, value: "220K+", label: "CXO Leaders Data Points" },
  { icon: Users, value: "300K+", label: "B2B Organisations" },
];

const DataToRevenueSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto px-4 max-w-[1400px]">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <span className="section-badge">Data-driven Strategy</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
        >
          From Data to <span className="violet-gradient-text">Revenue</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          A structured 5-stage approach that transforms raw lead data into targeted outreach, smarter decisions, and sales growth.
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          {/* 3D Stacked Discs Visualization */}
          {/* 3D Stacked Discs Visualization */}
          
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative flex-1 flex justify-center lg:justify-end pl-14 overflow-visible"
>
  <img
    src={DataToRevenueStack}
    alt="Data to Revenue Flow"
    className="max-w-[900px] w-full h-auto translate-x-14"
  />
</motion.div>


          {/* Steps List */}
          <div className="flex-1 space-y-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 group"
              >
                {/* White Polygon Background */}
      <div className="relative w-[88px] h-[88px] flex items-center justify-center">
        <img
          src={PolygonWhite}
          alt="Polygon"
          className="absolute inset-0 w-full h-full"
        />
        <img
          src={step.icon}
          alt={step.label}
          className="relative z-10 w-7 h-7"
        />
         </div>
                
                <div className="relative w-16 h-16 -mr-2">
  {/* Shadow behind */}
  <img
    src={step.shadow}
    alt=""
    className="absolute -left-2 top-2 w-16 h-16 opacity-80"
  />

  {/* Main colored arrow */}
  <img
    src={step.arrow}
    alt={step.label}
    className="absolute left-0 top-0 w-16 h-16"
  />
</div>
                <span className="font-semibold text-foreground text-[15px]">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

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
              className="bg-card rounded-2xl p-6 border-2 border-[#72339F] transition-colors text-center shadow-[0_8px_24px_rgba(114,51,159,0.15)]"
            >
              <div className="w-6 h-6 bg-[#72339F] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataToRevenueSection;

