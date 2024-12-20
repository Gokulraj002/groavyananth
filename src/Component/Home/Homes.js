import React from "react";
import { Helmet } from "react-helmet";
import HomeAbout from "./homeabout";
import Weoffer from "./Weoffer";
import Slider from "./GallerySlider";
// import Testimonials from "./Testimonials";
import "./home.css";
import HomeBanner from "./HomeBanner";
import HomeProjects from "./HomeProjects";
import logo from "../../images/about-us1.png";
import BlogHome from "./BlogHome";
import HomePagePopupForm from "./HomePagePopupForm";
import FAQ from "./Faq";
// import Chatbot from "../../ChatBot/Chatbot";

const Homes = () => {
  return (
    <div>
      <Helmet>
        <title>GroavyBuildcon | Managed farmland near Bangalore</title>
        <meta
          name="description"
          content='Explore premium managed farmland near Bangalore. Discover farmland near chikkaballapur. managed farmland near Bangalore'
        />
        <meta
          name="keywords"
          content="farm land for sale near Bangalore, managed farmland, farmland near chikkaballapur, best farmland in Bangalore"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content=" GroavyBuildcon | Managed farmland near Bangalore"
        />
        <meta
          property="og:description"
          content='Explore premium managed farmland near Bangalore . Discover farmland near chikkaballapur. managed farmland near Bangalore'
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://www.groavy.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content=" GroavyBuildcon | Managed farmland near Bangalore"
        />
        <meta
          name="twitter:description"
          content='Explore premium managed farmland near Bangalore . Discover farmland near chikkaballapur. managed farmland near Bangalore'
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com" />
      </Helmet>
      <HomeBanner />
      <HomeAbout />
      <Weoffer />
      <HomeProjects />
      <Slider />
      <HomePagePopupForm />
      {/* <Testimonials /> */}
      <BlogHome />
      <FAQ/>
    </div>
  );
};

export default Homes;
