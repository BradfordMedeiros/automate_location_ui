
import React, { PropTypes } from 'react';
import { Marker } from 'react-map-gl';
import './style.css';

const CustomMarker = ({ name, latitude, longitude, zoom, onClick }) => {
  const showFullMarker = zoom > 10;
  return (
    <Marker latitude={latitude}  longitude={longitude} /*offsetLeft={-20} offsetTop={-10}*/ >
      <div onClick={onClick} className="custom_marker" style={{ padding: showFullMarker ? 24 : 10  }}>
        {name}
      </div>
    </Marker>
  );
}

CustomMarker.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
  onClick: PropTypes.func,
};

export default CustomMarker;