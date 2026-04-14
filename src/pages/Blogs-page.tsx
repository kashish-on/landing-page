import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import GridPattern from "@/assets/white-grid.svg";
import blogImage from "@/assets/blog1.png";
import blogImage2 from "@/assets/blog2.png";
import blogImage3 from "@/assets/blog3.png";
import userIcon from "@/assets/user.svg";

const blogPosts = [
  {
    id: 1,
    slug: "hidden-cost-of-bad-data",
    title: "The Hidden Cost of Bad Data in B2B and How to Fix It Fast",
    excerpt:
      "In B2B organizations, data is often treated as an asset. But when the data is inaccurate, outdated or incomplete, it quickly turns into a liability, impacting everything from outreach to revenue.",
    readTime: "10 mins read",
    date: "April 9, 2026",
    author: "ObserveNow.AI Editorial Staff",
    authorImage: userIcon,
    image: blogImage,
  },
  {
    id: 2,
    slug: "why-40-percent-b2b-outreach-fails",
    title: "Why 40% of B2B Outreach Fails And How Data Enrichment Fixes It",
    excerpt:
      "Studies show nearly 40% of B2B outreach fails due to poor data. Discover the core reasons and how data enrichment transforms results.",
    readTime: "6 min read",
    date: "April 7, 2026",
    author: "ObserveNow.AI Editorial Staff",
    authorImage: userIcon,
    image: blogImage2,
  },
  {
    id: 3,
    slug: "from-cold-outreach-to-warm-conversations",
    title: "From Cold Outreach to Warm Conversations: The Role of Data Accuracy",
    excerpt:
      "In B2B marketing and sales, outreach has never been easier to execute yet harder to convert. The core issue is not effort or intent; it is data accuracy.",
    readTime: "6 min read",
    date: "April 4, 2026",
    author: "ObserveNow.AI Editorial Staff",
    authorImage: userIcon,
    image: blogImage3,
  },
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="relative overflow-hidden bg-[#470277]/5 pt-8 pb-16 text-center md:pt-20 md:pb-15">
        <div className="pointer-events-none absolute inset-0 flex translate-y-48 items-center justify-center">
          <div
            className="hidden h-[500px] w-[900px] rounded-full blur-[50px] opacity-100 sm:block"
            style={{
              background:
                "radial-gradient(circle at center, rgba(71,2,119,0.35) 0%, rgba(71,2,119,0.18) 35%, rgba(71,2,119,0.08) 55%, rgba(71,2,119,0) 70%)",
            }}
          />
        </div>

        <img
          src={GridPattern}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 mb-3 flex justify-center"
          >
            <span className="section-badge border border-[#470277]">Our Blogs</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-8 max-w-3xl text-center"
          >
            <h1 className="font-sora text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-center md:text-5xl lg:text-6xl">
              Ideas That Drive <span className="font-sora text-[#72339F]/80">Growth</span>
            </h1>
          </motion.div>

          <p className="mx-auto mb-8 max-w-3xl font-sora text-base text-muted-foreground sm:text-sm md:text-lg">
            Stay ahead with expert insights, industry trends, and actionable strategies. Discover how data,
            technology, and smart outreach can help you build stronger pipelines and close more deals.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-16 mb-3 flex justify-center"
            >
              <span className="section-badge border border-[#470277]">Insights & Resources</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mb-8 max-w-3xl text-center"
            >
              <h2 className="font-sora text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-center md:text-5xl lg:text-6xl">
                Inside Product <span className="font-sora text-[#72339F]/80">Insights</span>
              </h2>
            </motion.div>

            <p className="mx-auto mb-14 max-w-3xl font-sora text-base text-muted-foreground sm:text-sm md:mb-16 md:text-lg">
              Product insights by ObserveNow is your go-to resource for actionable ideas, expert-backed tips,
              and data-driven strategies. From product development and use case exploration to growth and
              innovation, explore how modern teams build, refine, and scale products that deliver real impact,
              all in one place.
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex w-full flex-col gap-6 rounded-[26px] border border-[#72339F]/10 bg-[#F1EAF7] p-5 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(114,51,159,0.12)] sm:flex-row sm:items-center sm:p-6 lg:gap-10"
              >
                <div className="w-full shrink-0 sm:w-[260px] md:w-[290px] lg:w-[320px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-52 w-full rounded-[18px] object-cover sm:h-[210px] lg:h-[220px]"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <span className="mb-3 inline-flex w-fit rounded-full bg-[#B99AD9] px-3 py-1 text-[11px] font-medium text-white">
                    AI Insights
                  </span>

                  <h3 className="mb-3 text-xl font-semibold leading-snug text-foreground md:text-3xl md:leading-[1.2]">
                    {post.title}
                  </h3>

                  <p className="mb-5 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {post.excerpt}{" "}
                    <Link to={`/blogs/${post.slug}`} className="font-medium text-[#72339F] hover:underline">
                      Read More
                    </Link>
                  </p>

                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{post.readTime}</span>
                    <span>|</span>
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="font-medium text-[#72339F]">{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-lg"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="icon"
                className={`h-9 w-9 rounded-lg ${page === currentPage ? "btn-gradient text-primary-foreground" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-lg"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
