import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapComponent from '../components/Map/Map';
import { advanceStep, setSelectedInstallation } from './module';
import WithData from '../data/WithData';

const WithInstallations = WithData.polling.WithInstallations;

class Map extends Component {
  render() {
    const {mode, onAdvanceStep, onSetSelectedInstallation, onSetLocationFunc, initialLocation, onLocationChanged, modeActions} = this.props;
    const isModeAddInstallation1 = mode === 'add_installation:1';
    const isModeEditInstallation = mode === 'edit_installation:0';

    return (
      <WithInstallations>
        {({data}) => {
          return (
            <MapComponent
              initialLocation={initialLocation}
              onLocationChanged={onLocationChanged}
              onSetLocationFunc={onSetLocationFunc}
              customMarkers={data}
              cursorType={(isModeAddInstallation1 || isModeEditInstallation) ? 'crosshair' : undefined}
              onMarkerClick={installation => {
                onSetSelectedInstallation(installation);
              }}
              onLocationSelected={location => {
                if (isModeAddInstallation1) {
                  onAdvanceStep(location);
                } else if (isModeEditInstallation) {
                  onAdvanceStep({location, modeActions});
                }
              }}
            />
          )
        }}
      </WithInstallations>
    )
  }
}

const mapStateToProps = state => ({
  mode: state.getIn(['reducer', 'mode']),
  modeActions: state.getIn(['reducer', 'modeActions']),
});

const mapDispatchToProps = dispatch => ({
  onAdvanceStep: data => dispatch(advanceStep(data)),
  onSetSelectedInstallation: installation => dispatch(setSelectedInstallation(installation)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Map);

