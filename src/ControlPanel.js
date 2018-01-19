import React, { Component } from 'react';

const styles = {
  outer: {
    background: 'linear-gradient(rgba(210,210,210,0.5), rgba(210,210,210,0.8))',
    boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.5)',
  },
};

class ControlPanel extends Component {
  render() {
    const {style} = this.props;
    return (
      <div style={{...style, ...styles.outer }}>
        <button onClick={() => {
          const newViewport = this.state.viewport;
          newViewport.longitude = newViewport.longitude + 10;
          this.setState({viewport: newViewport});
        }}>
          Click to zoom
        </button>
      </div>
    )
  }
}

export default ControlPanel;