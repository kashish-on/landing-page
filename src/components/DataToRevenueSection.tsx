import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

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
    bar: Fline,
    title: "Foundation",
    heading: "Data Infrastructure & Quality Base",
    desc: "Verified data infrastructure for accurate targeting.",
    barColor: "#0B87BA",
  },
  {
    icon: RecognitionIcon,
    shape: RecognitionShape,
    line: RecognitionLine,
    bar: Rline,
    title: "Recognition",
    heading: "AI-Driven Contact + Account Intelligence",
    desc: "Enriched contact and account insights powered by AI.",
    barColor: "#0B87BA",
  },
  {
    icon: CommunityIcon,
    shape: CommunityShape,
    line: CommunityLine,
    bar: Cline,
    title: "Community",
    heading: "Data + Events Network + Client Ecosystem",
    desc: "Events and data combined for stronger outreach.",
    barColor: "#1E5FA8",
  },
  {
    icon: ReputationIcon,
    shape: ReputationShape,
    line: ReputationLine,
    bar: Repline,
    title: "Reputation",
    heading: "India + APAC Strong, Global Expansion",
    desc: "Regional strength with scalable global expansion.",
    barColor: "#2D469C",
  },
  {
    icon: LeadIcon,
    shape: LeadShape,
    line: LeadLine,
    bar: Lline,
    title: "Lead Intelligence",
    heading: "Event-Driven Market Intel + Conversion Growth",
    desc: "Actionable insights that accelerate conversions.",
    barColor: "#4A1575",
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

        {/* ================= MOBILE CARDS ================= */}
        <div className="sm:hidden flex flex-col gap-4 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-l-4 shadow-sm p-5 flex gap-3"
              style={{ borderColor: step.barColor }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: `${step.barColor}20` }}
              >
                <img src={step.icon} className="w-11 h-11" />
              </div>

              <div className="flex-1">
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: step.barColor }}
                >
                  {step.title}
                </p>

                <h3 className="text-sm font-bold leading-snug mb-1">
                  {step.heading}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <span className="text-sm text-muted-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div className="hidden sm:flex flex-col gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col sm:flex-row items-start gap-4"
            >

              {/* Step Shape + Icon */}
              <div className="relative flex items-center">
                <div className="relative">
                  <img src={step.shape} className="h-10 sm:h-14 w-auto" />

                  <span className="absolute inset-0 flex items-center justify-center text-white font-sora text-sm font-semibold">
                    {step.title}
                  </span>
                </div>

                <img
                  src={step.icon}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-md p-2 sm:p-3 sm:absolute sm:-left-8"
                />
              </div>

              {/* Connector Line */}
              <img src={step.line} className="hidden sm:block h-1 w-32 -ml-6 mt-6" />

              {/* Text */}
              <div className="relative sm:pl-10">
                <img
                  src={step.bar}
                  className="hidden sm:block absolute left-0 top-1 w-[6px] h-[56px]"
                />

                <h3 className="font-bold text-lg sm:text-xl text-center sm:text-left">
                  {step.heading}
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base mt-1 max-w-sm text-center sm:text-left">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnalyticsSection />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="font-sora bg-card rounded-2xl p-6 border-2 border-[#72339F] text-center shadow-[0_8px_24px_rgba(114,51,159,0.15)]"
            >
              <div className="w-10 h-10 bg-[#72339F] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <img src={stat.icon} className="w-12 h-12 object-contain" />
              </div>

              <div className="font-sora text-3xl font-bold text-foreground mb-1">
                <CountUp value={stat.value} />
              </div>

              <div className="font-sora text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DataToRevenueSection;