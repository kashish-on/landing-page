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

        <div className="text-center mb-12">
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="section-badge border border-[#470277]">Our Pricing</span>
        </motion.div>
      
          <h2 className="font-sora text-4xl md:text-5xl font-bold">
            Starter Plan - Perfect for <br />
            <span className="text-[#72339F]/80 font-sora">Growing Teams</span>
          </h2>
          <p className="font-sora text-muted-foreground mt-4">
            Get reliable data extraction and verified leads without the complexity. Designed for startup and small businesses and Enterprises this plan helps you generate high-quality leads and kickstart your growth journey with ease.
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
                  ? "border-2 border-[#470277]/50 shadow-[0_8px_20px_rgba(71,2,119,0.35)]"
                  : "border border-border"
              }`}
            >
              {/* MOST POPULAR STRIP */}
              {plan.popular && (
                <div className="absolute left-[1px] right-[1px] -top-[1px] h-10 btn-gradient text-white text-xs pointer-events-none font-semibold text-center rounded-t-[22px] rounded-none z-20 shadow-md flex items-center justify-center pt-1">
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


                <Button
  asChild
  className={`w-full py-6 text-base ${
    plan.popular
      ? "btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet"
      : "bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all"
  }`}
>
  <a
    href="https://dashboard.observenow.ai/login"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2"
  >
    Get Started <ArrowRight className="ml-2 w-4 h-4" />
  </a>
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
