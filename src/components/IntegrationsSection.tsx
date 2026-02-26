import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import slackLogo from "@/assets/slack.png";
import dropboxLogo from "@/assets/dropbox.png";
import linkedinLogo from "@/assets/linkedin.png";
import hubspotLogo from "@/assets/hubspot.png";
import discordLogo from "@/assets/discord.png";
import whatsappLogo from "@/assets/whatsapp.png";
import zoomLogo from "@/assets/zoom.png";
import githubLogo from "@/assets/github.png";
import shopifyLogo from "@/assets/shopify.png";
import mailchimpLogo from "@/assets/mailchimp.png";
import driveLogo from "@/assets/google-drive.png";
import notionLogo from "@/assets/notion.png";

const integrations = [
  { name: "Slack", logo: slackLogo },
  { name: "Dropbox", logo: dropboxLogo },
  { name: "LinkedIn", logo: linkedinLogo },
  { name: "Hubspot", logo: hubspotLogo },
  { name: "Discord", logo: discordLogo, scale: 1.5 },
  { name: "Whatsapp", logo: whatsappLogo, scale: 2 },
  { name: "Zoom", logo: zoomLogo, scale: 1.6 },
  { name: "Github", logo: githubLogo },
  { name: "Shopify", logo: shopifyLogo, scale: 2 },
  { name: "Mailchimp", logo: mailchimpLogo },
  { name: "Google Drive", logo: driveLogo },
  { name: "Notion", logo: notionLogo },
];

const positions = [
  // Top center
  { top: "4%", left: "40%" },   // Slack
  { top: "4%", left: "52%" },   // Dropbox

  // Upper arc
  { top: "25%", left: "17%" },  // LinkedIn
  { top: "25%", left: "29%" },  // Hubspot
  { top: "25%", left: "63%" },  // Discord
  { top: "25%", left: "75%" },  // Whatsapp

  // Mid arc
  { top: "56%", left: "9%" },  // Zoom
  { top: "56%", left: "21%" },  // Github
  { top: "56%", left: "72%" },  // Shopify
  { top: "56%", left: "84%" },  // Mailchimp

  // Bottom arc
  { top: "87%", left: "4%" },  // Google Drive
  { top: "87%", left: "89%" },  // Notion
];


const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-[#470277]/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">

          {/* Mobile Grid Layout */}
<div className="grid grid-cols-3 gap-4 md:hidden mb-12">
  {integrations.map((integration, index) => (
    <div
      key={index}
      className="bg-card rounded-2xl shadow-card border border-border flex items-center justify-center h-[90px]"
    >
      <img
        src={integration.logo}
        alt={integration.name}
        className="w-10 h-10 object-contain"
        style={{
          transform: `scale(${integration.scale ?? 1})`,
        }}
      />
    </div>
  ))}
</div>

          {/* Floating Integration Cards */}
          <div className="relative min-h-[420px] h-auto mb-8 hidden md:block">
            {integrations.map((integration, index) => {
              const pos = positions[index % positions.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  animate={{ y: [0, -10, 0] }}
                  className="absolute bg-card rounded-2xl shadow-card border border-border hover:shadow-card-lg transition-shadow cursor-pointer flex flex-col items-center justify-center"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    width: "110px",
                    height: "110px",
                  }}
                  whileHover={{ scale: 1.08 }}
                >
                  
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-11 h-11 object-contain "
                      style={{
    transform: `scale(${integration.scale ?? 1})`,
  }}
                    />
                  
                  {/* <span className="text-sm font-medium text-foreground text-center">
                    {integration.name}
                  </span> */}
                </motion.div>
              );
            })}
          </div>
        <div className="-mt-20">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-1"
          >
            <span className="section-badge mt-10 sm:-mt-10 mb-3 border border-[#470277] inline-block text-xs sm:text-sm md:text-base">Our Toolset</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4"
          >
            Technologies Behind Our
            <br />
            <span className="text-[#72339F]/80 font-sora">Solutions</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sora text-center text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8"
          >
            Unlike generic data tools, DataGen is powered by advanced tech that ensures accuracy, freshness, and scalability. Experience the difference with our verified lead engines and updated CXO databases.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <Button size="lg" className="btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet">
              <a href="https://dashboard.observenow.ai/signup" className="flex items-center gap-2">
              START YOUR FREE TRIAL
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
