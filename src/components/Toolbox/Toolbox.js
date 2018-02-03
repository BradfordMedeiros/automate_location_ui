
import React from 'react';
import LabelDetail from './components/LabelDetail';
import IconDetail  from './components/IconDetail';
import ThreeDDetail from './components/3DDetail';
import MarkerDetail from './components/MarkerDetail';
import GeoDetail from './components/GeoDetail';

import './style.css';

const options = {
  move: {
  },
  delete: {

  },
  label: {
    hasDetail: true,
    component: LabelDetail,
  },
  icon: {
    hasDetail: true,
    component: IconDetail,
  },
  '3D': {
    hasDetail: true,
    component: ThreeDDetail,
  },
  geo: {
    hasDetail: true,
    component: GeoDetail,
  },
  marker: {
    hasDetail: true,
    component: MarkerDetail,
  },
};




const styles = {
  toolbox: isVisible => ({
    animation: isVisible ? '0.2s toolbox_slide_in forwards'  : '0.2s toolbox_slide_out forwards',
  }),
  toolboxExpanded: isVisible => ({
    animation: isVisible ? '0.5s toolbox_expanded_slide_in forwards'  : '0.2s toolbox_expanded_slide_out forwards',
  }),
  icon: isSelected => ({
    color: isSelected  ? 'steelblue' : undefined,
  })
};

const Toolbox = ({ isVisible, onToolChange, selectedTool, showDetailView }) => (
  <div>
    <div style={styles.toolboxExpanded(showDetailView && options[selectedTool] && options[selectedTool].hasDetail)} id="toolbox_expanded">
      {options[selectedTool] && options[selectedTool].hasDetail && options[selectedTool].component()}
    </div>
    <div style={styles.toolbox(isVisible)} id="toolbox_outer">
      {Object.keys(options).map(option => (
        <div
          onClick={() => { onToolChange(option)}}
          style={styles.icon(selectedTool === option)}
          className="toolbox_icon"
        >
          {option}
        </div>
      ))}
    </div>
  </div>
);

export default Toolbox;