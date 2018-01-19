import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map/Map';
import ControlPanel from './ControlPanel/ControlPanel';

const controlPanelWidth = 400;

class App extends Component {
  state = {
    viewport: null,
    content: 'View Installations',
  };
  render () {
    return (
      <div style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
          <Map
            toolbarNegativeWidth={controlPanelWidth}
            viewport={this.state.viewport}
            onViewportChanged={viewport => { this.setState({ viewport })}}
            selectedContent={this.state.content}
            onContentSelected={content => {
              console.log('content: ', content);
              this.setState({
                content,
              })
            }}
          />
        </div>
        <ControlPanel
          contentType={this.state.content}
          style={{ position: 'absolute', top: 0, right: 0, width: controlPanelWidth, height: '100%' }}
        />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
