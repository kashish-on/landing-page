// import { Lightbulb, GraduationCap, ThumbsUp, MessageCircle, Settings } from "lucide-react";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     number: "01",
//     icon: Lightbulb,
//     title: "Set up your account",
//     description: "Get started in minutes with a simple sign-up.",
//     color: "#0E8ECF", // Teal Blue
//   },
//   {
//     number: "02",
//     icon: GraduationCap,
//     title: "Install the Chrome Extension",
//     description: "Navigate smarter, directly from your browser.",
//     color: "#1177B9", // Blue
//   },
//   {
//     number: "03",
//     icon: ThumbsUp,
//     title: "Search Your Account List",
//     description: "Discover qualified leads with verified contacts and export instantly.",
//     color: "#1F5FBF", // Royal Blue
//   },
//   {
//     number: "04",
//     icon: MessageCircle,
//     title: "Track & Grow with AI",
//     description: "Monitor account analytics and unlock AI tailored recommendations.",
//     color: "#2D3F99", // Deep Blue
//   },
//   {
//     number: "05",
//     icon: Settings,
//     title: "Industry-Wise CXO Data",
//     description: "Pre-packaged, accurate, and ready to use.",
//     color: "#5A168A", // Purple
//   },
// ];

// const HowItWorksSection = () => {
//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Badge */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-8"
//         >
//           <span className="section-badge">How It Works</span>
//         </motion.div>

//         {/* Heading */}
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
//         >
//           Turn <span className="violet-gradient-text">Data into Leads</span> in 5 Easy Steps
//         </motion.h2>

//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
//         >
//           From defining your target filters to extracting, cleaning, and verifying data, our system organizes everything into ready-to-use lead lists.
//         </motion.p>

//         {/* Steps */}
//         <div className="flex flex-wrap justify-center gap-10 relative">
//           {steps.map((step, index) => (
//             <motion.div 
//               key={index} 
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               className="flex flex-col items-center w-44 group"
//             >
//               <div className="relative mb-6">
//                 {/* Background number */}
//                 <span className="absolute -top-6 -left-6 text-6xl font-bold text-muted/30">
//                   {step.number}
//                 </span>

//                 {/* Icon circle */}
//                 <motion.div 
//                   whileHover={{ scale: 1.1 }}
//                   className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
//                   style={{ backgroundColor: step.color }}
//                 >
//                   <step.icon className="w-8 h-8 text-white" />
//                 </motion.div>
//               </div>

//               <h4 className="font-semibold text-foreground text-center mb-2">
//                 {step.title}
//               </h4>

//               <p className="text-sm text-muted-foreground text-center">
//                 {step.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorksSection;

import { Lightbulb, GraduationCap, ThumbsUp, MessageCircle, Settings } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Set up your account",
    description: "Get started in minutes with a simple sign-up.",
    color: "#0E8ECF",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Install the Chrome Extension",
    description: "Navigate smarter, directly from your browser.",
    color: "#1177B9",
  },
  {
    number: "03",
    icon: ThumbsUp,
    title: "Search Your Account List",
    description: "Discover qualified leads with verified contacts and export instantly.",
    color: "#1F5FBF",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Track & Grow with AI",
    description: "Monitor account analytics and unlock AI tailored recommendations.",
    color: "#2D3F99",
  },
  {
    number: "05",
    icon: Settings,
    title: "Industry-Wise CXO Data",
    description: "Pre-packaged, accurate, and ready to use.",
    color: "#5A168A",
  },
];

const CurvedArrow = ({ direction }: { direction: "up" | "down" }) => {
  const isUp = direction === "up";

  return (
    <svg
      width={isUp ? 90 : 160}
      height="60"
      viewBox="0 0 90 60"
      fill="none"
      className="text-muted-foreground/70"
    >
      {isUp ? (
        <>
          {/* Curve going up */}
          <path
            d="M0 50 C30 50, 30 10, 90 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 5"
            fill="none"
          />
          {/* Arrow head */}
          <path
            d="M82 4 L90 10 L82 16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          {/* Curve going down */}
          <path
            d="M0 10 C30 10, 30 50, 90 50"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 5"
            fill="none"
          />
          {/* Arrow head */}
          <path
            d="M82 44 L90 50 L82 56"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
};


const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Turn <span className="violet-gradient-text">Data into Leads</span> in 5 Easy Steps
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-20">
          From defining your target filters to extracting, cleaning, and verifying data, our system organizes everything into ready-to-use lead lists.
        </p>

        {/* Steps */}
        <div className="flex justify-between items-start max-w-6xl mx-auto relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isUp = index % 2 === 1;
            const showArrow = index < steps.length - 1;

            return (
              <div
                key={index}
                className="relative flex flex-col items-center w-[200px]"
                style={{
                  marginTop: isUp ? "0px" : "80px",
                }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <span className="absolute -top-6 -left-6 text-6xl font-bold text-muted/20">
                    {step.number}
                  </span>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg relative z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <h4 className="font-semibold text-foreground text-center mb-2">
                  {step.title}
                </h4>

                <p className="text-sm text-muted-foreground text-center">
                  {step.description}
                </p>

                {/* Arrow */}
                {/* Arrow */}
{showArrow && (
  <div
    className="absolute pointer-events-none"
    style={{
      top: isUp ? "28px" : "52px",   // aligns with icon center
      left: "100%",
      marginLeft: isUp ? "-50px" : "-60px",           // small gap from icon
    }}
  >
    <CurvedArrow direction={isUp ? "down" : "up"} />
  </div>
)}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;




