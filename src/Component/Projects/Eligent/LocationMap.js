import React from 'react';
import Location from './ElegantImages/location-map.jpg';

const LocationMap = () => {

  // Function to open image in a new tab
  const openInNewTab = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <div className='container-fluid'>
      <div className='location-image'>
        <h2 className='text-center py-2 font1' style={{color:'#255946'}}>Location Map</h2>
        <div className='location-zoom' >
          <img
            className='w-100 zoomable-image'
            src={Location}
            style={{cursor:'pointer'}}
            alt='Elegant orchards Location'
            width={'100%'} height={'auto'}
            onClick={() => openInNewTab(Location)} // Open image in new tab on click
          />
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
