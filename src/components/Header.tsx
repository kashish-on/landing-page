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
              className="rounded-full btn-gradient hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              <a href="https://observenow.ai/signup.html">
                START YOUR FREE TRIAL
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            
            <Button
  asChild
  className="hidden sm:inline-flex rounded-full bg-[#72339F] text-white px-6 py-2 shadow-md hover:bg-[#6a2f93] hover:shadow-lg transition-all"
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