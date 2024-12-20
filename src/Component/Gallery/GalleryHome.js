import React from "react";
import { Helmet } from "react-helmet";
import Gallery from "./Gallery";

const GalleryHome = () => {
  return (
    <>
      <Helmet>
        <title>Managed Farmland Near Chikkaballapur - Gallery</title>
        <meta
          name="description"
          content='Explore the best-managed farmland in Chikkaballapur. Discover premium agricultural land investment opportunities with top-class amenities and sustainable practices.'
        />
        <meta
          name="keywords"
          content="managed farmland, agricultural land, farmland investment, farmland near Chikkaballapur, premium farmland, sustainable agriculture"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="Managed Farmland Near Chikkaballapur - Gallery"
        />
        <meta
          property="og:description"
          content='Explore the best-managed farmland in Chikkaballapur. Discover premium agricultural land investment opportunities with top-class amenities and sustainable practices.'
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/gallery/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Managed Farmland Near Chikkaballapur - Gallery"
        />
        <meta
          name="twitter:description"
          content='Explore the best-managed farmland in Chikkaballapur. Discover premium agricultural land investment opportunities with top-class amenities and sustainable practices.'
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/gallery/" />
      </Helmet>
      <Gallery />
    </>
  );
};

export default GalleryHome;
