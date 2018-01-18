import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map/Map';
import ControlPanel from './ControlPanel';

class App extends Component {
  state = { viewport: null };

  render () {
    return (
      <div style={{ border: '1px solid red', background: 'black', position: 'absolute', width: '100vw', height: '100vh' }}>
        <div style={{ position: 'absolute', width: 'calc(100% - 400px)', border: '1px solid yellow' }}>
          <Map viewport={this.state.viewport} onViewportChanged={viewport => { this.setState({ viewport })}} />
        </div>
        <ControlPanel style={{ position: 'absolute', background: 'green', right: 0, width: 400, height: '100%' }}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
