
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

const style = isVisible => ({
  animation: isVisible ? '0.5s toolbox_slide_in forwards'  : '0.5s toolbox_slide_out forwards',
});

const Toolbox = ({ isVisible }) => (
  <div style={style(isVisible)} id="toolbox_outer">
    {options.map(option => <div className="toolbox_icon">{option}</div>)}
  </div>
);

export default Toolbox;