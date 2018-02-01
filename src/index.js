import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from './util/logger';
import reducer from './containers/module';
import { container as Map } from './containers/Map';
import { container as ControlPanel } from './containers/ControlPanel';
import { container as ContentPanel } from './containers/ContentPanel';
import { container as Actions } from './containers/Actions';
import { container as Toolbar } from './containers/Toolbar';
import { container as HelpInfo } from './containers/HelpInfo';
import { container as Toolbox } from './containers/Toolbox';

import WithData from './data/WithData';

/*
 notes: create pull out drawer on left size to bring up content editor view
 this will be a nice toolbar that can select between adding markers, 3d objects, other tags, etc
 */


const reducers = combineReducers({ reducer });
const store = createStore(reducers, applyMiddleware(logger(), thunk));

const controlPanelWidth = 400;
const getDefaultLocation = WithData.requests.getDefaultLocation;
const setDefaultLocation = WithData.requests.setDefaultLocation;


class App extends Component {
  location = null;

  render() {
    return (
      <Provider store={store}>
        <div style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
          <ControlPanel style={{ position: 'absolute', top: 0, right: 0, width: controlPanelWidth, bottom: 0, zIndex: 1 }} />
          <Toolbox />

          <ContentPanel  style={{ zIndex: 1 }} />
          <div style={{ position: 'absolute', zIndex: 100, width: '100%'  }}>
            <Toolbar negativeWidth={controlPanelWidth} />
            <Actions
              negativeWidth={controlPanelWidth}
              onGoToOnMap={() => {
                const installation = store.getState().getIn(['reducer','selectedInstallation']);
                this.setLocation(installation.location);
              }}
              onSetLocationAsDefault={() => {
                if (this.location){
                  setDefaultLocation(this.location);
                }
              }}
              onGoToDefaultLocation={() => {
                console.error('jump to default location');
                console.error('default location is: ', getDefaultLocation());
                this.setLocation(getDefaultLocation());
              }}
              onJumpToAutomate={() => {
                console.error('not yet implemented');
              }}
            />
            <HelpInfo />
          </div>
          <div style={{ position: 'relative', left: 0,  right: 0, top: 0, bottom: 0, overflow: 'hidden' }}>
            <Map
              initialLocation={getDefaultLocation()}
              onLocationChanged={location => {
                this.location = location;
              }}
              onSetLocationFunc={setLocationFunc => {
                this.setLocation = setLocationFunc;
              }}
            />
          </div>
        </div>
      </Provider>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
