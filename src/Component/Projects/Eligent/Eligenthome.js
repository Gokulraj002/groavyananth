import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import "./css/eligenthome.css";
import "./css/amine.css";

// Images for the first carousel
import award1 from "../../../images/sliderimages/4.png";
import award2 from "../../../images/sliderimages/2.png";
import award3 from "../../../images/sliderimages/1.png";
// import award4 from '../../../images/sliderimages/5.png';

import mobileAward1 from "../../../images/sliderimages/44.png";
import mobileAward2 from "../../../images/sliderimages/22.png";
import mobileAward3 from "../../../images/sliderimages/11.png";
// import mobileAward4 from '../../../images/sliderimages/55.png';

const desktopBannerImages = [
  { url: award1, alt: "Best Farmland Award" },
  { url: award2, alt: "Cafetria" },
  { url: award3, alt: "Managed Farmland" },
  // { url: award4, alt: "Award 4" },
];

const mobileBannerImages = [
  { url: mobileAward1, alt: "Best Farmland Award" },
  { url: mobileAward2, alt: "Cafetria" },
  { url: mobileAward3, alt: "Managed Farmland" },
  // { url: mobileAward4, alt: "Mobile Award 4" },
];

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Settings for slick slider (added onChange event)
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div>
      {/* First Carousel - HomeBanner */}
      <div className="position-relative">
        <Slider {...sliderSettings}>
          {desktopBannerImages.map((image, index) => (
            <div
              key={index}
              className={`aos ${currentSlide === index ? "rev" : ""}`}
            >
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={mobileBannerImages[index].url}
                />
                <source media="(min-width: 769px)" srcSet={image.url} />
                <img
                  src={image.url} // Fallback for unsupported browsers
                  className="d-block w-100 h-100"
                  alt={image.alt || "Carousel image"} // Ensure meaningful alt text
                  title={image.alt || "Carousel image"} // Add a title attribute
                  loading="lazy" // Enable lazy loading for better performance
                  width="1024" // Replace with the actual image width
                  height="550" // Replace with the actual image height
                />
              </picture>
            </div>
          ))}
        </Slider>

        <div className="position-absolute pos translate-middle">
          <h1 className="text-center text-white gap-0" id="head1">
            <FontAwesomeIcon
              icon={faTree}
              className="icon-before animated-icon"
            />
           Discover Luxury Living: Invest in <br></br> Farmland Near Bangalore
            <FontAwesomeIcon
              icon={faTree}
              className="icon-after animated-icon"
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
