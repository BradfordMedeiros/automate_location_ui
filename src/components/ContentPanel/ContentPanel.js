
import React from 'react';
import './style.css';

const ContentPanel = ({ isExpanded, style }) => (
  <div
    style={{animation: isExpanded ? 'panel_expand 0.2s forwards' : 'panel_nonexpand 0.2s forwards', ...style}}
    id="content_panel">
    control panel
  </div>
);

export default ContentPanel;