import { motion } from "framer-motion";
import logo from "@/assets/on-ai.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-lg border-b border-border/50" />
      
      <div className="container mx-auto px-4 relative">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="https://observenow.ai/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Your Brand Name"
              className="h-10 mb-4"
             />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="https://observenow.ai/"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="https://observenow.ai/about.html"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              About
            </a>
            <a
              href="https://observenow.ai/pricing.html"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href="https://observenow.ai/contact.html"
              className="text-primary font-semibold"
            >
              Contact Sales
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet"
            >
              <a href="https://observenow.ai/signup.html">
                START YOUR FREE TRIAL
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            
            <Button
  asChild
  className="bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all"
>
  <a href="https://observenow.ai/login.html" className="flex items-center">
    <LogIn className="w-4 h-4 mr-2" />
    LOGIN
  </a>
</Button>

          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;