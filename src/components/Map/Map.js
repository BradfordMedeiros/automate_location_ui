import React, { PropTypes, Component } from 'react';
import Dimensions from 'react-dimensions';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
//import {SVGOverlay, NavigationControl} from 'react-map-gl';
//import CustomMarker from './components/CustomMarker';

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
    const { onLocationSelected, cursorType } = this.props;
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
        style={{
          cursor: cursorType ? cursorType : undefined,
        }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        {...viewportToRender}
        onClick={(event,v) => {
          window.e = event;
          if (onLocationSelected){
            onLocationSelected({ longitude: e.lngLat[0], latitude: e.lngLat[1] });
          }
        }}
        mapboxApiAccessToken="pk.eyJ1IjoiYnJhZGZvcmRtZWRlaXJvcyIsImEiOiJjamNpbzlyZHYzcjN0MzNsbDhhMTYwZGpjIn0.Av3F9QUzoVSBi7g6HQt_TA"
        onViewportChange={this.onViewportChanged}
      >
        {/*<SVGOverlay redraw={redraw} />*/}
        {/*<CustomMarker latitude={47.78} longitude={-122.41}  />*/}
      </ReactMapGL>
    );
  }
}

Map.propTypes = {
  cursorType: PropTypes.string,
  onLocationSelected: PropTypes.func,
};

export default Dimensions()(Map);