import { Link } from "react-router-dom";
import type { BlogPost } from "./blogData";
import { blogPosts } from "./blogData";

type BlogDetailContentProps = {
  post: BlogPost;
};

const BlogDetailContent = ({ post }: BlogDetailContentProps) => {
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <div className="pb-24">
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        {post.slug === "hidden-cost-of-bad-data" ? (
          <div className="mt-8 rounded-[24px] border-l-4 border-[#72339F] bg-[#F6F1FB] px-5 py-5 text-sm leading-7 text-[#4E4961] sm:px-6">
            <p className="font-semibold text-[#1A1230]">
              In B2B organizations, data is often treated as an asset. But when the data is inaccurate, outdated, or incomplete, it quickly turns into a liability, impacting everything from outreach to revenue.
            </p>
            <p className="mt-4">
              The challenge is that bad data doesn’t fail loudly. It operates in the background, silently reducing efficiency, weakening campaigns, and slowing down growth.
            </p>
          </div>
        ) : null}

        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-[#72339F]">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-sm leading-8 text-[#4E4961] sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4E4961] sm:text-base">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#72339F]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-[26px] border border-[#E9D8FF] bg-[#F8F4FF] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#72339F]">Author</p>
          <div className="mt-5 flex items-center gap-4">
            <img
              src={post.authorImage}
              alt={post.author}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-[#1A1230]">{post.author}</p>
              <p className="text-sm text-[#6D6781]">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#72339F]">You may also like</p>
            <h2 className="mt-2 text-3xl font-bold text-[#72339F]">More ideas from our blog</h2>
          </div>
          <Link to="/blogs" className="hidden text-sm font-semibold text-[#72339F] hover:text-[#542477] sm:inline">
            View all articles
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {relatedPosts.map((item) => (
            <Link
              key={item.slug}
              to={`/blogs/${item.slug}`}
              className="group overflow-hidden rounded-[26px] border border-[#72339F]/10 bg-white shadow-[0_16px_50px_rgba(114,51,159,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(114,51,159,0.16)]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72339F]">{item.category}</p>
                <h3 className="mt-3 text-xl font-bold leading-tight text-[#1A1230]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5B5570]">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetailContent;
