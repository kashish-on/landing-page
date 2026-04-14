import { CalendarDays, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

type BlogsHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  image?: string;
  readTime?: string;
  publishedAt?: string;
};

const BlogsHero = ({ title, subtitle, eyebrow, image, readTime, publishedAt }: BlogsHeroProps) => {
  const renderTitle = () => {
    const highlightTerms = ["Bad Data", "Big Data", "B2B", "in", "Cold Outreach", "Data Accuracy"];
    const regex = new RegExp(
      `(${highlightTerms
        .map((term) => {
          const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          return term === "in" ? `\\b${escaped}\\b` : escaped;
        })
        .join("|")})`,
      "gi"
    );

    return title.split(regex).map((part, index) => {
      const match = highlightTerms.find((term) => term.toLowerCase() === part.toLowerCase());
      return match ? (
        <span key={index} className="font-sora text-[#72339F]/80">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(114,51,159,0.12),rgba(255,255,255,0.92)_55%,rgba(255,255,255,1))]" />
      <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#48B4E1]/20 blur-3xl" />
      <div className="absolute right-12 top-20 h-32 w-32 rounded-full bg-[#72339F]/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6">
        {eyebrow ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 mb-3 flex justify-center"
          >
            <span className="section-badge border border-[#470277]">{eyebrow}</span>
          </motion.div>
        ) : null}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="font-sora max-w-4xl text-4xl font-bold leading-tight text-[#1A1230] sm:text-5xl md:text-center lg:text-6xl"
        >
          {renderTitle()}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-[#6D6781] sm:flex-row"
        >
          {readTime ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#72339F]/10 bg-white/95 px-4 py-2 text-sm text-[#72339F]">
              <Clock3 className="h-4 w-4" />
              {readTime}
            </span>
          ) : null}
          {publishedAt ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#72339F]/10 bg-white/95 px-4 py-2 text-sm text-[#72339F]">
              <CalendarDays className="h-4 w-4" />
              {publishedAt}
            </span>
          ) : null}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-8 max-w-3xl text-base leading-8 text-[#5B5570] sm:text-lg"
        >
          {subtitle}
        </motion.p>

        {image ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-12 w-full"
          >
            <div className="overflow-hidden rounded-[32px] border border-[#72339F]/10 bg-white shadow-[0_30px_90px_rgba(114,51,159,0.08)]">
              <img src={image} alt={title} className="h-[320px] w-full object-cover sm:h-[450px]" />
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default BlogsHero;
