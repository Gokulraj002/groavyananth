import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './css/Amenities.css';
// Import images
import entrancePortal from './AmenitiesIcons/Entrance Portal.svg';
import clubHouse from './AmenitiesIcons/Club House.svg';
import swimmingPool from'./AmenitiesIcons/swimming pool.svg';
import amphitheatre from './AmenitiesIcons/amphitheatre.svg';
import cafeteria from './AmenitiesIcons/cafeteria.svg';
import sandalwoodTrees from './AmenitiesIcons/sandalwoodTrees.svg';
import wideRoad from './AmenitiesIcons/wideRoad.svg';
import electricitySupply from './AmenitiesIcons/electricitySupply.svg';
import waterSupply from'./AmenitiesIcons/waterSupply.svg';
import verdantLandscape from './AmenitiesIcons/verdantLandscape.svg';
import lucrativeReturns from './AmenitiesIcons/lucrativeReturns.svg';
import campfirePit from './AmenitiesIcons/campfirePit.svg';
import gym from './AmenitiesIcons/gym.svg';
import park from './AmenitiesIcons/park.svg';
import playArea from'./AmenitiesIcons/playArea.svg';
import stormDrains from './AmenitiesIcons/stormDrains.svg';
import yogaDeck from './AmenitiesIcons/yogaDeck.svg';
import cyclingTrack from './AmenitiesIcons/cyclingTrack.svg';
 
const amenitiesData = [
  { image: entrancePortal, title: "Entrance Portal", text: "Grand entrance with security and design." },
  { image: clubHouse, title: "Club House", text: "A place for gatherings and activities." },
  { image: swimmingPool, title: "Swimming Pool", text: "Relaxing pool area for all ages." },
  { image: amphitheatre, title: "Amphitheatre in Park", text: "Open-air venue for events and performances." },
  { image: cafeteria, title: "Cafeteria", text: "Cozy cafeteria for casual dining." },
  { image: sandalwoodTrees, title: "Red Sandalwood Trees", text: "Red sandalwood trees and fruits." },
  { image: wideRoad, title: "All are 30 Feet Wide Road", text: "Sturdy hard road inside the project." },
  { image: electricitySupply, title: "Continuous Electricity Supply", text: "Continuous electricity supply for comfort." },
  { image: waterSupply, title: "Ample Water Supply", text: "Ample water supply from 5 borewells." },
  { image: verdantLandscape, title: "Verdant Landscape", text: "Verdant landscape with 25 trees per plot." },
  { image: lucrativeReturns, title: "Lucrative Returns", text: "Lucrative returns from red sandalwood trees." },
  { image: campfirePit, title: "Campfire Pit", text: "Campfire pit for gatherings." },
  { image: gym, title: "Gym", text: "Fully equipped gym." },
  { image: park, title: "3.02 Acre Park", text: "1.25 acre park inside the project." },
  { image: playArea, title: "Children's Play Area", text: "Safe and fun play area for children." },
  { image: stormDrains, title: "Storm Drains", text: "Efficient storm water drainage system." },
  { image: yogaDeck, title: "Yoga Deck", text: "Serene yoga deck for relaxation and meditation." },
  { image: cyclingTrack, title: "Cycling and Jogging Tracks", text: "Dedicated cycling and jogging tracks." }
];
 
const Amenities = () => {
  return (
    <div className="container-fluid py-5 bg-light ">
      <div className="container">
        <h2 className="text-center mb-4 font1" style={{color:'#255946'}}>Amenities</h2>
        <Row>
          {amenitiesData.map((amenity, index) => (
            <Col key={index} className="col-6 col-md-4 col-lg-2 mb-4">
              <Card className="h-100 amenity-card">
                <Card.Body className="d-flex flex-column align-items-center">
                  <img title='Aminities' src={amenity.image} alt={amenity.title} className="amenity-image mb-2" height={'100%'}
                   width={'50%'} />
                  <Card.Title className="text-center para-color">{amenity.title}</Card.Title>
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
 
export default Amenities;
 
 