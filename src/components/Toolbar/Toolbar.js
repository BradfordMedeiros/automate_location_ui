import React from 'react';
import './style.css';

const Toolbar = ({ negativeWidth, options, selectedContent, onContentSelected, style }) => (
  <div style={{
    ...style,
    color: 'whitesmoke',
    width: `calc(100% - ${negativeWidth}px)`,
    background: 'rgb(10,10,10)',
    display: 'flex',
    justifyContent: 'space-around',
    overflowX: 'auto',
    padding: 18,
    boxShadow: '0px 0px 4px 1px black',
  }}>
    {options.map(option => (
      <div
        className="option"
        style={{ color: selectedContent === option ? 'steelblue' : undefined }}
        onClick={() => {
          onContentSelected(option);
        }}
      >
        {option}
      </div>
    ))}
  </div>
);

export default Toolbar;