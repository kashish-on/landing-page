import { motion } from "framer-motion";
import logo from "@/assets/on-ai.png";
import { Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#f3eefe] to-[#e7dcff]">
      <div className="container mx-auto px-6 py-16">

        {/* Newsletter */}
<div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-12 border-b border-black/10">
  <div>
    <h3 className="text-3xl font-bold text-black mb-2">
      Subscribe our Newsletter
    </h3>
    <p className="text-black/60">
      Start with a free trial. No purchase is necessary.
    </p>
  </div>

  <div className="flex items-center gap-4 w-full max-w-xl">
    {/* Email Input */}
    <div className="flex items-center gap-3 bg-white rounded-full px-6 py-4 shadow w-full">
      <Mail className="w-5 h-5 text-indigo-600" />
      <input
        type="email"
        placeholder="Your Email Address"
        className="flex-1 outline-none text-sm text-black placeholder:text-black/50"
      />
    </div>

    {/* Subscribe Button */}
    <button
     className="btn-gradient text-primary-foreground px-5 py-3 text-base group shadow-violet  whitespace-nowrap"
  // className="
  //   px-10 py-4
  //   rounded-full
  //   text-white
  //   text-sm
  //   font-semibold
  //   tracking-wide
  //   bg-gradient-to-r from-[#0E78B7] to-[#4B148C]
  //   hover:opacity-90
  //   transition
  //   whitespace-nowrap
  // "
>
  SUBSCRIBE NOW
</button>

  </div>
</div>


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12">

          {/* Brand */}
          <div>
            <img
  src={logo}
  alt="Your Brand Name"
  className="h-10 mb-4"
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
                  className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:pl-8">
            <h4 className="font-semibold text-black text-lg leading-none">Useful Links</h4>
            <div className="relative mt-[1px] h-[3px] w-full overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                />
              </div>
            <ul className="mt-4 space-y-3 text-black/60 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Free Trial</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="md:-ml-6">
            <h4 className="font-semibold text-black text-lg leading-none">Help & Support</h4>
            <div className="relative mt-[1px] h-[3px] w-full overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                />
              </div>
            <ul className="mt-4 space-y-3 text-black/60 text-sm">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">How It Work</a></li>
              <li><a href="#">Chrome Extension</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-black text-lg leading-none">Lets Try out</h4>
            <div className="relative mt-[1px] h-[3px] w-full overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                />
              </div>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl text-sm font-medium"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
                alt="Chrome"
                className="w-5 h-5"
              />
              Get it on Chrome Store
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-black/50 text-sm mt-16">
          Copyright © 2026 DataGen – An ObserveNow Product
        </div>
      </div>
    </footer>
  );
};

export default Footer;
