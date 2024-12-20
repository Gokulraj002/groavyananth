import React from "react";
import BlogContent from "../Media/Blogs/BlogContent";

const BlogHome = () => {
  return (
    <div className="blog-home bg-light">
      <div className="container py-3 my-2">
        <h2 className="font1 text-center mt-2 mb-4" style={{ color: "#3A6958" }}>
          Best Farmland and Investment Tips
        </h2>
        <p className="text-center text-muted para-color2">
          Explore our latest blog posts, where we delve into the benefits of farmland investment,
          strategic growth opportunities, and the long-term rewards of sustainable agriculture.
          Stay informed with expert insights and start planning your future with the right investments.
        </p>
      </div>

      <BlogContent showHomepageLayout={true} />
    </div>
  );
};
export default BlogHome;
