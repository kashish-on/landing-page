import { motion } from "framer-motion";
import logo from "@/assets/observenow_ai.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-lg border-b border-border/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <NavLink to="/" className="flex items-center h-full">
            <img
              src={logo}
              alt="ObserveNow AI"
              className="h-full max-h-[100px] w-auto object-contain"
            />
          </NavLink>

          {/* Navigation Links */}
          {/* desktop links */}
          <div className="hidden md:flex items-center gap-12">
            <NavLink
              to="/"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Home
            </NavLink>

            <NavLink
              to="/about#about"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              About
            </NavLink>

            <NavLink
              to="/pricing#pricing"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Pricing
            </NavLink>

            <NavLink
              to="/contact#contact"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Contact Sales
            </NavLink>
          </div>
          {/* mobile menu button */}
          <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-50">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="p-1 rounded-md text-foreground/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {menuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/90 backdrop-blur-lg flex flex-col items-center gap-4 py-4 md:hidden">
              <NavLink
                to="/"
                className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/pricing"
                className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/contact"
                className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact Sales
              </NavLink>
            </div>
          )}

          {/* CTA Buttons (hidden on very small screens so hamburger stays visible) */}
          <div className="hidden sm:flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              className="btn-gradient text-primary-foreground px-7 py-5 text-sm group shadow-violet"
            >
              <a href="https://dashboard.observenow.ai/signup" className="flex items-center gap-2">
                START YOUR FREE TRIAL
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
               className="bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] group shadow-lg hover:shadow-xl transition-all button"
              //className="bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-7 py-5 text-sm group shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://dashboard.observenow.ai/login" className="flex items-center gap-2">
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
