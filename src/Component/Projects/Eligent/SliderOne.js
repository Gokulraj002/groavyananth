import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/slider.css";

import Layout from "./ElegantImages/main2.png";
import ClubHouse from "./ElegantImages/club.png";
import Aanya from "./ElegantImages/park-change.png";
import Park from "./ElegantImages/two.png";
import Park1 from "./ElegantImages/swimm.png";
import ClimbingRock from "./ElegantImages/rock-change.png";
import RockPlace from "./ElegantImages/three.png";
import SwimmingPool from "./ElegantImages/swimming.png";
import CarPark from "./ElegantImages/six.png";
import Home4 from "./ElegantImages/four.png";

const sliderImages = [
  Layout,
  ClubHouse,
  Aanya,
  Park,
  Park1,
  RockPlace,
  ClimbingRock,
  SwimmingPool,
  CarPark,
  Home4,
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 1,
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
          Farmland for Sale Near Bangalore
        </h2>
        <p className="justify para-color2">
          Discover a serene retreat with our{" "}
          <strong>farmland for sale near Bangalore</strong>. Located in
          Chikkaballapur, this property offers lush greenery, fruit-bearing
          trees, and a peaceful environment, just a short drive from the city.
          With easy access to major highways and the Bangalore airport, it’s an
          ideal investment for personal use or sustainable farming ventures.
        </p>
        <p className="justify para-color2">
          Our future plans include thoughtfully designed farmhouses and
          agricultural spaces, blending modern amenities with sustainable living
          solutions to enhance the natural beauty of the land.
        </p>
      </div>

      <div className="bg pb-5">
        <div className="container my-md-5 my-4 pt-5">
          <Carousel
            indicators={false}
            prevIcon={<CustomPrevIcon onClick={handlePrevClick} />}
            nextIcon={<CustomNextIcon onClick={handleNextClick} />}
            activeIndex={selectedImageIndex}
          >
            {sliderImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  height={"100%"}
                  width={"100%"}
                  className="d-block "
                  src={image}
                  alt={`Elegant Orchards ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="thumbnail-slider-container mt-3">
            <CarouselMulti
              responsive={responsive}
              containerClass="carousel-container"
              itemClass="thumbnail-item"
              keyBoardControl={true}
              // customLeftArrow={<CustomPrevIcon />}
              // customRightArrow={<CustomNextIcon />}
            >
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`mx-1 ${
                    index === selectedImageIndex ? "selected" : ""
                  }`}
                >
                  <img
                    src={image}
                    className="img-thumbnail"
                    alt={`Elegant ${index}`}
                    width="110px"
                    height="auto"
                  />
                </div>
              ))}
            </CarouselMulti>
          </div>
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
