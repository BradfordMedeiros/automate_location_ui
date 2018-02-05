
import React, { PropTypes } from 'react';
import { Marker } from 'react-map-gl';
import './style.css';

const Installation = ({ name, latitude, longitude, zoom, onClick }) => {
  const showFullMarker = zoom > 10;
  return (
    <Marker latitude={latitude}  longitude={longitude} >
      <div onClick={onClick} className="installation" style={{ padding: showFullMarker ? 24 : 10  }}>
        {name}
      </div>
    </Marker>
  );
}

Installation.propTypes = {
  name: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
  onClick: PropTypes.func,
};

export default Installation;