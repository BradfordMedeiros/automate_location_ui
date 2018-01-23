import React from 'react';
import { connect } from 'react-redux';
import MapComponent from '../components/Map/Map';

const Map = ({ mode }) => (
  <MapComponent
    cursorType={mode ===  'add_installation' ? 'crosshair': undefined}
    onLocationSelected={(location) => {
      console.log('location: ', location);
    }}
  />
);

const mapStateToProps = state => ({
  mode: state.getIn(['reducer', 'mode']),
});

export const container = connect(mapStateToProps)(Map);

