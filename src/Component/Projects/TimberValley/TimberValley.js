import React from "react";
// import image from "../../../images/Comming Soon.png";
import { Helmet } from "react-helmet-async";
import TimberHome from "./Contents/TimberHome";
import HomeContent from "./Contents/HomeContent";
import TimberAminities from "./Contents/TimberAminities";
import CenterContent from "./Contents/CenterContent";
import TimberLayout from "./Contents/TimberLayout";
import TimberLocationMap from "./Contents/TimberLocationMap";
import Address from "./Contents/Address";
import TimberMain from "./Contents/TimberMain";
import Nearbyplaces from "./Contents/Nearbyplaces";
// import TimberHome from "./Contents/TimberHome";

const TimberValley = () => {
  return (
    <div>
      <Helmet>
        <title>Elegant Orcahrds| Best Agricultural Farmland near lepakshi</title>
        <meta
          name="description"
          content='Discover Elegant Orcahrds Near Lepakshi: The Best Managed Agricultural Farmland with Exceptional Investment Opportunities and Benefits'
        />
        <meta
          name="keywords"
          content="Premium farmland for sale, farmland with all facilities, best managed farmland,farmland sale near bengaluru"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta property="og:title" content="Elegant Orcahrds| Best Agricultural Farmland near lepakshi" />
        <meta
          property="og:description"
          content='Discover Elegant Orcahrds Near Lepakshi: The Best Managed Agricultural Farmland with Exceptional Investment Opportunities and Benefits'
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/timbervalley/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elegant Orcahrds| Best Agricultural Farmland near lepakshi" />
        <meta
          name="twitter:description"
          content='Discover Elegant Orcahrds Near Lepakshi: The Best Managed Agricultural Farmland with Exceptional Investment Opportunities and Benefits'
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/timbervalley/" />
      </Helmet>

      <TimberHome />
      <HomeContent />
      <CenterContent />
      <TimberMain />
      <TimberAminities />
      <Nearbyplaces />
      <TimberLayout />
      <TimberLocationMap />
      <Address />
    </div>
  );
};

export default TimberValley;
