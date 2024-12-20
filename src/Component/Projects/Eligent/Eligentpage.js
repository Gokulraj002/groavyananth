import React from "react";
import Slider from "./Slider";
import SliderOne from "./SliderOne";
import Amenities from "./Amenities";
import Map from "./Map";
import LocationMap from "./LocationMap";
import Layout from "./LayOut";
import Content from "./Content";
import Eligenthome from "./Eligenthome";
import EligantForm from "./EligantForm";
import NearByLocation from "./NearByLocation";
import ProjectHighlights from "./ProjectHighlights";
import ScrollModel from "./ScrollModel";
import { Helmet } from "react-helmet-async";

const Eligentpage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Elegant | Best Premium Managed Farmland Near Bangalore
        </title>
        <meta
          name="description"
          content='Best premium managed farmland near Bangalore, located in Chikkaballapur with luxury amenities and excellent investment opportunities.'
        />
        <meta
          name="keywords"
          content="managed farmland near Bangalore, best managed farmland, farmland near Chikkaballapur, plots for sale near Bangalore"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="Elegant | Best Premium Managed Farmland Near Bangalore"
        />
        <meta
          property="og:description"
          content='Best premium managed farmland near Bangalore, located in Chikkaballapur with luxury amenities and excellent investment opportunities.'
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta
          property="og:url"
          content="https://www.groavy.com/elegantorchards/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Elegant | Best Premium Managed Farmland Near Bangalore"
        />
        <meta
          name="twitter:description"
          content='Best premium managed farmland near Bangalore, located in Chikkaballapur with luxury amenities and excellent investment opportunities.'
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/elegantorchards/" />
      </Helmet>

      <Eligenthome />
      <EligantForm />
      <Slider />
      <Content />
      <SliderOne />
      <Amenities />
      <Layout />
      <NearByLocation />
      <ProjectHighlights />
      <LocationMap />
      <Map />
      <ScrollModel />
    </div>
  );
};

export default Eligentpage;
