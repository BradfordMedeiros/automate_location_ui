import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMapGL, {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {SVGOverlay, Marker, NavigationControl} from 'react-map-gl';


function redraw({project}) {
  const [cx, cy] = project([-122, 37]);
  return <circle cx={cx} cy={cy} r={4} fill="blue" />;
}

class Map extends Component {
  state = {
    viewport: {
      width: 800,
      height: 1000,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        //mapStyle="mapbox://styles/mapbox/dark-v9"

        ref={ref => {
          window.r = ref;
        }}
        onClick={(event,v) => {
          window.e = event;
          window.ee = v;
          console.log('map clicked');
        }}
        transitionDuration={2000}
        transitionInterpolator={new LinearInterpolator()}

        mapboxApiAccessToken="pk.eyJ1IjoiYnJhZGZvcmRtZWRlaXJvcyIsImEiOiJjamNpbzlyZHYzcjN0MzNsbDhhMTYwZGpjIn0.Av3F9QUzoVSBi7g6HQt_TA"
        {...this.state.viewport}
        onViewportChange={(viewport) => {
          window.v = viewport;
          this.setState({viewport})
        }}
      >
        <SVGOverlay redraw={redraw} />
        <button onClick={() => {
          console.log('button pressed');
          const newViewport = this.state.viewport;
          newViewport.longitude = newViewport.longitude + 10;
          this.setState({
            viewport: newViewport,
          })
        }}>
          Click to zoom
        </button>
        <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
          <div
            style={{ padding: 24, background: 'red' }}
            onClick={() => {
              console.log('clciked on some marker');
            }}
          >
            You are here
          </div>
        </Marker>
        <div style={{position: 'absolute', right: 0}}>
          <NavigationControl onViewportChange={viewort => this.setState({ viewport })} />
        </div>

      </ReactMapGL>
    );
  }
}

const App = () => (
  <div style={{ border: '1px solid red', background: 'black' }}>
    <Map />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
