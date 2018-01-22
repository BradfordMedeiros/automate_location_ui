import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map/Map';
import ControlPanel from './ControlPanel/ControlPanel';
import ContentPanel from './ContentPanel/ContentPanel';
import Actions from './Actions/Actions';
import Toolbar from './Toolbar/Toolbar';


/*
  notes: create pull out drawer on left size to bring up content editor view
  this will be a nice toolbar that can select between adding markers, 3d objects, other tags, etc



 */
const controlPanelWidth = 400;

const actionMap = {
  'View Installations': ['Goto on Map', 'Summary Info', "Jump To Automate"],
  'Manage Installations': ['Add New','Edit Layout', 'Edit Data Sources', 'Delete Selected'],
  'Misc': ['Set Default Start Point',],
};

class App extends Component {
  state = {
    viewport: null,
    content: 'View Installations',
  };

  render () {
    const actions = actionMap[this.state.content];

    return (
      <div style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
        <ControlPanel
          contentType={this.state.content}
          style={{ position: 'absolute', top: 0, right: 0, width: controlPanelWidth, height: '100%', zIndex: 1 }}
        />
        <ContentPanel style={{ zIndex: 1 }} />
        <div style={{ position: 'absolute', zIndex: 100, width: '100%'  }}>
          <Toolbar
            options={Object.keys(actionMap)}
            negativeWidth={controlPanelWidth}
            selectedContent={this.state.content}
            onContentSelected={content => {
              console.log('content selected');
              this.setState({
                content,
              })
            }}
          />
          <Actions
            options={actions}
            negativeWidth={controlPanelWidth}
            selectedContent={this.state.content}
            onContentSelected={() => {

            }}
          />
        </div>
        <div style={{ position: 'relative', left: 0,  right: 0, top: 0, bottom: 0, overflow: 'hidden' }}>
          <Map
            viewport={this.state.viewport}
            onViewportChanged={viewport => { this.setState({ viewport })}}
            selectedContent={this.state.content}
          />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
