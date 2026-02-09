import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
  {
    type: "stat",
    value: "10X",
    label: "Revenue Boost",
    company: "tenstorrent",
    bgColor: "bg-violet-100",
  },
  {
    type: "stat",
    value: "10X",
    label: "Revenue Boost",
    company: "tenstorrent",
    bgColor: "bg-cyan-100",
  },
  {
    type: "quote",
    quote: "\"Very easy to use, and it gives contact details that are not available on others I have used.\"",
    author: "Ekin Bayildiran",
    role: "Executive Search, Tenstorrent",
    company: "HSBC",
    bgColor: "bg-card",
  },
  {
    type: "quote",
    quote: "\"Very easy to use, and it gives contact details that are not available on others I have used.\"",
    author: "Ekin Bayildiran",
    role: "Executive Search, Tenstorrent",
    company: "HSBC",
    bgColor: "bg-card",
  },
  {
    type: "quote",
    quote: "\"Very easy to use, and it gives contact details that are not available on others I have used.\"",
    author: "Ekin Bayildiran",
    role: "Executive Search, Tenstorrent",
    company: "HSBC",
    bgColor: "bg-card",
  },
  {
    type: "stat",
    value: "10X",
    label: "Revenue Boost",
    company: "tenstorrent",
    bgColor: "bg-violet-100",
  },
  {
    type: "quote",
    quote: "\"Very easy to use, and it gives contact details that are not available on others I have used.\"",
    author: "Ekin Bayildiran",
    role: "Executive Search, Tenstorrent",
    company: "HSBC",
    bgColor: "bg-card",
  },
  {
    type: "stat",
    value: "10X",
    label: "Revenue Boost",
    company: "tenstorrent",
    bgColor: "bg-violet-100",
  },
];

const CustomerStoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <span className="section-badge">Customer Story</span>
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

        {/* CTA Button */}
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

        {/* Happy Clients */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-200 to-violet-300 border-2 border-card"
              />
            ))}
          </div>
          <div>
            <span className="font-semibold text-foreground">Happy Clients</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">3.5(10k Review)</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${item.bgColor} rounded-2xl p-6 border border-border hover:shadow-card transition-shadow`}
            >
              {item.type === "stat" ? (
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">{item.value}</div>
                  <div className="text-muted-foreground mb-8">{item.label}</div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg" />
                    <span className="font-medium text-muted-foreground">{item.company}</span>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-foreground mb-8">{item.quote}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
                      <div>
                        <div className="font-semibold text-foreground">{item.author}</div>
                        <div className="text-sm text-muted-foreground">{item.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-destructive rounded" />
                      <span className="font-bold text-foreground">{item.company}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesSection;
