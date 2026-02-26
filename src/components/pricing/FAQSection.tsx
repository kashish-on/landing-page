import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ChevronDownIcon from "@/assets/chevron-down.svg";
import ChevronUpIcon from "@/assets/chevron-up.svg";
import { NavLink } from "../NavLink";

const faqs = [
  {
    question: "What does my subscription include?",
    answer: "Your plan gives you access to verified CXO contacts, AI-powered lead recommendations, account list enrichment, and seamless integration features.",
  },
  {
    question: "How often is the data updated?",
    answer: "Our data is continuously verified and updated to ensure accuracy. We run regular enrichment cycles to keep contact details, job roles, and company data current.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 7-day free trial with 20 credits so you can experience ObserveNow with no commitment and no credit card required.",
  },
  {
    question: "How secure is my data?",
    answer: "We take data security seriously. All data is encrypted in transit and at rest, and we follow industry-standard security practices to protect your information.",
  },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="pt-8 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-3 mt-4"
        >
          <span className="section-badge border border-[#470277] px-3 py-1">
            FAQs
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="font-sora text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
            Frequently Asked <span className="text-[#72339F]/80">Questions</span>
          </h1>
        </motion.div>

        <p className="font-sora text-muted-foreground text-base max-w-2xl mx-auto mb-6">
          Learn how ObserveNow helps you find, reach, and convert the right prospects.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
        <NavLink to="/contact">
          <Button size="lg" className="btn-gradient text-primary-foreground px-8 py-6 text-base group shadow-violet">
            HAVE MORE DOUBTS? CONNECT WITH US.
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </NavLink>
        </motion.div>

        <Accordion type="single" collapsible className="w-full text-left space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="w-full rounded-2xl border-none bg-[#72339F]/10 px-6"
            >
              {/* <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline"> */}
              <AccordionTrigger className="group flex w-full items-center justify-between gap-4 px-6 py-4 text-left hover:no-underline [&>svg]:hidden">
                {/* {faq.question} */}
                {/* Question text */}
  <span className="text-base font-semibold text-foreground text-left">
    {faq.question}
  </span>

     {/* Custom Toggle */}
  <span className="ml-auto relative flex h-9 w-9 items-center justify-center rounded-full">
    {/* Down Arrow (Closed State) */}
    <img
      src={ChevronDownIcon}
      alt="open"
      className="absolute h-9 w-9 transition-all duration-200 
                 opacity-100 scale-100 
                 group-data-[state=open]:opacity-0 
                 group-data-[state=open]:scale-75"
    />

    {/* Up Arrow (Open State) */}
    <img
      src={ChevronUpIcon}
      alt="close"
      className="absolute h-9 w-9 transition-all duration-200 
                 opacity-0 scale-75 
                 group-data-[state=open]:opacity-100 
                 group-data-[state=open]:scale-100"
    />
  </span>
              </AccordionTrigger>
              <AccordionContent className="-mt-1 ml-7 pl-0 pr-12 text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
       
        {/* CTA */}
        <div className="relative max-w-5xl mx-auto rounded-[28px] bg-[#7C4DA6] text-white px-10 py-12 overflow-hidden mt-16">
          <motion.div className="absolute -top-4 left-48 w-[110px] h-[110px] bg-white/10 rounded-full"
           animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div className="absolute -top-2 -right-12 w-[110px] h-[110px] bg-white/10 rounded-full" animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

          <motion.div className="absolute -bottom-12 right-1 w-[110px] h-[110px] bg-white/10 rounded-full" animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

          <motion.div className="absolute -bottom-12 -left-9 w-[110px] h-[110px] bg-white/10 rounded-full" animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}/>
          

          <h3 className="font-sora text-2xl md:text-3xl font-semibold mb-2">
            Smarter Prospecting Starts Here
          </h3>

          <p className="font-sora text-white/80 max-w-2xl mx-auto text-sm mb-6">
            Try ObserveNow free and access verified contacts, intelligent filters, and real-time insights in minutes.
          </p>

         <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-base font-semibold group shadow-lg"
            >
              <a href="https://dashboard.observenow.ai/login" className="flex items-center gap-2">
              GET STARTED
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
