import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../../images/banner 1.jpg";
import Banner1 from "../../../images/blogs-mob.png";

import { Helmet } from "react-helmet";
const BlogsBanner = () => {
  return (
    <>
      <Helmet>
        <title>Our Blogs | Expert Insights on Farmland and Investments</title>
        <meta
          name="description"
          content='Our blog delivers the latest updates and expert perspectives on managed farmland, agricultural investments, and real estate opportunities.'
        />
        <meta
          name="keywords"
          content="managed farmland near lepakshi, farmland for sale near nandi hills, top 10 farmland in chikkaballapur, best farmland in karnataka"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="Our Blogs | Expert Insights on Farmland and Investments"
        />
        <meta
          property="og:description"
          content='Our blog delivers the latest updates and expert perspectives on managed farmland, agricultural investments, and real estate opportunities.'
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/blogs/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Blogs | Expert Insights on Farmland and Investments"
        />
        <meta
          name="twitter:description"
          content='Our blog delivers the latest updates and expert perspectives on managed farmland, agricultural investments, and real estate opportunities.'
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/blogs/" />
      </Helmet>

      <div>
        <div className="position-relative pb-5 bg-light">
          <picture className="w-100">
            <source srcSet={Banner1} media="(max-width: 699px)" />
            <img
              src={Banner}
              alt="Groavy-blogs"
              width={"100%"}
              height={"auto"}
              className="w-100"
            />
          </picture>

          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 id="head" className="text-white text-center">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />
              Explore Our Latest Blog Posts and Updates
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsBanner;
