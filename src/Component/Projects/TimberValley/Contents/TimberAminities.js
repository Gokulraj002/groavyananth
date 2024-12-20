import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../css/Amenities.css";

// Import images from the imagesTimber directory
import img1 from '../imagesTimber/Timber Amenities/1.svg';
import img2 from '../imagesTimber/Timber Amenities/2.svg';
import img3 from '../imagesTimber/Timber Amenities/3.svg';
import img4 from '../imagesTimber/Timber Amenities/4.svg';
import img5 from '../imagesTimber/Timber Amenities/5.svg';
import img6 from '../imagesTimber/Timber Amenities/6.svg';
import img7 from '../imagesTimber/Timber Amenities/7.svg';
import img8 from '../imagesTimber/Timber Amenities/8.svg';
import img9 from '../imagesTimber/Timber Amenities/9.svg';
import img10 from '../imagesTimber/Timber Amenities/10.svg';
import img11 from '../imagesTimber/Timber Amenities/11.svg';
import img12 from '../imagesTimber/Timber Amenities/12.svg';
import img13 from '../imagesTimber/Timber Amenities/13.svg';
import img14 from '../imagesTimber/Timber Amenities/14.svg';
import img15 from '../imagesTimber/Timber Amenities/15.svg';
import img16 from '../imagesTimber/Timber Amenities/16.svg';
import img17 from '../imagesTimber/Timber Amenities/17.svg';
import img18 from '../imagesTimber/Timber Amenities/18.svg';

const amenitiesData = [
  {
    image: img1,
    title: "Central Clubhouse",
    text: "Community gatherings.",
  },
  {
    image: img2,
    title: "Tranquil Swimming Pool",
    text: "Relaxing pool oasis.",
  },
  {
    image: img3,
    title: "Conference Hall & Resort",
    text: "State-of-the-art for business and leisure.",
  },
  {
    image: img4,
    title: "On-site Restaurant",
    text: "Offering gourmet meals.",
  },
  {
    image: img5,
    title: "Outdoor Party Space",
    text: "Celebrations in nature.",
  },
  {
    image: img6,
    title: "Meeting Rooms and Board Rooms",
    text: "Wi-Fi Connectivity.",
  },
  {
    image: img7,
    title: "Gym",
    text: "Fully equipped gym.",
  },
  {
    image: img8,
    title: "Sports Facilities",
    text: "Various sports activities.",
  },
  {
    image: img9,
    title: "Trekking Trails",
    text: "For all paces.",
  },
  {
    image: img10,
    title: "Security Coverage",
    text: "CCTV security coverage.",
  },
  {
    image: img11,
    title: "Outdoor Venues",
    text: "Innovative events.",
  },
  {
    image: img12,
    title: "Nature's Wonders",
    text: "Enhancing every experience.",
  },
  {
    image: img13,
    title: "Team Building Facilities",
    text: "Unite and inspire corporate teams.",
  },
  {
    image: img14,
    title: "Kids' Play Area",
    text: "Fun for children.",
  },
  {
    image: img15,
    title: "Explore Lawns",
    text: "Lush green spaces.",
  },
  {
    image: img16,
    title: "Gardens",
    text: "Beautiful flora.",
  },
  {
    image: img17,
    title: "Nature Trails",
    text: "Including Water Body Boulevard.",
  },
  {
    image: img18,
    title: "Picnic Spaces",
    text: "Perfect for family outings.",
  },
];

const TimberAminities = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 font11 txt">
          Amenities
        </h2>
        <Row>
          {amenitiesData.map((amenity, index) => (
            <Col key={index} className="col-6 col-md-4 col-lg-2 mb-4">
              <Card className="h-100 amenity-card">
                <Card.Body className="d-flex flex-column align-items-center">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    height={'70px'}
                    width={'70px'}
                    className="amenity-image mb-2"
                  />
                  <Card.Title className="text-center para-color">
                    {amenity.title}
                  </Card.Title>
                  {/* <Card.Text className="text-center">{amenity.text}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TimberAminities;
