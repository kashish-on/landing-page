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
  { name: "Discord", logo: discordLogo },
  { name: "Whatsapp", logo: whatsappLogo },
  { name: "Zoom", logo: zoomLogo },
  { name: "Github", logo: githubLogo },
  { name: "Shopify", logo: shopifyLogo },
  { name: "Mailchimp", logo: mailchimpLogo },
  { name: "Google Drive", logo: driveLogo },
  { name: "Notion", logo: notionLogo },
];

const positions = [
  // Top center
  { top: "6%", left: "43%" },   // Slack
  { top: "6%", left: "55%" },   // Dropbox

  // Upper arc
  { top: "22%", left: "20%" },  // LinkedIn
  { top: "22%", left: "32%" },  // Hubspot
  { top: "22%", left: "66%" },  // Discord
  { top: "22%", left: "78%" },  // Whatsapp

  // Mid arc
  { top: "49%", left: "12%" },  // Zoom
  { top: "49%", left: "26%" },  // Github
  { top: "49%", left: "70%" },  // Shopify
  { top: "49%", left: "84%" },  // Mailchimp

  // Bottom arc
  { top: "76%", left: "18%" },  // Google Drive
  { top: "76%", left: "78%" },  // Notion
];


const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-violet-50/30">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Floating Integration Cards */}
          <div className="relative h-[520px] mb-8">
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
                    height: "130px",
                  }}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 bg-white shadow-sm">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {integration.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <span className="section-badge">Our Toolset</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
          >
            Technologies Behind Our
            <br />
            <span className="violet-gradient-text italic">Solutions</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-muted-foreground max-w-2xl mx-auto mb-8"
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
              START YOUR FREE TRIAL
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;




// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// const integrations = [
//   { name: "Slack", icon: "🔔", color: "bg-card" },
//   { name: "Dropbox", icon: "📦", color: "bg-card" },
//   { name: "LinkedIn", icon: "in", color: "bg-blue-600", isText: true },
//   { name: "Hubspot", icon: "🔸", color: "bg-card" },
//   { name: "Discord", icon: "💬", color: "bg-indigo-500" },
//   { name: "Whatsapp", icon: "📱", color: "bg-green-500" },
//   { name: "Zoom", icon: "📹", color: "bg-blue-500" },
//   { name: "Github", icon: "🐙", color: "bg-card" },
//   { name: "Shopify", icon: "🛒", color: "bg-green-600" },
//   { name: "Mailchimp", icon: "🐵", color: "bg-card" },
//   { name: "Google Drive", icon: "📁", color: "bg-card" },
//   { name: "Notion", icon: "📝", color: "bg-card" },
// ];

// const positions = [
//   { top: "5%", left: "40%" },
//   { top: "5%", left: "52%" },
//   { top: "20%", left: "20%" },
//   { top: "20%", left: "32%" },
//   { top: "20%", left: "60%" },
//   { top: "20%", left: "72%" },
//   { top: "40%", left: "10%" },
//   { top: "40%", left: "25%" },
//   { top: "40%", left: "68%" },
//   { top: "40%", left: "82%" },
//   { top: "60%", left: "5%" },
//   { top: "60%", left: "85%" },
// ];

// const IntegrationsSection = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-background to-violet-50/30">
//       <div className="container mx-auto px-4">
//         <div className="relative">
//           {/* Floating Integration Cards */}
//           <div className="relative h-80 mb-8">
//             {integrations.map((integration, index) => {
//               const pos = positions[index % positions.length];
//               const isLightBg = integration.color === "bg-card";
              
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.05 }}
//                   animate={{ y: [0, -10, 0] }}
//                   className="absolute bg-card rounded-2xl p-4 shadow-card border border-border hover:shadow-card-lg transition-shadow cursor-pointer"
//                   style={{
//                     top: pos.top,
//                     left: pos.left,
//                     animationDelay: `${index * 0.2}s`,
//                   }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <div className={`w-12 h-12 ${integration.color} rounded-xl flex items-center justify-center text-2xl mb-2 shadow-sm ${!isLightBg ? 'text-white' : ''}`}>
//                     {integration.isText ? (
//                       <span className="text-lg font-bold text-white">in</span>
//                     ) : (
//                       integration.icon
//                     )}
//                   </div>
//                   <span className="text-sm font-medium text-foreground">{integration.name}</span>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Badge */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex justify-center mb-8"
//           >
//             <span className="section-badge">Our Toolset</span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
//           >
//             Technologies Behind Our
//             <br />
//             <span className="violet-gradient-text italic">Solutions</span>
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-center text-muted-foreground max-w-2xl mx-auto mb-8"
//           >
//             Unlike generic data tools, DataGen is powered by advanced tech that ensures accuracy, freshness, and scalability. Experience the difference with our verified lead engines and updated CXO databases.
//           </motion.p>

//           {/* CTA Button */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="flex justify-center"
//           >
//             <Button size="lg" className="btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet">
//               START YOUR FREE TRIAL
//               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntegrationsSection;
