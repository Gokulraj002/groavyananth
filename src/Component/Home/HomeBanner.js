import React, { useState, useEffect, useMemo } from "react";
import video from "../../images/video.mp4";
import image from '../../images/groavy-mob.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

const HomeBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use useMemo to optimize rendering
  const mediaContent = useMemo(() => {
    return isMobile ? (
    <div className="aos">
        <img
          src={image}
          width="100%"
          height="100%"
          alt="Groavy-Buildcon"
          className="effect"
        />
    </div>
    ) : (
      <video
        autoPlay
        muted
        loop
        src={video}
        alt="background"
        className="w-100"
      />
    );
  }, [isMobile]); // Only 'isMobile' is needed in the dependency array

  return (
    <div className="position-relative">
      {mediaContent}
      <div className="position-absolute translate-middle hero-content text-center">
        <h1 id="head">
          <FontAwesomeIcon
            icon={faTree}
            className="icon-before animated-icon"
          />
          Find Your Dream Land By <br />
          Groavy Buildcon{" "}
          <FontAwesomeIcon
            icon={faTree}
            className="icon-after animated-icon"
          />
        </h1>
        <p className="font fw-bold">
          Embark on a journey to own your perfect piece of earth, where
          dreams bloom and possibilities grow.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;