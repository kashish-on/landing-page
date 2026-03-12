// import { motion } from "framer-motion";
// // import { Heart, FileText, Shield, TrendingUp } from "lucide-react";

// import CareSvg from "@/assets/care.svg";
// import ClaritySvg from "@/assets/clarity.svg";
// import TrustSvg from "@/assets/trust.svg";
// import DriveSvg from "@/assets/drive.svg";

// const values = [
//   {
//     svg: CareSvg,
//     title: "Customers Come First",
//     description: "We design with empathy to help users succeed.",
//   },
//   {
//     svg: ClaritySvg,
//     title: "Smart Data Decisions",
//     description: "Accurate data and AI guide practical, reliable actions.",
//   },
//   {
//     svg: TrustSvg,
//     title: "Transparent Innovation",
//     description: "Clear processes, honest outcomes, no black-box systems.",
//   },
//   {
//     svg: DriveSvg,
//     title: "Fast Impact Growth",
//     description: "Move quickly, deliver results, and improve continuously.",
//   },
// ];

// const CoreValues = () => {
//   return (
//     <section className="relative gradient-hero-bg pt-4 pb-20 bg-[#470277]/5 text-center overflow-hidden">
//       <div className="container mx-auto px-4 max-w-5xl text-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex justify-center mb-8 mt-10"
//         >
//           <span className="section-badge border border-[#470277]">
//             Core Values
//           </span>
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-center max-w-4xl mx-auto mb-8"
//         >
//           <h1 className="text-4xl font-sora md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
//             What we <span className="text-[#72339F]/80 font-sora">Stand for</span>
//           </h1>
//         </motion.div>

//         <p className="font-sora text-sm sm:text-base text-muted-foreground max-w-md sm:max-w-4xl leading-relaxed px-2 mx-auto mb-12">
//           Guiding how we build AI-powered intelligence that helps teams connect faster, sell smarter, and grow with confidence.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
//           {values.map((value) => (
//             <div key={value.title} className="flex flex-col items-center">
//               {/* Circle with icon and label */}
//               <div className="mb-4">
//   <img
//     src={value.svg}
//     alt={value.title}
//     className="w-32 sm:w-[220px]"
//   />
// </div>
 
//             {/* Text aligned beside the line */}
//   <div className="mt-0 sm:mt-[-110px] ml-0 sm:ml-[70px] text-left max-w-[220px]">
//     <h3 className="text-sm sm:text-[12px] font-semibold text-foreground mb-1">
//       {value.title}
//     </h3>
//     <p className="text-xs sm:text-[10px] text-muted-foreground text-justify leading-[1.6]">
//       {value.description}
//     </p>
//   </div>

//               {/* <h3 className="font-bold text-foreground mt-2 mb-1">{value.title}</h3>
//               <p className="text-sm text-muted-foreground">{value.description}</p> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreValues;

import { motion } from "framer-motion";

import CareSvg from "@/assets/care.svg";
import ClaritySvg from "@/assets/clarity.svg";
import TrustSvg from "@/assets/trust.svg";
import DriveSvg from "@/assets/drive.svg";

import Customer from "@/assets/customer.png";
import Smart from "@/assets/smart.png";
import Transparent from "@/assets/transparent.png";
import Fast from "@/assets/fast.png";

const values = [
  {
    svg: CareSvg,
    png: Customer,
    title: "Customers Come First",
    description: "We design with empathy to help users succeed.",
    color: "#470277",
  },
  {
    svg: ClaritySvg,
    png: Smart,
    title: "Smart Data Decisions",
    description: "Accurate data and AI guide practical, reliable actions.",
    color: "#0B87BA",
  },
  {
    svg: TrustSvg,
    png: Transparent,
    title: "Transparent Innovation",
    description: "Clear processes, honest outcomes, no black-box systems.",
    color: "#2D469C",
  },
  {
    svg: DriveSvg,
    png: Fast,
    title: "Fast Impact Growth",
    description: "Move quickly, deliver results, and improve continuously.",
    color: "#72339F",
  },
];

const CoreValues = () => {
  return (
    <section className="relative gradient-hero-bg pt-4 pb-20 bg-[#470277]/5 text-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            Core Values
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl font-sora md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            What we <span className="text-[#72339F]/80 font-sora">Stand for</span>
          </h1>
        </motion.div>

        <p className="font-sora text-sm sm:text-base text-muted-foreground max-w-md sm:max-w-4xl leading-relaxed px-2 mx-auto mb-12">
          Guiding how we build AI-powered intelligence that helps teams connect faster, sell smarter, and grow with confidence.
        </p>

        {/* ================= MOBILE CARDS ================= */}
        <div className="sm:hidden flex flex-col items-center gap-4 mb-12">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white rounded-xl border-l-4 shadow-sm p-5 flex gap-4 text-left w-full max-w-[320px]"
              style={{ borderColor: value.color }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: `${value.color}15` }}
              >
                <img src={value.png} alt={value.title} className="w-11 h-11" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3
                  className="text-sm font-bold mb-1"
                  style={{ color: value.color }}
                >
                  {value.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Step number */}
              <span className="text-xs text-muted-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP LAYOUT (UNCHANGED) ================= */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col items-center">

              {/* Icon */}
              <div className="mb-4">
                <img
                  src={value.svg}
                  alt={value.title}
                  className="w-32 sm:w-[220px]"
                />
              </div>

              {/* Text */}
              <div className="mt-0 sm:mt-[-110px] ml-0 sm:ml-[70px] text-left max-w-[220px]">
                <h3 className="text-sm sm:text-[12px] font-semibold text-foreground mb-1">
                  {value.title}
                </h3>

                <p className="text-xs sm:text-[10px] text-muted-foreground text-justify leading-[1.6]">
                  {value.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;