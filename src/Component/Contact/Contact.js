import React, { useEffect } from "react";
import ContactForm from "./ContactForm"; // Your contact form component
import "./contactform.css";
import { Helmet } from "react-helmet";
import logo from "../../images/about-us1.png";

const Contact = () => {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    } else {
      console.error("Facebook Pixel is not loaded");
    }

    // Google Ads Conversion Tracking
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16458676935/3yN7CKjb8r0ZEMf1jag9",
        value: 1.0,
        currency: "INR",
      });
    } else {
      console.error("Google Ads tracking failed.");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Reach Out to Groavy | Your Partner in Farmland Investments
        </title>
        <meta
          name="description"
          content='We are here to assist with all your queries about premium managed farmland, investment strategies, and agricultural land for sale near Bangalore.'
        />
        <meta
          name="keywords"
          content="land for sale near bengaluru, agricultural land for sale, farmland for sale near bangalore, managed farmland near chikkaballapur"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="Reach Out to Groavy | Your Partner in Farmland Investments"
        />
        <meta
          property="og:description"
          content='We are here to assist with all your queries about premium managed farmland, investment strategies, and agricultural land for sale near Bangalore.'
        />
        <meta
          property="og:image"
          content={logo}
        />
        <meta property="og:url" content="https://www.groavy.com/contact/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Reach Out to Groavy | Your Partner in Farmland Investments"
        />
        <meta
          name="twitter:description"
          content='We are here to assist with all your queries about premium managed farmland, investment strategies, and agricultural land for sale near Bangalore.'
        />
        <meta
          name="twitter:image"
          content={logo}
        />
        <link rel="canonical" href="https://www.groavy.com/contact/" />
      </Helmet>

      <ContactForm />
    </>
  );
};

export default Contact;
