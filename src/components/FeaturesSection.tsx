import { Play } from "lucide-react";
import { motion } from "framer-motion";

import FeatureImg1 from "@/assets/img1.gif";
import FeatureImg2 from "@/assets/img2.gif";
import FeatureImg3 from "@/assets/img3.gif";
import FeatureImg4 from "@/assets/img4.gif";


const features = [
  {
    badge: "Datasets",
    title: "Unique Add-On",
    image: FeatureImg1,
    points: [
      "Verified CXO intelligence from your account list",
      "Ready-to-use CXO data packs by industry",
      "Actionable insights, instantly",
    ],
    imagePosition: "left",
  },
  {
    badge: "Lead Recommendation",
    title: "AI Lead Recommendations",
    image: FeatureImg2,
    points: [
      "Smart, activity-based suggestions",
      "Personalized platform insights",
      "Targeted lead conversions",
    ],
    imagePosition: "right",
  },
  {
    badge: "Verified Contacts",
    title: "Verified CXO Contacts",
    image: FeatureImg3,
    points: [
      "Access names, emails & phone numbers",
      "Stay updated with job changes",
      "Direct LinkedIn profile access",
    ],
    imagePosition: "left",
  },
  {
    badge: "Chrome Extension",
    title: "Smart Seamless Integration",
    image: FeatureImg4,
    points: [
      "Target by role, industry, or company",
      "Find qualified leads faster",
      "Customize searches with ease",
    ],
    imagePosition: "right",
  },
];

const FeaturesSection = () => {
  return (
    <section className="pt-1 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Placeholder */}
              <motion.div 
                className="flex-1 w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-2xl border-2 border-[#72339F]/30 shadow-[0_10px_30px_rgba(114,51,159,0.15)] hover:border-[#72339F] p-4">
                  <img
                    src={feature.image}   // 👈 replace with your actual image path
                    alt={feature.title}
                    className="max-w-full max-h-full object-contain rounded-xl"
                  />
                </div>

              </motion.div>

              {/* Content */}
              <div className="flex-1 w-full">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-[#72339F] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
                >
                  {feature.badge}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="font-sora text-2xl md:text-3xl font-bold text-foreground mb-6"
                >
                  {feature.title}
                </motion.h3>
                <ul className="space-y-4">
                  {feature.points.map((point, pointIndex) => (
                    <motion.li 
                      key={pointIndex} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + pointIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
