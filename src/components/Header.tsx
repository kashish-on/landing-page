import { motion } from "framer-motion";
import logo from "@/assets/observenow_ai.png";
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

      <div className="max-w-7xl mx-auto px-6 relative">
        <nav className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <a href="https://observenow.ai/" className="flex items-center h-full">
            <img
              src={logo}
              alt="ObserveNow AI"
              className="h-full max-h-[100px] w-auto object-contain"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
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
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="btn-gradient text-primary-foreground px-7 py-5 text-sm group shadow-violet"
            >
              <a href="https://observenow.ai/signup.html" className="flex items-center gap-2">
                START YOUR FREE TRIAL
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
               className="bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] group shadow-lg hover:shadow-xl transition-all button"
              //className="bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-7 py-5 text-sm group shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://observenow.ai/login.html" className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
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
