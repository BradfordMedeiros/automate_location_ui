import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMapGL from 'react-map-gl';

window.p = process;
class Map extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoiYnJhZGZvcmRtZWRlaXJvcyIsImEiOiJjamNpbzlyZHYzcjN0MzNsbDhhMTYwZGpjIn0.Av3F9QUzoVSBi7g6HQt_TA"
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

const App = () => (
  <div>
    <Map />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
