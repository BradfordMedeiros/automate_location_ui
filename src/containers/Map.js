import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapComponent from '../components/Map/Map';
import { advanceStep, setSelectedInstallation } from './module';
import WithData from '../data/WithData';

const WithInstallations = WithData.polling.WithInstallations;

class Map extends Component {
  componentWillMount() {
    console.error('------component mounting---------');
  }
  render() {
    const {mode, onAdvanceStep, onSetSelectedInstallation, onSetLocationFunc, initialLocation, onLocationChanged } = this.props;
    const isModeAddInstallation1 = mode === 'add_installation:1';

    return (
      <WithInstallations>
        {({data}) => {
          return (
            <MapComponent
              initialLocation={initialLocation}
              onLocationChanged={onLocationChanged}
              onSetLocationFunc={onSetLocationFunc}
              customMarkers={data}
              cursorType={isModeAddInstallation1 ? 'crosshair' : undefined}
              onMarkerClick={installation => {
                onSetSelectedInstallation(installation);
              }}
              onLocationSelected={location => {
                if (isModeAddInstallation1) {
                  onAdvanceStep(location);
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
});

const mapDispatchToProps = dispatch => ({
  onAdvanceStep: location => dispatch(advanceStep(location)),
  onSetSelectedInstallation: installation => dispatch(setSelectedInstallation(installation)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Map);

