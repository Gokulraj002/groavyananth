import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Location from '../imagesTimber/location-map.jpg';

const TimberLocationMap = () => {
  const openImageInNewTab = () => {
    // window.open(Location, '_self');
  };

  return (
    <div className='container-fluid '>
      <div className='location-image'>
        <h2 className='text-center py-2 font11' style={{color:'#255946'}}>Location Map</h2>
      <div className='location-zoom  '>
        <Zoom>
          <img
            className='w-100 zoomable-image '
            src={Location}
            width={'100%'} height={'auto'}

            alt='Elegant Orcahrds Location'
            onClick={openImageInNewTab}
          />
        </Zoom>
      </div>
      </div>
 
    </div>
  );
};

export default TimberLocationMap;
