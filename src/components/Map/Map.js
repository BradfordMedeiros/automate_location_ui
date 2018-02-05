import React, { PropTypes, Component } from 'react';
import Dimensions from 'react-dimensions';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Installation from './components/InstallationLabel/Installation';
import CustomMarker from './components/CustomMarker/CustomMarker';
import MqttMarker from './components/MqttMarker/MqttMarker';
import Label from './components/Label/Label';

const flattenField = (installations, field) => {
  const things = [];
  installations.forEach(installation => {
    if (installation[field]){
      installation[field].forEach(thing => {
        things.push(thing);
      })
    }
  });
  return things;
};

class Map extends Component {
  state = {
    viewport: null,
  }
  onViewportChanged = viewport => {
    this.setState({ viewport: viewport });
    this.props.onLocationChanged(viewport);
  };
  render() {
    const { onLocationSelected,  cursorType, installations, onSetLocationFunc, onMarkerClick } = this.props;
    const viewport = this.state.viewport;

    const initialLocation = this.props.initialLocation || { latitude: 37, longitude: -122, zoom: 8 };
    const defaultViewport = {
      width: this.props.containerWidth,
      height: this.props.containerHeight,
      latitude: initialLocation.latitude,
      longitude: initialLocation.longitude,
      zoom: initialLocation.zoom,
    };

    const viewportToRender  = viewport ? viewport : defaultViewport;

    return (
      <ReactMapGL
        ref={ref => {
          if (ref){
            onSetLocationFunc(({ latitude, longitude, zoom = 12 }) => {
              const newViewport =  {...viewportToRender, latitude, longitude, zoom };
              this.setState({ viewport: newViewport });
            })
          }
        }}
        style={{
          cursor: cursorType ? cursorType : undefined,
        }}
        mapStyle={"mapbox://styles/mapbox/satellite-v9"}
        {...viewportToRender}
        onClick={(event,v) => {
          if (onLocationSelected){
            onLocationSelected({ longitude: event.lngLat[0], latitude: event.lngLat[1] });
          }
        }}
        mapboxApiAccessToken="pk.eyJ1IjoiYnJhZGZvcmRtZWRlaXJvcyIsImEiOiJjamNpbzlyZHYzcjN0MzNsbDhhMTYwZGpjIn0.Av3F9QUzoVSBi7g6HQt_TA"
        onViewportChange={this.onViewportChanged}
      >
        {installations.map(installation => (
            <Installation
              zoom={viewport && viewport.zoom}
              name={installation.name}
              onClick={() => onMarkerClick(installation)}
              latitude={installation.location.latitude}
              longitude={installation.location.longitude}
            />
        ))}
        {flattenField(installations, 'markers').map(marker => (
          <CustomMarker
            latitude={marker.latitude}
            longitude={marker.longitude}
            zoom={viewport && viewport.zoom}
            description={marker.description}
            onClick={() => {
            }}
          />
        ))}
        {flattenField(installations, 'labels').map(label => (
          <Label
            latitude={label.latitude}
            longitude={label.longitude}
            zoom={viewport && viewport.zoom}
            description={label.description}
            onClick={() => {
            }}
          />
        ))}
        {flattenField(installations, 'mqttMarkers').map(marker => (
          <MqttMarker
            topic={marker.topic}
            zoom={viewport && viewport.zoom}
            description={marker.description}
            onClick={() => {
            }}
          />
        ))}
      </ReactMapGL>
    );
  }
}

Map.propTypes = {
  cursorType: PropTypes.string,
  initialLocation: PropTypes.object,
  onLocationSelected: PropTypes.func,
  onMarkerClick: PropTypes.func,
  installations: PropTypes.arrayOf(PropTypes.object),
  onSetLocationFunc: PropTypes.func,
  onLocationChanged: PropTypes.func,
};

export default Dimensions()(Map);