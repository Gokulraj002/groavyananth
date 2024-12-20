import React from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import './css/Amenities.css';
// Import images
import entrancePortal from './AmenitiesIcons/Entrance Portal.svg';
import clubHouse from './AmenitiesIcons/Club House.svg';
import swimmingPool from './AmenitiesIcons/swimming pool.svg';
import amphitheatre from './AmenitiesIcons/amphitheatre.svg';
import cafeteria from './AmenitiesIcons/cafeteria.svg';
import sandalwoodTrees from './AmenitiesIcons/sandalwoodTrees.svg';
import wideRoad from './AmenitiesIcons/wideRoad.svg';
import electricitySupply from './AmenitiesIcons/electricitySupply.svg';
import waterSupply from './AmenitiesIcons/waterSupply.svg';
import verdantLandscape from './AmenitiesIcons/verdantLandscape.svg';
import lucrativeReturns from './AmenitiesIcons/lucrativeReturns.svg';
import campfirePit from './AmenitiesIcons/campfirePit.svg';
import gym from './AmenitiesIcons/gym.svg';
import park from './AmenitiesIcons/park.svg';
import playArea from './AmenitiesIcons/playArea.svg';
import stormDrains from './AmenitiesIcons/stormDrains.svg';
import yogaDeck from './AmenitiesIcons/yogaDeck.svg';
import cyclingTrack from './AmenitiesIcons/cyclingTrack.svg';

const amenitiesData = [
  { image: entrancePortal, title: "Entrance Portal" },
  { image: clubHouse, title: "Club House" },
  { image: swimmingPool, title: "Swimming Pool" },
  { image: amphitheatre, title: "Amphitheatre" },
  { image: cafeteria, title: "Cafeteria" },
  { image: sandalwoodTrees, title: "Sandalwood Trees" },
  { image: wideRoad, title: "30 Feet Road" },
  { image: electricitySupply, title: "24/7 Electricity" },
  { image: waterSupply, title: "Water Supply" },
  { image: lucrativeReturns, title: "Lucrative Returns" },
  { image: campfirePit, title: "Campfire Pit" },
  { image: gym, title: "Gym" },
  { image: park, title: "3.02 Acre Park" },
  { image: playArea, title: "Kids' Fun Zone" },
  { image: stormDrains, title: "Storm Drains" },
  { image: yogaDeck, title: "Yoga Deck" },
  { image: cyclingTrack, title: "Fitness Trails" },
  { image: verdantLandscape, title: "Green Oasis" },

];

const BlogAmenities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    rows: 2,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          rows: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        }
      }
    ]
  };

  return (
    <div className="container-fluid py-3 ">
      <div className="container h-100">
        {/* <h2 className="text-center mb-4 font1" style={{ color: '#255946' }}>Amenities</h2> */}
        <Slider {...settings}>
          {amenitiesData.map((amenity, index) => (
            <div key={index} className="p-2">
              <Card className="h-100 amenity-card">
                <Card.Body className="d-flex flex-column align-items-center h-50">
                  <img title='Amenities' src={amenity.image} alt={amenity.title} className="amenity-image mb-2" height={'100%'} width={'50%'} />
                  <Card.Title className="text-center para-color">{amenity.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogAmenities;
