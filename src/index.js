import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from './util/logger';
import reducer from './containers/module';
import Map from './containers/Map';
import { container as ControlPanel } from './containers/ControlPanel';
import { container as ContentPanel } from './containers/ContentPanel';
import { container as Actions } from './containers/Actions';
import { container as Toolbar } from './containers/Toolbar';

/*
 notes: create pull out drawer on left size to bring up content editor view
 this will be a nice toolbar that can select between adding markers, 3d objects, other tags, etc
 */


const reducers = combineReducers({ reducer });
const store = createStore(reducers, applyMiddleware(logger(), thunk));

const controlPanelWidth = 400;

const App = () => (
  <Provider store={store}>
    <div style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
      <ControlPanel style={{ position: 'absolute', top: 0, right: 0, width: controlPanelWidth, height: '100%', zIndex: 1 }} />
      <ContentPanel style={{ zIndex: 1 }} />
      <div style={{ position: 'absolute', zIndex: 100, width: '100%'  }}>
        <Toolbar negativeWidth={controlPanelWidth} />
        <Actions negativeWidth={controlPanelWidth} />
      </div>
      <div style={{ position: 'relative', left: 0,  right: 0, top: 0, bottom: 0, overflow: 'hidden' }}>
        <Map />
      </div>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
