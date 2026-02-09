// src/components/LogoSection.tsx
import google from "@/assets/google.png";
import microsoft from "@/assets/microsoft.png";
import ibm from "@/assets/ibm.png";
import ntt from "@/assets/ntt.png";

const logos = [
  { src: google, alt: "Google" },
  { src: microsoft, alt: "Microsoft" },
  { src: ibm, alt: "IBM" },
  { src: ntt, alt: "NTT Data" },
];

const LogoSection = () => {
  return (
    <section className="relative z-20 -mt-10">
      <div className="w-full">
        <div className="mx-auto max-w-[1400px] bg-white/70 backdrop-blur-md rounded-2xl shadow-md py-6 px-6">

          {/* Trusted Badge */}
          <div className="flex justify-center mb-4">
            {/* <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-medium text-muted-foreground">
              ✨ Trusted by 500+ Fortune companies all over the world ✨
            </span> */}
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogoSection;
