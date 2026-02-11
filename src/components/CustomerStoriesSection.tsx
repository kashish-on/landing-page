import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import google from "@/assets/google.png";
import microsoft from "@/assets/microsoft.png";

import manAvatar from "@/assets/man.png";
import womanAvatar from "@/assets/woman.png";

const testimonials = [
  {
    type: "stat",
    value: "10X",
    label: "Revenue Boost",
    company: "Microsoft",
    bgColor: "bg-[#470277]/10",
  },
  {
    type: "stat",
    value: "10X",
    label: "Revenue Boost",
    company: "Microsoft",
    bgColor: "bg-[#0B87BA]/10",
  },
  {
    type: "quote",
    quote: "\"Very easy to use, and it gives contact details that are not available on others I have used.\"",
    author: "Ekin Bayildiran",
    role: "Executive Search, Tenstorrent",
    company: "Google",
    bgColor: "bg-card",
  },
  {
    type: "quote",
    quote: "\"Very easy to use, and it gives contact details that are not available on others I have used.\"",
    author: "Ekin Bayildiran",
    role: "Executive Search, Tenstorrent",
    company: "Google",
    bgColor: "bg-card",
  },
  {
    type: "quote",
    quote: "\"Very easy to use, and it gives contact details that are not available on others I have used.\"",
    author: "Ekin Bayildiran",
    role: "Executive Search, Tenstorrent",
    company: "Google",
    bgColor: "bg-card",
  },
  {
    type: "stat",
    value: "10X",
    label: "Revenue Boost",
    company: "Microsoft",
    bgColor: "bg-[#0B87BA]/10",
  },
  {
    type: "quote",
    quote: "\"Very easy to use, and it gives contact details that are not available on others I have used.\"",
    author: "Ekin Bayildiran",
    role: "Executive Search, Tenstorrent",
    company: "Google",
    bgColor: "bg-card",
  },
  {
    type: "stat",
    value: "10X",
    label: "Revenue Boost",
    company: "Microsoft",
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
        >
          How Our Customers Use <span className="violet-gradient-text">Our</span>
          <br />
          <span className="violet-gradient-text">Product to Succeed</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          See how businesses achieve real results with DataGen — from verified leads to faster conversions.
        </motion.p>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <Button size="lg" className="btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet">
            READ CUSTOMER STORY
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => {
            const profileImg = index % 2 === 0 ? manAvatar : womanAvatar;

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
                    <div className="text-4xl font-bold text-foreground mb-2">{item.value}</div>
                    <div className="text-muted-foreground mb-8">{item.label}</div>
                    <div className="flex items-center gap-2">
                      <img
                        src={microsoft}
                        alt="Microsoft"
                        className="w-12 h-12 object-contain"
                      />
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
                      <img
                        src={google}
                        alt="Google"
                        className="w-12 h-8 object-contain"
                      />
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
