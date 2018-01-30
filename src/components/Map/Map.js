import React, { PropTypes, Component } from 'react';
import Dimensions from 'react-dimensions';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
//import {SVGOverlay, NavigationControl} from 'react-map-gl';
import CustomMarker from './components/CustomMarker/CustomMarker';

/*function redraw({project}) {
  const [cx, cy] = project([-122, 37]);
  return <circle cx={cx} cy={cy} r={4} fill="blue" />;
}*/

class Map extends Component {
  state = {
    viewport: null,
  }
  onViewportChanged = viewport => { this.setState({ viewport: viewport })}
  render() {
    const { onLocationSelected, cursorType, customMarkers, onSetLocationFunc, onMarkerClick } = this.props;
    const viewport = this.state.viewport;

    const defaultViewport = {
      width: this.props.containerWidth,
      height: this.props.containerHeight,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    };

    const viewportToRender  = viewport ? viewport : defaultViewport;

    return (
      <ReactMapGL
        ref={ref => {
          if (ref){
            onSetLocationFunc(({ latitude, longitude }) => {
              const newViewport =  {...viewportToRender, latitude, longitude, zoom: 12 };
              this.setState({ viewport: newViewport });
            })
          }
        }}
        style={{
          cursor: cursorType ? cursorType : undefined,
        }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        {...viewportToRender}
        onClick={(event,v) => {
          if (onLocationSelected){
            onLocationSelected({ longitude: event.lngLat[0], latitude: event.lngLat[1] });
          }
        }}
        mapboxApiAccessToken="pk.eyJ1IjoiYnJhZGZvcmRtZWRlaXJvcyIsImEiOiJjamNpbzlyZHYzcjN0MzNsbDhhMTYwZGpjIn0.Av3F9QUzoVSBi7g6HQt_TA"
        onViewportChange={this.onViewportChanged}
      >
        {customMarkers.map(marker => (
          <CustomMarker
            zoom={viewport && viewport.zoom}
            name={marker.name}
            onClick={() => onMarkerClick(marker)}
            latitude={marker.location.latitude}
            longitude={marker.location.longitude}
          />
        ))}
        {/*<SVGOverlay redraw={redraw} />*/}
      </ReactMapGL>
    );
  }
}

Map.propTypes = {
  cursorType: PropTypes.string,
  onLocationSelected: PropTypes.func,
  onMarkerClick: PropTypes.func,
  customMarkers: PropTypes.arrayOf(PropTypes.object),
  onSetLocationFunc: PropTypes.func,
};

export default Dimensions()(Map);