
import React, { PropTypes } from 'react';
import { Marker } from 'react-map-gl';
import './style.css';

const CustomMarker = ({ description, latitude, longitude, zoom, onClick }) => {
  const showFullMarker = zoom > 10;
  return (
    <Marker latitude={latitude}  longitude={longitude}  >
      <div className="custom_marker">
        <div onClick={onClick} className="custom_marker_icon" style={{ padding: showFullMarker ? 24 : 10  }} />
        {description}
      </div>
    </Marker>
  );
}

CustomMarker.propTypes = {
  description: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
  onClick: PropTypes.func,
};

export default CustomMarker;