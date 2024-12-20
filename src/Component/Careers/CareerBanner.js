import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../images/carree-bann.jpg';
import Banner1 from '../../images/blogs-mob.png';
import { Helmet } from 'react-helmet';

const FEATURED_IMAGE_URL = 'https://www.groavy.com/path-to-your-featured-image.jpg'; // Update this URL

const CareerBanner = () => {
  return (
    <>
      <Helmet>
        <title>Join Our Team | Build a Rewarding Career at Groavy</title>
        <meta
          name="description"
          content='Join Groavy Buildcon and be a part of a dynamic team specializing in real estate and farmland sales. Explore career opportunities and grow with us.'
        />
        <meta
          name="keywords"
          content="how to save a money,sales job opening, managed farmland sales, best investment, groavy career opportunities"
        />
        <meta name="author" content="Groavy Buildcon" />
        <meta property="og:title" content="Join Our Team | Build a Rewarding Career at Groavy" />
        <meta
          property="og:description"
          content='Join Groavy Buildcon and be a part of a dynamic team specializing in real estate and farmland sales. Explore career opportunities and grow with us.'
        />
        <meta property="og:image" content={FEATURED_IMAGE_URL} />
        <meta property="og:url" content="https://www.groavy.com/careers/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Groavy Buildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join Our Team | Build a Rewarding Career at Groavy" />
        <meta
          name="twitter:description"
          content='Join Groavy Buildcon and be a part of a dynamic team specializing in real estate and farmland sales. Explore career opportunities and grow with us.'
        />
        <meta name="twitter:image" content={FEATURED_IMAGE_URL} />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/careers/" />
      </Helmet>

      <div>
        <div className="position-relative">
          <picture className="w-100">
            <source srcSet={Banner1} media="(max-width: 699px)" />
            <img src={Banner} alt="Groavy-blogs" width={'100%'} height={'auto'} className="w-100" />
          </picture>

          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 id="head" className="text-white text-center">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />
              Join Our Team and Build a Rewarding Career at Groavy
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
}

export default CareerBanner;
