import React from 'react';
import './style.css';

const Toolbar = ({ negativeWidth, options, selectedContent, onContentSelected, style }) => (
  <div style={{
    ...style,
    color: 'whitesmoke',
    width: `calc(100% - ${negativeWidth}px)`,
    background: 'rgb(10,10,10)',
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'auto',
    padding: 8,
    boxShadow: '0px 0px 4px 1px black',
  }}>
    {options && options.map(option => (
      <div
        className="action"
      >
        {option}
      </div>
    ))}
  </div>
);

export default Toolbar;