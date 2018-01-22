
import React, { PropTypes } from 'react';
import { Marker } from 'react-map-gl';


const CustomMarker = ({ latitude, longitude }) => (
  <Marker  latitude={latitude}  longitude={longitude} /*offsetLeft={-20} offsetTop={-10}*/ >
    <div style={{ padding: 24, background: 'green' }}>
      You are here
    </div>
  </Marker>
);

CustomMarker.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default CustomMarker;