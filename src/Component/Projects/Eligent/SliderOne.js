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
          Explore the opportunity to own{" "}
          <strong>farmland for sale near Bangalore</strong>, offering a blend of
          natural beauty and investment potential. Our{" "}
          <strong>best managed farmland</strong> in Chikkaballapur provides a
          peaceful retreat just a short drive from the city. This agricultural
          land, with lush greenery and a variety of fruit-bearing trees, is
          perfect for those looking to invest in{" "}
          <strong>agriculture land in Chikkaballapur</strong> for personal use
          or profitable farming ventures. Located near major roadways, our
          farmland is also just a short distance from{" "}
          <strong>farmland near Bangalore airport</strong>, making it accessible
          and ideal for anyone seeking to enjoy both the serene countryside and
          the convenience of being close to the city. Take advantage of this
          exceptional opportunity to invest in premium farmland near Bangalore,
          with endless potential for growth and development.
        </p>
        <p className="justify para-color2">
          Explore our upcoming design for future farmhouses and agricultural
          spaces, designed to enhance the natural beauty of the land while
          providing modern amenities and sustainable living solutions.
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
