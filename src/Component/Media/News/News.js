import React from "react";
import NewsContent from "./NewsContent";
import NewsBanner from "./NewsBanner";
import { Helmet } from "react-helmet-async";
// import NewsPage from "./NewsPapers";

const News = () => {
  return (
    <>
      <Helmet>
        <title>
        Latest News | Current Trends in Farmland and Development
        </title>
        <meta
          name="description"
          content='Stay updated with Groavy Buildcon for the latest trends and insights in farmland and agricultural investments near Bengaluru.'        />
        <meta
          name="keywords"
          content="land for sale in bengaluru, real estate updates, farmland investment news, land near chikkaballapur,managed farmland in bengaluru"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="Latest News | Current Trends in Farmland and Development"
        />
        <meta
          property="og:description"
          content='Stay updated with Groavy Buildcon for the latest trends and insights in farmland and agricultural investments near Bengaluru.'        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/news/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Latest News | Current Trends in Farmland and Development"
        />
        <meta
          name="twitter:description"
          content='Stay updated with Groavy Buildcon for the latest trends and insights in farmland and agricultural investments near Bengaluru.'        />
        <meta name="twitter:image" content="URL-to-your-news-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/news/" />
      </Helmet>

      <NewsBanner />
      <NewsContent />
      {/* <NewsPage/> */}
    </>
  );
};

export default News;
