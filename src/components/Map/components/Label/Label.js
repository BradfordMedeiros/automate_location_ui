
import React, { PropTypes } from 'react';
import { Marker } from 'react-map-gl';
import './style.css';

const Label = ({ description, latitude, longitude }) => {
  return (
    <Marker latitude={latitude}  longitude={longitude}  >
      <div className="map_custom_label">
        {description}
      </div>
    </Marker>
  );
}

Label.propTypes = {
  description: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
  onClick: PropTypes.func,
};

export default Label;