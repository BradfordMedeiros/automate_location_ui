import React, { Component } from 'react';

class ControlPanel extends Component {
  render() {
    const {style} = this.props;
    return (
      <div style={style}>
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