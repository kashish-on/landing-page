import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { BlogPost } from "./blogData";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  if (featured) {
    return (
      <Link
        to={`/blogs/${post.slug}`}
        className="group grid overflow-hidden rounded-[28px] border border-[#72339F]/10 bg-[#F5EEFB] shadow-[0_22px_70px_rgba(114,51,159,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(114,51,159,0.16)] lg:grid-cols-[1.2fr_1fr]"
      >
        <div className="relative min-h-[320px] overflow-hidden bg-[#EFE8F7] sm:min-h-[360px]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1230]/15 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
          <div>
            <span className="inline-flex rounded-full bg-[#F3ECFA] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#72339F]">
              {post.category}
            </span>
            <h3 className="mt-5 font-sora text-3xl font-bold leading-tight text-[#1A1230] sm:text-4xl">
              {post.title}
            </h3>
            <p className="mt-5 text-base leading-8 text-[#5B5570] sm:text-lg">
              {post.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[#6D6781] sm:text-base">
            <div className="flex items-center gap-3">
              <img
                src={post.authorImage}
                alt={post.author}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-[#5B5570]">{post.author}</p>
                <p className="text-xs">{post.readTime} · {post.publishedAt}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#72339F] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(114,51,159,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5a1d80]">
              Read more
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="group grid gap-6 overflow-hidden rounded-[28px] border border-[#72339F]/10 bg-[#F5EEFB] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#72339F]/20 hover:shadow-[0_18px_50px_rgba(114,51,159,0.14)] sm:grid-cols-[250px_1fr]"
    >
      <div className="overflow-hidden rounded-[22px] bg-white shadow-sm">
        <img
          src={post.image}
          alt={post.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
        />
      </div>

      <div className="flex flex-col justify-between gap-6">
        <div>
          <span className="inline-flex rounded-full bg-[#F3ECFA] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#72339F]">
            {post.category}
          </span>
          <h3 className="mt-4 font-sora text-2xl font-bold leading-tight text-[#1A1230] transition-colors duration-300 group-hover:text-[#72339F] sm:text-3xl">
            {post.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#5B5570]">{post.excerpt}</p>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#72339F]/10 pt-5 text-sm text-[#6D6781] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={post.authorImage}
              alt={post.author}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-[#1A1230]">{post.author}</p>
              <p>{post.readTime} · {post.publishedAt}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 font-semibold text-[#72339F] hover:text-[#542477] transition-colors cursor-pointer">
            Read more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
