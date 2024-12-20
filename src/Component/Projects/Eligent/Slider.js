import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ori from "./ElegantImages/Live-Images/1.jpg";
import Layout from "./ElegantImages/Live-Images/2.jpg";
import Entrance from "./ElegantImages/Live-Images/3.jpg";
import Clubhouse from "./ElegantImages/Live-Images/4.jpg";
import FullViewClubhouse from "./ElegantImages/Live-Images/5.jpg";
import SwimmingPool from "./ElegantImages/Live-Images/6.jpg";
import Plots from "./ElegantImages/Live-Images/7.jpg";
import Solarplan from "./ElegantImages/Live-Images/8.jpg";
import Trees from "./ElegantImages/Live-Images/9.jpg";
import live10 from "./ElegantImages/Live-Images/10.jpg";
import live11 from "./ElegantImages/Live-Images/11.jpg";
import live12 from "./ElegantImages/Live-Images/12.jpg";
import live13 from "./ElegantImages/Live-Images/13.jpg";
import live14 from "./ElegantImages/Live-Images/14.jpg";
import { Link } from "react-router-dom";

const sliderImages = [
  live10,

  ori,
  Layout,
  live14,
  Entrance,
  Clubhouse,
  FullViewClubhouse,
  Plots,
  Trees,
  SwimmingPool,
  Solarplan,
  live11,
  live12,
  live13,
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
    slidesToSlide: 4,
  },
};

const SliderComponent = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (selectedIndex) => {
    setSelectedImageIndex(selectedIndex);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="container">
        <h2 className="font11 text-center my-4" style={{ color: "#3A6958" }}>
          Best Premium Managed Farmland Near Bangalore
        </h2>

        <p className="justify para-color2">
          Looking for a luxury farm sale in Chikkaballapur? Our{" "}
          <Link to="/blogs/best-farmland-near-chikkaballapur/">
            managed farmland in Chikkaballapur
          </Link>{" "}
          offers a perfect investment opportunity surrounded by nature’s
          tranquility. With a variety of fruit-bearing trees including mango,
          cashew, and jackfruit, this{" "}
          <strong>farm land in Chikkaballapur</strong> offers a peaceful retreat
          away from the hustle and bustle of city life. Ideal for building your
          dream farmhouse or a profitable agricultural venture, our property is
          also an excellent choice for those seeking{" "}
          <strong>agriculture land near bangalore</strong> for farming.
          Conveniently located, our property is considered the{" "}
          <Link to="/blogs/managed-farmland-near-bangalore/">
            Best Premium Managed Farmland Near Bangalore
          </Link>
          , combining accessibility to the city with a serene, natural
          environment.
        </p>
      </div>

      <div className="pb-md-5">
        <div className="container my-md-4">
          <Carousel
            indicators={false}
            prevIcon={<CustomPrevIcon onClick={handlePrevClick} />}
            nextIcon={<CustomNextIcon onClick={handleNextClick} />}
            activeIndex={selectedImageIndex}
          >
            {sliderImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block "
                  height={"100%"}
                  width={"100%"}
                  src={image}
                  alt={`Elegant Orchards ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <CarouselMulti
            responsive={responsive}
            containerClass="carousel-container"
            itemClass="thumbnail-item"
            keyBoardControl={true}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {sliderImages.map((image, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`mx-1 mt-2 ${
                  index === selectedImageIndex ? "selected" : ""
                }`}
              >
                <img
                  src={image}
                  height={"100%"}
                  width={"100%"}
                  className="img-thumbnail"
                  alt={`Elegant Orchards ${index}`}
                />
              </div>
            ))}
          </CarouselMulti>
        </div>
      </div>
    </>
  );
};

const CustomPrevIcon = ({ onClick }) => (
  <FaArrowLeft
    className="custom-carousel-icon bg-white rounded-circle text-dark fs-2 p-2"
    onClick={onClick}
  />
);

const CustomNextIcon = ({ onClick }) => (
  <FaArrowRight
    className="custom-carousel-icon bg-white rounded-circle text-dark fs-2 p-2"
    onClick={onClick}
  />
);

export default SliderComponent;
