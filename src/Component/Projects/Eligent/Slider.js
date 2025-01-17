import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

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
  const [sliderImages, setSliderImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostImages = async () => {
      try {
        const response = await axios.get(
          "https://info.groavy.com/wp-json/wp/v2/posts/45"
        );
        const content = response.data.content.rendered;

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;

        const imgTags = tempDiv.getElementsByTagName("img");
        const imageUrls = Array.from(imgTags).map((img) => img.src);

        setSliderImages(imageUrls);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPostImages();
  }, []);

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

  if (loading) {
    return (
      <div className="text-center my-5">
        <p>Loading images...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center my-5">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <h2 className="font11 text-center my-4" style={{ color: "#3A6958" }}>
          Best Premium Managed Farmland Near Bangalore
        </h2>

        <p className="justify para-color2">
          Discover the perfect blend of nature and investment with our managed
          farmland in Chikkaballapur. Surrounded by tranquility, the property
          boasts fruit-bearing trees like mango, cashew, and jackfruit, making
          it an ideal escape from city life. Whether you dream of building a
          serene farmhouse or starting a rewarding agricultural venture, this
          farmland offers endless possibilities. Conveniently located near
          Bangalore, it provides the perfect balance of accessibility and a
          peaceful environment, making it a sought-after choice for modern
          living and sustainable farming.
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
                  className="d-block"
                  height={"690px"}
                  loading="lazy"
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
                  height={"85px"}
                  width={"100%"}
                  loading="lazy"
                  className=""
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
