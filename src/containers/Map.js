import React from 'react';
import { connect } from 'react-redux';
import MapComponent from '../components/Map/Map';
import { advanceStep } from './module';
import WithData from '../data/WithData';
const WithInstallations = WithData.polling.WithInstallations;

const Map = ({ mode, onAdvanceStep }) => {
  const isModeAddInstallation1 = mode === 'add_installation:1';
  return (
    <WithInstallations>
      {({ data }) => {
        window.dd = data;
        return (
          <MapComponent
            customMarkers={data}
            cursorType={isModeAddInstallation1 ? 'crosshair' : undefined}
            onLocationSelected={location => {
              if (isModeAddInstallation1) {
                onAdvanceStep(location);
              }
            }}
          />
        )
      }}
    </WithInstallations>
  );
};

const mapStateToProps = state => ({
  mode: state.getIn(['reducer', 'mode']),
});

const mapDispatchToProps = dispatch => ({
  onAdvanceStep: location => dispatch(advanceStep(location)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Map);

