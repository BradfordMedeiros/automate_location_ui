import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map/Map';
import ControlPanel from './ControlPanel';

class App extends Component {
  state = {
    viewport: null
  };
  render () {
    return (
      <div style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
          <Map viewport={this.state.viewport} onViewportChanged={viewport => { this.setState({ viewport })}} />
        </div>
        <ControlPanel style={{ position: 'absolute', top: 0, right: 0, width: 400, height: '100%' }}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
