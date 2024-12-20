import React, { useState } from "react";
import "./GallerySlider.css";
import { Modal, Button, Carousel } from "react-bootstrap";
import ori from "../../Component/Projects/Eligent/ElegantImages/Live-Images/1.jpg";
import ori1 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/2.jpg";
import ori2 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/3.jpg";
import ori3 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/4.jpg";
import ori4 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/5.jpg";
import ori5 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/6.jpg";
import ori6 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/7.jpg";
import ori7 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/8.jpg";
import ori8 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/9.jpg";
import ori9 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/10.jpg";
import ori10 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/11.jpg";
import ori11 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/12.jpg";
import ori12 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/13.jpg";
import ori13 from "../../Component/Projects/Eligent/ElegantImages/Live-Images/14.jpg";
import FullView from "../../Component/Projects/Eligent/ElegantImages/full-change.png";
import Entrance from "../../Component/Projects/Eligent/ElegantImages/entrance.png";
import clubhouse from "../../Component/Projects/Eligent/ElegantImages/club.png";
import ParkView from "../../Component/Projects/Eligent/ElegantImages/park-change.png";
import Park from "../../Component/Projects/Eligent/ElegantImages/swimm.png";
import SwimmingPool from "../../Component/Projects/Eligent/ElegantImages/swimming.png";
import RockClimbing from "../../Component/Projects/Eligent/ElegantImages/rock-change.png";

const sliderImageUrl = [
  { url: ori9, alt:"1yr-Free-Maintenance" ,   width: 350, height: 250 },

  { url: ori,  alt:"ReadyForRegistration",    width: 350, height: 250 },
  { url: ori1, alt:"Elegant-Main-Entrance" ,   width: 350, height: 250 },
  { url: ori2, alt:"Elegant-Walls" ,   width: 350, height: 250 },
  { url: ori13,alt:"Elegant-Model-House" ,   width: 350, height: 250 },

  { url: ori3, alt:"Elegant-Cafeteria" ,   width: 350, height: 250 },
  { url: ori4, alt:"Elegant-Road" ,   width: 350, height: 250 },
  { url: ori6, alt:"Elegant-Layout" ,   width: 350, height: 250 },
  { url: ori5, alt:"Elegant-Aminities" ,   width: 350, height: 250 },
  { url: ori7, alt:"Elegant-Trees" ,   width: 350, height: 250 },
  { url: ori8, alt:"Elegant-30feet-Road" ,   width: 350, height: 250 },
  { url: ori10,alt:"Elegant-Park" ,   width: 350, height: 250 },
  { url: ori11,alt:"25Trees" ,   width: 350, height: 250 },
  { url: ori12,alt:"Elegant-2nd-Gate" ,   width: 350, height: 250 },
];

const sliderImageUrl2 = [
  { url: FullView, alt: "Elegant-3DLayout", width: 350, height: 250 },
  { url: Entrance, alt: "Elegant-3DEntrance", width: 350, height: 250 },
  { url: clubhouse, alt: "clubhouse design3D", width: 350, height: 250 },
  { url: ParkView, alt: "park design3D", width: 350, height: 250 },
  { url: Park, alt: "Park-waiting-place", width: 350, height: 250 },
  { url: SwimmingPool, alt: "Swimming pool", width: 350, height: 250 },
  { url: RockClimbing, alt: "Rock Climbing", width: 350, height: 250 },
];

const Slider = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [imageSet, setImageSet] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClose = () => {
    setZoomedImage(null);
    setImageSet([]);
    setActiveIndex(0);
  };

  const handleZoomIn = (image, imageSet) => {
    setZoomedImage(image);
    setImageSet(imageSet);
    setActiveIndex(imageSet.findIndex(img => img.url === image.url));
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="slider-container">
      <h2 className="font11 text-center mt-2 mb-4" style={{ color: "#3A6958" }}>
        Managed Farmland Gallery
      </h2>
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee behavior="scroll" direction="left" scrollamount="6">
        <div className="marquee-container">
          {sliderImageUrl.map((image, index) => (
            <img
              style={{ cursor: "pointer" }}
              key={index}
              className="marquee-image mx-2"
              src={image.url}
              title="Click To See Full Image"
              alt={image.alt}
              loading="lazy"
              width={image.width}
              height={image.height}
              onClick={() => handleZoomIn(image, sliderImageUrl)}
            />
          ))}
        </div>
      </marquee>
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee behavior="scroll" direction="right" scrollamount="8">
        <div className="marquee-container">
          {sliderImageUrl2.map((image, index) => (
            <img
              style={{ cursor: "pointer" }}
              key={index}
              className="marquee-image mx-2"
              src={image.url}
              title="Click The Image to Full view"
              alt={image.alt}
              loading="lazy"
              width={image.width}
              height={image.height}
              onClick={() => handleZoomIn(image, sliderImageUrl2)}
            />
          ))}
        </div>
      </marquee>
      {zoomedImage && (
        <Modal
          show={true}
          onHide={handleClose}
          centered
          size="xl"
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Modal.Header closeButton>
            <Modal.Title>{imageSet[activeIndex]?.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="text-center"
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
              {imageSet.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.url}
                    alt={image.alt}
                    style={{ maxHeight: "80vh" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Slider;
