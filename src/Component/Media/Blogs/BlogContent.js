import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Pagination } from "antd";
import blogPostsData from "./blogPosts.json";
import { getImage } from "./BlogImages";

const BlogContent = ({ showLatestOnly, showHomepageLayout }) => {
  const [pageSize] = useState(9);
  const navigate = useNavigate();
  const { page } = useParams(); // Get current page from URL parameters
  const currentPage = parseInt(page) || 1;

  // Map the image names in the JSON to the actual imported images
  const blogPosts = blogPostsData.map((post) => ({
    ...post,
    image: getImage(post.image),
  }));

  // Sort by date (most recent first)
  const sortedBlogs = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Calculate pagination
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Truncate title for display consistency
  const truncateTitle = (title, length = 55) => {
    return title.length > length ? title.substring(0, length) + "..." : title;
  };

  // Function to handle page changes
  const handlePageChange = (page) => {
    navigate(`/blogs/page/${page}`);
    window.scrollTo(0, 0); // Scroll to top when page changes
  };

  return (
    <div className="bg-light">
      <div className="container">
        <div className="row g-2">
          {showHomepageLayout ? (
            <>
              {/* Latest Blog Post */}
              {sortedBlogs.map((post, index) => index === 0 && (
                <div className="col-12 col-lg-6 mb-4" key={index}>
                  <Link to={post.link} className="text-decoration-none">
                    <div className="card h-100 shadow-sm">
                      <div className="position-relative">
                        <img
                          width="100%"
                          height="400px"
                          className="w-100"
                          src={post.image}
                          alt={post.title}
                        />
                      </div>
                      <div className="card-body">
                        <h2 className="card-title text-start font11" style={{ fontSize: "24px" }}>
                          {truncateTitle(post.title)}
                        </h2>
                        <p className="card-text text-secondary text-start para-color1">
                          {post.description}
                        </p>
                      </div>
                      <div className="card-footer bg-white border-top-0">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="btn btn-outline-success">Read More</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              {/* Smaller Blog Posts */}
              <div className="col-6 col-lg-3">
                <div className="row g-3">
                  {sortedBlogs.map((post, index) => index >= 1 && index < 4 && (
                    <div className="col-12" key={index}>
                      <Link to={post.link} className="text-decoration-none">
                        <div className="card border-0">
                          <div className="position-relative">
                            <img
                              width="100%"
                              height="150px"
                              className="w-100"
                              src={post.image}
                              alt={post.title}
                            />
                          </div>
                          <div className="card-body">
                            <h3 className="card-title text-start font11" style={{ fontSize: "16px" }}>
                              {truncateTitle(post.title)}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div className="row g-3">
                  {sortedBlogs.map((post, index) => index >= 4 && index < 7 && (
                    <div className="col-12" key={index}>
                      <Link to={post.link} className="text-decoration-none">
                        <div className="card border-0">
                          <div className="position-relative">
                            <img
                              width="100%"
                              height="150px"
                              className="w-100"
                              src={post.image}
                              alt={post.title}
                            />
                          </div>
                          <div className="card-body">
                            <h3 className="card-title text-start font11" style={{ fontSize: "16px" }}>
                              {truncateTitle(post.title)}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {sortedBlogs.map((post, index) => (
                index >= startIndex && index < endIndex && (
                  <div className="col-12 col-md-6 col-lg-4" key={index}>
                    <Link to={post.link} className="text-decoration-none">
                      <div className="card h-100">
                        <div className="position-relative">
                          <img
                            width="100%"
                            height="300px"
                            className="w-100"
                            src={post.image}
                            alt={post.title}
                          />
                        </div>
                        <div className="card-body">
                          <div className="mb-2">
                            <i className="fas fa-user-circle text-success me-2"></i>
                            <small className="text-success">{post.author}</small>
                          </div>
                          <h2 className="card-title text-start font11" style={{ fontSize: "22px" }}>
                            {post.title}
                          </h2>
                          <p className="card-text text-secondary text-start para-color1">
                            {post.description}
                          </p>
                        </div>
                        <div className="card-footer bg-white border-top-0">
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="btn btn-outline-success">Read More</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              ))}
            </>
          )}
        </div>

        {/* Pagination */}
        {!showHomepageLayout && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              onChange={handlePageChange}
              total={sortedBlogs.length}
              style={{
                borderRadius: "5px",
                padding: "10px",
                backgroundColor: "#f9f9f9",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogContent;
