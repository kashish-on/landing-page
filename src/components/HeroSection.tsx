import { ArrowRight, Mail, Phone, Star, StarHalf} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const contactCards = [
  { name: "Ashley Stapleton", role: "Director of Tech", company: "Dealsforce", email: "ashley@dealsforce.com", phone: "(323) 463-4001" },
  { name: "Michael Chen", role: "VP of Sales", company: "TechCorp", email: "michael@techcorp.com", phone: "(415) 555-0123" },
  { name: "Sarah Johnson", role: "CEO", company: "StartupAI", email: "sarah@startupai.com", phone: "(628) 555-0456" },
  { name: "David Kim", role: "CTO", company: "DataFlow", email: "david@dataflow.io", phone: "(510) 555-0789" },
  { name: "Emma Wilson", role: "Head of Growth", company: "ScaleUp", email: "emma@scaleup.co", phone: "(650) 555-0321" },
];

const HeroSection = () => {
  const duplicatedCards = [...contactCards, ...contactCards, ...contactCards];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-violet-50/50 pt-28 md:pt-32 pb-32">
      {/* Decorative gradient blob */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-200/30 to-blue-200/30 rounded-full blur-3xl" /> */}
      
      {/* Center purple glow (exact middle gradient like reference) */}
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
  <div
    className="mt-[220px] w-[1400px] h-[900px] rounded-full blur-[160px] opacity-70"
    style={{
      background:
        "radial-gradient(circle at center, rgba(71,2,119,0.35) 0%, rgba(71,2,119,0.18) 35%, rgba(71,2,119,0.08) 55%, rgba(71,2,119,0) 70%)",
    }}
  />
</div>

{/* Darker glow below cards */}
<div className="pointer-events-none absolute inset-0 flex justify-center">
  <div
    className="mt-[480px] w-[1400px] h-[700px] rounded-full blur-[140px] opacity-80"
    style={{
      background:
        "radial-gradient(circle at center, rgba(71,2,119,0.45) 0%, rgba(71,2,119,0.28) 30%, rgba(71,2,119,0.12) 55%, rgba(71,2,119,0) 75%)",
    }}
  />
</div>

      <div className="px-4 relative z-10">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="section-badge border border-[#470277]">
            AI-powered B2B Sales Intelligence Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Your Business Growth Engine
            <br />
            Smarter with <span className="text-[#72339F]">ObserveNow AI</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Smarter targeting, deeper insights, and real decision-maker connections — all in 3 clicks.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Button size="lg" className="btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet">
            GET FREE TRIAL
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all">
            CONTACT SALES
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Rating */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-16 text-[#470277]"
        >
          <div className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold bg-[#470277]">G</div>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-4 h-4 fill-[#470277] text-[#470277]" />
            ))}
            {/* <Star className="w-4 h-4 fill-[#470277]/40 text-[#470277]" /> */}
            <div className="relative w-4 h-4">
    <Star className="absolute inset-0 w-4 h-4 text-[#470277]" />
    <Star
      className="absolute inset-0 w-4 h-4 fill-[#470277] text-[#470277]"
      style={{ clipPath: "inset(0 50% 0 0)" }}
    />
  </div>
          </div>
          <span className="text-sm text-[#470277]">4.4/5 | <span className="font-semibold text-[#470277]">No Credit Card Required</span></span>
        </motion.div>

        {/* Contact Cards Carousel */}
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex gap-6"
            animate={{ x: [0, -1800] }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicatedCards.map((card, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 bg-card rounded-2xl p-4 shadow-card border border-border hover:shadow-card-lg transition-shadow"
                style={{ transform: `rotate(${(index % 3 - 1) * 3}deg)` }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative mb-3">
                  <div className="w-full h-40 bg-gradient-to-br from-violet-100 to-blue-100 rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-violet-200/50 to-transparent flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-violet-300 to-violet-400 rounded-full" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">H</span>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">{card.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {card.role} at <span className="text-primary font-medium">{card.company}</span>
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Mail className="w-4 h-4" />
                  <span>{card.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{card.phone}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
