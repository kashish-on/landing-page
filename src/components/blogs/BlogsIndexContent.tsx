import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { blogPosts, featuredPost } from "./blogData";

const BlogsIndexContent = () => {
  const remainingPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug);

  return (
    <div className="pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72339F]">
            {featuredPost.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1230] sm:text-4xl">
            {featuredPost.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#5B5570] sm:text-base">
            {featuredPost.subtitle}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <BlogCard post={featuredPost} featured />
        </motion.div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
        <div className="space-y-6">
          {remainingPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * (index + 1) }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsIndexContent;
