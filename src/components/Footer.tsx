import { motion } from "framer-motion";
import logo from "@/assets/observenow_ai.png";
import { Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";

import MailIcon from "@/assets/Mail icon.svg";
import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Top-left soft violet glow */}
<div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#470277]/10 blur-[110px]" />

{/* Bottom-right soft violet glow */}
<div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#470277]/10 blur-[110px]" />

      <div className="container mx-auto px-6 py-16">

        {/* Newsletter */}
<div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-12 border-b border-black/10">
  <div>
    <h3 className="font-sora text-3xl font-bold text-black mb-2">
      Subscribe our Newsletter
    </h3>
    <p className="text-black/60">
      Start with a free trial. No purchase is necessary.
    </p>
  </div>

  <div className="flex items-center gap-4 w-full max-w-xl">
    {/* Email Input */}
    <div className="flex items-center gap-3 bg-white rounded-full px-6 py-4 shadow w-full">
      {/* <Mail className="w-5 h-5 text-indigo-600" /> */}
      <img
      src={MailIcon}
      alt="Mail"
      className="w-5 h-5"
    />
      <input
        type="email"
        placeholder="Your Email Address"
        className="flex-1 outline-none text-sm text-black placeholder:text-black/50"
      />
    </div>

    {/* Subscribe Button */}
    <NavLink to="/">
    <button
     className="btn-gradient footer-btn shadow-violet"
>
  SUBSCRIBE NOW
</button>
</NavLink>

  </div>
</div>


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12">

          {/* Brand */}
          <div>
            <img
  src={logo}
  alt="Your Brand Name"
  className="h-28 mb-4"
 />

            <p className="text-black/60 text-sm mb-6">
              From accurate data extraction to verified contacts, seamless
              integration, and smart filters — everything you need to find and
              connect with the right people, faster.
            </p>

            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group"
                  
                  // className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                  <div className="p-[2px] rounded-full bg-gradient-to-r from-[#48B4E1] to-[#72339F]">
        {/* Inner Circle */}
        <div className="w-10 h-10 rounded-full bg-[#EFEFEF] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_14px_rgba(114,51,159,0.35)]">
          <Icon className="w-4 h-4 text-black" />
        </div>
      </div>
                  {/* <Icon className="w-4 h-4" /> */}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-sora font-semibold text-black text-lg leading-none">Useful Links</h4>
            <div className="relative mt-3 h-[3px] w-full overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/4 rounded-full bg-gradient-to-r from-[#470277] to-[#0B87BA]"
                  animate={{ x: ["0%", "50%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                />
              </div>
            <ul className="mt-4 space-y-3 text-black/60 text-sm">
              <li><a href="/"className="hover:text-black transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-black transition-colors">About us</a></li>
              <li><a href="https://dashboard.observenow.ai/signup" className="hover:text-black transition-colors">Free Trial</a></li>
              <li><a href="/contact" className="hover:text-black transition-colors">Contact Us</a></li>
              {/* <li><a href="/privacy">Privacy Policy</a></li> */}
            </ul>
          </div>

          {/* Help & Support */}
          <div className="inline-flex flex-col items-start">
            <h4 className="font-sora font-semibold text-black text-lg leading-none">Help & Support</h4>
            <div className="relative mt-3 h-[3px] w-full overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/4 rounded-full bg-gradient-to-r from-[#470277] to-[#0B87BA]"
                  animate={{ x: ["0%", "50%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                />
              </div>
            <ul className="mt-4 space-y-3 text-black/60 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-black transition-colors">How It Work</a></li>
              <li><a href="https://chromewebstore.google.com/detail/observenowai-linkedin-pro/pkoknghbccdigldobkjndnbjoagajahi" className="hover:text-black transition-colors">Chrome Extension</a></li>
              {/* <li><a href="/privacy" className="hover:text-black transition-colors">Privacy Policy</a></li> */}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-sora font-semibold text-black text-lg leading-none">Lets Try out</h4>
            <div className="relative mt-3 h-[3px] w-full overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/4 rounded-full bg-gradient-to-r from-[#470277] to-[#0B87BA]"
                  animate={{ x: ["0%", "50%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                />
              </div>
            <a
              href="https://chromewebstore.google.com/detail/observenowai-linkedin-pro/pkoknghbccdigldobkjndnbjoagajahi"
              className="mt-4 inline-flex items-center gap-3 
    bg-white text-black 
    px-3 py-1 
    rounded-xl 
    text-sm font-medium 
    border border-black/20 
    transition-all duration-200
    hover:border-[#470277]
    hover:shadow-[0_6px_20px_rgba(71,2,119,0.15)]"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
                alt="Chrome"
                className="w-6 h-6"
              />
              <span className="leading-tight">
    <span className="block text-xs text-black/70">Get it on</span>
    <span className="block font-semibold text-sm">Chrome Store</span>
  </span>
            </a>
          </div>
        </div>

        {/* Bottom */}
      <div className="mt-16 pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-black/50">
         {/* Left Links */}
  <div className="flex flex-wrap items-center gap-3 mt-16">
    <a href="/privacy" className="hover:text-black transition-colors">
      Privacy Policy
    </a>
    <span>|</span>
    <a href="/terms" className="hover:text-black transition-colors">
      Terms
    </a>
    <span>|</span>
    <a href="/gdpr" className="hover:text-black transition-colors">
      GDPR
    </a>
    <span>|</span>
    <a href="/dpdp" className="hover:text-black transition-colors">
      DPDP Act
    </a>
    <span>|</span>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-PCdgL-WlIfkLCFl9A6Dut6FMJykz_u4eVYuC45ISlCfwYw/viewform?usp=publish-editor" className="hover:text-black transition-colors">
      Data Removal
    </a> 
    <span>|</span>
    <a href="/cookie" className="hover:text-black transition-colors">
      Cookie Policy
    </a>
  </div>

        <div className="text-center md:text-right mt-16">
          © 2026 Adverbo Productions LLP. All Rights Reserved.
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
