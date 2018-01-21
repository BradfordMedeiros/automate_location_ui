
import React, { Component } from 'react';
import './style.css';

class ContentPanel extends Component {
  state = {
    isExpanded: false,
  }
  render() {
    window.toggle = () => {
      this.setState({
        isExpanded: !this.state.isExpanded,
      })
    }
    const { style } = this.props;
    return (
      <div
        style={{animation: this.state.isExpanded ? 'panel_expand 0.5s forwards' : 'panel_nonexpand 0.5s forwards', ...style}}
        id="content_panel">
        control panel
      </div>
    )
  }
}

export default ContentPanel;