import React, { PropTypes, Component } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {SVGOverlay, NavigationControl} from 'react-map-gl';

import CustomMarker from './components/CustomMarker';

function redraw({project}) {
  const [cx, cy] = project([-122, 37]);
  return <circle cx={cx} cy={cy} r={4} fill="blue" />;
}

const defaultViewport = {
  width: 800,
  height: 1000,
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 8
};

class Map extends Component {
  render() {
    const { viewport, onViewportChanged } = this.props;
    const viewportToRender  = viewport ? viewport : defaultViewport;
    return (
      <ReactMapGL
        width="100%"
        style={{ width: '100%' }}
        //mapStyle="mapbox://styles/mapbox/dark-v9"
        {...viewportToRender}
        onClick={(event,v) => {
          window.e = event;
          window.ee = v;
          console.log('map clicked');
        }}
        mapboxApiAccessToken="pk.eyJ1IjoiYnJhZGZvcmRtZWRlaXJvcyIsImEiOiJjamNpbzlyZHYzcjN0MzNsbDhhMTYwZGpjIn0.Av3F9QUzoVSBi7g6HQt_TA"
        onViewportChange={onViewportChanged}
      >
        <SVGOverlay redraw={redraw} />

        <div style={{position: 'absolute', right: 0}}>
          <NavigationControl onViewportChange={viewort => this.setState({ viewport })} />
        </div>
        <CustomMarker latitude={47.78} longitude={-122.41}  />
      </ReactMapGL>
    );
  }
}

Map.propTypes = {
  viewport: PropTypes.object,
  onViewportChanged: PropTypes.object,
};

export default Map;