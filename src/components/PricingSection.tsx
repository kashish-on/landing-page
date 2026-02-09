// import { ArrowRight, Check, DollarSign, Diamond, Crown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";


// const plans = [
//   {
//     name: "Starter Plan",
//     icon: DollarSign,
//     price: "INR 2083",
//     period: "Per Month",
//     description: "Exclusive of Taxes. Billed yearly.",
//     target: "Ideal for SME's and Small Business",
//     features: [
//       "LinkedIn profile enrichment",
//       "Email & Phone Verification",
//       "Chrome Extension Access",
//       "3200 Credits",
//       "12 Months Validity",
//       "Up to 1 individual users",
//       "CRM Contact Management",
//     ],
//     popular: false,
//     buttonVariant: "outline" as const,
//   },
//   {
//     name: "Standard Plan",
//     icon: Diamond,
//     price: "INR 5833",
//     period: "Per Month",
//     description: "Exclusive of Taxes. Billed yearly.",
//     target: "Ideal for MSME's and Digital Native Startups",
//     features: [
//       "All Basic Feature",
//       "AI Analytics",
//       "Chrome Extension Access",
//       "11000 Credits",
//       "12 Months validity",
//       "Up to 3 individual users",
//       "Email support",
//     ],
//     popular: true,
//     buttonVariant: "default" as const,
//   },
//   {
//     name: "Business Plan",
//     icon: Crown,
//     price: "INR 11916",
//     period: "Per Month",
//     description: "Exclusive of Taxes. Billed yearly.",
//     target: "Ideal for Enterprises Companies",
//     features: [
//       "All Basic Feature",
//       "AI recommendations and Analytics",
//       "Up to 5 individual users",
//       "24500 Credits",
//       "Task management",
//       "12 Months Validity",
//       "Email / Chat support",
//     ],
//     popular: false,
//     buttonVariant: "outline" as const,
//   },
// ];

// const PricingSection = () => {
//   return (
//     <section id="pricing" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Badge */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-8"
//         >
//           <span className="section-badge">Our Pricing</span>
//         </motion.div>

//         {/* Heading */}
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
//         >
//           <span className="italic">Starter Plan</span> – Perfect for
//           <br />
//           <span className="violet-gradient-text">Growing Teams</span>
//         </motion.h2>
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-center text-muted-foreground max-w-3xl mx-auto mb-16"
//         >
//           Get reliable data extraction and verified leads without the complexity. Designed for startups and small businesses and Enterprises this plan helps you generate high-quality leads and kickstart your growth journey with ease.
//         </motion.p>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               whileHover={{ y: -10 }}
//               className={`relative bg-card rounded-3xl p-8 border-2 transition-all hover:shadow-card-lg ${
//                 plan.popular ? "border-primary shadow-violet" : "border-border hover:border-primary/30"
//               }`}
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                   <span className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-2 rounded-full">
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
//                 <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
//                   <plan.icon className="w-5 h-5 text-primary" />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <span className="text-4xl font-bold text-foreground">{plan.price}</span>
//                 <span className="text-muted-foreground ml-2">{plan.period}</span>
//               </div>

//               <p className="text-sm text-muted-foreground mb-1">{plan.description}</p>
//               <p className="text-sm text-muted-foreground mb-6">{plan.target}</p>

//               <div className="border-t border-border pt-6 mb-6">
//                 <ul className="space-y-4">
//                   {plan.features.map((feature, featureIndex) => (
//                     <motion.li 
//                       key={featureIndex} 
//                       initial={{ opacity: 0, x: -10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.3 + featureIndex * 0.05 }}
//                       className="flex items-center gap-3"
//                     >
//                       <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
//                       <span className="text-sm text-foreground">{feature}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               <Button
//                 className={`w-full group ${
//                   plan.popular
//                     ? "btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet"
//                     : "bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all"
//                 }`}
//                 variant={plan.buttonVariant}
//               >
//                 GET STARTED
//                 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;

// import { ArrowRight, Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// import StarterIcon from "@/assets/starter.svg";
// import BusinessIcon from "@/assets/business.svg";
// import EnterpriseIcon from "@/assets/enterprise.svg";

// const plans = [
//   {
//     name: "Starter",
//     icon: StarterIcon,
//     subtitle: "3,400 credits per year",
//     price: "₹2,083",
//     period: "/month",
//     billed: "Billed annually",
//     bottomPrice: "₹24,999 / year + taxes",
//     features: [
//       "LinkedIn profile enrichment",
//       "Email & phone verification",
//       "Chrome extension access",
//       "CRM contact management",
//       "Basic support",
//     ],
//     popular: false,
//   },
//   {
//     name: "Business",
//     icon: BusinessIcon,
//     subtitle: "11,000 credits per year",
//     price: "₹5,833",
//     period: "/month",
//     billed: "Billed annually",
//     bottomPrice: "₹69,999 / year + taxes",
//     features: [
//       "LinkedIn profile enrichment",
//       "Email & phone verification",
//       "Chrome extension access",
//       "CRM contact management",
//       "Priority support",
//     ],
//     popular: true,
//   },
//   {
//     name: "Enterprise",
//     icon: EnterpriseIcon,
//     subtitle: "24,500 credits per year",
//     price: "₹11,916",
//     period: "/month",
//     billed: "Billed annually",
//     bottomPrice: "₹142,999 / year + taxes",
//     features: [
//       "LinkedIn profile enrichment",
//       "Email & phone verification",
//       "Chrome extension access",
//       "CRM contact management",
//       "Dedicated account manager",
//       "Premium support",
//     ],
//     popular: false,
//   },
// ];

// const PricingSection = () => {
//   return (
//     <section id="pricing" className="py-24 bg-background">
//       <div className="container mx-auto px-4">

//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold">
//             Simple, Transparent <span className="violet-gradient-text">Pricing</span>
//           </h2>
//           <p className="text-muted-foreground mt-3">
//             Choose the plan that fits your growth stage.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`relative bg-white rounded-3xl border transition-all overflow-hidden ${
//                 plan.popular
//                   ? "border-[#72339F] shadow-[0_20px_60px_rgba(114,51,159,0.25)]"
//                   : "border-border"
//               }`}
//             >
//               {/* MOST POPULAR STRIP */}
//               {plan.popular && (
//                 <div
//     className="absolute left-[-1px] right-[-1px] -top-[1px] h-10 btn-gradient text-white text-xs font-semibold text-center rounded-none z-20 shadow-md"
//   >
//     ✦ MOST POPULAR
//   </div>
//               )}


//               <div className="p-8 pt-12">

//                 {/* ICON */}
//                 <div className="w-12 h-12 mt-1 rounded-full bg-violet-100 flex items-center justify-center mb-4">
//                   <img src={plan.icon} alt={plan.name} className="w-12 h-12" />
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="text-xl font-semibold">{plan.name}</h3>
//                 <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>

//                 {/* PRICE */}
//                 <div className="flex items-end gap-1 mb-1">
//                   <span className="text-4xl font-bold">{plan.price}</span>
//                   <span className="text-muted-foreground">{plan.period}</span>
//                 </div>
//                 <p className="text-sm text-muted-foreground mb-6">{plan.billed}</p>

//                 {/* FEATURES */}
//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-3 text-sm">
//                       <Check className="w-4 h-4 text-green-500" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* BUTTON */}
//                 <Button
//                   className={`w-full py-6 text-base ${
//                     plan.popular
//                       ? "btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet"
//                       : "bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all"
//                   }`}
//                 >
//                   Get Started <ArrowRight className="ml-2 w-4 h-4" />
//                 </Button>

//                 {/* BOTTOM PRICE */}
//                 <p className="text-xs text-muted-foreground text-center mt-4">
//                   {plan.bottomPrice}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;

import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import UsersIcon from "@/assets/users.svg";
import CreditsIcon from "@/assets/credits.svg";
import MailIcon from "@/assets/mail.svg";
import PhoneIcon from "@/assets/phone.svg";

import StarterIcon from "@/assets/starter.svg";
import BusinessIcon from "@/assets/business.svg";
import EnterpriseIcon from "@/assets/enterprise.svg";

const plans = [
  {
    name: "Starter",
    icon: StarterIcon,
    subtitle: "3,400 credits per year",
    price: "₹2,083",
    period: "/month",
    billed: "Billed annually",
    bottomPrice: "₹24,999 / year + taxes",
    users: "1 User",
    upfront: "All credits granted upfront",
    features: [
      "LinkedIn profile enrichment",
      "Email & phone verification",
      "Chrome extension access",
      "CRM contact management",
      "Basic support",
    ],
    popular: false,
  },
  {
    name: "Business",
    icon: BusinessIcon,
    subtitle: "11,000 credits per year",
    price: "₹5,833",
    period: "/month",
    billed: "Billed annually",
    bottomPrice: "₹69,999 / year + taxes",
    users: "Up to 3 Users",
    upfront: "All credits granted upfront",
    features: [
      "LinkedIn profile enrichment",
      "Email & phone verification",
      "Chrome extension access",
      "CRM contact management",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: EnterpriseIcon,
    subtitle: "24,500 credits per year",
    price: "₹11,916",
    period: "/month",
    billed: "Billed annually",
    bottomPrice: "₹142,999 / year + taxes",
    users: "Up to 5 Users",
    upfront: "All credits granted upfront",
    features: [
      "LinkedIn profile enrichment",
      "Email & phone verification",
      "Chrome extension access",
      "CRM contact management",
      "Dedicated account manager",
      "Premium support",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, Transparent <span className="violet-gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Choose the plan that fits your growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl border transition-all overflow-hidden ${
                plan.popular
                  ? "border-[#72339F] shadow-[0_20px_60px_rgba(114,51,159,0.25)]"
                  : "border-border"
              }`}
            >
              {/* MOST POPULAR STRIP */}
              {plan.popular && (
                <div className="absolute left-[-1px] right-[-1px] -top-[1px] h-10 btn-gradient text-white text-xs font-semibold text-center rounded-none z-20 shadow-md">
                  ✦ MOST POPULAR
                </div>
              )}

              <div className="p-8 pt-12">

                {/* ICON */}
                <div className="w-12 h-12 mt-1 rounded-full bg-violet-100 flex items-center justify-center mb-4">
                  <img src={plan.icon} alt={plan.name} className="w-12 h-12" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>

                {/* PRICE */}
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.billed}</p>

                {/* Divider 1 */}
                <div className="my-5 h-px w-full bg-muted/60" />

                {/* EXTRA INFO */}
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
    <img src={UsersIcon} alt="Users" className="w-4 h-4" />
    {plan.users}
  </div>
  <div className="flex items-center gap-2">
    <img src={CreditsIcon} alt="Credits" className="w-4 h-4" />
    {plan.upfront}
  </div>
                </div>

                {/* Divider 2 */}
                <div className="my-5 h-px w-full bg-muted/60" />

                {/* REVEAL COST ROWS */}
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
      <img src={MailIcon} alt="Email" className="w-4 h-4" />
      Reveal contact's emails
    </span>
                    <span className="text-foreground">1 credit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
      <img src={PhoneIcon} alt="Phone" className="w-4 h-4" />
      Reveal contact's phones
    </span>
                    <span className="text-foreground">4 credits</span>
                  </div>
                </div>

                {/* EVERYTHING INCLUDED */}
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">
                  Everything included:
                </p>

                {/* FEATURES */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <Button
                  className={`w-full py-6 text-base ${
                    plan.popular
                      ? "btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet"
                      : "bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all"
                  }`}
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                {/* BOTTOM PRICE */}
                <p className="text-xs text-muted-foreground text-center mt-4">
                  {plan.bottomPrice}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
