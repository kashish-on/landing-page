import BlogDetailContent from "@/components/blogs/BlogDetailContent";
import BlogsHero from "@/components/blogs/BlogsHero";
import { blogPosts } from "@/components/blogs/blogData";
import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#72339F] transition-colors hover:text-[#542477]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blogs
        </Link>
      </div>

      <BlogsHero
        eyebrow={post.eyebrow}
        title={post.title}
        subtitle={post.subtitle}
        image={post.image}
        readTime={post.readTime}
        publishedAt={post.publishedAt}
      />
      <BlogDetailContent post={post} />
    </div>
  );
};

export default BlogDetailPage;
