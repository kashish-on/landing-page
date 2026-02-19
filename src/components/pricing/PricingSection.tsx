import { ChevronRight, Zap, Clock, Chrome, LayoutGrid, Users, Sparkles, Mail, Phone, Check, GraduationCap, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import FreeIcon from "@/assets/gift.svg";
import SpecialIcon from "@/assets/special.svg";

import CreditIcon from "@/assets/credit.svg";
import TimeIcon from "@/assets/time.svg";
import ChromeIcon from "@/assets/chrome.svg";
import UserIcon from "@/assets/users-p.svg";
import CrmIcon from "@/assets/CRM.svg";
import GiftIcon from "@/assets/free.svg";
import StudentIcon from "@/assets/student.svg";


import UsersIcon from "@/assets/users.svg";
import CreditsIcon from "@/assets/credits.svg";
import MailIcon from "@/assets/mail.svg";
import PhoneIcon from "@/assets/phone.svg";

import StarterIcon from "@/assets/starter.svg";
import BusinessIcon from "@/assets/business.svg";
import EnterpriseIcon from "@/assets/enterprise.svg";

const topPlans = [
  {
    badge: "START FREE - NO CREDIT CARD REQUIRED",
    badgeIcons: [FreeIcon],
    badgeBg: "bg-btn-gradient",
    name: "Free Trial",
    subtitle: "Experience ObserveNow with no commitment",
    price: "FREE",
    priceSub: "for 7 days",
    priceColor: "text-[#0B87BA]",
    features: [
      { icon: CreditIcon, text: "20 Credits" },
      { icon: TimeIcon, text: "7 Days Free" },
      { icon: ChromeIcon, text: "Chrome Extension" },
      { icon: CrmIcon, text: "CRM Dashboard" },
    ],
    btnText: "Try for Free",
    btnVariant: "outline" as const,
  },
  {
    badge: "SPECIAL PLAN",
    badgeIcons: [SpecialIcon],
    badgeBg: "bg-brand-violet",
    name: "Student Plan",
    subtitle: "Special offer for students - 3 months access",
    price: "₹10,000",
    priceSub: "for 3 months",
    priceColor: "text-[#470277]",
    features: [
      { icon: CreditIcon, text: "1,500 Credits" },
      { icon: TimeIcon, text: "3 Months Access" },
      { icon: UserIcon, text: "Single User" },
      { icon: ChromeIcon, text: "Chrome Extension" },
    ],
    btnText: "Get Started",
    btnVariant: "default" as const,
  },
];

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
    badge: "MOST POPULAR",
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
    <section className="pt-6 pb-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-3 mt-16"
        >
          <span className="section-badge border border-[#470277]">
            Our Pricing
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Starter Plan - Perfect for <span className="text-[#72339F]/80">Growing Teams</span>
          </h1>
        </motion.div>

        <p className="font-sora text-muted-foreground text-base max-w-5xl mx-auto mb-14">
          Get reliable data extraction and verified leads without the complexity. Designed for startups and small businesses and Enterprises
          this plan helps you generate high-quality leads and kickstart your growth journey with ease.
        </p>

        {/* Top Plans Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {topPlans.map((plan) => (
            <div key={plan.name} className="font-inter rounded-xl border border-border bg-card overflow-hidden text-left">
              <div className="font-inter bg-gradient-to-r from-[#5BB2E6] to-[#6E3CBC] text-white text-xs font-semibold py-2 px-4 flex items-center justify-center gap-2">
              <img src={plan.badgeIcons[0]} className="w-3.5 h-3.5" />
  <span className="uppercase tracking-wide">{plan.badge}</span>
</div>
              <div className="font-inter p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="font-inter flex items-center gap-3 mb-1">
                    <div className="font-inter bg-gradient-to-r from-[#5BB2E6] to-[#6E3CBC] items-center justify-center rounded-full">
  <img
    src={plan.name === "Free Trial" ? GiftIcon : StudentIcon}
    alt="Plan Icon"
    className="w-12 h-12"
  />
</div>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mt-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{plan.subtitle}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {plan.features.map((f) => (
  <div key={f.text} className="flex items-center gap-2 text-sm text-foreground">
    <img src={f.icon} alt="" className="w-4 h-4" />
    {f.text}
  </div>
))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className={`text-3xl font-extrabold font-inter ${plan.priceColor}`}>{plan.price}</span>
                  <span className="text-xs text-muted-foreground">{plan.priceSub}</span>
                  {/* <Button className="gradient-brand text-primary-foreground mt-2 rounded-full px-6">
                    {plan.btnText} <ChevronRight className="h-4 w-4 ml-1" />
                  </Button> */}
                  {/* <Button
  className={`mt-2 rounded-full px-6 ${
    plan.btnVariant === "outline"
      ? "btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet"
      : "bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all"
  }`}>
   {plan.btnText}
  <ChevronRight className="h-4 w-4 ml-1" />
</Button> */}

<Button
  asChild
  className={`mt-2 rounded-full ${
    plan.btnVariant === "outline"
      ? "btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet"
      : "bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all"
  }`}
>
  <a
    href={
      plan.name === "Free Trial"
        ? "https://dashboard.observenow.ai/signup"
        : "https://dashboard.observenow.ai/login"
    }
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    {plan.btnText}
    <ChevronRight className="h-4 w-4 ml-1" />
  </a>
</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Plans Row */}
        <div className="font-inter grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative font-inter bg-white rounded-3xl border transition-all overflow-hidden ${
                plan.popular
                  ? "border-2 border-[#470277] shadow-[0_8px_20px_rgba(71,2,119,0.35)]"
                  : "border border-border"
              }`}
            >
              {/* MOST POPULAR STRIP */}
              {plan.popular && (
                // <div className="absolute left-[1px] right-[1px] -top-[1px] h-10 btn-gradient text-white text-xs pointer-events-none font-semibold text-center rounded-t-[22px] rounded-none z-20 shadow-md flex items-center justify-center pt-1">
                //   ✦ MOST POPULAR
                // </div>
                 <div className="font-inter bg-gradient-to-r from-[#5BB2E6] to-[#6E3CBC] text-white text-xs font-semibold py-2 px-4 flex items-center justify-center gap-2">
  <Sparkles className="w-3.5 h-3.5" />
              {/* <img src={plan.badgeIcons[0]} className="w-3.5 h-3.5" /> */}
  <span className="font-inter uppercase tracking-wide">{plan.badge}</span>
</div>
              )}

              <div className="p-8 pt-12">

                {/* ICON */}
                <div className="font-inter w-12 h-12 mt-1 rounded-full bg-violet-100 flex items-center justify-center mb-4">
                  <img src={plan.icon} alt={plan.name} className="w-12 h-12" />
                </div>

                {/* TITLE */}
                <h3 className="font-inter text-xl font-bold text-left">{plan.name}</h3>
                <p className="font-inter text-sm text-muted-foreground mb-4 text-left">{plan.subtitle}</p>

                {/* PRICE */}
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-inter text-4xl font-bold">{plan.price}</span>
                  <span className="font-inter text-muted-foreground">{plan.period}</span>
                </div>
                <p className="font-inter text-sm text-muted-foreground text-left">{plan.billed}</p>

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
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3 text-left">
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
                {/* <Button
                  className={`w-full py-6 text-base ${
                    plan.popular
                      ? "btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet"
                      : "bg-[#72339F] text-white border border-[#72339F] hover:bg-[#6a2f93] hover:border-[#6a2f93] px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all"
                  }`}
                >
                  
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button> */}

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
