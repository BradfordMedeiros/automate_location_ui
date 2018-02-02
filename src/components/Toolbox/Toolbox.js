
import React from 'react';
import './style.css';

const options = [
  'icon',
  '3D',
  'geo',
  'marker',
  'move',
  'delete',
];

const styles = {
  toolbox: isVisible => ({
    animation: isVisible ? '0.5s toolbox_slide_in forwards'  : '0.5s toolbox_slide_out forwards',
  }),
  icon: isSelected => ({
    color: isSelected  ? 'steelblue' : undefined,
  })
};


const Toolbox = ({ isVisible, onToolChange, selectedTool }) => (
  <div style={styles.toolbox(isVisible)} id="toolbox_outer">
    {options.map(option => (
      <div
        onClick={() => { onToolChange(option)}}
        style={styles.icon(selectedTool === option)}
        className="toolbox_icon"
      >
        {option}
      </div>
    ))}
  </div>
);

export default Toolbox;