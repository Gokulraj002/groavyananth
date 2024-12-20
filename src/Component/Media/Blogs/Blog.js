import React from 'react';
import BlogContent from './BlogContent';
import BlogsBanner from './BlogsBanner';

const Blog = ({ showHomepageLayout }) => {
  return (
    <>
      <BlogsBanner />
      <BlogContent showHomepageLayout={showHomepageLayout} />
    </>
  );
};

export default Blog;
