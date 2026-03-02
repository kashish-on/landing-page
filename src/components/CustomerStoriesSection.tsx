// import { ArrowRight, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// import google from "@/assets/google.png";
import microsoft from "@/assets/microsoft.png";

import manAvatar from "@/assets/man.png";
import womanAvatar from "@/assets/woman.png";
// import { Value } from "@radix-ui/react-select";

const testimonials = [
  {
    type: "stat",
    value: "10X",
    label: "Revenue Growth",
    company: "Microsoft",
    bgColor: "bg-[#470277]/10",
  },
  {
    type: "stat",
    value: "3X",
    label: "Faster Lead Qualification",
    company: "Enterprise SaaS",
    bgColor: "bg-[#0B87BA]/10",
  },
  {
    type: "quote",
    quote: "\"ObserveNow.ai delivers reliable, decision-maker-level contacts with strong accuracy. It has streamlined our outbound process significantly.\"",
    author: "Arjun Malhotra",
    role: "Head of Sales, B2B SaaS Company",
    company: "Google Review",
    bgColor: "bg-card",
  },
  {
    type: "quote",
    quote: "\"High-quality contact intelligence and easy usability. It supports more targeted and effective outreach.\"",
    author: "Priya Nair",
    role: "Revenue Operations Lead, Tech Enterprise",
    company: "Google Review",
    bgColor: "bg-card",
  },
  {
    type: "quote",
    quote: "\"Accurate data, clean interface, and consistent results. A valuable tool for revenue-focused teams.\"",
    author: "Rohit Verma",
    role: "Executive Search Consultant",
    company: "Google Review",
    bgColor: "bg-card",
  },
  {
    type: "stat",
    value: "40%",
    label: "Higher Response Rate",
    company: "Growth Marketing Team",
    bgColor: "bg-[#0B87BA]/10",
  },
  {
    type: "quote",
    quote: "\"The data accuracy and relevance have strengthened our outreach strategy. ObserveNow.ai gives us confidence in every contact we engage.\"",
    author: "Neha Verma",
    role: "Director of Business Development",
    company: " CloudAxis Inc",
    bgColor: "bg-card",
  },
  {
    type: "stat",
    value: "2X",
    label: "Pipeline Acceleration",
    company: "B2B Services",
    bgColor: "bg-[#470277]/10",
  },
];

const CustomerStoriesSection = () => {
  return (
    <section className="pt-15 pb-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <span className="section-badge border border-[#470277]">Customer Story</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
        >
          How Our Customers Use <span className="text-[#72339F]/80 font-sora">Our</span>
          <br />
          <span className="text-[#72339F]/80 font-sora">Product to Succeed</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sora text-center text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          See how businesses achieve real results with DataGen — from verified leads to faster conversions.
        </motion.p>


        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => {
            const profileImg = item.author === "Priya Nair" || item.author === "Neha Verma" ? womanAvatar : manAvatar;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${item.bgColor} rounded-2xl p-6 border border-border hover:shadow-card transition-shadow ${
      item.type === "stat"
        ? "lg:col-span-1 w-full max-w-[300px] mx-auto shadow-md"     // 👈 makes colored boxes narrower (more square)
        : "lg:col-span-2 h-[220px] shadow-md"             // 👈 makes white boxes wider (rectangle)
    }`}
              >
                {item.type === "stat" ? (
                  <div>
                    <div className="font-sora text-4xl font-bold text-foreground mb-2">{item.value}</div>
                    <div className="text-muted-foreground mb-8">{item.label}</div>
                    <div className="flex items-center gap-2">
                       {/* {index === 0 && (
                      <img
                        src={microsoft}
                        alt="Microsoft"
                        className="w-12 h-12 object-contain"
                      />
                       )} */}
                    
                      <span className="font-medium text-muted-foreground">{item.company}</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-foreground mb-8">{item.quote}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={profileImg}
                          alt={item.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-foreground">{item.author}</div>
                          <div className="text-sm text-muted-foreground">{item.role}</div>
                        </div>
                      </div>
                      {/* <img
                        src={google}
                        alt="Google"
                        className="w-12 h-8 object-contain"
                      /> */}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesSection;
